// import jwt from "jsonwebtoken";

// export const auth = async (req, res, next) => {
//   try {

//     //1.) get token from cookies
//     const token =
//       req.cookies?.accessToken ||
//       (req.headers.authorization &&
//         req.headers.authorization.startsWith("Bearer ") &&
//         req.headers.authorization.split(" ")[1]);

//     if (!token) {
//       return res.status(401).json({
//         message: "Token not found",
//       });
//     }

//     //2. Verify token
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);

//     //3.) attach user to request
//     req.user = decoded;
//     next();
    
//   } catch (error) {
//     console.error("Auth Middleware Error:", error);
//     return res.status(401).json({
//       message: "Invalid or Expired Token",
//     });
//   }
// };


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
