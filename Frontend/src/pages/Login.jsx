import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Phone, ArrowRight, Sparkles } from "lucide-react";
// import axiosInstance from "./axiosInstance"; 

const Login = () => {
  const navigate = useNavigate();
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name:fullname,
      email:email,
      password:password
    };

    console.log("Submitting login payload:", payload);

    try {
      const response = await fetch(
        "http://localhost:3000/api/auth/login",
        {
          method:"POST",
          headers:{'Content-Type':"application/json"},
          body:JSON.stringify(payload),
          credentials:'include'
        },
      );
      console.log(response.data);
    
      setFullname("");
      // setPhonenumber("");
    
      navigate("/user/dashboard");
    } catch (error) {
      console.error("Login Error", error);
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 min-h-screen bg-slate-50 font-sans antialiased selection:bg-indigo-500 selection:text-white">
      
      {/* Left Column - Minimal Visual Splash Panel */}
      <div className="hidden lg:flex lg:col-span-5 relative flex-col justify-between bg-slate-900 text-white p-12 overflow-hidden">
        {/* Ambient Decorative Lighting */}
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl" />
        
        {/* Top Floating Badge */}
        <div className="relative z-10 flex items-center gap-2 text-indigo-400 font-semibold tracking-wider text-xs uppercase">
          <Sparkles className="w-4 h-4" />
          <span></span>
        </div>

        {/* Dynamic Center Text Block */}
        <div className="relative z-10 my-auto">
          <h1 className="text-4xl lg:text-5xl font-black tracking-tight leading-none text-white">
            WELCOME BACK TO <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-300">
              YOUR DASHBOARD
            </span>
          </h1>
          <p className="text-slate-400 text-sm mt-4 max-w-sm leading-relaxed">
            Access secure tools, review interview readiness assessments, and synchronize with pipeline evaluations.
          </p>
        </div>

        {/* Secure Bottom Footer Indicator */}
        <div className="relative z-10 text-[11px] text-slate-500 tracking-wide font-medium">
          Protected via End-to-End TLS Layering.
        </div>
      </div>

      {/* Right Column - Clean Interaction Workspace */}
      <div className="lg:col-span-7 flex flex-col items-center justify-center p-6 md:p-12 bg-white">
        <div className="w-full max-w-md">
          
          {/* Header Branding Block */}
          <div className="mb-8 text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
              Sign In to Account
            </h2>
            <p className="text-slate-400 text-xs md:text-sm mt-1">
              Please enter your profile name and authentic communication line.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Full Name Input wrapper */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700">Full Name</label>
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  required
                  name="fullname"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                  placeholder="Alex"
                  className="w-full pl-10 pr-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 transition-all font-medium placeholder:text-slate-400 text-slate-800"
                />
              </div>
            </div>

            {/* Phone Number Input wrapper */}
            {/* <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700">Phone Number</label>
              <div className="relative">
                <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="tel"
                  required
                  name="phone"
                  value={phonenumber}
                  onChange={(e) => setPhonenumber(e.target.value)}
                  placeholder="+1 (555) 000-0000"
                  className="w-full pl-10 pr-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 transition-all font-medium placeholder:text-slate-400 text-slate-800"
                />
              </div>
            </div> */}

             {/* Email Input wrapper */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700">Email</label>
              <div className="relative">
                <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  required
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="abc@gmail.com"
                  className="w-full pl-10 pr-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 transition-all font-medium placeholder:text-slate-400 text-slate-800"
                />
              </div>
            </div>

             {/* password Input wrapper */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700">Password</label>
              <div className="relative">
                <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="password"
                  required
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="password"
                  className="w-full pl-10 pr-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 transition-all font-medium placeholder:text-slate-400 text-slate-800"
                />
              </div>
            </div>

            {/* Submit Action Block */}
            <button
              type="submit"
              className="group w-full flex items-center justify-center gap-2 h-12 rounded-xl bg-slate-950 text-white text-xs font-bold hover:bg-slate-900 transition-all shadow-md shadow-slate-950/5 active:scale-[0.99] pt-1"
            >
              <span className="text-[15px]">Login</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </form>

          {/* Account Creation Link Redirect */}
          <p className="text-center lg:text-left text-sm text-slate-400 mt-8 font-medium">
            Don’t have an operational account?{" "}
            <span
              onClick={() => navigate("/register")}
              className="text-indigo-600 hover:text-indigo-700 hover:underline font-bold cursor-pointer transition-colors"
            >
              Sign Up
            </span>
          </p>

        </div>
      </div>

    </div>
  );
};

export default Login;