// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Mail, Lock, ShieldAlert, ArrowRight, Handshake, ShieldCheck } from "lucide-react";
// // import axiosInstance from "./axiosInstance"; 

// const PartnerLogin = () => {
//   const navigate = useNavigate();
//   const [loginData, setLoginData] = useState({
//     email: "",
//     password: "",
//     captcha: "",
//   });

//   const handleChange = (e) => {
//     setLoginData({
//       ...loginData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("Submitting Partner Login Data:", loginData);

//     // try {
//     //   const response = await axiosInstance.post(
//     //     "http://localhost:4000/api/auth/partner-login", 
//     //     loginData
//     //   );
//     //   console.log(response.data);
//     //   
//     //   setLoginData({ email: "", password: "", captcha: "" });
//     //   
//     //   navigate("/partner-dashboard");
//     // } catch (error) {
//     //   console.error("Partner Login Error:", error);
//     //   alert(error.response?.data?.message || "Something went wrong");
//     // }
//   };

//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-12 min-h-screen bg-slate-50 font-sans antialiased selection:bg-indigo-500 selection:text-white">
      
//       {/* Left Column: Professional Partner Sidebar */}
//       <div className="hidden lg:flex lg:col-span-5 relative flex-col justify-between bg-slate-900 text-white p-12 overflow-hidden">
//         <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:16px_16px]" />
//         <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
//         <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
        
//         {/* Upper Badge */}
//         <div className="relative z-10 flex items-center gap-2 text-indigo-400 font-semibold tracking-wider text-xs uppercase">
//           <Handshake className="w-4 h-4" />
//           <span>B2B Affiliate Portal</span>
//         </div>

//         {/* Hero Context Block */}
//         <div className="relative z-10 my-auto space-y-4">
//           <h1 className="text-4xl lg:text-5xl font-black tracking-tight leading-none text-white">
//             PARTNER <br />
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-300">
//               GATEWAY
//             </span>
//           </h1>
//           <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
//             Access your secure corporate dashboard to track operations, client metrics, and distributed pipeline statistics.
//           </p>
//         </div>

//         {/* Trust Badging Footer */}
//         <div className="relative z-10 flex items-center gap-2 text-xs text-slate-500 font-medium tracking-wide">
//           <ShieldCheck className="w-4 h-4 text-emerald-500" />
//           <span>Enterprise Layer Encryption Engaged.</span>
//         </div>
//       </div>

//       {/* Right Column: Interactive Form Workspace */}
//       <div className="lg:col-span-7 flex flex-col items-center justify-center p-6 md:p-12 bg-white">
//         <div className="w-full max-w-md">
          
//           {/* Header Typography Block */}
//           <div className="mb-8 text-center lg:text-left">
//             <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
//               Partner Authentication
//             </h2>
//             <p className="text-slate-400 text-xs md:text-sm mt-1">
//               Provide your verified associate space credentials to access your terminal.
//             </p>
//           </div>

//           {/* Form */}
//           <form onSubmit={handleSubmit} className="space-y-5">
            
//             {/* Email Field */}
//             <div className="flex flex-col gap-1.5">
//               <label className="text-xs font-bold uppercase tracking-wider text-slate-700">Email Address</label>
//               <div className="relative">
//                 <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
//                 <input
//                   type="email"
//                   required
//                   name="email"
//                   value={loginData.email}
//                   onChange={handleChange}
//                   placeholder="partner@institution.com"
//                   className="w-full pl-10 pr-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 transition-all font-medium text-slate-800 placeholder:text-slate-400"
//                 />
//               </div>
//             </div>

//             {/* Password Field */}
//             <div className="flex flex-col gap-1.5">
//               <label className="text-xs font-bold uppercase tracking-wider text-slate-700">Password</label>
//               <div className="relative">
//                 <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
//                 <input
//                   type="password"
//                   required
//                   name="password"
//                   value={loginData.password}
//                   onChange={handleChange}
//                   placeholder="••••••••••••"
//                   className="w-full pl-10 pr-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 transition-all font-medium text-slate-800 placeholder:text-slate-400"
//                 />
//               </div>
//             </div>

//             {/* Captcha Split Input Section */}
//             <div className="flex flex-col gap-1.5">
//               <label className="text-xs font-bold uppercase tracking-wider text-slate-700">Security Verification</label>
//               <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
                
//                 {/* Simulated Captcha Image Area */}
//                 <div className="sm:col-span-5 bg-slate-100 border border-slate-200 rounded-xl flex items-center justify-center font-mono text-sm tracking-widest text-slate-400 select-none font-bold h-11">
//                   <span className="line-through decoration-slate-400/60 decoration-2 rotate-2 inline-block">W6xK9</span>
//                 </div>
                
//                 {/* Verification Field */}
//                 <div className="sm:col-span-7 relative">
//                   <ShieldAlert className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
//                   <input
//                     type="text"
//                     required
//                     name="captcha"
//                     value={loginData.captcha}
//                     onChange={handleChange}
//                     placeholder="Enter code"
//                     className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 transition-all font-medium text-slate-800 placeholder:text-slate-400"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Submit Action Execution Button */}
//             <button
//               type="submit"
//               className="group w-full flex items-center justify-center gap-2 h-12 rounded-xl bg-slate-950 text-white text-xs font-bold hover:bg-slate-900 transition-all shadow-md shadow-slate-950/5 active:scale-[0.99] pt-1"
//             >
//               <span>Access Account Dashboard</span>
//               <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
//             </button>
//           </form>

//           {/* Registration Navigation Redirect Option */}
//           <p className="text-center lg:text-left text-xs text-slate-400 mt-8 font-medium">
//             Don’t have an operational account?{" "}
//             <span
//               onClick={() => navigate("/partnersregisteration")}
//               className="text-indigo-600 hover:text-indigo-700 hover:underline font-bold cursor-pointer transition-colors"
//             >
//               Create an Account
//             </span>
//           </p>

//         </div>
//       </div>

//     </div>
//   );
// };

// export default PartnerLogin;



import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Building2, Mail, Lock, Loader2, ShieldCheck, ArrowRight } from "lucide-react";
import Seo from "../components/Seo";
import { useDispatch } from "react-redux";
import { setPartner } from "../store/index";
import { loginPartner } from "../services/apiService";

const PartnerLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const { data } = await loginPartner({ email, password });
      dispatch(setPartner(data.data));
      navigate("/partner/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Seo 
        title="Partner Login" 
        description="Login to your Cavner Fintech partner account" 
        path="/partner-login" 
      />
      <div className="min-h-screen grid lg:grid-cols-12 bg-slate-50 antialiased font-sans">
        
        {/* Left Brand Panel (5 Cols) */}
        <div className="hidden lg:flex lg:col-span-5 flex-col justify-between relative bg-slate-950 text-white p-12 overflow-hidden">
          {/* Subtle geometric grid background overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />
          <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] rounded-full bg-amber-500/10 blur-[100px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[350px] h-[350px] rounded-full bg-indigo-500/10 blur-[100px]" />

          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-10">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/20">
                <Building2 className="text-slate-950" size={18} />
              </div>
              <span className="text-xl font-bold tracking-tight">
                Cavner <span className="text-amber-400">Partners</span>
              </span>
            </div>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 backdrop-blur-md text-amber-200 text-xs font-medium rounded-full mb-6 border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              Channel Partner Portal
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight leading-tight mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              PARTNER HUB & DSA CONSOLE
            </h1>
            <p className="text-slate-300/90 text-base leading-relaxed max-w-sm">
              Access your cloud workspace to coordinate merchant leads, track real-time revenue commissions, and scale client financing seamlessly.
            </p>
          </div>

          <div className="relative z-10 mt-auto pt-6 border-t border-slate-800 flex items-center gap-3 text-slate-400 text-sm">
            <ShieldCheck size={18} className="text-amber-400" />
            <span>Authorized corporate partner infrastructure terminal</span>
          </div>
        </div>

        {/* Right Form Workspace (7 Cols) */}
        <div className="flex items-center justify-center p-6 sm:p-12 lg:p-16 lg:col-span-7 bg-white shadow-2xl lg:shadow-none">
          <div className="w-full max-w-md">
            
            {/* Form Header Area */}
            <div className="flex items-center gap-3.5 mb-8 bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center shadow-md shadow-slate-900/10">
                <Building2 size={22} className="text-amber-400" />
              </div>
              <div>
                <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">Partner Gateway</h2>
                <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">DSA / NBFC / Agent Node</p>
              </div>
            </div>

            {/* Error Notification Toast */}
            {error && (
              <div className="bg-rose-50 border border-rose-100 text-rose-600 text-sm px-4 py-3.5 rounded-xl mb-6 flex items-center gap-2 animate-fade-in">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0" />
                <p className="font-medium">{error}</p>
              </div>
            )}

            {/* Input Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-600 tracking-wide">
                  Business Email
                </label>
                <div className="relative group">
                  <Mail
                    size={18}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-slate-800"
                  />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="partner@firm.com"
                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-800 placeholder-slate-400 transition-all focus:outline-none focus:border-slate-800 focus:bg-white focus:ring-4 focus:ring-slate-900/5"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-semibold text-slate-600 tracking-wide">
                    Security Password
                  </label>
                  <button
                    type="button"
                    className="text-xs font-semibold text-amber-600 hover:underline"
                  >
                    Reset Credentials?
                  </button>
                </div>
                <div className="relative group">
                  <Lock
                    size={18}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-slate-800"
                  />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-800 placeholder-slate-400 transition-all focus:outline-none focus:border-slate-800 focus:bg-white focus:ring-4 focus:ring-slate-900/5"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white py-3.5 px-4 rounded-xl font-semibold shadow-lg shadow-slate-950/10 hover:bg-slate-800 active:scale-[0.99] transition-all disabled:opacity-40 disabled:pointer-events-none mt-6"
              >
                {loading ? (
                  <Loader2 size={20} className="animate-spin" />
                ) : (
                  <>
                    <span>Authenticate Platform</span>
                    <ArrowRight size={18} className="text-amber-400" />
                  </>
                )}
              </button>
            </form>

            {/* Redirection Footer Link */}
            <p className="text-center text-sm text-slate-500 pt-6 mt-6 border-t border-slate-100">
              Not an onboarding partner yet?{" "}
              <button
                type="button"
                onClick={() => navigate("/partnersregisteration")}
                className="text-amber-600 font-bold hover:underline"
              >
                Apply for Onboarding
              </button>
            </p>

          </div>
        </div>
      </div>
    </>
  );
};

export default PartnerLogin;