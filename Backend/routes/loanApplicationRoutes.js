import express from "express";
import {
  addLoanApplicationController,
  getLoanApplicationController,
  getSingleLoanApplicationController,
} from "../controllers/loanApplicationController.js";

const router = express.Router();

router.post("/", addLoanApplicationController);
router.get("/", getLoanApplicationController);
router.get("/:id", getSingleLoanApplicationController);

export default router;