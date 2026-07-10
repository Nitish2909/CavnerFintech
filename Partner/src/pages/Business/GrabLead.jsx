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
    <div className="min-h-screen bg-slate-50/50 p-4 sm:p-6 md:p-8 font-sans antialiased">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* 1. Header Section */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="p-2.5 hover:bg-white hover:text-purple-700 text-slate-600 rounded-xl transition-all duration-200 bg-white shadow-sm border border-slate-200/80 active:scale-95"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-3">
                <span className="p-2 bg-purple-100 rounded-xl inline-flex items-center justify-center">
                  <User className="w-5 h-5 text-purple-700" />
                </span>
                Grab Lead
              </h1>
            </div>
          </div>
        </div>

        {/* 2. Form Section */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm transition-all duration-300 hover:shadow-md/50">
          <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row items-stretch lg:items-end gap-4">
            
            {/* Customer Name */}
            <div className="flex-1 flex flex-col gap-1.5">
              <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                Customer Name
              </label>
              <input
                name="customerName"
                type="text"
                placeholder="e.g. John Doe"
                value={formData.customerName}
                onChange={handleChange}
                className="w-full px-3.5 py-2 bg-slate-50/50 border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-200"
              />
            </div>

            {/* Mobile Number */}
            <div className="flex-1 flex flex-col gap-1.5">
              <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                Mobile Number
              </label>
              <input
                name="mobileNumber"
                type="tel"
                placeholder="e.g. 9876543210"
                value={formData.mobileNumber}
                onChange={handleChange}
                className="w-full px-3.5 py-2 bg-slate-50/50 border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-200"
              />
            </div>

            {/* Pin Code */}
            <div className="flex-1 flex flex-col gap-1.5">
              <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                Pin Code
              </label>
              <input
                name="pinCode"
                type="text"
                placeholder="e.g. 400001"
                value={formData.pinCode}
                onChange={handleChange}
                className="w-full px-3.5 py-2 bg-slate-50/50 border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-200"
              />
            </div>

            {/* Calendar */}
            <div className="flex-1 flex flex-col gap-1.5">
              <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                Calendar
              </label>
              <input
                name="calendar"
                type="date"
                value={formData.calendar}
                onChange={handleChange}
                className="w-full px-3.5 py-2 bg-slate-50/50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:bg-white focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-200"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2.5 pt-2 lg:pt-0">
              <button
                type="submit"
                className="flex-1 lg:flex-none px-5 py-2 bg-purple-700 text-white text-sm font-semibold rounded-xl hover:bg-purple-800 shadow-sm shadow-purple-200/50 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
              >
                <Filter className="w-4 h-4" />
                Filter
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="flex-1 lg:flex-none px-5 py-2 bg-slate-100 text-slate-700 text-sm font-semibold rounded-xl hover:bg-slate-200 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                Reset
              </button>
            </div>
          </form>
        </div>

        {/* 3. Analytics/Metrics Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Card 1 */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200/70 shadow-sm flex items-start justify-between hover:border-purple-200 transition-all duration-200 group">
            <div className="space-y-1">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Open Leads</p>
              <h3 className="text-3xl font-bold text-slate-900 tracking-tight">2,090</h3>
              <p className="text-xs text-purple-600 font-medium pt-1">Leads Ready To Grab</p>
            </div>
            <div className="p-2.5 bg-purple-50 rounded-xl text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
              <Search className="w-5 h-5" />
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200/70 shadow-sm flex items-start justify-between hover:border-emerald-200 transition-all duration-200 group">
            <div className="space-y-1">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Capture Today</p>
              <h3 className="text-3xl font-bold text-slate-900 tracking-tight">5</h3>
              <p className="text-xs text-emerald-600 font-medium pt-1">Claim Today</p>
            </div>
            <div className="p-2.5 bg-emerald-50 rounded-xl text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
              <CheckCircle className="w-5 h-5" />
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200/70 shadow-sm flex items-start justify-between hover:border-blue-200 transition-all duration-200 group">
            <div className="space-y-1">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Unique Product</p>
              <h3 className="text-3xl font-bold text-slate-900 tracking-tight">2</h3>
              <p className="text-xs text-blue-600 font-medium pt-1">Active Categories</p>
            </div>
            <div className="p-2.5 bg-blue-50 rounded-xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
              <Layers className="w-5 h-5" />
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200/70 shadow-sm flex items-start justify-between hover:border-amber-200 transition-all duration-200 group">
            <div className="space-y-1">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Avg. Ticket</p>
              <h3 className="text-3xl font-bold text-slate-900 tracking-tight">₹0</h3>
              <p className="text-xs text-amber-600 font-medium pt-1">Requirement Trend</p>
            </div>
            <div className="p-2.5 bg-amber-50 rounded-xl text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
              <TrendingUp className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* 4. Table Section */}
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/70">
                  <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider w-16">#</th>
                  <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider">Lead Snapshot</th>
                  <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider">Customer Profile</th>
                  <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider">Contact</th>
                  <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider">Location</th>
                  <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider">Requirements</th>
                  <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider text-right">Status & Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {displayedLeads.length > 0 ? (
                  displayedLeads.map((lead, index) => (
                    <tr key={lead.id} className="hover:bg-slate-50/50 transition-colors group">
                      <td className="px-6 py-4 text-sm font-medium text-slate-400">
                        {((currentPage - 1) * itemsPerPage) + index + 1}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2 text-sm text-slate-600">
                          <CalendarIcon className="w-4 h-4 text-slate-400" />
                          <span>{lead.date}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="space-y-0.5">
                          <p className="text-sm font-semibold text-slate-800">{lead.name}</p>
                          <p className="text-xs text-slate-400">{lead.profile}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2 text-sm text-slate-600">
                          <Phone className="w-4 h-4 text-slate-400" />
                          <span>{lead.contact}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2 text-sm text-slate-600">
                          <MapPin className="w-4 h-4 text-slate-400" />
                          <span>{lead.location}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium bg-purple-50 text-purple-700 border border-purple-100">
                          {lead.requirements}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-3">
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700">
                            {lead.status}
                          </span>
                          <button
                            type="button"
                            className="px-3.5 py-1.5 bg-purple-600 hover:bg-purple-700 text-white text-xs font-semibold rounded-lg shadow-sm transition-all active:scale-95"
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
                    <td colSpan="7" className="px-6 py-10 text-center text-sm text-slate-400 font-medium">
                      No leads match your active filters.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination Footer */}
          <div className="bg-white px-6 py-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-slate-500 font-medium">
              Showing page <span className="text-slate-800 font-semibold">{currentPage}</span> of{" "}
              <span className="text-slate-800 font-semibold">{totalPages}</span>
            </div>
            
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                disabled={currentPage === 1}
                className="p-2 border border-slate-200 rounded-xl hover:bg-slate-50 text-slate-600 disabled:opacity-40 disabled:hover:bg-transparent disabled:cursor-not-allowed transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {[...Array(totalPages)].map((_, i) => {
                const pageNum = i + 1;
                return (
                  <button
                    key={pageNum}
                    type="button"
                    onClick={() => setCurrentPage(pageNum)}
                    className={`min-w-[36px] h-9 text-xs font-bold rounded-xl transition-all ${
                      currentPage === pageNum
                        ? "bg-purple-700 text-white shadow-sm shadow-purple-100"
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
                className="p-2 border border-slate-200 rounded-xl hover:bg-slate-50 text-slate-600 disabled:opacity-40 disabled:hover:bg-transparent disabled:cursor-not-allowed transition-all"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default GrabLead;