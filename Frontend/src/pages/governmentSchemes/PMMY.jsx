import React from "react";

const PMMY = () => {
  const products = [
    {
      name: "Shishu 🌱",
      desc: "Perfect for micro start-ups and new tiny ventures looking for immediate operational support.",
      limit: "Loans up to ₹50,000",
      accentClass: "border-l-emerald-500",
      badgeBg: "bg-emerald-500",
      limitColor: "text-emerald-700"
    },
    {
      name: "Kishor 🚀",
      desc: "For operational businesses requiring critical scaling capital to expand capacity.",
      limit: "₹50,000 to ₹5 Lakhs",
      accentClass: "border-l-blue-500",
      badgeBg: "bg-blue-500",
      limitColor: "text-blue-700"
    },
    {
      name: "Tarun 🏆",
      desc: "For established business entities aiming for massive growth and asset procurement.",
      limit: "₹5 Lakhs to ₹10 Lakhs",
      accentClass: "border-l-amber-500",
      badgeBg: "bg-amber-500",
      limitColor: "text-amber-700"
    },
    {
      name: "Tarun Plus 🔥",
      desc: "Exclusive scale upgrade reward for candidates demonstrating clean repayment history.",
      limit: "₹10 Lakhs to ₹20 Lakhs",
      accentClass: "border-l-purple-500",
      badgeBg: "bg-purple-500",
      limitColor: "text-purple-700"
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8 font-sans antialiased text-slate-900 selection:bg-indigo-500 selection:text-white">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Premium Hero Header Section */}
        <header className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-8 sm:p-12 text-center shadow-xl shadow-indigo-950/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent pointer-events-none" />
          
          <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-200 backdrop-blur-sm mb-4 border border-white/5">
            Govt. of India Initiative
          </span>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white max-w-4xl mx-auto leading-tight">
            Pradhan Mantri MUDRA Yojana (PMMY)
          </h1>
          
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-3xl mx-auto font-normal">
            Launched by the Hon’ble Prime Minister, PMMY provides key credit bridges up to <span className="text-white font-semibold">₹20 Lakhs</span> to support non-corporate, non-farm small and micro enterprises across India.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 max-w-3xl mx-auto">
            <div className="px-5 py-3 bg-white/5 border border-white/10 text-slate-200 text-xs sm:text-sm font-medium rounded-xl backdrop-blur-md shadow-inner flex-1 min-w-[240px]">
              🛡️ <span className="font-bold text-indigo-300">100% Collateral-Free</span> Business Funding
            </div>
            <div className="px-5 py-3 bg-white/5 border border-white/10 text-slate-200 text-xs sm:text-sm font-medium rounded-xl backdrop-blur-md shadow-inner flex-1 min-w-[240px]">
              🏢 Disbursed via <span className="text-indigo-300 font-bold">Commercial Banks, RRBs, SFBs & NBFCs</span>
            </div>
          </div>
        </header>

        {/* Core Architecture Facts - 2 Column Clean Breakdown */}
        <section className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-bold tracking-tight text-slate-900 border-b border-slate-100 pb-4 mb-6">
            Core Scheme Architecture & Parameters
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-sm text-slate-600">
            <div className="flex items-start gap-3">
              <span className="text-indigo-600 font-bold mt-0.5">⚡</span>
              <span><strong>Target Segments:</strong> Explicitly covers small manufacturing units, service sector entities, artisans, shopkeepers, and fruit/vegetable vendors.</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-indigo-600 font-bold mt-0.5">⚡</span>
              <span><strong>Allied Agriculture Scope:</strong> Extends funding eligibility to pisciculture, poultry farming, dairy processing, sorting, grading, and aggregations.</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-indigo-600 font-bold mt-0.5">⚡</span>
              <span><strong>Zero Collateral Security:</strong> Borrowers are not required to provide third-party guarantees or real-estate hypothecations to access lines.</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-indigo-600 font-bold mt-0.5">⚡</span>
              <span><strong>Credit Guarantee Pool:</strong> Funded structures are backed safely by the National Credit Guarantee Trustee Company (NCGTC) security coverage.</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-indigo-600 font-bold mt-0.5">⚡</span>
              <span><strong>Flexible Processing Fees:</strong> Zero upfront structural charges or administrative fees apply directly to the baseline Shishu application tier.</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-indigo-600 font-bold mt-0.5">⚡</span>
              <span><strong>MUDRA Card Interface:</strong> Working capital limits are loaded onto a RuPay debit card for fluid, on-demand ATM cash withdrawals.</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-indigo-600 font-bold mt-0.5">⚡</span>
              <span><strong>Repayment Tenures:</strong> Offers a highly adaptive amortized loan repayment horizon stretching across a term period of 3 to 5 years.</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-indigo-600 font-bold mt-0.5">⚡</span>
              <span><strong>Interest Arbitrage:</strong> Commercial banks set baseline rates tied explicitly to the Marginal Cost of Funds Based Lending Rate (MCLR).</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-indigo-600 font-bold mt-0.5">⚡</span>
              <span><strong>No Minimum Cutoff:</strong> Tiny entrepreneurs can securely apply for ultra-micro lines under the Shishu scheme with zero base scale rules.</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-indigo-600 font-bold mt-0.5">⚡</span>
              <span><strong>Gender Empowerment Focus:</strong> Partnering financial nodes often extend customized, reduced rate segments for solo women entrepreneurs.</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-indigo-600 font-bold mt-0.5">⚡</span>
              <span><strong>Diverse Delivery Nodes:</strong> Monitored outlays are fully operational across Scheduled Commercial Banks, Regional Rural Banks (RRBs), and NBFCs.</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-indigo-600 font-bold mt-0.5">⚡</span>
              <span><strong>End-Use Verification:</strong> Loans are dedicated precisely for equipment purchases, raw inventories, and operational working capital expansions.</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-indigo-600 font-bold mt-0.5">⚡</span>
              <span><strong>No Corporate Inclusions:</strong> Public/private limited corporations outside micro limits cannot access this localized MSME pool.</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-indigo-600 font-bold mt-0.5">⚡</span>
              <span><strong>Pan-India Accessibility:</strong> Available throughout rural, urban, and semi-urban clusters across all functional commercial bank windows.</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-indigo-600 font-bold mt-0.5">⚡</span>
              <span><strong>Dynamic Tarun Plus Tier:</strong> Scaled up limits to a maximum of ₹20 Lakhs for candidates demonstrating consistent repayment tracks.</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-indigo-600 font-bold mt-0.5">⚡</span>
              <span><strong>Financial Literacy Links:</strong> Combines formal capital delivery models with targeted enterprise development programs for small units.</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-indigo-600 font-bold mt-0.5">⚡</span>
              <span><strong>Formalizing Shadow Credit:</strong> Migrates traditional unorganized micro-business debts into institutional, low-risk banking books.</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-indigo-600 font-bold mt-0.5">⚡</span>
              <span><strong>Co-Lending Synergies:</strong> Enables collaborative structural capital syndication between modern FinTech channels and public sector banks.</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-indigo-600 font-bold mt-0.5">⚡</span>
              <span><strong>Strict De-Duplication Rules:</strong> Applicants are checked against central credit bureaus to assure clear status across standard lending nodes.</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-indigo-600 font-bold mt-0.5">⚡</span>
              <span><strong>Digital-First Process:</strong> Eliminates manual files by integrating fast verification cycles via JanSamarth and UdyamiMitra portals.</span>
            </div>
          </div>
        </section>

        {/* Tiered Credit Architecture Grid */}
        <section className="space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold tracking-tight text-slate-950">
              MUDRA Tiered Credit Architecture
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              Four uniquely tailored funding stages aligned with your business maturity lifecycle.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {products.map((product, idx) => (
              <div
                key={idx}
                className={`p-6 bg-white border border-slate-200/80 rounded-xl shadow-xs border-l-4 ${product.accentClass} flex flex-col justify-between hover:shadow-md transition-all duration-200`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <h3 className="text-lg font-bold text-slate-900 tracking-tight">{product.name}</h3>
                    <span className={`w-2 h-2 rounded-full shrink-0 ${product.badgeBg}`} />
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">{product.desc}</p>
                </div>
                <div className="mt-6 pt-3 border-t border-slate-100">
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">Funding Scale</span>
                  <span className={`text-base font-black tracking-tight ${product.limitColor}`}>{product.limit}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Framework Breakdowns - 3 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Eligibility Section */}
          <div className="p-6 bg-white border border-slate-200 rounded-xl shadow-xs flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-950 mb-4 pb-3 border-b border-slate-100 flex items-center gap-2">
                <span className="text-indigo-600">📋</span> Who is Eligible?
              </h3>
              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded text-[11px]">✓</span>
                  <span><strong>Formations:</strong> Proprietary concerns, small partnership firms, LLPs, and Private Limited companies.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded text-[11px]">✓</span>
                  <span><strong>Sectors:</strong> Small manufacturing units, service sector entities, shopkeepers, vendors, and truck operators.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded text-[11px]">✓</span>
                  <span><strong>Agri-Allied:</strong> Income activities directly allied to agriculture (poultry, dairy, beekeeping, fishery).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded text-[11px]">✓</span>
                  <span><strong>Credit Rating:</strong> The applicant must hold a zero default track record across institutional lenders.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Steps & Portals Section */}
          <div className="p-6 bg-white border border-slate-200 rounded-xl shadow-xs flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-950 mb-4 pb-3 border-b border-slate-100 flex items-center gap-2">
                <span className="text-indigo-600">🚀</span> Apply in Simple Steps
              </h3>
              
              <div className="mb-4 bg-slate-50 p-3 rounded-lg border border-slate-200">
                <p className="font-bold text-[10px] uppercase tracking-wider text-slate-500 mb-1.5">Application Channels:</p>
                <div className="space-y-1 text-xs">
                  <div>
                    <a href="https://www.udyamimitra.in" target="_blank" rel="noreferrer" className="text-indigo-600 font-bold hover:underline inline-flex items-center gap-1">
                      🔗 UdyamiMitra Portal <span className="text-slate-400 font-normal">(Official)</span>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.jansamarth.in" target="_blank" rel="noreferrer" className="text-indigo-600 font-bold hover:underline inline-flex items-center gap-1">
                      🔗 JanSamarth National Portal
                    </a>
                  </div>
                </div>
              </div>

              <ol className="space-y-3 text-xs text-slate-600">
                <li className="flex gap-2.5">
                  <span className="bg-slate-100 text-slate-700 font-bold w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-[11px]">1</span>
                  <span><strong>Choose Channel:</strong> Access the digital UdyamiMitra portal online or visit your local banking branch.</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="bg-slate-100 text-slate-700 font-bold w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-[11px]">2</span>
                  <span><strong>Select Category:</strong> Formulate your operational budget to choose between Shishu, Kishor, or Tarun steps.</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="bg-slate-100 text-slate-700 font-bold w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-[11px]">3</span>
                  <span><strong>Submit Profile:</strong> Input personal KYC data, structural business details, and attach credentials.</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="bg-slate-100 text-slate-700 font-bold w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-[11px]">4</span>
                  <span><strong>Disbursal:</strong> The bank analyzes project capacity and processes the direct capital release with a MUDRA Card.</span>
                </li>
              </ol>
            </div>
          </div>

          {/* Documents Required Section */}
          <div className="p-6 bg-white border border-slate-200 rounded-xl shadow-xs">
            <h3 className="text-lg font-bold text-slate-950 mb-4 pb-3 border-b border-slate-100 flex items-center gap-2">
                <span className="text-indigo-600">📂</span> Documents Required
            </h3>
            <div className="space-y-3.5 text-xs text-slate-600">
              <div>
                <h4 className="font-bold text-slate-900 flex items-center gap-1">🪪 Personal KYC</h4>
                <p className="mt-0.5 text-slate-500 leading-normal">Proof of Identity & Address (Identification Papers, Voters ID, PAN Card, Driving License) with recent passport photographs.</p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 flex items-center gap-1">🏭 Business Legitimacy</h4>
                <p className="mt-0.5 text-slate-500 leading-normal">Establishment proof (Shop & Establishment certificate, Udyam Registration, GST filings, Partnership deeds).</p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 flex items-center gap-1">📊 Financial Health</h4>
                <p className="mt-0.5 text-slate-500 leading-normal">Past 6 to 12 months bank statements. Tiers like Kishor/Tarun require balance sheets, tool quotations, and tax returns.</p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 flex items-center gap-1">🎖️ Category Proofs</h4>
                <p className="mt-0.5 text-slate-500 leading-normal">Community verification certificates if requesting specific statutory category incentives.</p>
              </div>
            </div>
          </div>

        </div>

        {/* Safety Compliance Banner */}
        <footer className="p-4 bg-amber-50/80 border border-amber-200 rounded-xl text-amber-900 text-xs sm:text-sm flex items-start gap-3 shadow-xs">
          <span className="text-base shrink-0 mt-0.5">⚠️</span> 
          <div>
            <strong className="text-amber-950 font-bold block mb-0.5">Zero Authorized Middlemen Policy</strong>
            MUDRA has not deployed any third-party agents, consultants, or brokers to process credit applications. Ensure all application files are logged exclusively via official banking channels or listed digital portals to shield against fraudulent operations.
          </div>
        </footer>
        
      </div>
    </div>
  );
};

export default PMMY;