import React, { useState } from 'react';

// --- COMPREHENSIVE 100 PARTNER BANKS DATASET ---
const ALL_PARTNERS = [
  // Tier 1 Private & Public Major Aggregators
  { name: 'SBI', type: 'Public Sector', maxTenure: '30 Years', fee: 'Low' },
  { name: 'HDFC Bank', type: 'Private Sector', maxTenure: '25 Years', fee: 'Standard' },
  { name: 'ICICI Bank', type: 'Private Sector', maxTenure: '25 Years', fee: 'Competitive' },
  { name: 'Axis Bank', type: 'Private Sector', maxTenure: '30 Years', fee: 'Varies' },
  { name: 'Kotak Mahindra', type: 'Private Sector', maxTenure: '20 Years', fee: 'Low' },
  { name: 'IDFC First', type: 'Private Sector', maxTenure: '25 Years', fee: 'Zero Options' },
  { name: 'Bank of Baroda', type: 'Public Sector', maxTenure: '30 Years', fee: 'Low' },
  { name: 'Punjab National Bank', type: 'Public Sector', maxTenure: '25 Years', fee: 'Minimal' },
  { name: 'Canara Bank', type: 'Public Sector', maxTenure: '25 Years', fee: 'Low' },
  { name: 'Union Bank of India', type: 'Public Sector', maxTenure: '30 Years', fee: 'Competitive' },
  { name: 'IndusInd Bank', type: 'Private Sector', maxTenure: '20 Years', fee: 'Standard' },
  { name: 'Federal Bank', type: 'Private Sector', maxTenure: '25 Years', fee: 'Low' },
  { name: 'Yes Bank', type: 'Private Sector', maxTenure: '20 Years', fee: 'Standard' },
  { name: 'Indian Bank', type: 'Public Sector', maxTenure: '25 Years', fee: 'Minimal' },
  { name: 'UCO Bank', type: 'Public Sector', maxTenure: '20 Years', fee: 'Low' },
  { name: 'Bank of India', type: 'Public Sector', maxTenure: '25 Years', fee: 'Low' },
  { name: 'Central Bank of India', type: 'Public Sector', maxTenure: '25 Years', fee: 'Minimal' },
  { name: 'Indian Overseas Bank', type: 'Public Sector', maxTenure: '25 Years', fee: 'Low' },
  { name: 'Bank of Maharashtra', type: 'Public Sector', maxTenure: '20 Years', fee: 'Minimal' },
  { name: 'Punjab & Sind Bank', type: 'Public Sector', maxTenure: '20 Years', fee: 'Low' },
  
  // Premium Private & International Financers
  { name: 'Standard Chartered', type: 'International', maxTenure: '25 Years', fee: 'Premium' },
  { name: 'Citi India', type: 'International', maxTenure: '20 Years', fee: 'Standard' },
  { name: 'HSBC India', type: 'International', maxTenure: '25 Years', fee: 'Premium' },
  { name: 'DBS Bank India', type: 'International', maxTenure: '25 Years', fee: 'Competitive' },
  { name: 'RBL Bank', type: 'Private Sector', maxTenure: '20 Years', fee: 'Standard' },
  { name: 'Karur Vysya Bank', type: 'Private Sector', maxTenure: '25 Years', fee: 'Low' },
  { name: 'South Indian Bank', type: 'Private Sector', maxTenure: '25 Years', fee: 'Competitive' },
  { name: 'Bandhan Bank', type: 'Private Sector', maxTenure: '15 Years', fee: 'Standard' },
  { name: 'IDBI Bank', type: 'Private Sector', maxTenure: '25 Years', fee: 'Low' },
  { name: 'J&K Bank', type: 'Private Sector', maxTenure: '20 Years', fee: 'Varies' },
  { name: 'Karnataka Bank', type: 'Private Sector', maxTenure: '25 Years', fee: 'Standard' },
  { name: 'City Union Bank', type: 'Private Sector', maxTenure: '20 Years', fee: 'Competitive' },
  { name: 'DCB Bank', type: 'Private Sector', maxTenure: '20 Years', fee: 'Standard' },
  { name: 'Tamilnad Mercantile', type: 'Private Sector', maxTenure: '20 Years', fee: 'Low' },
  { name: 'Nainital Bank', type: 'Private Sector', maxTenure: '15 Years', fee: 'Standard' },
  
  // Top Tier Housing Finance Companies (HFCs) & NBFCs
  { name: 'LIC Housing Finance', type: 'HFC / Institution', maxTenure: '30 Years', fee: 'Low' },
  { name: 'Bajaj Finserv', type: 'NBFC Core', maxTenure: '20 Years', fee: 'Standard' },
  { name: 'Tata Capital', type: 'NBFC Core', maxTenure: '25 Years', fee: 'Competitive' },
  { name: 'Aditya Birla Capital', type: 'NBFC Core', maxTenure: '25 Years', fee: 'Standard' },
  { name: 'L&T Finance', type: 'NBFC Core', maxTenure: '20 Years', fee: 'Competitive' },
  { name: 'PNB Housing Finance', type: 'HFC / Institution', maxTenure: '30 Years', fee: 'Standard' },
  { name: 'Can Fin Homes', type: 'HFC / Institution', maxTenure: '30 Years', fee: 'Low' },
  { name: 'Godrej Housing Fin', type: 'HFC / Institution', maxTenure: '25 Years', fee: 'Competitive' },
  { name: 'Shriram Finance', type: 'NBFC Core', maxTenure: '15 Years', fee: 'Varies' },
  { name: 'Muthoot Finance', type: 'NBFC Core', maxTenure: '10 Years', fee: 'Minimal' },
  { name: 'Manappuram Finance', type: 'NBFC Core', maxTenure: '7 Years', fee: 'Minimal' },
  { name: 'Cholamandalam Fin', type: 'NBFC Core', maxTenure: '20 Years', fee: 'Standard' },
  { name: 'Mahindra Finance', type: 'NBFC Core', maxTenure: '15 Years', fee: 'Varies' },
  { name: 'HDB Financial Services', type: 'NBFC Core', maxTenure: '15 Years', fee: 'Standard' },
  { name: 'ICICI Home Finance', type: 'HFC / Institution', maxTenure: '25 Years', fee: 'Standard' },

  // Small Finance Banks & Fast Growth Retailers
  { name: 'AU Small Finance Bank', type: 'SFB Retail', maxTenure: '25 Years', fee: 'Competitive' },
  { name: 'Equitas Small Fin', type: 'SFB Retail', maxTenure: '20 Years', fee: 'Standard' },
  { name: 'Ujjivan Small Fin', type: 'SFB Retail', maxTenure: '20 Years', fee: 'Standard' },
  { name: 'Jana Small Finance', type: 'SFB Retail', maxTenure: '15 Years', fee: 'Varies' },
  { name: 'Utkarsh Small Fin', type: 'SFB Retail', maxTenure: '20 Years', fee: 'Competitive' },
  { name: 'ESAF Small Finance', type: 'SFB Retail', maxTenure: '20 Years', fee: 'Standard' },
  { name: 'Fincare Small Fin', type: 'SFB Retail', maxTenure: '20 Years', fee: 'Competitive' },
  { name: 'Capital Small Fin', type: 'SFB Retail', maxTenure: '15 Years', fee: 'Low' },
  { name: 'Suryoday Small Fin', type: 'SFB Retail', maxTenure: '15 Years', fee: 'Varies' },
  { name: 'North East Small Fin', type: 'SFB Retail', maxTenure: '15 Years', fee: 'Standard' },

  // Regional Apex & Strategic Alliances 
  { name: 'Aavas Financiers', type: 'HFC / Institution', maxTenure: '20 Years', fee: 'Standard' },
  { name: 'Home First Finance', type: 'HFC / Institution', maxTenure: '25 Years', fee: 'Competitive' },
  { name: 'Aadhar Housing Fin', type: 'HFC / Institution', maxTenure: '25 Years', fee: 'Standard' },
  { name: 'India Shelter Finance', type: 'HFC / Institution', maxTenure: '20 Years', fee: 'Varies' },
  { name: 'Repco Home Finance', type: 'HFC / Institution', maxTenure: '25 Years', fee: 'Low' },
  { name: 'Aptus Value Housing', type: 'HFC / Institution', maxTenure: '20 Years', fee: 'Standard' },
  { name: 'IndoStar Capital', type: 'NBFC Core', maxTenure: '15 Years', fee: 'Competitive' },
  { name: 'InCred Financial', type: 'NBFC Core', maxTenure: '15 Years', fee: 'Standard' },
  { name: 'Hero Fincorp', type: 'NBFC Core', maxTenure: '15 Years', fee: 'Varies' },
  { name: 'Fullerton India', type: 'NBFC Core', maxTenure: '15 Years', fee: 'Standard' },
  
  // Digital Lenders & Ecosystem Partners
  { name: 'Protium Finance', type: 'Digital NBFC', maxTenure: '10 Years', fee: 'Competitive' },
  { name: 'FlexiLoans', type: 'Digital NBFC', maxTenure: '5 Years', fee: 'Standard' },
  { name: 'Lendingkart', type: 'Digital NBFC', maxTenure: '3 Years', fee: 'Varies' },
  { name: 'Ziploan', type: 'Digital NBFC', maxTenure: '5 Years', fee: 'Minimal' },
  { name: 'NeoGrowth', type: 'Digital NBFC', maxTenure: '5 Years', fee: 'Standard' },
  { name: 'Capital Float', type: 'Digital NBFC', maxTenure: '7 Years', fee: 'Competitive' },
  { name: 'Clix Capital', type: 'Digital NBFC', maxTenure: '10 Years', fee: 'Standard' },
  { name: 'Faircent', type: 'P2P Platform', maxTenure: '5 Years', fee: 'Minimal' },
  { name: 'Liquiloans', type: 'P2P Platform', maxTenure: '3 Years', fee: 'Low' },
  { name: 'LenDenClub', type: 'P2P Platform', maxTenure: '5 Years', fee: 'Minimal' },

  // Supplementary Regional and Institutional Coverages
  { name: 'Fedbank Financial', type: 'NBFC Core', maxTenure: '20 Years', fee: 'Low' },
  { name: 'IIFL Home Finance', type: 'HFC / Institution', maxTenure: '25 Years', fee: 'Standard' },
  { name: 'Dhani Loans', type: 'Digital NBFC', maxTenure: '5 Years', fee: 'Standard' },
  { name: 'Piramal Capital', type: 'NBFC Core', maxTenure: '25 Years', fee: 'Competitive' },
  { name: 'Muthoot Homefin', type: 'HFC / Institution', maxTenure: '20 Years', fee: 'Low' },
  { name: 'Centrum Housing Fin', type: 'HFC / Institution', maxTenure: '20 Years', fee: 'Standard' },
  { name: 'Shubham Housing Fin', type: 'HFC / Institution', maxTenure: '20 Years', fee: 'Varies' },
  { name: 'Vastu Housing Finance', type: 'HFC / Institution', maxTenure: '20 Years', fee: 'Competitive' },
  { name: 'SMFG India Credit', type: 'NBFC Core', maxTenure: '15 Years', fee: 'Standard' },
  { name: 'PayMe India', type: 'Digital NBFC', maxTenure: '3 Years', fee: 'Minimal' },
  { name: 'mPokket', type: 'Digital NBFC', maxTenure: '2 Years', fee: 'Standard' },
  { name: 'KreditBee', type: 'Digital NBFC', maxTenure: '3 Years', fee: 'Competitive' },
  { name: 'SmartCoin', type: 'Digital NBFC', maxTenure: '3 Years', fee: 'Minimal' },
  { name: 'Cashe', type: 'Digital NBFC', maxTenure: '3 Years', fee: 'Standard' },
  { name: 'MoneyTap', type: 'Digital NBFC', maxTenure: '5 Years', fee: 'Varies' },
  { name: 'EarlySalary (Fibe)', type: 'Digital NBFC', maxTenure: '3 Years', fee: 'Standard' },
  { name: 'Nira Finance', type: 'Digital NBFC', maxTenure: '3 Years', fee: 'Minimal' },
  { name: 'StashFin', type: 'Digital NBFC', maxTenure: '4 Years', fee: 'Standard' },
  { name: 'Home Credit India', type: 'NBFC Core', maxTenure: '4 Years', fee: 'Premium' },
  { name: 'LoanTap', type: 'Digital NBFC', maxTenure: '5 Years', fee: 'Standard' }
];

export default function OurPartnerBanks() {
  const [showAll, setShowAll] = useState(false);

  // Initially show top 12 banks for grid optimization
  const visiblePartners = showAll ? ALL_PARTNERS : ALL_PARTNERS.slice(0, 12);

  const handleOpenModal = () => {
    const loansSection = document.getElementById('loans');
    if (loansSection) {
      loansSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#loans';
    }
  };

  return (
    <section id="banks" className="py-16 px-6 max-w-7xl mx-auto w-full">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold mb-3 text-[#0f172a]">
          Our Network of <span className="bg-brand-gradient text-brand-gradient">{ALL_PARTNERS.length}+ Partner Banks</span>
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base">
          We integrate seamlessly with India's primary financial systems, retail banks, and digital NBFCs to discover the absolute lowest rate your profile qualifies for.
        </p>
      </div>

      {/* Dynamic Card Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {visiblePartners.map((bank, index) => (
          <div 
            key={index} 
            className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-blue-500/30 hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-gray-900 text-base tracking-tight">{bank.name}</h3>
                <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-600 border border-blue-100">
                  {bank.type.split(' ')[0]}
                </span>
              </div>
              <p className="text-xs text-gray-400 font-medium mb-1">Institution Type</p>
              <p className="text-sm text-gray-700 font-medium mb-4">{bank.type}</p>
            </div>
            
            <div className="pt-3 border-t border-gray-50 grid grid-cols-2 gap-2 text-xs">
              <div>
                <span className="block text-gray-400 font-medium mb-0.5">Max Tenure</span>
                <span className="font-semibold text-gray-800">{bank.maxTenure}</span>
              </div>
              <div>
                <span className="block text-gray-400 font-medium mb-0.5">Fees Range</span>
                <span className="font-semibold text-gray-800">{bank.fee}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show More / Show Less Toggle Button */}
      <div className="text-center mt-10">
        <button
          onClick={() => setShowAll(!showAll)}
          className="inline-flex items-center gap-2 px-6 py-3 border border-gray-200 hover:border-blue-600 bg-white hover:bg-blue-50/20 text-gray-700 hover:text-blue-600 rounded-xl font-bold text-sm shadow-sm active:scale-98 transition duration-150"
        >
          {showAll ? (
            <>Collapse Network Options ↑</>
          ) : (
            <>View All {ALL_PARTNERS.length - 12} Additional Partners ↓</>
          )}
        </button>
      </div>

      {/* Contextual Action Block */}
      <div className="mt-14 p-8 rounded-2xl bg-brand-gradient text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
        <div>
          <h3 className="text-xl font-bold mb-1">Want to run an instant eligibility test?</h3>
          <p className="opacity-90 text-sm">We aggregate rules from all 100 lenders without hitting your hard CIBIL score.</p>
        </div>
        <button 
          onClick={handleOpenModal}
          className="bg-white text-blue-700 font-bold px-6 py-3 rounded-xl shadow-md hover:bg-gray-50 active:scale-95 transition-all duration-150 shrink-0"
        >
          Check Rates Now
        </button>
      </div>
    </section>
  );
}