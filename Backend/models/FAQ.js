import mongoose from 'mongoose';

const faqSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: true,
      trim: true,
    },
    answer: {
      type: String, // Supports plain text or HTML/Markdown content strings
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      trim: true, // E.g., 'General', 'Loans', 'Credit Score', 'Partner Program'
      index: true,
    },
    order: {
      type: Number,
      default: 0, // Used to sequence or sort FAQs manually in your frontend layout view
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true, // Automatically manages createdAt and updatedAt tracking
  }
);

// Performance & Sequencing Indexes
faqSchema.index({ category: 1, isActive: 1, order: 1 });

const FAQ = mongoose.model('FAQ', faqSchema);

export default FAQ;