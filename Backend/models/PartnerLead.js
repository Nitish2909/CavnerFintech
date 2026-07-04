import mongoose from "mongoose";

const partnerLeadSchema = new mongoose.Schema(
  {
    partner: { type: mongoose.Schema.Types.ObjectId, ref: "Partner", index: true },
    leadName: { type: String, required: true },
    email: { type: String, default: "" },
    phone: { type: String, required: true },
    loanType: { type: String, default: "" },
    amount: { type: Number, default: 0 },
    status: {
      type: String,
      enum: ["new", "contacted", "submitted", "approved", "rejected"],
      default: "new",
    },
    commissionEarned: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.model("PartnerLead", partnerLeadSchema);
