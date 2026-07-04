import User from "../models/User.js";
import Partner from "../models/Partner.js";
import LoanApplication from "../models/LoanApplication.js";
import CreditCardApplication from "../models/CreditCardApplication.js";
import ContactMessage from "../models/ContactMessage.js";
import { ApiError, asyncHandler, sendResponse } from "../utils/apiResponse.js";

// ---- Users ----
export const getAllUsers = asyncHandler(async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;
  const filter = {};
  if (req.query.status) filter.status = req.query.status;
  if (req.query.search) {
    filter.$or = [
      { name: { $regex: req.query.search, $options: "i" } },
      { email: { $regex: req.query.search, $options: "i" } },
      { phone: { $regex: req.query.search } },
    ];
  }
  const [users, total] = await Promise.all([
    User.find(filter).sort({ createdAt: -1 }).skip(skip).limit(limit),
    User.countDocuments(filter),
  ]);
  sendResponse(res, 200, "Users fetched", { users, pagination: { page, limit, total, pages: Math.ceil(total / limit) } });
});

export const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) throw new ApiError("User not found", 404);
  sendResponse(res, 200, "User fetched", { user: user.toSafeObject() });
});

export const updateUserStatus = asyncHandler(async (req, res) => {
  const { status } = req.body;
  if (!["active", "blocked"].includes(status)) throw new ApiError("Invalid status", 400);
  const user = await User.findByIdAndUpdate(req.params.id, { status }, { new: true });
  if (!user) throw new ApiError("User not found", 404);
  sendResponse(res, 200, "User status updated", { user: user.toSafeObject() });
});

// ---- Partners ----
export const getAllPartners = asyncHandler(async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;
  const filter = {};
  if (req.query.status) filter.status = req.query.status;
  const [partners, total] = await Promise.all([
    Partner.find(filter).sort({ createdAt: -1 }).skip(skip).limit(limit),
    Partner.countDocuments(filter),
  ]);
  sendResponse(res, 200, "Partners fetched", { partners, pagination: { page, limit, total, pages: Math.ceil(total / limit) } });
});

export const approvePartner = asyncHandler(async (req, res) => {
  const partner = await Partner.findByIdAndUpdate(
    req.params.id,
    { isApproved: true, status: "approved" },
    { new: true }
  );
  if (!partner) throw new ApiError("Partner not found", 404);
  sendResponse(res, 200, "Partner approved", { partner: partner.toSafeObject() });
});

export const rejectPartner = asyncHandler(async (req, res) => {
  const partner = await Partner.findByIdAndUpdate(
    req.params.id,
    { isApproved: false, status: "rejected" },
    { new: true }
  );
  if (!partner) throw new ApiError("Partner not found", 404);
  sendResponse(res, 200, "Partner rejected", { partner: partner.toSafeObject() });
});

export const updatePartnerStatus = asyncHandler(async (req, res) => {
  const { status } = req.body;
  if (!["pending", "approved", "rejected", "blocked"].includes(status)) throw new ApiError("Invalid status", 400);
  const partner = await Partner.findByIdAndUpdate(req.params.id, { status, isApproved: status === "approved" }, { new: true });
  if (!partner) throw new ApiError("Partner not found", 404);
  sendResponse(res, 200, "Partner status updated", { partner: partner.toSafeObject() });
});

// ---- Loan Applications ----
export const getAllLoanApplications = asyncHandler(async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;
  const filter = {};
  if (req.query.status) filter.status = req.query.status;
  const [apps, total] = await Promise.all([
    LoanApplication.find(filter).populate("user", "name email phone").populate("loanProduct", "name").sort({ createdAt: -1 }).skip(skip).limit(limit),
    LoanApplication.countDocuments(filter),
  ]);
  sendResponse(res, 200, "Loan applications fetched", { applications: apps, pagination: { page, limit, total, pages: Math.ceil(total / limit) } });
});

export const updateLoanApplicationStatus = asyncHandler(async (req, res) => {
  const { status, adminNotes, approvedAmount } = req.body;
  const update = { status };
  if (adminNotes !== undefined) update.adminNotes = adminNotes;
  if (approvedAmount !== undefined) update.approvedAmount = approvedAmount;
  if (status === "disbursed") update.disbursedAt = new Date();
  const app = await LoanApplication.findByIdAndUpdate(req.params.id, update, { new: true });
  if (!app) throw new ApiError("Application not found", 404);
  sendResponse(res, 200, "Application status updated", { application: app });
});

// ---- Credit Card Applications ----
export const getAllCreditCardApplications = asyncHandler(async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;
  const filter = {};
  if (req.query.status) filter.status = req.query.status;
  const [apps, total] = await Promise.all([
    CreditCardApplication.find(filter).populate("user", "name email phone").populate("creditCard", "name issuer").sort({ createdAt: -1 }).skip(skip).limit(limit),
    CreditCardApplication.countDocuments(filter),
  ]);
  sendResponse(res, 200, "Credit card applications fetched", { applications: apps, pagination: { page, limit, total, pages: Math.ceil(total / limit) } });
});

export const updateCreditCardApplicationStatus = asyncHandler(async (req, res) => {
  const { status, adminNotes } = req.body;
  const update = { status };
  if (adminNotes !== undefined) update.adminNotes = adminNotes;
  const app = await CreditCardApplication.findByIdAndUpdate(req.params.id, update, { new: true });
  if (!app) throw new ApiError("Application not found", 404);
  sendResponse(res, 200, "Application status updated", { application: app });
});

// ---- Contact Messages ----
export const getContactMessages = asyncHandler(async (req, res) => {
  const messages = await ContactMessage.find().sort({ createdAt: -1 });
  sendResponse(res, 200, "Messages fetched", { messages });
});

export const resolveContactMessage = asyncHandler(async (req, res) => {
  const { isResolved, adminReply } = req.body;
  const msg = await ContactMessage.findByIdAndUpdate(
    req.params.id,
    { isResolved, adminReply: adminReply || "" },
    { new: true }
  );
  if (!msg) throw new ApiError("Message not found", 404);
  sendResponse(res, 200, "Message updated", { message: msg });
});

// ---- Dashboard Stats ----
export const getDashboardStats = asyncHandler(async (req, res) => {
  const [totalUsers, totalPartners, pendingPartners, totalLoanApps, pendingLoanApps, totalCardApps, pendingCardApps, totalMessages, unresolvedMessages] = await Promise.all([
    User.countDocuments({ status: { $ne: "deleted" } }),
    Partner.countDocuments(),
    Partner.countDocuments({ status: "pending" }),
    LoanApplication.countDocuments(),
    LoanApplication.countDocuments({ status: "pending" }),
    CreditCardApplication.countDocuments(),
    CreditCardApplication.countDocuments({ status: "pending" }),
    ContactMessage.countDocuments(),
    ContactMessage.countDocuments({ isResolved: false }),
  ]);

  const loanStatusBreakdown = await LoanApplication.aggregate([
    { $group: { _id: "$status", count: { $sum: 1 } } },
  ]);

  const totalDisbursed = await LoanApplication.aggregate([
    { $match: { status: "disbursed" } },
    { $group: { _id: null, total: { $sum: "$approvedAmount" } } },
  ]);

  sendResponse(res, 200, "Dashboard stats", {
    stats: {
      totalUsers,
      totalPartners,
      pendingPartners,
      totalLoanApps,
      pendingLoanApps,
      totalCardApps,
      pendingCardApps,
      totalMessages,
      unresolvedMessages,
      totalDisbursedAmount: totalDisbursed[0]?.total || 0,
    },
    loanStatusBreakdown,
  });
});
