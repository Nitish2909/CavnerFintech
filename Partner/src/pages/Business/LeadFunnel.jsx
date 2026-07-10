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
    <div className="min-h-screen bg-slate-50 p-6 font-sans text-slate-700">
      
      {/* --- HEADER --- */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div>
          <span className="text-xs font-semibold text-purple-600 tracking-wider uppercase block mb-1">Lead Funnel</span>
          <h1 className="text-2xl font-bold text-slate-900">Lead capture & routing</h1>
          <p className="text-sm text-slate-500 mt-0.5">Keep an eye on every lead movement, call touchpoint, and grab status.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 bg-white border border-slate-200 hover:bg-slate-50 px-4 py-2 rounded-lg text-sm font-medium transition shadow-sm">
            <Download size={16} /> Export
          </button>
          <button className="flex items-center gap-2 bg-indigo-900 hover:bg-indigo-950 text-white px-4 py-2 rounded-lg text-sm font-medium transition shadow-sm">
            <Users size={16} /> View team
          </button>
        </div>
      </div>

      {/* --- KPI METRIC CARDS --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {/* Today Leads */}
        <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex items-center gap-4">
          <div className="p-3 rounded-xl bg-blue-50 text-blue-600">
            <CalendarIcon size={20} />
          </div>
          <div>
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Today Leads</div>
            <div className="text-2xl font-bold text-slate-900">{kpis.todayLeads}</div>
          </div>
        </div>
        {/* Not Grabbed */}
        <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex items-center gap-4">
          <div className="p-3 rounded-xl bg-orange-50 text-orange-600">
            <RefreshCw size={20} className="animate-spin-slow" />
          </div>
          <div>
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Not Grabbed</div>
            <div className="text-2xl font-bold text-slate-900">{kpis.notGrabbed}</div>
          </div>
        </div>
        {/* Grabbed */}
        <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex items-center gap-4">
          <div className="p-3 rounded-xl bg-cyan-50 text-cyan-600">
            <Check size={20} />
          </div>
          <div>
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Grabbed</div>
            <div className="text-2xl font-bold text-slate-900">{kpis.grabbed}</div>
          </div>
        </div>
        {/* Highest Lead */}
        <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex items-center gap-4">
          <div className="p-3 rounded-xl bg-emerald-50 text-emerald-600">
            <Users size={20} />
          </div>
          <div>
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Highest Lead</div>
            <div className="text-2xl font-bold text-slate-900">{kpis.highestLead}</div>
          </div>
        </div>
      </div>

      {/* --- QUICK FILTERS PANEL --- */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 mb-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-0.5">Quick Filters</span>
            <h3 className="text-md font-bold text-slate-900">Slice lead board</h3>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={handleResetFilters}
              className="px-4 py-1.5 border border-slate-200 text-slate-600 hover:bg-slate-50 font-semibold text-sm rounded-lg transition"
            >
              Reset
            </button>
            <button 
              onClick={handleApplyFilters}
              className="px-4 py-1.5 bg-purple-600 text-white hover:bg-purple-700 font-semibold text-sm rounded-lg transition shadow-sm"
            >
              Apply
            </button>
          </div>
        </div>

        {/* Filters Matrix Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Grab By */}
          <div>
            <label className="text-xs font-semibold text-slate-500 mb-1 block">Grab by</label>
            <div className="relative">
              <User size={16} className="absolute left-3 top-3 text-slate-400" />
              <input 
                type="text" name="grabBy" value={filters.grabBy} onChange={handleFilterChange}
                placeholder="e.g. Agent name" 
                className="w-full pl-9 pr-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 bg-slate-50/50"
              />
            </div>
          </div>

          {/* Mobile no. */}
          <div>
            <label className="text-xs font-semibold text-slate-500 mb-1 block">Mobile no.</label>
            <div className="relative">
              <Phone size={16} className="absolute left-3 top-3 text-slate-400" />
              <input 
                type="text" name="mobile" value={filters.mobile} onChange={handleFilterChange}
                placeholder="Customer number" 
                className="w-full pl-9 pr-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 bg-slate-50/50"
              />
            </div>
          </div>

          {/* Lead status dropdown */}
          <div>
            <label className="text-xs font-semibold text-slate-500 mb-1 block">Lead status</label>
            <select 
              name="leadStatus" value={filters.leadStatus} onChange={handleFilterChange}
              className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 bg-slate-50/50 appearance-none"
            >
              <option>Any status</option>
              <option>Grabbed</option>
              <option>Not Grabbed</option>
              <option>Highest Lead</option>
            </select>
          </div>

          {/* Product */}
          <div>
            <label className="text-xs font-semibold text-slate-500 mb-1 block">Product</label>
            <div className="relative">
              <Package size={16} className="absolute left-3 top-3 text-slate-400" />
              <input 
                type="text" name="product" value={filters.product} onChange={handleFilterChange}
                placeholder="Product name" 
                className="w-full pl-9 pr-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 bg-slate-50/50"
              />
            </div>
          </div>

          {/* Source */}
          <div>
            <label className="text-xs font-semibold text-slate-500 mb-1 block">Source</label>
            <div className="relative">
              <MapPin size={16} className="absolute left-3 top-3 text-slate-400" />
              <input 
                type="text" name="source" value={filters.source} onChange={handleFilterChange}
                placeholder="Referral, online..." 
                className="w-full pl-9 pr-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 bg-slate-50/50"
              />
            </div>
          </div>

          {/* Call Status */}
          <div>
            <label className="text-xs font-semibold text-slate-500 mb-1 block">Call status</label>
            <div className="relative">
              <PhoneCall size={16} className="absolute left-3 top-3 text-slate-400" />
              <input 
                type="text" name="callStatus" value={filters.callStatus} onChange={handleFilterChange}
                placeholder="Call state" 
                className="w-full pl-9 pr-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 bg-slate-50/50"
              />
            </div>
          </div>

          {/* Status Keyword */}
          <div>
            <label className="text-xs font-semibold text-slate-500 mb-1 block">Status keyword</label>
            <div className="relative">
              <Search size={16} className="absolute left-3 top-3 text-slate-400" />
              <input 
                type="text" name="statusKeyword" value={filters.statusKeyword} onChange={handleFilterChange}
                placeholder="e.g. callback" 
                className="w-full pl-9 pr-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 bg-slate-50/50"
              />
            </div>
          </div>

          {/* Calendar */}
          <div>
            <label className="text-xs font-semibold text-slate-500 mb-1 block">Calendar</label>
            <div className="relative">
              <CalendarIcon size={16} className="absolute left-3 top-3 text-slate-400 pointer-events-none" />
              <input 
                type="date" name="date" value={filters.date} onChange={handleFilterChange}
                className="w-full pl-9 pr-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 bg-slate-50/50 text-slate-600"
              />
            </div>
          </div>
        </div>
      </div>

      {/* --- LIVE FUNNEL DATA TABLE --- */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h3 className="font-bold text-slate-900 text-lg">Live funnel</h3>
          
          <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
            <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
              <select 
                value={entriesPerPage} 
                onChange={(e) => { setEntriesPerPage(Number(e.target.value)); setCurrentPage(1); }}
                className="border border-slate-200 rounded px-1.5 py-1 bg-slate-50"
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={25}>25</option>
              </select>
              <span>entries per page</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-500">Search:</span>
              <input 
                type="text" 
                value={globalSearch}
                onChange={(e) => { setGlobalSearch(e.target.value); setCurrentPage(1); }}
                className="border border-slate-200 rounded-lg px-2.5 py-1 text-sm bg-slate-50 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>
        </div>

        {/* Table Content */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/70 border-b border-slate-100 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                <th className="py-3 px-4 w-12">#</th>
                <th className="py-3 px-4">Lead Info</th>
                <th className="py-3 px-4">Customer</th>
                <th className="py-3 px-4">Contact</th>
                <th className="py-3 px-4">Requirement</th>
                <th className="py-3 px-4">Created</th>
                <th className="py-3 px-4">Lead Status</th>
                <th className="py-3 px-4">Call Status</th>
                <th className="py-3 px-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {currentEntries.length > 0 ? (
                currentEntries.map((lead, idx) => (
                  <tr key={lead.id} className="hover:bg-slate-50/50 transition">
                    <td className="py-3.5 px-4 font-medium text-slate-400">{indexOfFirstEntry + idx + 1}</td>
                    <td className="py-3.5 px-4">
                      <div className="font-semibold text-slate-900">{lead.grabBy || 'Unassigned'}</div>
                      <div className="text-xs text-slate-400">Keyword: {lead.statusKeyword}</div>
                    </td>
                    <td className="py-3.5 px-4 font-medium text-slate-700">{lead.customer}</td>
                    <td className="py-3.5 px-4 text-slate-500">{lead.mobile}</td>
                    <td className="py-3.5 px-4">
                      <div className="text-slate-800 font-medium">{lead.product}</div>
                      <div className="text-xs text-slate-400">{lead.requirement}</div>
                    </td>
                    <td className="py-3.5 px-4 text-slate-500">{lead.created}</td>
                    <td className="py-3.5 px-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                        lead.leadStatus === 'Grabbed' ? 'bg-cyan-50 text-cyan-700' :
                        lead.leadStatus === 'Highest Lead' ? 'bg-emerald-50 text-emerald-700' :
                        'bg-orange-50 text-orange-700'
                      }`}>
                        {lead.leadStatus}
                      </span>
                    </td>
                    <td className="py-3.5 px-4">
                      <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-medium">
                        {lead.callStatus}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      <button className="text-purple-600 hover:text-purple-900 font-semibold text-xs">
                        View details
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={9} className="py-10 text-center bg-purple-50/30 text-slate-400 font-medium">
                    No leads found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* --- FOOTER PAGINATION --- */}
        <div className="p-4 bg-slate-50/50 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs font-semibold text-slate-500">
          <div>
            Showing {totalEntries === 0 ? 0 : indexOfFirstEntry + 1} to {Math.min(indexOfLastEntry, totalEntries)} of {totalEntries} entries
          </div>
          <div className="flex gap-1.5">
            <button 
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(prev => prev - 1)}
              className="p-1.5 border border-slate-200 rounded-lg bg-white hover:bg-slate-50 text-slate-600 disabled:opacity-40 disabled:cursor-not-allowed transition"
            >
              <ChevronLeft size={16} />
            </button>
            <button 
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(prev => prev + 1)}
              className="p-1.5 border border-slate-200 rounded-lg bg-white hover:bg-slate-50 text-slate-600 disabled:opacity-40 disabled:cursor-not-allowed transition"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}