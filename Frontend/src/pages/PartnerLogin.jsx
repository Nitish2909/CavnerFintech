import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, ShieldAlert, ArrowRight, Handshake, ShieldCheck } from "lucide-react";
// import axiosInstance from "./axiosInstance"; 

const PartnerLogin = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    captcha: "",
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting Partner Login Data:", loginData);

    // try {
    //   const response = await axiosInstance.post(
    //     "http://localhost:4000/api/auth/partner-login", 
    //     loginData
    //   );
    //   console.log(response.data);
    //   
    //   setLoginData({ email: "", password: "", captcha: "" });
    //   
    //   navigate("/partner-dashboard");
    // } catch (error) {
    //   console.error("Partner Login Error:", error);
    //   alert(error.response?.data?.message || "Something went wrong");
    // }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 min-h-screen bg-slate-50 font-sans antialiased selection:bg-indigo-500 selection:text-white">
      
      {/* Left Column: Professional Partner Sidebar */}
      <div className="hidden lg:flex lg:col-span-5 relative flex-col justify-between bg-slate-900 text-white p-12 overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
        
        {/* Upper Badge */}
        <div className="relative z-10 flex items-center gap-2 text-indigo-400 font-semibold tracking-wider text-xs uppercase">
          <Handshake className="w-4 h-4" />
          <span>B2B Affiliate Portal</span>
        </div>

        {/* Hero Context Block */}
        <div className="relative z-10 my-auto space-y-4">
          <h1 className="text-4xl lg:text-5xl font-black tracking-tight leading-none text-white">
            PARTNER <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-300">
              GATEWAY
            </span>
          </h1>
          <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
            Access your secure corporate dashboard to track operations, client metrics, and distributed pipeline statistics.
          </p>
        </div>

        {/* Trust Badging Footer */}
        <div className="relative z-10 flex items-center gap-2 text-xs text-slate-500 font-medium tracking-wide">
          <ShieldCheck className="w-4 h-4 text-emerald-500" />
          <span>Enterprise Layer Encryption Engaged.</span>
        </div>
      </div>

      {/* Right Column: Interactive Form Workspace */}
      <div className="lg:col-span-7 flex flex-col items-center justify-center p-6 md:p-12 bg-white">
        <div className="w-full max-w-md">
          
          {/* Header Typography Block */}
          <div className="mb-8 text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
              Partner Authentication
            </h2>
            <p className="text-slate-400 text-xs md:text-sm mt-1">
              Provide your verified associate space credentials to access your terminal.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Email Field */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="email"
                  required
                  name="email"
                  value={loginData.email}
                  onChange={handleChange}
                  placeholder="partner@institution.com"
                  className="w-full pl-10 pr-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 transition-all font-medium text-slate-800 placeholder:text-slate-400"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700">Password</label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="password"
                  required
                  name="password"
                  value={loginData.password}
                  onChange={handleChange}
                  placeholder="••••••••••••"
                  className="w-full pl-10 pr-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 transition-all font-medium text-slate-800 placeholder:text-slate-400"
                />
              </div>
            </div>

            {/* Captcha Split Input Section */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700">Security Verification</label>
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
                
                {/* Simulated Captcha Image Area */}
                <div className="sm:col-span-5 bg-slate-100 border border-slate-200 rounded-xl flex items-center justify-center font-mono text-sm tracking-widest text-slate-400 select-none font-bold h-11">
                  <span className="line-through decoration-slate-400/60 decoration-2 rotate-2 inline-block">W6xK9</span>
                </div>
                
                {/* Verification Field */}
                <div className="sm:col-span-7 relative">
                  <ShieldAlert className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    required
                    name="captcha"
                    value={loginData.captcha}
                    onChange={handleChange}
                    placeholder="Enter code"
                    className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 transition-all font-medium text-slate-800 placeholder:text-slate-400"
                  />
                </div>
              </div>
            </div>

            {/* Submit Action Execution Button */}
            <button
              type="submit"
              className="group w-full flex items-center justify-center gap-2 h-12 rounded-xl bg-slate-950 text-white text-xs font-bold hover:bg-slate-900 transition-all shadow-md shadow-slate-950/5 active:scale-[0.99] pt-1"
            >
              <span>Access Account Dashboard</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </form>

          {/* Registration Navigation Redirect Option */}
          <p className="text-center lg:text-left text-xs text-slate-400 mt-8 font-medium">
            Don’t have an operational account?{" "}
            <span
              onClick={() => navigate("/partnersregisteration")}
              className="text-indigo-600 hover:text-indigo-700 hover:underline font-bold cursor-pointer transition-colors"
            >
              Create an Account
            </span>
          </p>

        </div>
      </div>

    </div>
  );
};

export default PartnerLogin;