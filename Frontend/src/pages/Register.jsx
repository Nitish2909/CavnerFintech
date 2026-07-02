import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Mail, Phone, Calendar, CreditCard, MapPin, ArrowRight, ShieldCheck, MailIcon, Lock } from "lucide-react";
// import axiosInstance from "./axiosInstance"; 

const Register = () => {
  const navigate = useNavigate();

  const [fullname, setFullname] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [email, setEmail]= useState("");
  const [password, setPassword] = useState("");
  const [dateofbirth, setDateOfBirth] = useState("");
  const [pancard, setPanCard] = useState("");
  const [pincode, setPinCode] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!agreeTerms) {
      alert("Please agree to the Terms of Use and Privacy Policy.");
      return;
    }

    const payload = {
      name:fullname,
      phone:phonenumber,
      email,
      password,
      dob:dateofbirth,
      pannumber:pancard,
      pincode,
    };

    console.log("Submitting form data:", payload);

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/register",{
          method:'POST',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify(payload)
        }
      );
      console.log(response.data);
      alert("Registration Successful!");
    
      setFullname("");
      setPhonenumber("");
      setDateOfBirth("");
      setPanCard("");
      setPinCode("");
      setAgreeTerms(false);
    
      navigate("/login");
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 min-h-screen bg-slate-50 font-sans antialiased selection:bg-indigo-500 selection:text-white">
      
      {/* Left Column: Premium Brand Sidebar */}
      <div className="hidden lg:flex lg:col-span-5 relative flex-col justify-between bg-slate-900 text-white p-12 overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
        
        {/* Upper Badge */}
        <div className="relative z-10 flex items-center gap-2 text-indigo-400 font-semibold tracking-wider text-xs uppercase">
          <ShieldCheck className="w-4 h-4" />
          <span>Secure Identity Verification</span>
        </div>

        {/* Hero Context Block */}
        <div className="relative z-10 my-auto space-y-4">
          <h1 className="text-4xl lg:text-5xl font-black tracking-tight leading-none text-white">
            CREATE YOUR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-300">
              SECURED PROFILE
            </span>
          </h1>
          <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
            Register your core credentials to initialize your unified platform dashboard and securely manage accounts.
          </p>
        </div>

        {/* Trust Badging Footer */}
        <div className="relative z-10 flex items-center gap-2 text-xs text-slate-500 font-medium tracking-wide">
          <ShieldCheck className="w-4 h-4 text-emerald-500" />
          <span>Data Security Architecture Compliant.</span>
        </div>
      </div>

      {/* Right Column: Clean Interactive Form Canvas */}
      <div className="lg:col-span-7 flex flex-col items-center justify-center p-6 md:p-12 bg-white">
        <div className="w-full max-w-lg">
          
          {/* Header Typography Block */}
          <div className="mb-8 text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
              Register Secure Account
            </h2>
            <p className="text-slate-400 text-xs md:text-sm mt-1">
              Please populate the official data inputs below to register your system profile.
            </p>
          </div>

          {/* Registration Input Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Full Legal Name */}
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
                  placeholder="John Doe"
                  className="w-full pl-10 pr-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 transition-all font-medium text-slate-800 placeholder:text-slate-400"
                />
              </div>
            </div>

            {/* Mobile Contact Line */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700">Phone Number</label>
              <div className="relative">
                <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="tel"
                  required
                  name="phonenumber"
                  value={phonenumber}
                  onChange={(e) => setPhonenumber(e.target.value)}
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full pl-10 pr-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 transition-all font-medium text-slate-800 placeholder:text-slate-400"
                />
              </div>
            </div>

             {/* Email Contact Line */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700">Email</label>
              <div className="relative">
                <MailIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  required
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="abc@gmail.com"
                  className="w-full pl-10 pr-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 transition-all font-medium text-slate-800 placeholder:text-slate-400"
                />
              </div>
            </div>

             {/* Password */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700">Password</label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="password"
                  required
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="password"
                  className="w-full pl-10 pr-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 transition-all font-medium text-slate-800 placeholder:text-slate-400"
                />
              </div>
            </div>

            {/* Date of Birth Selection Field */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700">Date of Birth</label>
              <div className="relative">
                <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="date"
                  required
                  name="dateofbirth"
                  value={dateofbirth}
                  onChange={(e) => setDateOfBirth(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 transition-all font-medium text-slate-700"
                />
              </div>
            </div>

            {/* Horizontal Split for PAN Card and Pin Code */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700">PAN Card</label>
                <div className="relative">
                  <CreditCard className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    required
                    name="pancard"
                    value={pancard}
                    onChange={(e) => setPanCard(e.target.value)}
                    placeholder="ABCDE1234F"
                    className="w-full pl-10 pr-4 py-3 text-sm uppercase bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 transition-all font-medium text-slate-800 placeholder:text-slate-400 tracking-wider"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700">Pincode</label>
                <div className="relative">
                  <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    required
                    name="pincode"
                    value={pincode}
                    onChange={(e) => setPinCode(e.target.value)}
                    placeholder="110001"
                    className="w-full pl-10 pr-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 transition-all font-medium text-slate-800 placeholder:text-slate-400"
                  />
                </div>
              </div>
            </div>

            {/* Consent Architecture Box */}
            <div className="flex items-start gap-3 pt-2">
              <input 
                type="checkbox" 
                id="terms"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 transition-all cursor-pointer accent-indigo-600"
              />
              <label htmlFor="terms" className="text-xs text-slate-500 leading-relaxed cursor-pointer select-none">
                By submitting this form, you explicitly acknowledge and agree to the operational <span className="text-indigo-600 font-semibold hover:underline">Terms of Use</span> and comprehensive <span className="text-indigo-600 font-semibold hover:underline">Privacy Policy</span>.
              </label>
            </div>
            {/* Submit Action Execution Button */}
            <button
              type="submit"
              className="group w-full flex items-center justify-center gap-2 h-12 rounded-xl bg-slate-950 text-white text-xs font-bold hover:bg-slate-900 transition-all shadow-md shadow-slate-950/5 active:scale-[0.99] pt-1"
            >
              <span className="text-[15px]">Register</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </form>

          {/* Login Navigation Redirection Anchor */}
          <p className="text-center lg:text-left text-xs text-slate-400 mt-8 font-medium">
            Already registered on our registry?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-indigo-600 hover:text-indigo-700 hover:underline font-bold cursor-pointer transition-colors"
            >
              Login Now
            </span>
          </p>

        </div>
      </div>

    </div>
  );
};

export default Register;