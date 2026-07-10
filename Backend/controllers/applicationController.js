import LoanApplication from "../models/LoanApplication.js";
import CreditCardApplication from "../models/CreditCardApplication.js";
import LoanProduct from "../models/LoanProduct.js";
import { uploadToCloudinary } from "../utils/cloudinaryUpload.js";
import { ApiError, asyncHandler, sendResponse } from "../utils/apiResponse.js";

export const applyLoan = asyncHandler(async (req, res) => {
  console.log("success")
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
  // console.log(req.user)

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
      const fileList = Array.isArray(files) ? files : [files];
      for (const file of fileList) {
        if (!file.tempFilePath) {
        console.error(`Missing tempFilePath for field: ${field}. Ensure useTempFiles is enabled.`);
        continue;
      }
        const { url, publicId } = await uploadToCloudinary(file.tempFilePath);
        application.documents.push({ name: field, url, publicId });
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
