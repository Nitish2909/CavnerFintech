// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { User, Phone, ArrowRight, Sparkles } from "lucide-react";
// // import axiosInstance from "./axiosInstance"; 

// const Login = () => {
//   const navigate = useNavigate();
//   const [fullname, setFullname] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("")

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const payload = {
//       name:fullname,
//       email:email,
//       password:password
//     };

//     console.log("Submitting login payload:", payload);

//     try {
//       const response = await fetch(
//         "http://localhost:3000/api/auth/login",
//         {
//           method:"POST",
//           headers:{'Content-Type':"application/json"},
//           body:JSON.stringify(payload),
//           credentials:'include'
//         },
//       );
//       console.log(response.data);
    
//       setFullname("");
//       // setPhonenumber("");
    
//       navigate("/user/dashboard");
//     } catch (error) {
//       console.error("Login Error", error);
//       alert(error.response?.data?.message || "Login failed");
//     }
//   };

//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-12 min-h-screen bg-slate-50 font-sans antialiased selection:bg-indigo-500 selection:text-white">
      
//       {/* Left Column - Minimal Visual Splash Panel */}
//       <div className="hidden lg:flex lg:col-span-5 relative flex-col justify-between bg-slate-900 text-white p-12 overflow-hidden">
//         {/* Ambient Decorative Lighting */}
//         <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:16px_16px]" />
//         <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
//         <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl" />
        
//         {/* Top Floating Badge */}
//         <div className="relative z-10 flex items-center gap-2 text-indigo-400 font-semibold tracking-wider text-xs uppercase">
//           <Sparkles className="w-4 h-4" />
//           <span></span>
//         </div>

//         {/* Dynamic Center Text Block */}
//         <div className="relative z-10 my-auto">
//           <h1 className="text-4xl lg:text-5xl font-black tracking-tight leading-none text-white">
//             WELCOME BACK TO <br />
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-300">
//               YOUR DASHBOARD
//             </span>
//           </h1>
//           <p className="text-slate-400 text-sm mt-4 max-w-sm leading-relaxed">
//             Access secure tools, review interview readiness assessments, and synchronize with pipeline evaluations.
//           </p>
//         </div>

//         {/* Secure Bottom Footer Indicator */}
//         <div className="relative z-10 text-[11px] text-slate-500 tracking-wide font-medium">
//           Protected via End-to-End TLS Layering.
//         </div>
//       </div>

//       {/* Right Column - Clean Interaction Workspace */}
//       <div className="lg:col-span-7 flex flex-col items-center justify-center p-6 md:p-12 bg-white">
//         <div className="w-full max-w-md">
          
//           {/* Header Branding Block */}
//           <div className="mb-8 text-center lg:text-left">
//             <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
//               Sign In to Account
//             </h2>
//             <p className="text-slate-400 text-xs md:text-sm mt-1">
//               Please enter your profile name and authentic communication line.
//             </p>
//           </div>

//           {/* Form */}
//           <form onSubmit={handleSubmit} className="space-y-5">
            
//             {/* Full Name Input wrapper */}
//             <div className="flex flex-col gap-1.5">
//               <label className="text-xs font-bold uppercase tracking-wider text-slate-700">Full Name</label>
//               <div className="relative">
//                 <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
//                 <input
//                   type="text"
//                   required
//                   name="fullname"
//                   value={fullname}
//                   onChange={(e) => setFullname(e.target.value)}
//                   placeholder="Alex"
//                   className="w-full pl-10 pr-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 transition-all font-medium placeholder:text-slate-400 text-slate-800"
//                 />
//               </div>
//             </div>

//             {/* Phone Number Input wrapper */}
//             {/* <div className="flex flex-col gap-1.5">
//               <label className="text-xs font-bold uppercase tracking-wider text-slate-700">Phone Number</label>
//               <div className="relative">
//                 <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
//                 <input
//                   type="tel"
//                   required
//                   name="phone"
//                   value={phonenumber}
//                   onChange={(e) => setPhonenumber(e.target.value)}
//                   placeholder="+1 (555) 000-0000"
//                   className="w-full pl-10 pr-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 transition-all font-medium placeholder:text-slate-400 text-slate-800"
//                 />
//               </div>
//             </div> */}

//              {/* Email Input wrapper */}
//             <div className="flex flex-col gap-1.5">
//               <label className="text-xs font-bold uppercase tracking-wider text-slate-700">Email</label>
//               <div className="relative">
//                 <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
//                 <input
//                   type="text"
//                   required
//                   name="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="abc@gmail.com"
//                   className="w-full pl-10 pr-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 transition-all font-medium placeholder:text-slate-400 text-slate-800"
//                 />
//               </div>
//             </div>

//              {/* password Input wrapper */}
//             <div className="flex flex-col gap-1.5">
//               <label className="text-xs font-bold uppercase tracking-wider text-slate-700">Password</label>
//               <div className="relative">
//                 <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
//                 <input
//                   type="password"
//                   required
//                   name="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   placeholder="password"
//                   className="w-full pl-10 pr-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 transition-all font-medium placeholder:text-slate-400 text-slate-800"
//                 />
//               </div>
//             </div>

//             {/* Submit Action Block */}
//             <button
//               type="submit"
//               className="group w-full flex items-center justify-center gap-2 h-12 rounded-xl bg-slate-950 text-white text-xs font-bold hover:bg-slate-900 transition-all shadow-md shadow-slate-950/5 active:scale-[0.99] pt-1"
//             >
//               <span className="text-[15px]">Login</span>
//               <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
//             </button>
//           </form>

//           {/* Account Creation Link Redirect */}
//           <p className="text-center lg:text-left text-sm text-slate-400 mt-8 font-medium">
//             Don’t have an operational account?{" "}
//             <span
//               onClick={() => navigate("/register")}
//               className="text-indigo-600 hover:text-indigo-700 hover:underline font-bold cursor-pointer transition-colors"
//             >
//               Sign Up
//             </span>
//           </p>

//         </div>
//       </div>

//     </div>
//   );
// };

// export default Login;


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, Loader2, ShieldCheck, ArrowRight } from "lucide-react";
import Seo from "../components/Seo";
import { useDispatch } from "react-redux";
import { setUser } from "../store/index";
import { login } from "../services/apiService";

const Login = () => {
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
      const { data } = await login({ email, password });
      dispatch(setUser(data.data));
      navigate("/user/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Seo
        title="Login"
        description="Login to your Cavner Fintech account to manage your loans and applications."
        path="/login"
      />
      <div className="min-h-screen grid lg:grid-cols-12 bg-slate-50 antialiased font-sans">
        
        {/* Left brand panel (5 cols) - Matches Register view exactly */}
        <div className="hidden lg:flex lg:col-span-5 flex-col justify-between relative bg-indigo-950 text-white p-12 overflow-hidden">
          {/* Background decoration shapes */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e1b4b_1px,transparent_1px),linear-gradient(to_bottom,#1e1b4b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60" />
          <div className="absolute top-[-20%] right-[-20%] w-[400px] h-[400px] rounded-full bg-indigo-500/10 blur-[80px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[350px] h-[350px] rounded-full bg-emerald-500/10 blur-[80px]" />

          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-10">
              <div className="h-9 w-9 rounded-xl bg-indigo-500 flex items-center justify-center shadow-md shadow-indigo-500/20">
                <ShieldCheck className="text-white" size={20} />
              </div>
              <span className="text-xl font-bold tracking-tight">
                Cavner <span className="text-indigo-400">Fintech</span>
              </span>
            </div>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 backdrop-blur-md text-indigo-200 text-xs font-medium rounded-full mb-6 border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
              Welcome Back
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight leading-tight mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              ACCESS YOUR FINANCIAL DASHBOARD
            </h1>
            <p className="text-indigo-200/80 text-base leading-relaxed max-w-sm">
              Securely log in to view your loan applications, track live approvals, and manage your asset portfolio profile.
            </p>
          </div>

          <div className="relative z-10 mt-auto pt-6 border-t border-white/10 flex items-center gap-3 text-indigo-200/70 text-sm">
            <ShieldCheck size={18} className="text-emerald-400" />
            <span>Protected with bank-grade encryption</span>
          </div>
        </div>

        {/* Right form container (7 cols) */}
        <div className="flex items-center justify-center p-6 sm:p-12 lg:p-16 lg:col-span-7 bg-white shadow-2xl lg:shadow-none">
          <div className="w-full max-w-md">
            
            {/* Header */}
            <div className="mb-8">
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Login to Your Account
              </h2>
              <p className="text-slate-500 text-sm mt-2 font-medium">
                Enter your authorized system credentials to access your secure environment.
              </p>
            </div>

            {/* Error Notification Banner */}
            {error && (
              <div className="bg-rose-50 border border-rose-100 text-rose-600 text-sm px-4 py-3.5 rounded-xl mb-6 flex items-center gap-2 animate-fade-in">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0" />
                <p className="font-medium">{error}</p>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-600 tracking-wide">
                  Email Address
                </label>
                <div className="relative group">
                  <Mail
                    size={18}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-indigo-500"
                  />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-800 placeholder-slate-400 transition-all focus:outline-none focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-semibold text-slate-600 tracking-wide">
                    Password
                  </label>
                  <button
                    type="button"
                    className="text-xs font-semibold text-indigo-600 hover:underline"
                  >
                    Forgot password?
                  </button>
                </div>
                <div className="relative group">
                  <Lock
                    size={18}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-indigo-500"
                  />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-800 placeholder-slate-400 transition-all focus:outline-none focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 bg-indigo-600 text-white py-3.5 px-4 rounded-xl font-semibold shadow-lg shadow-indigo-600/10 hover:bg-indigo-700 active:scale-[0.99] transition-all disabled:opacity-40 disabled:pointer-events-none mt-6"
              >
                {loading ? (
                  <Loader2 size={20} className="animate-spin" />
                ) : (
                  <>
                    <span>Sign In to Account</span>
                    <ArrowRight size={18} />
                  </>
                )}
              </button>
            </form>

            {/* Redirection Link footer */}
            <p className="text-center text-sm text-slate-500 pt-6 mt-4 border-t border-slate-100">
              Don't have an account?{" "}
              <button
                type="button"
                onClick={() => navigate("/register")}
                className="text-indigo-600 font-bold hover:underline"
              >
                Register Now
              </button>
            </p>

          </div>
        </div>
      </div>
    </>
  );
};

export default Login;