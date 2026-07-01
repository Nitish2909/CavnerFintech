import React, { useState } from 'react';


const ALL_BANKS_DATA = [
  {
    id: 1,
    name: 'Jana Small Finance Bank',
    initial: 'J',
    roi: '10.5% – 13.5%',
    roiType: '(Reducing Per Annum)',
    processingFee: '1% – 1.5%',
    loanAmount: '5.00 Lacs – 3.00 cr',
    cibilScore: '650'
  },
  {
    id: 2,
    name: 'HDFC Bank',
    initial: 'H',
    roi: '8.7% – 11.2%',
    roiType: '(Reducing Per Annum)',
    processingFee: '0.5% – 1.2%',
    loanAmount: '10.00 Lacs – 5.00 cr',
    cibilScore: '700'
  },
  {
    id: 3,
    name: 'State Bank of India',
    initial: 'S',
    roi: '8.4% – 10.8%',
    roiType: '(Reducing Per Annum)',
    processingFee: '0.3% – 1.0%',
    loanAmount: '5.00 Lacs – 10.00 cr',
    cibilScore: '680'
  },
  {
    id: 4,
    name: 'ICICI Bank',
    initial: 'I',
    roi: '8.9% – 12.0%',
    roiType: '(Reducing Per Annum)',
    processingFee: '1% – 2.0%',
    loanAmount: '8.00 Lacs – 7.00 cr',
    cibilScore: '720'
  },
  {
    id: 5,
    name: 'Axis Bank',
    initial: 'A',
    roi: '9.0% – 12.5%',
    roiType: '(Reducing Per Annum)',
    processingFee: '0.75% – 1.5%',
    loanAmount: '7.50 Lacs – 5.00 cr',
    cibilScore: '700'
  },
  {
    id: 6,
    name: 'Kotak Mahindra Bank',
    initial: 'K',
    roi: '8.8% – 11.5%',
    roiType: '(Reducing Per Annum)',
    processingFee: '0.5% – 1.0%',
    loanAmount: '5.00 Lacs – 4.00 cr',
    cibilScore: '690'
  },
  {
    id: 7,
    name: 'AU Small Finance Bank',
    initial: 'A',
    roi: '10.2% – 14.0%',
    roiType: '(Reducing Per Annum)',
    processingFee: '1% – 2.0%',
    loanAmount: '3.00 Lacs – 2.00 cr',
    cibilScore: '650'
  }
];

export default function BankLoanDashboard() {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter banks safely based on search input
  const filteredBanks = ALL_BANKS_DATA.filter((bank) =>
    bank.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10 font-sans">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* */}
        <div className="flex justify-end mb-4">
          <div className="w-full sm:w-64">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white border border-gray-300 rounded px-4 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-cyan-700 transition"
            />
          </div>
        </div>

        {/* Dynamic Card List Engine */}
        <div className="space-y-4">
          {filteredBanks.length > 0 ? (
            filteredBanks.map((bank) => (
              <div 
                key={bank.id} 
                className="w-full bg-white border border-gray-200 rounded-sm shadow-sm p-4 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:shadow-md transition duration-200"
              >
                
                {/* Bank Branding Block */}
                <div className="flex items-center gap-4 min-w-[200px]">
                  <div className="w-12 h-12 bg-sky-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-amber-500 font-bold text-xl">{bank.initial}</span>
                  </div>
                  <div className="text-gray-800 font-bold text-sm leading-tight whitespace-pre-line">
                    {bank.name}
                  </div>
                </div>

                {/* Return on Investment Data */}
                <div className="flex flex-col text-left md:text-center flex-1">
                  <span className="text-gray-700 font-bold text-xs uppercase tracking-wider mb-1">
                    R.O.I
                  </span>
                  <span className="text-gray-800 text-sm font-medium">
                    {bank.roi}
                  </span>
                  <span className="text-gray-500 text-xs">
                    {bank.roiType}
                  </span>
                </div>

                {/* Processing Fees Data */}
                <div className="flex flex-col text-left md:text-center flex-1">
                  <span className="text-gray-700 font-bold text-xs uppercase tracking-wider mb-1">
                    Processing Fees
                  </span>
                  <span className="text-gray-800 text-sm font-medium">
                    {bank.processingFee}
                  </span>
                </div>

                {/* Loan Amount Range Data */}
                <div className="flex flex-col text-left md:text-center flex-1">
                  <span className="text-gray-700 font-bold text-xs uppercase tracking-wider mb-1">
                    Loan Amount
                  </span>
                  <span className="text-gray-800 text-sm font-medium">
                    {bank.loanAmount}
                  </span>
                </div>

                {/* CIBIL Matrix Requirement */}
                <div className="flex flex-col text-left md:text-center flex-1">
                  <span className="text-gray-700 font-bold text-xs uppercase tracking-wider mb-1">
                    Cibil Score
                  </span>
                  <span className="text-gray-800 text-sm font-medium">
                    {bank.cibilScore}
                  </span>
                </div>

                {/* Direct Action Trigger */}
                <div className="flex items-center justify-start md:justify-end min-w-[120px]">
                  <button className="bg-[#005f60] hover:bg-[#004d4e] text-white text-sm font-semibold py-2 px-6 rounded-sm transition-colors duration-200 shadow-sm w-full md:w-auto">
                    Apply Now
                  </button>
                </div>

              </div>
            ))
          ) : (
            <div className="text-center py-12 text-gray-500 bg-white border border-gray-200 rounded">
              No matching banks found.
            </div>
          )}
        </div>

      </div>
    </div>
  );
}