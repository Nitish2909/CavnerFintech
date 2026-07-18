import React, { useState } from 'react';

export default function AddVendorExecutive() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) {
      setMessage({ type: 'error', text: 'Please select an Excel file first.' });
      return;
    }

    const formData = new FormData();
    formData.append('excelFile', file);

    try {
      setUploading(true);
      setMessage({ type: '', text: '' });

      const response = await fetch('/api/vendor-executives/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ type: 'success', text: data.message || 'File uploaded and processed successfully!' });
        setFile(null);
      } else {
        setMessage({ type: 'error', text: data.message || 'Failed to upload file.' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'An error occurred while uploading.' });
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/60 p-4 sm:p-6 md:p-8 font-sans antialiased text-slate-600">
      {/* Container to constrain width on ultra-wide screens */}
      <div className="max-w-3xl mx-auto">
        
        {/* Header Section */}
        <div className="flex items-center space-x-4 mb-6">
          <button 
            onClick={() => window.history.back()}
            className="flex items-center justify-center w-9 h-9 rounded-xl bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-all focus:outline-none focus:ring-4 focus:ring-slate-100 shadow-sm active:scale-95"
            aria-label="Go back"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>
          <div>
            <h1 className="text-xl font-bold tracking-tight text-slate-900">Add Vendor Executive</h1>
            <p className="text-xs text-slate-400 mt-0.5">Expand your distribution and agent hierarchy</p>
          </div>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200/80 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-6 pb-4 border-b border-slate-100">
            <h2 className="text-base font-semibold text-slate-800">
              Upload Vendor Executive via Excel
            </h2>
            
            {/* Download Action */}
            <a 
              href="/templates/sample_vendor_executive.xlsx" 
              download
              className="inline-flex items-center text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors bg-blue-50/50 hover:bg-blue-50 px-2.5 py-1.5 rounded-lg border border-blue-100/50"
            >
              <span className="mr-1">⬇</span> Download Template
            </a>
          </div>

          {/* Form / Interactive Area */}
          <form onSubmit={handleUpload} className="space-y-6">
            <div>
              <label className="block text-xs font-semibold tracking-wide uppercase text-slate-500 mb-2">
                Upload Excel File
              </label>
              
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                {/* Custom-styled File Input Wrapper */}
                <div className="flex flex-1 items-center border border-slate-200 bg-slate-50/50 rounded-xl overflow-hidden h-[44px] focus-within:ring-4 focus-within:ring-blue-500/10 focus-within:border-blue-500 transition-all">
                  <label className="bg-slate-200/60 text-slate-700 px-4 h-full flex items-center text-sm font-semibold border-r border-slate-200 cursor-pointer hover:bg-slate-200 transition-colors shrink-0">
                    Browse File
                    <input 
                      type="file" 
                      accept=".xlsx, .xls" 
                      className="hidden" 
                      onChange={handleFileChange}
                    />
                  </label>
                  <span className="px-3.5 text-sm text-slate-700 font-medium truncate">
                    {file ? file.name : 'No template file selected'}
                  </span>
                </div>

                {/* Upload Button */}
                <button
                  type="submit"
                  disabled={uploading}
                  className="bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white font-semibold px-6 h-[44px] rounded-xl shadow-sm shadow-blue-500/10 transition-all text-sm disabled:opacity-50 focus:outline-none focus:ring-4 focus:ring-blue-500/20 shrink-0"
                >
                  {uploading ? (
                    <span className="flex items-center space-x-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                      <span>Processing...</span>
                    </span>
                  ) : 'Upload Data'}
                </button>
              </div>
            </div>

            {/* Notification Messages */}
            {message.text && (
              <div className={`p-3.5 rounded-xl border text-sm font-medium flex items-start space-x-2.5 transition-all ${
                message.type === 'success' 
                  ? 'bg-emerald-50/60 text-emerald-800 border-emerald-100' 
                  : 'bg-rose-50/60 text-rose-800 border-rose-100'
              }`}>
                <span className="text-base leading-none">
                  {message.type === 'success' ? '✓' : '⚠'}
                </span>
                <span className="flex-1">{message.text}</span>
              </div>
            )}

            {/* Divider Line */}
            <hr className="border-slate-100" />

            {/* Footer Informational Text */}
            <div className="flex items-center space-x-2 bg-amber-50/40 border border-amber-100/60 p-3 rounded-xl">
              <span className="text-amber-600 text-sm">💡</span>
              <p className="text-xs text-slate-500 leading-relaxed">
                <span className="font-semibold text-slate-700">System Note:</span> The same email identifier can safely be listed across multiple rows to accommodate various banking experience histories.
              </p>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}