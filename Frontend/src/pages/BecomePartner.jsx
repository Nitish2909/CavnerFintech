// import React, { useState } from "react";
// import { User, Mail, Phone, ArrowRight, Handshake } from "lucide-react";

// const BecomePartner = () => {
//   const [fullname, setFullName] = useState("");
//   const [middlename, setMiddleName] = useState("");
//   const [lastname, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [mobilenumber, setMobileNumber] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log({ fullname, middlename, lastname, email, mobilenumber });
//   };

//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-12 min-h-screen bg-slate-50 font-sans selection:bg-amber-500 selection:text-slate-950">
      
//       {/* Left Column - Premium Hero Visual */}
//       <div className="lg:col-span-5 relative flex flex-col justify-between bg-emerald-950 text-white p-8 md:p-12 overflow-hidden">
//         {/* Background Decorative Pattern */}
//         <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px]" />
//         <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl" />
        
//         {/* Top Branding/Icon */}
//         <div className="relative z-10 flex items-center gap-2 text-amber-400 font-semibold tracking-wider text-sm uppercase">
//           <Handshake className="w-5 h-5" />
//           <span>Ecosystem Growth</span>
//         </div>

//         {/* Main Header text */}
//         <div className="relative z-10 my-auto py-12">
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-none text-white">
//             APPLY TO BE A <br />
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
//               STRATEGIC PARTNER
//             </span>
//           </h1>
//           <p className="text-emerald-200/70 text-sm md:text-base mt-6 max-w-md leading-relaxed">
//             Join our unified distribution network. Gain instant access to tier-1 infrastructure assets, co-marketing pipelines, and shared scale frameworks.
//           </p>
//         </div>

//         {/* Bottom Footer Hint */}
//         <div className="relative z-10 text-xs text-emerald-300/50">
//           © 2026 Alliance Platform Core. All rights encrypted.
//         </div>
//       </div>

//       {/* Right Column - Clean Interactive Form Workspace */}
//       <div className="lg:col-span-7 flex flex-col items-center justify-center p-8 md:p-16 bg-white">
//         <div className="w-full max-w-xl">
          
//           {/* Header & Step Tracker */}
//           <div className="mb-8">
//             <span className="text-[10px] font-bold tracking-widest text-amber-600 uppercase bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-md inline-block mb-3">
//               Step 1 of 2: Core Identity
//             </span>
//             <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
//               Create Partner Profile
//             </h2>
//             <p className="text-xs text-slate-400 mt-1">
//               Please input your official corporate credentials matching your legal operational filings.
//             </p>
//           </div>

//           <form onSubmit={handleSubmit} className="space-y-5">
            
//             {/* Grid Layout for Names */}
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//               <div className="flex flex-col gap-1.5">
//                 <label className="text-xs font-bold text-slate-700 tracking-wide">First Name</label>
//                 <div className="relative">
//                   <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
//                   <input
//                     type="text"
//                     required
//                     name="fullname"
//                     value={fullname}
//                     onChange={(e) => setFullName(e.target.value)}
//                     placeholder="John"
//                     className="w-full pl-9 pr-4 py-2.5 text-sm bg-slate-50/50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 transition-all placeholder:text-slate-400 text-slate-800 font-medium"
//                   />
//                 </div>
//               </div>

//               <div className="flex flex-col gap-1.5">
//                 <label className="text-xs font-bold text-slate-700 tracking-wide">Middle Name</label>
//                 <input
//                   type="text"
//                   name="middlename"
//                   value={middlename}
//                   onChange={(e) => setMiddleName(e.target.value)}
//                   placeholder="Optional"
//                   className="w-full px-4 py-2.5 text-sm bg-slate-50/50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 transition-all placeholder:text-slate-400 text-slate-800 font-medium"
//                 />
//               </div>

//               <div className="flex flex-col gap-1.5">
//                 <label className="text-xs font-bold text-slate-700 tracking-wide">Last Name</label>
//                 <input
//                   type="text"
//                   required
//                   name="lastname"
//                   value={lastname}
//                   onChange={(e) => setLastName(e.target.value)}
//                   placeholder="Doe"
//                   className="w-full px-4 py-2.5 text-sm bg-slate-50/50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 transition-all placeholder:text-slate-400 text-slate-800 font-medium"
//                 />
//               </div>
//             </div>

//             {/* Email Input */}
//             <div className="flex flex-col gap-1.5">
//               <label className="text-xs font-bold text-slate-700 tracking-wide">Business Email Address</label>
//               <div className="relative">
//                 <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
//                 <input
//                   type="email"
//                   required
//                   name="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="john@company.com"
//                   className="w-full pl-9 pr-4 py-2.5 text-sm bg-slate-50/50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 transition-all placeholder:text-slate-400 text-slate-800 font-medium"
//                 />
//               </div>
//             </div>

//             {/* Mobile Number Input */}
//             <div className="flex flex-col gap-1.5">
//               <label className="text-xs font-bold text-slate-700 tracking-wide">Direct Mobile Vector</label>
//               <div className="relative">
//                 <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
//                 <input
//                   type="tel"
//                   required
//                   name="mobilenumber"
//                   value={mobilenumber}
//                   onChange={(e) => setMobileNumber(e.target.value)}
//                   placeholder="+1 (555) 000-0000"
//                   className="w-full pl-9 pr-4 py-2.5 text-sm bg-slate-50/50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 transition-all placeholder:text-slate-400 text-slate-800 font-medium"
//                 />
//               </div>
//             </div>

//             {/* Action Submit Area */}
//             <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
//               <span className="text-xs font-medium text-slate-400">
//                 All transmissions routed via TLS 1.3
//               </span>
//               <button
//                 type="submit"
//                 className="group flex items-center gap-2 rounded-xl bg-slate-950 px-6 py-3 text-white text-xs font-bold hover:bg-slate-900 transition-all shadow-md shadow-slate-950/10 active:scale-[0.98]"
//               >
//                 <span>Continue Setup</span>
//                 <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
//               </button>
//             </div>

//           </form>
//         </div>
//       </div>

//     </div>
//   );
// };

// export default BecomePartner;


import { Link } from "react-router-dom";
import { ArrowRight, IndianRupee, Users, TrendingUp, ShieldCheck, Award } from "lucide-react";
import Seo from "../components/Seo";

const BecomePartner = () => {
  const benefits = [
    { icon: IndianRupee, title: "Attractive Commissions", desc: "Earn up to 2% commission on every successful loan disbursal." },
    { icon: TrendingUp, title: "Grow Your Business", desc: "Access 40+ bank products to offer your customers the best deals." },
    { icon: Users, title: "Dedicated Support", desc: "Get a relationship manager and 24/7 partner support." },
    { icon: ShieldCheck, title: "Trusted Platform", desc: "RBI-compliant processes and secure technology infrastructure." },
  ];

  return (
    <>
      <Seo title="Become a Partner" description="Join Cavner Fintech as a channel partner - DSA, NBFC, or agent. Earn commissions on loan and credit card referrals." path="/partner" keywords="become partner, DSA, NBFC partner, loan agent, fintech partner" />
      <section className="bg-gradient-to-br from-slate-800 to-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="inline-block px-3 py-1 bg-brand-500/30 text-brand-100 text-sm rounded-full mb-4">Partner Program</span>
          <h1 className="text-4xl font-bold mb-3">Grow Your Business with Cavner</h1>
          <p className="text-slate-300 max-w-xl mx-auto mb-8">Join 1000+ partners earning attractive commissions by offering loans and credit cards to their customers.</p>
          <Link to="/partnersregisteration" className="inline-flex items-center gap-2 px-6 py-3 bg-brand-600 text-white bg-green-800 font-semibold rounded-lg hover:bg-brand-700">
            Register as Partner <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b) => {
            const Icon = b.icon;
            return (
              <div key={b.title} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm text-center">
                <div className="w-14 h-14 rounded-2xl bg-brand-100 flex items-center justify-center mx-auto mb-4">
                  <Icon size={26} className="text-brand-700" />
                </div>
                <h3 className="font-bold text-slate-800 mb-2">{b.title}</h3>
                <p className="text-sm text-slate-500">{b.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-12">
        <div className="bg-brand-50 rounded-2xl p-8 text-center">
          <Award size={40} className="text-brand-700 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Ready to Get Started?</h2>
          <p className="text-slate-600 mb-6">Registration takes 5 minutes. Get approved within 48 hours.</p>
          <Link to="/partnersregisteration" className="inline-flex items-center gap-2 px-6 py-3 bg-brand-700 text-white font-semibold rounded-lg hover:bg-brand-800">
            Register Now <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
};

export default BecomePartner;
