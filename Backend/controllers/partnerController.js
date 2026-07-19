import Partner from "../models/Partner.js";
import Otp from "../models/Otp.js";
import PartnerLead from "../models/PartnerLead.js";
import { generatePartnerToken } from "../utils/jwt.js";
import { generateOtp, maskEmail, maskPhone } from "../utils/otp.js";
import { sendOtpEmail } from "../utils/emailService.js";
import { sendOtpSms } from "../utils/smsService.js";
import { ApiError, asyncHandler, sendResponse } from "../utils/apiResponse.js";

const OTP_TTL_MINUTES = 10;

export const sendPartnerOtp = asyncHandler(async (req, res) => {
  const { identifier, type, purpose = "registration" } = req.body;
  const normalized = type === "email" ? identifier.toLowerCase().trim() : identifier.trim();

  if (purpose === "registration") {
    if (type === "email" && (await Partner.findOne({ email: normalized }))) {
      throw new ApiError("Email already registered", 409);
    }
    if (type === "phone" && (await Partner.findOne({ phone: normalized }))) {
      throw new ApiError("Phone already registered", 409);
    }
  }

  const otp = generateOtp(6);
  await Otp.create({
    identifier: normalized,
    type,
    otp,
    purpose,
    expiresAt: new Date(Date.now() + OTP_TTL_MINUTES * 60 * 1000),
  });

  if (type === "email") await sendOtpEmail(normalized, otp, purpose);
  else await sendOtpSms(normalized, otp);

  const masked = type === "email" ? maskEmail(normalized) : maskPhone(normalized);
  sendResponse(res, 200, `OTP sent to ${masked}`, { masked });
});

export const verifyPartnerOtp = asyncHandler(async (req, res) => {
  const { identifier, type, otp } = req.body;
  const normalized = type === "email" ? identifier.toLowerCase().trim() : identifier.trim();

  const record = await Otp.findOne({ identifier: normalized, type, verified: false });
  if (!record || record.expiresAt < new Date()) {
    throw new ApiError("No active OTP or OTP expired", 404);
  }
  if (record.otp !== otp) throw new ApiError("Invalid OTP", 400);

  record.verified = true;
  await record.save();
  sendResponse(res, 200, "OTP verified", { verified: true });
});

export const registerPartner = asyncHandler(async (req, res) => {
  const { companyName, contactPerson, email, phone, password, gstNumber, panNumber, businessType, city, state } = req.body;

  const existing = await Partner.findOne({ email: email.toLowerCase()});
  if (existing) throw new ApiError("Partner already exists with this email", 409);

  const emailOtp = await Otp.findOne({ identifier: email.toLowerCase(), type: "email", verified: true, purpose: "registration" });

  if (!emailOtp) throw new ApiError("Email not verified via OTP", 400);

  const partner = await Partner.create({
    companyName,
    contactPerson,
    email: email.toLowerCase(),
    phone,
    password,
    gstNumber: (gstNumber || "").toUpperCase(),
    panNumber: (panNumber || "").toUpperCase(),
    businessType: businessType || "DSA",
    city: city || "",
    state: state || "",
    isEmailVerified: true,
    isPhoneVerified: true,
  });

  await Otp.deleteMany({ identifier: { $in: [email.toLowerCase(), phone] } });

  sendResponse(res, 201, "Partner registration submitted. Pending admin approval.", {
    partner: partner.toSafeObject(),
  });
});

export const loginPartner = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const partner = await Partner.findOne({ email: email.toLowerCase() }).select("+password");
  if (!partner) throw new ApiError("Invalid credentials", 401);
  if (partner.status === "blocked") throw new ApiError("Partner account blocked", 403);
  if (!partner.isApproved) throw new ApiError("Partner account not yet approved by admin", 403);

  const isMatch = await partner.matchPassword(password);
  if (!isMatch) throw new ApiError("Invalid credentials", 401);

  partner.lastLogin = new Date();
  await partner.save();

  const token = generatePartnerToken(partner._id);
  res.cookie("partnerToken", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  sendResponse(res, 200, "Partner login successful", { partner: partner.toSafeObject(), token });
});

export const getPartnerProfile = asyncHandler(async (req, res) => {
  sendResponse(res, 200, "Profile fetched", { partner: req.partner.toSafeObject() });
});

export const updatePartnerProfile = asyncHandler(async (req, res) => {
  const allowed = ["companyName", "contactPerson", "city", "state", "businessType"];
  const updates = {};
  for (const key of allowed) {
    if (req.body[key] !== undefined) updates[key] = req.body[key];
  }
  const partner = await Partner.findByIdAndUpdate(req.partner._id, { $set: updates }, { new: true });
  sendResponse(res, 200, "Profile updated", { partner: partner.toSafeObject() });
});

export const logoutPartner = asyncHandler(async (req, res) => {
  res.clearCookie("partnerToken");
  sendResponse(res, 200, "Logged out");
});

export const createLead = asyncHandler(async (req, res) => {
  const { leadName, email, phone, loanType, amount } = req.body;
  const lead = await PartnerLead.create({
    partner: req.partner._id,
    leadName,
    email: email || "",
    phone,
    loanType: loanType || "",
    amount: amount || 0,
  });
  await Partner.findByIdAndUpdate(req.partner._id, { $inc: { totalLeads: 1 } });
  sendResponse(res, 201, "Lead created", { lead });
});

export const getMyLeads = asyncHandler(async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;
  const [leads, total] = await Promise.all([
    PartnerLead.find({ partner: req.partner._id }).sort({ createdAt: -1 }).skip(skip).limit(limit),
    PartnerLead.countDocuments({ partner: req.partner._id }),
  ]);
  sendResponse(res, 200, "Leads fetched", { leads, pagination: { page, limit, total, pages: Math.ceil(total / limit) } });
});

export const getPartnerDashboard = asyncHandler(async (req, res) => {
  const partner = req.partner;
  const leads = await PartnerLead.find({ partner: partner._id }).sort({ createdAt: -1 }).limit(5);
  sendResponse(res, 200, "Dashboard data", {
    stats: {
      totalLeads: partner.totalLeads,
      totalCommission: partner.totalCommission,
      commissionRate: partner.commissionRate,
      status: partner.status,
    },
    recentLeads: leads,
  });
});
