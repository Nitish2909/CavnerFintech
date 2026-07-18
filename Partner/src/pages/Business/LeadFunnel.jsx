import React, { useState, useMemo } from 'react';
import { 
  Calendar as CalendarIcon, 
  User, 
  Phone, 
  Package, 
  MapPin, 
  PhoneCall, 
  Search, 
  RefreshCw, 
  Check, 
  Download, 
  Users,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

// --- INITIAL MOCK DATA ---
const INITIAL_LEADS = [
  { id: 1, grabBy: "John Doe", mobile: "9876543210", leadStatus: "Grabbed", product: "SaaS Enterprise", source: "Referral", callStatus: "Connected", statusKeyword: "callback", customer: "Acme Corp", requirement: "50 Licenses", created: "2026-07-10" },
  { id: 2, grabBy: "Jane Smith", mobile: "8765432109", leadStatus: "Grabbed", product: "Cloud Storage", source: "Online", callStatus: "Callback", statusKeyword: "followup", customer: "Stark Ind.", requirement: "2TB Plan", created: "2026-07-09" },
  { id: 3, grabBy: "", mobile: "7654321098", leadStatus: "Not Grabbed", product: "SaaS Enterprise", source: "Online", callStatus: "Not Contacted", statusKeyword: "new", customer: "Wayne Ent.", requirement: "10 Licenses", created: "2026-07-10" },
  { id: 4, grabBy: "John Doe", mobile: "6543210987", leadStatus: "Highest Lead", product: "Cybersecurity", source: "Referral", callStatus: "Connected", statusKeyword: "urgent", customer: "Oscorp", requirement: "Full Audit", created: "2026-07-08" },
];

export default function LeadFunnel() {
  // --- STATE ---
  const [leads, setLeads] = useState(INITIAL_LEADS);
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [globalSearch, setGlobalSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // Filter Form State
  const [filters, setFilters] = useState({
    grabBy: '',
    mobile: '',
    leadStatus: 'Any status',
    product: '',
    source: '',
    callStatus: '',
    statusKeyword: '',
    date: ''
  });

  // Submitted Filters State (Only applies when clicking "Apply")
  const [appliedFilters, setAppliedFilters] = useState({ ...filters });

  // --- HANDLERS ---
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleApplyFilters = () => {
    setAppliedFilters({ ...filters });
    setCurrentPage(1);
  };

  const handleResetFilters = () => {
    const cleared = {
      grabBy: '',
      mobile: '',
      leadStatus: 'Any status',
      product: '',
      source: '',
      callStatus: '',
      statusKeyword: '',
      date: ''
    };
    setFilters(cleared);
    setAppliedFilters(cleared);
    setCurrentPage(1);
  };

  // --- FILTER & SEARCH LOGIC ---
  const filteredLeads = useMemo(() => {
    return leads.filter(lead => {
      // Form Quick Filters
      if (appliedFilters.grabBy && !lead.grabBy.toLowerCase().includes(appliedFilters.grabBy.toLowerCase())) return false;
      if (appliedFilters.mobile && !lead.mobile.includes(appliedFilters.mobile)) return false;
      if (appliedFilters.leadStatus !== 'Any status' && lead.leadStatus !== appliedFilters.leadStatus) return false;
      if (appliedFilters.product && !lead.product.toLowerCase().includes(appliedFilters.product.toLowerCase())) return false;
      if (appliedFilters.source && !lead.source.toLowerCase().includes(appliedFilters.source.toLowerCase())) return false;
      if (appliedFilters.callStatus && !lead.callStatus.toLowerCase().includes(appliedFilters.callStatus.toLowerCase())) return false;
      if (appliedFilters.statusKeyword && !lead.statusKeyword.toLowerCase().includes(appliedFilters.statusKeyword.toLowerCase())) return false;
      if (appliedFilters.date && lead.created !== appliedFilters.date) return false;

      // Global Table Search
      if (globalSearch) {
        const searchLower = globalSearch.toLowerCase();
        return (
          lead.grabBy.toLowerCase().includes(searchLower) ||
          lead.customer.toLowerCase().includes(searchLower) ||
          lead.mobile.includes(searchLower) ||
          lead.product.toLowerCase().includes(searchLower)
        );
      }

      return true;
    });
  }, [leads, appliedFilters, globalSearch]);

  // --- KPI COUNTS ---
  const kpis = useMemo(() => {
    const todayStr = new Date().toISOString().split('T')[0]; // 2026-07-10 style
    return {
      todayLeads: filteredLeads.filter(l => l.created === todayStr).length,
      notGrabbed: filteredLeads.filter(l => l.leadStatus === "Not Grabbed").length,
      grabbed: filteredLeads.filter(l => l.leadStatus === "Grabbed").length,
      highestLead: filteredLeads.filter(l => l.leadStatus === "Highest Lead").length,
    };
  }, [filteredLeads]);

  // --- PAGINATION ---
  const totalEntries = filteredLeads.length;
  const totalPages = Math.ceil(totalEntries / entriesPerPage) || 1;
  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = filteredLeads.slice(indexOfFirstEntry, indexOfLastEntry);

  return (
    <div className="min-h-screen bg-slate-50/70 p-4 sm:p-8 font-sans text-slate-600 antialiased">
      
      {/* --- HEADER --- */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 border-b border-slate-200/60 pb-5">
        <div>
          <span className="text-xs font-bold text-indigo-600 tracking-widest uppercase block mb-1">Pipeline Workspace</span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Lead Capture &amp; Routing</h1>
          <p className="text-sm text-slate-500 mt-1">Keep an eye on every lead movement, call touchpoint, and assignment state.</p>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button className="flex-1 sm:flex-initial flex items-center justify-center gap-2 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-700 transition-all shadow-sm active:scale-95">
            <Download size={16} className="text-slate-500" /> Export
          </button>
          <button className="flex-1 sm:flex-initial flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-4 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-sm active:scale-95 shadow-slate-900/10">
            <Users size={16} /> View Team
          </button>
        </div>
      </div>

      {/* --- KPI METRIC CARDS --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        {/* Today Leads */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-sm flex items-center gap-4 hover:shadow-md transition-all duration-200 group">
          <div className="p-3.5 rounded-xl bg-blue-50 text-blue-600 group-hover:scale-105 transition-transform">
            <CalendarIcon size={22} />
          </div>
          <div>
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Today Leads</div>
            <div className="text-2xl font-black text-slate-900 mt-0.5">{kpis.todayLeads}</div>
          </div>
        </div>
        {/* Not Grabbed */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-sm flex items-center gap-4 hover:shadow-md transition-all duration-200 group">
          <div className="p-3.5 rounded-xl bg-amber-50 text-amber-600 group-hover:scale-105 transition-transform">
            <RefreshCw size={22} className="animate-[spin_4s_linear_infinite]" />
          </div>
          <div>
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Not Grabbed</div>
            <div className="text-2xl font-black text-slate-900 mt-0.5">{kpis.notGrabbed}</div>
          </div>
        </div>
        {/* Grabbed */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-sm flex items-center gap-4 hover:shadow-md transition-all duration-200 group">
          <div className="p-3.5 rounded-xl bg-emerald-50 text-emerald-600 group-hover:scale-105 transition-transform">
            <Check size={22} />
          </div>
          <div>
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Grabbed</div>
            <div className="text-2xl font-black text-slate-900 mt-0.5">{kpis.grabbed}</div>
          </div>
        </div>
        {/* Highest Lead */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-sm flex items-center gap-4 hover:shadow-md transition-all duration-200 group">
          <div className="p-3.5 rounded-xl bg-violet-50 text-violet-600 group-hover:scale-105 transition-transform">
            <Users size={22} />
          </div>
          <div>
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Highest Lead</div>
            <div className="text-2xl font-black text-slate-900 mt-0.5">{kpis.highestLead}</div>
          </div>
        </div>
      </div>

      {/* --- QUICK FILTERS PANEL --- */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 mb-8 relative overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4 border-b border-slate-100 pb-4">
          <div>
            <span className="text-[11px] font-bold text-indigo-500 uppercase tracking-wider block mb-0.5">Segment Engine</span>
            <h3 className="text-lg font-bold text-slate-900 tracking-tight">Slice Lead Board</h3>
          </div>
          <div className="flex gap-2.5 self-end sm:self-center">
            <button 
              onClick={handleResetFilters}
              className="px-4 py-2 border border-slate-200 text-slate-600 hover:bg-slate-50 font-semibold text-sm rounded-xl transition active:scale-95"
            >
              Reset
            </button>
            <button 
              onClick={handleApplyFilters}
              className="px-5 py-2 bg-indigo-600 text-white hover:bg-indigo-700 font-semibold text-sm rounded-xl transition shadow-sm active:scale-95 shadow-indigo-600/10"
            >
              Apply Filter
            </button>
          </div>
        </div>

        {/* Filters Matrix Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Grab By */}
          <div>
            <label className="text-xs font-bold text-slate-700 mb-1.5 block">Grab By</label>
            <div className="relative">
              <User size={16} className="absolute left-3 top-3 text-slate-400" />
              <input 
                type="text" name="grabBy" value={filters.grabBy} onChange={handleFilterChange}
                placeholder="e.g. Agent name" 
                className="w-full pl-9 pr-3 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-colors bg-slate-50/50 placeholder:text-slate-400 text-slate-800"
              />
            </div>
          </div>

          {/* Mobile no. */}
          <div>
            <label className="text-xs font-bold text-slate-700 mb-1.5 block">Mobile No.</label>
            <div className="relative">
              <Phone size={16} className="absolute left-3 top-3 text-slate-400" />
              <input 
                type="text" name="mobile" value={filters.mobile} onChange={handleFilterChange}
                placeholder="Customer number" 
                className="w-full pl-9 pr-3 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-colors bg-slate-50/50 placeholder:text-slate-400 text-slate-800"
              />
            </div>
          </div>

          {/* Lead status dropdown */}
          <div>
            <label className="text-xs font-bold text-slate-700 mb-1.5 block">Lead Status</label>
            <div className="relative">
              <select 
                name="leadStatus" value={filters.leadStatus} onChange={handleFilterChange}
                className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-colors bg-slate-50/50 appearance-none text-slate-800 font-medium cursor-pointer"
              >
                <option>Any status</option>
                <option>Grabbed</option>
                <option>Not Grabbed</option>
                <option>Highest Lead</option>
              </select>
              <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-slate-400">
                <ChevronRight size={14} className="transform rotate-90" />
              </div>
            </div>
          </div>

          {/* Product */}
          <div>
            <label className="text-xs font-bold text-slate-700 mb-1.5 block">Product</label>
            <div className="relative">
              <Package size={16} className="absolute left-3 top-3 text-slate-400" />
              <input 
                type="text" name="product" value={filters.product} onChange={handleFilterChange}
                placeholder="Product name" 
                className="w-full pl-9 pr-3 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-colors bg-slate-50/50 placeholder:text-slate-400 text-slate-800"
              />
            </div>
          </div>

          {/* Source */}
          <div>
            <label className="text-xs font-bold text-slate-700 mb-1.5 block">Source</label>
            <div className="relative">
              <MapPin size={16} className="absolute left-3 top-3 text-slate-400" />
              <input 
                type="text" name="source" value={filters.source} onChange={handleFilterChange}
                placeholder="Referral, online..." 
                className="w-full pl-9 pr-3 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-colors bg-slate-50/50 placeholder:text-slate-400 text-slate-800"
              />
            </div>
          </div>

          {/* Call Status */}
          <div>
            <label className="text-xs font-bold text-slate-700 mb-1.5 block">Call Status</label>
            <div className="relative">
              <PhoneCall size={16} className="absolute left-3 top-3 text-slate-400" />
              <input 
                type="text" name="callStatus" value={filters.callStatus} onChange={handleFilterChange}
                placeholder="Call state" 
                className="w-full pl-9 pr-3 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-colors bg-slate-50/50 placeholder:text-slate-400 text-slate-800"
              />
            </div>
          </div>

          {/* Status Keyword */}
          <div>
            <label className="text-xs font-bold text-slate-700 mb-1.5 block">Status Keyword</label>
            <div className="relative">
              <Search size={16} className="absolute left-3 top-3 text-slate-400" />
              <input 
                type="text" name="statusKeyword" value={filters.statusKeyword} onChange={handleFilterChange}
                placeholder="e.g. callback" 
                className="w-full pl-9 pr-3 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-colors bg-slate-50/50 placeholder:text-slate-400 text-slate-800"
              />
            </div>
          </div>

          {/* Calendar */}
          <div>
            <label className="text-xs font-bold text-slate-700 mb-1.5 block">Calendar</label>
            <div className="relative">
              <CalendarIcon size={16} className="absolute left-3 top-3 text-slate-400 pointer-events-none" />
              <input 
                type="date" name="date" value={filters.date} onChange={handleFilterChange}
                className="w-full pl-9 pr-3 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-colors bg-slate-50/50 text-slate-800 font-medium"
              />
            </div>
          </div>
        </div>
      </div>

      {/* --- LIVE FUNNEL DATA TABLE --- */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-5 border-b border-slate-100 bg-slate-50/40 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center gap-3">
            <h3 className="font-extrabold text-slate-900 text-lg tracking-tight">Live Funnel</h3>
            <span className="bg-indigo-50 text-indigo-700 text-xs px-2.5 py-0.5 rounded-full font-bold">
              {filteredLeads.length} total
            </span>
          </div>
          
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
            <div className="flex items-center gap-2 text-xs text-slate-500 font-semibold justify-between sm:justify-start border border-slate-200 bg-white rounded-xl px-3 py-1.5 shadow-sm">
              <span>Show</span>
              <select 
                value={entriesPerPage} 
                onChange={(e) => { setEntriesPerPage(Number(e.target.value)); setCurrentPage(1); }}
                className="border-none rounded font-bold px-1 text-slate-800 bg-transparent focus:outline-none cursor-pointer"
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={25}>25</option>
              </select>
              <span>entries</span>
            </div>

            <div className="flex items-center relative">
              <Search size={16} className="absolute left-3.5 text-slate-400 pointer-events-none" />
              <input 
                type="text" 
                placeholder="Quick lookup..."
                value={globalSearch}
                onChange={(e) => { setGlobalSearch(e.target.value); setCurrentPage(1); }}
                className="w-full sm:w-64 pl-9 pr-3 py-2 border border-slate-200 rounded-xl text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 placeholder:text-slate-400 text-slate-800 shadow-sm transition-all"
              />
            </div>
          </div>
        </div>

        {/* Table Content */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse m-0">
            <thead>
              <tr className="bg-slate-50/70 border-b border-slate-200/80 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                <th className="py-4 px-5 w-12 text-center">#</th>
                <th className="py-4 px-5">Lead Owner</th>
                <th className="py-4 px-5">Customer</th>
                <th className="py-4 px-5">Contact No.</th>
                <th className="py-4 px-5">Requirement Structure</th>
                <th className="py-4 px-5">Created Date</th>
                <th className="py-4 px-5">Lead Status</th>
                <th className="py-4 px-5">Call Engagement</th>
                <th className="py-4 px-5 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {currentEntries.length > 0 ? (
                currentEntries.map((lead, idx) => (
                  <tr key={lead.id} className="hover:bg-slate-50/50 transition duration-150 group">
                    <td className="py-4 px-5 text-center font-bold text-slate-400 group-hover:text-slate-600 transition-colors">{indexOfFirstEntry + idx + 1}</td>
                    <td className="py-4 px-5">
                      <div className="font-semibold text-slate-900">{lead.grabBy || 'Unassigned'}</div>
                      <div className="text-xs font-medium text-slate-400 mt-0.5">Keyword: <span className="text-slate-500 font-semibold">{lead.statusKeyword}</span></div>
                    </td>
                    <td className="py-4 px-5 font-bold text-slate-800">{lead.customer}</td>
                    <td className="py-4 px-5 font-medium text-slate-600 tracking-wide">{lead.mobile}</td>
                    <td className="py-4 px-5">
                      <div className="text-slate-900 font-semibold">{lead.product}</div>
                      <div className="text-xs text-slate-500 font-medium mt-0.5">{lead.requirement}</div>
                    </td>
                    <td className="py-4 px-5 font-medium text-slate-500 whitespace-nowrap">{lead.created}</td>
                    <td className="py-4 px-5 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-bold tracking-wide ${
                        lead.leadStatus === 'Grabbed' ? 'bg-cyan-50 text-cyan-700 border border-cyan-100' :
                        lead.leadStatus === 'Highest Lead' ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' :
                        'bg-amber-50 text-amber-700 border border-amber-100'
                      }`}>
                        {lead.leadStatus}
                      </span>
                    </td>
                    <td className="py-4 px-5 whitespace-nowrap">
                      <span className="text-xs bg-slate-100 text-slate-700 border border-slate-200/60 px-2.5 py-1 rounded-lg font-bold">
                        {lead.callStatus}
                      </span>
                    </td>
                    <td className="py-4 px-5 text-right whitespace-nowrap">
                      <button className="text-indigo-600 hover:text-indigo-900 font-bold text-xs bg-indigo-50 hover:bg-indigo-100/80 px-3 py-1.5 rounded-lg transition active:scale-95">
                        View Details
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={9} className="py-14 text-center bg-slate-50/20">
                    <div className="max-w-xs mx-auto flex flex-col items-center justify-center">
                      <Search size={32} className="text-slate-300 mb-2" />
                      <p className="text-slate-400 font-bold text-sm">No Matching Records Found</p>
                      <p className="text-slate-400 text-xs mt-0.5">Try widening your filters or global lookup queries.</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* --- FOOTER PAGINATION --- */}
        <div className="p-4 bg-slate-50/40 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-bold text-slate-500">
          <div className="font-semibold text-slate-400">
            Showing <span className="text-slate-700 font-bold">{totalEntries === 0 ? 0 : indexOfFirstEntry + 1}</span> to <span className="text-slate-700 font-bold">{Math.min(indexOfLastEntry, totalEntries)}</span> of <span className="text-slate-700 font-bold">{totalEntries}</span> matrix logs
          </div>
          <div className="flex items-center gap-2">
            <button 
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(prev => prev - 1)}
              className="p-2 border border-slate-200 rounded-xl bg-white hover:bg-slate-50 text-slate-600 disabled:opacity-40 disabled:cursor-not-allowed transition shadow-sm active:scale-95"
            >
              <ChevronLeft size={15} />
            </button>
            <span className="px-3 text-slate-400 font-semibold">
              Page <span className="text-slate-800 font-extrabold">{currentPage}</span> of {totalPages}
            </span>
            <button 
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(prev => prev + 1)}
              className="p-2 border border-slate-200 rounded-xl bg-white hover:bg-slate-50 text-slate-600 disabled:opacity-40 disabled:cursor-not-allowed transition shadow-sm active:scale-95"
            >
              <ChevronRight size={15} />
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}