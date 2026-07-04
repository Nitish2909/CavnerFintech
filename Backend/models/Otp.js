import mongoose from "mongoose";

const otpSchema = new mongoose.Schema(
  {
    identifier: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    type: { type: String, enum: ["email", "phone"], required: true },
    otp: { type: String, required: true },
    purpose: {
      type: String,
      enum: ["registration", "login", "reset", "verification"],
      default: "verification",
    },
    attempts: { type: Number, default: 0 },
    verified: { type: Boolean, default: false },
    expiresAt: { type: Date, required: true },
  },
  { timestamps: true }
);

otpSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

export default mongoose.model("Otp", otpSchema);
