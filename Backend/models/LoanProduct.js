import mongoose from "mongoose";

const loanProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true, index: true },
    category: {
      type: String,
      enum: ["personal", "home", "education", "business", "other"],
      required: true,
    },
    description: { type: String, default: "" },
    interestRateMin: { type: Number, default: 0 },
    interestRateMax: { type: Number, default: 0 },
    minAmount: { type: Number, default: 0 },
    maxAmount: { type: Number, default: 0 },
    minTenureMonths: { type: Number, default: 0 },
    maxTenureMonths: { type: Number, default: 0 },
    processingFee: { type: String, default: "" },
    eligibility: { type: String, default: "" },
    documentsRequired: [{ type: String }],
    features: [{ type: String }],
    imageUrl: { type: String, default: "" },
    partnerBanks: [{ type: String }],
    isActive: { type: Boolean, default: true },
    metaTitle: { type: String, default: "" },
    metaDescription: { type: String, default: "" },
    metaKeywords: { type: String, default: "" },
  },
  { timestamps: true }
);

export default mongoose.model("LoanProduct", loanProductSchema);
