import mongoose from "mongoose";

// Sub-schema for individual document uploads to ensure structure
const documentSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true, // E.g., 'pan_card', 'payslip', 'bank_statement'
    trim: true,
  },
  url: {
    type: String,
    required: true, // URL to S3 or cloud storage bucket
  },
  uploadedAt: {
    type: Date,
    default: Date.now,
  }
}, { _id: false }); // Prevents creating an explicit _id for every sub-document element

const loanApplicationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
    },
    loanAmount: {
      type: Number,
      required: [true, "Loan amount is required"],
    },
    employmentType: {
      type: String,
      required: [true, "Employment type is required"],
      enum: ["Salaried", "Self Employed", "Business", "Other"],
    },
    monthlyIncome: {
      type: Number,
      required: [true, "Monthly income is required"],
    },
  },
  {
    timestamps: true,
  }
);

const LoanApplication = mongoose.model(
  "LoanApplication",
  loanApplicationSchema
);

export default LoanApplication;



