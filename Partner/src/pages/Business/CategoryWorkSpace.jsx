import React, { useState } from "react";
import {
  Coins,
  TrendingUp,
  Zap,
  ShieldCheck,
  Briefcase,
  Box,
  CheckCircle2,
  Lock,
  Search,
  ArrowUpDown
} from "lucide-react";

// Workspace categories mock data based on the screenshot
const categoriesData = [
  { id: "loan", title: "Loan", icon: Coins, bgIcon: "bg-emerald-50", textIcon: "text-emerald-600" },
  { id: "investment", title: "Investment", icon: TrendingUp, bgIcon: "bg-cyan-50", textIcon: "text-cyan-600" },
  { id: "recharges", title: "Recharges & Utility Bills", icon: Zap, bgIcon: "bg-amber-50", textIcon: "text-amber-500" },
  { id: "insurance", title: "Insurance", icon: ShieldCheck, bgIcon: "bg-emerald-50", textIcon: "text-emerald-600" },
  { id: "legal", title: "CA & Legal Services", icon: Briefcase, bgIcon: "bg-rose-50", textIcon: "text-rose-500" },
  { id: "digital", title: "Digital Payment Services", icon: Box, bgIcon: "bg-slate-100", textIcon: "text-slate-600" },
];

const CategoryWorkspace = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCategories = categoriesData.filter((cat) =>
    cat.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50/50 p-6 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* LEFT COLUMN: Workspace Main Content */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Main Workspace Card */}
          <div className="bg-white rounded-xl border border-gray-200/80 p-6 shadow-sm">
            {/* Header Controls */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-bold text-slate-800">Category workspace</h2>
                <span className="text-xs font-semibold bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md">
                  {categoriesData.length} active
                </span>
              </div>
              
              <div className="flex items-center gap-2">
                {/* Search Bar */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search category"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-52 text-sm border border-gray-300 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all placeholder:text-gray-400"
                  />
                </div>
                {/* A-Z Sort button indicator */}
                <button className="border border-gray-300 rounded-lg px-2.5 py-1.5 text-sm font-bold text-slate-700 hover:bg-slate-50 flex items-center gap-1 transition-colors">
                  A-Z
                </button>
              </div>
            </div>

            {/* Grid of Interaction Category Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {filteredCategories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <button
                    key={category.id}
                    className="flex flex-col items-center justify-center text-center p-6 bg-white border border-blue-200/60 rounded-xl hover:shadow-md hover:border-blue-400 group transition-all duration-200 cursor-pointer min-h-[170px]"
                  >
                    <div className={`p-3 rounded-full ${category.bgIcon} ${category.textIcon} mb-4 transition-transform group-hover:scale-105`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-slate-800 text-base mb-2 group-hover:text-indigo-600 transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-[10px] text-gray-400 leading-normal max-w-[150px]">
                      Tap to auto-contextualise the lead sheet
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Recently Used Presets */}
          <div className="bg-white rounded-xl border border-gray-200/80 p-5 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-bold text-slate-800">Recently used presets</h3>
              <button className="text-xs font-semibold text-blue-600 hover:underline">
                Quick capture mode
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {categoriesData.map((preset) => (
                <span
                  key={preset.id}
                  className="text-xs text-slate-700 bg-slate-50 border border-gray-200 px-3 py-1.5 rounded-lg font-medium cursor-pointer hover:bg-slate-100 transition-colors"
                >
                  {preset.title}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Checklists & Snapshots Panel */}
        <div className="space-y-6">
          
          {/* Dispatch Checklist */}
          <div className="bg-white rounded-xl border border-gray-200/80 p-5 shadow-sm">
            <h4 className="text-xs font-bold text-slate-400 tracking-wider uppercase mb-4">
              Dispatch Checklist
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <p className="text-sm text-slate-700 leading-relaxed">
                  Verify customer consent plus mandatory KYC readiness before routing.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-amber-400 shrink-0 mt-0.5 fill-amber-400/10" />
                <p className="text-sm text-slate-700 leading-relaxed">
                  Capture intent notes so the product squad can skip discovery calls.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <Lock className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <p className="text-sm text-slate-700 leading-relaxed">
                  Sensitive fields are encrypted once the lead syncs to downstream apps.
                </p>
              </li>
            </ul>
          </div>

          {/* Routing Snapshot */}
          <div className="bg-white rounded-xl border border-gray-200/80 p-5 shadow-sm">
            <h4 className="text-xs font-bold text-slate-400 tracking-wider uppercase mb-4">
              Routing Snapshot
            </h4>
            <div className="divide-y divide-gray-100">
              <div className="flex justify-between items-center py-2.5">
                <span className="text-sm text-slate-500">Product desks live</span>
                <span className="text-sm font-bold text-slate-800">08 pods online</span>
              </div>
              <div className="flex justify-between items-center py-2.5">
                <span className="text-sm text-slate-500">Avg. assign time</span>
                <span className="text-sm font-bold text-slate-800">14 minutes</span>
              </div>
              <div className="flex justify-between items-center py-2.5">
                <span className="text-sm text-slate-500">SLA breaches today</span>
                <span className="text-sm font-bold text-emerald-600">0</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="bg-white rounded-xl border border-gray-200/80 p-5 shadow-sm">
            <h4 className="text-xs font-bold text-slate-400 tracking-wider uppercase mb-3">
              Quick Links
            </h4>
            <div className="flex flex-wrap gap-2">
              {["Team pipeline", "Lead settings", "Lead tracker", "Quick capture"].map((link) => (
                <button
                  key={link}
                  className="text-xs font-medium text-slate-700 bg-slate-50 border border-gray-200 px-2.5 py-1 rounded-md hover:bg-slate-100 transition-colors"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CategoryWorkspace;