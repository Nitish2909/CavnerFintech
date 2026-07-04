import { Router } from "express";
import {
  createLoanProduct, updateLoanProduct, deleteLoanProduct, getAllLoanProductsAdmin,
  createCreditCard, updateCreditCard, deleteCreditCard, getAllCreditCardsAdmin,
} from "../controllers/productController.js";
import { loanProductValidator, creditCardProductValidator } from "../validators/adminValidators.js";
import { validate } from "../middlewares/validate.js";
import { protectAdmin } from "../middlewares/adminMiddleware.js";

const router = Router();

router.use(protectAdmin);

// Loan products
router.get("/loans", getAllLoanProductsAdmin);
router.post("/loans", loanProductValidator, validate, createLoanProduct);
router.put("/loans/:id", updateLoanProduct);
router.delete("/loans/:id", deleteLoanProduct);

// Credit cards
router.get("/credit-cards", getAllCreditCardsAdmin);
router.post("/credit-cards", creditCardProductValidator, validate, createCreditCard);
router.put("/credit-cards/:id", updateCreditCard);
router.delete("/credit-cards/:id", deleteCreditCard);

export default router;
