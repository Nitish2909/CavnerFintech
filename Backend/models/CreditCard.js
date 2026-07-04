import mongoose from "mongoose";

const creditCardSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true, index: true },
    issuer: { type: String, required: true, trim: true },
    cardType: {
      type: String,
      enum: ["visa", "mastercard", "rupay", "amex"],
      default: "rupay",
    },
    category: {
      type: String,
      enum: ["cashback", "rewards", "travel", "fuel", "shopping", "premium", "business"],
      default: "cashback",
    },
    description: { type: String, default: "" },
    annualFee: { type: Number, default: 0 },
    joiningFee: { type: Number, default: 0 },
    interestRate: { type: Number, default: 0 },
    creditLimit: { type: String, default: "" },
    benefits: [{ type: String }],
    eligibility: { type: String, default: "" },
    imageUrl: { type: String, default: "" },
    isActive: { type: Boolean, default: true },
    metaTitle: { type: String, default: "" },
    metaDescription: { type: String, default: "" },
    metaKeywords: { type: String, default: "" },
  },
  { timestamps: true }
);

export default mongoose.model("CreditCard", creditCardSchema);
