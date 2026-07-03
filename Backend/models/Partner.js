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
    entityType: {
      type: String,
      required: true,
      enum: ['PVT Company', 'Public Company', 'LLP','HUF','Partnership Firm','Proprietorship firm'], // Restricting to known entity types
    
    },
    corporateName: {
      type: String,
      trim: true,
      required: true, 
    },
    shortName: {
      type: String,
      trim: true,
    },
    phone: {
      type: Number,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },

    pannumber : {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    dateOfIncorporation: {
      type: Date,
      required: true,

    },
    plotNo: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      trim: true,
      required: true,
    },

    state: {
      type: String,
      trim: true,
      required: true,
    },
    district: {
      type: String,
      trim: true,
      required: true, 
    },
    city:{
      type: String,
      trim: true,
      required: true,
    },
    pincode: {
      type: Number,
      trim: true,
      required: true,
    },
    // bankDetails: {
    //   type: bankDetailsSchema,
    //   default: null, // Can be provided later during the KYC verification process
    // },
  },
  {
    timestamps: true, // Automatically manages createdAt and updatedAt
  }
);


const Partner = mongoose.model('Partner', partnerSchema);

export default Partner;