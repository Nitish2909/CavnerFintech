import mongoose from "mongoose";
import AutoIncrementFactory from 'mongoose-sequence';

const documentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  url: { type: String, required: true },
  publicId: { type: String, required: true },
  uploadedAt: { type: Date, default: Date.now },
});

const AddEmployeeSchema = new mongoose.Schema({
    code : {
        type : Number
    },
    fullname: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: String,
        required: true,
        trim: true
    },
    emailId: {
        type: String,
        required: true,
        unique: true, // Ensures employees cannot use duplicate emails
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    designationname: {
        type: String,
        required: true
    },
    joiningdate: {
        type: Date,
        required: true
    },
    dateofbirth: {
        type: Date,
        required: true
    },
    fathername: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    district: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    pincode: {
        type: String,
        required: true,
        trim: true
    },
    documents:[documentSchema],
    status: {
        type: String,
        enum: ["Active", "Inactive"],
        required: true,
        default : "Active"
    },
    consent: {
       type: String,
        enum: ["Approved", "Pending"],
        required: true,
        default: "Pending"
    },
    whatsapp: {
        type: String,
        enum: ["Enabled", "Disabled"],
        required: true,
        default:"Enabled"
    },
}, {
    timestamps: true // Tracks exactly when the employee profile was created or updated
});

 export const AutoIncrement = AutoIncrementFactory(mongoose);

AddEmployeeSchema.plugin(AutoIncrement, { 
  inc_field: 'code', 
  start_seq: 1 
});
// Compile and export the model
const Employee = mongoose.models.Employee || mongoose.model("Employee", AddEmployeeSchema);
export default Employee;
