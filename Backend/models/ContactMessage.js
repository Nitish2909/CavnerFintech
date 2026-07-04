import mongoose from "mongoose";

const contactMessageSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, lowercase: true, trim: true },
    phone: { type: String, default: "" },
    subject: { type: String, default: "" },
    message: { type: String, required: true },
    isResolved: { type: Boolean, default: false },
    adminReply: { type: String, default: "" },
  },
  { timestamps: true }
);

export default mongoose.model("ContactMessage", contactMessageSchema);
