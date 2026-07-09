import React, { useState } from "react";
import { ArrowLeft, User, Search, Edit2, Trash2, X } from "lucide-react";

const DesignationSetting = () => {
  // --- Core State Management ---
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const entriesPerPage = 10;

  // --- Dynamic Designation Data State ---
  const [designations, setDesignations] = useState([
    { id: 1, name: "Software Engineer", status: "Active" },
    { id: 2, name: "Product Manager", status: "Inactive" },
    { id: 3, name: "UI/UX Designer", status: "Active" },
    { id: 4, name: "QA Analyst", status: "Active" },
  ]);

  // --- Modal & Form State ---
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    status: "Active",
  });
  const [formError, setFormError] = useState("");

  // Placeholders for Edit/Delete actions
  const [editModal, setEditModal] = useState({
    isOpen: false,
    memberData: null,
  });
  const [deleteModal, setDeleteModal] = useState({
    isOpen: false,
    memberId: null,
  });

  // --- Form Handling ---
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formError) setFormError(""); // Clear errors on typing
  };

  const handleSaveDesignation = (e) => {
    e.preventDefault();

    // Validation
    if (!formData.name.trim()) {
      setFormError("Designation name is required.");
      return;
    }

    // Create new object
    const newDesignation = {
      id: Date.now(), // Generate a simple unique ID
      name: formData.name.trim(),
      status: formData.status,
    };

    // Update main state list
    setDesignations((prev) => [newDesignation, ...prev]);

    // Reset Form and close modal
    setFormData({ name: "", status: "Active" });
    setIsModalOpen(false);
  };

  // --- Search Filtering ---
  const filteredData = designations.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // --- Pagination Logic ---
  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const paginatedData = filteredData.slice(indexOfFirstEntry, indexOfLastEntry);

  return (
    <div className="p-4 relative min-h-screen bg-slate-50/50">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto mb-6 flex flex-col sm:flex-row gap-4 items-center justify-between border-b border-gray-100 pb-4">
        {/* Left: Back button and Title */}
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button
            type="button"
            className="p-2 hover:bg-gray-200/70 rounded-full transition-colors duration-200"
            onClick={() => window.history.back()}
            aria-label="Go back"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-gray-800 tracking-tight flex items-center gap-2">
              <User className="w-6 h-6 text-purple-700" /> Designation
            </h1>
          </div>
        </div>

        {/* Right: Search Bar and Add Button */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto justify-end">
          {/* Search Input Container */}
          <div className="relative w-full sm:w-64">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </span>
            <input
              type="text"
              placeholder="Search designation..."
              className="w-full pl-9 pr-4 py-2 text-sm bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full sm:w-auto bg-purple-800 hover:bg-purple-900 text-white px-4 py-2 font-medium rounded-lg text-sm transition-colors whitespace-nowrap shadow-sm"
          >
            Add Designation
          </button>
        </div>
      </div>

      {/* Table Section */}
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        {/* Desktop Table Wrapper */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/70 border-b border-slate-200 text-slate-500 text-xs font-bold uppercase tracking-wider select-none">
                <th className="px-6 py-3.5 w-20">S.No</th>
                <th className="px-6 py-3.5">Designation Name</th>
                <th className="px-6 py-3.5 w-40 text-center">Status</th>
                <th className="px-6 py-3.5 w-32 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm text-slate-600">
              {paginatedData.length > 0 ? (
                paginatedData.map((member, index) => (
                  <tr
                    key={member.id}
                    className="hover:bg-slate-50/40 transition-colors"
                  >
                    <td className="px-6 py-4 font-semibold text-slate-900">
                      {(currentPage - 1) * entriesPerPage + index + 1}
                    </td>
                    <td className="px-6 py-4 font-medium text-slate-800">
                      {member.name}
                    </td>
                    <td className="px-6 py-4 text-center whitespace-nowrap">
                      <span
                        className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold tracking-wide ring-1 ring-inset ${
                          member.status === "Active"
                            ? "bg-emerald-50 text-emerald-700 ring-emerald-600/10"
                            : "bg-slate-50 text-slate-600 ring-slate-500/10"
                        }`}
                      >
                        {member.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center whitespace-nowrap">
                      <div className="flex justify-center items-center gap-1">
                        <button
                          onClick={() =>
                            setEditModal({
                              isOpen: true,
                              memberData: { ...member },
                            })
                          }
                          className="text-slate-500 hover:text-indigo-600 hover:bg-slate-100 p-1.5 rounded-md transition-colors"
                          title="Edit Designation"
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
                          className="text-slate-500 hover:text-rose-600 hover:bg-slate-100 p-1.5 rounded-md transition-colors"
                          title="Delete Designation"
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
                    colSpan="4"
                    className="px-6 py-12 text-center text-slate-400 font-medium"
                  >
                    No results found matching "{searchTerm}"
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Mobile Fallback view */}
        <div className="block lg:hidden divide-y divide-slate-100">
          {paginatedData.length > 0 ? (
            paginatedData.map((member, index) => (
              <div
                key={member.id}
                className="p-4 flex justify-between items-center bg-white hover:bg-slate-50/50"
              >
                <div>
                  <p className="text-xs font-semibold text-slate-400 mb-0.5">
                    #{index + 1}
                  </p>
                  <p className="font-medium text-slate-800 text-sm">
                    {member.name}
                  </p>
                  <span
                    className={`mt-1.5 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold tracking-wide ring-1 ring-inset ${
                      member.status === "Active"
                        ? "bg-emerald-50 text-emerald-700 ring-emerald-600/10"
                        : "bg-slate-50 text-slate-600 ring-slate-500/10"
                    }`}
                  >
                    {member.status}
                  </span>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() =>
                      setEditModal({ isOpen: true, memberData: { ...member } })
                    }
                    className="p-2 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() =>
                      setDeleteModal({ isOpen: true, memberId: member.id })
                    }
                    className="p-2 border border-slate-200 rounded-lg text-rose-600 hover:bg-rose-50"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="p-8 text-center text-slate-400 text-sm">
              No results found matching "{searchTerm}"
            </div>
          )}
        </div>
      </div>

      {/* --- ADD DESIGNATION MODAL OVERLAY --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-xl border border-slate-100 w-full max-w-md overflow-hidden transform transition-all">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
              <h2 className="text-lg font-bold text-slate-800">
                Add New Designation
              </h2>
              <button
                onClick={() => {
                  setIsModalOpen(false);
                  setFormError("");
                  setFormData({ name: "", status: "Active" });
                }}
                className="text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-50 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleSaveDesignation}>
              <div className="p-6 space-y-4">
                {/* Input: Name */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Designation Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Senior Frontend Developer"
                    className={`w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 transition-all ${
                      formError
                        ? "border-rose-300 focus:ring-rose-200 focus:border-rose-500"
                        : "border-slate-300 focus:ring-purple-200 focus:border-purple-600"
                    }`}
                  />
                  {formError && (
                    <p className="mt-1.5 text-xs font-medium text-rose-600 flex items-center gap-1">
                      {formError}
                    </p>
                  )}
                </div>

                {/* Input: Status */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Status
                  </label>
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-purple-600 transition-all"
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
              </div>

              {/* Modal Actions */}
              <div className="bg-slate-50 px-6 py-4 flex flex-col-reverse sm:flex-row justify-end gap-2.5 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => {
                    setIsModalOpen(false);
                    setFormError("");
                    setFormData({ name: "", status: "Active" });
                  }}
                  className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-medium text-white bg-purple-800 hover:bg-purple-900 rounded-lg transition-colors shadow-sm"
                >
                  Save Designation
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default DesignationSetting;
