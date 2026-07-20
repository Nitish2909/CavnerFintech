import React, { useState } from "react";
import { Link } from "react-router-dom";

const VendorCodeDashboard = () =>{
  // Sample state for the table data based on your screenshot
  const [tableData, setTableData] = useState([
    {
      sNo: 1,
      vendorName: "AU Bank",
      productName: "Card By Bank",
      subProductName: "AU Bank Credit Card",
      partnershipType: "DSA",
      partnerName: "REFER LOAN PVT LTD",
      addedBy: "upniva fintech Pvt Ltd",
      partnershipCode: "Refer Loan",
      codeValidity: "2025-10-23",
    },
    // You can add more mock rows here to test pagination/scrolling
  ]);

  // Form states for filters
  const [vendorName, setVendorName] = useState("");
  const [productName, setProductName] = useState("");
  const [partnershipType, setPartnershipType] = useState("");
  const [subProductName, setSubProductName] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState("10");
  const [searchQuery, setSearchQuery] = useState("");

  const handleReset = () => {
    setVendorName("");
    setProductName("");
    setPartnershipType("");
    setSubProductName("");
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 font-sans text-slate-800">
      {/* Top Header Row */}
      <div className="flex flex-col justify-between items-start gap-4 mb-4 sm:flex-row sm:items-center">
        <div className="flex items-center gap-2">
          {/* User Icon using Tailwind shapes */}
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-bold">
            👤
          </div>
          <h1 className="text-xl font-bold text-slate-800">All Vendor Code</h1>
        </div>

        <div className="flex items-center gap-3 self-end sm:self-auto">
          <Link
            to="/partner/add-vendor-code"
            className="bg-indigo-900 hover:bg-indigo-950 text-white px-4 py-2 rounded text-sm font-semibold flex items-center gap-1 shadow-sm transition inline-flex"
          >
            <span className="text-lg font-bold leading-none">+</span> Add Vendor
            Code
          </Link>
          <div className="border border-slate-200 rounded bg-white px-3 py-1 text-center shadow-sm">
            <div className="text-[10px] text-slate-400 font-medium tracking-wider uppercase">
              Total Vendor Code
            </div>
            <div className="text-lg font-bold text-slate-700 leading-tight">
              171
            </div>
          </div>
        </div>
      </div>

      {/* Main Container Container */}
      <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-5 mb-6">
        {/* Filters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          {/* Vendor Name (Text Input) */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-slate-700">
              Vendor Name
            </label>
            <input
              type="text"
              placeholder="Partner Name"
              value={vendorName}
              onChange={(e) => setVendorName(e.target.value)}
              className="border border-slate-300 rounded px-3 py-1.5 text-sm outline-none focus:border-indigo-500 placeholder-slate-400"
            />
          </div>

          {/* Product Name Dropdown */}
          <div className="flex flex-col gap-1.5 relative">
            <label className="text-xs font-bold text-slate-700">
              Product Name
            </label>
            <div className="relative">
              <select
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                className="w-full border border-slate-300 rounded px-3 py-1.5 text-sm bg-white appearance-none outline-none focus:border-indigo-500 text-slate-600"
              >
                <option value="">Select Product</option>
                <option value="Card By Bank">Card By Bank</option>
              </select>
              <span className="absolute right-3 top-2.5 text-[10px] text-slate-500 pointer-events-none">
                ▼
              </span>
            </div>
          </div>

          {/* Partnership Type Dropdown */}
          <div className="flex flex-col gap-1.5 relative">
            <label className="text-xs font-bold text-slate-700">
              Partnership Type
            </label>
            <div className="relative">
              <select
                value={partnershipType}
                onChange={(e) => setPartnershipType(e.target.value)}
                className="w-full border border-slate-300 rounded px-3 py-1.5 text-sm bg-white appearance-none outline-none focus:border-indigo-500 text-slate-600"
              >
                <option value="">Select Partnership Type</option>
                <option value="DSA">DSA</option>
              </select>
              <span className="absolute right-3 top-2.5 text-[10px] text-slate-500 pointer-events-none">
                ▼
              </span>
            </div>
          </div>

          {/* Sub Product Name Dropdown */}
          <div className="flex flex-col gap-1.5 relative">
            <label className="text-xs font-bold text-slate-700">
              Sub Product Name
            </label>
            <div className="relative">
              <select
                value={subProductName}
                onChange={(e) => setSubProductName(e.target.value)}
                className="w-full border border-slate-300 rounded px-3 py-1.5 text-sm bg-white appearance-none outline-none focus:border-indigo-500 text-slate-600"
              >
                <option value="">Select Sub Product</option>
                <option value="AU Bank Credit Card">AU Bank Credit Card</option>
              </select>
              <span className="absolute right-3 top-2.5 text-[10px] text-slate-500 pointer-events-none">
                ▼
              </span>
            </div>
          </div>
        </div>

        {/* Filter Actions */}
        <div className="flex justify-center gap-2 mb-6">
          <button className="bg-mediumpurple bg-indigo-600 hover:bg-indigo-700 text-white text-sm px-5 py-1.5 rounded font-medium shadow-sm transition">
            Filter
          </button>
          <button
            onClick={handleReset}
            className="border border-indigo-600 text-slate-700 hover:bg-slate-50 text-sm px-4 py-1.5 rounded font-medium flex items-center gap-1 transition"
          >
            <span className="text-xs">↻</span> Reset
          </button>
        </div>

        <hr className="border-slate-100 my-4" />

        {/* Table Controls (Entries and Search) */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
          <div className="flex items-center gap-1.5 text-sm text-slate-600">
            <div className="relative">
              <select
                value={entriesPerPage}
                onChange={(e) => setEntriesPerPage(e.target.value)}
                className="border border-slate-300 rounded pl-2 pr-6 py-1 bg-white appearance-none outline-none text-slate-700 font-medium"
              >
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
              </select>
              <span className="absolute right-2 top-2 text-[8px] text-slate-500 pointer-events-none">
                ▼
              </span>
            </div>
            <span>entries per page</span>
          </div>

          <div className="flex items-center gap-1.5 w-full sm:w-auto">
            <span className="text-sm text-slate-600">Search:</span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border border-slate-300 rounded px-2 py-1 text-sm outline-none focus:border-indigo-500 w-full sm:w-48"
            />
          </div>
        </div>

        {/* Responsive Table Wrapper */}
        <div className="overflow-x-auto border border-slate-200 rounded">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-700 font-bold uppercase tracking-wider">
                <th className="p-3 border-r border-slate-200 whitespace-nowrap">
                  <div className="flex justify-between items-center gap-1">
                    <span>S.NO</span>
                    <span className="text-[9px] text-slate-400 flex flex-col leading-none">
                      ▲▼
                    </span>
                  </div>
                </th>
                <th className="p-3 border-r border-slate-200 whitespace-nowrap">
                  <div className="flex justify-between items-center gap-1">
                    <span>Vendor Name</span>
                    <span className="text-[9px] text-slate-400 flex flex-col leading-none">
                      ▲▼
                    </span>
                  </div>
                </th>
                <th className="p-3 border-r border-slate-200 whitespace-nowrap">
                  <div className="flex justify-between items-center gap-1">
                    <span>Product Name</span>
                    <span className="text-[9px] text-slate-400 flex flex-col leading-none">
                      ▲▼
                    </span>
                  </div>
                </th>
                <th className="p-3 border-r border-slate-200 whitespace-nowrap">
                  <div className="flex justify-between items-center gap-1">
                    <span>Sub Product Name</span>
                    <span className="text-[9px] text-slate-400 flex flex-col leading-none">
                      ▲▼
                    </span>
                  </div>
                </th>
                <th className="p-3 border-r border-slate-200 whitespace-nowrap">
                  <div className="flex justify-between items-center gap-1">
                    <span>Partnership Type</span>
                    <span className="text-[9px] text-slate-400 flex flex-col leading-none">
                      ▲▼
                    </span>
                  </div>
                </th>
                <th className="p-3 border-r border-slate-200 whitespace-nowrap">
                  <div className="flex justify-between items-center gap-1">
                    <span>Partner Name</span>
                    <span className="text-[9px] text-slate-400 flex flex-col leading-none">
                      ▲▼
                    </span>
                  </div>
                </th>
                <th className="p-3 border-r border-slate-200 whitespace-nowrap">
                  <div className="flex justify-between items-center gap-1">
                    <span>Added By</span>
                    <span className="text-[9px] text-slate-400 flex flex-col leading-none">
                      ▲▼
                    </span>
                  </div>
                </th>
                <th className="p-3 border-r border-slate-200 whitespace-nowrap">
                  <div className="flex justify-between items-center gap-1">
                    <span>Partnership Code</span>
                    <span className="text-[9px] text-slate-400 flex flex-col leading-none">
                      ▲▼
                    </span>
                  </div>
                </th>
                <th className="p-3 border-r border-slate-200 whitespace-nowrap">
                  <div className="flex justify-between items-center gap-1">
                    <span>Code Validity</span>
                    <span className="text-[9px] text-slate-400 flex flex-col leading-none">
                      ▲▼
                    </span>
                  </div>
                </th>
                <th className="p-3 whitespace-nowrap">
                  <div className="flex justify-between items-center gap-1">
                    <span>Action</span>
                    <span className="text-[9px] text-slate-400 flex flex-col leading-none">
                      ▲▼
                    </span>
                  </div>
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100 text-slate-600 font-medium">
              {tableData.map((row, index) => (
                <tr
                  key={index}
                  className="hover:bg-slate-50 transition bg-indigo-50/30"
                >
                  <td className="p-3 border-r border-slate-200 text-center">
                    {row.sNo}
                  </td>
                  <td className="p-3 border-r border-slate-200 whitespace-nowrap">
                    {row.vendorName}
                  </td>
                  <td className="p-3 border-r border-slate-200 whitespace-nowrap">
                    {row.productName}
                  </td>
                  <td className="p-3 border-r border-slate-200 whitespace-nowrap">
                    {row.subProductName}
                  </td>
                  <td className="p-3 border-r border-slate-200">
                    {row.partnershipType}
                  </td>
                  <td className="p-3 border-r border-slate-200 whitespace-nowrap">
                    {row.partnerName}
                  </td>
                  <td className="p-3 border-r border-slate-200 whitespace-nowrap">
                    {row.addedBy}
                  </td>
                  <td className="p-3 border-r border-slate-200 whitespace-nowrap">
                    {row.partnershipCode}
                  </td>
                  <td className="p-3 border-r border-slate-200 text-center whitespace-nowrap">
                    {row.codeValidity}
                  </td>
                  <td className="p-3 whitespace-nowrap text-center">
                    <div className="flex justify-center gap-3">
                      {/* Styled text elements replacing Edit/Delete SVGs */}
                      <button
                        title="Edit"
                        className="text-blue-600 hover:text-blue-800 font-bold text-sm border border-blue-200 rounded px-1.5 py-0.5 bg-white shadow-sm"
                      >
                        ✎
                      </button>
                      <button
                        title="Delete"
                        className="text-red-500 hover:text-red-700 font-bold text-sm border border-red-200 rounded px-1.5 py-0.5 bg-white shadow-sm"
                      >
                        🗑
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default VendorCodeDashboard