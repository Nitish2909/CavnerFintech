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
    // Tailwind CDN wrapper just in case it isn't installed in your setup yet
    <div className="min-h-screen bg-slate-50 p-6 font-sans text-slate-800">
      <link
        href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
        rel="stylesheet"
      />

      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-md border border-slate-100 overflow-hidden">
        {/* Header Section */}
        <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
              My Team Management
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              Manage, monitor, and configure your team members and external
              agents.
            </p>
          </div>
          <div className="flex gap-3">
            <Link 
            to="/add-agents"
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-4 py-2.5 rounded-lg shadow-sm transition-colors text-sm">
              Add Team
            </Link>
          </div>
        </div>

        {/* Controls & Search Section */}
        <div className="p-6 bg-slate-50/50 border-b border-slate-100 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex flex-1 flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search by name, code, or email..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-lg pl-4 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
              />
            </div>
            <div className="flex gap-2">
              <button
                onClick={handleFilter}
                className="bg-slate-800 hover:bg-slate-900 text-white font-medium px-4 py-2 rounded-lg text-sm transition-colors"
              >
                Filter
              </button>
              <button
                onClick={handleReset}
                className="bg-white hover:bg-slate-100 border border-slate-300 text-slate-700 font-medium px-4 py-2 rounded-lg text-sm transition-colors"
              >
                Reset
              </button>
            </div>
          </div>

          {/* Entries Config */}
          <div className="flex items-center gap-2 text-sm text-slate-600 self-end lg:self-auto">
            <span>Show</span>
            <select
              value={entriesPerPage}
              onChange={(e) => setEntriesPerPage(Number(e.target.value))}
              className="bg-white border border-slate-300 rounded px-2 py-1 focus:ring-2 focus:ring-indigo-500 text-sm font-medium"
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
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-100 border-b border-slate-200 text-slate-700 text-xs font-semibold uppercase tracking-wider">
                <th className="px-6 py-4">S.No</th>
                <th className="px-4 py-4">Code</th>
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Mobile No.</th>
                <th className="px-6 py-4">E-Mail ID</th>
                <th className="px-6 py-4">Address</th>
                <th className="px-4 py-4 text-center">Team Size</th>
                <th className="px-6 py-4">Joining Date</th>
                <th className="px-4 py-4 text-center">Status</th>
                <th className="px-4 py-4 text-center">Consent</th>
                <th className="px-4 py-4 text-center">WhatsApp</th>
                <th className="px-6 py-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm text-slate-600">
              {filteredTeam.length > 0 ? (
                filteredTeam.map((member, index) => (
                  <tr
                    key={member.id}
                    className="hover:bg-slate-50 transition-colors"
                  >
                    <td className="px-6 py-4 font-medium text-slate-900">
                      {index + 1}
                    </td>
                    <td className="px-4 py-4 font-mono text-xs text-indigo-600 font-semibold">
                      {member.code}
                    </td>
                    <td className="px-6 py-4 font-semibold text-slate-900">
                      {member.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {member.mobile}
                    </td>
                    <td className="px-6 py-4 text-slate-500">{member.email}</td>
                    <td className="px-6 py-4 max-w-xs truncate">
                      {member.address}
                    </td>
                    <td className="px-4 py-4 text-center font-medium">
                      {member.teamSize}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {new Date(member.joinDate).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </td>

                    {/* Status Badge */}
                    <td className="px-4 py-4 text-center">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          member.status === "Active"
                            ? "bg-emerald-100 text-emerald-800"
                            : "bg-slate-100 text-slate-800"
                        }`}
                      >
                        {member.status}
                      </span>
                    </td>

                    {/* Consent Badge */}
                    <td className="px-4 py-4 text-center">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          member.consent === "Approved"
                            ? "bg-blue-100 text-blue-800"
                            : member.consent === "Pending"
                              ? "bg-amber-100 text-amber-800"
                              : "bg-rose-100 text-rose-800"
                        }`}
                      >
                        {member.consent}
                      </span>
                    </td>

                    {/* WhatsApp Status Indicator */}
                    <td className="px-4 py-4 text-center">
                      <span
                        className={`inline-flex items-center text-xs font-semibold ${
                          member.whatsapp === "Enabled"
                            ? "text-emerald-600"
                            : "text-rose-500"
                        }`}
                      >
                        <span
                          className={`h-2 w-2 rounded-full mr-1.5 ${member.whatsapp === "Enabled" ? "bg-emerald-500" : "bg-rose-400"}`}
                        ></span>
                        {member.whatsapp}
                      </span>
                    </td>

                    {/* Action Buttons */}
                    <td className="px-6 py-4 text-center whitespace-nowrap">
                      <div className="flex justify-center gap-2">
                        <button className="text-indigo-600 hover:text-indigo-900 font-medium hover:underline px-1">
                          Edit
                        </button>
                        <span className="text-slate-300">|</span>
                        <button className="text-rose-600 hover:text-rose-900 font-medium hover:underline px-1">
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
                    className="px-6 py-12 text-center text-slate-400 font-medium"
                  >
                    No team members found matching your filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Footer / Summary Info */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <div>
            Showing{" "}
            <span className="font-semibold text-slate-700">
              {filteredTeam.length}
            </span>{" "}
            of{" "}
            <span className="font-semibold text-slate-700">
              {INITIAL_TEAM.length}
            </span>{" "}
            total team members
          </div>
          <div className="flex gap-1">
            <button className="px-3 py-1 border border-slate-200 bg-white rounded text-slate-400 cursor-not-allowed">
              Previous
            </button>
            <button className="px-3 py-1 bg-indigo-600 text-white rounded font-medium shadow-sm">
              1
            </button>
            <button className="px-3 py-1 border border-slate-200 bg-white rounded text-slate-600 hover:bg-slate-50">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;
