import { body } from "express-validator";

export const partnerRegisterValidator = [
  body("companyName").trim().notEmpty().withMessage("Company name required"),
  body("contactPerson").trim().notEmpty().withMessage("Contact person required"),
  body("email").trim().isEmail().normalizeEmail().withMessage("Valid email required"),
  body("phone").trim().matches(/^[6-9]\d{9}$/).withMessage("Valid 10-digit Indian mobile required"),
  body("password").isLength({ min: 6 }).withMessage("Password must be 6+ chars"),
  body("gstNumber").optional().matches(/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/).withMessage("Valid GST number required"),
  body("panNumber").optional().matches(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/),
  body("businessType").optional().isIn(["DSA", "NBFC", "Bank", "Individual Agent", "Fintech", "Other"]),
];

export const partnerLoginValidator = [
  body("email").trim().isEmail().normalizeEmail(),
  body("password").notEmpty(),
];

export const leadValidator = [
  body("leadName").trim().notEmpty(),
  body("phone").trim().matches(/^[6-9]\d{9}$/),
  body("email").optional().isEmail().normalizeEmail(),
  body("loanType").optional(),
  body("amount").optional().isNumeric(),
];

export const sendOtpValidator = [

]

export const verifyOtpValidator = [
  
]