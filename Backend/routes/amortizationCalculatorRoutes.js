import express from "express";
import amortizationCalculatorController from "../controllers/amortizationCalculatorController.js";
const router = express.Router()


router.post("/calculate", amortizationCalculatorController);

export default router;