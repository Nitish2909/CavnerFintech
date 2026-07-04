import LoanProduct from "../models/LoanProduct.js";
import CreditCard from "../models/CreditCard.js";
import { ApiError, asyncHandler, sendResponse } from "../utils/apiResponse.js";

// ---- Loan Products ----
export const createLoanProduct = asyncHandler(async (req, res) => {
  const product = await LoanProduct.create(req.body);
  sendResponse(res, 201, "Loan product created", { product });
});

export const updateLoanProduct = asyncHandler(async (req, res) => {
  const product = await LoanProduct.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
  if (!product) throw new ApiError("Loan product not found", 404);
  sendResponse(res, 200, "Loan product updated", { product });
});

export const deleteLoanProduct = asyncHandler(async (req, res) => {
  const product = await LoanProduct.findByIdAndDelete(req.params.id);
  if (!product) throw new ApiError("Loan product not found", 404);
  sendResponse(res, 200, "Loan product deleted");
});

export const getAllLoanProductsAdmin = asyncHandler(async (req, res) => {
  const products = await LoanProduct.find().sort({ createdAt: -1 });
  sendResponse(res, 200, "Loan products fetched", { products });
});

// ---- Credit Cards ----
export const createCreditCard = asyncHandler(async (req, res) => {
  const card = await CreditCard.create(req.body);
  sendResponse(res, 201, "Credit card created", { card });
});

export const updateCreditCard = asyncHandler(async (req, res) => {
  const card = await CreditCard.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
  if (!card) throw new ApiError("Credit card not found", 404);
  sendResponse(res, 200, "Credit card updated", { card });
});

export const deleteCreditCard = asyncHandler(async (req, res) => {
  const card = await CreditCard.findByIdAndDelete(req.params.id);
  if (!card) throw new ApiError("Credit card not found", 404);
  sendResponse(res, 200, "Credit card deleted");
});

export const getAllCreditCardsAdmin = asyncHandler(async (req, res) => {
  const cards = await CreditCard.find().sort({ createdAt: -1 });
  sendResponse(res, 200, "Credit cards fetched", { cards });
});
