import React from "react";
import Header from "../components/Header";
import Header2 from "../components/Header2";
import Hero from "../components/Hero";
import LoanProducts from "../components/LoanProducts";
import WhyFintech from "../components/WhyFintech";
import EmiCalculator from "../components/EmiCalculator";
import Footer from "../components/SiteFooter";
import SiteFooter from "../components/SiteFooter";
import WhatsApp from "../components/Whatsapp";
import OurPartnerBanks from "../components/OurPartnerBanks";

const Home = () => {
  return (
    <div>
      <Hero />
      <LoanProducts />
      <OurPartnerBanks />
      <WhyFintech />
      <EmiCalculator />
      <WhatsApp />
    </div>
  );
};

export default Home;
