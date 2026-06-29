import React, { useState } from "react";
import { Building2, FileText, Calendar, Mail, Phone, MapPin, ArrowRight, ShieldCheck } from "lucide-react";

const PartnerRegistration = () => {
  const [formData, setFormData] = useState({
    type: "",
    name: "",
    shortName: "",
    officialNumber: "",
    officialEmail: "",
    panNumber: "",
    dob: "",
    plotNo: "",
    officialAddress: "",
    state: "",
    district: "",
    city: "",
    pinCode: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting Partner Registration State:", formData);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 min-h-screen bg-slate-50 font-sans antialiased selection:bg-indigo-500 selection:text-white">
      
      {/* Left Column: Premium Informational Sidebar */}
      <div className="hidden lg:flex lg:col-span-4 relative flex-col justify-between bg-slate-900 text-white p-12 overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
        
        {/* Upper Badge */}
        <div className="relative z-10 flex items-center gap-2 text-indigo-400 font-semibold tracking-wider text-xs uppercase">
          <Building2 className="w-4 h-4" />
          <span>Onboarding System</span>
        </div>

        {/* Hero Context Block */}
        <div className="relative z-10 my-auto space-y-4">
          <h1 className="text-3xl lg:text-4xl font-black tracking-tight leading-none text-white">
            PARTNER <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-300">
              PROVISIONING
            </span>
          </h1>
          <p className="text-slate-400 text-xs leading-relaxed max-w-xs">
            Complete the formal firm registry details to generate your organizational workspace credentials and system tokens.
          </p>
        </div>

        {/* Trust Badging Footer */}
        <div className="relative z-10 flex items-center gap-2 text-xs text-slate-500 font-medium tracking-wide">
          <ShieldCheck className="w-4 h-4 text-emerald-500" />
          <span>Encrypted Onboarding Channel Active.</span>
        </div>
      </div>

      {/* Right Column: Clean Multi-Step Form Workspace */}
      <div className="lg:col-span-8 flex flex-col items-center justify-center p-6 md:p-12 lg:p-16 bg-white overflow-y-auto">
        <div className="w-full max-w-3xl">
          
          {/* Header Typography Block */}
          <div className="mb-10 border-b border-slate-100 pb-6 text-center sm:text-left">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
              Company Information
            </h2>
            <p className="text-slate-400 text-xs md:text-sm mt-1">
              Please submit accurate operational credentials to verify your business framework profile.
            </p>
          </div>

          {/* Registration Input Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* SECTION 1: Corporate Core Grid */}
            <div className="space-y-5">
              <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 border-l-2 border-indigo-500 pl-2">
                Corporate Identification
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Legal Entity Type */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700">Entity Type</label>
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 transition-all font-medium text-slate-700 cursor-pointer"
                  >
                    <option value="" disabled hidden>Select an entity type</option>
                    <option value="Pvt Ltd Company">Pvt Ltd Company</option>
                    <option value="Public Company">Public Company</option>
                    <option value="Proprietorship Firm">Proprietorship Firm</option>
                    <option value="Partnership Firm">Partnership Firm</option>
                    <option value="LLP">LLP</option>
                    <option value="HUF">HUF</option>
                  </select>
                </div>

                {/* Corporate Registered Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700">Corporate Name</label>
                  <div className="relative">
                    <Building2 className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      required
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enterprise Solutions Ltd"
                      className="w-full pl-10 pr-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 transition-all font-medium text-slate-800 placeholder:text-slate-400"
                    />
                  </div>
                </div>

                {/* Short Name / Alias */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700">Short Name</label>
                  <div className="relative">
                    <FileText className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      required
                      name="shortName"
                      value={formData.shortName}
                      onChange={handleChange}
                      placeholder="ESL"
                      className="w-full pl-10 pr-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 transition-all font-medium text-slate-800 placeholder:text-slate-400"
                    />
                  </div>
                </div>

                {/* Contact Line */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700">Official Number</label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="tel"
                      required
                      name="officialNumber"
                      value={formData.officialNumber}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full pl-10 pr-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 transition-all font-medium text-slate-800 placeholder:text-slate-400"
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700">Official Email ID</label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="email"
                      required
                      name="officialEmail"
                      value={formData.officialEmail}
                      onChange={handleChange}
                      placeholder="ops@enterprise.com"
                      className="w-full pl-10 pr-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 transition-all font-medium text-slate-800 placeholder:text-slate-400"
                    />
                  </div>
                </div>

                {/* PAN Number */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700">PAN Number</label>
                  <div className="relative">
                    <FileText className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      required
                      name="panNumber"
                      value={formData.panNumber}
                      onChange={handleChange}
                      placeholder="ABCDE1234F"
                      className="w-full pl-10 pr-4 py-3 text-sm uppercase bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 transition-all font-medium text-slate-800 placeholder:text-slate-400 tracking-wider"
                    />
                  </div>
                </div>

                {/* DOB / Incorporation Date */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700">Date of Incorporation / DOB</label>
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

                {/* Plot No */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700">Plot No / Suite</label>
                  <div className="relative">
                    <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      required
                      name="plotNo"
                      value={formData.plotNo}
                      onChange={handleChange}
                      placeholder="Building 4B, Suite 12"
                      className="w-full pl-10 pr-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 transition-all font-medium text-slate-800 placeholder:text-slate-400"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* SECTION 2: Address Layout Structure */}
            <div className="space-y-5 pt-2">
              <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 border-l-2 border-indigo-500 pl-2">
                Geographic Presence
              </h3>

              {/* Official Full Street Address */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700">Official Full Address</label>
                <textarea
                  required
                  name="officialAddress"
                  value={formData.officialAddress}
                  onChange={handleChange}
                  rows="3"
                  placeholder="Enter the complete certified corporate location infrastructure details..."
                  className="w-full px-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 transition-all font-medium text-slate-800 placeholder:text-slate-400 resize-none leading-relaxed"
                />
              </div>

              {/* State / District / City / Pincode Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700">State</label>
                  <input
                    type="text"
                    required
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    placeholder="Delhi"
                    className="w-full px-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 transition-all font-medium text-slate-800 placeholder:text-slate-400"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700">District</label>
                  <input
                    type="text"
                    required
                    name="district"
                    value={formData.district}
                    onChange={handleChange}
                    placeholder="New Delhi"
                    className="w-full px-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 transition-all font-medium text-slate-800 placeholder:text-slate-400"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700">City</label>
                  <input
                    type="text"
                    required
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Connaught Place"
                    className="w-full px-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 transition-all font-medium text-slate-800 placeholder:text-slate-400"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700">PIN Code</label>
                  <input
                    type="text"
                    required
                    name="pinCode"
                    value={formData.pinCode}
                    onChange={handleChange}
                    placeholder="110001"
                    className="w-full px-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 transition-all font-medium text-slate-800 placeholder:text-slate-400"
                  />
                </div>
              </div>
            </div>

            {/* Action Buttons Frame */}
            <div className="flex justify-end pt-4 border-t border-slate-100">
              <button
                type="submit"
                className="group flex items-center justify-center gap-2 h-12 px-8 rounded-xl bg-slate-950 text-white text-xs font-bold hover:bg-slate-900 transition-all shadow-md shadow-slate-950/5 active:scale-[0.99] pt-1"
              >
                <span>Next</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </form>

        </div>
      </div>

    </div>
  );
};

export default PartnerRegistration;