import React, { useState } from 'react';

const PayoutsHub =()=> {
  const [showConfiguredOnly, setShowConfiguredOnly] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // Enhanced data structure with rich color patterns and individual icons
  const initialCategories = [
    { 
      id: 1, 
      name: 'Loan', 
      status: 'Pending', 
      maxPayout: '0%', 
      color: 'blue',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    { 
      id: 2, 
      name: 'Recharges & Utility Bills', 
      status: 'Pending', 
      maxPayout: '0%', 
      color: 'emerald',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    { 
      id: 3, 
      name: 'Insurance', 
      status: 'Pending', 
      maxPayout: '0%', 
      color: 'indigo',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    { 
      id: 4, 
      name: 'CA & Legal Services', 
      status: 'Pending', 
      maxPayout: '0%', 
      color: 'violet',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    { 
      id: 5, 
      name: 'Digital Payment Services', 
      status: 'Pending', 
      maxPayout: '0%', 
      color: 'amber',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      )
    },
  ];

  const colorMap = {
    blue: { bg: 'bg-blue-50 text-blue-600', ring: 'group-hover:ring-blue-100/80 group-hover:scale-105' },
    emerald: { bg: 'bg-emerald-50 text-emerald-600', ring: 'group-hover:ring-emerald-100/80 group-hover:scale-105' },
    indigo: { bg: 'bg-indigo-50 text-indigo-600', ring: 'group-hover:ring-indigo-100/80 group-hover:scale-105' },
    violet: { bg: 'bg-violet-50 text-violet-600', ring: 'group-hover:ring-violet-100/80 group-hover:scale-105' },
    amber: { bg: 'bg-amber-50 text-amber-600', ring: 'group-hover:ring-amber-100/80 group-hover:scale-105' },
  };

  const filteredCategories = initialCategories.filter(category => {
    const matchesSearch = category.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesConfigured = showConfiguredOnly ? category.status !== 'Pending' : true;
    return matchesSearch && matchesConfigured;
  });

  return (
    <div className="min-h-screen bg-slate-50/60 font-sans antialiased text-slate-600 pb-16">
      {/* Top Navbar */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60 px-6 sm:px-8 py-4 flex items-center gap-3.5 shadow-sm shadow-slate-100/40">
        <div className="w-9 h-9 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white shadow-md shadow-blue-500/15 ring-1 ring-white/10">
          <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <span className="font-bold text-slate-950 text-lg tracking-tight">Payouts Hub</span>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 space-y-6">
        
        {/* Banner Section */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/40 via-indigo-50/20 to-transparent pointer-events-none" />
          <div className="max-w-xl relative z-10">
            <span className="text-xs font-bold text-blue-600 tracking-wider uppercase block mb-2">
              Incentives & Earnings
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-2.5 leading-tight">
              Align your channel payouts effortlessly
            </h1>
            <p className="text-sm text-slate-400 font-medium leading-relaxed">
              Track configured incentives, discover gaps, and refresh payout percentages for every category in seconds.
            </p>
          </div>

          {/* Stats Cards Dashboard Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:flex lg:flex-nowrap gap-3.5 w-full lg:w-auto relative z-10">
            {[
              { label: 'Total Categories', val: '5' },
              { label: 'Configured', val: '0', sub: '0% coverage' },
              { label: 'Avg Payout', val: '0.0%' },
              { label: 'Highest Payout', val: '0%' }
            ].map((stat, idx) => (
              <div key={idx} className="bg-slate-50/60 p-4 rounded-xl border border-slate-200/50 min-w-[135px] lg:w-[145px] shadow-2xs">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">{stat.label}</p>
                <p className="text-2xl font-extrabold text-slate-800 tracking-tight leading-none">{stat.val}</p>
                {stat.sub && <p className="text-[11px] font-semibold text-slate-400 mt-1">{stat.sub}</p>}
              </div>
            ))}
          </div>
        </div>

        {/* Filter and Search Bar Controller Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-sm">
          {/* Custom Search Box */}
          <div className="relative w-full sm:w-80">
            <span className="absolute inset-y-0 left-3.5 flex items-center text-slate-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search categories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full h-10 pl-10 pr-4 bg-slate-50/60 border border-slate-200 rounded-xl text-sm text-slate-800 outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 font-medium transition-all placeholder-slate-400"
            />
          </div>

          {/* Configuration Filter Controls */}
          <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
            <button
              onClick={() => setShowConfiguredOnly(!showConfiguredOnly)}
              className={`flex items-center gap-2 px-4 h-10 rounded-xl text-xs font-bold tracking-wide transition-all active:scale-[0.98] ${
                showConfiguredOnly 
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/15' 
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300'
              }`}
            >
              <svg className={`w-3.5 h-3.5 ${showConfiguredOnly ? 'text-white' : 'text-slate-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
              </svg>
              Show configured only
            </button>
            <button
              onClick={() => { setSearchTerm(''); setShowConfiguredOnly(false); }}
              className="border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 active:scale-[0.98] text-slate-700 px-4 h-10 rounded-xl text-xs font-bold tracking-wide flex items-center gap-1.5 transition-all shadow-2xs"
            >
              <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.212 11H16" />
              </svg>
              Reset Filters
            </button>
          </div>
        </div>

        {/* Category Cards Layout Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredCategories.map((category) => {
            const colors = colorMap[category.color] || colorMap.blue;
            return (
              <div key={category.id} className="group bg-white border border-slate-200/80 rounded-2xl p-5 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-slate-300/70 hover:-translate-y-0.5 transition-all duration-200">
                
                <div>
                  {/* Header Top Info */}
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl transition-all ring-4 ring-transparent ${colors.bg} ${colors.ring} shrink-0`}>
                      {category.icon}
                    </div>
                    <div className="space-y-0.5 pt-0.5">
                      <h3 className="font-bold text-slate-900 text-sm leading-snug group-hover:text-blue-600 transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">
                        Pending Setup
                      </p>
                    </div>
                  </div>

                  {/* Main Metric Area */}
                  <div className="mt-6 flex justify-between items-center bg-slate-50/60 p-3.5 rounded-xl border border-slate-200/50">
                    <div>
                      <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Max Payout</p>
                      <p className="text-2xl font-black text-slate-800 tracking-tight leading-none">{category.maxPayout}</p>
                    </div>
                    <span className="text-[10px] font-bold tracking-wider text-amber-700 bg-amber-50/80 px-2.5 py-1 rounded-lg border border-amber-100 font-mono">
                      {category.status.toUpperCase()}
                    </span>
                  </div>
                </div>

                {/* Functional Actions Footer */}
                <div className="grid grid-cols-2 gap-2.5 mt-5">
                  <button className="border border-slate-200 hover:bg-slate-50 hover:border-slate-300 active:scale-[0.97] text-slate-700 text-xs font-bold h-9 rounded-xl transition-all flex items-center justify-center gap-1 shadow-2xs">
                    Details
                    <svg className="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </button>
                  <button className="bg-slate-900 hover:bg-slate-800 active:scale-[0.97] text-white text-xs font-bold h-9 rounded-xl transition-all flex items-center justify-center gap-1 shadow-sm">
                    <svg className="w-3.5 h-3.5 opacity-95" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Configure
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Dynamic Empty State if Filter yields no matches */}
        {filteredCategories.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-slate-300/80 max-w-sm mx-auto shadow-2xs">
            <div className="w-12 h-12 bg-slate-50 border border-slate-200/60 rounded-full flex items-center justify-center mx-auto mb-3.5 text-slate-400 shadow-2xs">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-slate-800 font-bold text-sm tracking-tight">No categories found</p>
            <p className="text-xs text-slate-400 mt-1 max-w-[260px] mx-auto leading-relaxed font-medium">Try adjusting your search terms or filters to find what you are looking for.</p>
          </div>
        )}

      </main>
    </div>
  );
}

export default PayoutsHub