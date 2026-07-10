import React, { useState } from 'react';

export default function CreateVendorCode() {
  const [formData, setFormData] = useState({
    vendor: '',
    productName: '',
    subProductName: '',
    partnershipType: 'CAPRI GLOBAL Capital Ltd',
    partnershipCode: '',
    codeValidity: ''
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });

    try {
      const response = await fetch('http://localhost:5000/api/vendor-codes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await response.json();

      if (data.success) {
        setMessage({ type: 'success', text: data.message });
        // Reset non-default form fields
        setFormData({
          vendor: '',
          productName: '',
          subProductName: '',
          partnershipType: 'CAPRI GLOBAL Capital Ltd',
          partnershipCode: '',
          codeValidity: ''
        });
      } else {
        setMessage({ type: 'error', text: data.message || 'Something went wrong.' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to connect to the server.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6 flex flex-col items-center justify-start font-sans">
      <div className="w-full max-w-6xl bg-white rounded-xl shadow-sm border border-slate-100 p-8">
        
        {/* Header section with back arrow matching screenshot */}
        <div className="flex items-center gap-4 mb-8">
          <button 
            type="button" 
            className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
            onClick={() => window.history.back()}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
          </button>
          <h1 className="text-xl font-bold text-slate-800">Create Vendor Code</h1>
        </div>

        {/* Feedback Messages */}
        {message.text && (
          <div className={`mb-6 p-4 rounded-lg text-sm font-medium ${message.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
            {message.text}
          </div>
        )}

        {/* Form Grid */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          
          {/* VENDOR */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-slate-900 uppercase tracking-wide">Vendor</label>
            <select 
              name="vendor" 
              value={formData.vendor} 
              onChange={handleChange} 
              required
              className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-slate-700 focus:outline-none focus:border-blue-500 appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23475569%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:1.25rem] bg-[right_1rem_center] bg-no-repeat"
            >
              <option value="">Select</option>
              <option value="Vendor A">Vendor A</option>
              <option value="Vendor B">Vendor B</option>
            </select>
          </div>

          {/* PRODUCT NAME */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-slate-900 uppercase tracking-wide">Product Name</label>
            <select 
              name="productName" 
              value={formData.productName} 
              onChange={handleChange} 
              required
              className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-slate-700 focus:outline-none focus:border-blue-500 appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23475569%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:1.25rem] bg-[right_1rem_center] bg-no-repeat"
            >
              <option value="">Select</option>
              <option value="Product 1">Product 1</option>
              <option value="Product 2">Product 2</option>
            </select>
          </div>

          {/* SUB PRODUCT NAME */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-slate-900 uppercase tracking-wide">Sub Product Name</label>
            <select 
              name="subProductName" 
              value={formData.subProductName} 
              onChange={handleChange} 
              required
              className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-slate-700 focus:outline-none focus:border-blue-500 appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23475569%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:1.25rem] bg-[right_1rem_center] bg-no-repeat"
            >
              <option value="">Select</option>
              <option value="Sub Product 1">Sub Product 1</option>
              <option value="Sub Product 2">Sub Product 2</option>
            </select>
          </div>

          {/* PARTNERSHIP TYPE */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-slate-900 uppercase tracking-wide">Partnership Type</label>
            <select 
              name="partnershipType" 
              value={formData.partnershipType} 
              onChange={handleChange} 
              required
              className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-slate-700 focus:outline-none focus:border-blue-500 appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23475569%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:1.25rem] bg-[right_1rem_center] bg-no-repeat"
            >
              <option value="CAPRI GLOBAL Capital Ltd">CAPRI GLOBAL Capital Ltd</option>
              <option value="Other Partnership">Other Partnership</option>
            </select>
          </div>

          {/* PARTNERSHIP CODE */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-slate-900 uppercase tracking-wide">Partnership Code</label>
            <input 
              type="text" 
              name="partnershipCode" 
              value={formData.partnershipCode} 
              onChange={handleChange} 
              placeholder="Enter partnership code" 
              required
              className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-slate-700 placeholder-slate-400 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* CODE VALIDITY */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-slate-900 uppercase tracking-wide">Code Validity</label>
            <input 
              type="date" 
              name="codeValidity" 
              value={formData.codeValidity} 
              onChange={handleChange} 
              required
              className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-slate-700 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* SUBMIT BUTTON */}
          <div className="md:col-span-2 flex justify-end mt-4">
            <button 
              type="submit" 
              disabled={loading}
              className="bg-indigo-900 hover:bg-indigo-950 text-white font-medium px-6 py-2.5 rounded-lg flex items-center gap-2 shadow-sm transition-colors disabled:opacity-50"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              {loading ? 'Submitting...' : 'Submit'}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}