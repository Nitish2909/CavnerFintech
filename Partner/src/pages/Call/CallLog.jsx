import { Link,Plus } from 'lucide-react';
import React from 'react';

const CallLog = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6 font-sans antialiased text-gray-800">
      {/* Header Card */}
      <div className="mb-6 flex items-center justify-between rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
        <div className="flex items-center gap-4">
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition hover:bg-blue-100">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
          </button>
          <div>
            <p className="text-xs font-semibold tracking-wider text-gray-400 uppercase">Calling Performance</p>
            <h1 className="text-3xl font-bold text-gray-900">Call log</h1>
          </div>
        </div>
        <div className="text-right">
          <p className="text-xs font-semibold tracking-wider text-gray-400 uppercase">Total Records</p>
          <p className="text-4xl font-bold text-gray-900">2</p>
        </div>
      </div>

      {/* Filters & Actions Section */}
      <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-800">Filters</h2>
        <Link
              to="/call/calling-status"
              className="flex-1 sm:flex-initial justify-center bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-4 py-2 rounded-lg transition-colors text-sm flex items-center gap-1.5 shadow-sm"
            >
              <Plus className="w-4 h-4 text-white/90" />
              <span className="whitespace-nowrap">Add Status</span>
            </Link>
        </div>

        {/* Filter Form Controls */}
        <div className="mb-8 flex flex-wrap items-end gap-4 bg-gray-50/50 p-4 rounded-xl border border-gray-150">
          <div className="flex-1 min-w-[240px]">
            <label className="mb-1.5 block text-xs font-semibold text-gray-500">Team Leader</label>
            <select className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 outline-none transition focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500">
              <option>Select team leader</option>
            </select>
          </div>

          <div className="flex-1 min-w-[240px]">
            <label className="mb-1.5 block text-xs font-semibold text-gray-500">Employee name</label>
            <input 
              type="text" 
              placeholder="Search employee" 
              className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 outline-none transition focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          <div className="flex gap-2">
            <button className="flex items-center gap-1.5 rounded-lg bg-indigo-600 px-5 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-indigo-700">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
              </svg>
              Apply
            </button>
            <button className="flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-5 py-2 text-sm font-medium text-gray-600 shadow-sm transition hover:bg-gray-50">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
              </svg>
              Reset
            </button>
          </div>
        </div>

        {/* Table Controls */}
        <div className="mb-4 flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <select className="rounded-lg border border-gray-200 bg-white px-2 py-1 outline-none focus:border-indigo-500">
              <option>10</option>
              <option>25</option>
              <option>50</option>
            </select>
            <span>entries per page</span>
          </div>
          <div className="flex items-center gap-2">
            <span>Search:</span>
            <input 
              type="text" 
              className="rounded-lg border border-gray-200 bg-white px-3 py-1 outline-none transition focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
          </div>
        </div>

        {/* Data Table */}
        <div className="overflow-x-auto rounded-xl border border-gray-150">
          <table className="w-full border-collapse text-left text-sm text-gray-600">
            <thead className="bg-slate-50 text-xs font-bold uppercase tracking-wider text-gray-700 border-b border-gray-200">
              <tr>
                <th className="px-4 py-3.5"><div className="flex items-center gap-1"># <span>⇅</span></div></th>
                <th className="px-4 py-3.5"><div className="flex items-center gap-1">Name <span>⇅</span></div></th>
                <th className="px-4 py-3.5"><div className="flex items-center gap-1">Info <span>⇅</span></div></th>
                <th className="px-4 py-3.5"><div className="flex items-center gap-1">Phone <span>⇅</span></div></th>
                <th className="px-4 py-3.5"><div className="flex items-center gap-1">Total Assigned <span>⇅</span></div></th>
                <th className="px-4 py-3.5"><div className="flex items-center gap-1">Today Assigned <span>⇅</span></div></th>
                <th className="px-4 py-3.5"><div className="flex items-center gap-1">Available <span>⇅</span></div></th>
                <th className="px-4 py-3.5"><div className="flex items-center gap-1">Total Calls <span>⇅</span></div></th>
                <th className="px-4 py-3.5"><div className="flex items-center gap-1">Today Calls <span>⇅</span></div></th>
                <th className="px-4 py-3.5">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 bg-white">
              {/* Empty state shown for demonstration */}
              <tr className="hover:bg-gray-50/50">
                <td colSpan="10" className="px-4 py-8 text-center text-gray-400 italic">
                  No records matching the search criteria.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CallLog;