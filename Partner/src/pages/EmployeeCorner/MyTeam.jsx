import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { 
  Plus, Search, X, Edit2, Trash2, AlertCircle 
} from 'lucide-react';

// ==========================================
// MOCK DATA 
// ==========================================
const INITIAL_TEAM = [
  {
    id: 1,
    code: "EMP001",
    name: "Ananya Sharma",
    mobile: "+91 98765 43210",
    email: "ananya@company.com",
    address: "Mumbai, India",
    teamSize: 5,
    joinDate: "2024-03-15",
    status: "Active",
    consent: "Approved",
    whatsapp: "Enabled",
  },
  {
    id: 2,
    code: "EMP002",
    name: "Arjun Mehta",
    mobile: "+91 98123 45678",
    email: "arjun@company.com",
    address: "Delhi, India",
    teamSize: 2,
    joinDate: "2024-05-10",
    status: "Active",
    consent: "Pending",
    whatsapp: "Disabled",
  },
  {
    id: 3,
    code: "EMP003",
    name: "Rohan Das",
    mobile: "+91 97654 32109",
    email: "rohan@company.com",
    address: "Bangalore, India",
    teamSize: 0,
    joinDate: "2025-01-20",
    status: "Inactive",
    consent: "Approved",
    whatsapp: "Enabled",
  }
];

// ==========================================
// COMPONENT IMPLEMENTATION
// ==========================================
export default function MyTeam() {
  const [team, setTeam] = useState(INITIAL_TEAM);
  const [search, setSearch] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  // Modal Configuration States
  const [deleteModal, setDeleteModal] = useState({ isOpen: false, memberId: null });
  const [editModal, setEditModal] = useState({ isOpen: false, memberData: null });

  // Live filtering logic mapping over global state
  const filteredTeam = useMemo(() => {
    const lowercaseSearch = search.toLowerCase();
    return team.filter(
      (member) =>
        member.name.toLowerCase().includes(lowercaseSearch) ||
        member.code.toLowerCase().includes(lowercaseSearch) ||
        member.email.toLowerCase().includes(lowercaseSearch)
    );
  }, [search, team]);

  // Pagination Logic
  const totalPages = Math.ceil(filteredTeam.length / entriesPerPage) || 1;
  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * entriesPerPage;
    return filteredTeam.slice(start, start + entriesPerPage);
  }, [filteredTeam, currentPage, entriesPerPage]);

  const handleReset = () => {
    setSearch("");
    setCurrentPage(1);
  };

  // State Mutation Handlers
  const confirmDelete = () => {
    setTeam(prev => prev.filter(m => m.id !== deleteModal.memberId));
    setDeleteModal({ isOpen: false, memberId: null });
    if (paginatedData.length === 1 && currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  };

  const handleUpdateMember = (e) => {
    e.preventDefault();
    setTeam(prev => prev.map(m => m.id === editModal.memberData.id ? editModal.memberData : m));
    setEditModal({ isOpen: false, memberData: null });
  };

  return (
    <div className="pt-6 px-4 md:px-8 pb-8 min-h-screen bg-slate-50 text-slate-800 w-full transition-all duration-150">
      <div className="max-w-[1600px] mx-auto bg-white rounded-xl border border-slate-200/80 overflow-hidden shadow-sm">
        
        {/* Header Section */}
        <div className="p-4 sm:p-6 border-b border-slate-100 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-xl font-bold text-slate-900 tracking-tight">
              My Team Management
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              Manage, monitor, and configure your internal team profiles and external field agents.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto">
            <Link
              to="/add-employees"
              className="flex-1 sm:flex-initial justify-center bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-4 py-2 rounded-lg transition-colors text-sm flex items-center gap-1.5 shadow-sm"
            >
              <Plus className="w-4 h-4 text-white/90" />
              <span className="whitespace-nowrap">Add Employee</span>
            </Link>
            <Link 
              to="/add-agents"
              className="flex-1 sm:flex-initial justify-center bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-4 py-2 rounded-lg transition-colors text-sm flex items-center gap-1.5 shadow-sm"
            >
              <Plus className="w-4 h-4 text-white/90" />
              <span className="whitespace-nowrap">Add Agent</span>
            </Link>
          </div>
        </div>

        {/* Filters and Controls */}
        <div className="p-4 bg-slate-50/50 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex flex-1 items-center gap-2.5 max-w-md w-full">
            <div className="relative flex-1">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <Search className="w-4 h-4" />
              </span>
              <input
                type="text"
                placeholder="Search name, code, or email..."
                value={search}
                onChange={(e) => { setSearch(e.target.value); setCurrentPage(1); }}
                className="w-full bg-white border border-slate-200 rounded-lg pl-9 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 shadow-sm placeholder-slate-400"
              />
            </div>
            {search && (
              <button
                onClick={handleReset}
                className="bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-medium px-3 py-2 rounded-lg text-sm transition-colors whitespace-nowrap shadow-sm"
              >
                Clear
              </button>
            )}
          </div>

          {/* Show Entries Control */}
          <div className="flex items-center gap-2 text-sm text-slate-600 self-start sm:self-auto shrink-0">
            <span>Show</span>
            <div className="relative">
              <select
                value={entriesPerPage}
                onChange={(e) => { setEntriesPerPage(Number(e.target.value)); setCurrentPage(1); }}
                className="appearance-none bg-white border border-slate-200 rounded-lg pl-3 pr-8 py-1.5 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-sm font-medium shadow-sm cursor-pointer"
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={25}>25</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-400">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
            <span>entries</span>
          </div>
        </div>

        {/* Mobile-First View: Card layout on small viewports, Data table on xl/md viewports */}
        <div className="block lg:hidden divide-y divide-slate-100 bg-white">
          {paginatedData.length > 0 ? (
            paginatedData.map((member, index) => (
              <div key={member.id} className="p-4 space-y-3 hover:bg-slate-50/30 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold px-2 py-0.5 bg-slate-100 rounded text-slate-600">
                      #{(currentPage - 1) * entriesPerPage + index + 1}
                    </span>
                    <span className="font-mono text-xs text-indigo-600 font-bold tracking-wide">
                      {member.code}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <button 
                      onClick={() => setEditModal({ isOpen: true, memberData: { ...member } })}
                      className="text-slate-500 hover:text-indigo-600 p-2 rounded-md hover:bg-slate-100 transition-colors"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => setDeleteModal({ isOpen: true, memberId: member.id })}
                      className="text-slate-500 hover:text-rose-600 p-2 rounded-md hover:bg-slate-100 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-y-2 text-xs">
                  <div className="col-span-2">
                    <span className="text-slate-400 block mb-0.5">Full Name</span>
                    <span className="text-sm font-semibold text-slate-900">{member.name}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block mb-0.5">Mobile No.</span>
                    <span className="text-slate-700 font-medium tabular-nums">{member.mobile}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block mb-0.5">Team Size</span>
                    <span className="text-slate-700 font-semibold tabular-nums">{member.teamSize} Member(s)</span>
                  </div>
                  <div className="col-span-2">
                    <span className="text-slate-400 block mb-0.5">E-Mail ID</span>
                    <span className="text-slate-600 truncate block">{member.email}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-1.5 border-t border-slate-100">
                  <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold ring-1 ring-inset ${
                    member.status === "Active" ? "bg-emerald-50 text-emerald-700 ring-emerald-600/10" : "bg-slate-50 text-slate-600 ring-slate-500/10"
                  }`}>
                    {member.status}
                  </span>
                  <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold ring-1 ring-inset ${
                    member.consent === "Approved" ? "bg-blue-50 text-blue-700 ring-blue-600/10" : "bg-amber-50 text-amber-700 ring-amber-600/15"
                  }`}>
                    Consent: {member.consent}
                  </span>
                  <span className="inline-flex items-center text-[11px] font-semibold text-slate-600 ml-auto">
                    <span className={`h-1.5 w-1.5 rounded-full mr-1 ${member.whatsapp === "Enabled" ? "bg-emerald-500 animate-pulse" : "bg-rose-400"}`} />
                    WA: {member.whatsapp}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div className="p-8 text-center text-slate-400 text-sm font-medium">No results found matching your criteria.</div>
          )}
        </div>

        {/* Desktop Table Wrapper */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[1100px]">
            <thead>
              <tr className="bg-slate-50/70 border-b border-slate-200 text-slate-500 text-xs font-bold uppercase tracking-wider select-none">
                <th className="px-6 py-3.5 w-16">S.No</th>
                <th className="px-4 py-3.5 w-24">Code</th>
                <th className="px-6 py-3.5">Name</th>
                <th className="px-6 py-3.5">Mobile No.</th>
                <th className="px-6 py-3.5">E-Mail ID</th>
                <th className="px-6 py-3.5">Address</th>
                <th className="px-4 py-3.5 text-center w-24">Team Size</th>
                <th className="px-6 py-3.5">Joining Date</th>
                <th className="px-4 py-3.5 text-center w-28">Status</th>
                <th className="px-4 py-3.5 text-center w-28">Consent</th>
                <th className="px-4 py-3.5 text-center w-28">WhatsApp</th>
                <th className="px-6 py-3.5 text-center w-24">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm text-slate-600">
              {paginatedData.length > 0 ? (
                paginatedData.map((member, index) => (
                  <tr key={member.id} className="hover:bg-slate-50/40 transition-colors">
                    <td className="px-6 py-4 font-semibold text-slate-900">
                      {(currentPage - 1) * entriesPerPage + index + 1}
                    </td>
                    <td className="px-4 py-4 font-mono text-xs text-indigo-600 font-bold tracking-wide">
                      {member.code}
                    </td>
                    <td className="px-6 py-4 font-semibold text-slate-900">
                      {member.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap tabular-nums">
                      {member.mobile}
                    </td>
                    <td className="px-6 py-4 text-slate-500">{member.email}</td>
                    <td className="px-6 py-4 max-w-xs truncate" title={member.address}>
                      {member.address}
                    </td>
                    <td className="px-4 py-4 text-center font-semibold text-slate-800 tabular-nums">
                      {member.teamSize}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-slate-500 tabular-nums">
                      {new Date(member.joinDate).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </td>

                    <td className="px-4 py-4 text-center whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold tracking-wide ring-1 ring-inset ${
                        member.status === "Active" ? "bg-emerald-50 text-emerald-700 ring-emerald-600/10" : "bg-slate-50 text-slate-600 ring-slate-500/10"
                      }`}>
                        {member.status}
                      </span>
                    </td>

                    <td className="px-4 py-4 text-center whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold tracking-wide ring-1 ring-inset ${
                        member.consent === "Approved" ? "bg-blue-50 text-blue-700 ring-blue-600/10" : "bg-amber-50 text-amber-700 ring-amber-600/15"
                      }`}>
                        {member.consent}
                      </span>
                    </td>

                    <td className="px-4 py-4 text-center whitespace-nowrap">
                      <span className={`inline-flex items-center justify-center text-xs font-semibold ${
                        member.whatsapp === "Enabled" ? "text-emerald-600" : "text-rose-500"
                      }`}>
                        <span className={`h-1.5 w-1.5 rounded-full mr-1.5 ${member.whatsapp === "Enabled" ? "bg-emerald-500 animate-pulse" : "bg-rose-400"}`}></span>
                        {member.whatsapp}
                      </span>
                    </td>

                    <td className="px-6 py-4 text-center whitespace-nowrap">
                      <div className="flex justify-center items-center gap-1">
                        <button 
                          onClick={() => setEditModal({ isOpen: true, memberData: { ...member } })}
                          className="text-slate-500 hover:text-indigo-600 hover:bg-slate-100 p-1.5 rounded-md transition-colors"
                          title="Edit Profile"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => setDeleteModal({ isOpen: true, memberId: member.id })}
                          className="text-slate-500 hover:text-rose-600 hover:bg-slate-100 p-1.5 rounded-md transition-colors"
                          title="Delete Profile"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="12" className="px-6 py-12 text-center text-slate-400 font-medium">
                    No results found matching your criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Dynamic Footer Row */}
        <div className="p-4 bg-slate-50/50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500 select-none">
          <div className="text-center sm:text-left">
            Showing <span className="font-semibold text-slate-700">{filteredTeam.length === 0 ? 0 : (currentPage - 1) * entriesPerPage + 1}</span> to{" "}
            <span className="font-semibold text-slate-700">{Math.min(currentPage * entriesPerPage, filteredTeam.length)}</span> of{" "}
            <span className="font-semibold text-slate-700">{filteredTeam.length}</span> entries
          </div>
          
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1.5 border border-slate-200 bg-white rounded-lg text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:hover:bg-white disabled:cursor-not-allowed text-xs font-semibold transition-colors shadow-sm"
            >
              Previous
            </button>
            <span className="text-xs font-semibold text-slate-700 px-3 py-1.5 bg-slate-100 rounded-md">
              {currentPage} / {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-3 py-1.5 border border-slate-200 bg-white rounded-lg text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:hover:bg-white disabled:cursor-not-allowed text-xs font-semibold transition-colors shadow-sm"
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* ==========================================
          MODAL 1: DYNAMIC EDIT MODAL 
         ========================================== */}
      {editModal.isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full border border-slate-200/60 overflow-hidden transform animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between sticky top-0 bg-white z-10">
              <h3 className="text-base font-bold text-slate-900">Edit Team Member</h3>
              <button 
                onClick={() => setEditModal({ isOpen: false, memberData: null })}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-lg transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <form onSubmit={handleUpdateMember} className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5">Name</label>
                <input 
                  type="text" 
                  value={editModal.memberData.name}
                  onChange={(e) => setEditModal(prev => ({ ...prev, memberData: { ...prev.memberData, name: e.target.value } }))}
                  className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 bg-white"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5">Mobile No.</label>
                <input 
                  type="text" 
                  value={editModal.memberData.mobile}
                  onChange={(e) => setEditModal(prev => ({ ...prev, memberData: { ...prev.memberData, mobile: e.target.value } }))}
                  className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 bg-white"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5">E-Mail ID</label>
                <input 
                  type="email" 
                  value={editModal.memberData.email}
                  onChange={(e) => setEditModal(prev => ({ ...prev, memberData: { ...prev.memberData, email: e.target.value } }))}
                  className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 bg-white"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-3 pt-3">
                <button 
                  type="button"
                  onClick={() => setEditModal({ isOpen: false, memberData: null })}
                  className="w-full border border-slate-200 text-slate-700 py-2 rounded-lg font-medium text-sm hover:bg-slate-50 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-2 rounded-lg font-medium text-sm hover:bg-indigo-700 transition-colors shadow-sm"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ==========================================
          MODAL 2: CONFIRM DELETE MODAL
         ========================================== */}
      {deleteModal.isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-xl shadow-xl max-w-sm w-full p-6 text-center border border-slate-200/60 transform animate-in zoom-in-95 duration-200">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-rose-50 text-rose-600 mb-4">
              <AlertCircle className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-1">Delete Team Member</h3>
            <p className="text-sm text-slate-500 mb-6">
              Are you sure you want to delete this profile? This data operation cannot be undone.
            </p>
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setDeleteModal({ isOpen: false, memberId: null })}
                className="flex-1 border border-slate-200 text-slate-700 py-2 rounded-lg font-medium text-sm hover:bg-slate-50 transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={confirmDelete}
                className="flex-1 bg-rose-600 text-white py-2 rounded-lg font-medium text-sm hover:bg-rose-700 transition-colors shadow-sm"
              >
                Delete Profile
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}