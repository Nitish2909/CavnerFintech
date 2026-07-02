import mongoose from 'mongoose';

const creditScoreRequestSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    panNumber: {
      type: String,
      required: true,
      uppercase: true,
      trim: true,
    },
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    dob: {
      type: Date,
      required: true,
    },
    pinCode: {
      type: String,
      required: true,
      trim: true,
    },
    mobile: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, 'Please fill a valid email address'],
    },
    gender: {
      type: String,
      enum: ['male', 'female', 'other'],
      required: true,
    },
    bureauScore: {
      type: Number,
      min: 300,
      max: 900,
      default: null, // Populated after a successful bureau pull
    },
    reportData: {
      type: Map,
      of: mongoose.Schema.Types.Mixed,
      default: {}, // Stores the entire JSON response layout payload back from Equifax/Experian/CIBIL
    },
    status: {
      type: String,
      required: true,
      enum: ['pending', 'fetched', 'failed'],
      default: 'pending',
    },
  },
  {
    // Since you only specified 'createdAt' in your prompt, we can disable 'updatedAt' 
    // but still utilize Mongoose's automatic timestamping engine.
    timestamps: { createdAt: true, updatedAt: false }, 
  }
);

// Performance & Audit Trail Indexes
creditScoreRequestSchema.index({ userId: 1, createdAt: -1 });
creditScoreRequestSchema.index({ panNumber: 1 });
creditScoreRequestSchema.index({ status: 1 });

const CreditScoreRequest = mongoose.model('CreditScoreRequest', creditScoreRequestSchema);

export default CreditScoreRequest;