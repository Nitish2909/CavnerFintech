import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
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
    password: {
      type: String,
      required: [true, 'Password is required'],
    },
    dob: {
      type: Date, 
      required: [true, 'Date of birth is required'], // Synced with controller
    },
    pannumber: {
      type: String,
      required: [true, 'PAN number is required'], // Synced with controller
      uppercase: true,
      trim: true,
    },
    pincode: {
      type: String,
      required: [true, 'Pincode is required'], // Synced with controller
      trim: true,
    },
  },
  {
    timestamps: true, // Automatically manages createdAt and updatedAt
  }
);

const User = mongoose.model('User', userSchema);

export default User;