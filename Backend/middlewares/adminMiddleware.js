import jwt from "jsonwebtoken";
import Admin from "../models/Admin.js";
import { verifyAdminToken } from "../utils/jwt.js";
import { ApiError } from "../utils/apiResponse.js";

export const protectAdmin = async (req, res, next) => {
  try {
    let token;
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith("Bearer ")) {
      token = authHeader.split(" ")[1];
    } else if (req.cookies?.adminToken) {
      token = req.cookies.adminToken;
    }

    if (!token) throw new ApiError("Admin not authorized, no token", 401);

    const decoded = verifyAdminToken(token);
    const admin = await Admin.findById(decoded.id);
    if (!admin) throw new ApiError("Admin not found", 404);

    req.admin = admin;
    next();
  } catch (err) {
    if (err instanceof jwt.JsonWebTokenError) {
      return next(new ApiError("Invalid or expired admin token", 401));
    }
    next(err);
  }
};

export const requireSuperadmin = (req, res, next) => {
  if (req.admin?.role !== "superadmin") {
    return next(new ApiError("Superadmin access required", 403));
  }
  next();
};
