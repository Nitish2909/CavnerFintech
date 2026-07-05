// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { User, Mail, Phone, Calendar, CreditCard, MapPin, ArrowRight, ShieldCheck, MailIcon, Lock } from "lucide-react";
// // import axiosInstance from "./axiosInstance"; 

// const Register = () => {
//   const navigate = useNavigate();

//   const [fullname, setFullname] = useState("");
//   const [phonenumber, setPhonenumber] = useState("");
//   const [email, setEmail]= useState("");
//   const [password, setPassword] = useState("");
//   const [dateofbirth, setDateOfBirth] = useState("");
//   const [pancard, setPanCard] = useState("");
//   const [pincode, setPinCode] = useState("");
//   const [agreeTerms, setAgreeTerms] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!agreeTerms) {
//       alert("Please agree to the Terms of Use and Privacy Policy.");
//       return;
//     }

//     const payload = {
//       name:fullname,
//       phone:phonenumber,
//       email,
//       password,
//       dob:dateofbirth,
//       pannumber:pancard,
//       pincode,
//     };

//     console.log("Submitting form data:", payload);

//     try {
//       const response = await fetch(
//         "http://localhost:3000/api/auth/register",{
//           method:'POST',
//           headers:{'Content-Type':'application/json'},
//           body:JSON.stringify(payload)
//         }
//       );
//       console.log(response.data);
//       alert("Registration Successful!");
    
//       setFullname("");
//       setPhonenumber("");
//       setDateOfBirth("");
//       setPanCard("");
//       setPinCode("");
//       setAgreeTerms(false);
    
//       navigate("/login");
//     } catch (error) {
//       console.error(error);
//       alert(error.response?.data?.message || "Something went wrong");
//     }
//   };

//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-12 min-h-screen bg-slate-50 font-sans antialiased selection:bg-indigo-500 selection:text-white">
      
//       {/* Left Column: Premium Brand Sidebar */}
//       <div className="hidden lg:flex lg:col-span-5 relative flex-col justify-between bg-slate-900 text-white p-12 overflow-hidden">
//         <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:16px_16px]" />
//         <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
//         <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
        
//         {/* Upper Badge */}
//         <div className="relative z-10 flex items-center gap-2 text-indigo-400 font-semibold tracking-wider text-xs uppercase">
//           <ShieldCheck className="w-4 h-4" />
//           <span>Secure Identity Verification</span>
//         </div>

//         {/* Hero Context Block */}
//         <div className="relative z-10 my-auto space-y-4">
//           <h1 className="text-4xl lg:text-5xl font-black tracking-tight leading-none text-white">
//             CREATE YOUR <br />
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-300">
//               SECURED PROFILE
//             </span>
//           </h1>
//           <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
//             Register your core credentials to initialize your unified platform dashboard and securely manage accounts.
//           </p>
//         </div>

//         {/* Trust Badging Footer */}
//         <div className="relative z-10 flex items-center gap-2 text-xs text-slate-500 font-medium tracking-wide">
//           <ShieldCheck className="w-4 h-4 text-emerald-500" />
//           <span>Data Security Architecture Compliant.</span>
//         </div>
//       </div>

//       {/* Right Column: Clean Interactive Form Canvas */}
//       <div className="lg:col-span-7 flex flex-col items-center justify-center p-6 md:p-12 bg-white">
//         <div className="w-full max-w-lg">
          
//           {/* Header Typography Block */}
//           <div className="mb-8 text-center lg:text-left">
//             <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
//               Register Secure Account
//             </h2>
//             <p className="text-slate-400 text-xs md:text-sm mt-1">
//               Please populate the official data inputs below to register your system profile.
//             </p>
//           </div>

//           {/* Registration Input Form */}
//           <form onSubmit={handleSubmit} className="space-y-5">
            
//             {/* Full Legal Name */}
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
//                   placeholder="John Doe"
//                   className="w-full pl-10 pr-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 transition-all font-medium text-slate-800 placeholder:text-slate-400"
//                 />
//               </div>
//             </div>

//             {/* Mobile Contact Line */}
//             <div className="flex flex-col gap-1.5">
//               <label className="text-xs font-bold uppercase tracking-wider text-slate-700">Phone Number</label>
//               <div className="relative">
//                 <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
//                 <input
//                   type="tel"
//                   required
//                   name="phonenumber"
//                   value={phonenumber}
//                   onChange={(e) => setPhonenumber(e.target.value)}
//                   placeholder="+91 XXXXX XXXXX"
//                   className="w-full pl-10 pr-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 transition-all font-medium text-slate-800 placeholder:text-slate-400"
//                 />
//               </div>
//             </div>

//              {/* Email Contact Line */}
//             <div className="flex flex-col gap-1.5">
//               <label className="text-xs font-bold uppercase tracking-wider text-slate-700">Email</label>
//               <div className="relative">
//                 <MailIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
//                 <input
//                   type="text"
//                   required
//                   name="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="abc@gmail.com"
//                   className="w-full pl-10 pr-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 transition-all font-medium text-slate-800 placeholder:text-slate-400"
//                 />
//               </div>
//             </div>

//              {/* Password */}
//             <div className="flex flex-col gap-1.5">
//               <label className="text-xs font-bold uppercase tracking-wider text-slate-700">Password</label>
//               <div className="relative">
//                 <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
//                 <input
//                   type="password"
//                   required
//                   name="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   placeholder="password"
//                   className="w-full pl-10 pr-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 transition-all font-medium text-slate-800 placeholder:text-slate-400"
//                 />
//               </div>
//             </div>

//             {/* Date of Birth Selection Field */}
//             <div className="flex flex-col gap-1.5">
//               <label className="text-xs font-bold uppercase tracking-wider text-slate-700">Date of Birth</label>
//               <div className="relative">
//                 <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
//                 <input
//                   type="date"
//                   required
//                   name="dateofbirth"
//                   value={dateofbirth}
//                   onChange={(e) => setDateOfBirth(e.target.value)}
//                   className="w-full pl-10 pr-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 transition-all font-medium text-slate-700"
//                 />
//               </div>
//             </div>

//             {/* Horizontal Split for PAN Card and Pin Code */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//               <div className="flex flex-col gap-1.5">
//                 <label className="text-xs font-bold uppercase tracking-wider text-slate-700">PAN Card</label>
//                 <div className="relative">
//                   <CreditCard className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
//                   <input
//                     type="text"
//                     required
//                     name="pancard"
//                     value={pancard}
//                     onChange={(e) => setPanCard(e.target.value)}
//                     placeholder="ABCDE1234F"
//                     className="w-full pl-10 pr-4 py-3 text-sm uppercase bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 transition-all font-medium text-slate-800 placeholder:text-slate-400 tracking-wider"
//                   />
//                 </div>
//               </div>
//               <div className="flex flex-col gap-1.5">
//                 <label className="text-xs font-bold uppercase tracking-wider text-slate-700">Pincode</label>
//                 <div className="relative">
//                   <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
//                   <input
//                     type="text"
//                     required
//                     name="pincode"
//                     value={pincode}
//                     onChange={(e) => setPinCode(e.target.value)}
//                     placeholder="110001"
//                     className="w-full pl-10 pr-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 transition-all font-medium text-slate-800 placeholder:text-slate-400"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Consent Architecture Box */}
//             <div className="flex items-start gap-3 pt-2">
//               <input 
//                 type="checkbox" 
//                 id="terms"
//                 checked={agreeTerms}
//                 onChange={(e) => setAgreeTerms(e.target.checked)}
//                 className="mt-1 h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 transition-all cursor-pointer accent-indigo-600"
//               />
//               <label htmlFor="terms" className="text-xs text-slate-500 leading-relaxed cursor-pointer select-none">
//                 By submitting this form, you explicitly acknowledge and agree to the operational <span className="text-indigo-600 font-semibold hover:underline">Terms of Use</span> and comprehensive <span className="text-indigo-600 font-semibold hover:underline">Privacy Policy</span>.
//               </label>
//             </div>
//             {/* Submit Action Execution Button */}
//             <button
//               type="submit"
//               className="group w-full flex items-center justify-center gap-2 h-12 rounded-xl bg-slate-950 text-white text-xs font-bold hover:bg-slate-900 transition-all shadow-md shadow-slate-950/5 active:scale-[0.99] pt-1"
//             >
//               <span className="text-[15px]">Register</span>
//               <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
//             </button>
//           </form>

//           {/* Login Navigation Redirection Anchor */}
//           <p className="text-center lg:text-left text-xs text-slate-400 mt-8 font-medium">
//             Already registered on our registry?{" "}
//             <span
//               onClick={() => navigate("/login")}
//               className="text-indigo-600 hover:text-indigo-700 hover:underline font-bold cursor-pointer transition-colors"
//             >
//               Login Now
//             </span>
//           </p>

//         </div>
//       </div>

//     </div>
//   );
// };

// export default Register;


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  User,
  Mail,
  Phone,
  Calendar,
  CreditCard,
  MapPin,
  ArrowRight,
  ShieldCheck,
  Lock,
  Loader2,
  CheckCircle2,
  ChevronLeft,
} from "lucide-react";
import Seo from "../components/Seo";
import { sendOtp, verifyOtp, register } from "../services/apiService";

const Register = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // 1: form, 2: email OTP, 3: done
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    phonenumber: "",
    password: "",
    dateofbirth: "",
    pancard: "",
    pincode: "",
  });
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [otp, setOtp] = useState("");
  const [maskedTarget, setMaskedTarget] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSendEmailOtp = async () => {
    setError("");
    if (!form.email || !form.password || !form.fullname || !form.phonenumber) {
      setError("Please fill all required fields");
      return;
    }
    setLoading(true);
    try {
      const response = await sendOtp({
        identifier: form.email,
        type: "email",
        purpose: "registration",
      });
      // Fallback check to support both nested data structures safely
      const responseData = response.data?.data || response.data;
      setMaskedTarget(responseData?.masked || form.email);
      setStep(2);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to send OTP to email");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyEmailOtp = async () => {
    setError("");
    setLoading(true);
    try {
      await verifyOtp({ identifier: form.email, type: "email", otp });
      // setOtp(""); // Clear OTP input token for the next phone step
      
      // const response = await sendOtp({
      //   identifier: form.phonenumber,
      //   type: "phone",
      //   purpose: "registration",
      // });
      // const responseData = response.data?.data || response.data;
      // setMaskedTarget(responseData?.masked || form.phonenumber);

      const response = await register({
        name: form.fullname,
        email: form.email,
        phone: form.phonenumber,
        password: form.password,
        dob: form.dateofbirth,
        pannumber: form.pancard,
        pincode: form.pincode,
      });
      
      const responseData = response.data?.data || response.data;
      if (responseData?.token) {
        localStorage.setItem("userToken", responseData.token);
      }
      if (responseData?.user) {
        localStorage.setItem("user", JSON.stringify(responseData.user));
      }
      setStep(3);
      setTimeout(() => navigate("/user/dashboard"), 2000);

    } catch (err) {
      setError(err.response?.data?.message || "Invalid Email OTP");
    } finally {
      setLoading(false);
    }
  };

  // const handleVerifyPhoneOtp = async () => {
  //   setError("");
  //   setLoading(true);
  //   try {
  //     await verifyOtp({ identifier: form.phonenumber, type: "phone", otp });

      
  //     const response = await register({
  //       name: form.fullname,
  //       email: form.email,
  //       phone: form.phonenumber,
  //       password: form.password,
  //       dob: form.dateofbirth,
  //       pannumber: form.pancard,
  //       pincode: form.pincode,
  //     });
      
  //     const responseData = response.data?.data || response.data;
  //     if (responseData?.token) {
  //       localStorage.setItem("userToken", responseData.token);
  //     }
  //     if (responseData?.user) {
  //       localStorage.setItem("user", JSON.stringify(responseData.user));
  //     }
      
  //     setStep(4);
  //     setTimeout(() => navigate("/user/dashboard"), 2000);
  //   } catch (err) {
  //     setError(err.response?.data?.message || "Registration phase failed");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <>
      <Seo
        title="Register"
        description="Create your secure Cavner Fintech account with email and phone OTP verification."
        path="/register"
      />
      <div className="min-h-screen grid lg:grid-cols-12 bg-slate-50 antialiased font-sans">
        
        {/* Left brand panel (5 cols) */}
        <div className="hidden lg:flex lg:col-span-5 flex-col justify-between relative bg-indigo-950 text-white p-12 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e1b4b_1px,transparent_1px),linear-gradient(to_bottom,#1e1b4b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60" />
          <div className="absolute top-[-20%] right-[-20%] w-[400px] h-[400px] rounded-full bg-indigo-500/10 blur-[80px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[350px] h-[350px] rounded-full bg-emerald-500/10 blur-[80px]" />

          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-10">
              <div className="h-9 w-9 rounded-xl bg-indigo-500 flex items-center justify-center shadow-md shadow-indigo-500/20">
                <ShieldCheck className="text-white" size={20} />
              </div>
              <span className="text-xl font-bold tracking-tight">Cavner <span className="text-indigo-400">Fintech</span></span>
            </div>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 backdrop-blur-md text-indigo-200 text-xs font-medium rounded-full mb-6 border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Secure Identity Verification
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight leading-tight mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              CREATE YOUR SECURED PROFILE
            </h1>
            <p className="text-indigo-200/80 text-base leading-relaxed max-w-sm">
              Register your core credentials to initialize your unified platform dashboard and securely manage assets.
            </p>
          </div>

          <div className="relative z-10 mt-auto pt-6 border-t border-white/10 flex items-center gap-3 text-indigo-200/70 text-sm">
            <ShieldCheck size={18} className="text-emerald-400" />
            <span>Data Security Architecture Compliant (AES-256)</span>
          </div>
        </div>

        {/* Right form container (7 cols) */}
        <div className="flex items-center justify-center p-6 sm:p-12 lg:p-16 lg:col-span-7 bg-white shadow-2xl lg:shadow-none">
          <div className="w-full max-w-lg">
            
            {/* Progress Stepper */}
            <div className="flex items-center justify-between mb-10 bg-slate-50 p-4 rounded-2xl border border-slate-100">
              {["Details", "Email OTP", "Done"].map((label, i) => (
                <div key={label} className="flex items-center flex-1 last:flex-none">
                  <div className="flex flex-col items-center gap-1.5 relative">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center text-sm font-semibold transition-all duration-300 ${
                        step > i + 1 
                          ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/20" 
                          : step === i + 1 
                            ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20 ring-4 ring-indigo-100" 
                            : "bg-white text-slate-400 border border-slate-200"
                      }`}
                    >
                      {step > i + 1 ? <CheckCircle2 size={18} /> : i + 1}
                    </div>
                    <span className={`text-[10px] font-medium hidden sm:block ${step === i + 1 ? "text-indigo-600 font-bold" : "text-slate-400"}`}>
                      {label}
                    </span>
                  </div>
                  {i < 2 && (
                    <div className="flex-1 mx-2 h-0.5 relative bg-slate-200 rounded">
                      <div
                        className="absolute top-0 left-0 h-full bg-emerald-500 transition-all duration-500 rounded"
                        style={{ width: step > i + 1 ? "100%" : "0%" }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Typography Header */}
            <div className="mb-8">
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                {step === 3 ? "All Set!" : "Register Secure Account"}
              </h2>
              <p className="text-slate-500 text-sm mt-2 font-medium">
                {step === 1 && "Please provide your official credentials below to setup your secure identity."}
                {step === 2 && `We've sent a 6-digit confirmation key to ${maskedTarget}`}
                {/* {step === 3 && `Final verification step. Enter the OTP sent to ${maskedTarget}`} */}
                {step === 3 && "Your identity has been verified. Preparing dashboard access..."}
              </p>
            </div>

            {/* Notification Alert */}
            {error && (
              <div className="bg-rose-50 border border-rose-100 text-rose-600 text-sm px-4 py-3.5 rounded-xl mb-6 flex items-center gap-2 animate-fade-in">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0" />
                <p className="font-medium">{error}</p>
              </div>
            )}

            {/* Step 1: Base Registration Form */}
            {step === 1 && (
              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendEmailOtp();
                }}
              >
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-600 tracking-wide">Full Name</label>
                  <div className="relative group">
                    <User size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-indigo-500" />
                    <input
                      name="fullname"
                      type="text"
                      required
                      value={form.fullname}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-800 placeholder-slate-400 transition-all focus:outline-none focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-600 tracking-wide">Email Address</label>
                    <div className="relative group">
                      <Mail size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-indigo-500" />
                      <input
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="name@company.com"
                        className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-800 placeholder-slate-400 transition-all focus:outline-none focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-600 tracking-wide">Phone Number</label>
                    <div className="relative group">
                      <Phone size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-indigo-500" />
                      <input
                        name="phonenumber"
                        type="tel"
                        required
                        value={form.phonenumber}
                        onChange={handleChange}
                        placeholder="9876543210"
                        maxLength="10"
                        className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-800 placeholder-slate-400 transition-all focus:outline-none focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-600 tracking-wide">Password</label>
                  <div className="relative group">
                    <Lock size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-indigo-500" />
                    <input
                      name="password"
                      type="password"
                      required
                      value={form.password}
                      onChange={handleChange}
                      placeholder="••••••••"
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-800 placeholder-slate-400 transition-all focus:outline-none focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-600 tracking-wide">Date of Birth</label>
                    <div className="relative group">
                      <Calendar size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-indigo-500" />
                      <input
                        name="dateofbirth"
                        type="date"
                        required
                        value={form.dateofbirth}
                        onChange={handleChange}
                        className="w-full pl-11 pr-3 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-800 placeholder-slate-400 transition-all focus:outline-none focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-600 tracking-wide">PAN Card Number</label>
                    <div className="relative group">
                      <CreditCard size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-indigo-500" />
                      <input
                        name="pancard"
                        type="text"
                        value={form.pancard}
                        onChange={handleChange}
                        placeholder="ABCDE1234F"
                        maxLength="10"
                        className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-800 placeholder-slate-400 uppercase transition-all focus:outline-none focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-600 tracking-wide">Postal Pincode</label>
                  <div className="relative group">
                    <MapPin size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-indigo-500" />
                    <input
                      name="pincode"
                      type="text"
                      value={form.pincode}
                      onChange={handleChange}
                      placeholder="400001"
                      maxLength="6"
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-800 placeholder-slate-400 transition-all focus:outline-none focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
                    />
                  </div>
                </div>

                <label className="flex items-start gap-3 text-sm text-slate-600 mt-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                    className="mt-1 h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 accent-indigo-600"
                  />
                  <span>
                    I explicitly agree to the{" "}
                    <span className="text-indigo-600 font-medium hover:underline">Terms of Use</span> and{" "}
                    <span className="text-indigo-600 font-medium hover:underline">Privacy Policy</span>.
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={loading || !agreeTerms}
                  className="w-full flex items-center justify-center gap-2 bg-indigo-600 text-white py-3.5 px-4 rounded-xl font-semibold shadow-lg shadow-indigo-600/10 hover:bg-indigo-700 active:scale-[0.99] transition-all disabled:opacity-40 disabled:pointer-events-none mt-6"
                >
                  {loading ? (
                    <Loader2 size={20} className="animate-spin" />
                  ) : (
                    <>
                      <span>Send Email Verification Code</span> 
                      <ArrowRight size={18} />
                    </>
                  )}
                </button>

                <p className="text-center text-sm text-slate-500 pt-4">
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={() => navigate("/login")}
                    className="text-indigo-600 font-bold hover:underline"
                  >
                    Login here
                  </button>
                </p>
              </form>
            )}

            {/* Step 2 : Universal OTP Input View Panel */}
            {(step === 2 ) && (
              <div className="space-y-6 animate-fade-in">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block text-center mb-1">
                    Enter Verification Code
                  </label>
                  <input
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    maxLength="6"
                    placeholder="000000"
                    className="w-full text-center text-3xl font-extrabold tracking-[0.5em] pl-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:outline-none focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 transition-all"
                  />
                </div>
                
                <button
                  onClick={handleVerifyEmailOtp }
                  disabled={loading || otp.length < 4}
                  className="w-full flex items-center justify-center gap-2 bg-indigo-600 text-white py-3.5 rounded-xl font-semibold hover:bg-indigo-700 shadow-lg shadow-indigo-600/10 transition-all disabled:opacity-40"
                >
                  {loading ? <Loader2 size={20} className="animate-spin" /> : "Verify Identity Token"}
                </button>
                
                <button
                  type="button"
                  onClick={() => { setStep(1); setOtp(""); setError(""); }}
                  className="w-full flex items-center justify-center gap-1 text-sm text-slate-500 font-medium hover:text-slate-800 transition-colors py-1"
                >
                  <ChevronLeft size={16} /> Return to information entry
                </button>
              </div>
            )}

            {/* Step 4: Verification Complete Frame */}
            {step === 3 && (
              <div className="text-center py-10 px-4 bg-emerald-50/40 rounded-2xl border border-emerald-100 animate-fade-in">
                <div className="h-14 w-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={32} className="animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Registration Successful!</h3>
                <p className="text-slate-500 mt-2 text-sm font-medium max-w-xs mx-auto leading-relaxed">
                  Your identity verification processes are complete. Synchronizing your security layers and forwarding to dashboard platform now...
                </p>
              </div>
            )}

          </div>
        </div>
      </div>
    </>
  );
};

export default Register;