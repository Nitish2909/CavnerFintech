// routes/offerRoutes.js
import express from 'express';
import { getAllOffers, createOffer } from '../controllers/offerController.js';
import { upload } from '../config/cloudinary.js';

const router = express.Router();

// Maps cleanly to context: /api/offers
router.route('/')
  .get(getAllOffers)
  .post(upload.single('image'), createOffer); // Intercepts multipart 'image' files

export default router;