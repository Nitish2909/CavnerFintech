import React, { useState } from "react";
import { Link } from "react-router-dom";

// Mock Data to make the page functional and complete
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
];

const Partner = () => {
  const [search, setSearch] = useState("");
  const [filteredTeam, setFilteredTeam] = useState(INITIAL_TEAM);
  const [entriesPerPage, setEntriesPerPage] = useState(10);

  // Filter Logic
  const handleFilter = () => {
    const lowercaseSearch = search.toLowerCase();
    const result = INITIAL_TEAM.filter(
      (member) =>
        member.name.toLowerCase().includes(lowercaseSearch) ||
        member.code.toLowerCase().includes(lowercaseSearch) ||
        member.email.toLowerCase().includes(lowercaseSearch),
    );
    setFilteredTeam(result);
  };

  // Reset Logic
  const handleReset = () => {
    setSearch("");
    setFilteredTeam(INITIAL_TEAM);
  };

  return (
    // Updated CDN to Tailwind CSS v3 for modern color palettes and styles
    <div className="min-h-screen bg-slate-50/50 p-4 md:p-8 font-sans antialiased text-slate-600">
      <link
        href="https://cdn.jsdelivr.net/npm/tailwindcss@3.4.1/src/output.css"
        rel="stylesheet"
      />

      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200/80 overflow-hidden">
        {/* Header Section */}
        <div className="p-6 md:p-8 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-gradient-to-b from-white to-slate-50/30">
          <div>
            <h1 className="text-xl md:text-2xl font-semibold text-slate-900 tracking-tight">
              My Team Management
            </h1>
            <p className="text-xs md:text-sm text-slate-500 mt-1">
              Manage, monitor, and configure your team members and external agents.
            </p>
          </div>
          <div className="flex shrink-0">
            <Link 
              to="/add-agents"
              className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-4 py-2.5 rounded-xl shadow-sm hover:shadow transition-all duration-200 text-sm tracking-wide"
            >
              Add Team
            </Link>
          </div>
        </div>

        {/* Controls & Search Section */}
        <div className="p-6 border-b border-slate-100 flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-white">
          <div className="flex flex-1 flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search by name, code, or email..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-slate-50/50 border border-slate-200 rounded-xl pl-4 pr-4 py-2.5 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition-all duration-200 text-slate-800"
              />
            </div>
            <div className="flex gap-2">
              <button
                onClick={handleFilter}
                className="bg-slate-900 hover:bg-slate-800 text-white font-medium px-4 py-2.5 rounded-xl text-sm transition-all duration-200 shadow-sm"
              >
                Filter
              </button>
              <button
                onClick={handleReset}
                className="bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-medium px-4 py-2.5 rounded-xl text-sm transition-all duration-200"
              >
                Reset
              </button>
            </div>
          </div>

          {/* Entries Config */}
          <div className="flex items-center gap-2 text-xs md:text-sm text-slate-500 self-start lg:self-auto">
            <span>Show</span>
            <select
              value={entriesPerPage}
              onChange={(e) => setEntriesPerPage(Number(e.target.value))}
              className="bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 text-xs md:text-sm font-medium text-slate-700 transition-all"
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={25}>25</option>
            </select>
            <span>entries per page</span>
          </div>
        </div>

        {/* Responsive Table Wrapper */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-max">
            <thead>
              <tr className="bg-slate-50/70 border-b border-slate-200 text-slate-500 text-[11px] font-semibold uppercase tracking-wider">
                <th className="px-6 py-4 font-medium">S.No</th>
                <th className="px-4 py-4 font-medium">Code</th>
                <th className="px-6 py-4 font-medium">Name</th>
                <th className="px-6 py-4 font-medium">Mobile No.</th>
                <th className="px-6 py-4 font-medium">E-Mail ID</th>
                <th className="px-6 py-4 font-medium">Address</th>
                <th className="px-4 py-4 text-center font-medium">Team Size</th>
                <th className="px-6 py-4 font-medium">Joining Date</th>
                <th className="px-4 py-4 text-center font-medium">Status</th>
                <th className="px-4 py-4 text-center font-medium">Consent</th>
                <th className="px-4 py-4 text-center font-medium">WhatsApp</th>
                <th className="px-6 py-4 text-center font-medium">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm text-slate-600 bg-white">
              {filteredTeam.length > 0 ? (
                filteredTeam.map((member, index) => (
                  <tr
                    key={member.id}
                    className="hover:bg-slate-50/60 transition-colors duration-150"
                  >
                    <td className="px-6 py-4 font-medium text-slate-400">
                      {index + 1}
                    </td>
                    <td className="px-4 py-4 font-mono text-xs text-indigo-600 font-semibold tracking-wide">
                      {member.code}
                    </td>
                    <td className="px-6 py-4 font-medium text-slate-900">
                      {member.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-slate-600">
                      {member.mobile}
                    </td>
                    <td className="px-6 py-4 text-slate-500 whitespace-nowrap">
                      {member.email}
                    </td>
                    <td className="px-6 py-4 max-w-xs truncate text-slate-500">
                      {member.address}
                    </td>
                    <td className="px-4 py-4 text-center font-medium text-slate-800">
                      {member.teamSize}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-slate-500">
                      {new Date(member.joinDate).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </td>

                    {/* Status Badge */}
                    <td className="px-4 py-4 text-center whitespace-nowrap">
                      <span
                        className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium tracking-wide ${
                          member.status === "Active"
                            ? "bg-emerald-50 text-emerald-700 border border-emerald-200/50"
                            : "bg-slate-50 text-slate-600 border border-slate-200/60"
                        }`}
                      >
                        {member.status}
                      </span>
                    </td>

                    {/* Consent Badge */}
                    <td className="px-4 py-4 text-center whitespace-nowrap">
                      <span
                        className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium tracking-wide ${
                          member.consent === "Approved"
                            ? "bg-blue-50 text-blue-700 border border-blue-200/50"
                            : member.consent === "Pending"
                              ? "bg-amber-50 text-amber-700 border border-amber-200/50"
                              : "bg-rose-50 text-rose-700 border border-rose-200/50"
                        }`}
                      >
                        {member.consent}
                      </span>
                    </td>

                    {/* WhatsApp Status Indicator */}
                    <td className="px-4 py-4 text-center whitespace-nowrap">
                      <span
                        className={`inline-flex items-center text-xs font-medium ${
                          member.whatsapp === "Enabled"
                            ? "text-emerald-700"
                            : "text-rose-600"
                        }`}
                      >
                        <span
                          className={`h-1.5 w-1.5 rounded-full mr-2 ${
                            member.whatsapp === "Enabled" ? "bg-emerald-500 animate-pulse" : "bg-rose-400"
                          }`}
                        ></span>
                        {member.whatsapp}
                      </span>
                    </td>

                    {/* Action Buttons */}
                    <td className="px-6 py-4 text-center whitespace-nowrap">
                      <div className="flex justify-center items-center gap-3 text-xs">
                        <button className="text-indigo-600 hover:text-indigo-900 font-semibold transition-colors duration-150">
                          Edit
                        </button>
                        <span className="text-slate-200">|</span>
                        <button className="text-rose-600 hover:text-rose-900 font-semibold transition-colors duration-150">
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="12"
                    className="px-6 py-16 text-center text-slate-400 font-medium bg-slate-50/20"
                  >
                    No team members found matching your filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Footer / Summary Info */}
        <div className="p-5 bg-slate-50/80 border-t border-slate-100 flex flex-col sm:flex-row gap-4 items-center justify-between text-xs font-medium text-slate-500">
          <div>
            Showing{" "}
            <span className="font-semibold text-slate-800">
              {filteredTeam.length}
            </span>{" "}
            of{" "}
            <span className="font-semibold text-slate-800">
              {INITIAL_TEAM.length}
            </span>{" "}
            total team members
          </div>
          <div className="flex gap-1.5">
            <button className="px-3 py-1.5 border border-slate-200 bg-white rounded-lg text-slate-400 cursor-not-allowed transition-all">
              Previous
            </button>
            <button className="px-3 py-1.5 bg-indigo-600 text-white rounded-lg font-semibold shadow-sm shadow-indigo-600/10">
              1
            </button>
            <button className="px-3 py-1.5 border border-slate-200 bg-white rounded-lg text-slate-600 hover:bg-slate-50 hover:text-slate-800 transition-all">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;