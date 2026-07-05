import { Router } from "express";
import {
  sendPartnerOtp, verifyPartnerOtp, registerPartner, loginPartner,
  getPartnerProfile, updatePartnerProfile, logoutPartner,
  createLead, getMyLeads, getPartnerDashboard,
} from "../controllers/partnerController.js";
import { partnerRegisterValidator, partnerLoginValidator, leadValidator, sendOtpValidator, verifyOtpValidator } from "../validators/partnerValidators.js";
import { validate } from "../middlewares/validate.js";
import { protectPartner } from "../middlewares/partnerMiddleware.js";

const router = Router();

router.post("/send-otp", sendOtpValidator, validate, sendPartnerOtp);
router.post("/verify-otp", verifyOtpValidator, validate, verifyPartnerOtp);
router.post("/register", partnerRegisterValidator, validate, registerPartner);
router.post("/login", partnerLoginValidator, validate, loginPartner);

router.get("/profile", protectPartner, getPartnerProfile);
router.put("/profile", protectPartner, updatePartnerProfile);
router.post("/logout", protectPartner, logoutPartner);
router.get("/dashboard", protectPartner, getPartnerDashboard);
router.post("/leads", protectPartner, leadValidator, validate, createLead);
router.get("/leads", protectPartner, getMyLeads);

export default router;
