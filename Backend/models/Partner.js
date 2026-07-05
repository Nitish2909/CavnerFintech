import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const partnerSchema = new mongoose.Schema(
  {
    companyName: { type: String, required: true, trim: true },
    contactPerson: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      index: true,
    },
    password: { type: String, required: true, minlength: 6, select: false },
    gstNumber: { type: String, uppercase: true, trim: true, default: "" },
    panNumber: { type: String, uppercase: true, trim: true, default: "" },
    businessType: {
      type: String,
      enum: ["DSA", "NBFC", "Bank", "Individual Agent", "Fintech", "Other"],
      default: "DSA",
    },
    city: { type: String, default: "" },
    state: { type: String, default: "" },
    commissionRate: { type: Number, default: 1.0 },
    isEmailVerified: { type: Boolean, default: false },
    isPhoneVerified: { type: Boolean, default: false },
    isApproved: { type: Boolean, default: false },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected", "blocked"],
      default: "pending",
    },
    referredUsers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    totalLeads: { type: Number, default: 0 },
    totalCommission: { type: Number, default: 0 },
    lastLogin: { type: Date, default: null },
  },
  { timestamps: true }
);

partnerSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

partnerSchema.methods.matchPassword = function (entered) {
  return bcrypt.compare(entered, this.password);
};

partnerSchema.methods.toSafeObject = function () {
  const obj = this.toObject();
  delete obj.password;
  return obj;
};

export default mongoose.model("Partner", partnerSchema);
