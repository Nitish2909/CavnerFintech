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

const MyLead = () => {
  // Mock State for Form Filters - Identical, fully functional
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
    <div className="min-h-screen bg-slate-50/60 p-4 md:p-8 font-sans text-slate-600 antialiased">
      
      {/* --- HEADER SECTION --- */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-slate-200/80 pb-6 mb-8 max-w-7xl mx-auto">
        <div>
          <span className="inline-flex items-center px-2.5 py-0.5 text-xs font-bold uppercase tracking-widest text-violet-600 bg-violet-50 rounded-md">
            My Lead
          </span>
          <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mt-2">Lead inbox overview</h1>
          <p className="text-sm text-slate-500 mt-1 font-medium">Track every captured lead, their source, and current journey stage.</p>
        </div>
        
        <div className="flex items-center gap-3 mt-5 md:mt-0">
          <button className="flex items-center gap-2 border border-slate-200 bg-white px-4 py-2 text-sm font-semibold rounded-xl shadow-sm hover:bg-slate-50 text-slate-700 active:scale-[0.98] transition-all duration-150">
            <Download size={16} className="text-slate-500" /> Export
          </button>
          <button className="flex items-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 px-4 py-2 text-sm font-semibold text-white rounded-xl shadow-md shadow-violet-600/10 hover:from-violet-700 hover:to-indigo-700 active:scale-[0.98] transition-all duration-150">
            <Users size={16} /> View team lead
          </button>
        </div>
      </div>

      {/* --- KPIS / COUNTER CARDS --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8 max-w-7xl mx-auto">
        {/* Row 1 */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-xl shadow-slate-100/40 flex items-center gap-5 transition-transform hover:-translate-y-0.5 duration-200">
          <div className="p-3 bg-blue-50 text-blue-600 rounded-xl border border-blue-100/60">
            <Calendar size={22} className="stroke-[2.2]" />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Today Leads</p>
            <p className="text-3xl font-black text-slate-900 mt-0.5 tracking-tight">0</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-xl shadow-slate-100/40 flex items-center gap-5 transition-transform hover:-translate-y-0.5 duration-200">
          <div className="p-3 bg-orange-50 text-orange-500 rounded-xl border border-orange-100/60">
            <Bell size={22} className="stroke-[2.2]" />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Pending Follow-ups</p>
            <p className="text-3xl font-black text-slate-900 mt-0.5 tracking-tight">0</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-xl shadow-slate-100/40 flex items-center gap-5 transition-transform hover:-translate-y-0.5 duration-200">
          <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl border border-emerald-100/60">
            <CheckCircle size={22} className="stroke-[2.2]" />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Closed Today</p>
            <p className="text-3xl font-black text-slate-900 mt-0.5 tracking-tight">0</p>
          </div>
        </div>

        {/* Row 2 */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-xl shadow-slate-100/40 flex items-center gap-5 transition-transform hover:-translate-y-0.5 duration-200">
          <div className="p-3 bg-cyan-50 text-cyan-600 rounded-xl border border-cyan-100/60">
            <Clock size={22} className="stroke-[2.2]" />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">SLA On Track</p>
            <p className="text-3xl font-black text-slate-900 mt-0.5 tracking-tight">0</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-xl shadow-slate-100/40 flex items-center gap-5 md:col-span-2 transition-transform hover:-translate-y-0.5 duration-200">
          <div className="p-3 bg-rose-50 text-rose-500 rounded-xl border border-rose-100/60">
            <AlertTriangle size={22} className="stroke-[2.2]" />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">SLA Breaches</p>
            <p className="text-3xl font-black text-rose-600 mt-0.5 tracking-tight">1</p>
          </div>
        </div>
      </div>

      {/* --- QUICK FILTERS --- */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-xl shadow-slate-100/40 mb-8 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Quick Filters</span>
            <p className="text-base font-extrabold text-slate-900 mt-0.5 tracking-tight">Narrow down leads</p>
          </div>
          <div className="flex items-center gap-3 self-end sm:self-auto">
            <button className="flex items-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-sm font-semibold px-4 py-2 rounded-xl shadow-md shadow-violet-600/10 hover:from-violet-700 hover:to-indigo-700 active:scale-[0.98] transition-all duration-150">
              <SlidersHorizontal size={15} className="stroke-[2.2]" /> Apply
            </button>
            <button 
              onClick={handleReset}
              className="flex items-center gap-2 border border-slate-200 text-slate-700 bg-white text-sm font-semibold px-4 py-2 rounded-xl shadow-sm hover:bg-slate-50 active:scale-[0.98] transition-all duration-150"
            >
              <RotateCcw size={15} className="text-slate-400 stroke-[2.2]" /> Reset
            </button>
          </div>
        </div>

        {/* Filters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Customer Name */}
          <div>
            <label className="block text-xs font-bold text-slate-500 tracking-wider uppercase mb-1.5">Customer name</label>
            <div className="relative group">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400 pointer-events-none group-focus-within:text-violet-600 transition-colors">
                <User size={15} />
              </span>
              <input 
                type="text" 
                placeholder="e.g. Rohan Sharma"
                value={filters.customerName}
                onChange={(e) => setFilters({...filters, customerName: e.target.value})}
                className="w-full pl-10 pr-3 py-2.5 text-sm bg-slate-50/50 hover:bg-slate-50 focus:bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-violet-600/10 focus:border-violet-600 transition-all font-medium text-slate-800 placeholder:text-slate-400"
              />
            </div>
          </div>

          {/* Mobile Number */}
          <div>
            <label className="block text-xs font-bold text-slate-500 tracking-wider uppercase mb-1.5">Mobile number</label>
            <div className="relative group">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400 pointer-events-none group-focus-within:text-violet-600 transition-colors">
                <Phone size={15} />
              </span>
              <input 
                type="text" 
                placeholder="10 digit number"
                value={filters.mobileNumber}
                onChange={(e) => setFilters({...filters, mobileNumber: e.target.value})}
                className="w-full pl-10 pr-3 py-2.5 text-sm bg-slate-50/50 hover:bg-slate-50 focus:bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-violet-600/10 focus:border-violet-600 transition-all font-medium text-slate-800 placeholder:text-slate-400"
              />
            </div>
          </div>

          {/* Status Select */}
          <div>
            <label className="block text-xs font-bold text-slate-500 tracking-wider uppercase mb-1.5">Status</label>
            <select 
              value={filters.status}
              onChange={(e) => setFilters({...filters, status: e.target.value})}
              className="w-full px-3.5 py-2.5 text-sm bg-slate-50/50 hover:bg-slate-50 focus:bg-white border border-slate-200 text-slate-800 font-medium rounded-xl focus:outline-none focus:ring-4 focus:ring-violet-600/10 focus:border-violet-600 transition-all cursor-pointer"
            >
              <option>Any status</option>
              <option>Pending Follow-up</option>
              <option>SLA Breached</option>
              <option>Closed</option>
            </select>
          </div>

          {/* Pin Code */}
          <div>
            <label className="block text-xs font-bold text-slate-500 tracking-wider uppercase mb-1.5">Pin code</label>
            <div className="relative group">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400 pointer-events-none group-focus-within:text-violet-600 transition-colors">
                <MapPin size={15} />
              </span>
              <input 
                type="text" 
                placeholder="e.g. 110001"
                value={filters.pinCode}
                onChange={(e) => setFilters({...filters, pinCode: e.target.value})}
                className="w-full pl-10 pr-3 py-2.5 text-sm bg-slate-50/50 hover:bg-slate-50 focus:bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-violet-600/10 focus:border-violet-600 transition-all font-medium text-slate-800 placeholder:text-slate-400"
              />
            </div>
          </div>

          {/* Source */}
          <div>
            <label className="block text-xs font-bold text-slate-500 tracking-wider uppercase mb-1.5">Source</label>
            <div className="relative group">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400 pointer-events-none group-focus-within:text-violet-600 transition-colors">
                <FileText size={15} />
              </span>
              <input 
                type="text" 
                placeholder="Referral, online..."
                value={filters.source}
                onChange={(e) => setFilters({...filters, source: e.target.value})}
                className="w-full pl-10 pr-3 py-2.5 text-sm bg-slate-50/50 hover:bg-slate-50 focus:bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-violet-600/10 focus:border-violet-600 transition-all font-medium text-slate-800 placeholder:text-slate-400"
              />
            </div>
          </div>

          {/* Calendar */}
          <div>
            <label className="block text-xs font-bold text-slate-500 tracking-wider uppercase mb-1.5">Calendar</label>
            <div className="relative group">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400 pointer-events-none group-focus-within:text-violet-600 transition-colors">
                <Calendar size={15} />
              </span>
              <input 
                type="date" 
                value={filters.date}
                onChange={(e) => setFilters({...filters, date: e.target.value})}
                className="w-full pl-10 pr-3.5 py-2.5 text-sm bg-slate-50/50 hover:bg-slate-50 focus:bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-violet-600/10 focus:border-violet-600 transition-all font-medium text-slate-700 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>

      {/* --- LEAD REGISTER TABLE --- */}
      <div className="bg-white rounded-2xl border border-slate-200/60 shadow-xl shadow-slate-100/40 overflow-hidden max-w-7xl mx-auto">
        <div className="p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-100">
          <h2 className="text-lg font-bold text-slate-900 tracking-tight">Lead register</h2>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 self-end sm:self-auto">
            <div className="flex items-center gap-2">
              <select className="border border-slate-200 rounded-lg px-2 py-1.5 text-xs font-semibold bg-slate-50 hover:bg-slate-100/70 transition-colors focus:outline-none cursor-pointer">
                <option>10</option>
                <option>25</option>
                <option>50</option>
              </select>
              <span className="text-xs text-slate-550 font-medium">entries per page</span>
            </div>

            <div className="relative flex items-center group">
              <span className="text-xs font-semibold text-slate-500 mr-2">Search:</span>
              <div className="relative">
                <Search size={12} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                <input 
                  type="text" 
                  className="border border-slate-200 rounded-lg pl-7 pr-3 py-1.5 text-xs bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-600/20 focus:border-violet-600 transition-all font-medium text-slate-800"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Responsive Table Wrapper */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="bg-slate-50/70 border-b border-slate-200/60 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                <th className="py-4 px-5 w-12 text-center">#</th>
                <th className="py-4 px-4">Lead ID</th>
                <th className="py-4 px-4">Product</th>
                <th className="py-4 px-4">Customer</th>
                <th className="py-4 px-4">Contact</th>
                <th className="py-4 px-4">Requirement</th>
                <th className="py-4 px-4">SLA</th>
                <th className="py-4 px-4">Status</th>
                <th className="py-4 px-4">Source</th>
                <th className="py-4 px-5 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-600">
              {mockLeads.map((lead, index) => (
                <tr key={lead.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="py-4 px-5 text-center font-semibold text-slate-400 text-xs">{index + 1}</td>
                  <td className="py-4 px-4 font-bold text-violet-600 tracking-tight group-hover:text-violet-700 transition-colors">{lead.leadId}</td>
                  <td className="py-4 px-4 font-medium text-slate-700">{lead.product}</td>
                  <td className="py-4 px-4 font-bold text-slate-900">{lead.customer}</td>
                  <td className="py-4 px-4 font-medium text-slate-600">{lead.contact}</td>
                  <td className="py-4 px-4 font-semibold text-slate-900">{lead.requirement}</td>
                  <td className="py-4 px-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-bold bg-rose-50 text-rose-700 border border-rose-100">
                      {lead.sla}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-bold bg-amber-50 text-amber-700 border border-amber-100/70">
                      {lead.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 font-medium text-slate-400 text-xs">{lead.source}</td>
                  <td className="py-4 px-5 text-center">
                    <button className="text-xs font-bold bg-white border border-slate-200 text-slate-700 px-3 py-1.5 rounded-xl shadow-sm hover:bg-slate-50 hover:border-slate-300 active:scale-95 transition-all duration-150">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Table Footer */}
        <div className="p-4 bg-slate-50/40 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500">
          <div>Showing 1 to 1 of 1 records</div>
          <div className="flex gap-1.5">
            <button className="px-3 py-1.5 border border-slate-200 bg-white rounded-xl font-bold text-slate-400 disabled:opacity-40 cursor-not-allowed" disabled>Previous</button>
            <button className="px-3 py-1.5 bg-gradient-to-r from-violet-600 to-indigo-600 font-bold text-white rounded-xl shadow-sm shadow-violet-600/10">1</button>
            <button className="px-3 py-1.5 border border-slate-200 bg-white rounded-xl font-bold text-slate-400 disabled:opacity-40 cursor-not-allowed" disabled>Next</button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default MyLead