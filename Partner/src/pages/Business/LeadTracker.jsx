import React from "react";
import { ArrowLeft, UserPlus, Search, SlidersHorizontal, RotateCcw } from "lucide-react";

const LeadTracker = () => {
  return (
    <div className="min-h-screen bg-gray-50/50 p-6">
      {/* Header Section with Back Arrow */}
      <div className="max-w-6xl mx-auto mb-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="p-2 hover:bg-gray-200 rounded-full transition-colors duration-200"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="w-6 h-6 text-gray-700" />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-gray-800 tracking-tight flex items-center gap-2">
              <UserPlus className="w-6 h-6 text-purple-700" /> Lead Tracker
            </h1>
          </div>
        </div>
      </div>

      {/* Main Dashboard / Lookup Panel */}
      <div className="max-w-6xl mx-auto bg-white border border-gray-100 shadow-sm rounded-xl p-8 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        
        {/* Left Section: Info */}
        <div className="space-y-2">
          <span className="text-xs font-bold tracking-wider text-blue-600 uppercase">
            Quick Filter
          </span>
          <h2 className="text-xl font-bold text-gray-900">Lead Tracker lookup</h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            Find a lead fast and open its current ownership trail.
          </p>
        </div>

        {/* Middle Section: Latest Status Card */}
        <div className="border border-blue-100 shadow-sm p-5 rounded-xl bg-blue-50/60 space-y-2">
          <span className="text-xs font-bold tracking-wider text-blue-600 uppercase">
            Latest Update
          </span>
          <h2 className="text-lg font-semibold text-gray-800">Awaiting lead selection</h2>
          <p className="text-xs text-gray-500">Fresh routing snapshot</p>
        </div>

        {/* Right Section: Interactive Search Controls */}
        <div className="flex flex-col gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-bold tracking-wider text-gray-600 uppercase">
              Lead Lookup
            </label>
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input 
                type="text"
                placeholder="Lead ID, Phone, Email..." 
                className="w-full pl-9 pr-4 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
              />
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex gap-2 pt-2">
            <button className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm py-2 px-4 rounded-lg transition-colors shadow-sm">
              <SlidersHorizontal className="w-4 h-4" /> Filter
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium text-sm py-2 px-4 rounded-lg transition-colors">
              <RotateCcw className="w-4 h-4" /> Reset
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LeadTracker;