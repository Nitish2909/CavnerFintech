import React, { useState } from 'react';
import { 
  Calendar, 
  Bell, 
  CheckCircle, 
  Clock, 
  AlertTriangle, 
  Download, 
  Users, 
  User, 
  Phone, 
  MapPin, 
  FileText,
  RotateCcw,
  Search,
  SlidersHorizontal
} from 'lucide-react';

export default function MyLead() {
  // Mock State for Form Filters
  const [filters, setFilters] = useState({
    customerName: '',
    mobileNumber: '',
    status: 'Any status',
    pinCode: '',
    source: '',
    date: ''
  });

  // Mock Data for the single record shown in the screenshot
  const mockLeads = [
    {
      id: 1,
      leadId: "LEAD-2026-001",
      product: "Personal Loan",
      customer: "Rahul Verma",
      contact: "9876543210",
      requirement: "5,00,000 INR",
      sla: "Breached",
      status: "Pending Follow-up",
      source: "Online Website"
    }
  ];

  const handleReset = () => {
    setFilters({
      customerName: '',
      mobileNumber: '',
      status: 'Any status',
      pinCode: '',
      source: '',
      date: ''
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6 font-sans text-slate-700">
      
      {/* --- HEADER SECTION --- */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-slate-200 pb-5 mb-6">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">My Lead</span>
          <h1 className="text-2xl font-bold text-slate-900 mt-1">Lead inbox overview</h1>
          <p className="text-sm text-slate-500 mt-1">Track every captured lead, their source, and current journey stage.</p>
        </div>
        
        <div className="flex items-center gap-3 mt-4 md:mt-0">
          <button className="flex items-center gap-2 border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium rounded shadow-sm hover:bg-slate-50 text-slate-700">
            <Download size={15} /> Export
          </button>
          <button className="flex items-center gap-2 bg-[#6D28D9] px-4 py-1.5 text-sm font-medium text-white rounded shadow-sm hover:bg-[#5B21B6]">
            <Users size={15} /> View team lead
          </button>
        </div>
      </div>

      {/* --- KPIS / COUNTER CARDS --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {/* Row 1 */}
        <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm flex items-start gap-4">
          <div className="p-2.5 bg-blue-50 text-blue-600 rounded-md">
            <Calendar size={20} />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Today Leads</p>
            <p className="text-3xl font-bold text-slate-900 mt-1">0</p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm flex items-start gap-4">
          <div className="p-2.5 bg-orange-50 text-orange-500 rounded-md">
            <Bell size={20} />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Pending Follow-ups</p>
            <p className="text-3xl font-bold text-slate-900 mt-1">0</p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm flex items-start gap-4">
          <div className="p-2.5 bg-green-50 text-green-600 rounded-md">
            <CheckCircle size={20} />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Closed Today</p>
            <p className="text-3xl font-bold text-slate-900 mt-1">0</p>
          </div>
        </div>

        {/* Row 2 */}
        <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm flex items-start gap-4">
          <div className="p-2.5 bg-cyan-50 text-cyan-600 rounded-md">
            <Clock size={20} />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">SLA On Track</p>
            <p className="text-3xl font-bold text-slate-900 mt-1">0</p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm flex items-start gap-4 md:col-span-2">
          <div className="p-2.5 bg-red-50 text-red-500 rounded-md">
            <AlertTriangle size={20} />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">SLA Breaches</p>
            <p className="text-3xl font-bold text-slate-900 mt-1 text-red-600">1</p>
          </div>
        </div>
      </div>

      {/* --- QUICK FILTERS --- */}
      <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Quick Filters</h2>
            <p className="text-sm font-semibold text-slate-800 mt-0.5">Narrow down leads</p>
          </div>
          <div className="flex items-center gap-2 self-end sm:self-auto">
            <button className="flex items-center gap-1.5 bg-[#6D28D9] text-white text-sm font-medium px-4 py-1.5 rounded shadow-sm hover:bg-[#5B21B6]">
              <SlidersHorizontal size={14} /> Apply
            </button>
            <button 
              onClick={handleReset}
              className="flex items-center gap-1.5 border border-slate-300 text-slate-700 bg-white text-sm font-medium px-4 py-1.5 rounded shadow-sm hover:bg-slate-50"
            >
              <RotateCcw size={14} /> Reset
            </button>
          </div>
        </div>

        {/* Filters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Customer Name */}
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">Customer name</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400 bg-slate-50 border-r border-slate-200 rounded-l h-full px-2.5">
                <User size={14} />
              </span>
              <input 
                type="text" 
                placeholder="e.g. Rohan Sharma"
                value={filters.customerName}
                onChange={(e) => setFilters({...filters, customerName: e.target.value})}
                className="w-full pl-12 pr-3 py-2 text-sm border border-slate-200 rounded focus:outline-none focus:ring-1 focus:ring-violet-500 focus:border-violet-500"
              />
            </div>
          </div>

          {/* Mobile Number */}
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">Mobile number</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400 bg-slate-50 border-r border-slate-200 rounded-l h-full px-2.5">
                <Phone size={14} />
              </span>
              <input 
                type="text" 
                placeholder="10 digit number"
                value={filters.mobileNumber}
                onChange={(e) => setFilters({...filters, mobileNumber: e.target.value})}
                className="w-full pl-12 pr-3 py-2 text-sm border border-slate-200 rounded focus:outline-none focus:ring-1 focus:ring-violet-500 focus:border-violet-500"
              />
            </div>
          </div>

          {/* Status Select */}
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">Status</label>
            <select 
              value={filters.status}
              onChange={(e) => setFilters({...filters, status: e.target.value})}
              className="w-full px-3 py-2 text-sm border border-slate-200 bg-white rounded focus:outline-none focus:ring-1 focus:ring-violet-500 focus:border-violet-500"
            >
              <option>Any status</option>
              <option>Pending Follow-up</option>
              <option>SLA Breached</option>
              <option>Closed</option>
            </select>
          </div>

          {/* Pin Code */}
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">Pin code</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400 bg-slate-50 border-r border-slate-200 rounded-l h-full px-2.5">
                <MapPin size={14} />
              </span>
              <input 
                type="text" 
                placeholder="e.g. 110001"
                value={filters.pinCode}
                onChange={(e) => setFilters({...filters, pinCode: e.target.value})}
                className="w-full pl-12 pr-3 py-2 text-sm border border-slate-200 rounded focus:outline-none focus:ring-1 focus:ring-violet-500 focus:border-violet-500"
              />
            </div>
          </div>

          {/* Source */}
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">Source</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400 bg-slate-50 border-r border-slate-200 rounded-l h-full px-2.5">
                <FileText size={14} />
              </span>
              <input 
                type="text" 
                placeholder="Referral, online..."
                value={filters.source}
                onChange={(e) => setFilters({...filters, source: e.target.value})}
                className="w-full pl-12 pr-3 py-2 text-sm border border-slate-200 rounded focus:outline-none focus:ring-1 focus:ring-violet-500 focus:border-violet-500"
              />
            </div>
          </div>

          {/* Calendar */}
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">Calendar</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400 bg-slate-50 border-r border-slate-200 rounded-l h-full px-2.5">
                <Calendar size={14} />
              </span>
              <input 
                type="date" 
                value={filters.date}
                onChange={(e) => setFilters({...filters, date: e.target.value})}
                className="w-full pl-12 pr-3 py-2 text-sm border border-slate-200 rounded text-slate-400 focus:outline-none focus:ring-1 focus:ring-violet-500 focus:border-violet-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* --- LEAD REGISTER TABLE --- */}
      <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-100">
          <h2 className="text-base font-semibold text-slate-900">Lead register</h2>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 self-end sm:self-auto">
            <div className="flex items-center gap-1.5">
              <select className="border border-slate-200 rounded px-1.5 py-1 text-xs bg-white">
                <option>10</option>
                <option>25</option>
                <option>50</option>
              </select>
              <span>entries per page</span>
            </div>

            <div className="relative flex items-center">
              <span className="text-xs mr-2">Search:</span>
              <input 
                type="text" 
                className="border border-slate-200 rounded px-2 py-1 text-xs focus:outline-none focus:ring-1 focus:ring-violet-500"
              />
            </div>
          </div>
        </div>

        {/* Responsive Table Wrapper */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-xs font-bold text-slate-500 uppercase tracking-wider">
                <th className="py-3 px-4 w-12">#</th>
                <th className="py-3 px-4">Lead</th>
                <th className="py-3 px-4">Product</th>
                <th className="py-3 px-4">Customer</th>
                <th className="py-3 px-4">Contact</th>
                <th className="py-3 px-4">Requirement</th>
                <th className="py-3 px-4">SLA</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Source</th>
                <th className="py-3 px-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {mockLeads.map((lead, index) => (
                <tr key={lead.id} className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-3.5 px-4 font-medium text-slate-400">{index + 1}</td>
                  <td className="py-3.5 px-4 font-semibold text-violet-600">{lead.leadId}</td>
                  <td className="py-3.5 px-4">{lead.product}</td>
                  <td className="py-3.5 px-4 font-medium text-slate-900">{lead.customer}</td>
                  <td className="py-3.5 px-4">{lead.contact}</td>
                  <td className="py-3.5 px-4">{lead.requirement}</td>
                  <td className="py-3.5 px-4">
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-50 text-red-700 border border-red-100">
                      {lead.sla}
                    </span>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-amber-50 text-amber-700 border border-amber-100">
                      {lead.status}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-slate-500">{lead.source}</td>
                  <td className="py-3.5 px-4 text-center">
                    <button className="text-xs bg-slate-100 border border-slate-200 text-slate-700 px-2.5 py-1 rounded hover:bg-slate-200 transition-colors">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Table Footer */}
        <div className="p-4 bg-slate-50/50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <div>Showing 1 to 1 of 1 records</div>
          <div className="flex gap-1">
            <button className="px-2 py-1 border border-slate-200 bg-white rounded disabled:opacity-50" disabled>Previous</button>
            <button className="px-2.5 py-1 bg-[#6D28D9] text-white rounded">1</button>
            <button className="px-2 py-1 border border-slate-200 bg-white rounded disabled:opacity-50" disabled>Next</button>
          </div>
        </div>
      </div>

    </div>
  );
}