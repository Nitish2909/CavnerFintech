import mongoose from 'mongoose';

// Sub-schema for banking details to keep things modular and clean
const bankDetailsSchema = new mongoose.Schema({
  accountNo: {
    type: String,
    trim: true,
    required: true,
  },
  ifsc: {
    type: String,
    trim: true,
    uppercase: true,
    required: true,
    // Add a regex validation if targeting a specific country (e.g., India's 11-character IFSC code)
    // match: [/^[A-Z]{4}0[A-Z0-9]{6}$/, 'Please fill a valid IFSC code']
  },
  bankName: {
    type: String,
    trim: true,
    required: true,
  }
}, { _id: false }); // Prevents creating an unnecessary internal _id for the bank details object

const partnerSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      unique: true, // A user can only have one partner profile
      ref: 'User',
    },
    profession: {
      type: String,
      trim: true,
      required: true, // E.g., 'DSA', 'Chartered Accountant', 'Financial Planner'
    },
    city: {
      type: String,
      trim: true,
      required: true,
    },
    state: {
      type: String,
      trim: true,
      required: true,
    },
    expectedVolume: {
      type: Number, // Estimated business/lead volume per month
      min: 0,
      default: 0,
    },
    referralCode: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      uppercase: true,
    },
    kycStatus: {
      type: String,
      required: true,
      enum: ['pending', 'verified'],
      default: 'pending',
    },
    totalLeads: {
      type: Number,
      default: 0,
      min: 0,
    },
    totalConversions: {
      type: Number,
      default: 0,
      min: 0,
    },
    totalEarnings: {
      type: Number,
      default: 0,
      min: 0, // Keeps track of payouts/commissions earned
    },
    bankDetails: {
      type: bankDetailsSchema,
      default: null, // Can be provided later during the KYC verification process
    },
  },
  {
    timestamps: true, // Automatically manages createdAt and updatedAt
  }
);

// Performance & Lookup Indexes
partnerSchema.index({ userId: 1 });
partnerSchema.index({ referralCode: 1 }, { unique: true });
partnerSchema.index({ kycStatus: 1 });

const Partner = mongoose.model('Partner', partnerSchema);

export default Partner;