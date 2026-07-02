const mongoose = require('mongoose');

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
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User', // Assumes you have a User model
    },
    loanType: {
      type: String,
      required: true,
      enum: ['personal', 'business', 'home', 'car', 'education'], // Syncs with product subType
    },
    loanAmount: {
      type: Number,
      required: true,
      min: 0,
    },
    tenure: {
      type: Number, // Match unit used in Product model (e.g., months)
      required: true,
      min: 1,
    },
    purpose: {
      type: String,
      required: true,
      trim: true,
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
    existingEMI: {
      type: Number,
      default: 0,
      min: 0,
    },
    panNumber: {
      type: String,
      required: true,
      uppercase: true,
      trim: true,
      // You can add a regex match validation if targeting specific country formats (e.g., Indian PAN)
      // match: [/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, 'Please fill a valid PAN number']
    },
    status: {
      type: String,
      required: true,
      enum: ['draft', 'submitted', 'under_review', 'approved', 'rejected'],
      default: 'draft',
    },
    assignedLenderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Lender', // Syncs with lenderId from Product schema
      default: null,
    },
    partnerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Partner', // Assumes you have an Affiliate/DSA/Partner model
      default: null,
    },
    documents: {
      type: [documentSchema],
      default: [],
    },
  },
  {
    timestamps: true, // Automatically manages createdAt and updatedAt
  }
);

// Performance Indexes
loanApplicationSchema.index({ userId: 1 });
loanApplicationSchema.index({ status: 1 });
loanApplicationSchema.index({ assignedLenderId: 1 });

const LoanApplication = mongoose.model('LoanApplication', loanApplicationSchema);

module.exports = LoanApplication;