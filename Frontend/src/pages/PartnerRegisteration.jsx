// import React, { useState } from "react";
// import { Building2, FileText, Calendar, Mail, Phone, MapPin, ArrowRight, ShieldCheck } from "lucide-react";

// const PartnerRegistration = () => {
//   const [formData, setFormData] = useState({
//     type: "",
//     name: "",
//     shortName: "",
//     officialNumber: "",
//     officialEmail: "",
//     panNumber: "",
//     dob: "",
//     plotNo: "",
//     officialAddress: "",
//     state: "",
//     district: "",
//     city: "",
//     pinCode: "",
//     password:""
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit =  async(e) => {
//     e.preventDefault();
//     console.log("Submitting Partner Registration State:", formData);

//     const payload = {
//     entityType: type,
//     corporateName:name,
//     shortName:shortName,
//     phone:officialNumber,
//     email: officialEmail,
//     pannumber:panNumber,
//     dateOfIncorporation:dob,
//     plotNo:plotNo,
//     address:officialAddress,
//     state:state,
//     district:district,
//     city:city,
//     pincode :pinCode,
//     // password
//     }

//   try {
//       const response = await fetch(
//         "http://localhost:3000/api/partner/",{
//           method:'POST',
//           headers:{'Content-Type':'application/json'},
//           body:JSON.stringify(payload)
//         }
//       );
//       console.log(response.data);
//       alert("Registration Successful!");
    
//       setFormData("")
//       navigate("/partner-login");
//     } catch (error) {
//       console.error(error);
//       alert(error.response?.data?.message || "Something went wrong");
//     }
//   };

//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-12 min-h-screen bg-slate-50 font-sans antialiased selection:bg-indigo-500 selection:text-white">
      
//       {/* Left Column: Premium Informational Sidebar */}
//       <div className="hidden lg:flex lg:col-span-4 relative flex-col justify-between bg-slate-900 text-white p-12 overflow-hidden">
//         <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:16px_16px]" />
//         <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
//         <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
        
//         {/* Upper Badge */}
//         <div className="relative z-10 flex items-center gap-2 text-indigo-400 font-semibold tracking-wider text-xs uppercase">
//           <Building2 className="w-4 h-4" />
//           <span>Onboarding System</span>
//         </div>

//         {/* Hero Context Block */}
//         <div className="relative z-10 my-auto space-y-4">
//           <h1 className="text-3xl lg:text-4xl font-black tracking-tight leading-none text-white">
//             PARTNER <br />
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-300">
//               PROVISIONING
//             </span>
//           </h1>
//           <p className="text-slate-400 text-xs leading-relaxed max-w-xs">
//             Complete the formal firm registry details to generate your organizational workspace credentials and system tokens.
//           </p>
//         </div>

//         {/* Trust Badging Footer */}
//         <div className="relative z-10 flex items-center gap-2 text-xs text-slate-500 font-medium tracking-wide">
//           <ShieldCheck className="w-4 h-4 text-emerald-500" />
//           <span>Encrypted Onboarding Channel Active.</span>
//         </div>
//       </div>

//       {/* Right Column: Clean Multi-Step Form Workspace */}
//       <div className="lg:col-span-8 flex flex-col items-center justify-center p-6 md:p-12 lg:p-16 bg-white overflow-y-auto">
//         <div className="w-full max-w-3xl">
          
//           {/* Header Typography Block */}
//           <div className="mb-10 border-b border-slate-100 pb-6 text-center sm:text-left">
//             <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
//               Company Information
//             </h2>
//             <p className="text-slate-400 text-xs md:text-sm mt-1">
//               Please submit accurate operational credentials to verify your business framework profile.
//             </p>
//           </div>

//           {/* Registration Input Form */}
//           <form onSubmit={handleSubmit} className="space-y-8">
            
//             {/* SECTION 1: Corporate Core Grid */}
//             <div className="space-y-5">
//               <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 border-l-2 border-indigo-500 pl-2">
//                 Corporate Identification
//               </h3>
              
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//                 {/* Legal Entity Type */}
//                 <div className="flex flex-col gap-1.5">
//                   <label className="text-xs font-bold uppercase tracking-wider text-slate-700">Entity Type</label>
//                   <select
//                     name="type"
//                     value={formData.type}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 transition-all font-medium text-slate-700 cursor-pointer"
//                   >
//                     <option value="" disabled hidden>Select an entity type</option>
//                     <option value="Pvt Ltd Company">Pvt Ltd Company</option>
//                     <option value="Public Company">Public Company</option>
//                     <option value="Proprietorship Firm">Proprietorship Firm</option>
//                     <option value="Partnership Firm">Partnership Firm</option>
//                     <option value="LLP">LLP</option>
//                     <option value="HUF">HUF</option>
//                   </select>
//                 </div>

//                 {/* Corporate Registered Name */}
//                 <div className="flex flex-col gap-1.5">
//                   <label className="text-xs font-bold uppercase tracking-wider text-slate-700">Corporate Name</label>
//                   <div className="relative">
//                     <Building2 className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
//                     <input
//                       type="text"
//                       required
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       placeholder="Enterprise Solutions Ltd"
//                       className="w-full pl-10 pr-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 transition-all font-medium text-slate-800 placeholder:text-slate-400"
//                     />
//                   </div>
//                 </div>

//                 {/* Short Name / Alias */}
//                 <div className="flex flex-col gap-1.5">
//                   <label className="text-xs font-bold uppercase tracking-wider text-slate-700">Short Name</label>
//                   <div className="relative">
//                     <FileText className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
//                     <input
//                       type="text"
//                       required
//                       name="shortName"
//                       value={formData.shortName}
//                       onChange={handleChange}
//                       placeholder="ESL"
//                       className="w-full pl-10 pr-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 transition-all font-medium text-slate-800 placeholder:text-slate-400"
//                     />
//                   </div>
//                 </div>

//                 {/* Contact Line */}
//                 <div className="flex flex-col gap-1.5">
//                   <label className="text-xs font-bold uppercase tracking-wider text-slate-700">Official Number</label>
//                   <div className="relative">
//                     <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
//                     <input
//                       type="tel"
//                       required
//                       name="officialNumber"
//                       value={formData.officialNumber}
//                       onChange={handleChange}
//                       placeholder="+91 XXXXX XXXXX"
//                       className="w-full pl-10 pr-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 transition-all font-medium text-slate-800 placeholder:text-slate-400"
//                     />
//                   </div>
//                 </div>

//                 {/* Email Address */}
//                 <div className="flex flex-col gap-1.5">
//                   <label className="text-xs font-bold uppercase tracking-wider text-slate-700">Official Email ID</label>
//                   <div className="relative">
//                     <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
//                     <input
//                       type="email"
//                       required
//                       name="officialEmail"
//                       value={formData.officialEmail}
//                       onChange={handleChange}
//                       placeholder="ops@enterprise.com"
//                       className="w-full pl-10 pr-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 transition-all font-medium text-slate-800 placeholder:text-slate-400"
//                     />
//                   </div>
//                 </div>
//                  {/* Password */}
//                  <div className="flex flex-col gap-1.5">
//                   <label className="text-xs font-bold uppercase tracking-wider text-slate-700">Password</label>
//                   <div className="relative">
//                     <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
//                     <input
//                       type="password"
//                       required
//                       name="password"
//                       value={formData.password}
//                       onChange={handleChange}
//                       placeholder="password"
//                       className="w-full pl-10 pr-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 transition-all font-medium text-slate-800 placeholder:text-slate-400"
//                     />
//                   </div>
//                 </div>


//                 {/* PAN Number */}
//                 <div className="flex flex-col gap-1.5">
//                   <label className="text-xs font-bold uppercase tracking-wider text-slate-700">PAN Number</label>
//                   <div className="relative">
//                     <FileText className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
//                     <input
//                       type="text"
//                       required
//                       name="panNumber"
//                       value={formData.panNumber}
//                       onChange={handleChange}
//                       placeholder="ABCDE1234F"
//                       className="w-full pl-10 pr-4 py-3 text-sm uppercase bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 transition-all font-medium text-slate-800 placeholder:text-slate-400 tracking-wider"
//                     />
//                   </div>
//                 </div>

//                 {/* DOB / Incorporation Date */}
//                 <div className="flex flex-col gap-1.5">
//                   <label className="text-xs font-bold uppercase tracking-wider text-slate-700">Date of Incorporation / DOB</label>
//                   <div className="relative">
//                     <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
//                     <input
//                       type="date"
//                       required
//                       name="dob"
//                       value={formData.dob}
//                       onChange={handleChange}
//                       className="w-full pl-10 pr-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 transition-all font-medium text-slate-700"
//                     />
//                   </div>
//                 </div>

//                 {/* Plot No */}
//                 <div className="flex flex-col gap-1.5">
//                   <label className="text-xs font-bold uppercase tracking-wider text-slate-700">Plot No / Suite</label>
//                   <div className="relative">
//                     <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
//                     <input
//                       type="text"
//                       required
//                       name="plotNo"
//                       value={formData.plotNo}
//                       onChange={handleChange}
//                       placeholder="Building 4B, Suite 12"
//                       className="w-full pl-10 pr-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 transition-all font-medium text-slate-800 placeholder:text-slate-400"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* SECTION 2: Address Layout Structure */}
//             <div className="space-y-5 pt-2">
//               <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 border-l-2 border-indigo-500 pl-2">
//                 Geographic Presence
//               </h3>

//               {/* Official Full Street Address */}
//               <div className="flex flex-col gap-1.5">
//                 <label className="text-xs font-bold uppercase tracking-wider text-slate-700">Official Full Address</label>
//                 <textarea
//                   required
//                   name="officialAddress"
//                   value={formData.officialAddress}
//                   onChange={handleChange}
//                   rows="3"
//                   placeholder="Enter the complete certified corporate location infrastructure details..."
//                   className="w-full px-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 transition-all font-medium text-slate-800 placeholder:text-slate-400 resize-none leading-relaxed"
//                 />
//               </div>

//               {/* State / District / City / Pincode Grid */}
//               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
//                 <div className="flex flex-col gap-1.5">
//                   <label className="text-xs font-bold uppercase tracking-wider text-slate-700">State</label>
//                   <input
//                     type="text"
//                     required
//                     name="state"
//                     value={formData.state}
//                     onChange={handleChange}
//                     placeholder="Delhi"
//                     className="w-full px-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 transition-all font-medium text-slate-800 placeholder:text-slate-400"
//                   />
//                 </div>

//                 <div className="flex flex-col gap-1.5">
//                   <label className="text-xs font-bold uppercase tracking-wider text-slate-700">District</label>
//                   <input
//                     type="text"
//                     required
//                     name="district"
//                     value={formData.district}
//                     onChange={handleChange}
//                     placeholder="New Delhi"
//                     className="w-full px-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 transition-all font-medium text-slate-800 placeholder:text-slate-400"
//                   />
//                 </div>

//                 <div className="flex flex-col gap-1.5">
//                   <label className="text-xs font-bold uppercase tracking-wider text-slate-700">City</label>
//                   <input
//                     type="text"
//                     required
//                     name="city"
//                     value={formData.city}
//                     onChange={handleChange}
//                     placeholder="Connaught Place"
//                     className="w-full px-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 transition-all font-medium text-slate-800 placeholder:text-slate-400"
//                   />
//                 </div>

//                 <div className="flex flex-col gap-1.5">
//                   <label className="text-xs font-bold uppercase tracking-wider text-slate-700">PIN Code</label>
//                   <input
//                     type="text"
//                     required
//                     name="pinCode"
//                     value={formData.pinCode}
//                     onChange={handleChange}
//                     placeholder="110001"
//                     className="w-full px-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 transition-all font-medium text-slate-800 placeholder:text-slate-400"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Action Buttons Frame */}
//             <div className="flex justify-end pt-4 border-t border-slate-100">
//               <button
//                 type="submit"
//                 className="group flex items-center justify-center gap-2 h-12 px-8 rounded-xl bg-slate-950 text-white text-xs font-bold hover:bg-slate-900 transition-all shadow-md shadow-slate-950/5 active:scale-[0.99] pt-1"
//               >
//                 <span>Next</span>
//                 <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
//               </button>
//             </div>
//           </form>

//         </div>
//       </div>

//     </div>
//   );
// };

// export default PartnerRegistration;



import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Building2, 
  User, 
  Mail, 
  Phone, 
  Lock, 
  Loader2, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck,
  ChevronLeft 
} from "lucide-react";
import Seo from "../components/Seo";
import { sendPartnerOtp, verifyPartnerOtp, registerPartner } from "../services/apiService";

const PartnerRegisteration = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // 1: form, 2: email OTP, 3: phone OTP, 4: done
  const [form, setForm] = useState({
    companyName: "", contactPerson: "", email: "", phone: "", password: "",
    gstNumber: "", panNumber: "", businessType: "DSA", city: "", state: "",
  });
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [masked, setMasked] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const sendEmailOtp = async () => {
    setError("");
    if (!form.companyName || !form.contactPerson || !form.email || !form.phone || !form.password) {
      setError("Please fill all required fields");
      return;
    }
    setLoading(true);
    try {
      const { data } = await sendPartnerOtp({ identifier: form.email, type: "email", purpose: "registration" });
      setMasked(data.data.masked);
      setStep(2);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to send OTP");
    } finally { setLoading(false); }
  };

  const verifyEmailOtp = async () => {
    setError("");
    setLoading(true);
    try {
      await verifyPartnerOtp({ identifier: form.email, type: "email", otp });
      setOtp("");
      const { data } = await sendPartnerOtp({ identifier: form.phone, type: "phone", purpose: "registration" });
      setMasked(data.data.masked);
      setStep(3);
    } catch (err) {
      setError(err.response?.data?.message || "Invalid OTP");
    } finally { setLoading(false); }
  };

  const verifyPhoneAndRegister = async () => {
    setError("");
    setLoading(true);
    try {
      await verifyPartnerOtp({ identifier: form.phone, type: "phone", otp });
      await registerPartner(form);
      setStep(4);
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    } finally { setLoading(false); }
  };

  return (
    <>
      <Seo title="Partner Registration" description="Register as a Cavner Fintech channel partner - DSA, NBFC, or agent" path="/partnersregisteration" />
      <div className="min-h-screen grid lg:grid-cols-12 bg-slate-50 antialiased font-sans">
        
        {/* Left Brand Panel (5 Cols) */}
        <div className="hidden lg:flex lg:col-span-5 flex-col justify-between relative bg-slate-950 text-white p-12 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />
          <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] rounded-full bg-amber-500/10 blur-[100px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[350px] h-[350px] rounded-full bg-indigo-500/10 blur-[100px]" />

          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-10">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/20">
                <Building2 className="text-slate-950" size={18} />
              </div>
              <span className="text-xl font-bold tracking-tight">Cavner <span className="text-amber-400">Partners</span></span>
            </div>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 backdrop-blur-md text-amber-200 text-xs font-medium rounded-full mb-6 border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              Join Our Network
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight leading-tight mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              BECOME A CHANNEL PARTNER
            </h1>
            <p className="text-slate-300/90 text-base leading-relaxed max-w-sm">
              Join Cavner Fintech's partner alliance. Distribute major financial solutions and scale structural portfolio payouts efficiently.
            </p>
          </div>

          <div className="relative z-10 mt-auto pt-6 border-t border-slate-800 flex items-center gap-3 text-slate-400 text-sm">
            <ShieldCheck size={18} className="text-amber-400" />
            <span>Verified commercial ecosystem onboarding terminal</span>
          </div>
        </div>

        {/* Right Form Workspace (7 Cols) */}
        <div className="flex items-center justify-center p-6 sm:p-12 lg:p-16 lg:col-span-7 bg-white shadow-2xl lg:shadow-none">
          <div className="w-full max-w-lg">
            
            {/* Progress Stepper Grid */}
            <div className="flex items-center justify-between mb-8 bg-slate-50 p-4 rounded-2xl border border-slate-100">
              {["Corporate", "Email OTP", "Phone OTP", "Review"].map((label, i) => (
                <div key={label} className="flex items-center flex-1 last:flex-none">
                  <div className="flex flex-col items-center gap-1 relative">
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                      step > i + 1 
                        ? "bg-emerald-500 text-white shadow-md shadow-emerald-500/10" 
                        : step === i + 1 
                          ? "bg-slate-900 text-white shadow-md shadow-slate-950/15 ring-4 ring-slate-100" 
                          : "bg-white text-slate-400 border border-slate-200"
                    }`}>
                      {step > i + 1 ? <CheckCircle2 size={16} /> : i + 1}
                    </div>
                    <span className={`text-[10px] font-semibold hidden sm:block ${step === i + 1 ? "text-slate-900" : "text-slate-400"}`}>
                      {label}
                    </span>
                  </div>
                  {i < 3 && (
                    <div className="flex-1 mx-2 h-0.5 relative bg-slate-200 rounded">
                      <div className="absolute top-0 left-0 h-full bg-emerald-500 transition-all duration-500 rounded" style={{ width: step > i + 1 ? "100%" : "0%" }} />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Form Headers */}
            <div className="mb-6">
              <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Partner Profile Onboarding</h2>
              <p className="text-slate-500 text-sm mt-1 font-medium">
                {step === 1 && "Submit corporate and representative metrics to verify configuration details."}
                {step === 2 && `Enter security key dispatched via system nodes to ${masked}`}
                {step === 3 && `Enter final mobile device authentication code sent to ${masked}`}
                {step === 4 && "Submission captured successfully."}
              </p>
            </div>

            {/* Error Message Box */}
            {error && (
              <div className="bg-rose-50 border border-rose-100 text-rose-600 text-sm px-4 py-3 rounded-xl mb-5 flex items-center gap-2 animate-fade-in">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0" />
                <p className="font-medium">{error}</p>
              </div>
            )}

            {/* Step 1: Extended Business Information Form */}
            {step === 1 && (
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); sendEmailOtp(); }}>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-600">Company Name *</label>
                    <div className="relative group">
                      <Building2 size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-slate-800" />
                      <input required name="companyName" value={form.companyName} onChange={handleChange} placeholder="Enterprise LLC" className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-800 focus:outline-none focus:border-slate-800 focus:bg-white focus:ring-4 focus:ring-slate-900/5 transition-all" />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-600">Contact Person *</label>
                    <div className="relative group">
                      <User size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-slate-800" />
                      <input required name="contactPerson" value={form.contactPerson} onChange={handleChange} placeholder="Managing Director" className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-800 focus:outline-none focus:border-slate-800 focus:bg-white focus:ring-4 focus:ring-slate-900/5 transition-all" />
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-600">Business Email *</label>
                    <div className="relative group">
                      <Mail size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-slate-800" />
                      <input required name="email" type="email" value={form.email} onChange={handleChange} placeholder="info@firm.com" className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-800 focus:outline-none focus:border-slate-800 focus:bg-white focus:ring-4 focus:ring-slate-900/5 transition-all" />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-600">Contact Phone *</label>
                    <div className="relative group">
                      <Phone size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-slate-800" />
                      <input required name="phone" value={form.phone} onChange={handleChange} placeholder="9876543210" maxLength="10" className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-800 focus:outline-none focus:border-slate-800 focus:bg-white focus:ring-4 focus:ring-slate-900/5 transition-all" />
                    </div>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-600">Secure Account Password *</label>
                  <div className="relative group">
                    <Lock size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-slate-800" />
                    <input required name="password" type="password" value={form.password} onChange={handleChange} placeholder="••••••••" className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-800 focus:outline-none focus:border-slate-800 focus:bg-white focus:ring-4 focus:ring-slate-900/5 transition-all" />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-600">Corporate Model Structure</label>
                  <select name="businessType" value={form.businessType} onChange={handleChange} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-800 focus:outline-none focus:border-slate-800 focus:bg-white focus:ring-4 focus:ring-slate-900/5 transition-all font-medium text-sm">
                    <option value="DSA">Direct Selling Agent (DSA)</option>
                    <option value="NBFC">Non-Banking Financial Company (NBFC)</option>
                    <option value="Bank">Banking Institution</option>
                    <option value="Individual Agent">Individual Agent Network</option>
                    <option value="Fintech">Fintech Native Developer</option>
                    <option value="Other">Other Ancillary</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-600">GST Identification Number</label>
                    <input name="gstNumber" value={form.gstNumber} onChange={handleChange} placeholder="22AAAAA0000A1Z5" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-800 focus:outline-none focus:border-slate-800 focus:bg-white focus:ring-4 focus:ring-slate-900/5 transition-all uppercase text-sm" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-600">Corporate PAN Number</label>
                    <input name="panNumber" value={form.panNumber} onChange={handleChange} placeholder="ABCD1234E" maxLength="10" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-800 focus:outline-none focus:border-slate-800 focus:bg-white focus:ring-4 focus:ring-slate-900/5 transition-all uppercase text-sm" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-600">Operation City</label>
                    <input name="city" value={form.city} onChange={handleChange} placeholder="Mumbai" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-800 focus:outline-none focus:border-slate-800 focus:bg-white focus:ring-4 focus:ring-slate-900/5 transition-all text-sm" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-600">Operation State</label>
                    <input name="state" value={form.state} onChange={handleChange} placeholder="Maharashtra" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-800 focus:outline-none focus:border-slate-800 focus:bg-white focus:ring-4 focus:ring-slate-900/5 transition-all text-sm" />
                  </div>
                </div>

                <button type="submit" disabled={loading} className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white py-3 px-4 rounded-xl font-semibold hover:bg-slate-800 active:scale-[0.99] transition-all disabled:opacity-40 mt-2">
                  {loading ? <Loader2 size={20} className="animate-spin" /> : <><span>Dispatch Registration Key</span> <ArrowRight size={18} className="text-amber-400" /></>}
                </button>
              </form>
            )}

            {/* Step 2 & 3: Modular OTP Verification Modules */}
            {(step === 2 || step === 3) && (
              <div className="space-y-5 animate-fade-in">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-500 block text-center mb-1">Enter Authenticator Credentials</label>
                  <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} maxLength="6" placeholder="000000" className="w-full text-center text-3xl font-bold tracking-[0.75em] pl-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:outline-none focus:border-slate-800 focus:bg-white focus:ring-4 focus:ring-slate-900/5 transition-all" />
                </div>
                
                <button onClick={step === 2 ? verifyEmailOtp : verifyPhoneAndRegister} disabled={loading || otp.length < 4} className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white py-3.5 rounded-xl font-semibold hover:bg-slate-800 transition-all disabled:opacity-40">
                  {loading ? <Loader2 size={20} className="animate-spin" /> : "Verify Identity Frame"}
                </button>
                
                <button onClick={() => setStep(1)} className="w-full flex items-center justify-center gap-1 text-sm text-slate-500 font-medium hover:text-slate-800 transition-colors py-1">
                  <ChevronLeft size={16} /> Modulate core form settings
                </button>
              </div>
            )}

            {/* Step 4: Success Review Frame */}
            {step === 4 && (
              <div className="text-center py-10 px-4 bg-amber-50/40 rounded-2xl border border-amber-100 animate-fade-in">
                <div className="h-14 w-14 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 text-amber-700">
                  <CheckCircle2 size={32} className="animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Application Submitted</h3>
                <p className="text-slate-500 mt-2 text-sm font-medium max-w-xs mx-auto leading-relaxed">
                  Your pipeline entry is safely registered and pending compliance node audit. You will receive notification parameters upon clearance.
                </p>
                <button onClick={() => navigate("/partner-login")} className="mt-6 inline-flex items-center gap-2 bg-slate-900 text-white font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-slate-800 transition-all">
                  <span>Proceed to Login</span>
                  <ArrowRight size={16} className="text-amber-400" />
                </button>
              </div>
            )}

          </div>
        </div>
      </div>
    </>
  );
};

export default PartnerRegisteration;