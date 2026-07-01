import React, { useState } from "react";

const EducationLoanPage = () => {
  // State for Accordion FAQs
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const currentUpdateDate = "June 30 , 2026";

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased">
      
      {/* 1. Hero / Header Section */}
      <header className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white py-12 px-6 shadow-md">
        <div className="max-w-6xl mx-auto">
          <nav className="text-sm text-indigo-200 mb-4 flex gap-2 items-center">
            <span className="hover:underline cursor-pointer">Home</span> 
            <span>/</span> 
            <span className="text-white font-medium">Education Loan</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3">
            Education Loan
          </h1>
          <p className="text-indigo-100 max-w-2xl text-base md:text-lg opacity-90">
            Fueling academic dreams in India and abroad with flexible financing options, reliable insights, and streamlined updates.
          </p>
          <div className="mt-6 flex items-center gap-2 text-xs text-indigo-200 bg-indigo-950/40 w-fit px-3 py-1.5 rounded-full border border-indigo-700/30">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Last Updated: {currentUpdateDate}
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 md:px-6 py-10 space-y-12">
        
        {/* 2. Introduction & Core Concept */}
        <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100 grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2 space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">
              Investing in a Bright and Successful Future
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Nothing can replace quality education when it comes to building a successful trajectory for your child. However, due to the rising cost of higher education globally, self-financing is becoming increasingly difficult. 
            </p>
            <p className="text-slate-600 leading-relaxed">
              Unlike ordinary credit options, <strong>merit-centric student loans</strong> ensure that no financial obstacle blocks academic progress. Today, leading Indian banks and NBFCs provide expansive options covering graduate, postgraduate, and professional doctoral tracks.
            </p>
          </div>
          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-xl border border-indigo-100 flex flex-col justify-center h-full">
            <span className="text-xs uppercase font-bold tracking-wider text-indigo-600 mb-1">Priority Segment</span>
            <h4 className="text-lg font-bold text-slate-900 mb-2">RBI Regulated</h4>
            <p className="text-xs text-slate-600 leading-normal">
              The Reserve Bank of India classifies education loans under the <strong>Priority Sector Lending</strong> framework, ensuring standardized accessibility and favorable banking provisions.
            </p>
          </div>
        </section>

        {/* 3. Coverage Grid */}
        <section className="space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Quantum of Expenses Covered</h2>
            <p className="text-sm text-slate-500 mt-2">Comprehensive financial backing extending well beyond tuition fees alone.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { id: "01", title: "Institutional Fees", desc: "Core tuition fees, examination, and registration charges directly from the college." },
              { id: "02", title: "Study Essentials", desc: "Required books, institutional uniforms, specialty equipment, and instruments." },
              { id: "03", title: "Technology Bundles", desc: "Purchase of a functional laptop or personal computer if critical to course completion." },
              { id: "04", title: "Campus Living", desc: "Fees designated toward standard hostel boards, libraries, and laboratories." },
              { id: "05", title: "Deposits & Funds", desc: "Caution deposits, building funds, or refundable components supported by official bills." },
              { id: "06", title: "Global Travel", desc: "Passages and travel expenses incurred specifically for entering studies abroad." }
            ].map((item) => (
              <div key={item.id} className="bg-white p-5 rounded-xl shadow-xs border border-slate-200 hover:border-indigo-300 transition duration-200">
                <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded">{item.id}</span>
                <h3 className="font-semibold text-slate-900 mt-3 mb-1 text-base">{item.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Features & Repayment Terms */}
        <section className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 md:p-8 border-b border-slate-100 bg-slate-50/50">
            <h2 className="text-2xl font-bold text-slate-900">Core Loan Features & Benefits</h2>
            <p className="text-sm text-slate-500 mt-1">A comparative look at regular standard configurations and collateral matrices.</p>
          </div>
          
          <div className="p-6 md:p-8 grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-indigo-900 flex items-center gap-2">
                <span className="w-1.5 h-4 bg-indigo-600 rounded-sm"></span> Operational Baseline
              </h3>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex gap-2">⚡ <span className="font-semibold text-slate-800">Co-Signer Mandate:</span> Parental or guardian execution as a co-signor is standard.</li>
                <li className="flex gap-2">⚡ <span className="font-semibold text-slate-800">Concessions:</span> Female students typically receive an explicit 0.50% interest discount.</li>
                <li className="flex gap-2">⚡ <span className="font-semibold text-slate-800">Moratorium Grace:</span> Repayments deferred throughout the course plus up to 1 year or job placement.</li>
                <li className="flex gap-2">⚡ <span className="font-semibold text-slate-800">Tax Optimization:</span> Fully eligible for dedicated interest deductions via Section 80E of the IT Act.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold text-indigo-900 flex items-center gap-2">
                <span className="w-1.5 h-4 bg-indigo-600 rounded-sm"></span> General Collateral Matrices
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700 uppercase tracking-wider">
                      <th className="p-3 border-b border-slate-200">Quantum Class</th>
                      <th className="p-3 border-b border-slate-200">Standard Requirement</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-600">
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Up to ₹4 Lakhs</td>
                      <td className="p-3">Clean processing. Co-obligation of parents only; zero third-party security or collateral.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">₹4 Lakhs – ₹7.5 Lakhs</td>
                      <td className="p-3">Co-obligation of parents paired alongside an acceptable third-party guarantor structure.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Above ₹7.5 Lakhs</td>
                      <td className="p-3">Co-obligation of parents plus assignment of tangible collateral of matching valuation (FDs, Property).</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Course Coverage Matrix */}
        <section className="grid md:grid-cols-2 gap-6">
          <div className="bg-indigo-950 text-white p-6 md:p-8 rounded-2xl shadow-sm">
            <h3 className="text-xl font-bold mb-4 text-indigo-200">Domestic Academic Tracks</h3>
            <p className="text-xs text-indigo-300 mb-4">Applicable across fully accredited entities within India:</p>
            <div className="flex flex-wrap gap-2 text-xs">
              {["Engineering & Medical", "Full/Part-Time Management", "ICWA / CA / CFA", "IIMs, IITs, IISc, XLRI", "B.A / B.Com / M.A / MCA", "Architecture & Fine Arts", "Hotel Management", "Aeronautical / Pilot Training", "Nursing & Paramedical"].map((tag, idx) => (
                <span key={idx} className="bg-indigo-900/60 border border-indigo-800 text-indigo-100 px-2.5 py-1 rounded-md">{tag}</span>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 text-white p-6 md:p-8 rounded-2xl shadow-sm">
            <h3 className="text-xl font-bold mb-4 text-slate-200">Global / Overseas Tracks</h3>
            <p className="text-xs text-slate-400 mb-4">Applicable across certified global institutional listings:</p>
            <div className="flex flex-wrap gap-2 text-xs">
              {["International Graduation", "Global Post-Graduation", "CPA - USA Tracks", "CIMA - London Programs", "Certified Foreign University Branches", "Job-Assured Global Certifications"].map((tag, idx) => (
                <span key={idx} className="bg-slate-800 border border-slate-700 text-slate-200 px-2.5 py-1 rounded-md">{tag}</span>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Onboarding Workflow */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 text-center">Standard Application Lifecycle</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 text-center">
            {[
              { step: "1", name: "Comparison", text: "Contrast configurations and log preliminary forms." },
              { step: "2", name: "Verification", text: "Lenders cross-check admission letters and historical details." },
              { step: "3", name: "Evaluation", text: "Brief dialogue explaining potential prospects and course value." },
              { step: "4", name: "Execution", text: "Issuance and formal signing of the baseline Promissory Note." },
              { step: "5", name: "Disbursal", text: "Direct draft release delivered straightforwardly to the institution." }
            ].map((node) => (
              <div key={node.step} className="bg-white p-4 rounded-xl border border-slate-200 flex flex-col items-center">
                <span className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xs mb-3 shadow-xs">
                  {node.step}
                </span>
                <h4 className="font-semibold text-slate-950 text-sm mb-1">{node.name}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{node.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 7. Comprehensive Bank Rate Comparison Table */}
        <section className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 bg-slate-50">
            <h2 className="text-xl font-bold text-slate-900">Leading Institutional Lending Portfolios</h2>
            <p className="text-xs text-slate-500 mt-1">Indicative historical interest rate baselines across public and private providers.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100/70 text-slate-700 text-xs font-semibold uppercase tracking-wider border-b border-slate-200">
                  <th className="p-4">Lender</th>
                  <th className="p-4">Up to ₹4L</th>
                  <th className="p-4">₹4L – ₹7.5L</th>
                  <th className="p-4">Above ₹7.5L</th>
                  <th className="p-4">Domestic Limit</th>
                  <th className="p-4">International Limit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs text-slate-600">
                <tr>
                  <td className="p-4 font-bold text-slate-900">State Bank of India (SBI)</td>
                  <td className="p-4">13.35% p.a.</td>
                  <td className="p-4">13.60% p.a.</td>
                  <td className="p-4 text-emerald-600 font-medium">11.60% p.a.</td>
                  <td className="p-4">₹10 Lakhs</td>
                  <td className="p-4 font-medium text-slate-900">₹30 Lakhs</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-900">HDFC Bank</td>
                  <td className="p-4">12.00% p.a.</td>
                  <td className="p-4">13.00% p.a.</td>
                  <td className="p-4">12.50% p.a.</td>
                  <td className="p-4">₹10 Lakhs</td>
                  <td className="p-4 text-slate-400">Institutional Review</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-900">Axis Bank</td>
                  <td className="p-4">16.95% p.a.</td>
                  <td className="p-4">17.95% p.a.</td>
                  <td className="p-4">15.95% p.a.</td>
                  <td className="p-4">₹10 Lakhs</td>
                  <td className="p-4">₹20 Lakhs</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-900">Punjab National Bank (PNB)</td>
                  <td className="p-4 text-slate-400" colSpan="3">Calculated dynamically based on institutional scaling and academic credentials</td>
                  <td className="p-4">₹10 Lakhs</td>
                  <td className="p-4 text-slate-400">Case-by-case Basis</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-900">Avanse Financial Services</td>
                  <td className="p-4 text-slate-400" colSpan="3">Custom tailored structures matching targeted career metrics</td>
                  <td className="p-4 text-slate-400">Variable</td>
                  <td className="p-4 font-medium text-slate-900">Need-Based Maximum</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-amber-50 p-4 border-t border-amber-200 text-amber-950 text-xs flex gap-2">
            ⚠️ <span><strong>Note on Rates:</strong> Most providers execute floating regimes normally shifting between 12.00% to 16.00% based on basic benchmarks. Check active calculators directly at lender panels (e.g., PaisaBazaar interactive tools) before finalized initialization.</span>
          </div>
        </section>

        {/* 8. Required Documentation & Eligibility Summary */}
        <section className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              📋 Eligibility Parameters
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-600">
              <li className="flex items-start gap-2">🔹 <span>Valid Indian citizenship or a verifiable Indian Passport for NRI status holders.</span></li>
              <li className="flex items-start gap-2">🔹 <span>Age limits typically aligned to standard bank ranges (e.g., 16–35 years).</span></li>
              <li className="flex items-start gap-2">🔹 <span>Confirmed offer of admission from an officially recognized educational institution.</span></li>
              <li className="flex items-start gap-2">🔹 <span>A co-applicant component (parent, sibling, spouse) possessing steady income generation.</span></li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              📂 Document Checklist
            </h3>
            <div className="grid grid-cols-2 gap-4 text-xs text-slate-600">
              <div>
                <h5 className="font-bold text-slate-800 mb-1">Academic & Personal</h5>
                <p>• Final admission letter & cost structure</p>
                <p>• Academic transcripts (10th onwards)</p>
                <p>• Standard KYC proofs</p>
                <p>• Age verification logs</p>
              </div>
              <div>
                <h5 className="font-bold text-slate-800 mb-1">Income & Co-Signor</h5>
                <p>• Form 16 / Recent Salary Slips</p>
                <p>• 6-Month transactional statements</p>
                <p>• Certified Income Tax Returns (ITR)</p>
                <p>• CA-verified P&L statements (Self-Employed)</p>
              </div>
            </div>
          </div>
        </section>

        {/* 9. Interactive FAQ Section (Accordion) */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-2">
            {[
              { q: "Who matches standard baseline loan eligibility?", a: "Any citizen holding valid academic tracking logs and explicit, verified letters of admission from an approved higher learning facility within India or overseas." },
              { q: "How are loan finances typically disbursed?", a: "Funds are released directly via official draft instrumentation payable strictly to the institutional clearing account matching your documented fee schedule." },
              { q: "What is the typical operational resolution timeline?", a: "Communication of definitive approval or formal rejection is usually issued within 15 working days following successful form completion." },
              { q: "Is there an explicit penalty for early prepayment?", a: "Public nationalized banks normally waive prepayment fees completely. Private or external financial providers might levy minor processing fees ranging from 0.25% to 2.00% of the active balance." },
              { q: "What adjustments are made if job placement stalls post-graduation?", a: "Under standard parameters, maximum structural repayment parameters can stretch up to 10 years for loans below ₹7.5 Lakhs and extend to 15 years for high-quantum configurations." }
            ].map((faq, index) => (
              <div key={index} className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-xs">
                <button
                  className="w-full text-left p-4 font-semibold text-slate-900 text-sm flex justify-between items-center bg-slate-50/50 hover:bg-slate-50 transition"
                  onClick={() => toggleFaq(index)}
                >
                  <span>{faq.q}</span>
                  <span className="text-slate-400 font-mono text-base">{openFaq === index ? "−" : "+"}</span>
                </button>
                {openFaq === index && (
                  <div className="p-4 text-xs text-slate-600 border-t border-slate-100 bg-white leading-relaxed animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* Footer Disclaimer */}
      <footer className="bg-slate-900 text-slate-400 text-xs py-8 px-6 mt-16 border-t border-slate-800 text-center space-y-2">
        <p>© 2026 Education Loan Hub. All rights reserved.</p>
        <p className="max-w-2xl mx-auto text-slate-500">
          Disclaimer: Interest rates, regulatory limits, and institutional parameters represent verified historical data configurations. Always cross-verify configurations against active banking matrices prior to final verification.
        </p>
      </footer>
    </div>
  );
};

export default EducationLoanPage;