import { Router } from "express";
import { applyLoan, applyCreditCard, getMyApplications, contactUs } from "../controllers/applicationController.js";
import { loanApplicationValidator, creditCardApplicationValidator, contactValidator } from "../validators/applicationValidators.js";
import { validate } from "../middlewares/validate.js";
import { uploadFields } from "../middlewares/uploadMiddleware.js";
import { protect, optionalAuth } from "../middlewares/authMiddleware.js";

const router = Router();

router.post("/loan", uploadFields, loanApplicationValidator, validate, applyLoan);
router.post("/credit-card", creditCardApplicationValidator, validate, applyCreditCard);
router.get("/my-applications", protect, getMyApplications);
router.post("/contact", contactValidator, validate, contactUs);

export default router;
