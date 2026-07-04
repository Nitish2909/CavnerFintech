import { Router } from "express";
import {
  getAllUsers, getUserById, updateUserStatus,
  getAllPartners, approvePartner, rejectPartner, updatePartnerStatus,
  getAllLoanApplications, updateLoanApplicationStatus,
  getAllCreditCardApplications, updateCreditCardApplicationStatus,
  getContactMessages, resolveContactMessage,
  getDashboardStats,
} from "../controllers/adminManageController.js";
import { protectAdmin } from "../middlewares/adminMiddleware.js";

const router = Router();

router.use(protectAdmin);

router.get("/stats", getDashboardStats);

// Users
router.get("/users", getAllUsers);
router.get("/users/:id", getUserById);
router.put("/users/:id/status", updateUserStatus);

// Partners
router.get("/partners", getAllPartners);
router.put("/partners/:id/approve", approvePartner);
router.put("/partners/:id/reject", rejectPartner);
router.put("/partners/:id/status", updatePartnerStatus);

// Loan applications
router.get("/loan-applications", getAllLoanApplications);
router.put("/loan-applications/:id/status", updateLoanApplicationStatus);

// Credit card applications
router.get("/credit-card-applications", getAllCreditCardApplications);
router.put("/credit-card-applications/:id/status", updateCreditCardApplicationStatus);

// Contact messages
router.get("/contact-messages", getContactMessages);
router.put("/contact-messages/:id", resolveContactMessage);

export default router;
