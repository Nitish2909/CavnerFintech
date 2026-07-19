
// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   Phone,
//   Search,
//   Menu,
//   X,
//   ChevronDown,
//   Home,
//   HandCoins,
//   TrendingUp,
//   Building,
//   Sun,
//   Briefcase,
//   GraduationCap,
//   IndianRupee,
//   BriefcaseBusiness,
//   CreditCard,
//   User,
//   LogOut,
//   LayoutDashboard,
//   FileText,
// } from "lucide-react";
// import { clearUser } from "../store/index";
// import { logout } from "../services/apiService";
// import logo from "../../public/Cavner-Logo.png";

// const navItems = [
//   { label: "Credit Card", href: "/credit-card" },
//   {
//     label: "Investments Plan",
//     href: "/investment",
//     subMenu: [
//       { label: "Bonds", href: "/investment/bonds" },
//       { label: "Fixed Deposit", href: "/investment/fixed-deposit" },
//       { label: "Mutual Funds", href: "/investment/mutual-funds" },
//     ],
//   },
//   {
//     label: "Corporate Finance",
//     href: "/corporate",
//     subMenu: [
//       {
//         label: "Builder / Real Estate Finance",
//         href: "/corporate/builder",
//         icon: Home,
//       },
//       {
//         label: "Funding Against Shares",
//         href: "/corporate/shares",
//         icon: TrendingUp,
//       },
//       {
//         label: "NCD & Structured Debt",
//         href: "/corporate/ncd",
//         icon: Building,
//       },
//       {
//         label: "Solar / Renewable Energy Funding",
//         href: "/corporate/solar",
//         icon: Sun,
//       },
//       {
//         label: "NBFC / Corporate Funding",
//         href: "/corporate/nbfc",
//         icon: Building,
//       },
//       {
//         label: "Project / Capex Finance",
//         href: "/corporate/capex",
//         icon: Briefcase,
//       },
//     ],
//   },
//   {
//     label: "Apply Loan",
//     href: "/loans",
//     subMenu: [
//       { label: "Personal Loan", href: "/loans/personal-loan", icon: HandCoins },
//       { label: "Home Loan", href: "/loans/home-loan", icon: Home },
//       {
//         label: "Education Loan",
//         href: "/loans/education-loan",
//         icon: GraduationCap,
//       },
//       {
//         label: "Business Loan",
//         href: "/loans/business-loan",
//         icon: BriefcaseBusiness,
//       },
//       { label: "Others Loan", href: "/loans", icon: IndianRupee },
//     ],
//   },
//   {
//     label: "Government Scheme",
//     href: "/government-services",
//     subMenu: [
//       {
//         label: "Pradhan Mantri MUDRA Yojana (PMMY)",
//         href: "/government-services/mudra-yojana",
//         icon: Home,
//       },
//       { label: "PMEGP", href: "/government-services/pmegp", icon: TrendingUp },
//       {
//         label: "PM-Vidyalaxmi Portal",
//         href: "/government-services/pm-vidyalaxmiportal",
//         icon: Building,
//       },
//       {
//         label: "Stand-Up India Scheme",
//         href: "/government-services/standup-india-scheme",
//         icon: Building,
//       },
//     ],
//   },
//   {
//     label: "Others Services",
//     href: "/others-services",
//     subMenu: [
//       {
//         label: "Project Report",
//         href: "/others-services/project-report",
//         icon: FileText,
//       },
//     ],
//   },
//   {
//     label: "Cibil Score",
//     href: "/cibil",
//   },
//   {
//     label: "Amortization Calculator",
//     href: "/amortizationcalculator",
//   },
//   // {
//   //   label: "EMI Calculator", href: "/emi",
//   // },
// ];

// const Header = () => {
//   const [open, setOpen] = useState(false);
//   const [activeSubMenu, setActiveSubMenu] = useState(null);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const user = useSelector((s) => s.auth.user);

//   const toggleSubMenu = (label) =>
//     setActiveSubMenu(activeSubMenu === label ? null : label);

//   const handleLogout = async () => {
//     try {
//       await logout();
//     } catch {
//       /* ignore */
//     }
//     dispatch(clearUser());
//     navigate("/");
//   };

//   return (
//     <>
//       {/* Top bar */}
//       <div className="bg-brand-800 text-white text-sm hidden md:block border-b border-brand-700/50 backdrop-blur-sm bg-opacity-95">
//         <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
//           <p className="text-brand-100 font-medium tracking-wide animate-pulse">Securing India's Financial Future</p>
//           <div className="flex items-center gap-5">
//             <Link
//               to="/partner-login"
//               className="hover:text-brand-200 transition-colors duration-300 relative group py-0.5"
//             >
//               Partner Login
//               <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-200 transition-all duration-300 group-hover:w-full" />
//             </Link>
//             <Link 
//               to="/partner" 
//               className="hover:text-brand-200 transition-colors duration-300 relative group py-0.5"
//             >
//               Become a Partner
//               <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-200 transition-all duration-300 group-hover:w-full" />
//             </Link>
//             <a
//               href="tel:918816942362"
//               className="flex items-center gap-1.5 bg-brand-700 hover:bg-brand-600 px-3 py-1 rounded-full transition-all duration-300 hover:scale-105 shadow-sm"
//             >
//               <Phone size={13} className="animate-bounce" /> +918816942362
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Main header */}
//       <header className="bg-white/95 backdrop-blur-md shadow-md sticky top-0 z-40 transition-all duration-300 border-b border-slate-100">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="flex items-center justify-between h-20">
//             {/* Logo */}
//             <Link
//               to="/"
//               className="group flex items-center gap-3.5 shrink-0 transition-all duration-300"
//             >
//               {/* Logo Wrapper */}
//               <div className="w-14 h-14 rounded-2xl bg-white shadow-md border border-slate-100 flex items-center justify-center overflow-hidden group-hover:shadow-xl group-hover:scale-105 group-hover:rotate-3 transition-all duration-500 ease-out">
//                 <img
//                   src={logo}
//                   alt="Cavner Wealth & FinTech Services"
//                   className="w-11 h-11 object-contain transition-transform duration-500 group-hover:scale-110"
//                 />
//               </div>

//               {/* Company Name */}
//               <div className="leading-tight">
//                 <h1 className="text-xl font-black text-slate-900 tracking-tight transition-colors duration-300 group-hover:text-brand-700">
//                   Cavner
//                 </h1>
//                 <p className="text-xs font-bold text-blue-600 -mt-0.5 tracking-wider uppercase">
//                   Wealth & FinTech
//                 </p>
//                 <span className="text-[10px] uppercase font-semibold text-slate-400 tracking-widest block mt-0.5">
//                   Services
//                 </span>
//               </div>
//             </Link>

//             {/* Search - desktop */}
//             <div className="hidden lg:flex flex-1 max-w-md mx-8">
//               <div className="relative w-full group">
//                 <Search
//                   size={18}
//                   className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-600 transition-colors duration-300"
//                 />
//                 <input
//                   placeholder="Search loans, cards, investments..."
//                   className="w-full pl-11 pr-4 py-2.5 text-sm bg-slate-50 rounded-xl border border-slate-200 transition-all duration-300 group-hover:bg-slate-100 focus:bg-white focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 shadow-inner"
//                 />
//               </div>
//             </div>

//             {/* Right actions */}
//             <div className="flex items-center gap-3">
//               {user ? (
//                 <div className="hidden md:flex items-center gap-3">
//                   <Link
//                     to="/user/dashboard"
//                     className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 border border-transparent hover:border-slate-200 rounded-xl transition-all duration-300"
//                   >
//                     <LayoutDashboard size={16} className="text-brand-600" /> Dashboard
//                   </Link>
//                   <button
//                     onClick={handleLogout}
//                     className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-rose-600 hover:bg-rose-50 border border-transparent hover:border-rose-100 rounded-xl transition-all duration-300 hover:shadow-sm"
//                   >
//                     <LogOut size={16} /> Logout
//                   </button>
//                 </div>
//               ) : (
//                 <div className="hidden md:flex items-center gap-2.5">
//                   <Link
//                     to="/login"
//                     className="px-4 py-2 text-sm font-bold text-brand-700 hover:bg-brand-50 rounded-xl border border-transparent hover:border-brand-200 transition-all duration-300 active:scale-95"
//                   >
//                     Login
//                   </Link>
//                   <Link
//                     to="/register"
//                     className="px-5 py-2 text-sm font-bold text-white bg-brand-700 hover:bg-brand-800 rounded-xl shadow-md hover:shadow-lg hover:shadow-brand-700/20 transition-all duration-300 transform active:scale-95 hover:-translate-y-0.5"
//                   >
//                     Register
//                   </Link>
//                 </div>
//               )}
//               <button
//                 onClick={() => setOpen(!open)}
//                 className="lg:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-xl transition-colors duration-200 active:scale-90"
//               >
//                 {open ? <X size={24} className="animate-spin duration-200" /> : <Menu size={24} />}
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Sub nav - desktop */}
//         <nav className="hidden lg:block border-t border-slate-100 bg-slate-50/50 backdrop-blur-sm">
//           <div className="max-w-7xl mx-auto px-4">
//             <ul className="flex items-center gap-1 h-12">
//               {navItems.map((item) => (
//                 <li key={item.label} className="relative group/nav py-1.5">
//                   <Link
//                     to={item.href}
//                     className="flex items-center gap-1 px-3.5 py-1.5 text-sm font-semibold text-slate-600 hover:text-brand-700 hover:bg-white border border-transparent hover:border-slate-200 shadow-transparent hover:shadow-sm rounded-xl transition-all duration-300 ease-out"
//                   >
//                     {item.label}
//                     {item.subMenu && (
//                       <ChevronDown
//                         size={14}
//                         className="group-hover/nav:rotate-180 transition-transform duration-300 ease-in-out text-slate-400 group-hover/nav:text-brand-600"
//                       />
//                     )}
//                   </Link>
//                   {item.subMenu && (
//                     <div className="absolute left-0 top-full mt-1 w-72 bg-white shadow-2xl rounded-2xl border border-slate-100 py-2.5 opacity-0 invisible translate-y-2 group-hover/nav:opacity-100 group-hover/nav:visible group-hover/nav:translate-y-0 transition-all duration-300 cubic-bezier(0.16, 1, 0.3, 1) z-50">
//                       {item.subMenu.map((sub) => {
//                         const Icon = sub.icon;
//                         return (
//                           <Link
//                             key={sub.href}
//                             to={sub.href}
//                             className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-slate-600 hover:bg-brand-50 hover:text-brand-700 transition-all duration-200 mx-1.5 rounded-xl group/sub"
//                           >
//                             {Icon ? (
//                               <div className="p-1.5 rounded-lg bg-slate-50 group-hover/sub:bg-white group-hover/sub:scale-110 transition-all duration-200 shadow-sm">
//                                 <Icon size={16} className="text-brand-600" />
//                               </div>
//                             ) : (
//                               <div className="w-2 h-2 rounded-full bg-slate-300 group-hover/sub:bg-brand-500 group-hover/sub:scale-125 transition-all duration-200 ml-1.5 mr-0.5" />
//                             )}
//                             <span className="transition-transform duration-200 group-hover/sub:translate-x-1">{sub.label}</span>
//                           </Link>
//                         );
//                       })}
//                     </div>
//                   )}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </nav>
//       </header>

//       {/* Mobile drawer / Slide-out Menu Slider */}
//       <div className={`fixed inset-0 z-50 lg:hidden transition-all duration-500 ${open ? "visible opacity-100" : "invisible opacity-0"}`}>
//         {/* Backdrop overlay */}
//         <div
//           className={`absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-500 ${open ? "opacity-100" : "opacity-0"}`}
//           onClick={() => setOpen(false)}
//         />
//         {/* Sliding panel drawer container */}
//         <div className={`absolute right-0 top-0 h-full w-85 max-w-[85%] bg-white shadow-2xl flex flex-col transition-transform duration-500 ease-out transform ${open ? "translate-x-0" : "translate-x-full"}`}>
//           <div className="flex items-center justify-between p-4 border-b border-slate-100 bg-slate-50">
//             <span className="font-extrabold text-slate-800 tracking-tight text-lg">Menu Navigation</span>
//             <button 
//               onClick={() => setOpen(false)}
//               className="p-2 text-slate-500 hover:bg-slate-200 rounded-xl transition-colors duration-200"
//             >
//               <X size={20} />
//             </button>
//           </div>
//           <div className="p-4 flex-1 overflow-y-auto space-y-1.5 custom-scrollbar">
//             {navItems.map((item) => (
//               <div key={item.label} className="border-b border-slate-50 last:border-0 pb-1">
//                 {item.subMenu ? (
//                   <>
//                     <button
//                       onClick={() => toggleSubMenu(item.label)}
//                       className={`flex items-center justify-between w-full px-4 py-3 text-sm font-semibold rounded-xl transition-all duration-200 ${
//                         activeSubMenu === item.label 
//                           ? "bg-brand-50 text-brand-700 shadow-sm" 
//                           : "text-slate-700 hover:bg-slate-50"
//                       }`}
//                     >
//                       {item.label}
//                       <ChevronDown
//                         size={16}
//                         className={`transition-transform duration-300 ${
//                           activeSubMenu === item.label ? "rotate-180 text-brand-600" : "text-slate-400"
//                         }`}
//                       />
//                     </button>
                    
//                     {/* Collapsible Submenu Container Slide Accordion Effect */}
//                     <div 
//                       className={`overflow-hidden transition-all duration-300 ease-in-out ${
//                         activeSubMenu === item.label ? "max-h-[500px] opacity-100 mt-1 py-1" : "max-h-0 opacity-0"
//                       }`}
//                     >
//                       <div className="pl-3 pr-1 space-y-1 border-l-2 border-brand-100 ml-4">
//                         {item.subMenu.map((sub) => {
//                           const SubIcon = sub.icon;
//                           return (
//                             <Link
//                               key={sub.href}
//                               to={sub.href}
//                               onClick={() => setOpen(false)}
//                               className="flex items-center gap-2.5 px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-brand-700 rounded-xl transition-all duration-150"
//                             >
//                               {SubIcon && <SubIcon size={15} className="text-brand-500 shrink-0" />}
//                               <span>{sub.label}</span>
//                             </Link>
//                           );
//                         })}
//                       </div>
//                     </div>
//                   </>
//                 ) : (
//                   <Link
//                     to={item.href}
//                     onClick={() => setOpen(false)}
//                     className="block px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-brand-50 hover:text-brand-700 rounded-xl transition-all duration-200"
//                   >
//                     {item.label}
//                   </Link>
//                 )}
//               </div>
//             ))}
            
//             <div className="pt-4 space-y-3">
//               <hr className="border-slate-100" />
//               {user ? (
//                 <div className="space-y-1.5">
//                   <Link
//                     to="/user/dashboard"
//                     onClick={() => setOpen(false)}
//                     className="flex items-center gap-2.5 px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 border border-slate-100 rounded-xl shadow-sm transition-all duration-200"
//                   >
//                     <LayoutDashboard size={16} className="text-brand-600" /> Dashboard
//                   </Link>
//                   <button
//                     onClick={handleLogout}
//                     className="flex items-center gap-2.5 w-full px-4 py-3 text-sm font-semibold text-rose-600 hover:bg-rose-50 rounded-xl transition-all duration-200"
//                   >
//                     <LogOut size={16} /> Logout
//                   </button>
//                 </div>
//               ) : (
//                 <div className="flex flex-col gap-2.5 pt-1">
//                   <Link
//                     to="/login"
//                     onClick={() => setOpen(false)}
//                     className="w-full text-center px-4 py-2.5 text-sm font-bold text-brand-700 border-2 border-brand-200 hover:border-brand-300 hover:bg-brand-50/50 rounded-xl transition-all duration-200 active:scale-95"
//                   >
//                     Login
//                   </Link>
//                   <Link
//                     to="/register"
//                     onClick={() => setOpen(false)}
//                     className="w-full text-center px-4 py-2.5 text-sm font-bold text-white bg-brand-700 hover:bg-brand-800 shadow-md rounded-xl transition-all duration-200 active:scale-95"
//                   >
//                     Register
//                   </Link>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Header;




import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  Phone,
  Search,
  Menu,
  X,
  ChevronDown,
  Home,
  HandCoins,
  TrendingUp,
  Building,
  Sun,
  Briefcase,
  GraduationCap,
  IndianRupee,
  BriefcaseBusiness,
  CreditCard,
  User,
  LogOut,
  LayoutDashboard,
  FileText,
} from "lucide-react";
import { clearUser } from "../store/index";
import { logout } from "../services/apiService";
import logo from "../../public/Cavner-Logo.png";

const navItems = [
  { label: "Credit Card", href: "/credit-card" },
  {
    label: "Investments Plan",
    href: "/investment",
    subMenu: [
      { label: "Bonds", href: "/investment/bonds" },
      { label: "Fixed Deposit", href: "/investment/fixed-deposit" },
      { label: "Mutual Funds", href: "/investment/mutual-funds" },
    ],
  },
  {
    label: "Corporate Finance",
    href: "/corporate",
    subMenu: [
      {
        label: "Builder / Real Estate Finance",
        href: "/corporate/builder",
        icon: Home,
      },
      {
        label: "Funding Against Shares",
        href: "/corporate/shares",
        icon: TrendingUp,
      },
      {
        label: "NCD & Structured Debt",
        href: "/corporate/ncd",
        icon: Building,
      },
      {
        label: "Solar / Renewable Energy Funding",
        href: "/corporate/solar",
        icon: Sun,
      },
      {
        label: "NBFC / Corporate Funding",
        href: "/corporate/nbfc",
        icon: Building,
      },
      {
        label: "Project / Capex Finance",
        href: "/corporate/capex",
        icon: Briefcase,
      },
    ],
  },
  {
    label: "Apply Loan",
    href: "/loans",
    subMenu: [
      { label: "Personal Loan", href: "/loans/personal-loan", icon: HandCoins },
      { label: "Home Loan", href: "/loans/home-loan", icon: Home },
      {
        label: "Education Loan",
        href: "/loans/education-loan",
        icon: GraduationCap,
      },
      {
        label: "Business Loan",
        href: "/loans/business-loan",
        icon: BriefcaseBusiness,
      },
      { label: "Others Loan", href: "/loans", icon: IndianRupee },
    ],
  },
  {
    label: "Government Scheme",
    href: "/government-services",
    subMenu: [
      {
        label: "Pradhan Mantri MUDRA Yojana (PMMY)",
        href: "/government-services/mudra-yojana",
        icon: Home,
      },
      { label: "PMEGP", href: "/government-services/pmegp", icon: TrendingUp },
      {
        label: "PM-Vidyalaxmi Portal",
        href: "/government-services/pm-vidyalaxmiportal",
        icon: Building,
      },
      {
        label: "Stand-Up India Scheme",
        href: "/government-services/standup-india-scheme",
        icon: Building,
      },
    ],
  },
  {
    label: "Others Services",
    href: "/others-services",
    subMenu: [
      {
        label: "Project Report",
        href: "/others-services/project-report",
        icon: FileText,
      },
    ],
  },
  {
    label: "Cibil Score",
    href: "/cibil",
  },
  {
    label: "Amortization Calculator",
    href: "/amortizationcalculator",
  },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((s) => s.auth.user);

  const toggleSubMenu = (label) =>
    setActiveSubMenu(activeSubMenu === label ? null : label);

    const partner = useSelector((s) => s.auth.partner);


  const handleLogout = async () => {
    try {
      await logout();
    } catch {
      /* ignore */
    }
    dispatch(clearUser());
    navigate("/");
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <>
      {/* Top bar */}
      <div className="bg-brand-800 text-white text-sm hidden md:block border-b border-brand-700/50 backdrop-blur-sm bg-opacity-95">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
          <p className="text-brand-100 font-medium tracking-wide animate-pulse">Securing India's Financial Future</p>
          <div className="flex items-center gap-5">
            <Link
              to="/partner-login"
              className="hover:text-brand-200 transition-colors duration-300 relative group py-0.5"
            >
              {partner ? "" : "Partner Login"}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-200 transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link 
              to="/partner" 
              className="hover:text-brand-200 transition-colors duration-300 relative group py-0.5"
            >
              {partner ? "" : "Become a Partner"}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-200 transition-all duration-300 group-hover:w-full" />
            </Link>
              <Link 
              to="/contact" 
              className="hover:text-brand-200 transition-colors duration-300 relative group py-0.5"
            >
              Contact Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-200 transition-all duration-300 group-hover:w-full" />
            </Link>
            <a
              href="tel:918816942362"
              className="flex items-center gap-1.5 bg-brand-700 hover:bg-brand-600 px-3 py-1 rounded-full transition-all duration-300 hover:scale-105 shadow-sm"
            >
              <Phone size={13} className="animate-bounce" /> +91 8816942362
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="bg-white/95 backdrop-blur-md shadow-md sticky top-0 z-40 transition-all duration-300 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              to="/"
              className="group flex items-center gap-3.5 shrink-0 transition-all duration-300"
            >
              {/* Logo Wrapper */}
              <div className="w-14 h-14 rounded-2xl bg-white shadow-md border border-slate-100 flex items-center justify-center overflow-hidden group-hover:shadow-xl group-hover:scale-105 group-hover:rotate-3 transition-all duration-500 ease-out">
                <img
                  src={logo}
                  alt="Cavner Wealth & FinTech Services"
                  className="w-11 h-11 object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>

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
            </Link>

            {/* Search - desktop */}
            <div className="hidden lg:flex flex-1 max-w-md mx-8">
              <form onSubmit={handleSearchSubmit} className="relative w-full group">
                <Search
                  size={18}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-600 transition-colors duration-300"
                />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search loans, cards, investments..."
                  className="w-full pl-11 pr-4 py-2.5 text-sm bg-slate-50 rounded-xl border border-slate-200 transition-all duration-300 group-hover:bg-slate-100 focus:bg-white focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 shadow-inner"
                />
              </form>
            </div>

            {/* Right actions */}
            <div className="flex items-center gap-3">
              {user ? (
                <div className="hidden md:flex items-center gap-3">
                  <Link
                    to="/user/dashboard"
                    className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 border border-transparent hover:border-slate-200 rounded-xl transition-all duration-300"
                  >
                    <LayoutDashboard size={16} className="text-brand-600" /> Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-rose-600 hover:bg-rose-50 border border-transparent hover:border-rose-100 rounded-xl transition-all duration-300 hover:shadow-sm"
                  >
                    <LogOut size={16} /> Logout
                  </button>
                </div>
              ) : (
                <div className="hidden md:flex items-center gap-2.5">
                  <Link
                    to="/login"
                    className="px-4 py-2 text-sm font-bold text-brand-700 hover:bg-brand-50 rounded-xl border border-transparent hover:border-brand-200 transition-all duration-300 active:scale-95"
                  >
                    {(user|| partner) ? "" : "Login"}
                  </Link>
                  {
                    !(user || partner) && <Link
                    to="/register"
                    className="px-5 py-2 text-sm font-bold text-white bg-brand-700 hover:bg-brand-800 rounded-xl shadow-md hover:shadow-lg hover:shadow-brand-700/20 transition-all duration-300 transform active:scale-95 hover:-translate-y-0.5"
                  >
                    Register
                  </Link>
                  }
                </div>
              )}
              <button
                onClick={() => setOpen(!open)}
                className="lg:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-xl transition-colors duration-200 active:scale-90"
              >
                {open ? <X size={24} className="animate-spin duration-200" /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Sub nav - desktop */}
        <nav className="hidden lg:block border-t border-slate-100 bg-slate-50/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4">
            <ul className="flex items-center gap-1 h-12">
              {navItems.map((item) => (
                <li key={item.label} className="relative group/nav py-1.5">
                  <Link
                    to={item.href}
                    className="flex items-center gap-1 px-3.5 py-1.5 text-sm font-semibold text-slate-600 hover:text-brand-700 hover:bg-white border border-transparent hover:border-slate-200 shadow-transparent hover:shadow-sm rounded-xl transition-all duration-300 ease-out"
                  >
                    {item.label}
                    {item.subMenu && (
                      <ChevronDown
                        size={14}
                        className="group-hover/nav:rotate-180 transition-transform duration-300 ease-in-out text-slate-400 group-hover/nav:text-brand-600"
                      />
                    )}
                  </Link>
                  {item.subMenu && (
                    <div className="absolute left-0 top-full mt-1 w-72 bg-white shadow-2xl rounded-2xl border border-slate-100 py-2.5 opacity-0 invisible translate-y-2 group-hover/nav:opacity-100 group-hover/nav:visible group-hover/nav:translate-y-0 transition-all duration-300 cubic-bezier(0.16, 1, 0.3, 1) z-50">
                      {item.subMenu.map((sub) => {
                        const Icon = sub.icon;
                        return (
                          <Link
                            key={sub.href}
                            to={sub.href}
                            className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-slate-600 hover:bg-brand-50 hover:text-brand-700 transition-all duration-200 mx-1.5 rounded-xl group/sub"
                          >
                            {Icon ? (
                              <div className="p-1.5 rounded-lg bg-slate-50 group-hover/sub:bg-white group-hover/sub:scale-110 transition-all duration-200 shadow-sm">
                                <Icon size={16} className="text-brand-600" />
                              </div>
                            ) : (
                              <div className="w-2 h-2 rounded-full bg-slate-300 group-hover/sub:bg-brand-500 group-hover/sub:scale-125 transition-all duration-200 ml-1.5 mr-0.5" />
                            )}
                            <span className="transition-transform duration-200 group-hover/sub:translate-x-1">{sub.label}</span>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>

      {/* Mobile drawer / Slide-out Menu Slider */}
      <div className={`fixed inset-0 z-50 lg:hidden transition-all duration-500 ${open ? "visible opacity-100" : "invisible opacity-0"}`}>
        {/* Backdrop overlay */}
        <div
          className={`absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-500 ${open ? "opacity-100" : "opacity-0"}`}
          onClick={() => setOpen(false)}
        />
        {/* Sliding panel drawer container */}
        <div className={`absolute right-0 top-0 h-full w-85 max-w-[85%] bg-white shadow-2xl flex flex-col transition-transform duration-500 ease-out transform ${open ? "translate-x-0" : "translate-x-full"}`}>
          <div className="flex items-center justify-between p-4 border-b border-slate-100 bg-slate-50">
            <span className="font-extrabold text-slate-800 tracking-tight text-lg">Menu Navigation</span>
            <button 
              onClick={() => setOpen(false)}
              className="p-2 text-slate-500 hover:bg-slate-200 rounded-xl transition-colors duration-200"
            >
              <X size={20} />
            </button>
          </div>
          <div className="p-4 flex-1 overflow-y-auto space-y-1.5 custom-scrollbar">
            {navItems.map((item) => (
              <div key={item.label} className="border-b border-slate-50 last:border-0 pb-1">
                {item.subMenu ? (
                  <>
                    <button
                      onClick={() => toggleSubMenu(item.label)}
                      className={`flex items-center justify-between w-full px-4 py-3 text-sm font-semibold rounded-xl transition-all duration-200 ${
                        activeSubMenu === item.label 
                          ? "bg-brand-50 text-brand-700 shadow-sm" 
                          : "text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      {item.label}
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${
                          activeSubMenu === item.label ? "rotate-180 text-brand-600" : "text-slate-400"
                        }`}
                      />
                    </button>
                    
                    {/* Collapsible Submenu Container Slide Accordion Effect */}
                    <div 
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        activeSubMenu === item.label ? "max-h-[500px] opacity-100 mt-1 py-1" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="pl-3 pr-1 space-y-1 border-l-2 border-brand-100 ml-4">
                        {item.subMenu.map((sub) => {
                          const SubIcon = sub.icon;
                          return (
                            <Link
                              key={sub.href}
                              to={sub.href}
                              onClick={() => setOpen(false)}
                              className="flex items-center gap-2.5 px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-brand-700 rounded-xl transition-all duration-150"
                            >
                              {SubIcon && <SubIcon size={15} className="text-brand-500 shrink-0" />}
                              <span>{sub.label}</span>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.href}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-brand-50 hover:text-brand-700 rounded-xl transition-all duration-200"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            
            <div className="pt-4 space-y-3">
              <hr className="border-slate-100" />
              {user ? (
                <div className="space-y-1.5">
                  <Link
                    to="/user/dashboard"
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-2.5 px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 border border-slate-100 rounded-xl shadow-sm transition-all duration-200"
                  >
                    <LayoutDashboard size={16} className="text-brand-600" /> Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2.5 w-full px-4 py-3 text-sm font-semibold text-rose-600 hover:bg-rose-50 rounded-xl transition-all duration-200"
                  >
                    <LogOut size={16} /> Logout
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-2.5 pt-1">
                  <Link
                    to="/login"
                    onClick={() => setOpen(false)}
                    className="w-full text-center px-4 py-2.5 text-sm font-bold text-brand-700 border-2 border-brand-200 hover:border-brand-300 hover:bg-brand-50/50 rounded-xl transition-all duration-200 active:scale-95"
                  >
                    {(partner || user ) ? "": "Login"}

                  </Link>
                  <Link
                    to="/register"
                    onClick={() => setOpen(false)}
                    className="w-full text-center px-4 py-2.5 text-sm font-bold text-white bg-brand-700 hover:bg-brand-800 shadow-md rounded-xl transition-all duration-200 active:scale-95"
                  >
                   {(partner || user ) ? "": "Register"}
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;