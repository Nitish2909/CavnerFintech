import express from "express";
import { addPartnerController, getAllPartnerController, getSinglePartnerController } from "../controllers/partnerController.js";

const router = express.Router();    

router.post("/", addPartnerController);
router.get("/", getAllPartnerController);
router.get("/:id", getSinglePartnerController); 


export default router;