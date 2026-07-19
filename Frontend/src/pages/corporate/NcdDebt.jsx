import React, { useState } from "react";
import { CheckCircle, FileText, Landmark, ShieldCheck } from "lucide-react";

const NcdDebt = () => {
  const [activeTab, setActiveTab] = useState("proprietorship");

  const steps = [
    {
      id: "01",
      title: "Visit Our Website",
      desc: "Explore tailored loan and structured debt options that fit your project scope.",
    },
    {
      id: "02",
      title: "Select and Apply",
      desc: "Shortlist your instrument type, configure borrowing targets, and initialize your application.",
    },
    {
      id: "03",
      title: "Submit Your Documents",
      desc: "Digitally upload historical financials, asset records, and compliance checks securely.",
    },
    {
      id: "04",
      title: "Disbursal & Execution",
      desc: "Upon risk approval and structured rating updates, funds are moved straight to your escrow account.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans pb-20">
      {/* --- HERO SECTION --- */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="inline-block bg-teal-50 text-teal-700 text-xs font-bold tracking-wider px-3 py-1 rounded-full uppercase border border-teal-200">
                NCD & Structured Debt
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Raise Non-Convertible Capital Through Regulated Frameworks
            </h1>

            <div className="space-y-4 text-sm md:text-base text-slate-600 leading-relaxed">
              <p>
                Non-Convertible Debentures (NCDs) and structured debt solutions offer a high-velocity alternative to standard corporate banking. As fixed-income tools, they allow mid-to-large corporates to mobilize capital directly from institutional pools without risking equity dilution.
              </p>
              <p>
                <strong>Real-World Execution:</strong> A real estate firm targeting a ₹200 Cr construction cycle can leverage private placement structures backed by future project receivables. Similarly, growth-stage firms requiring ₹5 Cr+ can fund immediate operational scale or balance sheet restructuring cleanly.
              </p>
            </div>

            {/* Metrics Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 shadow-sm">
                <span className="block text-[11px] font-bold tracking-wider text-slate-500 uppercase">
                  Instrument Type
                </span>
                <span className="block text-base font-bold text-slate-900 mt-1">
                  Secured / Unsecured NCD
                </span>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 shadow-sm">
                <span className="block text-[11px] font-bold tracking-wider text-slate-500 uppercase">
                  Minimum Ticket Size
                </span>
                <span className="block text-base font-bold text-slate-900 mt-1">
                  ₹5 Crore+
                </span>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 shadow-sm">
                <span className="block text-[11px] font-bold tracking-wider text-slate-500 uppercase">
                  Core Allocation
                </span>
                <span className="block text-base font-bold text-slate-900 mt-1">
                  Growth / Refinance / WC
                </span>
              </div>
            </div>
          </div>

          {/* Right Column Visual Graphic */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-sm bg-gradient-to-tr from-slate-800 to-slate-900 rounded-3xl p-6 text-white relative overflow-hidden shadow-xl border border-slate-700">
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-teal-500/10 rounded-full blur-2xl"></div>

              <div className="relative z-10 space-y-5">
                <div className="w-full h-56 rounded-2xl overflow-hidden bg-white flex items-center justify-center shadow-md border border-slate-700/50">
                  <img
                    src="https://upniva.com/_next/image?url=%2Fimages%2Fbusiness-Loan.png&w=1080&q=75"
                    alt="Corporate Capital Sourcing"
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-bold tracking-tight">
                    Optimized Project Funding Architecture
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Evaluate tailored construction drawdowns, term setups, and structural inventory credit lines aligned directly to project velocity.
                  </p>
                </div>

                <button className="w-full bg-teal-600 text-white font-bold text-xs tracking-wider py-3 rounded-xl shadow-md hover:bg-teal-500 transition-colors uppercase">
                  Assess Funding Eligibility
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PRIVATE PLACEMENT STRATEGY --- */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 space-y-3">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
              Private Placement Mechanics
            </h2>
            <p className="text-sm text-slate-500 leading-relaxed">
              Accelerate fundraising rounds through closed, targeted distribution to institutional players rather than public routes.
            </p>
          </div>
          
          <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              Private placement provides NBFCs and enterprises a quick path to secure liability portfolios and long-term capital lines. Asset tenures, yield structures, coupon types, and security arrangements are fully customizable, adjusting to balance sheet capabilities and operational cash positions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 text-xs font-medium text-slate-700">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Customized security packages & payout covenants</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Vastly reduced timelines vs. public market placement</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Optimizes long-term asset-liability matching</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Secured and unsecured issuing capability</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- WORKFLOW TIMELINE --- */}
      <section className="bg-slate-100 border-y border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
              Four Stages to Onboarding
            </h2>
            <p className="text-sm text-slate-500">
              A transparent path from initial assessment to deal closure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.id} className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm relative space-y-3">
                <span className="text-xs font-bold text-teal-600 bg-teal-50 px-2 py-1 rounded">
                  Stage {step.id}
                </span>
                <h3 className="font-bold text-slate-900">{step.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- REAL ESTATE & DEPLOYMENT --- */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 pt-16">
        <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-10 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 flex items-center gap-2">
              <Landmark className="w-6 h-6 text-teal-600" />
              Project Finance Architecture for Real Estate Developers
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-sm text-slate-600 leading-relaxed">
            <p>
              Real estate planning depends heavily on dynamic capital accessibility. Sustaining traction over multi-year operational runs requires careful tracking of cash flow velocity, raw material changes, and local regulatory milestones. Without dependable tranches, structural timelines break down rapidly.
            </p>
            <p>
              Structured project financing ensures specialized capital access across all lifecycle points, starting right at initial land-banking down to final interior finishing. Capital deployment frames are organized directly around development milestones, matching outlays against concrete project execution progress.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NcdDebt;