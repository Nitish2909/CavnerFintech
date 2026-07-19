import React from 'react';
import { Percent, Layers, Zap, Globe, GitCompare } from 'lucide-react';

export default function LoanDealsSection() {
  const tableData = [
    {
      feature: 'Lower Interest Rates',
      benefit: 'Reduces overall repayment burden',
      icon: <Percent className="w-5 h-5 text-teal-600" />,
    },
    {
      feature: 'Flexible EMI Options',
      benefit: 'Improves monthly budget management',
      icon: <Layers className="w-5 h-5 text-teal-600" />,
    },
    {
      feature: 'Quick Loan Approval',
      benefit: 'Helps during urgent financial needs',
      icon: <Zap className="w-5 h-5 text-teal-600" />,
    },
    {
      feature: 'Online Loan Process',
      benefit: 'Saves time and paperwork',
      icon: <Globe className="w-5 h-5 text-teal-600" />,
    },
    {
      feature: 'Multiple Loan Comparisons',
      benefit: 'Improves borrowing decisions',
      icon: <GitCompare className="w-5 h-5 text-teal-600" />,
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen p-8 flex items-center justify-center font-sans">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        
        {/* Left Card */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex flex-col h-full justify-between">
          <div>
            <div className="rounded-xl overflow-hidden mb-6">
              {/* Replace placeholder with your image source */}
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80" 
                alt="Loan Illustration" 
                className="w-full h-56 object-cover"
              />
            </div>
            
            <h2 className="text-[22px] font-bold text-[#004D54] leading-tight mb-4">
              Maximum Loan Amounts with Minimum Interest Rate
            </h2>
            
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Finding the right loan with affordable repayment terms is important for better financial management. 
              Cavner helps borrowers explore low-interest loan options and flexible repayment structures from 
              different lenders.
            </p>
            
            <p className="text-gray-600 text-sm leading-relaxed">
              Whether you need an instant personal loan, a small business loan, or want to{' '}
              <a href="#" className="text-blue-600 hover:underline">
                apply for home loan
              </a>{' '}
              services, comparing offers helps reduce repayment burden and improve affordability.
            </p>
          </div>
        </div>

        {/* Right Card */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 relative overflow-hidden h-full">
          {/* Top-right decorative background circle patch */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-50 rounded-full pointer-events-none opacity-70" />

          <h3 className="text-lg font-bold text-[#004D54] mb-4 relative z-10">
            Benefits of Choosing Better Loan Deals
          </h3>

          <div className="border border-gray-200 rounded-lg overflow-hidden relative z-10">
            {/* Table Header */}
            <div className="grid grid-cols-2 bg-[#004D54] text-white font-semibold text-xs py-3 px-4">
              <div>Loan Feature</div>
              <div>Borrower Benefit</div>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-gray-200">
              {tableData.map((row, idx) => (
                <div key={idx} className="grid grid-cols-2 items-center text-xs text-gray-700 min-h-[52px]">
                  {/* Left Column: Feature with icon */}
                  <div className="flex items-center gap-3 px-4 py-2 border-r border-gray-200 h-full font-bold text-[#004D54]">
                    <div className="p-1.5 bg-gray-50 border border-gray-200 rounded shadow-sm flex items-center justify-center">
                      {row.icon}
                    </div>
                    <span>{row.feature}</span>
                  </div>
                  {/* Right Column: Benefit */}
                  <div className="px-4 py-2 flex items-center h-full">
                    {row.benefit}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}