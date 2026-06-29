import React, { useState } from "react";
import { User, Mail, Phone, ArrowRight, Handshake } from "lucide-react";

const BecomePartner = () => {
  const [fullname, setFullName] = useState("");
  const [middlename, setMiddleName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobilenumber, setMobileNumber] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ fullname, middlename, lastname, email, mobilenumber });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 min-h-screen bg-slate-50 font-sans selection:bg-amber-500 selection:text-slate-950">
      
      {/* Left Column - Premium Hero Visual */}
      <div className="lg:col-span-5 relative flex flex-col justify-between bg-emerald-950 text-white p-8 md:p-12 overflow-hidden">
        {/* Background Decorative Pattern */}
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl" />
        
        {/* Top Branding/Icon */}
        <div className="relative z-10 flex items-center gap-2 text-amber-400 font-semibold tracking-wider text-sm uppercase">
          <Handshake className="w-5 h-5" />
          <span>Ecosystem Growth</span>
        </div>

        {/* Main Header text */}
        <div className="relative z-10 my-auto py-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-none text-white">
            APPLY TO BE A <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
              STRATEGIC PARTNER
            </span>
          </h1>
          <p className="text-emerald-200/70 text-sm md:text-base mt-6 max-w-md leading-relaxed">
            Join our unified distribution network. Gain instant access to tier-1 infrastructure assets, co-marketing pipelines, and shared scale frameworks.
          </p>
        </div>

        {/* Bottom Footer Hint */}
        <div className="relative z-10 text-xs text-emerald-300/50">
          © 2026 Alliance Platform Core. All rights encrypted.
        </div>
      </div>

      {/* Right Column - Clean Interactive Form Workspace */}
      <div className="lg:col-span-7 flex flex-col items-center justify-center p-8 md:p-16 bg-white">
        <div className="w-full max-w-xl">
          
          {/* Header & Step Tracker */}
          <div className="mb-8">
            <span className="text-[10px] font-bold tracking-widest text-amber-600 uppercase bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-md inline-block mb-3">
              Step 1 of 2: Core Identity
            </span>
            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
              Create Partner Profile
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Please input your official corporate credentials matching your legal operational filings.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Grid Layout for Names */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-slate-700 tracking-wide">First Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    required
                    name="fullname"
                    value={fullname}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="John"
                    className="w-full pl-9 pr-4 py-2.5 text-sm bg-slate-50/50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 transition-all placeholder:text-slate-400 text-slate-800 font-medium"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-slate-700 tracking-wide">Middle Name</label>
                <input
                  type="text"
                  name="middlename"
                  value={middlename}
                  onChange={(e) => setMiddleName(e.target.value)}
                  placeholder="Optional"
                  className="w-full px-4 py-2.5 text-sm bg-slate-50/50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 transition-all placeholder:text-slate-400 text-slate-800 font-medium"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-slate-700 tracking-wide">Last Name</label>
                <input
                  type="text"
                  required
                  name="lastname"
                  value={lastname}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Doe"
                  className="w-full px-4 py-2.5 text-sm bg-slate-50/50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 transition-all placeholder:text-slate-400 text-slate-800 font-medium"
                />
              </div>
            </div>

            {/* Email Input */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-slate-700 tracking-wide">Business Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="email"
                  required
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@company.com"
                  className="w-full pl-9 pr-4 py-2.5 text-sm bg-slate-50/50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 transition-all placeholder:text-slate-400 text-slate-800 font-medium"
                />
              </div>
            </div>

            {/* Mobile Number Input */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-slate-700 tracking-wide">Direct Mobile Vector</label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="tel"
                  required
                  name="mobilenumber"
                  value={mobilenumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  placeholder="+1 (555) 000-0000"
                  className="w-full pl-9 pr-4 py-2.5 text-sm bg-slate-50/50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 transition-all placeholder:text-slate-400 text-slate-800 font-medium"
                />
              </div>
            </div>

            {/* Action Submit Area */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-medium text-slate-400">
                All transmissions routed via TLS 1.3
              </span>
              <button
                type="submit"
                className="group flex items-center gap-2 rounded-xl bg-slate-950 px-6 py-3 text-white text-xs font-bold hover:bg-slate-900 transition-all shadow-md shadow-slate-950/10 active:scale-[0.98]"
              >
                <span>Continue Setup</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

          </form>
        </div>
      </div>

    </div>
  );
};

export default BecomePartner;