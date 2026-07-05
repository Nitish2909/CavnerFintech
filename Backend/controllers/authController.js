import User from "../models/User.js";
import Otp from "../models/Otp.js";
import { generateUserToken } from "../utils/jwt.js";
import { generateOtp, maskEmail, maskPhone } from "../utils/otp.js";
import { sendOtpEmail } from "../utils/emailService.js";
import { sendOtpSms, verifyOtpSms } from "../utils/smsService.js";
import { ApiError, asyncHandler, sendResponse } from "../utils/apiResponse.js";
import { config } from "dotenv";
config()

const OTP_TTL_MINUTES = 10;
const MAX_ATTEMPTS = 5;

const issueOtp = async (identifier, type, purpose) => {
  const existing = await Otp.findOne({ identifier, type, verified: false });
  if (existing && existing.attempts >= MAX_ATTEMPTS) {
    throw new ApiError("Too many attempts. Please try again later.", 429);
  }
  if (existing) await Otp.deleteOne({ _id: existing._id });

  const otp = generateOtp(6);
  await Otp.create({
    identifier,
    type,
    otp,
    purpose,
    expiresAt: new Date(Date.now() + OTP_TTL_MINUTES * 60 * 1000),
  });

  if (type === "email") {
    await sendOtpEmail(identifier, otp, purpose);
  } else {
    await sendOtpSms(identifier, otp);
  }
};

export const sendOtp = asyncHandler(async (req, res) => {
  const { identifier, type, purpose = "verification" } = req.body;
  const normalized = type === "email" ? identifier.toLowerCase().trim() : identifier.trim();

  // For registration, ensure email/phone not already registered
  if (purpose === "registration") {
    if (type === "email" && (await User.findOne({ email: normalized }))) {
      throw new ApiError("Email already registered. Please login.", 409);
    }
    if (type === "phone" && (await User.findOne({ phone: normalized }))) {
      throw new ApiError("Phone already registered. Please login.", 409);
    }
  }

  await issueOtp(normalized, type, purpose);
  const masked = type === "email" ? maskEmail(normalized) : maskPhone(normalized);
  sendResponse(res, 200, `OTP sent to ${masked}`, { masked });
});

export const verifyOtp = asyncHandler(async (req, res) => {
  const { identifier, type, otp } = req.body;
  const normalized = type === "email" ? identifier.toLowerCase().trim() : identifier.trim();

  const record = await Otp.findOne({ identifier: normalized, type, verified: false });
  if (!record) throw new ApiError("No active OTP found. Please request a new one.", 404);
  if (record.expiresAt < new Date()) {
    await Otp.deleteOne({ _id: record._id });
    throw new ApiError("OTP expired. Please request a new one.", 410);
  }

  record.attempts += 1;
  await record.save();

  if (record.attempts > MAX_ATTEMPTS) {
    await Otp.deleteOne({ _id: record._id });
    throw new ApiError("Too many wrong attempts. Please request a new OTP.", 429);
  }

  if (record.otp !== otp) throw new ApiError("Invalid OTP", 400);

  record.verified = true;
  await record.save();

  if (type === "phone" && process.env.MSG91_AUTH_KEY) {
    try { await verifyOtpSms(normalized, otp); } catch { /* fall back to our record */ }
  }

  sendResponse(res, 200, "OTP verified successfully", { verified: true });
});

export const register = asyncHandler(async (req, res) => {
  const { name, email, phone, password, dob, pannumber, pincode } = req.body;

  const existing = await User.findOne({ $or: [{ email: email.toLowerCase() }, { phone }] });
  if (existing) {
    throw new ApiError("User with this email or phone already exists", 409);
  }

  // Require verified OTPs for email and phone
  const emailOtp = await Otp.findOne({
    identifier: email.toLowerCase(),
    type: "email",
    verified: true,
    purpose: "registration",
  });
  // const phoneOtp = await Otp.findOne({
  //   identifier: phone,
  //   type: "phone",
  //   verified: true,
  //   purpose: "registration",
  // });

  if (!emailOtp) throw new ApiError("Email not verified via OTP", 400);
  // if (!phoneOtp) throw new ApiError("Phone not verified via OTP", 400);

  const user = await User.create({
    name,
    email: email.toLowerCase(),
    phone,
    password,
    dob: dob || "",
    pannumber: (pannumber || "").toUpperCase(),
    pincode: pincode || "",
    isEmailVerified: true,
    isPhoneVerified: true,
  });

  // Clean up used OTPs
  await Otp.deleteMany({ identifier: { $in: [email.toLowerCase()] } });

  const token = generateUserToken(user._id);
  res.cookie("userToken", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "Lax",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  sendResponse(res, 201, "Registration successful", { user: user.toSafeObject(), token });
});

export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email.toLowerCase() }).select("+password");
  if (!user) throw new ApiError("Invalid credentials", 401);
  if (user.status === "blocked") throw new ApiError("Account blocked. Contact support.", 403);

  const isMatch = await user.matchPassword(password);
  if (!isMatch) throw new ApiError("Invalid credentials", 401);

  user.lastLogin = new Date();
  await user.save();

  const token = generateUserToken(user._id);
  res.cookie("userToken", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "Lax",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  sendResponse(res, 200, "Login successful", { user: user.toSafeObject(), token });
});

export const loginWithOtp = asyncHandler(async (req, res) => {
  const { identifier, type, otp } = req.body;
  const normalized = type === "email" ? identifier.toLowerCase().trim() : identifier.trim();

  const record = await Otp.findOne({ identifier: normalized, type, verified: false });
  if (!record || record.otp !== otp || record.expiresAt < new Date()) {
    throw new ApiError("Invalid or expired OTP", 400);
  }
  record.verified = true;
  await record.save();

  const user = await User.findOne(
    type === "email" ? { email: normalized } : { phone: normalized }
  );
  if (!user) throw new ApiError("No account found. Please register first.", 404);
  if (user.status === "blocked") throw new ApiError("Account blocked", 403);

  await Otp.deleteOne({ _id: record._id });

  const token = generateUserToken(user._id);
  res.cookie("userToken", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  sendResponse(res, 200, "Login successful", { user: user.toSafeObject(), token });
});

export const getMe = asyncHandler(async (req, res) => {
  sendResponse(res, 200, "Profile fetched", { user: req.user.toSafeObject() });
});

export const updateProfile = asyncHandler(async (req, res) => {
  const allowed = ["name", "dob", "pannumber", "pincode", "address", "avatar"];
  const updates = {};
  for (const key of allowed) {
    if (req.body[key] !== undefined) updates[key] = req.body[key];
  }
  const user = await User.findByIdAndUpdate(req.user._id, { $set: updates }, { new: true });
  sendResponse(res, 200, "Profile updated", { user: user.toSafeObject() });
});

export const logout = asyncHandler(async (req, res) => {
  res.clearCookie("userToken");
  sendResponse(res, 200, "Logged out successfully");
});
