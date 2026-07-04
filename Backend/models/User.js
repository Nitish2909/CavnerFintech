// import mongoose from 'mongoose';

// const userSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: [true, 'Name is required'],
//       trim: true,
//     },
//     email: {
//       type: String,
//       required: [true, 'Email is required'],
//       unique: true,
//       trim: true,
//       lowercase: true,
//       match: [/^\S+@\S+\.\S+$/, 'Please fill a valid email address'],
//     },
//     phone: {
//       type: String,
//       required: [true, 'Phone number is required'],
//       unique: true,
//       trim: true,
//     },
//     password: {
//       type: String,
//       required: [true, 'Password is required'],
//     },
//     dob: {
//       type: Date,
//       required: [true, 'Date of birth is required'], // Synced with controller
//     },
//     pannumber: {
//       type: String,
//       required: [true, 'PAN number is required'], // Synced with controller
//       uppercase: true,
//       trim: true,
//     },
//     pincode: {
//       type: String,
//       required: [true, 'Pincode is required'], // Synced with controller
//       trim: true,
//     },
//   },
//   {
//     timestamps: true, // Automatically manages createdAt and updatedAt
//   }
// );

// const User = mongoose.model('User', userSchema);

// export default User;



import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const addressSchema = new mongoose.Schema({
  line1: { type: String, default: "" },
  line2: { type: String, default: "" },
  city: { type: String, default: "" },
  state: { type: String, default: "" },
  pincode: { type: String, default: "" },
});

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
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
    dob: { type: String, default: "" },
    pannumber: {
      type: String,
      uppercase: true,
      trim: true,
      default: "",
    },
    pincode: { type: String, default: "" },
    address: { type: addressSchema, default: () => ({}) },
    avatar: { type: String, default: "" },
    isEmailVerified: { type: Boolean, default: false },
    isPhoneVerified: { type: Boolean, default: false },
    role: { type: String, enum: ["user", "admin"], default: "user" },
    status: { type: String, enum: ["active", "blocked", "deleted"], default: "active" },
    cibilScore: { type: Number, default: null },
    lastLogin: { type: Date, default: null },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.methods.matchPassword = function (entered) {
  return bcrypt.compare(entered, this.password);
};

userSchema.methods.toSafeObject = function () {
  const obj = this.toObject();
  delete obj.password;
  return obj;
};

export default mongoose.model("User", userSchema);
