import React, { useState } from 'react';

const AddStatus = ({ onBackClick }) => {
  const [statusName, setStatusName] = useState('');
  const [statusColor, setStatusColor] = useState('#4f46e5');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Status Form Submitted: ${statusName} (${statusColor})`);
    onBackClick(); // Redirect back after saving
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 font-sans antialiased text-gray-800">
      {/* Header Card */}
      <div className="mb-6 flex items-center gap-4 rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
        <button 
          onClick={onBackClick}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition hover:bg-gray-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
        </button>
        <div>
          <p className="text-xs font-semibold tracking-wider text-gray-400 uppercase">Configuration</p>
          <h1 className="text-3xl font-bold text-gray-900">Add New Status</h1>
        </div>
      </div>

      {/* Main Form Box */}
      <div className="max-w-xl rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="mb-1.5 block text-sm font-semibold text-gray-700">Status Label/Name</label>
            <input 
              type="text" 
              required
              value={statusName}
              onChange={(e) => setStatusName(e.target.value)}
              placeholder="e.g., Connected, Busy, Not Interested" 
              className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 outline-none transition focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-semibold text-gray-700">Status Type / Category</label>
            <select className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 outline-none transition focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500">
              <option>Answered</option>
              <option>Unanswered</option>
              <option>Follow Up Required</option>
              <option>Dead / Do Not Call</option>
            </select>
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-semibold text-gray-700">Color Tag</label>
            <div className="flex items-center gap-3">
              <input 
                type="color" 
                value={statusColor}
                onChange={(e) => setStatusColor(e.target.value)}
                className="h-10 w-12 cursor-pointer rounded border border-gray-200 p-1 bg-white"
              />
              <span className="text-xs font-mono text-gray-500 uppercase">{statusColor}</span>
            </div>
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-semibold text-gray-700">Description</label>
            <textarea 
              rows="3"
              placeholder="Provide a short description for context..." 
              className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 outline-none transition focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            ></textarea>
          </div>

          <div className="flex justify-end gap-3 pt-2">
            <button 
              type="button"
              onClick={onBackClick}
              className="rounded-lg border border-gray-200 bg-white px-5 py-2 text-sm font-medium text-gray-600 shadow-sm transition hover:bg-gray-50"
            >
              Cancel
            </button>
            <button 
              type="submit"
              className="rounded-lg bg-indigo-600 px-5 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-indigo-700"
            >
              Save Status
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddStatus;