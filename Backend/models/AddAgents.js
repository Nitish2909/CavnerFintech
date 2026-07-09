import mongoose from "mongoose";

const AddAgentsSchema = new mongoose.Schema({
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
        unique: true, // Prevents duplicate agent registrations
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
    residenceaddress: {
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
    // Document uploads (Store Cloudflare R2 URLs or Object Keys here)
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
    timestamps: true // Automatically adds createdAt and updatedAt fields
});

// Compile and export the model
const Agent = mongoose.models.Agent || mongoose.model("Agent", AddAgentsSchema);
export default Agent;
