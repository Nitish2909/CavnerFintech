import React, { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Plus,
  Search,
  X,
  Edit2,
  Trash2,
  AlertCircle,
  Users,
  Mail,
  Phone,
  MapPin,
  Calendar,
  MessageSquare,
} from "lucide-react";
import { getAllEmployees } from "../../services/partnerServices";

// ==========================================
// MOCK DATA
// ==========================================
const INITIAL_TEAM = [
  {
    id: 1,
    code: "EMP001",
    fullname: "Ananya Sharma",
    phone: "+91 98765 43210",
    emailId: "ananya@company.com",
    address: "Mumbai, India",
    teamSize: 5,
    joiningdate: "2024-03-15",
    status: "Active",
    consent: "Approved",
    whatsapp: "Enabled",
  },
  {
    id: 2,
    code: "EMP002",
    fullname: "Arjun Mehta",
    phone: "+91 98123 45678",
    emailId: "arjun@company.com",
    address: "Delhi, India",
    teamSize: 2,
    joiningdate: "2024-05-10",
    status: "Active",
    consent: "Pending",
    whatsapp: "Disabled",
  },
  {
    id: 3,
    code: "EMP003",
    fullname: "Rohan Das",
    phone: "+91 97654 32109",
    emailId: "rohan@company.com",
    address: "Bangalore, India",
    teamSize: 0,
    joiningdate: "2025-01-20",
    status: "Inactive",
    consent: "Approved",
    whatsapp: "Enabled",
  },
];

// ==========================================
// COMPONENT IMPLEMENTATION
// ==========================================
const MyTeam = () =>{
  const [team, setTeam] = useState(INITIAL_TEAM);
  const [search, setSearch] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  // Modal Configuration States
  const [deleteModal, setDeleteModal] = useState({
    isOpen: false,
    memberId: null,
  });
  const [editModal, setEditModal] = useState({
    isOpen: false,
    memberData: null,
  });

  const setAllTeamMembers = async () => {
    try {
      const { data } = await getAllEmployees();
      console.log(data?.data);
      setTeam(data?.data);
      // navigate("/");
    } catch (err) {
      // setError(err.response?.data?.message || "Failed to add employee");
    } finally {
      // setLoading(false);
    }
  };
  useEffect(() => {
    setAllTeamMembers();
  }, []);

  // Live filtering logic mapping over global state
  const filteredTeam = useMemo(() => {
    const lowercaseSearch = search.toLowerCase();
    return team.filter(
      (member) =>
        member.fullname.toLowerCase().includes(lowercaseSearch) ||
        member.code.toLowerCase().includes(lowercaseSearch) ||
        member.emailId.toLowerCase().includes(lowercaseSearch),
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
    setTeam((prev) => prev.filter((m) => m.id !== deleteModal.memberId));
    setDeleteModal({ isOpen: false, memberId: null });
    if (paginatedData.length === 1 && currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleUpdateMember = (e) => {
    e.preventDefault();
    setTeam((prev) =>
      prev.map((m) =>
        m.id === editModal.memberData.id ? editModal.memberData : m,
      ),
    );
    setEditModal({ isOpen: false, memberData: null });
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-600 antialiased py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200/60 shadow-[0_2px_8px_-3px_rgba(0,0,0,0.05)]">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2.5">
              Team Management
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              Manage, monitor, and configure your internal team profiles and
              external field agents.
            </p>
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto">
            <Link
              to="/add-employees"
              className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-medium px-4 py-2.5 rounded-xl transition-all text-sm shadow-sm hover:shadow shadow-indigo-100"
            >
              <Plus className="w-4 h-4 opacity-90" />
              <span className="whitespace-nowrap">Add Employee</span>
            </Link>
            <Link
              to="/add-agents"
              className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 active:bg-black text-white font-medium px-4 py-2.5 rounded-xl transition-all text-sm shadow-sm hover:shadow shadow-slate-100"
            >
              <Plus className="w-4 h-4 opacity-90" />
              <span className="whitespace-nowrap">Add Agent</span>
            </Link>
          </div>
        </div>

        {/* Filters and Controls Workspace */}
        <div className="bg-white rounded-2xl border border-slate-200/60 shadow-[0_2px_8px_-3px_rgba(0,0,0,0.05)] overflow-hidden">
          <div className="p-5 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-50/40">
            <div className="flex flex-1 items-center gap-2.5 max-w-md w-full">
              <div className="relative flex-1">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Search className="w-4 h-4" />
                </span>
                <input
                  type="text"
                  placeholder="Search name, code, or emailId..."
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-600/10 focus:border-indigo-600 shadow-xs transition-all"
                />
              </div>
              {search && (
                <button
                  onClick={handleReset}
                  className="bg-white hover:bg-slate-50 active:bg-slate-100 border border-slate-200 text-slate-700 font-semibold px-4 py-2.5 rounded-xl text-sm transition-colors whitespace-nowrap shadow-xs"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Entries Selector */}
            <div className="flex items-center gap-2.5 text-sm font-medium text-slate-500 self-end md:self-auto shrink-0">
              <span>Show</span>
              <div className="relative">
                <select
                  value={entriesPerPage}
                  onChange={(e) => {
                    setEntriesPerPage(Number(e.target.value));
                    setCurrentPage(1);
                  }}
                  className="appearance-none bg-white border border-slate-200 rounded-xl pl-3.5 pr-9 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600/10 focus:border-indigo-600 text-sm font-semibold text-slate-700 shadow-xs cursor-pointer min-w-[70px] transition-all"
                >
                  <option value={5}>5</option>
                  <option value={10}>10</option>
                  <option value={25}>25</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-slate-400">
                  <svg
                    className="fill-current h-4 w-4 opacity-70"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
              <span>entries</span>
            </div>
          </div>

          {/* phone-First Layout: Card view on smaller viewports */}
          <div className="block lg:hidden divide-y divide-slate-100 bg-white">
            {paginatedData.length > 0 ? (
              paginatedData.map((member, index) => (
                <div
                  key={index}
                  className="p-5 space-y-4 hover:bg-slate-50/40 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold px-2 py-0.5 bg-slate-100 text-slate-600 rounded-md">
                        #{(currentPage - 1) * entriesPerPage + index + 1}
                      </span>
                      <span className="font-mono text-xs text-indigo-600 font-bold bg-indigo-50 px-2 py-0.5 rounded-md tracking-wide">
                        EMP0{member.code}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() =>
                          setEditModal({
                            isOpen: true,
                            memberData: { ...member },
                          })
                        }
                        className="text-slate-400 hover:text-indigo-600 p-2 rounded-xl hover:bg-indigo-50 transition-colors"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() =>
                          setDeleteModal({ isOpen: true, memberId: member.id })
                        }
                        className="text-slate-400 hover:text-rose-600 p-2 rounded-xl hover:bg-rose-50 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="text-xs font-medium text-slate-400 block">
                        Full Name
                      </span>
                      <span className="font-semibold text-slate-900">
                        {member.fullname}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 pt-1">
                      <div>
                        <span className="text-xs font-medium text-slate-400 block mb-0.5">
                          Phone No.
                        </span>
                        <span className="text-slate-700 font-medium tabular-nums flex items-center gap-1.5">
                          <Phone className="w-3.5 h-3.5 text-slate-400" />
                          {member.phone}
                        </span>
                      </div>
                      <div>
                        <span className="text-xs font-medium text-slate-400 block mb-0.5">
                          Team Size
                        </span>
                        <span className="text-slate-700 font-semibold tabular-nums flex items-center gap-1.5">
                          <Users className="w-3.5 h-3.5 text-slate-400" />
                          {member.teamSize} Members
                        </span>
                      </div>
                    </div>

                    <div className="pt-1">
                      <span className="text-xs font-medium text-slate-400 block">
                        E-Mail ID
                      </span>
                      <span className="text-slate-600 truncate block font-medium flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-slate-400" />
                        {member.emailId}
                      </span>
                    </div>

                    {member.address && (
                      <div className="pt-1">
                        <span className="text-xs font-medium text-slate-400 block">
                          Address
                        </span>
                        <span className="text-slate-600 truncate block font-medium flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-slate-400" />
                          {member.address}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-slate-100">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ring-1 ring-inset ${
                        member.status === "Active"
                          ? "bg-emerald-50 text-emerald-700 ring-emerald-600/10"
                          : "bg-slate-100 text-slate-600 ring-slate-500/10"
                      }`}
                    >
                      {member.status}
                    </span>
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ring-1 ring-inset ${
                        member.consent === "Approved"
                          ? "bg-blue-50 text-blue-700 ring-blue-600/10"
                          : "bg-amber-50 text-amber-700 ring-amber-600/15"
                      }`}
                    >
                      {member.consent}
                    </span>
                    <span className="inline-flex items-center text-xs font-medium text-slate-600 ml-auto">
                      <span
                        className={`h-1.5 w-1.5 rounded-full mr-1.5 ${member.whatsapp === "Enabled" ? "bg-emerald-500" : "bg-slate-400"}`}
                      />
                      WA: {member.whatsapp}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-12 text-center text-slate-400 text-sm font-medium">
                No matching results found.
              </div>
            )}
          </div>

          {/* Desktop Table Layout */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full text-left border-collapse table-fixed">
              <thead>
                <tr className="bg-slate-50/70 border-b border-slate-200 text-slate-400 text-xs font-bold uppercase tracking-wider select-none">
                  <th className="px-6 py-4 w-[70px]">S.No</th>
                  <th className="px-4 py-4 w-[110px]">Code</th>
                  <th className="px-6 py-4 w-[200px]">Name</th>
                  <th className="px-6 py-4 w-[170px]">Contact Information</th>
                  <th className="px-6 py-4 w-[160px]">Address</th>
                  <th className="px-4 py-4 text-center w-[100px]">Team Size</th>
                  <th className="px-6 py-4 w-[140px]">Joining Date</th>
                  <th className="px-4 py-4 text-center w-[110px]">Status</th>
                  <th className="px-4 py-4 text-center w-[110px]">Consent</th>
                  <th className="px-4 py-4 text-center w-[110px]">WhatsApp</th>
                  <th className="px-6 py-4 text-center w-[100px]">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm text-slate-600 bg-white">
                {paginatedData.length > 0 ? (
                  paginatedData.map((member, index) => (
                    <tr
                      key={index}
                      className="hover:bg-slate-50/50 transition-colors group"
                    >
                      <td className="px-6 py-4 font-bold text-slate-400">
                        {(currentPage - 1) * entriesPerPage + index + 1}
                      </td>
                      <td className="px-4 py-4">
                        <span className="font-mono text-xs text-indigo-600 font-bold bg-indigo-50 px-2 py-1 rounded-md tracking-wide">
                          {member.code}
                        </span>
                      </td>
                      <td
                        className="px-6 py-4 font-semibold text-slate-900 truncate"
                        title={member.fullname}
                      >
                        {member.fullname}
                      </td>
                      <td className="px-6 py-4 space-y-1">
                        <div className="text-slate-800 font-medium tabular-nums flex items-center gap-1.5">
                          <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          {member.phone}
                        </div>
                        <div
                          className="text-slate-400 text-xs truncate flex items-center gap-1.5"
                          title={member.emailId}
                        >
                          <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          {member.emailId}
                        </div>
                      </td>
                      <td
                        className="px-6 py-4 text-slate-500 truncate"
                        title={member.address}
                      >
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          <span>{member.address || "—"}</span>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-center font-bold text-slate-800 tabular-nums">
                        {member.teamSize}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-slate-500 font-medium">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          <span>
                            {new Date(member.joiningdate).toLocaleDateString(
                              "en-US",
                              {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              },
                            )}
                          </span>
                        </div>
                      </td>

                      <td className="px-4 py-4 text-center whitespace-nowrap">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ring-1 ring-inset ${
                            member.status === "Active"
                              ? "bg-emerald-50 text-emerald-700 ring-emerald-600/10"
                              : "bg-slate-100 text-slate-600 ring-slate-500/10"
                          }`}
                        >
                          {member.status}
                        </span>
                      </td>

                      <td className="px-4 py-4 text-center whitespace-nowrap">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ring-1 ring-inset ${
                            member.consent === "Approved"
                              ? "bg-blue-50 text-blue-700 ring-blue-600/10"
                              : "bg-amber-50 text-amber-700 ring-amber-600/15"
                          }`}
                        >
                          {member.consent}
                        </span>
                      </td>

                      <td className="px-4 py-4 text-center whitespace-nowrap">
                        <span
                          className={`inline-flex items-center justify-center text-xs font-semibold ${
                            member.whatsapp === "Enabled"
                              ? "text-emerald-700"
                              : "text-slate-500"
                          }`}
                        >
                          <span
                            className={`h-1.5 w-1.5 rounded-full mr-1.5 ${member.whatsapp === "Enabled" ? "bg-emerald-500" : "bg-slate-400"}`}
                          ></span>
                          {member.whatsapp}
                        </span>
                      </td>

                      <td className="px-6 py-4 text-center whitespace-nowrap">
                        <div className="flex justify-center items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button
                            onClick={() =>
                              setEditModal({
                                isOpen: true,
                                memberData: { ...member },
                              })
                            }
                            className="text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 p-1.5 rounded-lg transition-colors"
                            title="Edit Profile"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() =>
                              setDeleteModal({
                                isOpen: true,
                                memberId: member.id,
                              })
                            }
                            className="text-slate-400 hover:text-rose-600 hover:bg-rose-50 p-1.5 rounded-lg transition-colors"
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
                    <td
                      colSpan="11"
                      className="px-6 py-16 text-center text-slate-400 font-medium"
                    >
                      No matching records found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination Controls Footer */}
          <div className="p-4 bg-slate-50/40 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm font-medium text-slate-500 select-none">
            <div className="text-center sm:text-left">
              Showing{" "}
              <span className="font-semibold text-slate-800">
                {filteredTeam.length === 0
                  ? 0
                  : (currentPage - 1) * entriesPerPage + 1}
              </span>{" "}
              to{" "}
              <span className="font-semibold text-slate-800">
                {Math.min(currentPage * entriesPerPage, filteredTeam.length)}
              </span>{" "}
              of{" "}
              <span className="font-semibold text-slate-800">
                {filteredTeam.length}
              </span>{" "}
              entries
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                disabled={currentPage === 1}
                className="px-3 py-2 border border-slate-200 bg-white rounded-xl text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:hover:bg-white disabled:cursor-not-allowed text-xs font-bold transition-all shadow-xs"
              >
                Previous
              </button>
              <span className="text-xs font-bold text-slate-700 px-3.5 py-2 bg-slate-100 rounded-xl">
                {currentPage} / {totalPages}
              </span>
              <button
                onClick={() =>
                  setCurrentPage((p) => Math.min(p + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="px-3 py-2 border border-slate-200 bg-white rounded-xl text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:hover:bg-white disabled:cursor-not-allowed text-xs font-bold transition-all shadow-xs"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ==========================================
          MODAL 1: EDIT PROFILE MODAL 
         ========================================== */}
      {editModal.isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs transition-all">
          <div className="bg-white rounded-2xl shadow-xl max-w-md w-full border border-slate-200/80 overflow-hidden max-h-[90vh] flex flex-col">
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-white">
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  Edit Profile
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Modify team identity configuration attributes.
                </p>
              </div>
              <button
                onClick={() =>
                  setEditModal({ isOpen: false, memberData: null })
                }
                className="text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-50 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <form
              onSubmit={handleUpdateMember}
              className="p-6 space-y-4 overflow-y-auto"
            >
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Full Name
                </label>
                <input
                  type="text"
                  value={editModal.memberData.name}
                  onChange={(e) =>
                    setEditModal((prev) => ({
                      ...prev,
                      memberData: { ...prev.memberData, name: e.target.value },
                    }))
                  }
                  className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-600/10 focus:border-indigo-600 bg-white transition-all"
                  required
                />
              </div>
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">
                  phone Number
                </label>
                <input
                  type="text"
                  value={editModal.memberData.phone}
                  onChange={(e) =>
                    setEditModal((prev) => ({
                      ...prev,
                      memberData: {
                        ...prev.memberData,
                        phone: e.target.value,
                      },
                    }))
                  }
                  className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-600/10 focus:border-indigo-600 bg-white transition-all"
                  required
                />
              </div>
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">
                  EmailId Address
                </label>
                <input
                  type="emailId"
                  value={editModal.memberData.emailId}
                  onChange={(e) =>
                    setEditModal((prev) => ({
                      ...prev,
                      memberData: {
                        ...prev.memberData,
                        emailId: e.target.value,
                      },
                    }))
                  }
                  className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-600/10 focus:border-indigo-600 bg-white transition-all"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-3 pt-4">
                <button
                  type="button"
                  onClick={() =>
                    setEditModal({ isOpen: false, memberData: null })
                  }
                  className="w-full border border-slate-200 text-slate-700 py-2.5 rounded-xl font-semibold text-sm hover:bg-slate-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-2.5 rounded-xl font-semibold text-sm hover:bg-indigo-700 transition-colors shadow-sm shadow-indigo-100"
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
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs transition-all">
          <div className="bg-white rounded-2xl shadow-xl max-w-sm w-full p-6 text-center border border-slate-200/80">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-rose-50 text-rose-600 mb-4">
              <AlertCircle className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-1">
              Delete Profile
            </h3>
            <p className="text-sm text-slate-500 mb-6 px-2">
              Are you sure you want to remove this profile? This operational
              data removal sequence cannot be reversed.
            </p>
            <div className="flex items-center gap-3">
              <button
                onClick={() =>
                  setDeleteModal({ isOpen: false, memberId: null })
                }
                className="flex-1 border border-slate-200 text-slate-700 py-2.5 rounded-xl font-semibold text-sm hover:bg-slate-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="flex-1 bg-rose-600 text-white py-2.5 rounded-xl font-semibold text-sm hover:bg-rose-700 transition-colors shadow-sm shadow-rose-100"
              >
                Confirm Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MyTeam