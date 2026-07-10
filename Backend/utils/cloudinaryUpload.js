import cloudinary from "../config/cloudinary.js";
import fs from "fs";

export const uploadToCloudinary = async (filePath, folder = "cavner/documents", opts = {}) => {
  console.log(filePath)
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      folder,
      resource_type:"auto",
      ...opts,
    });
    console.log("first")

    return {
      url: result.secure_url,
      publicId: result.public_id,
    };
  } catch(error){
    console.log(error)
  }
  finally {
    // Always delete the temporary file after upload (success or failure)
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      console.log("second")
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
