import React from 'react';

const PMVidyalaxmiPortal = () => {
  const primaryFeatures = [
    {
      title: "CELAF Integration 📑",
      desc: "Apply to multiple commercial banks simultaneously using a single, unified Common Education Loan Application Form.",
      color: "border-indigo-500 text-indigo-800 bg-indigo-50/60 shadow-indigo-100/50"
    },
    {
      title: "Full Collateral Relief 🛡️",
      desc: "No collateral or third-party guarantor required. Access complete guarantee protection across participating institutional lines.",
      color: "border-emerald-500 text-emerald-800 bg-emerald-50/60 shadow-emerald-100/50"
    },
    {
      title: "100% Finance Coverage 💰",
      desc: "Covers the entire cost of education: tuition fees, hostel charges, examinations, library dues, books, and study equipment like laptops.",
      color: "border-blue-500 text-blue-800 bg-blue-50/60 shadow-blue-100/50"
    },
    {
      title: "Moratorium Protection ⏱️",
      desc: "Enjoy comfortable principal suspension windows spanning the entire course duration plus an extra 1-year buffer before repayment begins.",
      color: "border-purple-500 text-purple-800 bg-purple-50/60 shadow-purple-100/50"
    },
    {
      title: "Flexible Repayment 🗓️",
      desc: "Offers extended repayment amortization timelines up to 15 years after the moratorium period with zero prepayment penalty fees.",
      color: "border-blue-500 text-blue-800 bg-blue-50/60 shadow-blue-100/50"
    },
    {
      title: "Interest Subvention (Subsidy) 📉",
      desc: "100% interest subsidy for family incomes up to ₹4.5 Lakhs. 3% interest subsidy on loans up to ₹10 Lakhs for family incomes up to ₹8 Lakhs.",
      color: "border-emerald-500 text-emerald-800 bg-emerald-50/60 shadow-emerald-100/50"
    },
    {
      title: "Global Academic Scope 🌍",
      desc: "Tailored funding provisions spanning certified domestic institutions as well as elite global university admissions.",
      color: "border-purple-500 text-purple-800 bg-purple-50/60 shadow-purple-100/50"
    },
    {
      title: "PM-Vidyalaxmi Benefits 👑",
      desc: "Loans feature a massive credit guarantee backstop from the Indian government. Subsidy payouts map seamlessly via digital currency.",
      color: "border-indigo-500 text-indigo-800 bg-indigo-50/60 shadow-indigo-100/50"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 font-sans text-gray-800 antialiased bg-slate-50/30 rounded-3xl my-6">
      
      {/* Premium Hero Header Section */}
      <div className="w-full bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 border border-slate-800 rounded-3xl flex items-center flex-col p-8 md:p-14 shadow-xl text-center mb-10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

        <span className="bg-indigo-500/20 text-indigo-300 font-semibold px-4 py-1.5 rounded-full text-xs uppercase tracking-wider mb-4 border border-indigo-500/30 backdrop-blur-sm">
          Department of Higher Education, GoI
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight max-w-4xl leading-tight">
          PM-Vidyalaxmi Education Loan 
        </h1>
        <p className="text-slate-300 max-w-3xl leading-relaxed mb-6 text-base md:text-lg">
          A groundbreaking unified digital bridge designed to ensure no meritorious student is denied higher education due to financial constraints, offering streamlined access to premier banking facilities nationwide.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 w-full max-w-3xl mt-2">
          <div className="px-6 py-4 bg-white/5 border border-white/10 text-white font-medium rounded-2xl shadow-inner flex-1 min-w-[260px] backdrop-blur-md">
            ⚡ <span className="font-bold text-indigo-300 underline decoration-indigo-400 decoration-2">Single Window</span> Loan Processing
          </div>
          <div className="px-6 py-4 bg-white/5 border border-white/10 text-white font-medium rounded-2xl shadow-inner flex-1 min-w-[260px] backdrop-blur-md">
            🎓 Direct Linkages to <span className="text-blue-300 font-semibold">Scholarship & Subsidy Schemes</span>
          </div>
        </div>

        {/* 20 High-Impact Core System Facts */}
        <div className="w-full max-w-5xl text-left bg-slate-950/40 border border-white/5 rounded-2xl p-6 md:p-8 mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3.5 text-xs md:text-sm text-slate-300">
          <div className="flex items-start gap-2.5">
            <span className="text-indigo-400 mt-0.5">⭐</span>
            <span><strong>Universal Integration:</strong> Combines national education loan services alongside regional scholarship structures on one dashboard.</span>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="text-indigo-400 mt-0.5">⭐</span>
            <span><strong>Comprehensive Expense Cover:</strong> Funding scales cover tuition fees, examination outlays, library dues, equipment purchases, and hostel bills.</span>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="text-indigo-400 mt-0.5">⭐</span>
            <span><strong>Interest Subvention Links:</strong> Direct integration with the Central Sector Interest Subsidy (CSIS) framework for eligible income segments.</span>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="text-indigo-400 mt-0.5">⭐</span>
            <span><strong>Real-Time Tracking:</strong> Provides students full status insight from primary verification up to terminal credit disbursal.</span>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="text-indigo-400 mt-0.5">⭐</span>
            <span><strong>Direct Grievance Pipeline:</strong> Allows direct logging of unresolved queries and processing delays straight to the designated bank node.</span>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="text-indigo-400 mt-0.5">⭐</span>
            <span><strong>No Upfront Fees:</strong> Zero processing charges applied for loans up to ₹4 Lakhs across participating public sector banks.</span>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="text-indigo-400 mt-0.5">⭐</span>
            <span><strong>Extended Repayment:</strong> Amortization options offer comfortable terms extending up to 15 years post-moratorium.</span>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="text-indigo-400 mt-0.5">⭐</span>
            <span><strong>Co-Obligation Rules:</strong> Parents or guardians join as joint co-borrowers, removing the requirement for outside financial sponsors.</span>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="text-indigo-400 mt-0.5">⭐</span>
            <span><strong>Promoted Institution Tiers:</strong> Higher loan ceilings and premium concessions map cleanly to top accredited NIRF institutions.</span>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="text-indigo-400 mt-0.5">⭐</span>
            <span><strong>Margin Money Relief:</strong> Zero margin requirement applied for academic outlays spanning up to ₹4 Lakhs.</span>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="text-indigo-400 mt-0.5">⭐</span>
            <span><strong>Automated Document Vault:</strong> Secure upload slots store academic transcripts, income cards, and admission letters reliably.</span>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="text-indigo-400 mt-0.5">⭐</span>
            <span><strong>Interest Rate Ceilings:</strong> Rates are indexed directly to current MCLR rules plus a controlled, low-tier spread premium.</span>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="text-indigo-400 mt-0.5">⭐</span>
            <span><strong>Skill Development Focus:</strong> Extends special credit facilities toward polytechnics, industrial training institutes, and certified skill modules.</span>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="text-indigo-400 mt-0.5">⭐</span>
            <span><strong>Multi-Bank Tendering:</strong> Allows students to systematically check and contrast up to three separate financial products concurrently.</span>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="text-indigo-400 mt-0.5">⭐</span>
            <span><strong>Digital Disbursal Architecture:</strong> Approved outlays flow directly to institutional bank accounts to manage fund allocation securely.</span>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="text-indigo-400 mt-0.5">⭐</span>
            <span><strong>Simple Eligibility Rules:</strong> Open to all citizens who have secured verified admissions via competitive tests or merit processes.</span>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="text-indigo-400 mt-0.5">⭐</span>
            <span><strong>No Prepayment Penalty:</strong> Allows family units to clear balances early ahead of term expirations with zero extra fees.</span>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="text-indigo-400 mt-0.5">⭐</span>
            <span><strong>National Portal Alignment:</strong> Synchronized directly with DigiLocker systems to support immediate credentials matching.</span>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="text-indigo-400 mt-0.5">⭐</span>
            <span><strong>Gender-Based Rebates:</strong> Offers dedicated interest concessions (typically 0.50% reduction) for female student applicants.</span>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="text-indigo-400 mt-0.5">⭐</span>
            <span><strong>Paperless Integration:</strong> Drives zero physical interaction models across standard identity parameters and verification pipelines.</span>
          </div>
        </div>
      </div>

      {/* Interactive Features Showcase Grid */}
      <div className="mb-14">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
            Features & Strategic Benefits
          </h2>
          <p className="text-gray-500 mt-2 text-sm md:text-base">Empowering students through structured financial access and institutional security layers.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {primaryFeatures.map((feat, idx) => (
            <div
              key={idx}
              className={`p-6 border-t-4 rounded-2xl shadow-md bg-white flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${feat.color}`}
            >
              <div>
                <h3 className="text-lg font-extrabold tracking-tight text-gray-900 mb-3">{feat.title}</h3>
                <p className="text-xs text-gray-600 font-medium leading-relaxed">{feat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scheme Execution Framework Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
        
        {/* Comprehensive Eligibility Section */}
        <div className="lg:col-span-1 p-6 md:p-8 bg-white border border-gray-200 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-2xl font-bold text-gray-950 mb-6 flex items-center gap-3 border-b border-gray-100 pb-4">
            <span className="bg-indigo-50 p-2 rounded-xl text-indigo-600 text-xl">📋</span> Who Can Apply?
          </h2>
          <ul className="space-y-4 text-sm text-gray-600">
            <li className="flex items-start gap-3">
              <span className="text-emerald-500 font-bold bg-emerald-50 px-1.5 py-0.5 rounded-md mt-0.5 text-xs">✓</span>
              <span><strong>Nationality Status:</strong> Must be an Indian citizen (includes NRIs and OCIs).</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-emerald-500 font-bold bg-emerald-50 px-1.5 py-0.5 rounded-md mt-0.5 text-xs">✓</span>
              <span><strong>Admission Proof:</strong> Secured admission on merit or via competitive entrance exams to a designated Quality Higher Education Institution (QHEI).</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-emerald-500 font-bold bg-emerald-50 px-1.5 py-0.5 rounded-md mt-0.5 text-xs">✓</span>
              <span><strong>Eligible Courses:</strong> Enrolled in recognized graduation, post-graduation, diploma, or higher professional programs.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-emerald-500 font-bold bg-emerald-50 px-1.5 py-0.5 rounded-md mt-0.5 text-xs">✓</span>
              <span><strong>Co-Borrower Requirement:</strong> A parent or legal guardian must sign onto the agreement as a joint co-borrower.</span>
            </li>
          </ul>
        </div>

        {/* Actionable Application Portal Links Section */}
        <div className="lg:col-span-1 p-6 md:p-8 bg-white border border-gray-200 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-2xl font-bold text-gray-950 mb-6 flex items-center gap-3 border-b border-gray-100 pb-4">
            <span className="bg-blue-50 p-2 rounded-xl text-blue-600 text-xl">🚀</span> Step-by-Step Action
          </h2>
          
          <div className="mb-6 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-2xl border border-blue-100">
            <p className="font-bold text-xs uppercase tracking-wider text-blue-800 mb-2">Official Portal Gateway:</p>
            <ul className="space-y-2 text-xs md:text-sm">
              <li>
                🔗 <a href="https://www.pmvidyalaxmi.co.in" target="_blank" rel="noreferrer" className="text-blue-600 font-bold hover:underline">pmvidyalaxmi.co.in</a>
              </li>
            </ul>
          </div>

          <ol className="space-y-4 text-xs md:text-sm text-gray-600">
            <li className="flex gap-3">
              <span className="bg-slate-100 text-slate-700 font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5">1</span>
              <span><strong>Portal Registration:</strong> Go to pmvidyalaxmi.co.in and sign up using your basic details, email, and phone verification.</span>
            </li>
            <li className="flex gap-3">
              <span className="bg-slate-100 text-slate-700 font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5">2</span>
              <span><strong>Fill the CELAF Form:</strong> Input detailed personal history, educational tracks, and college information into the Common Education Loan Application Form.</span>
            </li>
            <li className="flex gap-3">
              <span className="bg-slate-100 text-slate-700 font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5">3</span>
              <span><strong>Upload Paperwork Vault:</strong> Securely upload legible scanned copies of all required student and co-borrower records.</span>
            </li>
            <li className="flex gap-3">
              <span className="bg-slate-100 text-slate-700 font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5">4</span>
              <span><strong>Select Banks & Submit:</strong> Contrast options and select up to 3 separate banking networks simultaneously to process the request.</span>
            </li>
            <li className="flex gap-3">
              <span className="bg-slate-100 text-slate-700 font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5">5</span>
              <span><strong>Track & Setup Wallet:</strong> Monitor processing live. Upon approval, install the PM-Vidyalaxmi Digital Rupee App to receive interest subsidies via CBDC.</span>
            </li>
          </ol>
        </div>

        {/* Documents Checklist Section */}
        <div className="lg:col-span-1 p-6 md:p-8 bg-white border border-gray-200 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-2xl font-bold text-gray-950 mb-6 flex items-center gap-3 border-b border-gray-100 pb-4">
            <span className="bg-purple-50 p-2 rounded-xl text-purple-600 text-xl">📂</span> Required Documents
          </h2>
          <div className="space-y-4 text-xs md:text-sm text-gray-600 max-h-[380px] overflow-y-auto pr-2">
            <div>
              <h4 className="font-bold text-gray-900 mb-1 flex items-center gap-1.5">🎓 Student Identity & Academic Vault</h4>
              <ul className="list-disc pl-5 space-y-1 text-xs">
                <li>Aadhaar Card & PAN Card</li>
                <li>Valid Address Proof (Passport, Voter ID, or Utility bill)</li>
                <li>Class 10th and 12th official marksheets</li>
                <li>Prior graduation degree certificates (if applicable)</li>
                <li>Entrance exam scorecard (JEE, NEET, CAT, etc.)</li>
                <li>Official College Admission Letter / Offer Letter</li>
                <li>Fee break-up sheet / demand letter from the institution</li>
                <li>Recent passport-size photographs</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1 flex items-center gap-1.5">💼 Parent / Co-Borrower Documentation</h4>
              <ul className="list-disc pl-5 space-y-1 text-xs">
                <li>Aadhaar Card & PAN Card</li>
                <li>Valid Address Proof</li>
                <li>Income Certificate issued by designated public authority</li>
                <li>Salaried: Salary slips, Form 16, & last 6 months bank statements</li>
                <li>Self-Employed: Last 2-3 years ITR & business bank statements</li>
                <li>Recent passport-size photographs</li>
              </ul>
            </div>
          </div>
        </div>

      </div>

      {/* Safety Compliance Banner */}
      <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl text-amber-900 font-medium text-xs md:text-sm flex items-start gap-3 shadow-inner">
        <span className="text-lg shrink-0 mt-0.5">⚠️</span> 
        <div>
          <strong className="text-amber-950 font-bold block mb-0.5">System Security Directive</strong>
          Ensure all education application pipelines are generated exclusively inside verified domain endpoints. The portal charges zero brokerage commissions or third-party transaction premiums for institutional file delivery.
        </div>
      </div>
      
    </div>
  );
};

export default PMVidyalaxmiPortal;