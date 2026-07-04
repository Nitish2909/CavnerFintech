import dotenv from "dotenv";
dotenv.config();

export const config = {
  port: process.env.PORT || 3000,
  nodeEnv: process.env.NODE_ENV || "development",
  clientUrl: process.env.CLIENT_URL || "http://localhost:5173",
  adminUrl: process.env.ADMIN_URL || "http://localhost:5174",
  mongoUri: process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/cavner_fintech",
  jwt: {
    userSecret: process.env.JWT_SECRET || "user_dev_secret",
    adminSecret: process.env.ADMIN_JWT_SECRET || "admin_dev_secret",
    partnerSecret: process.env.PARTNER_JWT_SECRET || "partner_dev_secret",
    expiresIn: process.env.JWT_EXPIRES_IN || "7d",
  },
  cloudinary: {
    cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    apiKey: process.env.CLOUDINARY_API_KEY,
    apiSecret: process.env.CLOUDINARY_API_SECRET,
  },
  resend: {
    apiKey: process.env.RESEND_API_KEY,
    from: process.env.EMAIL_FROM || "Cavner Fintech <no-reply@cavnerfintech.in>",
  },
  msg91: {
    authKey: process.env.MSG91_AUTH_KEY,
    senderId: process.env.MSG91_SENDER_ID || "CAVNER",
    templateId: process.env.MSG91_TEMPLATE_ID,
    otpLength: parseInt(process.env.MSG91_OTP_LENGTH || "6", 10),
  },
};
