import React, { useState } from "react";
import { User, Calendar, MapPin, CreditCard, Mail, Phone, ShieldCheck, ArrowRight, Info } from "lucide-react";

const CheckCivilScore = () => {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    gender: "",
    pinCode: "",
    panNumber: "",
    email: "",
    mobileNumber: "",
    consent: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting scoring request:", formData);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-indigo-500 selection:text-white">
      <div className="w-full max-w-7xl mx-auto px-4 py-12 md:px-8 lg:py-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Form Section */}
          <div className="lg:col-span-7 bg-white border border-slate-200/80 rounded-3xl p-6 md:p-10 shadow-[0_20px_50px_-12px_rgba(15,23,42,0.04)]">
            
            <div className="mb-8">
              <h1 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                Get Your Credit Score in Seconds
              </h1>
              <p className="text-slate-400 text-sm mt-1">
                Checking your score is completely free and will not affect your credit rating.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Full Name */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter full legal name"
                    className="w-full pl-10 pr-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 transition-all font-medium placeholder:text-slate-400"
                  />
                </div>
              </div>

              {/* Grid for DOB & Gender */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700">Date of Birth</label>
                  <div className="relative">
                    <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="date"
                      required
                      name="dob"
                      value={formData.dob}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 transition-all font-medium text-slate-700"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700">Gender</label>
                  <div className="grid grid-cols-2 gap-3 h-12">
                    <label className={`flex items-center justify-center gap-2 border rounded-xl cursor-pointer text-sm font-semibold transition-all ${formData.gender === "male" ? "border-indigo-600 bg-indigo-50/40 text-indigo-600 ring-2 ring-indigo-600/10" : "border-slate-200 bg-slate-50 hover:bg-slate-100/70 text-slate-600"}`}>
                      <input type="radio" name="gender" value="male" checked={formData.gender === "male"} onChange={handleChange} className="sr-only" />
                      <span>Male</span>
                    </label>
                    <label className={`flex items-center justify-center gap-2 border rounded-xl cursor-pointer text-sm font-semibold transition-all ${formData.gender === "female" ? "border-indigo-600 bg-indigo-50/40 text-indigo-600 ring-2 ring-indigo-600/10" : "border-slate-200 bg-slate-50 hover:bg-slate-100/70 text-slate-600"}`}>
                      <input type="radio" name="gender" value="female" checked={formData.gender === "female"} onChange={handleChange} className="sr-only" />
                      <span>Female</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Grid for Pin Code & PAN */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700">Pin Code</label>
                  <div className="relative">
                    <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      required
                      name="pinCode"
                      value={formData.pinCode}
                      onChange={handleChange}
                      placeholder="110001"
                      className="w-full pl-10 pr-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 transition-all font-medium placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700">PAN Number</label>
                  <div className="relative">
                    <CreditCard className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      required
                      name="panNumber"
                      value={formData.panNumber}
                      onChange={handleChange}
                      placeholder="ABCDE1234F"
                      className="w-full pl-10 pr-4 py-3 text-sm uppercase bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 transition-all font-medium placeholder:text-slate-400 tracking-wider text-slate-800"
                    />
                  </div>
                </div>
              </div>

              {/* Email Address */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="email"
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    className="w-full pl-10 pr-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 transition-all font-medium placeholder:text-slate-400"
                  />
                </div>
              </div>

              {/* Mobile Number */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700">Mobile Number</label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="tel"
                    required
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    placeholder="Enter dynamic phone line"
                    className="w-full pl-10 pr-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 transition-all font-medium placeholder:text-slate-400"
                  />
                </div>
              </div>

              {/* Context Alert Note */}
              <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-xl p-3.5">
                <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <p className="text-xs text-amber-800 font-medium leading-relaxed">
                  Important: Please supply the specific primary mobile variant registered alongside your existing active credit lines or banking records.
                </p>
              </div>

              {/* Authorization Consent Agreement */}
              <div className="flex items-start gap-3 pt-2">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  className="mt-1 h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 transition-all cursor-pointer"
                />
                <label htmlFor="consent" className="text-xs text-slate-500 leading-relaxed cursor-pointer select-none">
                  I hereby appoint Fintech as my authorized representative to retrieve my analytical credit profiling matrix directly from CIBIL / Equifax / Experian / CRIF Highmark credit bureaus.
                </label>
              </div>

              {/* Secure Transmission Footer Badge */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-4 items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 bg-emerald-50 border border-emerald-100 px-3 py-1.5 rounded-lg">
                  <ShieldCheck className="w-4 h-4" />
                  <span>100% Encrypted & Secured</span>
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto group flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-6 py-3 text-white text-xs font-bold hover:bg-slate-900 transition-all shadow-md shadow-slate-950/10 active:scale-[0.98]"
                >
                  <span>Generate Free Credit Score</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>

            </form>
          </div>

          {/* Right Column: Context Marketing & Visual Asset Space */}
          <div className="lg:col-span-5 lg:sticky lg:top-12 space-y-8">
            <div className="relative group overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-2 shadow-sm">
              <img 
                src="https://upniva.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Ftpzm8ak07%2Fimages%2Fcsd.webp&w=1080&q=75" 
                alt="Credit evaluation interface dashboard asset"
                className="w-full h-auto object-cover rounded-2xl group-hover:scale-[1.01] transition-transform duration-500"
              />
            </div>

            <div className="space-y-4 px-2">
              <span className="text-[10px] font-extrabold tracking-widest text-indigo-600 uppercase bg-indigo-50 border border-indigo-100 px-2.5 py-1 rounded-md inline-block">
                Fintech Analysis Engine
              </span>
              <h2 className="text-2xl font-black text-slate-900 tracking-tight leading-tight">
                Understand the Core Factors Affecting Your Approval Velocity.
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed">
                Wondering why your Credit Card or Loan Application is getting rejected multiple times? Well, the answer might be your negligence toward your Credit Score. If you want to brighten your chance of getting your Loan or Credit Card Applications approved in one go or just want to build your credit score the right way - Fintech Credit Score Calculator is your way to go!!
              </p>
            </div>
          </div>

        </div>
        
      </div>
    </div>
  );
};

export default CheckCivilScore;