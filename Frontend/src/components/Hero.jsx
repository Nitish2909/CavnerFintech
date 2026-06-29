// import {
//   ArrowRight,
//   ShieldCheck,
//   Clock,
//   Percent,
//   CheckCircle2,
// } from "lucide-react";

// const quickPills = [
//   { label: "Business Loan", color: "#f7941d" }, // mapping var(--orange)
//   { label: "Personal Loan", color: "#2bb673" }, // mapping var(--green)
//   { label: "Home Loan", color: "#3b82f6" }, // mapping var(--blue)
//   { label: "Education Loan", color: "#f5b400" }, // mapping var(--yellow)
// ];

// export default function Hero() {
//   return (
//     <section className="relative overflow-hidden bg-[radial-gradient(circle_at_20%_20%,rgba(247,148,29,0.12),transparent_50%),radial-gradient(circle_at_80%_30%,rgba(59,130,246,0.10),transparent_50%),linear-gradient(180deg,#f6f9fc,#fdfcf9)]">
//       {/* Hero background dots pattern */}
//       <div
//         className="absolute inset-0 opacity-40 pointer-events-none"
//         style={{
//           backgroundImage:
//             "radial-gradient(rgba(14,42,53,0.08) 1px, transparent 1px)",
//           backgroundSize: "24px 24px",
//         }}
//       />

//       <div className="relative w-full max-w-[1280px] mx-auto px-4 md:px-8 py-16 lg:py-24 grid gap-12 items-center lg:grid-template-cols lg:grid-cols-2">
//         <div>
//           <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#e8e6e0] text-[11.2px] font-bold tracking-widest uppercase text-[#f7941d]">
//             <span className="w-2 height h-2 rounded-full bg-[#f7941d] animate-pulse" />
//             Explore Multiple Loan Options Instantly
//           </div>

//           <h1 className="text-[clamp(2.25rem,5vw,3.75rem)] tracking-tight font-bold leading-[1.1] mt-5 text-[#0e2a35]">
//             Smart Financial Solutions
//             <br />
//             <span className="bg-gradient-to-r from-[#f7941d] to-[#e63946] bg-clip-text text-transparent">
//               That Match Your Goals
//             </span>
//           </h1>
//           <p className="mt-5 text-[#6b7b82] text-[1.1rem] max-w-xl leading-[1.5]">
//             Fintech brings instant loans, transparent comparisons across 300+
//             banks & NBFCs, and a seamless digital application — all in one
//             place.
//           </p>
//           <div className="mt-7 flex flex-wrap gap-3">
//             <a
//               href="#loans"
//               className="inline-flex items-center gap-2 h-12 px-6 rounded-full font-semibold transition-all bg-[#f7941d] text-white shadow-[0_12px_40px_-10px_rgba(14,42,53,0.18)] hover:brightness-105 hover:-translate-y-[1px]"
//             >
//               Apply for Loan <ArrowRight size={16} />
//             </a>
//             <a
//               href="#emi"
//               className="inline-flex items-center gap-2 h-12 px-6 rounded-full font-semibold transition-all bg-white text-[#0e2a35] border border-[#e8e6e0] hover:border-[#f7941d]"
//             >
//               Check EMI
//             </a>
//           </div>
//           <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
//             <Stat icon={Clock} value="2 hrs" label="Quick Approval" />
//             <Stat icon={Percent} value="8.99%" label="Low Interest" />
//             <Stat icon={ShieldCheck} value="300+" label="Trusted Lenders" />
//           </div>
//         </div>
//         <div className="relative">
//           {/* Hero visual card wrapper */}
//           <div className="relative rounded-[22px] bg-white border border-[#e8e6e0] p-6 shadow-[0_12px_40px_-10px_rgba(14,42,53,0.18)]">
//             <div className="rounded-[18px] p-6 text-white bg-gradient-to-br from-[#0e2a35] to-[#1a3a48]">
//               <p className="text-[11.2px] tracking-[0.12em] uppercase text-white/60">
//                 Quick Apply
//               </p>
//               <h3 className="text-[1.75rem] font-bold tracking-tight leading-[1.1] mt-1">
//                 Instant Loan
//               </h3>
//               <p className="text-[0.875rem] text-white/75 mt-2 leading-[1.5]">
//                 Get pre-approved offers in minutes with minimal paperwork.
//               </p>
//               <div className="mt-5 flex flex-wrap gap-2">
//                 {["Quick Approval", "Low Interest", "Simple Documents"].map(
//                   (t) => (
//                     <span
//                       className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/12 text-[0.75rem]"
//                       key={t}
//                     >
//                       <CheckCircle2 size={12} className="text-[#f7941d]" /> {t}
//                     </span>
//                   ),
//                 )}
//               </div>
//             </div>

//             <div className="mt-4 grid grid-cols-2 gap-3">
//               {quickPills.map((p) => (
//                 <div
//                   className="flex items-center gap-3 p-3 rounded-f rounded-[12px] border border-[#e8e6e0] bg-[#fdfcf9] transition-colors hover:border-[#f7941d]"
//                   key={p.label}
//                 >
//                   <span
//                     className="w-9 h-9 rounded-[10px] shrink-0"
//                     style={{ background: p.color, opacity: 0.85 }}
//                   />
//                   <div>
//                     <div className="text-[11.2px] text-[#6b7b82]">
//                       Get up to
//                     </div>
//                     <div className="text-[0.875rem] font-semibold">
//                       {p.label}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Floater top right */}
//           <div className="absolute -top-4 -right-2 p-3 px-4 bg-white border border-[#e8e6e0] rounded-[16px] shadow-[0_12px_40px_-10px_rgba(14,42,53,0.18)] flex items-center gap-3">
//             <div className="w-10 h-10 rounded-full grid place-items-center bg-[rgba(43,182,115,0.15)] text-[#2bb673]">
//               <CheckCircle2 size={20} />
//             </div>
//             <div>
//               <div className="text-[11.2px] text-[#6b7b82]">Approval Rate</div>
//               <div className="font-bold">98.4%</div>
//             </div>
//           </div>

//           {/* Floater bottom left */}
//           <div className="absolute -bottom-4 -left-2 p-3 px-4 bg-white border border-[#e8e6e0] rounded-[16px] shadow-[0_12px_40px_-10px_rgba(14,42,53,0.18)] flex items-center gap-3">
//             <div className="w-10 h-10 rounded-full grid place-items-center bg-[rgba(247,148,29,0.15)] text-[#f7941d] font-extrabold">
//               ₹
//             </div>
//             <div>
//               <div className="text-[11.2px] text-[#6b7b82]">Disbursed</div>
//               <div className="font-bold">₹ 1,200 Cr+</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function Stat({ icon: Icon, value, label }) {
//   return (
//     <div className="flex flex-col">
//       <div className="w-9 h-9 rounded-[10px] bg-[rgba(14,42,53,0.08)] text-[#0e2a35] grid place-items-center mb-2">
//         <Icon size={16} />
//       </div>
//       <div className="text-[1.25rem] font-bold">{value}</div>
//       <div className="text-[0.75rem] text-[#6b7b82]">{label}</div>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  ShieldCheck,
  Clock,
  Percent,
} from "lucide-react";

// Content exactly mapped to your screenshots layout
const HERO_SLIDES = [
  {
   mainText: "Apply Home Loan Online with",
  brandHighlight: "Cavner Wealth & Fintech",
  subText: "Fast Approval & Low Interest Rates",
  illustration: (
    <div className="relative w-full h-full min-h-[160px] md:min-h-full overflow-hidden bg-slate-50 flex items-center justify-center">
      <img 
        src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tZSUyMGxvYW5zfGVufDB8fDB8fHww" 
        alt="Apply For Home Loan" 
        className="w-full h-full object-cover object-top md:object-center"
        loading="lazy"
      />
      {/* Micro-Overlay to keep colors matching cleanly with white background sections */}
      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white/10" />
    </div>
  )
},
  {
   mainText: "Apply Personal Loan Online with",
  brandHighlight: "Cavner Wealth & Fintech",
  subText: "Fast Approval & Low Interest Rates",
  illustration: (
    <div className="relative w-full h-full min-h-[160px] md:min-h-full overflow-hidden bg-slate-50 flex items-center justify-center">
      <img 
        src="https://media.istockphoto.com/id/1195331254/photo/personal-loan-application-isolated-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=jK3LirtoxynhMdIRHLXKmwbqWKbNynGocsJkSMyHeTI=" 
        alt="Apply For Personal Loan" 
        className="w-full h-full object-cover object-top md:object-center"
        loading="lazy"
      />
      {/* Micro-Overlay to keep colors matching cleanly with white background sections */}
      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white/10" />
    </div>
  )
},
  {
    
    mainText: "Smart Financial Solutions That Match Your Goals",
    brandHighlight: "Cavner Wealth and Fintech Brings Financial Solutions",
    subText: "Compare 300+ Verified Lenders Instantly",
    illustration: (
      <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100/40 p-4">
        <div className="flex flex-col gap-2 w-full max-w-[200px]">
          {["Health Loan", "Home Loan", "Vehicle Loan", "Personal Loan"].map((loan, idx) => (
            <div key={idx} className="bg-white px-3 py-1.5 rounded-lg shadow-sm border border-slate-100 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#f7941d]" />
              <span className="text-xs font-semibold text-slate-600">{loan}</span>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
  mainText: "Trusted by Thousands",
  brandHighlight: "for Their Financial Needs",
  subText: "10,000+ Happy Customers",
  illustration: (
    <div className="relative w-full h-full min-h-[160px] md:min-h-full overflow-hidden bg-slate-50 flex items-center justify-center">
      <img 
        src="https://media.istockphoto.com/id/1958309457/photo/happy-family-with-child-sitting-among-moving-boxes-and-using-laptop.webp?a=1&b=1&s=612x612&w=0&k=20&c=E3lJJ36YdlUb7MwlRdQYpo4o1FM-8IjkcEZlJL_P6mg=" 
        alt="Happy family using laptop among moving boxes" 
        className="w-full h-full object-cover object-top md:object-center"
        loading="lazy"
      />
      {/* Micro-Overlay to keep colors matching cleanly with white background sections */}
      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white/10" />
    </div>
  )
}
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#fafafa]">
      {/* Background Micro Dot Mesh */}
      <div
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(14,42,53,0.08) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* STAGE 1: DYNAMIC BANNER CONTAINER (EXACT STRUCTURE) */}
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-8 pt-6">
        <div className="relative w-full min-h-[320px] md:min-h-[400px] rounded-2xl overflow-hidden bg-white border border-slate-200/70 shadow-sm grid grid-cols-1 md:grid-cols-12">
          
          {HERO_SLIDES.map((slide, index) => (
            <React.Fragment key={index}>
              {/* LEFT TEXT BOX PANEL (8 Columns wide) */}
              <div 
                className={`absolute inset-y-0 left-0 col-span-1 md:col-span-8 flex flex-col justify-center px-6 md:px-12 transition-all duration-700 ease-in-out ${
                  index === activeSlide ? "opacity-100 translate-x-0 z-10" : "opacity-0 -translate-x-4 pointer-events-none"
                }`}
              >
                <h2 className="text-2xl sm:text-3xl md:text-[36px] font-black tracking-tight text-[#0f3742] leading-[1.2]">
                  {slide.mainText}
                  <span className="text-[#f7941d] block mt-1 font-black">
                    {slide.brandHighlight}
                  </span>
                </h2>
                <p className="text-sm md:text-base text-red-600 font-bold mt-3 tracking-wide">
                  {slide.subText}
                </p>
              </div>

              {/* RIGHT VISUAL GRAPHIC PANEL (4 Columns wide) */}
              <div 
                className={`absolute inset-y-0 right-0 w-full md:w-1/3 col-span-1 md:col-span-4 transition-all duration-700 ease-in-out ${
                  index === activeSlide ? "opacity-100 scale-100 z-10" : "opacity-0 scale-95 pointer-events-none"
                }`}
              >
                {slide.illustration}
              </div>
            </React.Fragment>
          ))}

          {/* Linear Pagination Bar Tickers (Matches bottom elements in screenshots) */}
          <div className="absolute bottom-4 left-6 md:left-12 flex gap-1.5 z-20">
            {HERO_SLIDES.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`h-1 rounded-full transition-all duration-300 ${
                  index === activeSlide ? "bg-[#f7941d] w-6" : "bg-slate-200 w-3 hover:bg-slate-300"
                }`}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* STAGE 2: TYPOGRAPHY LAYOUT UNDER THE INTERACTIVE DISPLAY BANNER */}
      <div className="relative w-full max-w-[1280px] mx-auto px-6 md:px-8 pt-12 pb-16 flex flex-col items-center text-center">

      </div>
    </section>
  );
}

function Stat({ icon: Icon, value, label }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-8 h-8 rounded-lg bg-slate-100 text-[#0e2a35] grid place-items-center mb-1.5 border border-slate-200/40">
        <Icon size={14} />
      </div>
      <div className="text-xs sm:text-sm font-black text-[#0e2a35] tracking-tight leading-none">{value}</div>
      <div className="text-[10px] text-[#6b7b82] mt-1 font-medium">{label}</div>
    </div>
  );
}