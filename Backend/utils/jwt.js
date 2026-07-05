import jwt from "jsonwebtoken";
import { config } from "../config/index.js";

export const generateUserToken = (userId) =>
  jwt.sign({ id: userId, role: "user" }, config.jwt.userSecret, {
    expiresIn: config.jwt.expiresIn,
  });

export const generateAdminToken = (adminId, role = "admin") =>
  jwt.sign({ id: adminId, role }, config.jwt.adminSecret, {
    expiresIn: config.jwt.expiresIn,
  });

export const generatePartnerToken = (partnerId) =>
  jwt.sign({ id: partnerId, role: "partner" }, config.jwt.partnerSecret, {
    expiresIn: config.jwt.expiresIn,
  });

export const verifyUserToken = (token) => jwt.verify(token, config.jwt.userSecret);
export const verifyAdminToken = (token) => jwt.verify(token, config.jwt.adminSecret);
export const verifyPartnerToken = (token) => jwt.verify(token, config.jwt.partnerSecret);
