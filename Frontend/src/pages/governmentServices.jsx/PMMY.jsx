import React from "react";

const PMMY = () => {
  const products = [
    {
      name: "Shishu 🌱",
      desc: "Perfect for micro start-ups and new tiny ventures.",
      limit: "Loans up to ₹50,000",
      color: "border-emerald-500 text-emerald-800 bg-emerald-50/60 shadow-emerald-100/50",
      badgeColor: "bg-emerald-500",
    },
    {
      name: "Kishor 🚀",
      desc: "For operational businesses requiring scaling capital.",
      limit: "₹50,000 to ₹5 Lakhs",
      color: "border-blue-500 text-blue-800 bg-blue-50/60 shadow-blue-100/50",
      badgeColor: "bg-blue-500",
    },
    {
      name: "Tarun 🏆",
      desc: "For established units aiming for massive growth.",
      limit: "₹5 Lakhs to ₹10 Lakhs",
      color: "border-orange-500 text-orange-800 bg-orange-50/60 shadow-orange-100/50",
      badgeColor: "bg-orange-500",
    },
    {
      name: "Tarun Plus 🔥",
      desc: "Exclusive upgrade reward for clean repayment history.",
      limit: "₹10 Lakhs to ₹20 Lakhs",
      color: "border-purple-500 text-purple-800 bg-purple-50/60 shadow-purple-100/50",
      badgeColor: "bg-purple-500",
    },
  ];

  const subsidyMatrix = [
    { category: "General", urban: "15%", rural: "25%" },
    { category: "Special*", urban: "25%", rural: "35%" },
  ];

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 font-sans text-gray-800 antialiased bg-slate-50/30 rounded-3xl my-6">
      
      {/* Premium Hero Header Section */}
      <div className="w-full bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 border border-slate-800 rounded-3xl flex items-center flex-col p-8 md:p-14 shadow-xl text-center mb-10 relative overflow-hidden">
        {/* Abstract Background Glows */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

        <span className="bg-indigo-500/20 text-indigo-300 font-semibold px-4 py-1.5 rounded-full text-xs uppercase tracking-wider mb-4 border border-indigo-500/30 backdrop-blur-sm">
          Govt. of India Initiative
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight max-w-4xl leading-tight">
          Pradhan Mantri MUDRA Yojana (PMMY)
        </h1>
        <p className="text-slate-300 max-w-3xl leading-relaxed mb-6 text-base md:text-lg">
          Launched by the Hon’ble Prime Minister, PMMY provides credit bridges up to <strong>₹20 Lakhs</strong> to support non-corporate, non-farm small and micro enterprises across India.
        </p>

        {/* 20 High-Impact Core Architecture Facts */}
        <div className="w-full max-w-5xl text-left bg-slate-950/40 border border-white/5 rounded-2xl p-6 md:p-8 mt-4 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3.5 text-xs md:text-sm text-slate-300">
          <div className="flex items-start gap-2.5">
            <span className="text-indigo-400 mt-0.5">⚡</span>
            <span><strong>Target Segments:</strong> Explicitly covers small manufacturing units, service sector entities, artisans, shopkeepers, and fruit/vegetable vendors.</span>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="text-indigo-400 mt-0.5">⚡</span>
            <span><strong>Allied Agriculture Scope:</strong> Extends funding eligibility to pisciculture, poultry farming, dairy processing, sorting, grading, and aggregations.</span>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="text-indigo-400 mt-0.5">⚡</span>
            <span><strong>Zero Collateral Security:</strong> Borrowers are not required to provide third-party guarantees or real-estate hypothecations to access lines.</span>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="text-indigo-400 mt-0.5">⚡</span>
            <span><strong>Credit Guarantee Pool:</strong> Funded structures are backed safely by the National Credit Guarantee Trustee Company (NCGTC) security coverage.</span>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="text-indigo-400 mt-0.5">⚡</span>
            <span><strong>Flexible Processing Fees:</strong> Zero upfront structural charges or administrative fees apply directly to the baseline Shishu application tier.</span>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="text-indigo-400 mt-0.5">⚡</span>
            <span><strong>MUDRA Card Interface:</strong> Working capital limits are loaded onto a RuPay debit card for fluid, on-demand ATM cash withdrawals.</span>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="text-indigo-400 mt-0.5">⚡</span>
            <span><strong>Repayment Tenures:</strong> Offers a highly adaptive amortized loan repayment horizon stretching across a term period of 3 to 5 years.</span>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="text-indigo-400 mt-0.5">⚡</span>
            <span><strong>Interest Arbitrage:</strong> Commercial banks set baseline rates tied explicitly to the Marginal Cost of Funds Based Lending Rate (MCLR).</span>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="text-indigo-400 mt-0.5">⚡</span>
            <span><strong>No Minimum Cutoff:</strong> Tiny entrepreneurs can securely apply for ultra-micro lines under the Shishu scheme with zero base scale rules.</span>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="text-indigo-400 mt-0.5">⚡</span>
            <span><strong>Gender Empowerment Focus:</strong> Partnering financial nodes often extend customized, reduced rate segments for solo women entrepreneurs.</span>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="text-indigo-400 mt-0.5">⚡</span>
            <span><strong>Diverse Delivery Nodes:</strong> Monitored outlays are fully operational across Scheduled Commercial Banks, Regional Rural Banks (RRBs), and NBFCs.</span>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="text-indigo-400 mt-0.5">⚡</span>
            <span><strong>End-Use Verification:</strong> Loans are dedicated precisely for equipment purchases, raw inventories, and operational working capital expansions.</span>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="text-indigo-400 mt-0.5">⚡</span>
            <span><strong>No Corporate Inclusions:</strong> Public/private limited corporations outside micro limits cannot access this localized MSME pool.</span>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="text-indigo-400 mt-0.5">⚡</span>
            <span><strong>Pan-India Accessibility:</strong> Available throughout rural, urban, and semi-urban clusters across all functional commercial bank windows.</span>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="text-indigo-400 mt-0.5">⚡</span>
            <span><strong>Dynamic Tarun Plus Tier:</strong> Scaled up limits to a maximum of ₹20 Lakhs for candidates demonstrating consistent repayment tracks.</span>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="text-indigo-400 mt-0.5">⚡</span>
            <span><strong>Financial Literacy Links:</strong> Combines formal capital delivery models with targeted enterprise development programs for small units.</span>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="text-indigo-400 mt-0.5">⚡</span>
            <span><strong>Formalizing Shadow Credit:</strong> Migrates traditional unorganized micro-business debts into institutional, low-risk banking books.</span>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="text-indigo-400 mt-0.5">⚡</span>
            <span><strong>Co-Lending Synergies:</strong> Enables collaborative structural capital syndication between modern FinTech channels and public sector banks.</span>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="text-indigo-400 mt-0.5">⚡</span>
            <span><strong>Strict De-Duplication Rules:</strong> Applicants are checked against central credit bureaus to assure clear status across standard lending nodes.</span>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="text-indigo-400 mt-0.5">⚡</span>
            <span><strong>Digital-First Process:</strong> Eliminates manual files by integrating fast verification cycles via JanSamarth and UdyamiMitra portals.</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 w-full max-w-3xl mt-2">
          <div className="px-6 py-4 bg-white/5 border border-white/10 text-white font-medium rounded-2xl shadow-inner flex-1 min-w-[260px] backdrop-blur-md">
            🛡️ <span className="font-bold text-indigo-300 underline decoration-indigo-400 decoration-2">100% Collateral-Free</span> Business Funding
          </div>
          <div className="px-6 py-4 bg-white/5 border border-white/10 text-white font-medium rounded-2xl shadow-inner flex-1 min-w-[260px] backdrop-blur-md">
            🏢 Disbursed via <span className="text-blue-300 font-semibold">Commercial Banks, RRBs, SFBs & NBFCs</span>
          </div>
        </div>
      </div>

      {/* Interactive Products Showcase Grid */}
      <div className="mb-14">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
            MUDRA Tiered Credit Architecture
          </h2>
          <p className="text-gray-500 mt-2 text-sm md:text-base">Four uniquely tailored funding stages aligned with your business maturity lifecycle.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, idx) => (
            <div
              key={idx}
              className={`p-6 border-t-4 rounded-2xl shadow-md bg-white flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${product.color}`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-extrabold tracking-tight text-gray-900">{product.name}</h3>
                  <span className={`w-2.5 h-2.5 rounded-full ${product.badgeColor}`} />
                </div>
                <p className="text-xs text-gray-600 font-medium leading-relaxed mb-4">{product.desc}</p>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-100">
                <span className="text-xs uppercase font-semibold text-gray-400 tracking-wider block mb-1">Funding Scale</span>
                <span className="text-base font-black tracking-tight">{product.limit}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Framework Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
        
        {/* Comprehensive Scheme Eligibility Section */}
        <div className="lg:col-span-1 p-6 md:p-8 bg-white border border-gray-200 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-2xl font-bold text-gray-950 mb-6 flex items-center gap-3 border-b border-gray-100 pb-4">
            <span className="bg-indigo-50 p-2 rounded-xl text-indigo-600 text-xl">📋</span> Who is Eligible?
          </h2>
          <ul className="space-y-4 text-sm md:text-base text-gray-600">
            <li className="flex items-start gap-3">
              <span className="text-emerald-500 font-bold bg-emerald-50 px-1.5 py-0.5 rounded-md mt-0.5 text-xs">✓</span>
              <span><strong>Eligible Formations:</strong> Proprietary concerns, small partnership firms, LLPs, and Private Limited companies.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-emerald-500 font-bold bg-emerald-50 px-1.5 py-0.5 rounded-md mt-0.5 text-xs">✓</span>
              <span><strong>Sector Types:</strong> Small manufacturing units, service sector entities, shopkeepers, fruit/vegetable vendors, and truck operators.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-emerald-500 font-bold bg-emerald-50 px-1.5 py-0.5 rounded-md mt-0.5 text-xs">✓</span>
              <span><strong>Allied Agriculture:</strong> Income-generating activities directly allied to agriculture (poultry, dairy, beekeeping, fishery) are eligible.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-emerald-500 font-bold bg-emerald-50 px-1.5 py-0.5 rounded-md mt-0.5 text-xs">✓</span>
              <span><strong>Credit Rating:</strong> The applicant must hold a zero default track record across all commercial lending institutions.</span>
            </li>
          </ul>
        </div>

        {/* Dynamic How to Apply & Portal Links Section */}
        <div className="lg:col-span-1 p-6 md:p-8 bg-white border border-gray-200 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-2xl font-bold text-gray-950 mb-6 flex items-center gap-3 border-b border-gray-100 pb-4">
            <span className="bg-blue-50 p-2 rounded-xl text-blue-600 text-xl">🚀</span> Apply in Simple Steps
          </h2>
          
          <div className="mb-6 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-2xl border border-blue-100">
            <p className="font-bold text-xs uppercase tracking-wider text-blue-800 mb-2">Verified Digital Application Channels:</p>
            <ul className="space-y-2 text-xs md:text-sm">
              <li>
                🔗 <a href="https://www.udyamimitra.in" target="_blank" rel="noreferrer" className="text-blue-600 font-bold hover:underline">UdyamiMitra Portal</a> (Official Hub)
              </li>
              <li>
                🔗 <a href="https://www.jansamarth.in" target="_blank" rel="noreferrer" className="text-blue-600 font-bold hover:underline">JanSamarth National Portal</a>
              </li>
            </ul>
          </div>

          <ol className="space-y-4 text-xs md:text-sm text-gray-600">
            <li className="flex gap-3">
              <span className="bg-slate-100 text-slate-700 font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5">1</span>
              <span><strong>Choose Channel:</strong> Access the digital UdyamiMitra portal online or step directly into your local commercial/regional rural bank branch.</span>
            </li>
            <li className="flex gap-3">
              <span className="bg-slate-100 text-slate-700 font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5">2</span>
              <span><strong>Select Category:</strong> Formulate your operational budget to choose between Shishu, Kishor, or Tarun applications.</span>
            </li>
            <li className="flex gap-3">
              <span className="bg-slate-100 text-slate-700 font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5">3</span>
              <span><strong>Submit Profile:</strong> Input personal KYC data, precise structural details of the enterprise, and attach required credentials.</span>
            </li>
            <li className="flex gap-3">
              <span className="bg-slate-100 text-slate-700 font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5">4</span>
              <span><strong>Disbursal:</strong> The bank analyzes project capacity and processes direct capital disbursal along with a MUDRA Card.</span>
            </li>
          </ol>
        </div>

        {/* Structured Documents Checklist Section */}
        <div className="lg:col-span-1 p-6 md:p-8 bg-white border border-gray-200 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-2xl font-bold text-gray-950 mb-6 flex items-center gap-3 border-b border-gray-100 pb-4">
            <span className="bg-purple-50 p-2 rounded-xl text-purple-600 text-xl">📂</span> Documents Required
          </h2>
          <div className="space-y-4 text-xs md:text-sm text-gray-600">
            <div>
              <h4 className="font-bold text-gray-900 mb-1 flex items-center gap-1.5">🪪 Personal KYC</h4>
              <p className="pl-5 leading-relaxed">Proof of Identity & Address (Aadhaar Card, Voters ID, PAN Card, Driving License) along with passport-size photographs.</p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1 flex items-center gap-1.5">🏭 Business Legitimacy</h4>
              <p className="pl-5 leading-relaxed">Proof of business continuity & establishment (Shop & Establishment certificate, Udyam Registration, GST returns, Partnership deeds).</p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1 flex items-center gap-1.5">📊 Financial Health</h4>
              <p className="pl-5 leading-relaxed">Last 6 to 12 months corporate bank statements. For higher tiers (Kishor/Tarun), balance sheets, asset quotations, and income tax statements are requested.</p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1 flex items-center gap-1.5">🎖️ Category Proofs</h4>
              <p className="pl-5 leading-relaxed">SC, ST, OBC, or Minority community verification certificates (if claiming category incentives).</p>
            </div>
          </div>
        </div>

      </div>

      {/* Safety Compliance Banner */}
      <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl text-amber-900 font-medium text-xs md:text-sm flex items-start gap-3 shadow-inner">
        <span className="text-lg shrink-0 mt-0.5">⚠️</span> 
        <div>
          <strong className="text-amber-950 font-bold block mb-0.5">Zero Authorized Middlemen Policy</strong>
          MUDRA has not deployed any local agents, consultants, or brokers to process loans. Ensure all files are logged exclusively via official banking units or authorized digital portals to shield against fraudulent operations.
        </div>
      </div>
      
    </div>
  );
};

export default PMMY;