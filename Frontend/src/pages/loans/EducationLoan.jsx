import React, { useState, useMemo } from "react";

const EducationLoanPage = () => {
  // Application Form State
  const [formData, setFormData] = useState({
    studentName: "",
    mobileNumber: "",
    targetCountry: "India",
    loanAmount: "",
    coSignerIncome: "",
    agree: true,
  });

  // UI Interactive States
  const [openFaq, setOpenFaq] = useState(null);
  const [selectedLender, setSelectedLender] = useState(null);
  const [isSubmittingForm, setIsSubmittingForm] = useState(false);
  const [showFormSuccess, setShowFormSuccess] = useState(false);

  const currentUpdateDate = "June 30, 2026";

  // Institutional Portfolio Data Array
  const lendersData = useMemo(() => [
    {
      id: "sbi",
      name: "State Bank of India (SBI)",
      logoInitials: "SBI",
      bgGradient: "from-blue-600 to-cyan-500",
      upTo4L: "13.35% p.a.",
      fourTo75L: "13.60% p.a.",
      above75L: "11.60% p.a.",
      domesticLimit: "按 Need / ₹10 Lakhs",
      intlLimit: "₹30 Lakhs",
      perks: "0.50% concession for female students. Zero processing fees up to ₹7.5L."
    },
    {
      id: "hdfc",
      name: "HDFC Bank",
      logoInitials: "HDFC",
      bgGradient: "from-blue-900 to-indigo-700",
      upTo4L: "12.00% p.a.",
      fourTo75L: "13.00% p.a.",
      above75L: "12.50% p.a.",
      domesticLimit: "₹10 Lakhs",
      intlLimit: "Institutional Review",
      perks: "Quick digital sanction options for pre-approved corporate tracks."
    },
    {
      id: "axis",
      name: "Axis Bank",
      logoInitials: "AXIS",
      bgGradient: "from-rose-900 to-rose-600",
      upTo4L: "16.95% p.a.",
      fourTo75L: "17.95% p.a.",
      above75L: "15.95% p.a.",
      domesticLimit: "₹10 Lakhs",
      intlLimit: "₹20 Lakhs",
      perks: "Comprehensive coverage including living overheads and premium laptop builds."
    },
    {
      id: "pnb",
      name: "Punjab National Bank (PNB)",
      logoInitials: "PNB",
      bgGradient: "from-amber-600 to-red-600",
      upTo4L: "Dynamic *",
      fourTo75L: "Dynamic *",
      above75L: "Dynamic *",
      domesticLimit: "₹10 Lakhs",
      intlLimit: "Case-by-case Basis",
      perks: "Favorable floating margins tracked to public treasury benchmarks."
    },
    {
      id: "avanse",
      name: "Avanse Financial Services",
      logoInitials: "AVNS",
      bgGradient: "from-purple-600 to-pink-500",
      upTo4L: "Variable Structure",
      fourTo75L: "Variable Structure",
      above75L: "Variable Structure",
      domesticLimit: "Custom Tier",
      intlLimit: "Need-Based Maximum",
      perks: "Specialized NBFC providing 100% financing options for niche courses."
    }
  ], []);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmittingForm(true);
    
    // Simulate API pipeline transmission
    setTimeout(() => {
      setIsSubmittingForm(false);
      setShowFormSuccess(true);
      setFormData({
        studentName: "",
        mobileNumber: "",
        targetCountry: "India",
        loanAmount: "",
        coSignerIncome: "",
        agree: true,
      });
      setTimeout(() => setShowFormSuccess(false), 6000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased">
      
      {/* 1. Hero / Header Section */}
      <header className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white py-12 px-6 shadow-md">
        <div className="max-w-6xl mx-auto">
         
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3">
            Education Loan Marketplace
          </h1>
          <p className="text-indigo-100 max-w-2xl text-base md:text-lg opacity-90">
            Fueling academic dreams in India and abroad with flexible financing options, reliable insights, and streamlined application pipelines.
          </p>
          <div className="mt-6 flex items-center gap-2 text-xs text-indigo-200 bg-indigo-950/40 w-fit px-3 py-1.5 rounded-full border border-indigo-700/30">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Last Updated: {currentUpdateDate}
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 md:px-6 py-10 space-y-12">
        
        {/* 2. Split Intro & Interactive Application Form Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Core Concept Left Panel */}
          <div className="lg:col-span-7 space-y-6">
            <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100 space-y-4 h-full flex flex-col justify-center">
              <span className="text-xs uppercase font-bold tracking-widest text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded w-fit">
                Academic Advancement
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                Investing in a Bright and Successful Future
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                Nothing can replace quality education when it comes to building a successful trajectory for your child. However, due to the rising cost of higher education globally, self-financing is becoming increasingly difficult. 
              </p>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                Unlike ordinary credit options, <strong className="text-slate-900 font-semibold">merit-centric student loans</strong> ensure that no financial obstacle blocks academic progress. Today, leading Indian banks and NBFCs provide expansive options covering graduate, postgraduate, and professional doctoral tracks.
              </p>
              
              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-5 rounded-xl border border-indigo-100 mt-2">
                <h4 className="text-sm font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                  🛡️ RBI Regulated Priority Segment
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The Reserve Bank of India classifies education loans under the <strong className="text-slate-800">Priority Sector Lending</strong> framework, ensuring standardized institutional accessibility, capped margins, and structural banking protections.
                </p>
              </div>
            </section>
          </div>

          {/* Eligibility Criteria Display Card Right Panel */}
<div className="lg:col-span-5">
  <div id="eligibility-criteria-container" className="bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden sticky top-6">
    <div className="bg-gradient-to-r from-blue-800 to-indigo-800 text-white px-6 py-4">
      <h3 className="text-lg font-bold">Eligibility Criteria</h3>
      <p className="text-xs text-indigo-200">Minimum baselines required for pre-approval configurations</p>
    </div>

    <div className="p-6 space-y-5">
      {/* Criterion 1: Academic Profile */}
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mt-0.5">
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div>
          <h4 className="text-xs font-bold text-slate-600 uppercase tracking-wide">Student Profile</h4>
          <p className="text-sm text-slate-700 font-medium mt-0.5">Academic Status</p>
          <p className="text-xs text-slate-500 mt-0.5">Must possess verifiable academic histories matching records on official transcripts.</p>
        </div>
      </div>

      {/* Criterion 2: Target Destination */}
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mt-0.5">
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div>
          <h4 className="text-xs font-bold text-slate-600 uppercase tracking-wide">Target Track</h4>
          <p className="text-sm text-slate-700 font-medium mt-0.5">Supported Global Destinations</p>
          <div className="flex flex-wrap gap-1.5 mt-2">
            {["India", "USA", "UK", "Canada", "Germany / EU"].map((country) => (
              <span key={country} className="text-[10px] font-bold bg-slate-50 text-slate-600 border border-slate-200 px-2 py-0.5 rounded-md">
                {country}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Criterion 3: Loan Quantum */}
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mt-0.5">
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div>
          <h4 className="text-xs font-bold text-slate-600 uppercase tracking-wide">Funding Scales</h4>
          <p className="text-sm text-slate-700 font-medium mt-0.5">Estimated Loan Quantum</p>
          <p className="text-xs text-slate-500 mt-0.5">Flexible architectural limits supporting portfolios starting from ₹15 Lakhs and above.</p>
        </div>
      </div>

      {/* Criterion 4: Co-Signer Income */}
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mt-0.5">
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div>
          <h4 className="text-xs font-bold text-slate-600 uppercase tracking-wide">Financial Co-Signer</h4>
          <p className="text-sm text-slate-700 font-medium mt-0.5">Minimum Income Framework</p>
          <p className="text-xs text-slate-500 mt-0.5">Requires a primary co-applicant with a steady verifiable cash flow (e.g., benchmark ₹75,000/mo).</p>
        </div>
      </div>

      <hr className="border-slate-100 pt-1" />

      {/* Policy Disclaimer */}
      <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
        <p className="text-[11px] text-slate-500 leading-normal">
          💡 <strong>Credit Framework Note:</strong> Data points are regularly updated via integrated clearing agents to match evolving institutional parameters.
        </p>
      </div>

      
    </div>
  </div>
</div>
        </div>

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
                <li className="flex gap-2">⚡ <span><strong className="text-slate-800">Co-Signer Mandate:</strong> Parental or guardian execution as a co-signor is standard.</span></li>
                <li className="flex gap-2">⚡ <span><strong className="text-slate-800">Concessions:</strong> Female students typically receive an explicit 0.50% interest discount.</span></li>
                <li className="flex gap-2">⚡ <span><strong className="text-slate-800">Moratorium Grace:</strong> Repayments deferred throughout the course plus up to 1 year or job placement.</span></li>
                <li className="flex gap-2">⚡ <span><strong className="text-slate-800">Tax Optimization:</strong> Fully eligible for dedicated interest deductions via Section 80E of the IT Act.</span></li>
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

        {/* 7. Comprehensive Bank Rate Comparison Table with Hook Links */}
        <section className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 bg-slate-50 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-slate-900">Leading Institutional Lending Portfolios</h2>
              <p className="text-xs text-slate-500 mt-1">Indicative historical interest rate baselines across public and private providers.</p>
            </div>
            <a 
              href="#apply-form-container"
              className="text-xs font-bold text-indigo-600 bg-indigo-50 hover:bg-indigo-100 px-3 py-2 rounded-xl transition w-fit"
            >
              🚀 General Pre-Approval Form
            </a>
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
                  <th className="p-4 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs text-slate-600">
                {lendersData.map((lender) => (
                  <tr key={lender.id} className="hover:bg-slate-50/50 transition">
                    <td className="p-4 font-bold text-slate-900">{lender.name}</td>
                    <td className="p-4">{lender.upTo4L}</td>
                    <td className="p-4">{lender.fourTo75L}</td>
                    <td className="p-4 text-emerald-600 font-medium">{lender.above75L}</td>
                    <td className="p-4">{lender.domesticLimit}</td>
                    <td className="p-4 font-medium text-slate-900">{lender.intlLimit}</td>
                    <td className="p-4 text-center">
                      <button
                        onClick={() => setSelectedLender(lender)}
                        className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-3 py-1.5 rounded-lg text-xs transition"
                      >
                        Apply Now
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-amber-50 p-4 border-t border-amber-200 text-amber-950 text-xs flex gap-2">
            ⚠️ <span><strong>Note on Rates:</strong> Most providers execute floating regimes normally shifting between 12.00% to 16.00% based on basic benchmarks. Check active configurations directly at lender panels before finalized initialization.</span>
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
                  type="button"
                >
                  <span>{faq.q}</span>
                  <span className="text-slate-400 font-mono text-base">{openFaq === index ? "−" : "+"}</span>
                </button>
                {openFaq === index && (
                  <div className="p-4 text-xs text-slate-600 border-t border-slate-100 bg-white leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* 10. Dedicated Institutional Action Modal Link */}
      {selectedLender && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-xl border border-slate-200 relative animate-in fade-in zoom-in-95 duration-150">
            <button
              onClick={() => setSelectedLender(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 text-lg font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-100 transition"
            >
              ✕
            </button>

            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${selectedLender.bgGradient} flex items-center justify-center text-white font-black text-xs tracking-tight shadow-inner`}>
                  {selectedLender.logoInitials}
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">{selectedLender.name}</h3>
                  <span className="text-[10px] text-emerald-600 font-bold tracking-wider uppercase bg-emerald-50 px-2 py-0.5 rounded">
                    Direct Allocation Hook
                  </span>
                </div>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl text-xs space-y-2 text-slate-600 border border-slate-100">
                <div className="flex justify-between border-b border-slate-200/60 pb-1.5">
                  <span className="text-slate-400">Rate Tier (Above ₹7.5L):</span>
                  <span className="font-bold text-slate-900">{selectedLender.above75L}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200/60 pb-1.5">
                  <span className="text-slate-400">Global Limit Cap:</span>
                  <span className="font-bold text-slate-900">{selectedLender.intlLimit}</span>
                </div>
                <div className="flex flex-col pt-1">
                  <span className="text-slate-400 font-medium mb-0.5">Special Provision:</span>
                  <span className="text-slate-800 leading-normal bg-white p-2 rounded border border-slate-200/50 mt-1 italic text-[11px]">
                    "{selectedLender.perks}"
                  </span>
                </div>
              </div>

              <p className="text-[10px] text-slate-400 text-center leading-normal">
                Clicking confirm routes your unified educational parameters directly into this provider's priority desk.
              </p>

              <div className="flex gap-2.5 pt-1">
                <button
                  onClick={() => setSelectedLender(null)}
                  className="flex-1 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl transition text-xs"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    alert(`Underwriting query initialized successfully for ${selectedLender.name}! Allocation officers will reach out.`);
                    setSelectedLender(null);
                  }}
                  className="flex-1 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-md transition text-xs"
                >
                  Confirm Assignment
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

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