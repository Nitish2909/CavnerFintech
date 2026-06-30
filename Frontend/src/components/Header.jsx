// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { Phone, Search, Menu, X, ChevronDown } from "lucide-react";

// const navItems = [
//   { label: "Credit Card", href: "/credit-card", hasMenu: true },
//   { label: "Apply Loan", href: "/loans", hasMenu: true },
//   { label: "Investment Plan", href: "/investment", hasMenu: true },
//   { label: "Corporate Finance", href: "/corporate", hasMenu: true },
// ];

// const Header = () => {
//   const [open, setOpen] = useState(false);

//   return (
//     <header className="w-full bg-gray-800 text-white sticky top-0 z-50">
//       {/* Top Bar */}
//       <div className="border-b border-gray-700">
//         <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between gap-4">

//           {/* Logo */}
//           <Link to="/" className="flex items-center gap-2 shrink-0">
//             <div className="bg-pink-600 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center text-lg">
//               ₹
//             </div>
//             <h1 className="text-xl font-bold text-pink-600 tracking-wide">Fintech</h1>
//           </Link>

//           {/* Search Bar - Hidden on small mobile */}
//           <div className="hidden sm:flex items-center gap-2 bg-gray-700 px-3 py-1.5 rounded-md md:w-64">
//             <Search size={16} className="text-gray-400" />
//             <input
//               type="search"
//               placeholder="What you're looking for?"
//               className="bg-transparent border-none outline-none text-sm placeholder-gray-400 w-full focus:ring-0"
//             />
//           </div>

//           {/* Right utility navigation - Hidden on Mobile */}
//           <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold tracking-wider text-gray-300">
//             <Link to="/cibil" className="hover:text-pink-500 transition-colors">CHECK CIBIL SCORE</Link>
//             <Link to="/emi" className="hover:text-pink-500 transition-colors">EMI CALCULATOR</Link>
//             <Link to="/login" className="hover:text-pink-500 transition-colors">LOGIN</Link>
//             <Link to="/partner-login" className="hover:text-pink-500 transition-colors">PARTNER LOGIN</Link>
//           </nav>

//           {/* Contact Pill & Mobile Toggle Action Group */}
//           <div className="flex items-center gap-4">
//             <a
//               href="tel:9971749994"
//               className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-3 py-1.5 rounded-full text-xs font-medium transition-colors whitespace-nowrap"
//             >
//               <span className="text-pink-500"><Phone size={14} /></span>
//               <span>9971749994</span>
//             </a>

//             {/* Mobile Menu Button */}
//             <button
//               className="lg:hidden p-1 text-gray-300 hover:text-white transition-colors focus:outline-none"
//               onClick={() => setOpen((prev) => !prev)}
//               aria-label="Toggle Menu"
//             >
//               {open ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>

//         </div>
//       </div>

//       {/* Sub Navigation Bar - Hidden on Mobile/Tablets */}
//       <div className="hidden lg:block bg-gray-900 border-b border-gray-800 text-sm">
//         <div className="max-w-7xl mx-auto px-6 h-12 flex items-center justify-between">
//           <nav className="flex items-center gap-6">
//             {navItems.map((item) => (
//               <Link
//                 key={item.label}
//                 to={item.href}
//                 className="flex items-center gap-1 text-gray-300 hover:text-white py-2 transition-colors"
//               >
//                 {item.label}
//                 {item.hasMenu && <ChevronDown size={14} className="text-gray-500" />}
//               </Link>
//             ))}
//           </nav>

//           <nav className="flex items-center gap-6 text-gray-400">
//             <Link to="/partner" className="hover:text-white transition-colors">Become a Partner</Link>
//             <Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link>
//           </nav>
//         </div>
//       </div>

//       {/* Mobile Drawer Menu Layer */}
//       {open && (
//         <div className="lg:hidden absolute top-full left-0 w-full bg-gray-900 border-b border-gray-700 shadow-xl transition-all">
//           <nav className="flex flex-col p-4 space-y-3 text-sm font-medium text-gray-300">
//             {/* Contextual Search inside Mobile layout */}
//             <div className="flex sm:hidden items-center gap-2 bg-gray-800 px-3 py-2 rounded-md mb-2">
//               <Search size={16} className="text-gray-400" />
//               <input
//                 type="search"
//                 placeholder="Search..."
//                 className="bg-transparent border-none outline-none text-sm placeholder-gray-400 w-full focus:ring-0"
//               />
//             </div>

//             {/* Dynamic Core Categories */}
//             {navItems.map((item) => (
//               <Link
//                 key={item.label}
//                 to={item.href}
//                 className="hover:text-pink-500 transition-colors py-1 border-b border-gray-800"
//                 onClick={() => setOpen(false)}
//               >
//                 {item.label}
//               </Link>
//             ))}

//             {/* Utility Targets */}
//             <Link to="/cibil" className="hover:text-pink-500 transition-colors py-1" onClick={() => setOpen(false)}>
//               Check CIBIL Score
//             </Link>
//             <Link to="/emi" className="hover:text-pink-500 transition-colors py-1" onClick={() => setOpen(false)}>
//               EMI Calculator
//             </Link>
//             <Link to="/login" className="hover:text-pink-500 transition-colors py-1" onClick={() => setOpen(false)}>
//               Login
//             </Link>
//             <Link to="/partner-login" className="hover:text-pink-500 transition-colors py-1" onClick={() => setOpen(false)}>
//               Partner Login
//             </Link>
//             <Link to="/partner" className="hover:text-pink-500 transition-colors py-1" onClick={() => setOpen(false)}>
//               Become a Partner
//             </Link>
//             <Link to="/contact" className="hover:text-pink-500 transition-colors py-1" onClick={() => setOpen(false)}>
//               Contact Us
//             </Link>
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Search,
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  Home,
  TrendingUp,
  Building,
  Sun,
  Briefcase,
} from "lucide-react";

const navItems = [
  { label: "Credit Card", href: "/credit-card", hasMenu: true },
  { label: "Apply Loan", href: "/loans" },
  { label: "Investment Plan", href: "/investment" },
  {
    label: "Corporate Finance",
    href: "/corporate",
    subMenu: [
      {
        label: "BUILDER / REAL ESTATE FINANCE",
        href: "/corporate/builder",
        icon: Home,
      },
      {
        label: "FUNDING AGAINST SHARES",
        href: "/corporate/shares",
        icon: TrendingUp,
      },
      {
        label: "NCD & STRUCTURED DEBT",
        href: "/corporate/ncd",
        icon: Building,
      },
      {
        label: "SOLAR / RENEWABLE ENERGY FUNDING",
        href: "/corporate/solar",
        icon: Sun,
      },
      {
        label: "NBFC / CORPORATE FUNDING",
        href: "/corporate/nbfc",
        icon: Building,
      },
      {
        label: "PROJECT / CAPEX FINANCE",
        href: "/corporate/capex",
        icon: Briefcase,
      },
    ],
  },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  const toggleSubMenu = (label) => {
    setActiveSubMenu(activeSubMenu === label ? null : label);
  };

  return (
    <header className="w-full bg-gray-800 text-white sticky top-0 z-50 shadow-md">
      {/* Top Bar */}
      <div className="border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3 shrink-0 group">
            {/* Geometric Logo Icon */}
            <div className="flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 shadow-md shadow-emerald-900/30 transition-transform group-hover:scale-105">
              <span className="text-xs sm:text-sm font-black text-white tracking-tighter">
                CWF
              </span>
            </div>

            {/* Brand Typography */}
            <div className="flex flex-col justify-center leading-none">
              <div className="flex items-baseline">
                <span className="font-black text-emerald-400 text-lg sm:text-xl tracking-tight">
                  Cavner
                </span>
                <span className="font-light text-slate-200 text-lg sm:text-xl tracking-tight ml-1">
                  Wealth
                </span>
              </div>
              <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase mt-0.5 sm:mt-1">
                & Fintech
              </span>
            </div>
          </Link>

          {/* Search Bar - Hidden on Mobile, shows up on tablets & desktops */}
          <div className="hidden md:flex items-center gap-2 bg-gray-700/60 px-3 py-2 rounded-lg max-w-xs xl:max-w-md w-full border border-gray-600/40 focus-within:border-emerald-500/50 transition-all">
            <Search size={16} className="text-gray-400" />
            <input
              type="search"
              placeholder="What are you looking for?"
              className="bg-transparent border-none outline-none text-xs text-slate-100 placeholder-gray-400 w-full focus:ring-0"
            />
          </div>

          {/* Right Utility Navigation - Desktop only */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6 text-[11px] font-bold tracking-wider text-slate-300">
            <Link to="/cibil" className="hover:text-emerald-400 transition-colors whitespace-nowrap">
              CIBIL SCORE
            </Link>
            <Link to="/emi" className="hover:text-emerald-400 transition-colors whitespace-nowrap">
              EMI CALCULATOR
            </Link>
            <Link to="/login" className="hover:text-emerald-400 transition-colors whitespace-nowrap">
              LOGIN
            </Link>
            <Link to="/partner-login" className="hover:text-emerald-400 transition-colors whitespace-nowrap">
              PARTNER LOGIN
            </Link>
          </nav>

          {/* Action Tools: Phone & Mobile Menu Toggle */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Phone Button - Compact on tiny screens, fully detailed on larger targets */}
            <a
              href="tel:9971749994"
              className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-3 py-2 rounded-full text-xs font-semibold transition-all hover:text-emerald-400"
            >
              <Phone size={14} className="text-emerald-400 shrink-0" />
              <span className="hidden sm:inline text-slate-200">9971749994</span>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              className="lg:hidden p-2 text-slate-300 hover:text-white transition-colors focus:outline-none rounded-lg hover:bg-gray-700/50"
              onClick={() => setOpen((prev) => !prev)}
              aria-label="Toggle Menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Sub Navigation Bar - Desktop Only */}
      <div className="hidden lg:block bg-gray-900 border-b border-gray-950 text-xs">
        <div className="max-w-7xl mx-auto px-6 h-12 flex items-center justify-between">
          <nav className="flex items-center gap-6 h-full">
            {navItems.map((item) => (
              <div key={item.label} className="relative group h-full flex items-center">
                <Link
                  to={item.href}
                  className="flex items-center gap-1 text-slate-300 group-hover:text-emerald-400 font-bold py-2 transition-colors uppercase tracking-wider"
                >
                  {item.label}
                  {item.subMenu && (
                    <>
                      <ChevronDown size={12} className="block group-hover:hidden text-slate-500" />
                      <ChevronUp size={12} className="hidden group-hover:block text-emerald-400" />
                    </>
                  )}
                </Link>

                {/* Desktop Dropdown Layer */}
                {item.subMenu && (
                  <div className="absolute top-full left-0 hidden group-hover:block min-w-[320px] bg-white border border-gray-200 rounded-b-xl shadow-xl z-50 overflow-hidden mt-0 animate-fadeIn">
                    <div className="flex flex-col py-1">
                      {item.subMenu.map((sub, index) => {
                        const IconComponent = sub.icon;
                        return (
                          <Link
                            key={index}
                            to={sub.href}
                            className="flex items-center gap-3 px-4 py-3 text-[11px] font-bold text-slate-700 hover:bg-slate-50 hover:text-emerald-600 transition-colors tracking-wide border-b border-slate-100 last:border-none"
                          >
                            {IconComponent && (
                              <IconComponent size={15} className="text-slate-400 shrink-0" />
                            )}
                            <span>{sub.label}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <nav className="flex items-center gap-6 text-slate-400 font-bold uppercase tracking-wider">
            <Link to="/partner" className="hover:text-white transition-colors">
              Become a Partner
            </Link>
            <Link to="/contact" className="hover:text-white transition-colors">
              Contact Us
            </Link>
          </nav>
        </div>
      </div>

      {/* Mobile Drawer Overlay Layer */}
      {open && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-gray-900 border-t border-gray-700 max-h-[calc(100vh-5rem)] overflow-y-auto shadow-2xl z-50">
          <nav className="flex flex-col p-4 space-y-2 text-sm font-semibold text-slate-200">
            
            {/* Search Input on Mobile Devices Only */}
            <div className="flex md:hidden items-center gap-2 bg-gray-800 px-3 py-2.5 rounded-lg mb-2 border border-gray-700">
              <Search size={16} className="text-slate-400" />
              <input
                type="search"
                placeholder="Search..."
                className="bg-transparent border-none outline-none text-sm placeholder-slate-500 w-full focus:ring-0"
              />
            </div>

            {navItems.map((item) => (
              <div key={item.label} className="flex flex-col border-b border-gray-800/60 last:border-none pb-1">
                <div className="flex items-center justify-between py-2">
                  <Link
                    to={item.href}
                    className="hover:text-emerald-400 transition-colors flex-grow uppercase text-xs tracking-wider font-bold"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.subMenu && (
                    <button
                      onClick={() => toggleSubMenu(item.label)}
                      className="p-2 text-slate-400 hover:text-white focus:outline-none rounded-lg hover:bg-gray-800"
                    >
                      {activeSubMenu === item.label ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                  )}
                </div>

                {/* Mobile Collapsible Submenu */}
                {item.subMenu && activeSubMenu === item.label && (
                  <div className="pl-3 mb-2 bg-gray-950/50 rounded-lg flex flex-col space-y-1 py-1.5 border-l-2 border-emerald-500">
                    {item.subMenu.map((sub, index) => (
                      <Link
                        key={index}
                        to={sub.href}
                        className="text-xs text-slate-400 hover:text-emerald-400 py-2 px-2 rounded hover:bg-gray-800/30 transition-colors"
                        onClick={() => setOpen(false)}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Additional Secondary Mobile Menu Items */}
            <div className="pt-2 mt-2 border-t border-gray-800 flex flex-col gap-3 text-xs tracking-wider uppercase text-slate-400">
              <Link to="/cibil" className="hover:text-emerald-400 py-1 transition-colors" onClick={() => setOpen(false)}>Check CIBIL Score</Link>
              <Link to="/emi" className="hover:text-emerald-400 py-1 transition-colors" onClick={() => setOpen(false)}>EMI Calculator</Link>
              <Link to="/login" className="hover:text-emerald-400 py-1 transition-colors" onClick={() => setOpen(false)}>Login</Link>
              <Link to="/partner-login" className="hover:text-emerald-400 py-1 transition-colors" onClick={() => setOpen(false)}>Partner Login</Link>
              <Link to="/partner" className="hover:text-emerald-400 py-1 transition-colors font-bold text-slate-300" onClick={() => setOpen(false)}>Become a Partner</Link>
              <Link to="/contact" className="hover:text-emerald-400 py-1 transition-colors font-bold text-slate-300" onClick={() => setOpen(false)}>Contact Us</Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
