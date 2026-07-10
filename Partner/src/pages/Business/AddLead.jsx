import React, { useState, useMemo } from "react";
import {
  ArrowLeft,
  UserPlus,
  Layers,
  RefreshCw,
  Zap,
  Coins,
  TrendingUp,
  ShieldCheck,
  Briefcase,
  Box,
  CheckCircle2,
  Lock,
  Search,
  X,
  FileText,
  User,
  Mail,
  Phone
} from "lucide-react";

// Workspace categories mock data
const categoriesData = [
  { id: "loan", title: "Loan", icon: Coins, bgIcon: "bg-emerald-50", textIcon: "text-emerald-600", borderColor: "hover:border-emerald-400" },
  { id: "investment", title: "Investment", icon: TrendingUp, bgIcon: "bg-cyan-50", textIcon: "text-cyan-600", borderColor: "hover:border-cyan-400" },
  { id: "recharges", title: "Recharges & Utility Bills", icon: Zap, bgIcon: "bg-amber-50", textIcon: "text-amber-500", borderColor: "hover:border-amber-400" },
  { id: "insurance", title: "Insurance", icon: ShieldCheck, bgIcon: "bg-teal-50", textIcon: "text-teal-600", borderColor: "hover:border-teal-400" },
  { id: "legal", title: "CA & Legal Services", icon: Briefcase, bgIcon: "bg-rose-50", textIcon: "text-rose-500", borderColor: "hover:border-rose-400" },
  { id: "digital", title: "Digital Payment Services", icon: Box, bgIcon: "bg-indigo-50", textIcon: "text-indigo-600", borderColor: "hover:border-indigo-400" },
];

const AddLead = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isAscending, setIsAscending] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Lead Form State
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    notes: ""
  });

  // Filter and Sort Category Logic
  const processedCategories = useMemo(() => {
    let result = categoriesData.filter((cat) =>
      cat.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    return result.sort((a, b) => {
      return isAscending 
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title);
    });
  }, [searchTerm, isAscending]);

  // Handle Form Open Actions
  const handleOpenForm = (category = null) => {
    setSelectedCategory(category);
    setIsModalOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Lead Submitted Successfully:", {
      category: selectedCategory ? selectedCategory.title : "Manual Entry",
      ...formData,
      timestamp: new Date().toISOString()
    });
    
    // Reset form and close modal
    setFormData({ fullName: "", email: "", phone: "", notes: "" });
    setIsModalOpen(false);
    alert("Lead added successfully! Details logged in console.");
  };

  return (
    <div className="min-h-screen bg-slate-50/60 p-4 md:p-8 font-sans antialiased text-slate-800">
      
      {/* 1. Header Section */}
      <div className="max-w-6xl mx-auto mb-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="p-2.5 hover:bg-slate-100 rounded-xl transition-all duration-200 bg-white shadow-sm border border-slate-200/60 active:scale-95"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="w-5 h-5 text-slate-600" />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2.5">
              <span className="p-1.5 bg-purple-50 rounded-lg"><UserPlus className="w-6 h-6 text-purple-700" /></span> Add Lead
            </h1>
          </div>
        </div>
      </div>

      {/* 2. Banner Overview Dashboard */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-6 items-stretch mb-8">
        {/* Left: Info Card */}
        <div className="flex-1 bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-2xl text-white flex flex-col justify-center shadow-sm">
          <h2 className="text-xl font-bold mb-2 text-white/95">
            Select the right capture flow
          </h2>
          <p className="text-slate-300/90 leading-relaxed text-sm max-w-lg">
            Choose a customer intent bucket, jump into the configured product
            stack, and keep the triage process in one place seamlessly.
          </p>
        </div>

        {/* Right: Interactive Analytics Cards */}
        <div className="flex flex-wrap md:flex-nowrap items-center gap-4 w-full md:w-auto">
          <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs flex flex-col min-w-[130px] flex-1 md:flex-initial">
            <h3 className="text-[11px] font-bold text-slate-400 tracking-wider uppercase mb-1 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-purple-500" /> Matches
            </h3>
            <span className="text-2xl font-black text-slate-800 transition-all duration-300">
              {processedCategories.length}
            </span>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs flex flex-col min-w-[130px] flex-1 md:flex-initial">
            <h3 className="text-[11px] font-bold text-slate-400 tracking-wider uppercase mb-1 flex items-center gap-1.5">
              <RefreshCw className="w-3.5 h-3.5 text-emerald-500 animate-spin-slow" /> Sync
            </h3>
            <span className="text-2xl font-black text-slate-800 text-nowrap">Live</span>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm flex flex-col justify-between gap-2 min-w-[200px] w-full md:w-auto">
            <h3 className="text-[11px] font-bold text-purple-700 tracking-wider uppercase flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 fill-purple-600 text-purple-600" /> Quick Flow
            </h3>
            <button 
              type="button"
              className="w-full bg-purple-700 hover:bg-purple-800 active:scale-[0.98] text-white text-xs font-semibold py-2.5 px-4 rounded-lg transition-all shadow-sm shadow-purple-200"
              onClick={() => handleOpenForm(null)}
            >
              Create manual lead
            </button>
          </div>
        </div>
      </div>

      {/* 3. Category Workspace Layout Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* LEFT COLUMN: Main Categorization Engine */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs">
            
            {/* Action Bar / Filtering Tools */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-2">
                <h2 className="text-base font-bold text-slate-900">Category Workspace</h2>
                <span className="text-[11px] font-bold bg-purple-50 text-purple-700 px-2.5 py-0.5 rounded-full">
                  {categoriesData.length} Total
                </span>
              </div>
              
              <div className="flex items-center gap-2 w-full sm:w-auto">
                {/* Modernized Search input styling */}
                <div className="relative flex-1 sm:flex-initial">
                  <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search context..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full sm:w-48 text-xs border border-slate-200 rounded-lg pl-9 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-600 transition-all bg-slate-50/50"
                  />
                </div>
                {/* Functional Sort Filter */}
                <button 
                  onClick={() => setIsAscending(!isAscending)}
                  className="border border-slate-200 rounded-lg px-3 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50 active:bg-slate-100 flex items-center gap-1 transition-all shadow-2xs"
                  title="Sort Direction"
                >
                  A-Z {isAscending ? "↑" : "↓"}
                </button>
              </div>
            </div>

            {/* Grid layout of Dynamic Category Cards */}
            {processedCategories.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {processedCategories.map((category) => {
                  const IconComponent = category.icon;
                  return (
                    <button
                      key={category.id}
                      type="button"
                      onClick={() => handleOpenForm(category)}
                      className={`flex flex-col items-center justify-center text-center p-5 bg-white border border-slate-100 rounded-xl hover:shadow-md hover:shadow-slate-100/80 ${category.borderColor} group transition-all duration-200 min-h-[160px] cursor-pointer relative top-0 hover:-top-0.5`}
                    >
                      <div className={`p-3 rounded-xl ${category.bgIcon} ${category.textIcon} mb-3.5 transition-transform group-hover:scale-110`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h3 className="font-bold text-slate-800 text-sm mb-1.5 group-hover:text-purple-700 transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-[11px] text-slate-400 leading-normal max-w-[150px]">
                        Tap to initiate tailored flow sheet
                      </p>
                    </button>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-12 border border-dashed border-slate-200 rounded-xl">
                <p className="text-sm text-slate-400 font-medium">No target categories matched your search filters.</p>
              </div>
            )}
          </div>

          {/* Quick Capture Quick-clickable Presets */}
          <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Recently Used Shortcuts</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {categoriesData.map((preset) => (
                <button
                  key={preset.id}
                  onClick={() => handleOpenForm(preset)}
                  className="text-xs text-slate-700 bg-slate-50 hover:bg-purple-50 hover:text-purple-700 hover:border-purple-200 border border-slate-200 px-3 py-1.5 rounded-lg font-medium cursor-pointer transition-all active:scale-95"
                >
                  {preset.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Real-time Operational Sidebar Panels */}
        <div className="space-y-6">
          
          {/* Compliance Checklist */}
          <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs">
            <h4 className="text-[11px] font-bold text-slate-400 tracking-wider uppercase mb-4">
              Dispatch Checklist
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <p className="text-xs text-slate-600 leading-relaxed">
                  Verify explicit customer consent plus standard identity elements before routing.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <Zap className="w-4 h-4 text-amber-500 shrink-0 mt-0.5 fill-amber-50" />
                <p className="text-xs text-slate-600 leading-relaxed">
                  Capture deep triage notes so downstream product units skip initial discoveries.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <Lock className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                <p className="text-xs text-slate-600 leading-relaxed">
                  Data validation protocols securely encrypt sensitive workflows at REST.
                </p>
              </li>
            </ul>
          </div>

          {/* Core Analytics Snapshot */}
          <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs">
            <h4 className="text-[11px] font-bold text-slate-400 tracking-wider uppercase mb-3">
              Routing Snapshot
            </h4>
            <div className="divide-y divide-slate-100">
              <div className="flex justify-between items-center py-2.5">
                <span className="text-xs text-slate-500">Product desks active</span>
                <span className="text-xs font-semibold bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md">08 pods online</span>
              </div>
              <div className="flex justify-between items-center py-2.5">
                <span className="text-xs text-slate-500">Avg. assign time</span>
                <span className="text-xs font-bold text-slate-800">14 minutes</span>
              </div>
              <div className="flex justify-between items-center py-2.5">
                <span className="text-xs text-slate-500">SLA breaches today</span>
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">0</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. MODAL DRAWER FORM MODULE */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="bg-white rounded-2xl max-w-md w-full shadow-xl border border-slate-200 overflow-hidden transform transition-transform scale-100 duration-300">
            
            {/* Modal Header */}
            <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-purple-100 text-purple-700 rounded-lg">
                  {selectedCategory ? React.createElement(selectedCategory.icon, { className: "w-4 h-4" }) : <FileText className="w-4 h-4" />}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">
                    {selectedCategory ? `${selectedCategory.title} Flow` : "New Lead Form"}
                  </h3>
                  <p className="text-[10px] text-slate-400">Intent Routing Pipeline Entry</p>
                </div>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 hover:bg-slate-200/70 rounded-lg transition-colors cursor-pointer text-slate-400 hover:text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Form inputs */}
            <form onSubmit={handleSubmit} className="p-5 space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1.5">Full Name *</label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter customer name"
                    className="w-full text-xs border border-slate-200 rounded-lg pl-9 pr-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-600 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1.5">Phone Line *</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="10-digit number"
                      className="w-full text-xs border border-slate-200 rounded-lg pl-9 pr-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-600 transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1.5">Email *</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="name@domain.com"
                      className="w-full text-xs border border-slate-200 rounded-lg pl-9 pr-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-600 transition-all"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1.5">Discovery Intent Notes</label>
                <textarea
                  name="notes"
                  rows="3"
                  value={formData.notes}
                  onChange={handleInputChange}
                  placeholder="Context details (e.g. Requested structural timeline updates...)"
                  className="w-full text-xs border border-slate-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-600 transition-all resize-none"
                ></textarea>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-xs font-semibold text-slate-500 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-semibold text-white bg-purple-700 hover:bg-purple-800 rounded-lg shadow-sm transition-all cursor-pointer active:scale-95"
                >
                  Dispatch Lead
                </button>
              </div>
            </form>

          </div>
        </div>
      )}
    </div>
  );
};

export default AddLead;