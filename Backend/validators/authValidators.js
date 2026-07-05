import { body } from "express-validator";

export const registerValidator = [
  body("name").trim().notEmpty().withMessage("Name is required").isLength({ min: 2, max: 80 }).withMessage("Name must be 2-80 chars"),
  body("email").trim().isEmail().withMessage("Valid email required").normalizeEmail(),
  body("phone").trim().matches(/^[6-9]\d{9}$/).withMessage("Valid 10-digit Indian mobile number required"),
  body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 chars"),
  body("dob").optional().isISO8601().withMessage("Valid date of birth required"),
  body("pannumber").optional().matches(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/).withMessage("Valid PAN number required"),
  body("pincode").optional().matches(/^[1-9]\d{5}$/).withMessage("Valid 6-digit pincode required"),
];

export const loginValidator = [
  body("email").trim().isEmail().withMessage("Valid email required").normalizeEmail(),
  body("password").notEmpty().withMessage("Password required"),
];

export const updateProfileValidator = [
  body("name").optional().trim().isLength({ min: 2, max: 80 }),
  body("dob").optional().isISO8601(),
  body("pannumber").optional().matches(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/),
  body("pincode").optional().matches(/^[1-9]\d{5}$/),
];

export const sendOtpValidator = [
  body("identifier").trim().notEmpty().withMessage("Identifier required"),
  body("type").isIn(["email", "phone"]).withMessage("Type must be email or phone"),
  body("purpose").optional().isIn(["registration", "login", "reset", "verification"]),
];

export const verifyOtpValidator = [
  body("identifier").trim().notEmpty(),
  body("type").isIn(["email", "phone"]),
  body("otp").isLength({ min: 4, max: 8 }).withMessage("Valid OTP required"),
];
