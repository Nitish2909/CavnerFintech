import { Schema, model } from 'mongoose';

const offerSchema = new Schema(
  {
    offerFor: { 
      type: String, 
      required: true, 
      enum: ['All Users', 'Premium Users', 'New Users'] 
    },
    title: { 
      type: String, 
      required: true, 
      trim: true 
    },
    image: { 
      type: String, 
      default: null 
    },
    startDate: { 
      type: Date, 
      required: true 
    },
    endDate: { 
      type: Date, 
      required: true 
    },
    couponCode: { 
      type: String, 
      trim: true, 
      default: '' 
    },
    description: { 
      type: String, 
      trim: true, 
      default: '' 
    },
    type: { 
      type: String, 
      required: true, 
      enum: ['Percentage', 'Flat Rate'] 
    },
    url: { 
      type: String, 
      trim: true, 
      default: '' 
    },
    offerType: { 
      type: String, 
      required: true, 
      enum: ['Discount', 'Cashback', 'Freebie'] 
    }
  },
  { 
    timestamps: true 
  }
);

export const Offer = model('Offer', offerSchema);