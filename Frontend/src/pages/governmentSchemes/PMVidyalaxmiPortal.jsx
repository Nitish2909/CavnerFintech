import React from 'react';

const PMVidyalaxmiPortal = () => {
  const primaryFeatures = [
    {
      title: "CELAF Integration 📑",
      desc: "Apply to multiple commercial banks simultaneously using a single, unified Common Education Loan Application Form.",
      accentClass: "border-l-indigo-500",
    },
    {
      title: "Full Collateral Relief 🛡️",
      desc: "No collateral or third-party guarantor required. Access complete guarantee protection across participating institutional lines.",
      accentClass: "border-l-emerald-500",
    },
    {
      title: "100% Finance Coverage 💰",
      desc: "Covers the entire cost of education: tuition fees, hostel charges, examinations, library dues, books, and study equipment like laptops.",
      accentClass: "border-l-blue-500",
    },
    {
      title: "Moratorium Protection ⏱️",
      desc: "Enjoy comfortable principal suspension windows spanning the entire course duration plus an extra 1-year buffer before repayment begins.",
      accentClass: "border-l-purple-500",
    },
    {
      title: "Flexible Repayment 🗓️",
      desc: "Offers extended repayment amortization timelines up to 15 years after the moratorium period with zero prepayment penalty fees.",
      accentClass: "border-l-blue-500",
    },
    {
      title: "Interest Subvention 📉",
      desc: "100% interest subsidy for family incomes up to ₹4.5 Lakhs. 3% interest subsidy on loans up to ₹10 Lakhs for family incomes up to ₹8 Lakhs.",
      accentClass: "border-l-emerald-500",
    },
    {
      title: "Global Academic Scope 🌍",
      desc: "Tailored funding provisions spanning certified domestic institutions as well as elite global university admissions.",
      accentClass: "border-l-purple-500",
    },
    {
      title: "PM-Vidyalaxmi Benefits 👑",
      desc: "Loans feature a massive credit guarantee backstop from the Indian government. Subsidy payouts map seamlessly via digital currency.",
      accentClass: "border-l-indigo-500",
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8 font-sans antialiased text-slate-900 selection:bg-indigo-500 selection:text-white">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Premium Hero Header Section */}
        <header className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-8 sm:p-12 text-center shadow-xl shadow-indigo-950/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent pointer-events-none" />
          
          <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-200 backdrop-blur-sm mb-4 border border-white/5">
            Department of Higher Education, GoI
          </span>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white max-w-4xl mx-auto leading-tight">
            PM-Vidyalaxmi Education Loan
          </h1>
          
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-3xl mx-auto font-normal">
            A groundbreaking unified digital bridge designed to ensure no meritorious student is denied higher education due to financial constraints, offering streamlined access to premier banking facilities nationwide.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 max-w-3xl mx-auto">
            <div className="px-5 py-3 bg-white/5 border border-white/10 text-slate-200 text-xs sm:text-sm font-medium rounded-xl backdrop-blur-md shadow-inner flex-1 min-w-[240px]">
              ⚡ <span className="font-bold text-indigo-300">Single Window</span> Loan Processing
            </div>
            <div className="px-5 py-3 bg-white/5 border border-white/10 text-slate-200 text-xs sm:text-sm font-medium rounded-xl backdrop-blur-md shadow-inner flex-1 min-w-[240px]">
              🎓 Direct Linkages to <span className="text-indigo-300 font-semibold">Scholarships & Subsidies</span>
            </div>
          </div>
        </header>

        {/* 20 High-Impact Core System Facts - Clean Grid Layout */}
        <section className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-bold tracking-tight text-slate-900 border-b border-slate-100 pb-4 mb-6">
            Core System Architecture & Platform Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-sm text-slate-600">
            <div className="flex items-start gap-3">
              <span className="text-indigo-600 font-bold mt-0.5">⭐</span>
              <span><strong>Universal Integration:</strong> Combines national education loan services alongside regional scholarship structures on one dashboard.</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-indigo-600 font-bold mt-0.5">⭐</span>
              <span><strong>Comprehensive Expense Cover:</strong> Funding scales cover tuition fees, examination outlays, library dues, equipment purchases, and hostel bills.</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-indigo-600 font-bold mt-0.5">⭐</span>
              <span><strong>Interest Subvention Links:</strong> Direct integration with the Central Sector Interest Subsidy (CSIS) framework for eligible income segments.</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-indigo-600 font-bold mt-0.5">⭐</span>
              <span><strong>Real-Time Tracking:</strong> Provides students full status insight from primary verification up to terminal credit disbursal.</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-indigo-600 font-bold mt-0.5">⭐</span>
              <span><strong>Direct Grievance Pipeline:</strong> Allows direct logging of unresolved queries and processing delays straight to the designated bank node.</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-indigo-600 font-bold mt-0.5">⭐</span>
              <span><strong>No Upfront Fees:</strong> Zero processing charges applied for loans up to ₹4 Lakhs across participating public sector banks.</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-indigo-600 font-bold mt-0.5">⭐</span>
              <span><strong>Extended Repayment:</strong> Amortization options offer comfortable terms extending up to 15 years post-moratorium.</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-indigo-600 font-bold mt-0.5">⭐</span>
              <span><strong>Co-Obligation Rules:</strong> Parents or guardians join as joint co-borrowers, removing the requirement for outside financial sponsors.</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-indigo-600 font-bold mt-0.5">⭐</span>
              <span><strong>Promoted Institution Tiers:</strong> Higher loan ceilings and premium concessions map cleanly to top accredited NIRF institutions.</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-indigo-600 font-bold mt-0.5">⭐</span>
              <span><strong>Margin Money Relief:</strong> Zero margin requirement applied for academic outlays spanning up to ₹4 Lakhs.</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-indigo-600 font-bold mt-0.5">⭐</span>
              <span><strong>Automated Document Vault:</strong> Secure upload slots store academic transcripts, income cards, and admission letters reliably.</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-indigo-600 font-bold mt-0.5">⭐</span>
              <span><strong>Interest Rate Ceilings:</strong> Rates are indexed directly to current MCLR rules plus a controlled, low-tier spread premium.</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-indigo-600 font-bold mt-0.5">⭐</span>
              <span><strong>Skill Development Focus:</strong> Extends special credit facilities toward polytechnics, industrial training institutes, and certified skill modules.</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-indigo-600 font-bold mt-0.5">⭐</span>
              <span><strong>Multi-Bank Tendering:</strong> Allows students to systematically check and contrast up to three separate financial products concurrently.</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-indigo-600 font-bold mt-0.5">⭐</span>
              <span><strong>Digital Disbursal Architecture:</strong> Approved outlays flow directly to institutional bank accounts to manage fund allocation securely.</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-indigo-600 font-bold mt-0.5">⭐</span>
              <span><strong>Simple Eligibility Rules:</strong> Open to all citizens who have secured verified admissions via competitive tests or merit processes.</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-indigo-600 font-bold mt-0.5">⭐</span>
              <span><strong>No Prepayment Penalty:</strong> Allows family units to clear balances early ahead of term expirations with zero extra fees.</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-indigo-600 font-bold mt-0.5">⭐</span>
              <span><strong>National Portal Alignment:</strong> Synchronized directly with electronic verification systems to support immediate credentials matching.</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-indigo-600 font-bold mt-0.5">⭐</span>
              <span><strong>Gender-Based Rebates:</strong> Offers dedicated interest concessions (typically 0.50% reduction) for female student applicants.</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-indigo-600 font-bold mt-0.5">⭐</span>
              <span><strong>Paperless Integration:</strong> Drives zero physical interaction models across standard identity parameters and verification pipelines.</span>
            </div>
          </div>
        </section>

        {/* Features & Strategic Benefits Grid */}
        <section className="space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold tracking-tight text-slate-950">
              Features & Strategic Benefits
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              Empowering students through structured financial access and institutional security layers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {primaryFeatures.map((feat, idx) => (
              <div
                key={idx}
                className={`p-6 bg-white border border-slate-200/80 rounded-xl shadow-xs border-l-4 ${feat.accentClass} flex flex-col justify-between hover:shadow-md transition-all duration-200`}
              >
                <div>
                  <h3 className="text-base font-bold text-slate-900 tracking-tight mb-2">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {feat.desc}
                  </p>
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
                <span className="text-indigo-600">📋</span> Who Can Apply?
              </h3>
              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded text-[11px]">✓</span>
                  <span><strong>Nationality Status:</strong> Must be a citizen of India (includes applicable non-resident classifications).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded text-[11px]">✓</span>
                  <span><strong>Admission Proof:</strong> Secured admission on merit or via competitive entrance exams to a designated Quality Higher Education Institution (QHEI).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded text-[11px]">✓</span>
                  <span><strong>Eligible Courses:</strong> Enrolled in recognized graduation, post-graduation, diploma, or higher professional programs.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded text-[11px]">✓</span>
                  <span><strong>Co-Borrower Requirement:</strong> A parent or legal guardian must sign onto the agreement as a joint co-borrower.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Actionable Steps Section */}
          <div className="p-6 bg-white border border-slate-200 rounded-xl shadow-xs flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-950 mb-4 pb-3 border-b border-slate-100 flex items-center gap-2">
                <span className="text-indigo-600">🚀</span> Step-by-Step Action
              </h3>
              
              <div className="mb-4 bg-slate-50 p-3 rounded-lg border border-slate-200">
                <p className="font-bold text-[10px] uppercase tracking-wider text-slate-500 mb-1.5">Official Portal Gateway:</p>
                <div className="text-xs">
                  <a href="https://www.pmvidyalaxmi.co.in" target="_blank" rel="noreferrer" className="text-indigo-600 font-bold hover:underline inline-flex items-center gap-1">
                    🔗 pmvidyalaxmi.co.in
                  </a>
                </div>
              </div>

              <ol className="space-y-3 text-xs text-slate-600">
                <li className="flex gap-2.5">
                  <span className="bg-slate-100 text-slate-700 font-bold w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-[11px]">1</span>
                  <span><strong>Portal Registration:</strong> Sign up online using fundamental profile vectors, email identification, and secure validation mechanisms.</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="bg-slate-100 text-slate-700 font-bold w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-[11px]">2</span>
                  <span><strong>Fill the CELAF Form:</strong> Input detailed personal history, academic marks, and selected institution data into the unified Common Form.</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="bg-slate-100 text-slate-700 font-bold w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-[11px]">3</span>
                  <span><strong>Upload Paperwork Vault:</strong> Securely upload legible digital copies of all requested student and co-borrower credentials.</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="bg-slate-100 text-slate-700 font-bold w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-[11px]">4</span>
                  <span><strong>Select Banks & Submit:</strong> Contrast processing offers and pick up to three independent financial networks simultaneously.</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="bg-slate-100 text-slate-700 font-bold w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-[11px]">5</span>
                  <span><strong>Track & Setup Wallet:</strong> Monitor application updates live. Upon approval, configure the designated digital rupee application layers to manage subsidies.</span>
                </li>
              </ol>
            </div>
          </div>

          {/* Documents Checklist Section */}
          <div className="p-6 bg-white border border-slate-200 rounded-xl shadow-xs flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-950 mb-4 pb-3 border-b border-slate-100 flex items-center gap-2">
                <span className="text-indigo-600">📂</span> Required Documents
              </h3>
              <div className="space-y-4 text-xs text-slate-600 max-h-[340px] overflow-y-auto pr-1">
                <div>
                  <h4 className="font-bold text-slate-900 flex items-center gap-1">🎓 Student Academic Vault</h4>
                  <ul className="mt-1 list-disc pl-4 space-y-1 text-slate-500">
                    <li>Official structural identification and tax records</li>
                    <li>Verified address records (Passport, Voter card, or utilities)</li>
                    <li>Class 10th and 12th official marksheets</li>
                    <li>Entrance scorecard metrics (JEE, NEET, CAT, etc.)</li>
                    <li>Official College Admission / Offer Letters</li>
                    <li>Detailed institutional fee architecture or demand sheet</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 flex items-center gap-1">💼 Co-Borrower Documentation</h4>
                  <ul className="mt-1 list-disc pl-4 space-y-1 text-slate-500">
                    <li>Valid identification maps and structural tax logs</li>
                    <li>Official revenue certificate showing certified annual earnings</li>
                    <li>Salaried: Salary certificates, Form 16, & past 6 months bank logs</li>
                    <li>Self-Employed: Multi-year tax filings & business bank accounts</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Safety Compliance Banner */}
        <footer className="p-4 bg-amber-50/80 border border-amber-200 rounded-xl text-amber-900 text-xs sm:text-sm flex items-start gap-3 shadow-xs">
          <span className="text-base shrink-0 mt-0.5">⚠️</span> 
          <div>
            <strong className="text-amber-950 font-bold block mb-0.5">System Security Directive</strong>
            Ensure all educational application steps are initialized exclusively inside verified government domain portals. The processing system charges absolutely zero intermediary brokerage cuts or third-party transfer fees for institutional file handling.
          </div>
        </footer>
        
      </div>
    </div>
  );
};

export default PMVidyalaxmiPortal;