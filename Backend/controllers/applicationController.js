import LoanApplication from "../models/LoanApplication.js";
import CreditCardApplication from "../models/CreditCardApplication.js";
import LoanProduct from "../models/LoanProduct.js";
import { uploadToCloudinary } from "../utils/cloudinaryUpload.js";
import { ApiError, asyncHandler, sendResponse } from "../utils/apiResponse.js";

export const applyLoan = asyncHandler(async (req, res) => {
  const {
    loanType,
    loanProductId,
    amountRequested,
    tenureMonths,
    purpose,
    employmentType,
    monthlyIncome,
    applicantName,
    email,
    phone,
    panNumber,
    aadhaarNumber,
    city,
    state,
    pincode,
  } = req.body;

  const application = await LoanApplication.create({
    user: req.user?._id || null,
    loanProduct: loanProductId || null,
    loanType,
    amountRequested,
    tenureMonths,
    purpose: purpose || "",
    employmentType: employmentType || "salaried",
    monthlyIncome: monthlyIncome || 0,
    applicantName,
    email,
    phone,
    panNumber: (panNumber || "").toUpperCase(),
    aadhaarNumber: aadhaarNumber || "",
    city: city || "",
    state: state || "",
    pincode: pincode || "",
  });

  // Upload documents to Cloudinary and clean temp files
  if (req.files) {
    const docFields = ["panCard", "aadhaar", "salarySlip", "bankStatement", "documents"];
    for (const field of docFields) {
      const files = req.files[field];
      if (!files) continue;
      for (const file of files) {
        const { url, publicId } = await uploadToCloudinary(file.path, `cavner/loan-applications/${application._id}`);
        application.documents.push({ name: file.fieldname, url, publicId });
      }
    }
    await application.save();
  }

  sendResponse(res, 201, "Loan application submitted successfully", { application });
});

export const applyCreditCard = asyncHandler(async (req, res) => {
  const { creditCardId, applicantName, email, phone, panNumber, monthlyIncome, city, state, pincode } = req.body;
  const application = await CreditCardApplication.create({
    user: req.user?._id || null,
    creditCard: creditCardId || null,
    applicantName,
    email,
    phone,
    panNumber: (panNumber || "").toUpperCase(),
    monthlyIncome: monthlyIncome || 0,
    city: city || "",
    state: state || "",
    pincode: pincode || "",
  });
  sendResponse(res, 201, "Credit card application submitted", { application });
});

export const getMyApplications = asyncHandler(async (req, res) => {
  if (!req.user) return sendResponse(res, 200, "Applications fetched", { loanApplications: [], creditCardApplications: [] });
  const [loanApplications, creditCardApplications] = await Promise.all([
    LoanApplication.find({ user: req.user._id }).populate("loanProduct", "name slug").sort({ createdAt: -1 }),
    CreditCardApplication.find({ user: req.user._id }).populate("creditCard", "name slug issuer").sort({ createdAt: -1 }),
  ]);
  sendResponse(res, 200, "Applications fetched", { loanApplications, creditCardApplications });
});

export const contactUs = asyncHandler(async (req, res) => {
  const ContactMessage = (await import("../models/ContactMessage.js")).default;
  const { name, email, phone, subject, message } = req.body;
  await ContactMessage.create({ name, email, phone: phone || "", subject: subject || "", message });
  sendResponse(res, 201, "Message sent. We will contact you soon.");
});
