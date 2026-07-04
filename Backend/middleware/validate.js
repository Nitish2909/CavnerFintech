import { validationResult } from "express-validator";
import { ApiError } from "../utils/apiResponse.js";

export const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) return next();
  const extracted = errors.array().map((e) => ({ field: e.path, message: e.msg }));
  next(new ApiError("Validation failed", 400, extracted));
};
