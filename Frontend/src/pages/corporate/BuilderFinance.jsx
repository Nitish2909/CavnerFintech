import React, { useState } from "react";
import { CheckCircle, FileText, Landmark, ShieldCheck } from "lucide-react";
import BuilderFAQSection from "../FAQ/BuilderFAQSection";

const BuilderFinance = () => {
  const [activeTab, setActiveTab] = useState("proprietorship");

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

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans pb-20">
      {/* --- HERO SECTION --- */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="inline-block bg-teal-50 text-teal-700 text-xs font-bold tracking-wider px-3 py-1 rounded-full uppercase border border-teal-200">
                Builder / Real Estate Finance
              </span>
            </div>

            <h1 className="text-3xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Plot Developer Loans, Construction Finance &amp; Inventory Funding
              Solutions.
            </h1>

            <div className="space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
              <p>
                Real estate development needs timely funding. Builders require
                support from land purchase to project completion. That is why{" "}
                <strong className="text-gray-900 font-semibold">
                  real estate project loans
                </strong>{" "}
                are important. A specialized loan for real estate developers
                covers both acquisition and construction expenses.
              </p>
              <p>
                Developers can also apply for construction loans for labor,
                materials, and site work. The project begins with land; a land
                purchase loan provides the required capital. A specialized loan
                for financing builders offers flexible solutions for different
                project needs.
              </p>
            </div>

            {/* Metrics Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="bg-amber-50/60 border border-amber-200 rounded-xl p-4">
                <span className="block text-[11px] font-bold tracking-wider text-amber-700 uppercase">
                  Ticket Size
                </span>
                <span className="block text-lg font-extrabold text-slate-900 mt-1">
                  Rs 5 Cr - 250 Cr
                </span>
              </div>
              <div className="bg-amber-50/60 border border-amber-200 rounded-xl p-4">
                <span className="block text-[11px] font-bold tracking-wider text-amber-700 uppercase">
                  Tenure
                </span>
                <span className="block text-lg font-extrabold text-slate-900 mt-1">
                  12 - 48 Months
                </span>
              </div>
              <div className="bg-amber-50/60 border border-amber-200 rounded-xl p-4">
                <span className="block text-[11px] font-bold tracking-wider text-amber-700 uppercase">
                  Disbursal
                </span>
                <span className="block text-lg font-extrabold text-slate-900 mt-1">
                  Milestone Linked
                </span>
              </div>
            </div>
          </div>

          {/* Right Column Visual Graphic */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-sm bg-gradient-to-tr from-cyan-600 to-blue-700 rounded-3xl p-6 text-white relative overflow-hidden shadow-xl border border-white/10">
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>

              <div className="relative z-10 space-y-5">
                {/*  Image Component */}
                <div className="w-full h-56 rounded-2xl overflow-hidden bg-white flex items-center justify-center shadow-md">
                  <img
                    src="https://upniva.com/_next/image?url=%2Fimages%2Fbusiness-Loan.png&w=1080&q=75"
                    alt="Business Growth Funding"
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold tracking-tight">
                    Maximum Loan Amounts with Minimum Interest Rate
                  </h3>
                  <p className="text-xs text-cyan-100/80 leading-relaxed">
                    Finding the right funding option with affordable repayment
                    terms is critical for project velocity. We help builders
                    evaluate structural loans, term lending, and inventory
                    credit limits.
                  </p>
                </div>

                <button className="w-full bg-white text-cyan-900 font-bold text-xs tracking-wider py-3 rounded-xl shadow-lg hover:bg-cyan-50 transition-colors uppercase">
                  Check Project Eligibility
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- STEP BY STEP WORKFLOW --- */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
            Save Your Time with a Simple Loan Process
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            Get your structural funding requirements handled securely in 4
            straightforward stages
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm relative group hover:border-cyan-200 transition-all"
            >
              <span className="absolute right-6 top-4 text-4xl font-black text-slate-100 group-hover:text-cyan-50 transition-colors select-none">
                {step.id}
              </span>
              <h4 className="text-base font-bold text-slate-900 pr-8 mb-2 group-hover:text-cyan-700 transition-colors">
                {step.title}
              </h4>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* --- REAL ESTATE CORE DESCRIPTION + DOCUMENTATION SECTION --- */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">
        {/* Project Finance Paragraph Block */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 space-y-4">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900">
            Project Finance for Builders and Real Estate Developers
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Real estate development is not only about land and construction
            activity. It is about planning every stage carefully. It is about
            managing cash flow, meeting timelines, and executing the project as
            promised. A builder may have a strong vision and a good location,
            but without timely funding, progress can slow down quickly.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            This is where project finance for builders and developers plays a
            crucial role. Construction projects demand continuous investment.
            Expenses arise at every stage—from land acquisition upfront to raw
            materials like cement and steel. Disbursement is typically done in
            stages linked to construction progress.
          </p>
        </div>

        {/* Required Documentation Matrices Card */}
        <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
          <div className="bg-slate-900 text-white p-6 md:p-8">
            <h3 className="text-lg md:text-xl font-bold flex items-center gap-2">
              <FileText size={20} className="text-cyan-400" />
              Required Documentation Matrix (Real Estate Profiles)
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Select your corporate legal structure alignment to view the
              required checklist proofs
            </p>

            {/* Tab Controller Buttons */}
            <div className="flex flex-wrap gap-2 mt-6">
              <button
                onClick={() => setActiveTab("proprietorship")}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all border ${activeTab === "proprietorship" ? "bg-cyan-500 border-cyan-400 text-white shadow-md shadow-cyan-500/20" : "bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700"}`}
              >
                01. Proprietorship
              </button>
              <button
                onClick={() => setActiveTab("pvtltd")}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all border ${activeTab === "pvtltd" ? "bg-cyan-500 border-cyan-400 text-white shadow-md shadow-cyan-500/20" : "bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700"}`}
              >
                02. Private Limited Company
              </button>
              <button
                onClick={() => setActiveTab("partnership")}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all border ${activeTab === "partnership" ? "bg-cyan-500 border-cyan-400 text-white shadow-md shadow-cyan-500/20" : "bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700"}`}
              >
                03. Partnership Firm / LLP
              </button>
            </div>
          </div>

          <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Content Column for Active Tab Checklist */}
            <div className="lg:col-span-8 space-y-6">
              {activeTab === "proprietorship" && (
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-700 mb-3 bg-cyan-50 inline-block px-2 py-1 rounded">
                      Basic Documents of Main Applicant
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs md:text-sm text-gray-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle
                          size={14}
                          className="text-teal-500 mt-0.5 shrink-0"
                        />{" "}
                        Proprietor KYC (Passport Size Photo, Aadhar Card &amp;
                        Pan Card Copy)
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle
                          size={14}
                          className="text-teal-500 mt-0.5 shrink-0"
                        />{" "}
                        Latest Utility Bill of Residence if Owned (or Rent
                        Agreement)
                      </li>
                    </ul>
                  </div>
                  <hr className="border-slate-100" />
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-700 mb-3 bg-cyan-50 inline-block px-2 py-1 rounded">
                      Business Vintage &amp; Land Approval Proofs
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs md:text-sm text-gray-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle
                          size={14}
                          className="text-teal-500 mt-0.5 shrink-0"
                        />{" "}
                        Copy of GST Registration or local municipal developer
                        approvals
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle
                          size={14}
                          className="text-teal-500 mt-0.5 shrink-0"
                        />{" "}
                        1-Year-Old Business Vintage Proof (Any Registration or
                        ITR)
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === "pvtltd" && (
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-700 mb-3 bg-cyan-50 inline-block px-2 py-1 rounded">
                      Company &amp; Directors KYC Metrics
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs md:text-sm text-gray-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle
                          size={14}
                          className="text-teal-500 mt-0.5 shrink-0"
                        />{" "}
                        Company KYC (Pan Card of Company + MOA &amp; AOA &amp;
                        COI)
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle
                          size={14}
                          className="text-teal-500 mt-0.5 shrink-0"
                        />{" "}
                        KYC of all Directors and Major Shareholders (Aadhar
                        &amp; PAN Card)
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === "partnership" && (
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-700 mb-3 bg-cyan-50 inline-block px-2 py-1 rounded">
                      Partnership Basic KYC Framework
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs md:text-sm text-gray-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle
                          size={14}
                          className="text-teal-500 mt-0.5 shrink-0"
                        />{" "}
                        KYC of Partnership Firm/LLP (PAN Card Copy + Registered
                        Partnership/LLP Deed)
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle
                          size={14}
                          className="text-teal-500 mt-0.5 shrink-0"
                        />{" "}
                        KYC of all Executive Partners (Passport Size Photo,
                        Aadhar Card &amp; Pan Card Copies)
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Right Side Mandatory Checklist Panel */}
            <div className="lg:col-span-4 bg-slate-50 rounded-2xl p-5 space-y-4 border border-slate-100">
              <h5 className="text-xs font-bold tracking-wider text-slate-900 uppercase flex items-center gap-1.5 border-b border-slate-200 pb-2">
                <Landmark size={14} className="text-cyan-600" />
                Mandatory Financial Checklist
              </h5>

              <div className="space-y-3">
                <div className="bg-white p-3 rounded-xl border border-slate-200/60 shadow-xs">
                  <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wide">
                    Financial Documents
                  </span>
                  <p className="text-xs text-slate-700 font-semibold mt-1">
                    Last 1 Year ITR along with Computation of Income, Form 26AS,
                    and last 12 months GSTR3B returns.
                  </p>
                </div>

                <div className="bg-white p-3 rounded-xl border border-slate-200/60 shadow-xs">
                  <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wide">
                    Bank Statement Matrix
                  </span>
                  <p className="text-xs text-slate-700 font-semibold mt-1">
                    All Current &amp; Escrow Accounts Banking statements for the
                    Last 06 months in clear PDF Format.
                  </p>
                </div>

                <div className="bg-white p-3 rounded-xl border border-slate-200/60 shadow-xs">
                  <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wide">
                    Structured Funding Approach
                  </span>
                  <p className="text-xs text-slate-700 font-semibold mt-1">
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

