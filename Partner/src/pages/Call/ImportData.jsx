import React, { useState } from 'react';

const ImportData =()=> {
  const [dataName, setDataName] = useState('');
  const [dataType, setDataType] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 p-6 font-sans">
      {/* Top Header Section */}
      <div className="max-w-7xl mx-auto mb-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          {/* Custom Pure CSS Icon for Data Import */}
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-lg shadow-sm">
            ⇄
          </div>
          <h1 className="text-xl font-bold text-slate-800">Data Import</h1>
        </div>
        
        {/* Download Button */}
        <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-4 py-2 rounded flex items-center space-x-1 transition-colors shadow-sm text-sm">
          <span className="text-base leading-none">⤓</span>
          <span className="italic">Download</span>
        </button>
      </div>

      {/* Main Card Container */}
      <div className="max-w-7xl mx-auto bg-white rounded-xl border border-slate-200 shadow-sm p-6">
        
        {/* Form Controls Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end mb-6">
          
          {/* Data Name Input */}
          <div className="md:col-span-3">
            <label className="block text-sm font-bold text-slate-800 mb-2">Data Name</label>
            <input
              type="text"
              placeholder="User Name"
              value={dataName}
              onChange={(e) => setDataName(e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:border-blue-500 placeholder-slate-400 text-sm"
            />
          </div>

          {/* Data Type Input */}
          <div className="md:col-span-3">
            <label className="block text-sm font-bold text-slate-800 mb-2">Data Type</label>
            <input
              type="text"
              placeholder="Data type"
              value={dataType}
              onChange={(e) => setDataType(e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:border-blue-500 placeholder-slate-400 text-sm"
            />
          </div>

          {/* Choose File Input */}
          <div className="md:col-span-4">
            <label className="block text-sm font-bold text-slate-800 mb-2">Choose File</label>
            <div className="flex items-center border border-slate-300 rounded overflow-hidden h-[38px]">
              <label className="bg-slate-100 hover:bg-slate-200 text-slate-800 px-4 py-2 border-r border-slate-300 cursor-pointer text-sm font-medium transition-colors whitespace-nowrap">
                Choose File
                <input
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>
              <span className="px-3 text-sm text-slate-500 truncate">
                {selectedFile ? selectedFile.name : 'No file chosen'}
              </span>
            </div>
          </div>

          {/* Upload Button */}
          <div className="md:col-span-2">
            <button className="w-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-semibold py-2 rounded transition-colors text-sm h-[38px]">
              Upload
            </button>
          </div>
        </div>

        {/* Data Table Section */}
        <div className="overflow-x-auto border border-slate-200 rounded">
          <table className="w-full text-left border-collapse min-w-[900px]">
            <thead>
              <tr className="bg-white border-b border-slate-200 text-slate-700 text-sm font-bold">
                {[
                  { label: 'S.No.', width: 'w-16' },
                  { label: 'Import User Name' },
                  { label: 'Data Name' },
                  { label: 'Data Type' },
                  { label: 'Total No Of Data' },
                  { label: 'Date' },
                  { label: 'Used Data' },
                  { label: 'Unused Data' },
                  { label: 'Action', sortable: false }
                ].map((col, index) => (
                  <th 
                    key={index} 
                    className={`p-3 border-r border-slate-200 last:border-r-0 ${col.width || ''}`}
                  >
                    <div className="flex items-center justify-between cursor-pointer select-none">
                      <span>{col.label}</span>
                      {col.sortable !== false && (
                        <span className="text-[10px] text-slate-400 flex flex-col space-y-[-4px] ml-2">
                          <span>▲</span>
                          <span>▼</span>
                        </span>
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* Empty State Row */}
              <tr className="bg-[#EEF2FF]">
                <td colSpan="9" className="text-center py-4 text-sm text-slate-600 font-medium">
                  No data available in table
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Footer Pagination & Info Controls */}
        <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-slate-700 font-medium">
            Showing 0 to 0 of 0 entries
          </div>
          
          <div className="flex items-center space-x-2">
            <button className="w-8 h-8 bg-blue-700 hover:bg-blue-800 text-white rounded-full flex items-center justify-center transition-colors font-bold text-sm disabled:opacity-50">
              ‹
            </button>
            <button className="w-8 h-8 bg-blue-700 hover:bg-blue-800 text-white rounded-full flex items-center justify-center transition-colors font-bold text-sm disabled:opacity-50">
              ›
            </button>
          </div>
        </div>

        {/* Custom Custom Scrollbar Indicator Wrapper */}
        <div className="mt-4 border-t border-slate-200 pt-2 flex items-center justify-between text-xs text-slate-400">
          <span>◀</span>
          <div className="w-full h-2 bg-slate-300 rounded mx-2 relative">
            <div className="absolute left-0 top-0 h-full w-20 bg-slate-400 rounded"></div>
          </div>
          <span>▶</span>
        </div>

      </div>
    </div>
  );
}

export default ImportData;