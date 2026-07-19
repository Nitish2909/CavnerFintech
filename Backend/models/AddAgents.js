
import mongoose from "mongoose";
import { AutoIncrement } from "./AddEmployee.js";



const documentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  url: { type: String, required: true },
  publicId: { type: String, required: true },
  uploadedAt: { type: Date, default: Date.now },
});

const AddAgentSchema = new mongoose.Schema({
    agent_code : {
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
      residenceaddress: {
        type: String,
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


AddAgentSchema.plugin(AutoIncrement, { 
  inc_field: 'agent_code', 
  start_seq: 1 
});
// Compile and export the model
const Agent = mongoose.models.Agent || mongoose.model("Agent", AddAgentSchema);
export default Agent;
