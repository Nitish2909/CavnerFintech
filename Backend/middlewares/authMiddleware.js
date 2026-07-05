import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { verifyUserToken } from "../utils/jwt.js";
import { ApiError } from "../utils/apiResponse.js";

export const protect = async (req, res, next) => {
  try {
    let token;
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith("Bearer ")) {
      token = authHeader.split(" ")[1];
    } else if (req.cookies?.userToken) {
      token = req.cookies.userToken;
    }

    // console.log(token)
    if (!token) throw new ApiError("Not authorized, no token", 401);

    const decoded = verifyUserToken(token);
    const user = await User.findById(decoded.id);
    if (!user) throw new ApiError("User not found", 404);
    if (user.status === "blocked") throw new ApiError("Account blocked. Contact support.", 403);

    req.user = user;
    next();
  } catch (err) {
    if (err instanceof jwt.JsonWebTokenError) {
      return next(new ApiError("Invalid or expired token", 401));
    }
    next(err);
  }
};

export const optionalAuth = async (req, res, next) => {
  try {
    let token;
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith("Bearer ")) {
      token = authHeader.split(" ")[1];
    } else if (req.cookies?.userToken) {
      token = req.cookies.userToken;
    }
    if (token) {
      const decoded = verifyUserToken(token);
      const user = await User.findById(decoded.id);
      if (user && user.status === "active") req.user = user;
    }
  } catch {
    // ignore - optional
  }
  next();
};
