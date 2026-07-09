import mongoose from "mongoose";

const AddEmployeeSchema = new mongoose.Schema({
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
    // Document Uploads (Stores Cloudflare R2 URL links)
    aadharfront: {
        type: String,
        required: true
    },
    aadharback: {
        type: String,
        required: true
    },
    pancard: {
        type: String,
        required: true
    },
    selfie: {
        type: String,
        required: true
    },
    signature: {
        type: String,
        required: true
    }
}, {
    timestamps: true // Tracks exactly when the employee profile was created or updated
});

// Compile and export the model
const Employee = mongoose.models.Employee || mongoose.model("Employee", AddEmployeeSchema);
export default Employee;
