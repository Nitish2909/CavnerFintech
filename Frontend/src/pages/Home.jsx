import { Link } from "react-router-dom";
import {
  ArrowRight,
  ShieldCheck,
  Clock,
  IndianRupee,
  TrendingUp,
  Users,
  Award,
  CheckCircle2,
  FileText,
  Headphones,
  Landmark,
} from "lucide-react";
import Seo from "../components/Seo";
import EmiCalculator from "../components/EmiCalculator";
import Hero from "../components/Hero";
import OurPartnerBanks from "../components/OurPartnerBanks";
import MarketPlacePage from "../components/MarketPlacePage";
import LoanDealsSection from "../components/LoanDealSection";
import CavnerPromoSection from "../components/CavnerPromoSection";

const Home = () => {
  const loanTypes = [
    {
      name: "Personal Loan",
      desc: "Quick funds for any need",
      rate: "10.5% p.a.",
      href: "/loans/personal-loan",
      icon: IndianRupee,
    },
    {
      name: "Home Loan",
      desc: "Own your dream home",
      rate: "8.4% p.a.",
      href: "/loans/home-loan",
      icon: TrendingUp,
    },
    {
      name: "Education Loan",
      desc: "Study in India or abroad",
      rate: "9.0% p.a.",
      href: "/loans/education-loan",
      icon: Award,
    },
    {
      name: "Business Loan",
      desc: "Grow your business",
      rate: "11.0% p.a.",
      href: "/loans/business-loan",
      icon: Users,
    },
    {
      name: "Car Loan",
      desc: "Grow your business",
      rate: "11.0% p.a.",
      href: "/loans/car-loan",
      icon: Users,
    },
  ];

  const features = [
    {
      icon: ShieldCheck,
      title: "Bank-Grade Security",
      desc: "Your data is protected with 256-bit encryption and RBI-compliant processes.",
    },
    {
      icon: Clock,
      title: "Quick Approval",
      desc: "Get instant approval on eligible loans with minimal documentation.",
    },
    {
      icon: IndianRupee,
      title: "Best Interest Rates",
      desc: "Compare offers from 40+ banks and NBFCs to find the lowest rates.",
    },
    {
      icon: Users,
      title: "Expert Guidance",
      desc: "Our financial advisors help you choose the right product for your needs.",
    },
    {
      icon: FileText,
      title: "Zero Hidden Charges",
      desc: "Enjoy complete transparency with no processing surprises or hidden fees.",
    },
    {
      icon: TrendingUp,
      title: "Credit Score Insights",
      desc: "Check your credit score for free and get personalized tips to improve it.",
    },
    {
      icon: Headphones,
      title: "24/7 Customer Support",
      desc: "Get round-the-clock assistance from our dedicated support team.",
    },
    {
      icon: Landmark,
      title: "Wide Partner Network",
      desc: "Access curated loan offers trusted by millions nationwide.",
    },
  ];

  return (
    <>
      <Seo path="/" />
      {/* Hero */}
      <Hero />

      {/* Loan types */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        {/* <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-800 mb-2">Explore Our Loan Products</h2>
          <p className="text-slate-500">Find the perfect loan for your needs</p>
        </div> */}

        {/* Section Head */}
        <div className="text-center max-w-[40rem] mx-auto mb-10 md:mb-14">
          <p className="text-[0.72rem] md:text-[0.75rem] tracking-[0.15em] uppercase font-bold text-[#f7941d]">
            Online loan options
          </p>
          <h2 className="mt-2 text-[1.65rem] sm:text-[2.25rem] md:text-[2.5rem] font-bold tracking-tight leading-[1.15] text-[#0e2a35]">
            Affordable Instant Loans{" "}
            <span className="block sm:inline bg-gradient-to-r from-[#f7941d] to-[#e63946] bg-clip-text text-transparent">
              with Quick Approval
            </span>
          </h2>
          <p className="mt-3.5 text-sm md:text-base text-[#6b7b82] leading-[1.5]">
            Compare loan products from 300+ trusted lenders. Minimal documents,
            fast verification, and flexible repayment plans tailored to your
            needs.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {loanTypes.map((loan) => {
            const Icon = loan.icon;
            return (
              <Link
                key={loan.name}
                to={loan.href}
                className="group bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md hover:border-brand-300 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center mb-4 group-hover:bg-brand-100 transition-colors">
                  <Icon size={24} className="text-brand-700" />
                </div>
                <h3 className="font-bold text-slate-800 mb-1">{loan.name}</h3>
                <p className="text-sm text-slate-500 mb-3">{loan.desc}</p>
                <p className="text-sm font-semibold text-brand-700">
                  Starting {loan.rate}
                </p>
                <div className="flex items-center gap-1 text-sm text-brand-600 mt-3 group-hover:gap-2 transition-all">
                  Apply <ArrowRight size={14} />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="relative bg-gradient-to-br from-brand-800 via-brand-700 to-brand-900 text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, white 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24 relative">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block px-3 py-1 bg-brand-500/30 text-brand-100 text-sm rounded-full mb-4">
                India's Trusted Fintech Platform
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
                Smart Loans, Cards & Investments for Every Indian
              </h1>
              <p className="text-brand-100 text-lg mb-8 max-w-lg">
                Compare and apply for personal loans, home loans, credit cards,
                and investment plans from 40+ banks. Quick approval, best rates,
                zero hassle.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/loans"
                  className="flex items-center gap-2 px-6 py-3 bg-white text-brand-800 font-semibold rounded-lg hover:bg-brand-50 transition-colors"
                >
                  Apply Now <ArrowRight size={18} />
                </Link>
                <Link
                  to="/emi"
                  className="px-6 py-3 border border-brand-400 text-white font-semibold rounded-lg hover:bg-brand-600/30 transition-colors"
                >
                  EMI Calculator
                </Link>
              </div>
              <div className="flex gap-8 mt-10">
                <div>
                  <p className="text-3xl font-bold">40+</p>
                  <p className="text-brand-200 text-sm">Partner Banks</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">1000+</p>
                  <p className="text-brand-200 text-sm">Happy Customers</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">₹200Cr+</p>
                  <p className="text-brand-200 text-sm">Loans Disbursed</p>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <EmiCalculator />
            </div>
          </div>
        </div>
      </section>

      <LoanDealsSection />
      <CavnerPromoSection />

      {/* Why choose us */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">
              Why Choose Cavner Wealth And FinTech?
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Trusted by lakhs of Indians for their financial needs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="group bg-white rounded-2xl p-6 text-center border border-slate-100 shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl hover:border-brand-200"
                >
                  <div className="w-14 h-14 rounded-2xl bg-brand-50 flex items-center justify-center mx-auto mb-5 transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:bg-brand-100">
                    <Icon
                      size={26}
                      className="text-brand-700 transition-transform duration-300 group-hover:rotate-6"
                    />
                  </div>
                  <h3 className="font-bold text-lg text-slate-800 mb-2 transition-colors duration-300 group-hover:text-brand-900">
                    {f.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-brand-700 to-brand-900 rounded-3xl p-10 lg:p-16 text-center text-white">
          <h2 className="text-3xl font-bold mb-3">Ready to Get Started?</h2>
          <p className="text-brand-100 mb-8 max-w-xl mx-auto">
            Register today and get pre-approved offers from top banks within
            minutes.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              to="/register"
              className="px-6 py-3 bg-white text-brand-800 font-semibold rounded-lg hover:bg-brand-50"
            >
              Register Now
            </Link>
            <Link
              to="/cibil"
              className="px-6 py-3 border border-brand-300 text-white font-semibold rounded-lg hover:bg-brand-600/30"
            >
              Check CIBIL Score
            </Link>
          </div>
        </div>
      </section>

      {/* <OurPartnerBanks/> */}
      <MarketPlacePage />
    </>
  );
};

export default Home;
