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
  HandCoins,
  TrendingUp,
  Building,
  Sun,
  Briefcase,
  GraduationCap,
  IndianRupeeIcon,
  BriefcaseBusiness,
} from "lucide-react";

const navItems = [
  { label: "Credit Card", href: "/credit-card", hasMenu: true },
  // { label: "Apply Loan", href: "/loans" },
  // { label: "Investment Plan", href: "/investment" },
  {
    label: "Investments Plan",
    href: "/investment",
    subMenu: [
      {
        label: "Bonds",
        href: "/investment/bonds",
        // You can add an icon here if needed, e.g., icon: FileText
        items: [
          { label: "Bonds In India", href: "/investments/bonds/india" },
          { label: "Corporate Bonds", href: "/investments/bonds/corporate" },
          { label: "Government Bonds", href: "/investments/bonds/government" },
          { label: "Tax Free Bonds", href: "/investments/bonds/tax-free" },
          {
            label: "Floating Rate Bonds",
            href: "/investments/bonds/floating-rate",
          },
          {
            label: "Capital Gain Bonds",
            href: "/investments/bonds/capital-gain",
          },
          {
            label: "Zero Coupon Bonds",
            href: "/investments/bonds/zero-coupon",
          },
          {
            label: "How to invest in Bonds",
            href: "/investments/bonds/how-to-invest",
          },
          {
            label: "Sovereign Gold Bonds",
            href: "/investments/bonds/sovereign-gold",
          },
        ],
      },
      {
        label: "Fixed Deposit",
        href: "/investments/fixed-deposit",
        items: [
          {
            label: "Fixed Deposit Interest Rates",
            href: "/investments/fd/interest-rates",
          },
          {
            label: "Senior Citizen FD Rates",
            href: "/investments/fd/senior-citizen",
          },
          {
            label: "Loan against Fixed Deposit",
            href: "/investments/fd/loan-against",
          },
          {
            label: "FD vs Mutual Funds",
            href: "/investments/fd/vs-mutual-funds",
          },
          { label: "FD vs RD", href: "/investments/fd/vs-rd" },
          {
            label: "Post Office FD Rates",
            href: "/investments/fd/post-office-rates",
          },
          {
            label: "Recurring Deposit",
            href: "/investments/fd/recurring-deposit",
          },
        ],
      },
      {
        label: "Mutual Funds",
        href: "/investments/mutual-funds",
        items: [
          { label: "Mutual Funds", href: "/investments/mutual-funds/all" },
          {
            label: "Large Cap Mutual Funds",
            href: "/investments/mutual-funds/large-cap",
          },
          {
            label: "Mid Cap Mutual Funds",
            href: "/investments/mutual-funds/mid-cap",
          },
          {
            label: "Small Cap Mutual Funds",
            href: "/investments/mutual-funds/small-cap",
          },
          {
            label: "ELSS Mutual Funds",
            href: "/investments/mutual-funds/elss",
          },
          {
            label: "Mutual Fund Investment",
            href: "/investments/mutual-funds/investment-guide",
          },
          { label: "SWP Mutual Funds", href: "/investments/mutual-funds/swp" },
          {
            label: "Flexi Cap Funds",
            href: "/investments/mutual-funds/flexi-cap",
          },
          { label: "Liquid Funds", href: "/investments/mutual-funds/liquid" },
        ],
      },
    ],
  },

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

  {
    label: "Apply Loan",
    href: "/loans",
    subMenu: [
      {
        label: "PERSONAL LOAN",
        href: "/loans/personal-loan",
        icon: HandCoins,
      },
      {
        label: "HOME LOAN",
        href: "/loans/home-loan",
        icon: Home,
      },
      {
        label: "EDUCATION LOAN",
        href: "/loans/education-loan",
        icon: GraduationCap,
      },
      {
        label: "BUSINESS LOAN",
        href: "/loans/business-loan",
        icon: BriefcaseBusiness,
      },
      {
        label: "OTHERS LOAN",
        href: "/loans",
        icon: IndianRupeeIcon,
      },
    ],
  },
  {
    label: "Governments Services",
    href: "/government-services",
    subMenu: [
      {
        label: "Pradhan Mantri MUDRA Yojana (PMMY)",
        href: "/government-services/mudra-yojana",
        icon: Home,
      },
      {
        label: " Prime Minister's Employment Generation Programme (PMEGP)",
        href: "/government-services/pmegp",
        icon: TrendingUp,
      },
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
        label: "PROJECT REPORT",
        href: "/others-services/project-report",
        icon: Home,
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
          <Link
            to="/"
            className="flex items-center gap-2 sm:gap-3 shrink-0 group"
          >
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
          <div className="hidden md:flex items-center gap-2 bg-gray-700/60 px-3 py-2 rounded-lg max-w-xs xl:max-w-md w-[300px] border border-gray-600/40 focus-within:border-emerald-500/50 transition-all">
            <Search size={16} className="text-gray-400" />
            <input
              type="search"
              placeholder="What are you looking for?"
              className="bg-transparent border-none outline-none text-xs text-slate-100 placeholder-gray-400 w-full focus:ring-0"
            />
          </div>

          {/* Right Utility Navigation - Desktop only */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6 text-[11px] font-bold tracking-wider text-slate-300">
            <Link
              to="/cibil"
              className="hover:text-emerald-400 transition-colors whitespace-nowrap"
            >
              CIBIL SCORE
            </Link>
            <Link
              to="/emi"
              className="hover:text-emerald-400 transition-colors whitespace-nowrap"
            >
              EMI CALCULATOR
            </Link>
            <Link
              to="/login"
              className="hover:text-emerald-400 transition-colors whitespace-nowrap"
            >
              LOGIN
            </Link>
            <Link
              to="/partner-login"
              className="hover:text-emerald-400 transition-colors whitespace-nowrap"
            >
              PARTNER LOGIN
            </Link>
            <Link to="/contact" className="hover:text-emerald-400 transition-colors whitespace-nowrap">
              Contact Us
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
              <span className="hidden sm:inline text-slate-200">
                9971749994
              </span>
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
              <div
                key={item.label}
                className="relative group h-full flex items-center"
              >
                <Link
                  to={item.href}
                  className="flex items-center gap-1 text-slate-300 group-hover:text-emerald-400 font-bold py-2 transition-colors uppercase tracking-wider"
                >
                  {item.label}
                  {item.subMenu && (
                    <>
                      <ChevronDown
                        size={12}
                        className="block group-hover:hidden text-slate-500"
                      />
                      <ChevronUp
                        size={12}
                        className="hidden group-hover:block text-emerald-400"
                      />
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
                              <IconComponent
                                size={15}
                                className="text-slate-400 shrink-0"
                              />
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
              <div
                key={item.label}
                className="flex flex-col border-b border-gray-800/60 last:border-none pb-1"
              >
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
                      {activeSubMenu === item.label ? (
                        <ChevronUp size={16} />
                      ) : (
                        <ChevronDown size={16} />
                      )}
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
              <Link
                to="/cibil"
                className="hover:text-emerald-400 py-1 transition-colors"
                onClick={() => setOpen(false)}
              >
                Check CIBIL Score
              </Link>
              <Link
                to="/emi"
                className="hover:text-emerald-400 py-1 transition-colors"
                onClick={() => setOpen(false)}
              >
                EMI Calculator
              </Link>
              <Link
                to="/login"
                className="hover:text-emerald-400 py-1 transition-colors"
                onClick={() => setOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/partner-login"
                className="hover:text-emerald-400 py-1 transition-colors"
                onClick={() => setOpen(false)}
              >
                Partner Login
              </Link>
              <Link
                to="/partner"
                className="hover:text-emerald-400 py-1 transition-colors font-bold text-slate-300"
                onClick={() => setOpen(false)}
              >
                Become a Partner
              </Link>
              <Link
                to="/contact"
                className="hover:text-emerald-400 py-1 transition-colors font-bold text-slate-300"
                onClick={() => setOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
