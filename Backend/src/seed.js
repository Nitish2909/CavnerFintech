// Run with: node src/seed.js
import { connectDB } from "../config/db.js";
import Admin from "../models/Admin.js";
import LoanProduct from "../models/LoanProduct.js";
import CreditCard from "../models/CreditCard.js";
import mongoose from "mongoose";

const seed = async () => {
  await connectDB();

  // Create default superadmin
  const existing = await Admin.findOne({ email: "admin@cavnerfintech.in" });
  if (!existing) {
    await Admin.create({
      name: "Super Admin",
      email: "admin@cavnerfintech.in",
      password: "Admin@123",
      role: "superadmin",
    });
    console.log("Created superadmin: admin@cavnerfintech.in / Admin@123");
  } else {
    console.log("Superadmin already exists");
  }

  // Sample loan products
  const loans = [
    {
      name: "Personal Loan",
      slug: "personal-loan",
      category: "personal",
      description: "Quick personal loans for any need - travel, wedding, medical, or debt consolidation.",
      interestRateMin: 10.5, interestRateMax: 24,
      minAmount: 50000, maxAmount: 1500000,
      minTenureMonths: 12, maxTenureMonths: 60,
      processingFee: "Up to 2.5% of loan amount",
      eligibility: "Salaried or self-employed, age 21-60, minimum income Rs 15,000/month, CIBIL 700+",
      documentsRequired: ["PAN Card", "Aadhaar", "Salary slips (3 months)", "Bank statement (6 months)"],
      features: ["Instant approval", "Minimal documentation", "Flexible tenure", "No prepayment charges after 12 months"],
      partnerBanks: ["HDFC Bank", "ICICI Bank", "Bajaj Finserv", "Axis Bank"],
      metaTitle: "Personal Loan - Best Interest Rates | Cavner Fintech",
      metaDescription: "Apply for personal loans starting at 10.5% p.a. Quick approval, minimal documents. Compare top banks in India.",
      metaKeywords: "personal loan, instant personal loan, personal loan interest rate",
    },
    {
      name: "Home Loan",
      slug: "home-loan",
      category: "home",
      description: "Fulfill your dream of owning a home with attractive home loan interest rates.",
      interestRateMin: 8.4, interestRateMax: 11,
      minAmount: 500000, maxAmount: 50000000,
      minTenureMonths: 60, maxTenureMonths: 360,
      processingFee: "Up to 1% of loan amount",
      eligibility: "Age 21-65, stable income, CIBIL 750+, property should be approved",
      documentsRequired: ["PAN Card", "Aadhaar", "Income proof", "Property documents", "Bank statement (6 months)"],
      features: ["Up to 30 years tenure", "Tax benefits under Sec 80C & 24(b)", "Balance transfer facility", "Pre-approved offers"],
      partnerBanks: ["SBI", "HDFC", "ICICI", "LIC Housing Finance"],
      metaTitle: "Home Loan - Lowest Interest Rates from 8.4% | Cavner Fintech",
      metaDescription: "Apply for home loans up to Rs 5 crore with interest rates starting 8.4% p.a. Quick approval, tax benefits.",
      metaKeywords: "home loan, housing loan, home loan interest rate",
    },
    {
      name: "Education Loan",
      slug: "education-loan",
      category: "education",
      description: "Finance your higher education in India or abroad with flexible education loans.",
      interestRateMin: 9, interestRateMax: 14,
      minAmount: 100000, maxAmount: 40000000,
      minTenureMonths: 60, maxTenureMonths: 180,
      processingFee: "Up to 1.5%",
      eligibility: "Admission to recognized institute, co-applicant required, age 18-35",
      documentsRequired: ["PAN Card", "Aadhaar", "Admission letter", "Fee structure", "Income proof of co-applicant"],
      features: ["Moratorium period during study", "Up to Rs 40 lakh", "No collateral up to Rs 7.5 lakh (CGFSEL)", "Tax benefit under 80E"],
      partnerBanks: ["SBI", "Axis Bank", "HDFC Credila", "ICICI Bank"],
      metaTitle: "Education Loan - Study in India & Abroad | Cavner Fintech",
      metaDescription: "Education loans up to Rs 40 lakh for studies in India and abroad. No collateral up to Rs 7.5 lakh.",
      metaKeywords: "education loan, student loan, abroad education loan",
    },
    {
      name: "Business Loan",
      slug: "business-loan",
      category: "business",
      description: "Grow your business with unsecured and secured business loans.",
      interestRateMin: 11, interestRateMax: 22,
      minAmount: 100000, maxAmount: 50000000,
      minTenureMonths: 12, maxTenureMonths: 84,
      processingFee: "Up to 3%",
      eligibility: "Business vintage 2+ years, GST registered, ITR filed, CIBIL 700+",
      documentsRequired: ["PAN Card", "GST certificate", "ITR (2 years)", "Bank statement (12 months)", "Business proof"],
      features: ["Unsecured up to Rs 50 lakh", "Quick disbursal", "Minimal documentation", "Flexible repayment"],
      partnerBanks: ["HDFC", "ICICI", "Bajaj Finserv", "Tata Capital"],
      metaTitle: "Business Loan - Unsecured up to Rs 50 Lakh | Cavner Fintech",
      metaDescription: "Business loans up to Rs 5 crore for MSMEs. Quick approval, minimal documents, flexible tenure.",
      metaKeywords: "business loan, msme loan, unsecured business loan",
    },
  ];

  for (const loan of loans) {
    const exists = await LoanProduct.findOne({ slug: loan.slug });
    if (!exists) await LoanProduct.create(loan);
  }
  console.log("Loan products seeded");

  // Sample credit cards
  const cards = [
    {
      name: "Cashback Saver Card",
      slug: "cashback-saver-card",
      issuer: "HDFC Bank",
      cardType: "rupay",
      category: "cashback",
      description: "Earn cashback on every spend with no annual fee.",
      annualFee: 0, joiningFee: 500,
      interestRate: 3.5,
      creditLimit: "Up to Rs 2,00,000",
      benefits: ["5% cashback on bill payments", "1% on all spends", "Fuel surcharge waiver", "No annual fee on Rs 50k spend"],
      eligibility: "Income Rs 3 lakh/year, age 21-60, CIBIL 720+",
      metaTitle: "Cashback Saver Credit Card - HDFC | Cavner Fintech",
      metaDescription: "Get 5% cashback on bill payments and 1% on all spends. Apply for HDFC Cashback Saver Card.",
      metaKeywords: "cashback credit card, hdfc credit card",
    },
    {
      name: "Travel Platinum Card",
      slug: "travel-platinum-card",
      issuer: "ICICI Bank",
      cardType: "visa",
      category: "travel",
      description: "Premium travel card with lounge access and air miles.",
      annualFee: 3000, joiningFee: 3000,
      interestRate: 3.5,
      creditLimit: "Up to Rs 10,00,000",
      benefits: ["8 domestic lounge access/year", "4 international lounge access", "2x reward points on travel", "Complimentary travel insurance"],
      eligibility: "Income Rs 6 lakh/year, age 21-65, CIBIL 750+",
      metaTitle: "Travel Platinum Credit Card - ICICI | Cavner Fintech",
      metaDescription: "Premium travel credit card with lounge access, air miles and travel insurance. Apply now.",
      metaKeywords: "travel credit card, icici credit card, lounge access",
    },
  ];

  for (const card of cards) {
    const exists = await CreditCard.findOne({ slug: card.slug });
    if (!exists) await CreditCard.create(card);
  }
  console.log("Credit cards seeded");

  await mongoose.connection.close();
  console.log("Seed complete");
  process.exit(0);
};

seed().catch((err) => {
  console.error("Seed error:", err);
  process.exit(1);
});
