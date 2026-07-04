// import mongoose from "mongoose";

// // Sub-schema for individual document uploads to ensure structure
// const documentSchema = new mongoose.Schema({
//   type: {
//     type: String,
//     required: true, // E.g., 'pan_card', 'payslip', 'bank_statement'
//     trim: true,
//   },
//   url: {
//     type: String,
//     required: true, // URL to S3 or cloud storage bucket
//   },
//   uploadedAt: {
//     type: Date,
//     default: Date.now,
//   }
// }, { _id: false }); // Prevents creating an explicit _id for every sub-document element

// const loanApplicationSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: [true, "Name is required"],
//       trim: true,
//     },
//     email: {
//       type: String,
//       required: [true, "Email is required"],
//       trim: true,
//       lowercase: true,
//     },
//     phone: {
//       type: String,
//       required: [true, "Phone number is required"],
//       trim: true,
//     },
//     loanAmount: {
//       type: Number,
//       required: [true, "Loan amount is required"],
//     },
//     employmentType: {
//       type: String,
//       required: [true, "Employment type is required"],
//       enum: ["Salaried", "Self Employed", "Business", "Other"],
//     },
//     monthlyIncome: {
//       type: Number,
//       required: [true, "Monthly income is required"],
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// const LoanApplication = mongoose.model(
//   "LoanApplication",
//   loanApplicationSchema
// );

// export default LoanApplication;




import mongoose from "mongoose";

const documentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  url: { type: String, required: true },
  publicId: { type: String, required: true },
  uploadedAt: { type: Date, default: Date.now },
});

const loanApplicationSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", index: true },
    partner: { type: mongoose.Schema.Types.ObjectId, ref: "Partner", default: null },
    loanProduct: { type: mongoose.Schema.Types.ObjectId, ref: "LoanProduct" },
    loanType: { type: String, required: true },
    amountRequested: { type: Number, required: true },
    tenureMonths: { type: Number, required: true },
    interestRate: { type: Number, default: 0 },
    purpose: { type: String, default: "" },
    employmentType: {
      type: String,
      enum: ["salaried", "self-employed", "business", "other"],
      default: "salaried",
    },
    monthlyIncome: { type: Number, default: 0 },
    applicantName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    panNumber: { type: String, default: "" },
    aadhaarNumber: { type: String, default: "" },
    city: { type: String, default: "" },
    state: { type: String, default: "" },
    pincode: { type: String, default: "" },
    documents: [documentSchema],
    status: {
      type: String,
      enum: ["pending", "under_review", "approved", "rejected", "disbursed"],
      default: "pending",
      index: true,
    },
    adminNotes: { type: String, default: "" },
    approvedAmount: { type: Number, default: 0 },
    disbursedAt: { type: Date, default: null },
  },
  { timestamps: true }
);

loanApplicationSchema.index({ createdAt: -1 });

export default mongoose.model("LoanApplication", loanApplicationSchema);

