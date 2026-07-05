import { body } from "express-validator";

export const loanApplicationValidator = [
  body("loanType").trim().notEmpty().withMessage("Loan type required"),
  body("amountRequested").isNumeric().withMessage("Amount required").toFloat(),
  body("tenureMonths").isInt({ min: 1, max: 360 }).withMessage("Tenure 1-360 months").toInt(),
  body("applicantName").trim().notEmpty(),
  body("email").trim().isEmail().normalizeEmail(),
  body("phone").trim().matches(/^[6-9]\d{9}$/),
  body("panNumber").optional().matches(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/),
  body("monthlyIncome").optional().isNumeric().toFloat(),
  body("employmentType").optional().isIn(["salaried", "self-employed", "business", "other"]),
];

export const creditCardApplicationValidator = [
  body("applicantName").trim().notEmpty(),
  body("email").trim().isEmail().normalizeEmail(),
  body("phone").trim().matches(/^[6-9]\d{9}$/),
  body("monthlyIncome").optional().isNumeric().toFloat(),
];

export const contactValidator = [
  body("name").trim().notEmpty(),
  body("email").trim().isEmail().normalizeEmail(),
  body("message").trim().isLength({ min: 5, max: 2000 }),
  body("phone").optional().matches(/^[6-9]\d{9}$/),
  body("subject").optional(),
];


