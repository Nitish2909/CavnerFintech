import React from 'react';

const ProjectReport = () => {
  const reportPillars = [
    {
      title: "Executive Summary 📄",
      desc: "A high-level overview detailing your business model, promoter profiles, financial requirements, and expected return on investment.",
      color: "border-indigo-500 text-indigo-800 bg-indigo-50/60 shadow-indigo-100/50"
    },
    {
      title: "Market Analysis 📊",
      desc: "Proof of demand. Includes industry trends, target audience demographics, competitor analysis, and clear marketing/sales strategies.",
      color: "border-emerald-500 text-emerald-800 bg-emerald-50/60 shadow-emerald-100/50"
    },
    {
      title: "Technical Feasibility ⚙️",
      desc: "Details your operating infrastructure: location, required machinery, raw material sources, utilities, and production processes.",
      color: "border-blue-500 text-blue-800 bg-blue-50/60 shadow-blue-100/50"
    },
    {
      title: "Financial Projections 📈",
      desc: "The critical core containing your Balance Sheets, P&L statements, Cash Flow statements, and key financial ratios for the next 3–5 years.",
      color: "border-purple-500 text-purple-800 bg-purple-50/60 shadow-purple-100/50"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 font-sans text-gray-800 antialiased bg-slate-50/30 rounded-3xl my-6">
      
      {/* Premium Hero Header Section */}
      <div className="w-full bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950 border border-slate-800 rounded-3xl flex items-center flex-col p-8 md:p-14 shadow-xl text-center mb-10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

        <span className="bg-emerald-500/20 text-emerald-300 font-semibold px-4 py-1.5 rounded-full text-xs uppercase tracking-wider mb-4 border border-emerald-500/30 backdrop-blur-sm">
          Bank Loan Compliance Documentation
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight max-w-4xl leading-tight">
          Detailed Project Report (DPR) Blueprint
        </h1>
        <p className="text-slate-300 max-w-3xl leading-relaxed mb-6 text-base md:text-lg">
          A definitive layout guide for compiling business proposal documentation required by financial institutions to sanction commercial credit lines and MSME loans.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 w-full max-w-3xl mt-2">
          <div className="px-6 py-4 bg-white/5 border border-white/10 text-white font-medium rounded-2xl shadow-inner flex-1 min-w-[260px] backdrop-blur-md">
            💰 <span className="font-bold text-emerald-300">Proves Viability</span> to Loan Officers
          </div>
          <div className="px-6 py-4 bg-white/5 border border-white/10 text-white font-medium rounded-2xl shadow-inner flex-1 min-w-[260px] backdrop-blur-md">
            📈 Mandatory for <span className="text-indigo-300 font-semibold">MUDRA, PMEGP & MSME Lines</span>
          </div>
        </div>

        {/* 20 High-Impact Loan Assessment Metrics */}
        <div className="w-full max-w-5xl text-left bg-slate-950/40 border border-white/5 rounded-2xl p-6 md:p-8 mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3.5 text-xs md:text-sm text-slate-300">
          <div className="flex items-start gap-2.5">
            <span className="text-emerald-400 mt-0.5">✔</span>
            <span><strong>Promoter Background:</strong> Clearly establishes your qualifications, industry experience, and operational capabilities.</span>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="text-emerald-400 mt-0.5">✔</span>
            <span><strong>Cost of Project:</strong> Itemizes all capital requirements like land, building, plant machinery, and pre-operative costs.</span>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="text-emerald-400 mt-0.5">✔</span>
            <span><strong>Means of Finance:</strong> Declares the ratio between the promoter's capital investment (equity) and the bank loan requested (debt).</span>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="text-emerald-400 mt-0.5">✔</span>
            <span><strong>DSCR Benchmark:</strong> Highlights the Debt Service Coverage Ratio to prove the business can easily handle timely EMI payments.</span>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="text-emerald-400 mt-0.5">✔</span>
            <span><strong>Break-Even Analysis:</strong> Pinpoints the exact sales volume at which the company covers all fixed and variable overhead costs.</span>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="text-emerald-400 mt-0.5">✔</span>
            <span><strong>Working Capital Cycle:</strong> Estimates raw material holding, inventory turnover, and debtor collection timelines.</span>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="text-emerald-400 mt-0.5">✔</span>
            <span><strong>Plant Capacity Utilization:</strong> Projects scalable operational growth (e.g., Year 1: 50%, Year 2: 65%, Year 3: 80%).</span>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="text-emerald-400 mt-0.5">✔</span>
            <span><strong>Depreciation Schedules:</strong> Applies standardized accounting methods (WDV or SLM) to track machinery value degradation.</span>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="text-emerald-400 mt-0.5">✔</span>
            <span><strong>Raw Material Sourcing:</strong> Reassures credit committees by mapping continuous availability and pricing stability of raw goods.</span>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="text-emerald-400 mt-0.5">✔</span>
            <span><strong>Manpower Blueprint:</strong> Projects staffing requirements spanning administrative, skilled, and unskilled operations.</span>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="text-emerald-400 mt-0.5">✔</span>
            <span><strong>Pricing Mechanism:</strong> Justifies product pricing structures based on clear profit markups over cost price.</span>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="text-emerald-400 mt-0.5">✔</span>
            <span><strong>Regulatory Clearances:</strong> Incorporates necessary institutional licenses like GST, MSME Udyam, Pollution NOC, and FSSAI.</span>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="text-emerald-400 mt-0.5">✔</span>
            <span><strong>Geographical Advantage:</strong> Validates plant/shop locations with regard to logistics, target markets, and labor hubs.</span>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="text-emerald-400 mt-0.5">✔</span>
            <span><strong>Target Demographics:</strong> Explicitly segments B2B client contracts or B2C consumer target bases.</span>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="text-emerald-400 mt-0.5">✔</span>
            <span><strong>Swot Matrix Definition:</strong> Maps out internal Strengths/Weaknesses and external Opportunities/Threats objectively.</span>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="text-emerald-400 mt-0.5">✔</span>
            <span><strong>Fund Flow Projections:</strong> Displays exactly where incoming capital goes and how operational liquidity remains stable.</span>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="text-emerald-400 mt-0.5">✔</span>
            <span><strong>Collateral Mapping:</strong> Explicitly outlines primary assets being hypothecated for credit coverage.</span>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="text-emerald-400 mt-0.5">✔</span>
            <span><strong>Utility Metrics:</strong> Details structural consumption overheads such as electrical power (KW loads) and water volumes.</span>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="text-emerald-400 mt-0.5">✔</span>
            <span><strong>Sensitivity Scenarios:</strong> Tests how well your business survives under a sudden 10% drop in market prices.</span>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="text-emerald-400 mt-0.5">✔</span>
            <span><strong>Repayment Schedule:</strong> Outlines proposed amortization terms, mapping monthly interest vs. principal splits.</span>
          </div>
        </div>
      </div>

      {/* Interactive Core Pillars Grid */}
      <div className="mb-14">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
            The 4 Foundational Pillars of a DPR
          </h2>
          <p className="text-gray-500 mt-2 text-sm md:text-base">What banks assess to evaluate financial liability and risk thresholds.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reportPillars.map((pillar, idx) => (
            <div
              key={idx}
              className={`p-6 border-t-4 rounded-2xl shadow-md bg-white flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${pillar.color}`}
            >
              <div>
                <h3 className="text-lg font-extrabold tracking-tight text-gray-900 mb-3">{pillar.title}</h3>
                <p className="text-xs text-gray-600 font-medium leading-relaxed">{pillar.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scheme Execution Framework Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
        
        {/* Simplified Guide Breakdown */}
        <div className="lg:col-span-1 p-6 md:p-8 bg-white border border-gray-200 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-2xl font-bold text-gray-950 mb-6 flex items-center gap-3 border-b border-gray-100 pb-4">
            <span className="bg-emerald-50 p-2 rounded-xl text-emerald-600 text-xl">💡</span> Quick Explanation
          </h2>
          <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
            <p>
              Think of a <strong>Project Report</strong> as a roadmap for your business that you show to a bank. It answers three main questions for the loan officer:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-xs">
              <li><strong>What will you do with the money?</strong> (Buying machinery, stock, renting space)</li>
              <li><strong>Is there a market for your product?</strong> (Proving customers exist)</li>
              <li><strong>How will you repay the loan?</strong> (Showing you will make enough profit to cover EMIs)</li>
            </ul>
            <p className="text-xs bg-slate-50 p-3 rounded-xl border border-slate-100 font-medium">
              Without this document, banks cannot calculate your business risk, which is why it is mandatory for schemes like MUDRA.
            </p>
          </div>
        </div>

        {/* Step-by-Step Compilation Strategy */}
        <div className="lg:col-span-1 p-6 md:p-8 bg-white border border-gray-200 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-2xl font-bold text-gray-950 mb-6 flex items-center gap-3 border-b border-gray-100 pb-4">
            <span className="bg-blue-50 p-2 rounded-xl text-blue-600 text-xl">🚀</span> Step-by-Step Checklist
          </h2>
          <ol className="space-y-4 text-xs md:text-sm text-gray-600">
            <li className="flex gap-3">
              <span className="bg-slate-100 text-slate-700 font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5">1</span>
              <span><strong>Collect Quotations:</strong> Source official price invoices for all machinery and assets you plan to buy.</span>
            </li>
            <li className="flex gap-3">
              <span className="bg-slate-100 text-slate-700 font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5">2</span>
              <span><strong>Estimate Sales:</strong> Create realistic targets for your daily or monthly product sales.</span>
            </li>
            <li className="flex gap-3">
              <span className="bg-slate-100 text-slate-700 font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5">3</span>
              <span><strong>Calculate Expenses:</strong> Factor in raw goods, rent, salaries, electricity, and insurance.</span>
            </li>
            <li className="flex gap-3">
              <span className="bg-slate-100 text-slate-700 font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5">4</span>
              <span><strong>Build CMA Data:</strong> Format financials into a Credit Monitoring Arrangement (CMA) report—the exact format bank automated engines scan.</span>
            </li>
          </ol>
        </div>

        {/* Supporting Documents Verification Checklist */}
        <div className="lg:col-span-1 p-6 md:p-8 bg-white border border-gray-200 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-2xl font-bold text-gray-950 mb-6 flex items-center gap-3 border-b border-gray-100 pb-4">
            <span className="bg-purple-50 p-2 rounded-xl text-purple-600 text-xl">📂</span> Attached Paperwork
          </h2>
          <div className="space-y-4 text-xs md:text-sm text-gray-600">
            <div>
              <h4 className="font-bold text-gray-900 mb-1 flex items-center gap-1.5">🪪 KYC & Legal Base</h4>
              <p className="pl-5 leading-relaxed text-xs">PAN card, Aadhaar card, Business registration certificates (Udyam/GST), and rental leases.</p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1 flex items-center gap-1.5">⚙️ Asset Valuation</h4>
              <p className="pl-5 leading-relaxed text-xs">Official proforma invoices and machinery catalogs from verified technical vendors.</p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1 flex items-center gap-1.5">📉 Personal Financial Track</h4>
              <p className="pl-5 leading-relaxed text-xs">Last 6–12 months bank statements along with prior 2–3 years ITR filings of the promoters.</p>
            </div>
          </div>
        </div>

      </div>

      {/* Credit Compliance Checklist Disclaimer */}
      <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl text-amber-900 font-medium text-xs md:text-sm flex items-start gap-3 shadow-inner">
        <span className="text-lg shrink-0 mt-0.5">⚠️</span> 
        <div>
          <strong className="text-amber-950 font-bold block mb-0.5">Underwriting Warning Directive</strong>
          Avoid creating overly aggressive financial projections. Credit risk teams cross-verify your projected sales margins against standard regional benchmarks for your industry. Unrealistic growth metrics can trigger an immediate rejection.
        </div>
      </div>
      
    </div>
  );
};

export default ProjectReport;