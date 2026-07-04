import mongoose from "mongoose";

const creditCardApplicationSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", index: true },
    partner: { type: mongoose.Schema.Types.ObjectId, ref: "Partner", default: null },
    creditCard: { type: mongoose.Schema.Types.ObjectId, ref: "CreditCard" },
    applicantName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    panNumber: { type: String, default: "" },
    monthlyIncome: { type: Number, default: 0 },
    city: { type: String, default: "" },
    state: { type: String, default: "" },
    pincode: { type: String, default: "" },
    status: {
      type: String,
      enum: ["pending", "under_review", "approved", "rejected"],
      default: "pending",
      index: true,
    },
    adminNotes: { type: String, default: "" },
  },
  { timestamps: true }
);

creditCardApplicationSchema.index({ createdAt: -1 });

export default mongoose.model("CreditCardApplication", creditCardApplicationSchema);
