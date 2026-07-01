import React, { useState, useMemo } from "react";

const PersonalLoan = () => {
  // Application form state
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    agree: true,
  });

  // Filter configuration state
  const [filters, setFilters] = useState({
    processingTime: "",
    interestRate: "",
    processingFees: "",
    loanAmount: "",
  });

  // Modal and application simulation states
  const [selectedBank, setSelectedBank] = useState(null);
  const [isSubmittingLead, setIsSubmittingLead] = useState(false);
  const [isFormSubmittedSuccessfully, setIsFormSubmittedSuccessfully] = useState(false);

  // Core base bank dataset
  const baseOffers = [
    { id: 1, bankName: "SBI", initials: "SBI", bgGradient: "from-blue-600 to-cyan-500", logo: "https://logo.clearbit.com/sbi.co.in", processingTime: "3 - 5 Days", interestRate: 9.60, maxAmount: 2500000, displayAmount: "₹25 Lakh", displayFees: "Upto 1.5%", displayRate: "9.60% onwards" },
    { id: 2, bankName: "ICICI Bank", initials: "ICICI", bgGradient: "from-orange-600 to-amber-500", logo: "https://logo.clearbit.com/icicibank.com", processingTime: "3 - 5 Days", interestRate: 9.99, maxAmount: 20000000, displayAmount: "₹2 Crore", displayFees: "Upto 2.5%", displayRate: "9.99% onwards" },
    { id: 3, bankName: "HDFC Bank", initials: "HDFC", bgGradient: "from-blue-900 to-indigo-700", logo: "https://logo.clearbit.com/hdfcbank.com", processingTime: "3 - 5 Days", interestRate: 10.45, maxAmount: 5000000, displayAmount: "₹50 Lakh", displayFees: "₹4,999 + GST", displayRate: "10.45% onwards" },
    { id: 4, bankName: "Axis Bank", initials: "AXIS", bgGradient: "from-rose-900 to-rose-600", logo: "https://logo.clearbit.com/axisbank.com", processingTime: "1 - 2 Days", interestRate: 9.95, maxAmount: 4000000, displayAmount: "₹40 Lakh", displayFees: "Upto 2%", displayRate: "9.95% onwards" },
    { id: 5, bankName: "Kotak Mahindra", initials: "KMBL", bgGradient: "from-red-600 to-amber-600", logo: "https://logo.clearbit.com/kotak.com", processingTime: "Instant", interestRate: 10.99, maxAmount: 5000000, displayAmount: "₹50 Lakh", displayFees: "₹1,299 + GST", displayRate: "10.99% onwards" },
    { id: 6, bankName: "Bajaj Finserv", initials: "BFL", bgGradient: "from-blue-800 to-indigo-900", logo: "https://logo.clearbit.com/bajajfinserv.in", processingTime: "Instant", interestRate: 11.00, maxAmount: 4000000, displayAmount: "₹40 Lakh", displayFees: "Upto 3.99%", displayRate: "11.00% onwards" }
  ];

  // List of 50 additional prominent financial institutions
  const extraBankNames = [
    "Punjab National Bank", "Bank of Baroda", "Canara Bank", "Union Bank of India", "IDBI Bank", 
    "Indian Bank", "Central Bank of India", "Indian Overseas Bank", "UCO Bank", "Bank of Maharashtra", 
    "IndusInd Bank", "Yes Bank", "IDFC First Bank", "Federal Bank", "South Indian Bank", 
    "Bandhan Bank", "RBL Bank", "Karur Vysya Bank", "City Union Bank", "Karnataka Bank", 
    "Tamilnad Mercantile Bank", "DCB Bank", "Catholic Syrian Bank", "Dhanlaxmi Bank", "Jammu & Kashmir Bank", 
    "Tata Capital", "Aditya Birla Capital", "L&T Finance", "Muthoot Finance", "Manappuram Finance", 
    "Mahindra Finance", "Shriram Finance", "Cholamandalam Finance", "Piramal Capital", "HDB Financial Services", 
    "Muthoot Fincorp", "Home Credit", "PaySense", "MoneyTap", "KreditBee", 
    "EarlySalary", "LazyPay", "Cashe", "mPokket", "Nira Finance", 
    "Loantap", "ZestMoney", "Faircent", "i2iFunding", "LendenClub"
  ];

  // Programmatically compound datasets into a cohesive list of 56 providers
  const baseLoanOffers = useMemo(() => {
    const trackingGradients = [
      "from-teal-600 to-emerald-500", "from-purple-600 to-pink-500", 
      "from-blue-700 to-indigo-500", "from-fuchsia-600 to-purple-600",
      "from-cyan-600 to-blue-500", "from-emerald-600 to-teal-500"
    ];

    const processingTimes = ["Instant", "1 - 2 Days", "3 - 5 Days"];

    const compiledExtraOffers = extraBankNames.map((name, index) => {
      const generatedId = index + 7;
      const rateCalculated = parseFloat((10.20 + (index * 0.07)).toFixed(2));
      const amountCalculated = index % 3 === 0 ? 3000000 : (index % 3 === 1 ? 5000000 : 1500000);
      const formattedAmount = amountCalculated >= 5000000 ? `₹${amountCalculated/100000} Lakh` : `₹${amountCalculated/100000} Lakh`;

      // Formulate custom dynamic initials matching your token criteria
      const standardInitials = name.split(" ").map(w => w[0]).join("").substring(0, 4).toUpperCase();

      return {
        id: generatedId,
        bankName: name,
        initials: standardInitials,
        bgGradient: trackingGradients[index % trackingGradients.length],
        logo: `https://logo.clearbit.com/${name.toLowerCase().replace(/[^a-z0-9]/g, "")}.com`,
        processingTime: processingTimes[index % processingTimes.length],
        interestRate: rateCalculated,
        maxAmount: amountCalculated,
        displayAmount: amountCalculated >= 5000000 ? "₹50 Lakh" : (amountCalculated === 3000000 ? "₹30 Lakh" : "₹15 Lakh"),
        displayFees: index % 2 === 0 ? "Upto 2.0%" : "₹1,999 + GST",
        displayRate: `${rateCalculated}% onwards`
      };
    });

    return [...baseOffers, ...compiledExtraOffers];
  }, []);

  // Form Handlers
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleMainFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmittingLead(true);
    setTimeout(() => {
      setIsSubmittingLead(false);
      setIsFormSubmittedSuccessfully(true);
      setTimeout(() => setIsFormSubmittedSuccessfully(false), 5000);
    }, 1200);
  };

  const handleFilterChange = (category, value) => {
    setFilters((prev) => ({ ...prev, [category]: value }));
  };

  const clearFilters = () => {
    setFilters({ processingTime: "", interestRate: "", processingFees: "", loanAmount: "" });
  };

  // Filter Engine
  const filteredOffers = useMemo(() => {
    let output = [...baseLoanOffers];

    if (filters.processingTime) {
      output = output.filter((offer) => offer.processingTime === filters.processingTime);
    }
    if (filters.interestRate === "Lowest") {
      output.sort((a, b) => a.interestRate - b.interestRate);
    } else if (filters.interestRate === "Highest") {
      output.sort((a, b) => b.interestRate - a.interestRate);
    }
    if (filters.loanAmount === "Lowest") {
      output.sort((a, b) => a.maxAmount - b.maxAmount);
    } else if (filters.loanAmount === "Highest") {
      output.sort((a, b) => b.maxAmount - a.maxAmount);
    }

    return output;
  }, [filters, baseLoanOffers]);

  return (
    <div className="bg-[#f8fafc] min-h-screen font-sans text-gray-800 antialiased selection:bg-blue-500 selection:text-white">
      
      {/* Banner Component */}
      <div className="max-w-7xl mx-auto px-4 pt-8">
        <div className="relative overflow-hidden rounded-3xl shadow-xl bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-900 h-[280px] md:h-[350px] group">
          <img
            className="w-full h-full object-cover mix-blend-overlay opacity-30 transition-transform duration-1000 group-hover:scale-105"
            src="https://ik.imagekit.io/tpzm8ak07/images/homeSlider/pasence_personal.webp"
            alt="Personal Loan Marketplace"
          />
          <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16 text-white space-y-4 pointer-events-none">
            <span className="bg-white/10 text-blue-300 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase w-fit backdrop-blur-md border border-white/10 animate-pulse">
              ⚡ Cavner Wealth FinTech Ecosystem
            </span>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight max-w-2xl drop-shadow-sm">
              Instant Credit Lines. <br className="hidden md:inline" />
              Tailored Transparent Terms.
            </h1>
            <p className="text-sm md:text-lg text-slate-300 max-w-xl font-light leading-relaxed">
              Skip traditional branch queues. Compare verified institutional capital offers instantly with single-click routing protocols.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Layout Split Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-20">
          
          {/* LEFT COLUMN CONTENT */}
          <div className="lg:col-span-7 space-y-8 mt-4">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 text-blue-600 font-bold tracking-widest text-xs uppercase bg-blue-50 px-3 py-1.5 rounded-lg">
                <span>Optimized Loan Marketplace</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight leading-none">
                Compare Across <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">50+ Premier Banks</span> & NBFCs Online
              </h2>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed font-light">
                Unlock custom funding allocations instantly. Our engine enforces direct API handshakes with major nationalised, private, and fin-tech lenders, preserving clean eligibility tracking models for any applicant with a CIBIL health score of 700 or greater.
              </p>
            </div>

            {/* Metric Highlights */}
            <div className="grid grid-cols-3 gap-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="text-center border-r border-gray-100">
                <span className="block text-2xl md:text-3xl font-black text-blue-600 tracking-tight">9.60%</span>
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block mt-1">Starting Interest</span>
              </div>
              <div className="text-center border-r border-gray-100">
                <span className="block text-2xl md:text-3xl font-black text-emerald-600 tracking-tight">24 Hrs</span>
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block mt-1">Avg Disbursal</span>
              </div>
              <div className="text-center">
                <span className="block text-2xl md:text-3xl font-black text-indigo-600 tracking-tight">56 Live</span>
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block mt-1">Integrated Lenders</span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE LEAD CARD */}
          <div className="lg:col-span-5 bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden sticky top-8 transition-transform duration-300 hover:shadow-2xl">
            <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 px-6 py-4 border-b border-dashed border-emerald-500/20 flex items-center justify-between">
              <span className="text-[10px] font-bold text-emerald-800 tracking-wider uppercase bg-emerald-100 px-2.5 py-1 rounded-md">
                
              </span>
            
            </div>

            <form onSubmit={handleMainFormSubmit} className="p-8 space-y-6">
              <div className="space-y-1 text-center">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block">Get Personal Loan</span>
                <h3 className="text-2xl font-black text-gray-900 tracking-tight">Avail Up to <span className="text-blue-600">
                  1Cr </span>Starting at <span className="text-blue-600">
                  13%</span></h3>
              </div>

              <div className="space-y-4">
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full Name (as on your PAN)"
                  className="w-full px-4 py-4 bg-gray-50/50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white transition-all duration-200 text-sm"
                  required
                />
                <input
                  type="tel"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  placeholder="Mobile Number"
                  className="w-full px-4 py-4 bg-gray-50/50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white transition-all duration-200 text-sm"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmittingLead}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 active:scale-[0.98] text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg shadow-blue-600/20 disabled:opacity-50"
              >
                <span>{isSubmittingLead ? "Processing Secure Tokens..." : "Apply Know"}</span>
                {!isSubmittingLead && <span className="text-lg">➔</span>}
              </button>

              {isFormSubmittedSuccessfully && (
                <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-xs font-medium text-center animate-fade-in">
                  ✓ Profile indexed! Custom pricing pipelines adjusted below.
                </div>
              )}
            </form>
          </div>
        </div>

        <hr className="border-gray-200/80 mb-16" />

        {/* Live Catalog Marketplace Container */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight">
                Live Offers Catalog
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Interact with the filters. The matching banking allocations adjust and sort instantly.
              </p>
            </div>
            <span className="text-xs font-bold bg-white border border-gray-200 shadow-sm px-4 py-2 rounded-xl text-gray-600 w-fit">
              Found {filteredOffers.length} Qualified System Matches
            </span>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* FILTER SIDEBAR CRITERIA */}
            <div className="lg:col-span-3 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm sticky top-8 max-h-[85vh] overflow-y-auto custom-scrollbar">
              <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-6">
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Filters</h3>
                <button 
                  onClick={clearFilters}
                  className="text-xs font-bold text-blue-600 hover:text-white hover:bg-blue-600 px-2.5 py-1 rounded-lg transition-all duration-150"
                >
                  Clear All
                </button>
              </div>

              {/* Processing Speed */}
              <div className="mb-6">
                <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-3">Processing Speed</h4>
                <div className="space-y-2">
                  {["Instant", "1 - 2 Days", "3 - 5 Days"].map((time) => (
                    <label key={time} className="flex items-center space-x-3 text-sm text-gray-600 hover:text-gray-900 cursor-pointer select-none group">
                      <input 
                        type="radio" 
                        name="processingTime"
                        checked={filters.processingTime === time}
                        onChange={() => handleFilterChange("processingTime", time)}
                        className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500/20 cursor-pointer" 
                      />
                      <span className={`transition-colors duration-150 ${filters.processingTime === time ? "font-bold text-blue-600" : "group-hover:text-gray-900"}`}>{time}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Interest Rate Sort */}
              <div className="mb-6 border-t border-gray-100 pt-5">
                <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-3">Interest Rate Sort</h4>
                <div className="space-y-2">
                  {["Lowest", "Highest"].map((rate) => (
                    <label key={rate} className="flex items-center space-x-3 text-sm text-gray-600 hover:text-gray-900 cursor-pointer select-none group">
                      <input 
                        type="radio" 
                        name="interestRate"
                        checked={filters.interestRate === rate}
                        onChange={() => handleFilterChange("interestRate", rate)}
                        className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500/20 cursor-pointer" 
                      />
                      <span className={`transition-colors duration-150 ${filters.interestRate === rate ? "font-bold text-blue-600" : "group-hover:text-gray-900"}`}>{rate} Pricing</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Loan Limit Target */}
              <div className="border-t border-gray-100 pt-5">
                <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-3">Loan Amount Target</h4>
                <div className="space-y-2">
                  {["Lowest", "Highest"].map((amount) => (
                    <label key={amount} className="flex items-center space-x-3 text-sm text-gray-600 hover:text-gray-900 cursor-pointer select-none group">
                      <input 
                        type="radio" 
                        name="loanAmount"
                        checked={filters.loanAmount === amount}
                        onChange={() => handleFilterChange("loanAmount", amount)}
                        className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500/20 cursor-pointer" 
                      />
                      <span className={`transition-colors duration-150 ${filters.loanAmount === amount ? "font-bold text-blue-600" : "group-hover:text-gray-900"}`}>{amount} Limits</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* COMPREHENSIVE LENDERS DIRECTORY */}
            <div className="lg:col-span-9 space-y-4 max-h-[85vh] overflow-y-auto pr-2 custom-scrollbar">
              {filteredOffers.length > 0 ? (
                filteredOffers.map((offer) => (
                  <div 
                    key={offer.id} 
                    className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-lg hover:border-blue-500/30 transition-all duration-300 flex flex-col lg:flex-row lg:items-center justify-between gap-6 group transform hover:-translate-y-[1px]"
                  >
                    {/* Bank Circle Badge with Name Initials Fallback centered perfectly */}
                    <div className="flex items-center space-x-4 min-w-[240px]">
                      <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${offer.bgGradient} flex items-center justify-center p-0.5 shadow-md group-hover:scale-105 transition-transform duration-200 shrink-0 border border-white/20`}>
                        <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden p-1">
                          <img 
                            src={offer.logo} 
                            alt="" 
                            className="object-contain max-h-full max-w-full"
                            onError={(e) => { 
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'flex';
                            }}
                          />
                          <span className="hidden text-[11px] font-black tracking-tight uppercase text-gray-800 text-center select-none w-full h-full items-center justify-center">
                            {offer.initials}
                          </span>
                        </div>
                      </div>
                      <h3 className="text-base font-bold text-gray-900 tracking-tight group-hover:text-blue-600 transition-colors duration-150">{offer.bankName}</h3>
                    </div>

                    {/* Metrics Node */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 flex-1 bg-slate-50/50 p-4 rounded-xl border border-gray-100 lg:bg-transparent lg:p-0 lg:border-none text-xs">
                      <div>
                        <span className="block text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-0.5">Speed</span>
                        <span className="font-bold text-gray-800">{offer.processingTime}</span>
                      </div>
                      <div>
                        <span className="block text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-0.5">Rate Tier</span>
                        <span className="font-bold text-emerald-600">{offer.displayRate}</span>
                      </div>
                      <div>
                        <span className="block text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-0.5">Processing Fee</span>
                        <span className="font-bold text-gray-700">{offer.displayFees}</span>
                      </div>
                      <div>
                        <span className="block text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-0.5">Max Allocation</span>
                        <span className="font-bold text-blue-600">{offer.displayAmount}</span>
                      </div>
                    </div>

                    <div className="shrink-0">
                      <button 
                        onClick={() => setSelectedBank(offer)}
                        className="w-full lg:w-auto px-5 py-3 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-bold rounded-xl transition-all duration-150 text-xs shadow-sm"
                      >
                        Apply Now ➔
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="bg-white border border-gray-200 border-dashed rounded-3xl p-16 text-center text-gray-400">
                  <span className="text-4xl block mb-3 animate-bounce">🔍</span>
                  <p className="text-sm font-medium text-gray-500">No matching banking infrastructure lines met those criteria thresholds.</p>
                  <button onClick={clearFilters} className="text-xs font-bold text-blue-600 mt-2 bg-blue-50 px-3 py-1.5 rounded-lg">Reset Filter Tree</button>
                </div>
              )}
            </div>

          </div>
        </div>

      </div>

      {/* DYNAMIC BACKEND INTERCEPTION MODAL */}
      {selectedBank && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-8 shadow-2xl border border-gray-100 relative animate-in fade-in zoom-in-95 duration-200">
            <button 
              onClick={() => setSelectedBank(null)}
              className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
            >
              ✕
            </button>
            
            <div className="space-y-6 text-center">
              <div className={`mx-auto w-16 h-16 rounded-full bg-gradient-to-br ${selectedBank.bgGradient} p-0.5 flex items-center justify-center shadow-md`}>
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center p-2 overflow-hidden">
                  <img src={selectedBank.logo} alt="" className="object-contain max-h-full" onError={(e)=>{
                    e.target.style.display='none';
                    e.target.nextSibling.style.display='block';
                  }}/>
                  <span className="hidden font-black text-gray-800 text-xs">{selectedBank.initials}</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-xl font-black text-gray-900 tracking-tight">Initialize Routing</h3>
                <p className="text-xs text-gray-500 px-2 leading-relaxed">
                  Connecting digital application channels into the secure workspace portal of <span className="font-bold text-gray-900">{selectedBank.bankName}</span>.
                </p>
              </div>

              <div className="bg-slate-50 p-4 rounded-2xl text-left text-xs space-y-2.5 text-gray-600 border border-gray-100/70">
                <div className="flex justify-between items-center"><span className="text-gray-400">Target Interest Tier:</span> <span className="font-bold text-emerald-600">{selectedBank.displayRate}</span></div>
                <div className="flex justify-between items-center"><span className="text-gray-400">Maximum Allocation:</span> <span className="font-bold text-gray-900">{selectedBank.displayAmount}</span></div>
                <div className="flex justify-between items-center"><span className="text-gray-400">Processing Overhead:</span> <span className="font-bold text-gray-900">{selectedBank.displayFees}</span></div>
              </div>

              <div className="flex space-x-3 pt-2">
                <button onClick={() => setSelectedBank(null)} className="flex-1 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded-xl transition text-xs">Go Back</button>
                <button 
                  onClick={() => {
                    alert(`Application pipeline compiled successfully for ${selectedBank.bankName}!`);
                    setSelectedBank(null);
                  }}
                  className="flex-1 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl shadow-md transition text-xs"
                >
                  Confirm & Route
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default PersonalLoan;