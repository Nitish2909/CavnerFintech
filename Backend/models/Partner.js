// import mongoose from 'mongoose';

// // Sub-schema for banking details to keep things modular and clean
// const bankDetailsSchema = new mongoose.Schema({
//   accountNo: {
//     type: String,
//     trim: true,
//     required: true,
//   },
//   ifsc: {
//     type: String,
//     trim: true,
//     uppercase: true,
//     required: true,
//     // Add a regex validation if targeting a specific country (e.g., India's 11-character IFSC code)
//     // match: [/^[A-Z]{4}0[A-Z0-9]{6}$/, 'Please fill a valid IFSC code']
//   },
//   bankName: {
//     type: String,
//     trim: true,
//     required: true,
//   }
// }, { _id: false }); // Prevents creating an unnecessary internal _id for the bank details object

// const partnerSchema = new mongoose.Schema(
//   {
//     entityType: {
//       type: String,
//       required: true,
//       enum: ['PVT Company', 'Public Company', 'LLP', 'HUF', 'Partnership Firm', 'Proprietorship firm'], // Restricting to known entity types

//     },
//     corporateName: {
//       type: String,
//       trim: true,
//       required: true,
//     },
//     shortName: {
//       type: String,
//       trim: true,
//     },
//     phone: {
//       type: Number,
//       trim: true,
//       required: true,
//     },
//     email: {
//       type: String,
//       trim: true,
//       required: true,
//     },
//     password: {
//       type: String,
//       required: true,
//     },

//     pannumber: {
//       type: String,
//       required: true,
//       unique: true,
//       trim: true,
//     },
//     dateOfIncorporation: {
//       type: Date,
//       required: true,

//     },
//     plotNo: {
//       type: String,
//       required: true,
//     },
//     address: {
//       type: String,
//       trim: true,
//       required: true,
//     },

//     state: {
//       type: String,
//       trim: true,
//       required: true,
//     },
//     district: {
//       type: String,
//       trim: true,
//       required: true,
//     },
//     city: {
//       type: String,
//       trim: true,
//       required: true,
//     },
//     pincode: {
//       type: Number,
//       trim: true,
//       required: true,
//     },
//     // bankDetails: {
//     //   type: bankDetailsSchema,
//     //   default: null, // Can be provided later during the KYC verification process
//     // },
//   },
//   {
//     timestamps: true, // Automatically manages createdAt and updatedAt
//   }
// );


// const Partner = mongoose.model('Partner', partnerSchema);

// export default Partner;




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



