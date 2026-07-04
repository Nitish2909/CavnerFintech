import Admin from "../models/Admin.js";
import { generateAdminToken } from "../utils/jwt.js";
import { ApiError, asyncHandler, sendResponse } from "../utils/apiResponse.js";

export const loginAdmin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const admin = await Admin.findOne({ email: email.toLowerCase() }).select("+password");
  if (!admin) throw new ApiError("Invalid admin credentials", 401);

  const isMatch = await admin.matchPassword(password);
  if (!isMatch) throw new ApiError("Invalid admin credentials", 401);

  admin.lastLogin = new Date();
  await admin.save();

  const token = generateAdminToken(admin._id, admin.role);
  res.cookie("adminToken", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  sendResponse(res, 200, "Admin login successful", {
    admin: { _id: admin._id, name: admin.name, email: admin.email, role: admin.role },
    token,
  });
});

export const getAdminProfile = asyncHandler(async (req, res) => {
  sendResponse(res, 200, "Profile fetched", { admin: req.admin });
});

export const logoutAdmin = asyncHandler(async (req, res) => {
  res.clearCookie("adminToken");
  sendResponse(res, 200, "Logged out");
});

export const createAdmin = asyncHandler(async (req, res) => {
  const { name, email, password, role = "admin" } = req.body;
  const existing = await Admin.findOne({ email: email.toLowerCase() });
  if (existing) throw new ApiError("Admin already exists", 409);
  const admin = await Admin.create({ name, email: email.toLowerCase(), password, role });
  sendResponse(res, 201, "Admin created", { admin: { _id: admin._id, name: admin.name, email: admin.email, role: admin.role } });
});
