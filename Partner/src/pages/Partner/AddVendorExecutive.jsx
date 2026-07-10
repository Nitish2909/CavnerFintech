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
    <div className="min-h-screen bg-slate-50 p-4 sm:p-6 md:p-8 font-sans">
      {/* Container to constrain width on ultra-wide screens */}
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="flex items-center space-x-3 mb-6">
          <button 
            onClick={() => window.history.back()}
            className="flex items-center justify-center w-8 h-8 rounded bg-blue-600 text-white hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-label="Go back"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-800">Add Vendor Executive</h1>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-slate-800 mb-4">
            Upload Vendor Executive via Excel
          </h2>

          {/* Download Action */}
          <div className="mb-6">
            <a 
              href="/templates/sample_vendor_executive.xlsx" 
              download
              className="text-blue-600 hover:text-blue-800 text-sm font-medium hover:underline transition-colors"
            >
              Download Sample Excel
            </a>
          </div>

          {/* Form / Interactive Area */}
          <form onSubmit={handleUpload} className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-slate-800 mb-2">
                Upload Excel File
              </label>
              
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                {/* Custom-styled File Input Wrapper */}
                <div className="flex flex-1 items-center border border-slate-300 rounded-md bg-white overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
                  <label className="bg-slate-100 text-slate-700 px-4 py-2.5 text-sm font-medium border-r border-slate-300 cursor-pointer hover:bg-slate-200 transition-colors shrink-0">
                    Choose File
                    <input 
                      type="file" 
                      accept=".xlsx, .xls" 
                      className="hidden" 
                      onChange={handleFileChange}
                    />
                  </label>
                  <span className="px-3 text-sm text-slate-500 truncate">
                    {file ? file.name : 'No file chosen'}
                  </span>
                </div>

                {/* Upload Button */}
                <button
                  type="submit"
                  disabled={uploading}
                  className="bg-indigo-700 hover:bg-indigo-800 text-white font-medium px-6 py-2.5 rounded-md shadow-sm transition-colors text-sm disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 shrink-0"
                >
                  {uploading ? 'Uploading...' : 'Upload Excel'}
                </button>
              </div>
            </div>

            {/* Notification Messages */}
            {message.text && (
              <div className={`p-3 rounded-md text-sm ${message.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                {message.text}
              </div>
            )}

            {/* Divider Line */}
            <hr className="border-slate-100" />

            {/* Footer Informational Text */}
            <p className="text-xs sm:text-sm text-slate-500">
              <span className="font-medium text-slate-600">Note:</span> Same email can be repeated for multiple bank experiences.
            </p>
          </form>
        </div>

      </div>
    </div>
  );
}