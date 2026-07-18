import React from "react";
import { Bell, UserCircle } from "lucide-react";
import logo from "../../public/Cavner-Logo.png";

export default function Navbar() {
  return (
    /* 
      - mt-16 pulls the navbar below the mobile header on small devices, changing to mt-0 on lg screens.
      - px-4 scales beautifully up to px-8 for roomy desktop viewing.
    */
    <header className="h-[64px] mt-16 lg:mt-0 bg-white/90 backdrop-blur-md border-b border-slate-200/60 flex items-center justify-between px-4 sm:px-8 select-none w-full sticky top-0 z-50 shadow-sm shadow-slate-100/40">
      {/* Structural Block - Made text scale safely on tiny displays */}
      <div className="flex items-center gap-2.5 py-1.5 shrink-0 transition-transform hover:scale-[1.01]">
        <img
          src={logo}
          alt="cavner logo"
          className="h-16 w-auto object-contain max-w-full dropdown-shadow-xs"
        />
        {/* Company Name */}
        <div className="leading-tight">
          <h1 className="text-xl font-black text-slate-900 tracking-tight transition-colors duration-300 group-hover:text-brand-700">
            Cavner
          </h1>
          <p className="text-xs font-bold text-blue-600 -mt-0.5 tracking-wider uppercase">
            Wealth & FinTech
          </p>
          <span className="text-[10px] uppercase font-semibold text-slate-400 tracking-widest block mt-0.5">
            Services
          </span>
        </div>
      </div>

      {/* Profile & Notifications Blocks */}
      <div className="flex items-center gap-2.5 sm:gap-4 shrink-0">
        <button className="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-50 border border-transparent hover:border-slate-200/60 rounded-xl relative transition-all active:scale-95 cursor-pointer shadow-2xs">
          <Bell className="w-[18px] h-[18px]" />
          <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-rose-500 rounded-full ring-2 ring-white animate-pulse" />
        </button>

        <div className="h-5 w-[1px] bg-slate-200/80" />

        <div className="flex items-center gap-2.5 bg-slate-50/50 border border-slate-100 rounded-xl p-1.5 pr-3 hover:bg-slate-50 transition-colors cursor-pointer group">
          <UserCircle className="w-[22px] h-[22px] text-slate-600 group-hover:text-blue-600 transition-colors shrink-0" />
          {/* Hide the text label on very small screens to save valuable viewport space */}
          <span className="hidden xs:inline text-xs font-bold text-slate-700 group-hover:text-slate-900 tracking-tight max-w-[100px] sm:max-w-none truncate transition-colors">
            Admin Session
          </span>
        </div>
      </div>
    </header>
  );
}
