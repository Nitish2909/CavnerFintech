// controllers/offerController.js
import { Offer } from '../models/Offer.js';

// GET: Fetch all offers ordered by newest first
export const getAllOffers = async (req, res) => {
  try {
    const offers = await Offer.find().sort({ createdAt: -1 });
    res.status(200).json(offers);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving offers collection', error: error.message });
  }
};

// POST: Parse dynamic form fields and establish target offer document
export const createOffer = async (req, res) => {
  try {
    const data = { ...req.body };

    // If an image file was processed by multer, extract its secure CDN URL
    if (req.file) {
      data.image = req.file.path; 
    }

    const newOffer = new Offer(data);
    await newOffer.save();

    res.status(201).json(newOffer);
  } catch (error) {
    res.status(400).json({ message: 'Failed creating promotional offer entry', error: error.message });
  }
};