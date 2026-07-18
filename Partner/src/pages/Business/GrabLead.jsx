import React, { useState, useMemo } from "react";
import { 
  ArrowLeft, 
  User, 
  Search, 
  CheckCircle, 
  Layers, 
  TrendingUp, 
  Filter, 
  RotateCcw,
  MapPin,
  Phone,
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

const GrabLead = () => {
  // 1. Form Inputs State (Tracks keystrokes)
  const [formData, setFormData] = useState({
    customerName: "",
    mobileNumber: "",
    pinCode: "",
    calendar: "",
  });

  // 2. Applied Filters State (Only updates on form Submit/Reset)
  const [appliedFilters, setAppliedFilters] = useState({
    customerName: "",
    mobileNumber: "",
    pinCode: "",
    calendar: "",
  });

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);

  // Mock data to demonstrate table rendering
  const mockLeads = [
    {
      id: 1,
      date: "2026-07-10",
      name: "Nitish Kumar",
      profile: "Premium Tier",
      contact: "+91 98765 43210",
      location: "Mumbai, 400001",
      requirements: "Home Loan - ₹50L",
      status: "Available"
    },
    {
      id: 2,
      date: "2026-07-09",
      name: "Rakesh Kumar",
      profile: "Standard Tier",
      contact: "+91 98765 12345",
      location: "Delhi, 110001",
      requirements: "Personal Loan - ₹5L",
      status: "Available"
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handles filtering when submission triggers
  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentPage(1); 
    setAppliedFilters({ ...formData }); // Locks in the typed fields to filter dataset
  };

  const handleReset = (e) => {
    e.preventDefault();
    const clearedForm = {
      customerName: "",
      mobileNumber: "",
      pinCode: "",
      calendar: "",
    };
    setFormData(clearedForm);
    setAppliedFilters(clearedForm); // Clears the locked filters
    setCurrentPage(1);
  };

  // 3. Derived State: Filtered dataset using useMemo for performance
  const filteredLeads = useMemo(() => {
    return mockLeads.filter((lead) => {
      const matchName = !appliedFilters.customerName || 
        lead.name.toLowerCase().includes(appliedFilters.customerName.toLowerCase());
      
      const matchMobile = !appliedFilters.mobileNumber || 
        lead.contact.replace(/\s+/g, "").includes(appliedFilters.mobileNumber);
      
      const matchPin = !appliedFilters.pinCode || 
        lead.location.toLowerCase().includes(appliedFilters.pinCode.toLowerCase());
      
      const matchDate = !appliedFilters.calendar || 
        lead.date === appliedFilters.calendar;

      return matchName && matchMobile && matchPin && matchDate;
    });
  }, [appliedFilters]);

  // Adjust pagination constraints dynamically based on results length
  const itemsPerPage = 2; // Matching mock array size for demonstration
  const totalPages = Math.ceil(filteredLeads.length / itemsPerPage) || 1;
  
  // Slice dataset if you plan to introduce dynamic front-end paging later
  const displayedLeads = filteredLeads.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-purple-50/20 p-4 sm:p-6 md:p-10 font-sans antialiased selection:bg-purple-100 selection:text-purple-900">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* 1. Header Section */}
        <div className="flex items-center justify-between pb-2 border-b border-slate-200/60">
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="p-3 bg-white text-slate-600 rounded-xl transition-all duration-300 shadow-sm border border-slate-200 hover:text-purple-700 hover:border-purple-200 hover:shadow-md hover:shadow-purple-50 active:scale-95 cursor-pointer"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="w-5 h-5 stroke-[2.5]" />
            </button>
            <div className="flex items-center gap-3.5">
              <span className="p-2.5 bg-gradient-to-tr from-purple-600 to-indigo-600 rounded-xl inline-flex items-center justify-center shadow-md shadow-purple-200 text-white">
                <User className="w-5 h-5 stroke-[2.2]" />
              </span>
              <div>
                <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight sm:text-3xl">
                  Grab Lead
                </h1>
                <p className="text-xs font-medium text-slate-400 mt-0.5">Manage and scale matching customer requests</p>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Form Section */}
        <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-slate-200/80 shadow-xl shadow-slate-100/50">
          <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row items-stretch lg:items-end gap-5">
            
            {/* Customer Name */}
            <div className="flex-1 flex flex-col gap-2">
              <label className="text-xs font-semibold text-slate-600 tracking-wide">
                Customer Name
              </label>
              <input
                name="customerName"
                type="text"
                placeholder="e.g. John Doe"
                value={formData.customerName}
                onChange={handleChange}
                className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-purple-500/10 focus:border-purple-500 transition-all duration-200 shadow-sm"
              />
            </div>

            {/* Mobile Number */}
            <div className="flex-1 flex flex-col gap-2">
              <label className="text-xs font-semibold text-slate-600 tracking-wide">
                Mobile Number
              </label>
              <input
                name="mobileNumber"
                type="tel"
                placeholder="e.g. 9876543210"
                value={formData.mobileNumber}
                onChange={handleChange}
                className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-purple-500/10 focus:border-purple-500 transition-all duration-200 shadow-sm"
              />
            </div>

            {/* Pin Code */}
            <div className="flex-1 flex flex-col gap-2">
              <label className="text-xs font-semibold text-slate-600 tracking-wide">
                Pin Code
              </label>
              <input
                name="pinCode"
                type="text"
                placeholder="e.g. 400001"
                value={formData.pinCode}
                onChange={handleChange}
                className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-purple-500/10 focus:border-purple-500 transition-all duration-200 shadow-sm"
              />
            </div>

            {/* Calendar */}
            <div className="flex-1 flex flex-col gap-2">
              <label className="text-xs font-semibold text-slate-600 tracking-wide">
                Calendar Date
              </label>
              <input
                name="calendar"
                type="date"
                value={formData.calendar}
                onChange={handleChange}
                className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-4 focus:ring-purple-500/10 focus:border-purple-500 transition-all duration-200 shadow-sm cursor-pointer"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3 pt-3 lg:pt-0">
              <button
                type="submit"
                className="flex-1 lg:flex-none px-6 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white text-sm font-semibold rounded-xl shadow-md shadow-purple-200 transition-all hover:shadow-lg hover:shadow-purple-200 active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
              >
                <Filter className="w-4 h-4 stroke-[2.2]" />
                Filter
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="flex-1 lg:flex-none px-6 py-2.5 bg-slate-100 text-slate-700 text-sm font-semibold rounded-xl hover:bg-slate-200 hover:text-slate-900 transition-all active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer border border-slate-200/40"
              >
                <RotateCcw className="w-4 h-4 stroke-[2.2]" />
                Reset
              </button>
            </div>
          </form>
        </div>

        {/* 3. Analytics/Metrics Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-md shadow-slate-100/60 flex items-start justify-between hover:border-purple-300 hover:shadow-lg transition-all duration-300 group">
            <div className="space-y-2">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Open Leads</p>
              <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight">2,090</h3>
              <div className="inline-block px-2 py-0.5 bg-purple-50 rounded-md">
                <p className="text-[11px] text-purple-700 font-semibold">Leads Ready To Grab</p>
              </div>
            </div>
            <div className="p-3 bg-purple-50/80 rounded-xl text-purple-600 group-hover:bg-purple-600 group-hover:text-white group-hover:shadow-md group-hover:shadow-purple-200 transition-all duration-300">
              <Search className="w-5 h-5 stroke-[2.2]" />
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-md shadow-slate-100/60 flex items-start justify-between hover:border-emerald-300 hover:shadow-lg transition-all duration-300 group">
            <div className="space-y-2">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Capture Today</p>
              <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight">5</h3>
              <div className="inline-block px-2 py-0.5 bg-emerald-50 rounded-md">
                <p className="text-[11px] text-emerald-700 font-semibold">Claim Today</p>
              </div>
            </div>
            <div className="p-3 bg-emerald-50/80 rounded-xl text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white group-hover:shadow-md group-hover:shadow-emerald-200 transition-all duration-300">
              <CheckCircle className="w-5 h-5 stroke-[2.2]" />
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-md shadow-slate-100/60 flex items-start justify-between hover:border-blue-300 hover:shadow-lg transition-all duration-300 group">
            <div className="space-y-2">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Unique Product</p>
              <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight">2</h3>
              <div className="inline-block px-2 py-0.5 bg-blue-50 rounded-md">
                <p className="text-[11px] text-blue-700 font-semibold">Active Categories</p>
              </div>
            </div>
            <div className="p-3 bg-blue-50/80 rounded-xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-md group-hover:shadow-blue-200 transition-all duration-300">
              <Layers className="w-5 h-5 stroke-[2.2]" />
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-md shadow-slate-100/60 flex items-start justify-between hover:border-amber-300 hover:shadow-lg transition-all duration-300 group">
            <div className="space-y-2">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Avg. Ticket</p>
              <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight">₹0</h3>
              <div className="inline-block px-2 py-0.5 bg-amber-50 rounded-md">
                <p className="text-[11px] text-amber-700 font-semibold">Requirement Trend</p>
              </div>
            </div>
            <div className="p-3 bg-amber-50/80 rounded-xl text-amber-600 group-hover:bg-amber-600 group-hover:text-white group-hover:shadow-md group-hover:shadow-amber-200 transition-all duration-300">
              <TrendingUp className="w-5 h-5 stroke-[2.2]" />
            </div>
          </div>
        </div>

        {/* 4. Table Section */}
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xl shadow-slate-100/40 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/75">
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider w-20">#</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Lead Snapshot</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Customer Profile</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Contact</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Location</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Requirements</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Status & Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {displayedLeads.length > 0 ? (
                  displayedLeads.map((lead, index) => (
                    <tr key={lead.id} className="hover:bg-slate-50/60 transition-colors group">
                      <td className="px-6 py-5 text-sm font-bold text-slate-400">
                        {String(((currentPage - 1) * itemsPerPage) + index + 1).padStart(2, '0')}
                      </td>
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-2 text-sm text-slate-700 font-medium bg-slate-100/80 px-2.5 py-1 rounded-lg w-fit border border-slate-200/30">
                          <CalendarIcon className="w-4 h-4 text-slate-400 stroke-[2]" />
                          <span>{lead.date}</span>
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <div className="space-y-0.5">
                          <p className="text-sm font-semibold text-slate-900 group-hover:text-purple-700 transition-colors">{lead.name}</p>
                          <p className="text-xs font-medium text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded border border-slate-100 w-fit">{lead.profile}</p>
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                          <Phone className="w-4 h-4 text-slate-400 stroke-[2]" />
                          <span>{lead.contact}</span>
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                          <MapPin className="w-4 h-4 text-slate-400 stroke-[2]" />
                          <span>{lead.location}</span>
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <span className="inline-flex items-center px-3 py-1 rounded-xl text-xs font-semibold bg-purple-50 text-purple-700 border border-purple-100 shadow-sm shadow-purple-50">
                          {lead.requirements}
                        </span>
                      </td>
                      <td className="px-6 py-5 text-right">
                        <div className="flex items-center justify-end gap-4">
                          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-100">
                            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-1.5 animate-pulse" />
                            {lead.status}
                          </span>
                          <button
                            type="button"
                            className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold rounded-xl shadow-sm shadow-purple-100 transition-all hover:shadow-md hover:shadow-purple-200 active:scale-95 cursor-pointer"
                            onClick={() => console.log(`Grabbing lead ${lead.id}`)}
                          >
                            Grab Lead
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="px-6 py-14 text-center text-sm text-slate-400 font-semibold bg-slate-50/20">
                      <div className="max-w-xs mx-auto space-y-2">
                        <p className="text-slate-700 font-bold text-base">No matches found</p>
                        <p className="text-xs text-slate-400 font-medium">Try adjusting your active filters or clear search keys entirely.</p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination Footer */}
          <div className="bg-white px-6 py-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-slate-500 font-medium">
              Showing page <span className="text-slate-800 font-bold">{currentPage}</span> of{" "}
              <span className="text-slate-800 font-bold">{totalPages}</span>
            </div>
            
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                disabled={currentPage === 1}
                className="p-2 border border-slate-200 rounded-xl hover:bg-slate-50 text-slate-600 disabled:opacity-40 disabled:hover:bg-transparent disabled:cursor-not-allowed transition-all shadow-sm cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4 stroke-[2.2]" />
              </button>

              {[...Array(totalPages)].map((_, i) => {
                const pageNum = i + 1;
                return (
                  <button
                    key={pageNum}
                    type="button"
                    onClick={() => setCurrentPage(pageNum)}
                    className={`min-w-[36px] h-9 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                      currentPage === pageNum
                        ? "bg-gradient-to-tr from-purple-600 to-indigo-600 text-white shadow-md shadow-purple-200"
                        : "border border-slate-200 text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}

              <button
                type="button"
                onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="p-2 border border-slate-200 rounded-xl hover:bg-slate-50 text-slate-600 disabled:opacity-40 disabled:hover:bg-transparent disabled:cursor-not-allowed transition-all shadow-sm cursor-pointer"
              >
                <ChevronRight className="w-4 h-4 stroke-[2.2]" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default GrabLead;