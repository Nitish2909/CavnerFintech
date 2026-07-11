import React from 'react'

const StandUpIndiaScheme = () => {
  return (
    <div className='min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8 font-sans antialiased text-slate-900'>
      <div className='max-w-6xl mx-auto space-y-8'>
        
        {/* Premium Hero Header Section */}
        <header className='relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-8 sm:p-12 text-center shadow-xl shadow-indigo-950/10'>
          <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent pointer-events-none' />
          
          <span className='inline-flex items-center rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-200 backdrop-blur-sm mb-4 border border-white/5'>
            Department of Financial Services, GoI
          </span>
          
          <h1 className='text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white max-w-4xl mx-auto leading-tight'>
            Stand-Up India Scheme
          </h1>
          
          <p className='mt-4 text-base sm:text-lg text-slate-300 max-w-3xl mx-auto font-normal'>
            Launched on April 5, 2016, this initiative promotes grassroots entrepreneurship by facilitating bank loans between <span className="font-bold text-indigo-300">₹10 lakh and ₹1 crore</span> to women, SC, and ST entrepreneurs. It exclusively supports <span className="text-white font-semibold">greenfield enterprises</span>—brand-new businesses—across manufacturing, services, trading, and agri-allied sectors.
          </p>
        </header>

        {/* Features and Benefits Section */}
        <section className='space-y-6'>
          <div className='text-center max-w-2xl mx-auto'>
            <h2 className='text-2xl font-bold tracking-tight text-slate-950'>
              Features & Strategic Benefits
            </h2>
            <p className='text-slate-500 text-sm mt-1'>
              Empowering targeted segments through formal credit accessibility and structural financial security.
            </p>
          </div>
          
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='p-6 bg-white border border-slate-200 rounded-xl shadow-xs border-l-4 border-l-indigo-500 hover:shadow-md transition-all duration-200'>
              <h3 className='font-bold text-base text-slate-900 tracking-tight mb-2'>Target Beneficiaries</h3>
              <p className='text-xs sm:text-sm text-slate-500 leading-relaxed'>SC/ST and/or women entrepreneurs above 18 years of age. For non-individual enterprises, at least 51% shareholding must be held by them.</p>
            </div>

            <div className='p-6 bg-white border border-slate-200 rounded-xl shadow-xs border-l-4 border-l-emerald-500 hover:shadow-md transition-all duration-200'>
              <h3 className='font-bold text-base text-slate-900 tracking-tight mb-2'>Loan Amount & Coverage</h3>
              <p className='text-xs sm:text-sm text-slate-500 leading-relaxed'>Composite loans between ₹10 lakh and ₹1 crore covering up to 75% of the total project cost.</p>
            </div>

            <div className='p-6 bg-white border border-slate-200 rounded-xl shadow-xs border-l-4 border-l-purple-500 hover:shadow-md transition-all duration-200'>
              <h3 className='font-bold text-base text-slate-900 tracking-tight mb-2'>Repayment Tenure</h3>
              <p className='text-xs sm:text-sm text-slate-500 leading-relaxed'>Flexible repayment period of up to 7 years with a maximum moratorium period of 18 months.</p>
            </div>

            <div className='p-6 bg-white border border-slate-200 rounded-xl shadow-xs border-l-4 border-l-blue-500 hover:shadow-md transition-all duration-200'>
              <h3 className='font-bold text-base text-slate-900 tracking-tight mb-2'>Low Interest Rates</h3>
              <p className='text-xs sm:text-sm text-slate-500 leading-relaxed'>The interest rate is kept at the lowest applicable rate of the bank for that category (MCLR + 3% + Tenor Premium).</p>
            </div>
          </div>
        </section>

        {/* Required Documents Section */}
        <section className='bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-sm'>
          <h3 className='text-lg font-bold text-slate-950 mb-4 pb-3 border-b border-slate-100 flex items-center gap-2'>
            <span className="text-indigo-600">📂</span> Required Documents Checklist
          </h3>
          <p className='text-slate-500 text-xs sm:text-sm mb-4 font-normal'>Applicants need to submit the following records to the lending banking institution:</p>
          
          <ul className='grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 list-inside text-xs sm:text-sm text-slate-600'>
            <li className='flex items-start gap-2'><span className='text-indigo-600 mt-0.5'>•</span> Verified official identity maps and secondary proof cards</li>
            <li className='flex items-start gap-2'><span className='text-indigo-600 mt-0.5'>•</span> Proof of Residence (Electricity bill, Telephone bill, or Property tax receipt)</li>
            <li className='flex items-start gap-2'><span className='text-indigo-600 mt-0.5'>•</span> Business Address Verification Records</li>
            <li className='flex items-start gap-2'><span className='text-indigo-600 mt-0.5'>•</span> Caste Certificate (For SC/ST category applicants)</li>
            <li className='flex items-start gap-2'><span className='text-indigo-600 mt-0.5'>•</span> Project Report detailing the technical and economic viability of the enterprise</li>
            <li className='flex items-start gap-2'><span className='text-indigo-600 mt-0.5'>•</span> Partnership Deed or MoA/AoA (For partnership firms or corporate entities)</li>
            <li className='flex items-start gap-2'><span className='text-indigo-600 mt-0.5'>•</span> Asset & Liability Statement of the promoters and guarantors</li>
            <li className='flex items-start gap-2'><span className='text-indigo-600 mt-0.5'>•</span> Certificate of Incorporation (If applicable)</li>
            <li className='flex items-start gap-2'><span className='text-indigo-600 mt-0.5'>•</span> Lease Deed or Rent Agreement for the business premises</li>
            <li className='flex items-start gap-2'><span className='text-indigo-600 mt-0.5'>•</span> Pollution Control Board Clearance Certificate (If applicable to the sector)</li>
          </ul>
        </section>

        {/* How to Apply Section */}
        <section className='space-y-6'>
          <div className='max-w-2xl'>
            <h2 className='text-xl font-bold tracking-tight text-slate-950'>
              Application Methodology
            </h2>
            <p className='text-slate-500 text-xs sm:text-sm mt-1'>
              The scheme operates through three distinct application channels. Entrepreneurs can choose whichever route is most convenient for them:
            </p>
          </div>
          
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div className='bg-white p-6 rounded-xl border border-slate-200 flex flex-col justify-between shadow-xs'>
              <div>
                <div className='w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-xs mb-4 shadow-sm'>1</div>
                <h3 className='font-bold text-sm text-slate-900 mb-1.5'>Online Portal</h3>
                <p className='text-slate-500 text-xs leading-relaxed font-normal'>
                  Visit the official Stand-Up India portal (standupmitra.in). Register, fill out the application form, and upload digital copies of your documents to track your application online.
                </p>
              </div>
            </div>

            <div className='bg-white p-6 rounded-xl border border-slate-200 flex flex-col justify-between shadow-xs'>
              <div>
                <div className='w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-xs mb-4 shadow-sm'>2</div>
                <h3 className='font-bold text-sm text-slate-900 mb-1.5'>Direct at Bank Branch</h3>
                <p className='text-slate-500 text-xs leading-relaxed font-normal'>
                  Walk into any Scheduled Commercial Bank branch and meet with the branch manager or loan officer. Request an application form specifically for the Stand-Up India Scheme.
                </p>
              </div>
            </div>

            <div className='bg-white p-6 rounded-xl border border-slate-200 flex flex-col justify-between shadow-xs'>
              <div>
                <div className='w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-xs mb-4 shadow-sm'>3</div>
                <h3 className='font-bold text-sm text-slate-900 mb-1.5'>Through LDMs</h3>
                <p className='text-slate-500 text-xs leading-relaxed font-normal'>
                  Connect via your Lead District Manager (LDM), NABARD, or SIDBI offices. They act as "Connect Centers" to assist handhold trainees and route applications directly to partner banks.
                </p>
              </div>
            </div>
          </div>
        </section>
        
      </div>
    </div>
  )
}

export default StandUpIndiaScheme;