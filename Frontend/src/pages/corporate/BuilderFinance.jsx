import React, { useState } from "react";
import { CheckCircle, FileText, Landmark, ShieldCheck, ChevronLeft, ChevronRight } from "lucide-react";
import BuilderFAQSection from "../FAQ/BuilderFAQSection";

const BuilderFinance = () => {
  const [activeTab, setActiveTab] = useState("proprietorship");
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      id: "01",
      title: "Visit Our Website",
      desc: "For the first step, you will have to visit our website to explore the loan options that fit your needs.",
    },
    {
      id: "02",
      title: "Select and Apply",
      desc: "Once you shortlist the loan you have been looking for, apply for it, and proceed with the further process.",
    },
    {
      id: "03",
      title: "Submit Your Document",
      desc: "One of the most important steps. Now you will have to submit all the required documents digitally.",
    },
    {
      id: "04",
      title: "Enjoy Your Financial Freedom!",
      desc: "Once your application is approved based on your eligibility, the amount will be disbursed to your account shortly.",
    },
  ];

  const nextStep = () => {
    setCurrentStep((prev) => (prev === steps.length - 1 ? 0 : prev + 1));
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev === 0 ? steps.length - 1 : prev - 1));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-800 font-sans pb-20 overflow-x-hidden">
      {/* --- HERO SECTION --- */}
      <div className="bg-white border-b border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-50/40 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-amber-50/30 rounded-full blur-2xl -z-10 -translate-x-1/3 translate-y-1/3"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 animate-fade-in">
            <div>
              <span className="inline-block bg-gradient-to-r from-teal-50 to-cyan-50 text-teal-700 text-xs font-bold tracking-wider px-4 py-1.5 rounded-full uppercase border border-teal-200/60 shadow-xs animate-pulse">
                Builder / Real Estate Finance
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight md:leading-none bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-800 to-cyan-950">
              Plot Developer Loans, Construction Finance &amp; Inventory Funding Solutions.
            </h1>

            <div className="space-y-4 text-sm md:text-base text-gray-600 leading-relaxed max-w-2xl">
              <p className="transition-colors duration-300 hover:text-slate-900">
                Real estate development needs timely funding. Builders require
                support from land purchase to project completion. That is why{" "}
                <strong className="text-cyan-950 font-bold bg-cyan-50/50 px-1 rounded">
                  real estate project loans
                </strong>{" "}
                are important. A specialized loan for real estate developers
                covers both acquisition and construction expenses.
              </p>
              <p className="transition-colors duration-300 hover:text-slate-900">
                Developers can also apply for construction loans for labor,
                materials, and site work. The project begins with land; a land
                purchase loan provides the required capital. A specialized loan
                for financing builders offers flexible solutions for different
                project needs.
              </p>
            </div>

            {/* Metrics Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="bg-gradient-to-br from-amber-50/80 to-orange-50/40 border border-amber-200/80 rounded-2xl p-5 shadow-xs transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-amber-300">
                <span className="block text-[11px] font-bold tracking-wider text-amber-800 uppercase">
                  Ticket Size
                </span>
                <span className="block text-xl font-extrabold text-slate-900 mt-1">
                  Rs 5 Cr - 250 Cr
                </span>
              </div>
              <div className="bg-gradient-to-br from-amber-50/80 to-orange-50/40 border border-amber-200/80 rounded-2xl p-5 shadow-xs transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-amber-300">
                <span className="block text-[11px] font-bold tracking-wider text-amber-800 uppercase">
                  Tenure
                </span>
                <span className="block text-xl font-extrabold text-slate-900 mt-1">
                  12 - 48 Months
                </span>
              </div>
              <div className="bg-gradient-to-br from-amber-50/80 to-orange-50/40 border border-amber-200/80 rounded-2xl p-5 shadow-xs transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-amber-300">
                <span className="block text-[11px] font-bold tracking-wider text-amber-800 uppercase">
                  Disbursal
                </span>
                <span className="block text-xl font-extrabold text-slate-900 mt-1">
                  Milestone Linked
                </span>
              </div>
            </div>
          </div>

          {/* Right Column Visual Graphic */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end mt-6 lg:mt-0">
            <div className="w-full max-w-sm bg-gradient-to-br from-slate-900 via-cyan-950 to-blue-900 rounded-3xl p-6 text-white relative overflow-hidden shadow-2xl border border-white/10 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-cyan-950/20">
              <div className="absolute -right-10 -bottom-10 w-44 h-44 bg-cyan-500/20 rounded-full blur-3xl"></div>
              <div className="absolute -left-10 -top-10 w-44 h-44 bg-blue-500/10 rounded-full blur-3xl"></div>

              <div className="relative z-10 space-y-6">
                {/* Image Component */}
                <div className="w-full h-56 rounded-2xl overflow-hidden bg-white flex items-center justify-center shadow-inner group relative">
                  <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                  <img
                    src="https://upniva.com/_next/image?url=%2Fimages%2Fbusiness-Loan.png&w=1080&q=75"
                    alt="Business Growth Funding"
                    className="w-full h-full object-cover object-top transform transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold tracking-tight bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">
                    Maximum Loan Amounts with Minimum Interest Rate
                  </h3>
                  <p className="text-xs text-cyan-100/70 leading-relaxed">
                    Finding the right funding option with affordable repayment
                    terms is critical for project velocity. We help builders
                    evaluate structural loans, term lending, and inventory
                    credit limits.
                  </p>
                </div>

                <button className="w-full bg-gradient-to-r from-white to-cyan-50 text-slate-900 font-bold text-xs tracking-wider py-3.5 rounded-xl shadow-lg hover:from-cyan-50 hover:to-cyan-100 active:scale-98 transition-all uppercase border border-white">
                  Check Project Eligibility
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- STEP BY STEP WORKFLOW WITH INTERACTIVE SLIDER --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-20 relative">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl font-black text-slate-900 tracking-tight sm:text-4xl">
            Save Your Time with a Simple Loan Process
          </h2>
          <p className="text-sm md:text-base text-gray-500 mt-3">
            Get your structural funding requirements handled securely in 4
            straightforward stages
          </p>
        </div>

        {/* Dynamic Mobile Slider / Enhanced Desktop Carousel Structure */}
        <div className="relative px-2 md:px-12">
          {/* Slider Layout wrapper */}
          <div className="overflow-hidden py-4">
            <div 
              className="flex transition-transform duration-500 ease-out lg:grid lg:grid-cols-4 lg:gap-6 lg:transform-none"
              style={{ transform: `translateX(-${currentStep * 100}%)` }}
            >
              {steps.map((step, index) => (
                <div
                  key={step.id}
                  className={`w-full shrink-0 px-2 lg:px-0 lg:w-auto transform transition-all duration-300 ${
                    index === currentStep ? 'scale-100 opacity-100' : 'scale-95 opacity-50 lg:scale-100 lg:opacity-100'
                  }`}
                >
                  <div className="bg-white border border-slate-100 h-full rounded-2xl p-6 sm:p-8 shadow-xs relative group hover:border-cyan-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <span className="absolute right-6 top-4 text-5xl font-black text-slate-50 group-hover:text-cyan-50/70 transition-colors select-none duration-300">
                      {step.id}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-cyan-50 flex items-center justify-center mb-4 text-cyan-600 font-bold text-sm group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
                      {step.id}
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-900 pr-8 mb-3 group-hover:text-cyan-700 transition-colors duration-300">
                      {step.title}
                    </h4>
                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slider Navigation Controls (Visible on all devices, acting as interactive pills on Desktop) */}
          <div className="flex items-center justify-center gap-4 mt-8 lg:mt-10">
            <button 
              onClick={prevStep}
              className="p-2.5 rounded-full border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 shadow-xs active:scale-95 transition-all lg:hidden"
              aria-label="Previous step"
            >
              <ChevronLeft size={18} />
            </button>
            
            <div className="flex gap-2.5">
              {steps.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentStep(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    idx === currentStep ? 'w-8 bg-cyan-500 shadow-xs shadow-cyan-500/40' : 'w-2.5 bg-slate-200 hover:bg-slate-300'
                  }`}
                  aria-label={`Go to step ${idx + 1}`}
                />
              ))}
            </div>

            <button 
              onClick={nextStep}
              className="p-2.5 rounded-full border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 shadow-xs active:scale-95 transition-all lg:hidden"
              aria-label="Next step"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* --- REAL ESTATE CORE DESCRIPTION + DOCUMENTATION SECTION --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-16">
        {/* Project Finance Paragraph Block */}
        <div className="bg-gradient-to-br from-white to-slate-50 rounded-3xl border border-slate-200/60 p-6 md:p-10 space-y-5 shadow-xs relative overflow-hidden">
          <div className="absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500"></div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
            Project Finance for Builders and Real Estate Developers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-600 leading-relaxed">
            <p className="transition-colors duration-300 hover:text-slate-950">
              Real estate development is not only about land and construction
              activity. It is about planning every stage carefully. It is about
              managing cash flow, meeting timelines, and executing the project as
              promised. A builder may have a strong vision and a good location,
              but without timely funding, progress can slow down quickly.
            </p>
            <p className="transition-colors duration-300 hover:text-slate-950">
              This is where project finance for builders and developers plays a
              crucial role. Construction projects demand continuous investment.
              Expenses arise at every stage—from land acquisition upfront to raw
              materials like cement and steel. Disbursement is typically done in
              stages linked to construction progress.
            </p>
          </div>
        </div>

        {/* Required Documentation Matrices Card */}
        <div className="bg-white border border-slate-200/80 rounded-3xl overflow-hidden shadow-lg transform transition-all duration-300">
          <div className="bg-gradient-to-r from-slate-900 via-slate-950 to-cyan-950 text-white p-6 md:p-10 relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.15),transparent_50%)]"></div>
            <h3 className="text-xl md:text-2xl font-bold flex items-center gap-3 relative z-10">
              <FileText size={24} className="text-cyan-400 animate-pulse" />
              Required Documentation Matrix (Real Estate Profiles)
            </h3>
            <p className="text-xs md:text-sm text-slate-400 mt-1.5 max-w-xl relative z-10">
              Select your corporate legal structure alignment to view the required checklist proofs
            </p>

            {/* Tab Controller Buttons */}
            <div className="flex flex-wrap gap-2.5 mt-8 relative z-10">
              <button
                onClick={() => setActiveTab("proprietorship")}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 border ${activeTab === "proprietorship" ? "bg-gradient-to-r from-cyan-500 to-teal-500 border-transparent text-white shadow-lg shadow-cyan-500/20 scale-102" : "bg-slate-800/80 border-slate-700 text-slate-300 hover:bg-slate-700 hover:text-white"}`}
              >
                01. Proprietorship
              </button>
              <button
                onClick={() => setActiveTab("pvtltd")}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 border ${activeTab === "pvtltd" ? "bg-gradient-to-r from-cyan-500 to-teal-500 border-transparent text-white shadow-lg shadow-cyan-500/20 scale-102" : "bg-slate-800/80 border-slate-700 text-slate-300 hover:bg-slate-700 hover:text-white"}`}
              >
                02. Private Limited Company
              </button>
              <button
                onClick={() => setActiveTab("partnership")}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 border ${activeTab === "partnership" ? "bg-gradient-to-r from-cyan-500 to-teal-500 border-transparent text-white shadow-lg shadow-cyan-500/20 scale-102" : "bg-slate-800/80 border-slate-700 text-slate-300 hover:bg-slate-700 hover:text-white"}`}
              >
                03. Partnership Firm / LLP
              </button>
            </div>
          </div>

          <div className="p-6 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-10 bg-gradient-to-b from-white to-slate-50/50">
            {/* Left Content Column for Active Tab Checklist */}
            <div className="lg:col-span-8 space-y-6 transition-all duration-500">
              {activeTab === "proprietorship" && (
                <div className="space-y-6 animate-fade-in">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-800 mb-4 bg-cyan-50/80 inline-block px-3 py-1 rounded-md border border-cyan-100">
                      Basic Documents of Main Applicant
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs md:text-sm text-gray-600">
                      <li className="flex items-start gap-3 bg-white p-3 rounded-xl border border-slate-100 shadow-xs transition-all hover:border-slate-200">
                        <CheckCircle
                          size={16}
                          className="text-teal-500 mt-0.5 shrink-0"
                        />{" "}
                        <span className="leading-relaxed">Proprietor KYC (Passport Size Photo, Aadhar Card &amp; Pan Card Copy)</span>
                      </li>
                      <li className="flex items-start gap-3 bg-white p-3 rounded-xl border border-slate-100 shadow-xs transition-all hover:border-slate-200">
                        <CheckCircle
                          size={16}
                          className="text-teal-500 mt-0.5 shrink-0"
                        />{" "}
                        <span className="leading-relaxed">Latest Utility Bill of Residence if Owned (or Rent Agreement)</span>
                      </li>
                    </ul>
                  </div>
                  <hr className="border-slate-100" />
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-800 mb-4 bg-cyan-50/80 inline-block px-3 py-1 rounded-md border border-cyan-100">
                      Business Vintage &amp; Land Approval Proofs
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs md:text-sm text-gray-600">
                      <li className="flex items-start gap-3 bg-white p-3 rounded-xl border border-slate-100 shadow-xs transition-all hover:border-slate-200">
                        <CheckCircle
                          size={16}
                          className="text-teal-500 mt-0.5 shrink-0"
                        />{" "}
                        <span className="leading-relaxed">Copy of GST Registration or local municipal developer approvals</span>
                      </li>
                      <li className="flex items-start gap-3 bg-white p-3 rounded-xl border border-slate-100 shadow-xs transition-all hover:border-slate-200">
                        <CheckCircle
                          size={16}
                          className="text-teal-500 mt-0.5 shrink-0"
                        />{" "}
                        <span className="leading-relaxed">1-Year-Old Business Vintage Proof (Any Registration or ITR)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === "pvtltd" && (
                <div className="space-y-6 animate-fade-in">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-800 mb-4 bg-cyan-50/80 inline-block px-3 py-1 rounded-md border border-cyan-100">
                      Company &amp; Directors KYC Metrics
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs md:text-sm text-gray-600">
                      <li className="flex items-start gap-3 bg-white p-3 rounded-xl border border-slate-100 shadow-xs transition-all hover:border-slate-200">
                        <CheckCircle
                          size={16}
                          className="text-teal-500 mt-0.5 shrink-0"
                        />{" "}
                        <span className="leading-relaxed">Company KYC (Pan Card of Company + MOA &amp; AOA &amp; COI)</span>
                      </li>
                      <li className="flex items-start gap-3 bg-white p-3 rounded-xl border border-slate-100 shadow-xs transition-all hover:border-slate-200">
                        <CheckCircle
                          size={16}
                          className="text-teal-500 mt-0.5 shrink-0"
                        />{" "}
                        <span className="leading-relaxed">KYC of all Directors and Major Shareholders (Aadhar &amp; PAN Card)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === "partnership" && (
                <div className="space-y-6 animate-fade-in">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-800 mb-4 bg-cyan-50/80 inline-block px-3 py-1 rounded-md border border-cyan-100">
                      Partnership Basic KYC Framework
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs md:text-sm text-gray-600">
                      <li className="flex items-start gap-3 bg-white p-3 rounded-xl border border-slate-100 shadow-xs transition-all hover:border-slate-200">
                        <CheckCircle
                          size={16}
                          className="text-teal-500 mt-0.5 shrink-0"
                        />{" "}
                        <span className="leading-relaxed">KYC of Partnership Firm/LLP (PAN Card Copy + Registered Partnership/LLP Deed)</span>
                      </li>
                      <li className="flex items-start gap-3 bg-white p-3 rounded-xl border border-slate-100 shadow-xs transition-all hover:border-slate-200">
                        <CheckCircle
                          size={16}
                          className="text-teal-500 mt-0.5 shrink-0"
                        />{" "}
                        <span className="leading-relaxed">KYC of all Executive Partners (Passport Size Photo, Aadhar Card &amp; Pan Card Copies)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Right Side Mandatory Checklist Panel */}
            <div className="lg:col-span-4 bg-slate-50/80 rounded-2xl p-5 sm:p-6 space-y-4 border border-slate-200/60 shadow-inner">
              <h5 className="text-xs font-bold tracking-wider text-slate-900 uppercase flex items-center gap-2 border-b border-slate-200 pb-3">
                <Landmark size={15} className="text-cyan-600" />
                Mandatory Financial Checklist
              </h5>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded-xl border border-slate-200/60 shadow-xs hover:border-cyan-200 transition-all duration-300">
                  <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Financial Documents
                  </span>
                  <p className="text-xs text-slate-700 font-medium mt-1.5 leading-relaxed">
                    Last 1 Year ITR along with Computation of Income, Form 26AS,
                    and last 12 months GSTR3B returns.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200/60 shadow-xs hover:border-cyan-200 transition-all duration-300">
                  <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Bank Statement Matrix
                  </span>
                  <p className="text-xs text-slate-700 font-medium mt-1.5 leading-relaxed">
                    All Current &amp; Escrow Accounts Banking statements for the
                    Last 06 months in clear PDF Format.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200/60 shadow-xs hover:border-cyan-200 transition-all duration-300">
                  <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Structured Funding Approach
                  </span>
                  <p className="text-xs text-slate-700 font-medium mt-1.5 leading-relaxed">
                    Lenders finance only a portion of the project cost. The
                    developer contributes the remaining amount as margin.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BuilderFAQSection/>
    </div>
  );
};

export default BuilderFinance;