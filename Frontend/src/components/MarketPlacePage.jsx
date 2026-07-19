import React from 'react';
import { 
  Briefcase, 
  Home, 
  Building, 
  Car, 
  Coins, 
  GraduationCap, 
  CreditCard, 
  User 
} from 'lucide-react';

export default function MarketPlacePage() {
  const products = [
    { text: "Business Loan", icon: Briefcase, color: "border-slate-700 text-slate-800 bg-slate-50/50 hover:bg-slate-100", angle: 0 },
    { text: "Home Loan", icon: Home, color: "border-emerald-500 text-emerald-600 bg-emerald-50/50 hover:bg-emerald-100", angle: 45 },
    { text: "Property Loan", icon: Building, color: "border-teal-600 text-teal-700 bg-teal-50/50 hover:bg-teal-100", angle: 90 },
    { text: "Auto Loan", icon: Car, color: "border-amber-500 text-amber-600 bg-amber-50/50 hover:bg-amber-100", angle: 135 },
    { text: "Mutual Fund Loan", icon: Coins, color: "border-indigo-600 text-indigo-700 bg-indigo-50/50 hover:bg-indigo-100", angle: 180 },
    { text: "Education Loan", icon: GraduationCap, color: "border-sky-500 text-sky-600 bg-sky-50/50 hover:bg-sky-100", angle: 225 },
    { text: "Credit Card", icon: CreditCard, color: "border-rose-500 text-rose-600 bg-rose-50/50 hover:bg-rose-100", angle: 270 },
    { text: "Personal Loan", icon: User, color: "border-violet-600 text-violet-700 bg-violet-50/50 hover:bg-violet-100", angle: 315 },
  ];

  const partners = [
    { name: "TATA CAPITAL", color: "text-blue-600", angle: 0 },
    { name: "HDFC BANK", color: "text-blue-800", angle: 36 },
    { name: "YES BANK", color: "text-sky-600", angle: 72 },
    { name: "IDFC FIRST", color: "text-purple-700", angle: 108 },
    { name: "MAHINDRA", color: "text-red-600", angle: 144 },
    { name: "AXIS BANK", color: "text-rose-700", angle: 180 },
    { name: "ICICI Bank", color: "text-orange-500", angle: 216 },
    { name: "PaySense", color: "text-blue-500", angle: 252 },
    { name: "FAIRCENT", color: "text-emerald-600", angle: 288 },
    { name: "SBI", color: "text-cyan-600", angle: 324 },
  ];

  const radius = 120; 

  return (
    <div className="w-full min-h-screen font-sans select-none overflow-x-hidden bg-[#FAFBFC] text-slate-800">
      
      {/* SECTION 1: One Shop For Market Place */}
      <div className="flex flex-col lg:flex-row min-h-screen w-full relative">
        {/* Left Side: Dynamic Interactive Diagram */}
        <div className="w-full lg:w-1/2 min-h-[40vh] lg:min-h-screen flex items-center justify-center p-8 relative overflow-hidden bg-white">
          {/* Subtle Background Radial Glow */}
          <div className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-amber-100/40 to-teal-100/30 blur-3xl" />
          
          <div className="relative w-96 h-96 flex items-center justify-center scale-90 sm:scale-100">
            {/* Ambient Outer Track Ring */}
            <div className="absolute w-[240px] h-[240px] rounded-full border border-dashed border-slate-200 pointer-events-none" />
            
            {/* Central Hub Card */}
            <div className="absolute w-40 h-40 rounded-full bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] backdrop-blur-sm flex flex-col items-center justify-center border border-slate-100/80 z-20 text-center px-4 transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_50px_rgba(243,139,0,0.15)] group">
              <span className="text-2xl font-black text-slate-800 tracking-tight bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">20+ Banking</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-amber-600 mt-1.5 px-2 py-0.5 bg-amber-50 rounded-full transition-colors group-hover:bg-amber-100">Products</span>
            </div>

            {/* Orbiting Ring */}
            <div className="absolute w-full h-full animate-spin [animation-duration:35s] flex items-center justify-center">
              {products.map((item, index) => {
                const angleRad = (item.angle - 90) * (Math.PI / 180);
                const x = radius * Math.cos(angleRad);
                const y = radius * Math.sin(angleRad);
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="absolute flex flex-col items-center justify-center text-center"
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                      width: '90px',
                    }}
                  >
                    {/* Reverse rotation natively matches speed to keep badges upright */}
                    <div className="animate-spin [animation-duration:35s] [animation-direction:reverse] flex flex-col items-center justify-center transition-transform duration-300 hover:scale-110 cursor-pointer group">
                      <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.03)] group-hover:shadow-[0_12px_24px_rgba(0,0,0,0.08)] transition-all duration-300 ${item.color}`}>
                        <Icon size={22} strokeWidth={2.2} />
                      </div>
                      <span className="text-[10px] font-bold tracking-tight mt-2 text-slate-600 max-w-[85px] bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg shadow-sm border border-slate-100 group-hover:text-slate-900 transition-colors">
                        {item.text}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Side: Text Block */}
        <div className="w-full lg:w-1/2 bg-gradient-to-br from-[#F38B00] via-[#E07A00] to-[#C76B00] flex flex-col items-center justify-center px-8 py-20 lg:py-0 text-center relative shadow-[inset_10px_0_30px_rgba(0,0,0,0.05)] overflow-hidden">
          {/* Geometric Abstract Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
          
          <div className="relative z-10 max-w-lg mx-auto space-y-3">
            <h1 className="text-white text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight uppercase drop-shadow-[0_4px_12px_rgba(0,0,0,0.15)]">
              One Shop For
            </h1>
            <div className="inline-block bg-[#004D4E] px-6 py-3 rounded-2xl transform shadow-lg border border-[#005B5C]/30">
              <h2 className="text-[#00FFFE] text-3xl sm:text-4xl lg:text-6xl font-black tracking-wide uppercase">
                Market Place
              </h2>
            </div>
          </div>
        </div>
      </div>


      {/* SECTION 2: Trusted By 300+ Bank's / NBFCs */}
      <div className="flex flex-col lg:flex-row min-h-screen w-full relative">
        {/* Left Side: Dark Teal Text Block */}
        <div className="w-full lg:w-1/2 bg-gradient-to-tr from-[#042F31] via-[#064244] to-[#0A5659] flex flex-col items-center justify-center px-8 py-20 lg:py-0 text-center relative shadow-[inset_-10px_0_30px_rgba(0,0,0,0.1)] order-2 lg:order-1 overflow-hidden">
          {/* Geometric Abstract Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
          
          <div className="relative z-10 max-w-lg mx-auto space-y-4">
            <h1 className="text-white text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight uppercase drop-shadow-[0_4px_12px_rgba(0,0,0,0.2)]">
              Trusted By
            </h1>
            <p className="text-[#F38B00] text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight uppercase drop-shadow-sm bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              300+ Banks & NBFCs
            </p>
          </div>
        </div>

        {/* Right Side: Animated Partners Diagram */}
        <div className="w-full lg:w-1/2 min-h-[50vh] lg:min-h-screen flex items-center justify-center p-8 relative overflow-hidden order-1 lg:order-2 bg-white">
          {/* Subtle Ambient Glow */}
          <div className="absolute w-[450px] h-[450px] rounded-full bg-gradient-to-bl from-purple-100/30 to-rose-100/20 blur-3xl" />

          <div className="relative w-96 h-96 flex items-center justify-center scale-90 sm:scale-100">
            {/* Ambient Inner Track Ring */}
            <div className="absolute w-[280px] h-[280px] rounded-full border border-dashed border-slate-200 pointer-events-none" />
            
            {/* Central Hub Card */}
            <div className="absolute w-40 h-40 rounded-full bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] backdrop-blur-sm flex flex-col items-center justify-center border border-slate-100/80 z-20 text-center px-4 transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_50px_rgba(219,39,119,0.12)] group">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Choose Best</span>
              <span className="text-xl font-black text-rose-600 my-1 tracking-tight bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">From 300+</span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Options</span>
            </div>

            {/* Orbiting Ring wrapper */}
            <div className="absolute w-full h-full animate-spin [animation-duration:45s] flex items-center justify-center">
              {partners.map((partner, index) => {
                const angleRad = (partner.angle - 90) * (Math.PI / 180);
                const x = (radius + 25) * Math.cos(angleRad); 
                const y = (radius + 25) * Math.sin(angleRad);

                return (
                  <div
                    key={index}
                    className="absolute flex items-center justify-center"
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                    }}
                  >
                    {/* Counter-rotation to keep logo labels horizontal */}
                    <div className="animate-spin [animation-duration:45s] [animation-direction:reverse] flex items-center justify-center transition-all duration-300 hover:scale-115 cursor-pointer group">
                      <div className="w-20 h-10 rounded-xl bg-white border border-slate-100 shadow-[0_4px_10px_rgba(0,0,0,0.04)] group-hover:shadow-[0_12px_20px_rgba(0,0,0,0.08)] group-hover:border-slate-200 transition-all duration-300 flex items-center justify-center p-2 text-center">
                        <span className={`text-[10px] font-extrabold tracking-tight leading-tight uppercase ${partner.color}`}>
                          {partner.name}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}