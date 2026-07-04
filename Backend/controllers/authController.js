// import User from "../models/User.js";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
// import { generateAccessToken, generateRefreshToken } from "../utils/jwt.js";
// import sessionModel from "../models/sessionModel.js";
// import crypto from "crypto";

// /**
//  * @name registerUserController
//  * @route POST /api/auth/register
//  * @description register a new user
//  * @access Public
//  */
// export const registerUserController = async (req, res) => {
//   try {
//     const { name, email,phone,dob,pannumber,pincode, password } = req.body;
//     //1. check empty
//     if (!name || !email || !phone || !dob || !pannumber || !pincode ||  !password) {
//       return res.status(400).json({
//         message: "All Fields Are Required",
//       });
//     }
//     //2.Check users in database
//     const userExisted = await User.findOne({
//       email, 
//     })
//     if (userExisted) {
//       return res.status(400).json({
//         message: "User Already Register with this Email Id",
//       });
//     }
//     //3.hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     //4.create a new user
//     const user = await User.create({
//       name,
//       email,
//       phone,
//       dob,
//       pannumber,
//       pincode,
//       password: hashedPassword,
//     });
//     //5. Generate refresh token
//     const refreshToken = generateRefreshToken(user._id);

//     //6.hash the refresh token before storing in database for security
//     const hashedRefreshToken = crypto.createHash("sha256").update(refreshToken).digest("hex");
//     //7.generate session
//     const session = await sessionModel.create({
//       user: user._id,
//       refreshToken: hashedRefreshToken,
//       ip:req.ip,
//       userAgent:req.headers["user-agent"],
//     })
//     //8. Generate access token
//     const accessToken = generateAccessToken(user._id);

//     //9.store token in cookies
//     res.cookie("refreshToken", refreshToken, {
//       httpOnly: true,
//       secure: false, // Set to true in production with HTTPS
//       sameSite: "Lax",
//       maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
//     }).cookie("accessToken", accessToken, {
//       httpOnly: true,
//       secure: false, // Set to true in production with HTTPS
//       sameSite: "Lax",
//       maxAge: 15 * 60 * 1000, // 15 minutes
//     });

//     //10. send response with user
//     return res.status(201).json({
//       success: true, 
//       message: "User Registered Successfully",
//       user: {
//         _id: user._id,
//         name: user.name,
//         email: email,
        
//       },
//       accessToken, // send to frontend
//     });
//   } catch (error) {
//     console.log(error)
//     return res.status(500).json({
//       message: "Server error",
//     });
//   }
// };
// /**
//  * @name loginUserController
//  * @route POST /api/auth/login
//  * @description login a user by their fullname and phonenumber
//  * @access Public
//  */
// export const loginUserController = async (req, res) => {
//   try {
//      /* ================= NORMAL LOGIN ================= */

//     //1. get email and password from request body
//     const { name, email, password } = req.body;

//     //2. check empty
//     if (!name || !email || !password) {
//       return res.status(400).json({
//         message: "All Fields Are Required",
//       });
//     }

//     //3.check user in database
//     const user = await User.findOne({ email });

//     //4. if user not found
//     if (!user) {
//       return res.status(404).json({
//         message: "User Not Found",
//       });
//     }

//     //5. compare password
//     const isMatched = await bcrypt.compare(password, user.password);

//     //6. if password not matched
//     if (!isMatched) {
//       return res.status(404).json({
//         message: "User Not Found",
//       });
//     }

//     //7. genetrate refresh token
//     const refreshToken = generateRefreshToken(user._id);

//     //8.hash the refresh token before storing in database for security
//     const hashedRefreshToken = await crypto.createHash("sha256").update(refreshToken).digest("hex");

//     //9. generate session
//     const session = await sessionModel.create({
//       user: user._id,
//       refreshToken: hashedRefreshToken,
//       ip:req.ip,
//       userAgent:req.headers["user-agent"],
//     })

//     //10. generate access token
//     const accessToken = generateAccessToken(user._id);
  

//     //11. store token in cookies
//     res.cookie("refreshToken", refreshToken, {
//       httpOnly: true,
//       secure: false, // Set to true in production with HTTPS
//       sameSite: "Lax",
//       maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
//     }).cookie("accessToken", accessToken, {
//       httpOnly: true,
//       secure: false, // Set to true in production with HTTPS
//       sameSite: "Lax",
//       maxAge: 15 * 60 * 1000, // 15 minutes
//     });

//    // 12 send response with user and access token
//     res.status(201).json({
//       success: true,
//       message: "User LoggedIn Successfully",
//       user: {
//         _id: user._id,
//         name: user.name,
//         email: email,
//       },
//       accessToken, // send to frontend
//     });
//   } catch (error) {
//     res.status(500).json({
//       message: "Server Error",
//     });
//   }
// };

// /**
//  * @name getMeController
//  * @route GET /api/auth/get-me
//  * @description fetch the user details
//  * @access Private
//  */

// export const getMeController = async (req, res) => {
//   try {
//     const user = await User.findById(req.user.id).select("-password");

//     if (!user) {
//       return res.status(404).json({
//         message: "User Not Found",
//       });
//     }
//     res.status(200).json({
//       success: true,
//       message: "User details fetched successfully",
//       user,
//     });
//   } catch (error) {
//     res.status(500).json({
//       message: "Server Error",
//     });
//   }
// };

// /**
//  * @name refreshTokenController
//  * @route GET /api/auth/refresh-token
//  * @description
//  */

// export const refreshTokenController = async (req, res) => {
//   try {
//     //1. get refresh token from cookie
//     const refreshToken = req.cookies.refreshToken;

//     if (!refreshToken) {
//       return res.status(401).json({
//         message: "No Refresh Token Provided",
//       });
//     }

//     //2. verify refresh token
//     const decoded = jwt.verify(refreshToken, process.env.JWT_SECRET);

//     //3. hsh the refresh token before comparing with database token for security
//     const hashedRefreshToken = await crypto.createHash("sha256").update(refreshToken).digest("hex");

//     //4. find the session in database
//     const session = await sessionModel.findOne({
//       refreshToken: hashedRefreshToken,
//       revoked: false,
//     });

//     //5. if no session found
//     if (!session) {
//       return res.status(401).json({
//         message: "Invalid Refresh Token",
//       });
//      }

//     //6. generate token
//     const accessToken = generateAccessToken(decoded.id);
//     const newRefreshToken = generateRefreshToken(decoded.id);

//     //7. hash the new refresh token before storing in database for security
//     const hashedNewRefreshToken = crypto.createHash("sha256").update(newRefreshToken).digest("hex");

//     //8. update session in database with new refresh token
//     session.refreshToken = hashedNewRefreshToken;
//     await session.save();

//     //9. store token in cookies
//     res.cookie("refreshToken", newRefreshToken, {
//       httpOnly: true,
//       secure: false, // Set to true in production with HTTPS
//       sameSite: "Lax",
//       maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
//     }).cookie("accessToken", accessToken, {
//       httpOnly: true,
//       secure: false, // Set to true in production with HTTPS
//       sameSite: "Lax",
//       maxAge: 15 * 60 * 1000, // 15 minutes
//     });

//     //10. send response with
//     res.status(200).json({
//       success: true,
//       message: "Access Token Refreshed Successfully",
//       accessToken, // send to frontend
//     });
//   } catch (error) {
//     console.log(error);
//     return res.status(403).json({
//       message: "Invalid or Expired Refresh Token",
//     });
//   }
// };

// /**
//  * @name logOutUserController
//  * @route GET /api/auth/logout
//  * @description logout user
//  * @access Public
//  */
// export const logOutUserController = async (req, res) => {
//   try {
//     //1. get refresh token from cookie
//     const refreshToken = req.cookies.refreshToken;

//     //2. if no token in cookie
//     if (!refreshToken) {
//       return res.status(400).json({
//         message: "No Refresh Token Provided",
//       });
//     }

//     //3 hash the refresh token before comparing with database token for security
//     const hashedRefreshToken = await crypto.createHash("sha256").update(refreshToken).digest("hex");

//     //4 find the session in database
//     const session = await sessionModel.findOne({
//       refreshToken: hashedRefreshToken,
//       revoked: false,
//     });

//       //5. if no session found
//     if (!session) {
//       return res.status(400).json({
//         message: "Invalid Refresh Token",
//       });
//     }

//     //6. revoke the session
//     session.revoked = true;
//     await session.save();
    
//     //7. clear cookies
//     res.clearCookie("refreshToken", {
//       httpOnly: true,
//       secure: false, // Set to true in production with HTTPS
//       sameSite: "Lax",
//     });

//     res.status(200).json({
//       message: "User Logged Out Successfully",
//     });
//   } catch (error) {
//     res.status(500).json({
//       message: "Server Error",
//     });
//   }
// };

// /** * @name logOutAllUserController
//  * @route GET /api/auth/logout-all
//  * @description logout user from all devices by revoking all refresh tokens   
//  * @access Public
//  */

// export const logOutAllUserController = async (req, res) => {
//   try {
//    //1. get refresh token from cookie
//     const refreshToken = req.cookies.refreshToken;

//     //2. if no token in cookie
//     if (!refreshToken) {
//       return res.status(400).json({
//         message: "No Refresh Token Provided",
//       });
//     }
//     //3. verify refresh token
//     const decoded = jwt.verify(refreshToken, process.env.JWT_SECRET);

//     //4. revoke all sessions for the user
//    await sessionModel.updateMany({
//       user: decoded.id,
//       revoked: false,
//       }, {  revoked: true 
//    })
    
//    //5. clear cookies
//     res.clearCookie("refreshToken", {
//       httpOnly: true,
//       secure: false, // Set to true in production with HTTPS
//       sameSite: "Lax",
//     });
//     //6. send response
//     res.status(200).json({
//       message: "User Logged Out from All Devices Successfully",
//     });
//   } catch (error) {
//     res.status(500).json({
//       message: "Server Error",
//     });
//   }
// }



import User from "../models/User.js";
import Otp from "../models/Otp.js";
import { generateUserToken } from "../utils/jwt.js";
import { generateOtp, maskEmail, maskPhone } from "../utils/otp.js";
import { sendOtpEmail } from "../utils/emailService.js";
import { sendOtpSms, verifyOtpSms } from "../utils/smsService.js";
import { ApiError, asyncHandler, sendResponse } from "../utils/apiResponse.js";

const OTP_TTL_MINUTES = 10;
const MAX_ATTEMPTS = 5;

const issueOtp = async (identifier, type, purpose) => {
  const existing = await Otp.findOne({ identifier, type, verified: false });
  if (existing && existing.attempts >= MAX_ATTEMPTS) {
    throw new ApiError("Too many attempts. Please try again later.", 429);
  }
  if (existing) await Otp.deleteOne({ _id: existing._id });

  const otp = generateOtp(6);
  await Otp.create({
    identifier,
    type,
    otp,
    purpose,
    expiresAt: new Date(Date.now() + OTP_TTL_MINUTES * 60 * 1000),
  });

  if (type === "email") {
    await sendOtpEmail(identifier, otp, purpose);
  } else {
    await sendOtpSms(identifier, otp);
  }
};

export const sendOtp = asyncHandler(async (req, res) => {
  const { identifier, type, purpose = "verification" } = req.body;
  const normalized = type === "email" ? identifier.toLowerCase().trim() : identifier.trim();

  // For registration, ensure email/phone not already registered
  if (purpose === "registration") {
    if (type === "email" && (await User.findOne({ email: normalized }))) {
      throw new ApiError("Email already registered. Please login.", 409);
    }
    if (type === "phone" && (await User.findOne({ phone: normalized }))) {
      throw new ApiError("Phone already registered. Please login.", 409);
    }
  }

  await issueOtp(normalized, type, purpose);
  const masked = type === "email" ? maskEmail(normalized) : maskPhone(normalized);
  sendResponse(res, 200, `OTP sent to ${masked}`, { masked });
});

export const verifyOtp = asyncHandler(async (req, res) => {
  const { identifier, type, otp } = req.body;
  const normalized = type === "email" ? identifier.toLowerCase().trim() : identifier.trim();

  const record = await Otp.findOne({ identifier: normalized, type, verified: false });
  if (!record) throw new ApiError("No active OTP found. Please request a new one.", 404);
  if (record.expiresAt < new Date()) {
    await Otp.deleteOne({ _id: record._id });
    throw new ApiError("OTP expired. Please request a new one.", 410);
  }

  record.attempts += 1;
  await record.save();

  if (record.attempts > MAX_ATTEMPTS) {
    await Otp.deleteOne({ _id: record._id });
    throw new ApiError("Too many wrong attempts. Please request a new OTP.", 429);
  }

  if (record.otp !== otp) throw new ApiError("Invalid OTP", 400);

  record.verified = true;
  await record.save();

  if (type === "phone" && process.env.MSG91_AUTH_KEY) {
    try { await verifyOtpSms(normalized, otp); } catch { /* fall back to our record */ }
  }

  sendResponse(res, 200, "OTP verified successfully", { verified: true });
});

export const register = asyncHandler(async (req, res) => {
  const { name, email, phone, password, dob, pannumber, pincode } = req.body;

  const existing = await User.findOne({ $or: [{ email: email.toLowerCase() }, { phone }] });
  if (existing) {
    throw new ApiError("User with this email or phone already exists", 409);
  }

  // Require verified OTPs for email and phone
  const emailOtp = await Otp.findOne({
    identifier: email.toLowerCase(),
    type: "email",
    verified: true,
    purpose: "registration",
  });
  const phoneOtp = await Otp.findOne({
    identifier: phone,
    type: "phone",
    verified: true,
    purpose: "registration",
  });

  if (!emailOtp) throw new ApiError("Email not verified via OTP", 400);
  if (!phoneOtp) throw new ApiError("Phone not verified via OTP", 400);

  const user = await User.create({
    name,
    email: email.toLowerCase(),
    phone,
    password,
    dob: dob || "",
    pannumber: (pannumber || "").toUpperCase(),
    pincode: pincode || "",
    isEmailVerified: true,
    isPhoneVerified: true,
  });

  // Clean up used OTPs
  await Otp.deleteMany({ identifier: { $in: [email.toLowerCase(), phone] } });

  const token = generateUserToken(user._id);
  res.cookie("userToken", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  sendResponse(res, 201, "Registration successful", { user: user.toSafeObject(), token });
});

export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email.toLowerCase() }).select("+password");
  if (!user) throw new ApiError("Invalid credentials", 401);
  if (user.status === "blocked") throw new ApiError("Account blocked. Contact support.", 403);

  const isMatch = await user.matchPassword(password);
  if (!isMatch) throw new ApiError("Invalid credentials", 401);

  user.lastLogin = new Date();
  await user.save();

  const token = generateUserToken(user._id);
  res.cookie("userToken", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  sendResponse(res, 200, "Login successful", { user: user.toSafeObject(), token });
});

export const loginWithOtp = asyncHandler(async (req, res) => {
  const { identifier, type, otp } = req.body;
  const normalized = type === "email" ? identifier.toLowerCase().trim() : identifier.trim();

  const record = await Otp.findOne({ identifier: normalized, type, verified: false });
  if (!record || record.otp !== otp || record.expiresAt < new Date()) {
    throw new ApiError("Invalid or expired OTP", 400);
  }
  record.verified = true;
  await record.save();

  const user = await User.findOne(
    type === "email" ? { email: normalized } : { phone: normalized }
  );
  if (!user) throw new ApiError("No account found. Please register first.", 404);
  if (user.status === "blocked") throw new ApiError("Account blocked", 403);

  await Otp.deleteOne({ _id: record._id });

  const token = generateUserToken(user._id);
  res.cookie("userToken", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  sendResponse(res, 200, "Login successful", { user: user.toSafeObject(), token });
});

export const getMe = asyncHandler(async (req, res) => {
  sendResponse(res, 200, "Profile fetched", { user: req.user.toSafeObject() });
});

export const updateProfile = asyncHandler(async (req, res) => {
  const allowed = ["name", "dob", "pannumber", "pincode", "address", "avatar"];
  const updates = {};
  for (const key of allowed) {
    if (req.body[key] !== undefined) updates[key] = req.body[key];
  }
  const user = await User.findByIdAndUpdate(req.user._id, { $set: updates }, { new: true });
  sendResponse(res, 200, "Profile updated", { user: user.toSafeObject() });
});

export const logout = asyncHandler(async (req, res) => {
  res.clearCookie("userToken");
  sendResponse(res, 200, "Logged out successfully");
});
