import React from 'react';

const PMEGP = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8 font-sans antialiased text-slate-900 selection:bg-blue-500 selection:text-white">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Hero / Header Section */}
        <header className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-900 via-indigo-950 to-slate-900 p-8 sm:p-12 text-center shadow-xl shadow-blue-900/10 transition-all duration-300">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent pointer-events-none" />
          <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-blue-200 backdrop-blur-sm mb-4">
            Ministry of MSME, Govt. of India
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white max-w-4xl mx-auto leading-tight">
            Prime Minister's Employment Generation Programme
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal">
            Empowering rural and urban entrepreneurs by bridging the financial gap through credit-linked capital subsidies.
          </p>
        </header>

        {/* Quick Overview Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm border-l-4 border-l-blue-600 hover:shadow-md transition-shadow duration-200">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Manufacturing Max Limit</h4>
            <p className="mt-2 text-3xl font-extrabold text-blue-900 tracking-tight">₹50 Lakhs</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm border-l-4 border-l-blue-600 hover:shadow-md transition-shadow duration-200">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Service/Business Limit</h4>
            <p className="mt-2 text-3xl font-extrabold text-blue-900 tracking-tight">₹20 Lakhs</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm border-l-4 border-l-emerald-600 hover:shadow-md transition-shadow duration-200">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Max Govt. Subsidy</h4>
            <p className="mt-2 text-3xl font-extrabold text-emerald-600 tracking-tight">Up to 35%</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm border-l-4 border-l-amber-500 hover:shadow-md transition-shadow duration-200">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Collateral-Free Cover</h4>
            <p className="mt-2 text-3xl font-extrabold text-amber-600 tracking-tight">Up to ₹20 Lakhs</p>
          </div>
        </div>

        {/* Main Core Content: Split Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Core Scheme Mechanics */}
          <section className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200/80 shadow-sm flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-bold tracking-tight text-blue-900 border-b border-slate-100 pb-4 mb-4">
                About the Scheme
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                PMEGP is a flagship credit-linked subsidy scheme administered by the <span className="font-semibold text-slate-800">Ministry of Micro, Small and Medium Enterprises (MoMSME)</span>. At the national level, it is implemented by the <span className="font-semibold text-slate-800">Khadi and Village Industries Commission (KVIC)</span>, and at the state level through State KVIBs and District Industries Centres (DICs).
              </p>
            </div>
            <div className="bg-slate-50 p-5 rounded-lg border-l-4 border-l-blue-500">
              <h4 className="text-sm font-bold text-slate-800 mb-2">Key Operational Framework:</h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600 list-disc pl-4">
                <li>Financial institutions back 90% to 95% of the capital requirement as a bank loan.</li>
                <li>The government acts as a safety cushion, routing your <span className="font-semibold text-slate-800">Margin Money Subsidy</span> into a 3-year lock-in fixed deposit that pays off your principal upon physical validation.</li>
              </ul>
            </div>
          </section>

          {/* Subsidy Allocation Matrix */}
          <section className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200/80 shadow-sm">
            <h2 className="text-xl font-bold tracking-tight text-blue-900 border-b border-slate-100 pb-4 mb-4">
              Funding & Subsidy Structure
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="p-3 font-bold text-slate-700">Beneficiary Category</th>
                    <th className="p-3 font-bold text-slate-700">Own Share</th>
                    <th className="p-3 font-bold text-slate-700">Urban Subsidy</th>
                    <th className="p-3 font-bold text-slate-700">Rural Subsidy</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="p-3 font-semibold text-slate-800">General Category</td>
                    <td className="p-3 text-slate-600">10%</td>
                    <td className="p-3 text-blue-600 font-bold">15%</td>
                    <td className="p-3 text-blue-600 font-bold">25%</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-slate-800">Special Category*</td>
                    <td className="p-3 text-slate-600">5%</td>
                    <td className="p-3 text-emerald-600 font-bold">25%</td>
                    <td className="p-3 text-emerald-600 font-bold">35%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-xs text-slate-400 italic leading-normal">
              * Special categories include: SC, ST, OBC, Minorities, Women, Ex-servicemen, Transgenders, Differently-abled, and applicants from North-East Region (NER), Hill, or Border areas.
            </p>
          </section>
        </div>

        {/* Dynamic Expansion Area: Application Strategy & Documents */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Step-by-Step Interactive Workflow */}
          <section className="bg-slate-50 p-6 sm:p-8 rounded-xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-bold tracking-tight text-blue-900 border-b border-slate-200 pb-4 mb-6">
              Steps on How & Where to Apply
            </h2>
            
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs mb-6">
              <span className="inline-flex items-center rounded-md bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-600/10 mb-2">
                Official Digital Application Links
              </span>
              <div className="mt-1">
                <a href="https://www.kviconline.gov.in/pmegpeportal/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors group">
                  KVIC PMEGP e-Portal Website 
                  <span className="ml-1 transform transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>

            <ol className="relative border-l border-slate-200 ml-2 space-y-6 text-sm">
              <li className="relative pl-6">
                <span className="absolute left-0 top-1.5 -translate-x-1/2 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 ring-4 ring-slate-50" />
                <h3 className="font-bold text-slate-900">Register Profile Online</h3>
                <p className="mt-1 text-slate-600 leading-relaxed">
                  Access the official KVIC e-portal. Click on "Application for New Unit" and pick either the <span className="font-semibold text-slate-800">Individual</span> or <span className="font-semibold text-slate-800">Non-Individual</span> portal mapping. Fill in your demographic details, planned industrial focus, and targeted bank.
                </p>
              </li>
              <li className="relative pl-6">
                <span className="absolute left-0 top-1.5 -translate-x-1/2 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 ring-4 ring-slate-50" />
                <h3 className="font-bold text-slate-900">Upload Documentation Structure</h3>
                <p className="mt-1 text-slate-600 leading-relaxed">
                  Scan and submit all foundational parameters (DPR, identification papers, category exceptions) right inside the web platform.
                </p>
              </li>
              <li className="relative pl-6">
                <span className="absolute left-0 top-1.5 -translate-x-1/2 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 ring-4 ring-slate-50" />
                <h3 className="font-bold text-slate-900">Nodal Verification Cycle</h3>
                <p className="mt-1 text-slate-600 leading-relaxed">
                  Save applicant data to securely lock in your record. The system will forward your bundle directly to the selected regional processing agency (KVIC, KVIB, or DIC) for authentication.
                </p>
              </li>
              <li className="relative pl-6">
                <span className="absolute left-0 top-1.5 -translate-x-1/2 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 ring-4 ring-slate-50" />
                <h3 className="font-bold text-slate-900">Bank Feasibility Audit & Sanction</h3>
                <p className="mt-1 text-slate-600 leading-relaxed">
                  Once verified by the nodal agency, the packet is pushed to the bank. The bank audits your financial viability parameters and issues a formal credit sanction.
                </p>
              </li>
              <li className="relative pl-6">
                <span className="absolute left-0 top-1.5 -translate-x-1/2 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-600 ring-4 ring-slate-50" />
                <h3 className="font-bold text-slate-900 text-emerald-700">Mandatory EDP Training</h3>
                <p className="mt-1 text-slate-600 leading-relaxed">
                  Complete your required <span className="font-semibold text-slate-800">Entrepreneurship Development Programme (EDP)</span> training online or offline to trigger the credit release and unlock your Margin Money subsidy.
                </p>
              </li>
            </ol>
          </section>

          {/* Rigorous Verified Documents Matrix */}
          <section className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200/80 shadow-sm flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-bold tracking-tight text-blue-900 border-b border-slate-100 pb-4 mb-4">
                Mandatory Documents Required
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mb-6"> Ensure all digital scans are legible before beginning the web registration:</p>
              
              <div className="space-y-5">
                <div className="pb-4 border-b border-slate-100">
                  <h4 className="text-sm font-bold text-blue-900 uppercase tracking-wide">1. Identity & Structural Proof</h4>
                  <ul className="mt-2 space-y-1 text-sm text-slate-600 list-disc pl-4">
                    <li><span className="font-medium text-slate-800">Identity Evidence:</span> Valid government identification papers required for demographic validation.</li>
                    <li><span className="font-medium text-slate-800">PAN Card:</span> Required by lending banks for commercial credit and financial tracking.</li>
                    <li><span className="font-medium text-slate-800">Rural Area Certificate:</span> Formally signed by local revenue officers if requesting enhanced rural subsidy brackets.</li>
                  </ul>
                </div>

                <div className="pb-4 border-b border-slate-100">
                  <h4 className="text-sm font-bold text-blue-900 uppercase tracking-wide">2. Business Feasibility Papers</h4>
                  <ul className="mt-2 space-y-1 text-sm text-slate-600 list-disc pl-4">
                    <li><span className="font-medium text-slate-800">Detailed Project Report (DPR):</span> Breaking down your asset deployments, machinery allocations, income matrix, and projected headcount.</li>
                    <li><span className="font-medium text-slate-800">Official Machinery Quotations:</span> Valid commercial invoices for items intended for purchase.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-blue-900 uppercase tracking-wide">3. Eligibility & Special Exemptions</h4>
                  <ul className="mt-2 space-y-1 text-sm text-slate-600 list-disc pl-4">
                    <li><span className="font-medium text-slate-800">Educational Certificate:</span> Class VIII Marksheet/Pass certificate (mandatory for manufacturing units above ₹10 Lakhs or service projects above ₹5 Lakhs).</li>
                    <li><span className="font-medium text-slate-800">Caste/Special Category Certificate:</span> Official community certificate to unlock special category subsidy tiers.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Section: Expanded Eligibility Controls and Exclusions */}
        <section className="bg-slate-100 p-6 sm:p-8 rounded-xl border-l-6 border-l-blue-900 shadow-xs">
          <h3 className="text-xl font-extrabold tracking-tight text-blue-900 mb-6">
            Comprehensive Eligibility & System Exclusions
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-5 rounded-lg border border-slate-200">
              <h4 className="text-emerald-700 font-bold flex items-center gap-2 border-b border-slate-100 pb-2 mb-3">
                <span className="text-lg">✓</span> Permitted Entities
              </h4>
              <ul className="space-y-2 text-sm text-slate-600 list-none">
                <li><strong>Age Metric:</strong> Any Indian citizen aged 18 and above. No upper age limit.</li>
                <li><strong>Income Boundary:</strong> Absolutely no upper household or individual income ceiling.</li>
                <li><strong>Institutional Formations:</strong> Self-Help Groups (SHGs), Charitable Trusts, and Production Co-operative Societies are fully eligible to apply.</li>
              </ul>
            </div>

            <div className="bg-white p-5 rounded-lg border border-slate-200">
              <h4 className="text-rose-700 font-bold flex items-center gap-2 border-b border-slate-100 pb-2 mb-3">
                <span className="text-lg">✗</span> Strict Prohibitions & Negative List
              </h4>
              <ul className="space-y-2 text-sm text-slate-600 list-none">
                <li><strong>New Startups Only:</strong> Cannot be used to fund an expansion or revival of an already existing unit.</li>
                <li><strong>One Per Household:</strong> Limited strictly to one family member (defined as self and spouse).</li>
                <li><strong>Negative List Activities:</strong> Businesses linked to meat processing/slaughterhouses, tobacco/intoxicants manufacture (Beedi, pan, cigarettes), alcohol serving venues, and direct crop cultivation or plantation sectors are excluded.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Advanced Feature Highlight: 2nd Upgrade Loan Framework */}
        <section className="p-6 sm:p-8 rounded-xl bg-gradient-to-r from-slate-100 to-slate-200 border border-slate-300">
          <div className="max-w-4xl">
            <span className="inline-flex items-center rounded-md bg-blue-600 px-2 py-1 text-xs font-semibold text-white mb-3">
              Advanced Scheme Upgrade Option
            </span>
            <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight">
              Second PMEGP Loan for Corporate Upgradation
            </h3>
            <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
              Already completed your 3-year lock-in period successfully on your first PMEGP or MUDRA project? If your unit is currently run efficiently, profitable, and clean, you can apply for a <span className="font-semibold text-slate-800">Second Upgradation Loan</span> with active margin money subsidies.
            </p>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm bg-white/60 p-4 rounded-lg border border-slate-300/40">
              <div>
                <span className="font-bold text-blue-900">Manufacturing Upgrades:</span>
                <p className="text-slate-600 mt-0.5">Up to <span className="font-semibold text-slate-800">₹1 Crore</span> maximum project allocation (15% to 20% subsidy bracket).</p>
              </div>
              <div>
                <span className="font-bold text-blue-900">Service Sector Upgrades:</span>
                <p className="text-slate-600 mt-0.5">Up to <span className="font-semibold text-slate-800">₹25 Lakhs</span> maximum project allocation.</p>
              </div>
            </div>
          </div>
        </section>
        
      </div>
    </div>
  );
};

export default PMEGP;