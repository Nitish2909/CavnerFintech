import express from "express";
import { addLoanApplicationController, getLoanApplcationController } from "../controllers/loanApplicationController.js";
const router = express.Router();


router.post("/", addLoanApplicationController);

router.get("/", getLoanApplcationController )


export default router;