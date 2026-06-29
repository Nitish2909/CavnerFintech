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
  Briefcase 
} from "lucide-react";

// Navigation configuration with nested submenus and icons matching your image
const navItems = [
  { label: "Credit Card", href: "/credit-card", hasMenu:true },
  { label: "Apply Loan", href: "/loans" },
  { label: "Investment Plan", href: "/investment" },
  { 
    label: "Corporate Finance", 
    href: "/corporate", 
    subMenu: [
      { label: "BUILDER / REAL ESTATE FINANCE", href: "/corporate/builder", icon: Home },
      { label: "FUNDING AGAINST SHARES", href: "/corporate/shares", icon: TrendingUp },
      { label: "NCD & STRUCTURED DEBT", href: "/corporate/ncd", icon: Building },
      { label: "SOLAR / RENEWABLE ENERGY FUNDING", href: "/corporate/solar", icon: Sun },
      { label: "NBFC / CORPORATE FUNDING", href: "/corporate/nbfc", icon: Building },
      { label: "PROJECT / CAPEX FINANCE", href: "/corporate/capex", icon: Briefcase },
    ]
  },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  const toggleSubMenu = (label) => {
    setActiveSubMenu(activeSubMenu === label ? null : label);
  };

  return (
    <header className="w-full bg-gray-800 text-white sticky top-0 z-50">
      {/* Top Bar */}
      <div className="border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between gap-4">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="bg-pink-600 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center text-lg">
              ₹
            </div>
            <h1 className="text-2xl font-extrabold text-green-500  tracking-wide">CavnerFintech</h1>
          </Link>

          {/* Search Bar */}
          <div className="hidden sm:flex items-center gap-2 bg-gray-700 px-3 py-1.5 rounded-md md:w-64">
            <Search size={16} className="text-gray-400" />
            <input
              type="search"
              placeholder="What you're looking for?"
              className="bg-transparent border-none outline-none text-sm placeholder-gray-400 w-full focus:ring-0"
            />
          </div>

          {/* Right Utility Navigation */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold tracking-wider text-gray-300">
            <Link to="/cibil" className="hover:text-pink-500 transition-colors ">CHECK CIBIL SCORE</Link>
            <Link to="/emi" className="hover:text-pink-500 transition-colors">EMI CALCULATOR</Link>
            <Link to="/login" className="hover:text-pink-500 transition-colors">LOGIN</Link>
            <Link to="/partner-login" className="hover:text-pink-500 transition-colors">PARTNER LOGIN</Link>
          </nav>

          {/* Contact Pill & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a 
              href="tel:9971749994" 
              className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-3 py-1.5 rounded-full text-xs font-medium transition-colors whitespace-nowrap"
            >
              <span className="text-pink-500"><Phone size={14} /></span>
              <span>9971749994</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-1 text-gray-300 hover:text-white transition-colors focus:outline-none"
              onClick={() => setOpen((prev) => !prev)}
              aria-label="Toggle Menu"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </div>

      {/* Sub Navigation Bar - Desktop Grid with Dropdown Layer */}
      <div className="hidden lg:block bg-gray-900 border-b border-gray-800 text-sm">
        <div className="max-w-7xl mx-auto px-6 h-12 flex items-center justify-between">
          <nav className="flex items-center gap-6 h-full">
            {navItems.map((item) => (
              <div key={item.label} className="relative group h-full flex items-center">
                <Link 
                  to={item.href}
                  className="flex items-center gap-1 text-gray-300 group-hover:text-cyan-600 font-medium py-2 transition-colors uppercase tracking-wide text-xs"
                >
                  {item.label}
                  {item.subMenu && (
                    <>
                      <ChevronDown size={14} className="block group-hover:hidden text-gray-500" />
                      <ChevronUp size={14} className="hidden group-hover:block text-cyan-600" />
                    </>
                  )}
                </Link>

                {/* Dropdown Layout Box */}
                {item.subMenu && (
                  <div className="absolute top-full left-0 hidden group-hover:block min-w-[340px] bg-white border border-gray-200 rounded-b-md shadow-xl z-50 overflow-hidden">
                    <div className="flex flex-col">
                      {item.subMenu.map((sub, index) => {
                        const IconComponent = sub.icon;
                        return (
                          <Link
                            key={index}
                            to={sub.href}
                            className="flex items-center gap-3 px-4 py-3 text-[11px] font-bold text-cyan-900 hover:bg-cyan-50 border-b border-gray-100 last:border-none transition-colors tracking-wider"
                          >
                            {IconComponent && <IconComponent size={15} className="text-cyan-800 shrink-0" />}
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

          <nav className="flex items-center gap-6 text-gray-400 text-xs font-medium">
            <Link to="/partner" className="hover:text-white transition-colors text-lg">Become a Partner</Link>
            <Link to="/contact" className="hover:text-white transition-colors text-lg">Contact Us</Link>
          </nav>
        </div>
      </div>

      {/* Mobile Drawer Menu Layer */}
      {open && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-gray-900 border-b border-gray-700 shadow-xl z-50 transition-all">
          <nav className="flex flex-col p-4 space-y-3 text-sm font-medium text-gray-300">
            
            <div className="flex sm:hidden items-center gap-2 bg-gray-800 px-3 py-2 rounded-md mb-2">
              <Search size={16} className="text-gray-400" />
              <input
                type="search"
                placeholder="Search..."
                className="bg-transparent border-none outline-none text-sm placeholder-gray-400 w-full focus:ring-0"
              />
            </div>

            {navItems.map((item) => (
              <div key={item.label} className="flex flex-col border-b border-gray-800 pb-1">
                <div className="flex items-center justify-between py-1">
                  <Link
                    to={item.href}
                    className="hover:text-pink-500 transition-colors flex-grow"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.subMenu && (
                    <button onClick={() => toggleSubMenu(item.label)} className="p-1 text-gray-400 focus:outline-none">
                      {activeSubMenu === item.label ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                  )}
                </div>

                {/* Mobile Open Collapsible Options */}
                {item.subMenu && activeSubMenu === item.label && (
                  <div className="pl-4 mt-1 bg-gray-950 rounded flex flex-col space-y-2 py-2">
                    {item.subMenu.map((sub, index) => (
                      <Link
                        key={index}
                        to={sub.href}
                        className="text-xs text-gray-400 hover:text-white py-1 transition-colors"
                        onClick={() => setOpen(false)}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Utility Targets */}
            <Link to="/cibil" className="hover:text-pink-500 transition-colors py-1" onClick={() => setOpen(false)}>Check CIBIL Score</Link>
            <Link to="/emi" className="hover:text-pink-500 transition-colors py-1" onClick={() => setOpen(false)}>EMI Calculator</Link>
            <Link to="/login" className="hover:text-pink-500 transition-colors py-1" onClick={() => setOpen(false)}>Login</Link>
            <Link to="/partner-login" className="hover:text-pink-500 transition-colors py-1" onClick={() => setOpen(false)}>Partner Login</Link>
            <Link to="/partner" className="hover:text-pink-500 transition-colors py-1" onClick={() => setOpen(false)}>Become a Partner</Link>
            <Link to="/contact" className="hover:text-pink-500 transition-colors py-1" onClick={() => setOpen(false)}>Contact Us</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;