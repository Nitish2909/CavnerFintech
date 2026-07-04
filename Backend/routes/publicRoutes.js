import { Router } from "express";
import { getLoanProducts, getLoanProductBySlug, getCreditCards, getCreditCardBySlug } from "../controllers/publicController.js";

const router = Router();

router.get("/loans", getLoanProducts);
router.get("/loans/:slug", getLoanProductBySlug);
router.get("/credit-cards", getCreditCards);
router.get("/credit-cards/:slug", getCreditCardBySlug);

export default router;
