import { Router } from "express";
import { sendOtp, verifyOtp, register, login, loginWithOtp, getMe, updateProfile, logout } from "../controllers/authController.js";
import { sendOtpValidator, verifyOtpValidator, registerValidator, loginValidator, updateProfileValidator } from "../validators/authValidators.js";
import { validate } from "../middlewares/validate.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = Router();

router.post("/send-otp", sendOtpValidator, validate, sendOtp);
router.post("/verify-otp", verifyOtpValidator, validate, verifyOtp);
router.post("/register", registerValidator, validate, register);
router.post("/login", loginValidator, validate, login);
router.post("/login-otp", verifyOtpValidator, validate, loginWithOtp);
router.get("/me", protect, getMe);
router.put("/profile", protect, updateProfileValidator, validate, updateProfile);
router.post("/logout", protect, logout);

export default router;
