import React, { useState } from 'react';
import { applyCreditCard } from '../services/apiService';

const INITIAL_FORM_STATE = {
  applicantName: '',
  email: '',
  phone: '',
  panNumber: '',
  monthlyIncome: '',
  city: '',
  state: '',
  pincode: '',
};

const ApplyCreditCard = () => {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [status, setStatus] = useState({ loading: false, success: null, error: null });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      // Force PAN number inputs to save as uppercase strings dynamically
      [name]: name === 'panNumber' ? value.toUpperCase() : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });

    try {
      // Formatted payload containing explicitly typed values
      const payload = {
        ...formData,
        monthlyIncome: Number(formData.monthlyIncome),
      };

      // Using the abstraction provided by your imported service layer
      await applyCreditCard(payload);

      setStatus({ loading: false, success: 'Application submitted successfully!', error: null });
      setFormData(INITIAL_FORM_STATE);
    } catch (err) {
      setStatus({ 
        loading: false, 
        success: null, 
        error: err.message || 'Something went wrong. Please try again.' 
      });
    }
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-sans antialiased bg-slate-950 overflow-x-hidden">
      {/* Dynamic Background Layout with Pexels Assets */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/7191166/pexels-photo-7191166.jpeg" 
          alt="Premium Financial Network Pattern" 
          className="w-full h-full object-cover opacity-20 mix-blend-luminosity filter blur-[1px]"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-900/90 to-indigo-950/40" />
      </div>

      <div className="relative z-10 w-full sm:max-w-2xl transition-all duration-300 ease-out transform translate-y-0">
        {/* Brand / Title Banner */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 text-white shadow-xl shadow-indigo-500/10 mb-4 animate-pulse">
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
            Credit Card Application
          </h2>
          <p className="mt-3 text-sm text-slate-400 max-w-md mx-auto">
            Provide your financial and personal layout details to evaluate your instant card eligibility.
          </p>
        </div>

        {/* Premium Production Ready Form Wrapper Container */}
        <div className="bg-slate-900/70 backdrop-blur-xl border border-slate-800/60 py-10 px-6 shadow-2xl shadow-black/50 rounded-3xl sm:px-12 transition-all duration-300 hover:border-indigo-500/30">
          <form className="space-y-6" onSubmit={handleSubmit}>
            
            {/* Applicant Name */}
            <div>
              <label htmlFor="applicantName" className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                Full Name <span className="text-rose-400">*</span>
              </label>
              <input
                id="applicantName"
                name="applicantName"
                type="text"
                required
                placeholder="John Doe"
                value={formData.applicantName}
                onChange={handleChange}
                className="block w-full px-4 py-3.5 border border-slate-800 rounded-xl bg-slate-950/40 text-slate-200 placeholder-slate-600 transition-all duration-200 focus:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            {/* Email & Phone Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Email Address <span className="text-rose-400">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full px-4 py-3.5 border border-slate-800 rounded-xl bg-slate-950/40 text-slate-200 placeholder-slate-600 transition-all duration-200 focus:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Phone Number <span className="text-rose-400">*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={handleChange}
                  className="block w-full px-4 py-3.5 border border-slate-800 rounded-xl bg-slate-950/40 text-slate-200 placeholder-slate-600 transition-all duration-200 focus:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            {/* PAN & Monthly Income Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="panNumber" className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  PAN Number
                </label>
                <input
                  id="panNumber"
                  name="panNumber"
                  type="text"
                  placeholder="ABCDE1234F"
                  value={formData.panNumber}
                  onChange={handleChange}
                  className="block w-full px-4 py-3.5 border border-slate-800 rounded-xl bg-slate-950/40 text-slate-200 placeholder-slate-600 transition-all duration-200 focus:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500 sm:text-sm uppercase tracking-wide"
                />
              </div>

              <div>
                <label htmlFor="monthlyIncome" className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Monthly Income
                </label>
                <input
                  id="monthlyIncome"
                  name="monthlyIncome"
                  type="number"
                  placeholder="0.00"
                  value={formData.monthlyIncome}
                  onChange={handleChange}
                  className="block w-full px-4 py-3.5 border border-slate-800 rounded-xl bg-slate-950/40 text-slate-200 placeholder-slate-600 transition-all duration-200 focus:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            {/* Location Fields (City, State, Pincode) */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div>
                <label htmlFor="city" className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  City
                </label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  placeholder="San Francisco"
                  value={formData.city}
                  onChange={handleChange}
                  className="block w-full px-4 py-3.5 border border-slate-800 rounded-xl bg-slate-950/40 text-slate-200 placeholder-slate-600 transition-all duration-200 focus:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="state" className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  State
                </label>
                <input
                  id="state"
                  name="state"
                  type="text"
                  placeholder="CA"
                  value={formData.state}
                  onChange={handleChange}
                  className="block w-full px-4 py-3.5 border border-slate-800 rounded-xl bg-slate-950/40 text-slate-200 placeholder-slate-600 transition-all duration-200 focus:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="pincode" className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Pincode
                </label>
                <input
                  id="pincode"
                  name="pincode"
                  type="text"
                  placeholder="94103"
                  value={formData.pincode}
                  onChange={handleChange}
                  className="block w-full px-4 py-3.5 border border-slate-800 rounded-xl bg-slate-950/40 text-slate-200 placeholder-slate-600 transition-all duration-200 focus:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            {/* Notifications Display Segment */}
            {status.error && (
              <div className="rounded-xl bg-rose-950/40 border border-rose-900/50 p-4 text-sm text-rose-300 flex items-center space-x-3 transition-all duration-200">
                <svg className="w-5 h-5 text-rose-400 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <span>{status.error}</span>
              </div>
            )}
            
            {status.success && (
              <div className="rounded-xl bg-emerald-950/40 border border-emerald-900/50 p-4 text-sm text-emerald-300 flex items-center space-x-3 transition-all duration-200">
                <svg className="w-5 h-5 text-emerald-400 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>{status.success}</span>
              </div>
            )}

            {/* Premium Linear Interactive Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={status.loading}
                className={`w-full flex justify-center items-center py-4 px-4 border border-transparent rounded-xl shadow-lg shadow-indigo-500/20 text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-indigo-500 active:scale-[0.99] transition-all duration-150 ${
                  status.loading ? 'opacity-50 cursor-not-allowed transform-none' : ''
                }`}
              >
                {status.loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Processing Application...
                  </>
                ) : (
                  'Submit Application'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplyCreditCard;