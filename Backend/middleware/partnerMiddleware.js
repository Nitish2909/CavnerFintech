import jwt from "jsonwebtoken";
import Partner from "../models/Partner.js";
import { verifyPartnerToken } from "../utils/jwt.js";
import { ApiError } from "../utils/apiResponse.js";

export const protectPartner = async (req, res, next) => {
  try {
    let token;
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith("Bearer ")) {
      token = authHeader.split(" ")[1];
    } else if (req.cookies?.partnerToken) {
      token = req.cookies.partnerToken;
    }

    if (!token) throw new ApiError("Partner not authorized, no token", 401);

    const decoded = verifyPartnerToken(token);
    const partner = await Partner.findById(decoded.id);
    if (!partner) throw new ApiError("Partner not found", 404);
    if (partner.status === "blocked") throw new ApiError("Partner account blocked", 403);
    if (!partner.isApproved && partner.status !== "approved") {
      throw new ApiError("Partner account not yet approved by admin", 403);
    }

    req.partner = partner;
    next();
  } catch (err) {
    if (err instanceof jwt.JsonWebTokenError) {
      return next(new ApiError("Invalid or expired partner token", 401));
    }
    next(err);
  }
};
