import React from "react";
import { Bell, UserCircle } from "lucide-react";
import logo from "../../public/Cavner-Logo.png";

export default function Navbar() {
  return (
    /* 
      - mt-16 pulls the navbar below the mobile header on small devices, changing to mt-0 on lg screens.
      - px-4 scales beautifully up to px-8 for roomy desktop viewing.
    */
    <header className="h-[64px] mt-16 lg:mt-0 bg-white border-b border-[#f1f2f4] flex items-center justify-between px-4 sm:px-8 select-none w-full">
      {/* Structural Block - Made text scale safely on tiny displays */}
      <div className="flex items-center gap-2.5 py-1.5 shrink-0">
        <img
          src={logo}
          alt="cavner logo"
          className="h-8 w-auto object-contain max-w-full"
        />
      </div>

      {/* Profile & Notifications Blocks */}
      <div className="flex items-center gap-2 sm:gap-4 shrink-0">
        <button className="p-1.5 text-gray-500 hover:bg-gray-50 rounded-lg relative transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
        </button>

        <div className="h-6 w-[1px] bg-gray-200" />

        <div className="flex items-center gap-2">
          <UserCircle className="w-6 h-6 text-gray-600 shrink-0" />
          {/* Hide the text label on very small screens to save valuable viewport space */}
          <span className="hidden xs:inline text-sm font-medium text-gray-700 max-w-[100px] sm:max-w-none truncate">
            Admin Session
          </span>
        </div>
      </div>
    </header>
  );
}
