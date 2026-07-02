import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
      enum: ['loan', 'credit_card', 'insurance', 'investment'],
    },
    subType: {
      type: String,
      required: true,
      enum: ['personal', 'business', 'home', 'car', 'education', 'term', 'health', 'mutual_fund'], 
    },
    lenderId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Lender',
    },
    lenderName: {
      type: String,
      required: true,
      trim: true,
    },
    lenderLogo: {
      type: String,
      required: true,
    },
    minAmount: {
      type: Number,
      required: true,
      min: 0,
    },
    maxAmount: {
      type: Number,
      required: true,
      min: 0,
    },
    minTenure: {
      type: Number,
      required: true,
      min: 0,
    },
    maxTenure: {
      type: Number,
      required: true,
      min: 0,
    },
    interestRateMin: {
      type: Number,
      required: true,
      min: 0,
    },
    interestRateMax: {
      type: Number,
      required: true,
      min: 0,
    },
    processingFee: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },
    eligibilityCriteria: {
      type: Map,
      of: mongoose.Schema.Types.Mixed,
      default: {},
    },
    documents: {
      type: [String],
      default: [],
    },
    features: {
      type: [String],
      default: [],
    },
    filters: {
      type: Map,
      of: mongoose.Schema.Types.Mixed,
      default: {},
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

productSchema.index({ type: 1, subType: 1 });
productSchema.index({ isActive: 1 });

const Product = mongoose.model('Product', productSchema);

export default Product;