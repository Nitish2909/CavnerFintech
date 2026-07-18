import React, { useState } from "react";
import { ArrowLeft, UserPlus, Search, SlidersHorizontal, RotateCcw } from "lucide-react";

const LeadTracker = () => {
  // Added state management to keep track of user input
  const [searchQuery, setSearchQuery] = useState("");

  // Handler for the filter submission
  const handleFilter = () => {
    if (searchQuery.trim()) {
      console.log("Filtering leads for:", searchQuery);
      // Your filtering logic or API calls go here
    }
  };

  // Handler to clear the input field
  const handleReset = () => {
    setSearchQuery("");
  };

  // Handler to capture 'Enter' key press in the input box
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleFilter();
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/70 p-4 md:p-8 font-sans antialiased">
      {/* Header Section with Back Arrow */}
      <div className="max-w-6xl mx-auto mb-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="p-2.5 hover:bg-slate-200/80 active:scale-95 text-slate-600 hover:text-slate-900 rounded-xl transition-all duration-200 bg-white shadow-sm border border-slate-100"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-3">
              <div className="p-2 bg-purple-50 rounded-xl border border-purple-100">
                <UserPlus className="w-6 h-6 text-purple-600 stroke-[2.5]" />
              </div> 
              Lead Tracker
            </h1>
          </div>
        </div>
      </div>

      {/* Main Dashboard / Lookup Panel */}
      <div className="max-w-6xl mx-auto bg-white border border-slate-200/60 shadow-xl shadow-slate-100/50 rounded-2xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        
        {/* Left Section: Info */}
        <div className="flex flex-col justify-between space-y-4 py-1">
          <div className="space-y-2">
            <span className="inline-flex items-center px-2.5 py-1 text-xs font-semibold tracking-wider text-indigo-600 uppercase bg-indigo-50 rounded-md">
              Quick Filter
            </span>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">Lead Tracker lookup</h2>
            <p className="text-sm text-slate-500 leading-relaxed font-normal">
              Find a lead fast and open its current ownership trail.
            </p>
          </div>
        </div>

        {/* Middle Section: Latest Status Card */}
        <div className="border border-blue-100 shadow-sm p-6 rounded-2xl bg-gradient-to-br from-blue-50/80 to-indigo-50/40 space-y-3 flex flex-col justify-center relative overflow-hidden group">
          <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-blue-500/5 rounded-full blur-xl group-hover:scale-120 transition-transform duration-500 pointer-events-none" />
          <div>
            <span className="inline-flex items-center px-2.5 py-0.5 text-[11px] font-bold tracking-wider text-blue-600 uppercase bg-blue-100/60 rounded-md">
              Latest Update
            </span>
          </div>
          <h2 className="text-lg font-bold text-slate-800 tracking-tight">Awaiting lead selection</h2>
          <p className="text-xs text-slate-500/90 font-medium">Fresh routing snapshot</p>
        </div>

        {/* Right Section: Interactive Search Controls */}
        <div className="flex flex-col justify-center gap-5">
          <div className="space-y-2">
            <label className="text-xs font-bold tracking-widest text-slate-500 uppercase block">
              Lead Lookup
            </label>
            <div className="relative group">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors duration-200" />
              <input 
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Lead ID, Phone, Email..." 
                className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-50/50 hover:bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white transition-all duration-200 text-slate-800 font-medium placeholder:text-slate-400"
              />
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex gap-3">
            <button 
              onClick={handleFilter}
              className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 active:scale-[0.98] text-white font-semibold text-sm py-2.5 px-4 rounded-xl transition-all shadow-md shadow-blue-500/10 hover:shadow-lg hover:shadow-blue-500/20"
            >
              <SlidersHorizontal className="w-4 h-4 stroke-[2.5]" /> Filter
            </button>
            <button 
              onClick={handleReset}
              className="flex-1 flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200/80 active:scale-[0.98] text-slate-700 font-semibold text-sm py-2.5 px-4 rounded-xl transition-all border border-slate-200/40"
            >
              <RotateCcw className="w-4 h-4 stroke-[2.5]" /> Reset
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LeadTracker;