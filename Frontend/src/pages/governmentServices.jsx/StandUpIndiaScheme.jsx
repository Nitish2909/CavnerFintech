import React from 'react'

const StandUpIndiaScheme = () => {
  return (
    <div className='max-w-6xl mx-auto p-4'>
      {/* Hero Header Section */}
      <div className='flex flex-col items-center bg-slate-200 p-8 m-4 rounded-xl shadow-sm text-center'>
        <h1 className='text-3xl font-bold mb-4 text-slate-800'>Stand-Up India Scheme</h1>
        <p className='text-lg font-medium text-slate-600 max-w-4xl leading-relaxed'>
          Launched on April 5, 2016, this initiative promotes grassroots entrepreneurship by facilitating bank loans between **₹10 lakh and ₹1 crore** to women, SC, and ST entrepreneurs. It exclusively supports **greenfield enterprises**—brand-new businesses—across manufacturing, services, trading, and agri-allied sectors.
        </p>
      </div>

      {/* Features and Benefits Section */}
      <div className='m-4 p-4'>
        <h2 className='text-2xl font-bold mb-6 text-slate-800 border-b-2 border-slate-200 pb-2'>
          Features And Benefits of Stand-Up India Scheme
        </h2>
        
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='bg-white p-6 rounded-lg border border-slate-200 shadow-sm'>
            <h3 className='font-bold text-lg text-indigo-600 mb-2'>Target Beneficiaries</h3>
            <p className='text-slate-600'>SC/ST and/or women entrepreneurs above 18 years of age. For non-individual enterprises, at least 51% shareholding must be held by them.</p>
          </div>

          <div className='bg-white p-6 rounded-lg border border-slate-200 shadow-sm'>
            <h3 className='font-bold text-lg text-indigo-600 mb-2'>Loan Amount & Coverage</h3>
            <p className='text-slate-600'>Composite loans between ₹10 lakh and ₹1 crore covering up to 75% of the total project cost.</p>
          </div>

          <div className='bg-white p-6 rounded-lg border border-slate-200 shadow-sm'>
            <h3 className='font-bold text-lg text-indigo-600 mb-2'>Repayment Tenure</h3>
            <p className='text-slate-600'>Flexible repayment period of up to 7 years with a maximum moratorium period of 18 months.</p>
          </div>

          <div className='bg-white p-6 rounded-lg border border-slate-200 shadow-sm'>
            <h3 className='font-bold text-lg text-indigo-600 mb-2'>Low Interest Rates</h3>
            <p className='text-slate-600'>The interest rate is kept at the lowest applicable rate of the bank for that category (MCLR + 3% + Tenor Premium).</p>
          </div>
        </div>
      </div>

      {/* Required Documents Section */}
      <div className='m-4 p-4'>
        <h2 className='text-2xl font-bold mb-6 text-slate-800 border-b-2 border-slate-200 pb-2'>
          Required Documents Checklist
        </h2>
        <div className='bg-white p-6 rounded-lg border border-slate-200 shadow-sm'>
          <p className='text-slate-600 mb-4 font-medium'>Applicants need to submit the following documents to the lending bank:</p>
          <ul className='grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 list-disc list-inside text-slate-600'>
            <li>Proof of Identity (Aadhaar Card, Passport, Voter ID, or PAN Card)</li>
            <li>Proof of Residence (Electricity bill, Telephone bill, or Property tax receipt)</li>
            <li>Business Address Proof</li>
            <li>Caste Certificate (For SC/ST category applicants)</li>
            <li>Project Report detailing the technical and economic viability of the enterprise</li>
            <li>Partnership Deed or MoA/AoA (For partnership firms or corporate entities)</li>
            <li>Asset & Liability Statement of the promoters and guarantors</li>
            <li>Certificate of Incorporation (If applicable)</li>
            <li>Lease Deed or Rent Agreement for the business premises</li>
            <li>Pollution Control Board Clearance Certificate (If applicable to the sector)</li>
          </ul>
        </div>
      </div>

      {/* How to Apply Section */}
      <div className='m-4 p-4'>
        <h2 className='text-2xl font-bold mb-6 text-slate-800 border-b-2 border-slate-200 pb-2'>
          How to Apply
        </h2>
        <p className='text-slate-600 mb-6'>
          The scheme operates through three distinct application channels. Entrepreneurs can choose whichever route is most convenient for them:
        </p>
        
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <div className='bg-slate-50 p-6 rounded-lg border border-slate-200 flex flex-col justify-between'>
            <div>
              <div className='w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4'>1</div>
              <h3 className='font-bold text-lg text-slate-800 mb-2'>Online Portal</h3>
              <p className='text-slate-600 text-sm leading-relaxed'>
                Visit the official Stand-Up India portal (standupmitra.in). Register, fill out the application form, and upload digital copies of your documents to track your application online.
              </p>
            </div>
          </div>

          <div className='bg-slate-50 p-6 rounded-lg border border-slate-200 flex flex-col justify-between'>
            <div>
              <div className='w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4'>2</div>
              <h3 className='font-bold text-lg text-slate-800 mb-2'>Directly at Bank Branch</h3>
              <p className='text-slate-600 text-sm leading-relaxed'>
                Walk into any Scheduled Commercial Bank branch and meet with the branch manager or loan officer. Request an application form specifically for the Stand-Up India Scheme.
              </p>
            </div>
          </div>

          <div className='bg-slate-50 p-6 rounded-lg border border-slate-200 flex flex-col justify-between'>
            <div>
              <div className='w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4'>3</div>
              <h3 className='font-bold text-lg text-slate-800 mb-2'>Through LDMs</h3>
              <p className='text-slate-600 text-sm leading-relaxed'>
                Connect via your Lead District Manager (LDM), NABARD, or SIDBI offices. They act as "Connect Centers" to assist handhold trainees and route applications directly to partner banks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StandUpIndiaScheme;