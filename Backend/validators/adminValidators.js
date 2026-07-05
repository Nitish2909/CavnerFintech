import { body } from "express-validator";

export const loanProductValidator = [
  body("name").trim().notEmpty().withMessage("Name required"),
  body("slug").trim().notEmpty().matches(/^[a-z0-9-]+$/).withMessage("Slug must be lowercase, hyphens only"),
  body("category").isIn(["personal", "home", "education", "business", "other"]),
  body("interestRateMin").optional().isNumeric().toFloat(),
  body("interestRateMax").optional().isNumeric().toFloat(),
  body("minAmount").optional().isNumeric().toFloat(),
  body("maxAmount").optional().isNumeric().toFloat(),
];

export const creditCardProductValidator = [
  body("name").trim().notEmpty(),
  body("slug").trim().notEmpty().matches(/^[a-z0-9-]+$/),
  body("issuer").trim().notEmpty(),
  body("cardType").optional().isIn(["visa", "mastercard", "rupay", "amex"]),
  body("category").optional().isIn(["cashback", "rewards", "travel", "fuel", "shopping", "premium", "business"]),
  body("annualFee").optional().isNumeric().toFloat(),
  body("joiningFee").optional().isNumeric().toFloat(),
];

export const adminLoginValidator = [
  body("email").trim().isEmail().normalizeEmail(),
  body("password").notEmpty(),
];
