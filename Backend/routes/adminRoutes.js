import { Router } from "express";
import { loginAdmin, getAdminProfile, logoutAdmin, createAdmin } from "../controllers/adminController.js";
import { adminLoginValidator } from "../validators/adminValidators.js";
import { validate } from "../middlewares/validate.js";
import { protectAdmin, requireSuperadmin } from "../middlewares/adminMiddleware.js";

const router = Router();

router.post("/login", adminLoginValidator, validate, loginAdmin);
router.get("/profile", protectAdmin, getAdminProfile);
router.post("/logout", protectAdmin, logoutAdmin);
router.post("/create", protectAdmin, requireSuperadmin, createAdmin);

export default router;
