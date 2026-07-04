import cloudinary from "../config/cloudinary.js";
import fs from "fs";

export const uploadToCloudinary = async (filePath, folder = "cavner/documents", opts = {}) => {
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      folder,
      resource_type: "auto",
      ...opts,
    });
    return {
      url: result.secure_url,
      publicId: result.public_id,
    };
  } finally {
    // Always delete the temporary file after upload (success or failure)
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
  }
};

export const deleteFromCloudinary = async (publicId) => {
  try {
    await cloudinary.uploader.destroy(publicId);
    return true;
  } catch (err) {
    console.error("Cloudinary delete error:", err.message);
    return false;
  }
};
