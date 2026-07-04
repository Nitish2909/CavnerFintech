// import express from "express";
// import { getMeController, loginUserController, logOutAllUserController, logOutUserController, refreshTokenController, registerUserController } from "../controllers/authController.js";
// import { auth } from "../middleware/authMiddleware.js";
// const router = express();

// /**
//  * @route POST /api/auth/register
//  * @description Register a new user
//  * @access Public   
//  */
// router.post("/register", registerUserController);

// /**
//  * @route POST /api/auth/login
//  * @description Login user and generate access and refresh tokens
//  * @access Public   
//  */
// router.post("/login", auth, loginUserController);

// /**
//  * @route GET /api/auth/get-me
//  * @description Fetch user details
//  * @access Private   
//  */
// router.get("/get-me", auth, getMeController)

// /**
//  * @route GET /api/auth/refresh-token
//  * @description Refresh access token using refresh token
//  * @access Public   
//  */
// router.get("/refresh-token", refreshTokenController)


// /**
//  * @route GET /api/auth/logout
//  * @description Logout user
//  * @access Public   
//  */
// router.get("/logout", auth, logOutUserController);

// /**
//  * @route GET /api/auth/logout-all
//  * @description Logout user from all devices by revoking all refresh tokens
//  * @access Public   
//  */
// router.get("/logout-all", auth, logOutAllUserController)


// export default router;




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
