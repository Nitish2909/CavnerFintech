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
      required: [true, 'Name is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, 'Please fill a valid email address'],
    },
    phone: {
      type: String,
      required: [true, 'Phone number is required'],
      unique: true,
      trim: true,
    },
    loanAmount: {
      type: Number,
      required: true,
      min: 0,
    },
    employmentType: {
      type: String,
      required: true,
      enum: ['salaried', 'self-employed'],
    },
    monthlyIncome: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  {
    timestamps: true, // Automatically manages createdAt and updatedAt
  }
);

const LoanApplication = mongoose.model('LoanApplication', loanApplicationSchema);

export default LoanApplication;




