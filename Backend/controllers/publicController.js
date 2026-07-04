import LoanProduct from "../models/LoanProduct.js";
import CreditCard from "../models/CreditCard.js";
import { asyncHandler, sendResponse } from "../utils/apiResponse.js";

export const getLoanProducts = asyncHandler(async (req, res) => {
  const filter = { isActive: true };
  if (req.query.category) filter.category = req.query.category;
  const products = await LoanProduct.find(filter).sort({ createdAt: -1 });
  sendResponse(res, 200, "Loan products fetched", { products });
});

export const getLoanProductBySlug = asyncHandler(async (req, res) => {
  const product = await LoanProduct.findOne({ slug: req.params.slug, isActive: true });
  if (!product) return sendResponse(res, 200, "Product not found", { product: null });
  sendResponse(res, 200, "Loan product fetched", { product });
});

export const getCreditCards = asyncHandler(async (req, res) => {
  const filter = { isActive: true };
  if (req.query.category) filter.category = req.query.category;
  const cards = await CreditCard.find(filter).sort({ createdAt: -1 });
  sendResponse(res, 200, "Credit cards fetched", { cards });
});

export const getCreditCardBySlug = asyncHandler(async (req, res) => {
  const card = await CreditCard.findOne({ slug: req.params.slug, isActive: true });
  if (!card) return sendResponse(res, 200, "Card not found", { card: null });
  sendResponse(res, 200, "Credit card fetched", { card });
});
