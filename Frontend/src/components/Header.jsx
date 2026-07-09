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
  // {
  //   label: "EMI Calculator", href: "/emi",
  // },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((s) => s.auth.user);

  const toggleSubMenu = (label) =>
    setActiveSubMenu(activeSubMenu === label ? null : label);

  const handleLogout = async () => {
    try {
      await logout();
    } catch {
      /* ignore */
    }
    dispatch(clearUser());
    navigate("/");
  };

  return (
    <>
      {/* Top bar */}
      <div className="bg-brand-800 text-white text-sm hidden md:block">
        <div className="max-w-7xl mx-auto px-4 py-1.5 flex items-center justify-between">
          <p className="text-brand-100">Securing India's Financial Future</p>
          <div className="flex items-center gap-4">
            <Link
              to="/partner-login"
              className="hover:text-white transition-colors"
            >
              Partner Login
            </Link>
            <Link to="/partner" className="hover:text-white transition-colors">
              Become a Partner
            </Link>
            <a
              href="tel:918816942362"
              className="flex items-center gap-1 hover:text-white"
            >
              <Phone size={14} /> +91 88169 42362
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            {/* <Link to="/" className="flex items-center gap-2.5 shrink-0">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-brand-600 to-brand-800 flex items-center justify-center text-white font-bold text-sm">
                <img src={logo} alt="cavner-logo" />
              </div>
              <div className="leading-tight">
                <p className="font-bold text-slate-800 text-lg">Cavner</p>
                <p className="text-xs text-brand-700 -mt-1">Wealth & FinTech Services</p>
              </div>
            </Link> */}
            <Link
              to="/"
              className="group flex items-center gap-3 shrink-0 transition-all duration-300"
            >
              {/* Logo */}
              <div className="w-14 h-14 rounded-2xl bg-white shadow-md border border-slate-200 flex items-center justify-center overflow-hidden group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                <img
                  src={logo}
                  alt="Cavner Wealth & FinTech Services"
                  className="w-11 h-11 object-contain"
                />
              </div>

              {/* Company Name */}
              <div className="leading-tight">
                <h1 className="text-lg font-extrabold text-slate-900 tracking-tight ">
                  Cavner
                </h1>

                <p className="text-xs font-medium text-blue-600 -mt-1">
                  Wealth & FinTech
                </p>

                <span className="text-xs text-blue-600 tracking-wide -mt-1">
                  Services
                </span>
              </div>
            </Link>

            {/* Search - desktop */}
            <div className="hidden lg:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />
                <input
                  placeholder="Search loans, cards, investments..."
                  className="w-full pl-10 pr-4 py-2 text-sm bg-slate-50 rounded-lg border border-slate-200 focus:outline-none focus:border-brand-500"
                />
              </div>
            </div>

            {/* Right actions */}
            <div className="flex items-center gap-3">
              {user ? (
                <div className="hidden md:flex items-center gap-2">
                  <Link
                    to="/user/dashboard"
                    className="flex items-center gap-1.5 px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 rounded-lg"
                  >
                    <LayoutDashboard size={16} /> Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-1.5 px-3 py-2 text-sm text-rose-600 hover:bg-rose-50 rounded-lg"
                  >
                    <LogOut size={16} /> Logout
                  </button>
                </div>
              ) : (
                <div className="hidden md:flex items-center gap-2">
                  {/* <Link to="/amortizationcalculator" className="px-4 py-2 text-sm font-medium text-brand-700 hover:bg-brand-50 rounded-lg">Amortization Calculator</Link> */}
                  <Link
                    to="/login"
                    className="px-4 py-2 text-sm font-medium text-brand-700 hover:bg-brand-50 rounded-lg"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="px-4 py-2 text-sm font-medium text-white bg-brand-700 hover:bg-brand-800 rounded-lg"
                  >
                    Register
                  </Link>
                </div>
              )}
              <button
                onClick={() => setOpen(!open)}
                className="lg:hidden p-2 text-slate-700"
              >
                {open ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Sub nav - desktop */}
        <nav className="hidden lg:block border-t border-slate-100 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <ul className="flex items-center gap-1 h-11">
              {navItems.map((item) => (
                <li key={item.label} className="relative group">
                  <Link
                    to={item.href}
                    className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-slate-700 hover:text-brand-700 hover:bg-brand-50 rounded-lg transition-colors"
                  >
                    {item.label}
                    {item.subMenu && (
                      <ChevronDown
                        size={14}
                        className="group-hover:rotate-180 transition-transform"
                      />
                    )}
                  </Link>
                  {item.subMenu && (
                    <div className="absolute left-0 top-full mt-0 w-64 bg-white shadow-xl rounded-lg border border-slate-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                      {item.subMenu.map((sub) => {
                        const Icon = sub.icon;
                        return (
                          <Link
                            key={sub.href}
                            to={sub.href}
                            className="flex items-center gap-2.5 px-4 py-2 text-sm text-slate-700 hover:bg-brand-50 hover:text-brand-700"
                          >
                            {Icon && (
                              <Icon size={16} className="text-brand-600" />
                            )}
                            {sub.label}
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

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-80 max-w-[85%] bg-white overflow-y-auto">
            <div className="flex items-center justify-between p-4 border-b">
              <span className="font-bold text-slate-800">Menu</span>
              <button onClick={() => setOpen(false)}>
                <X size={22} />
              </button>
            </div>
            <div className="p-4 space-y-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.subMenu ? (
                    <>
                      <button
                        onClick={() => toggleSubMenu(item.label)}
                        className="flex items-center justify-between w-full px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
                      >
                        {item.label}
                        <ChevronDown
                          size={16}
                          className={
                            activeSubMenu === item.label ? "rotate-180" : ""
                          }
                        />
                      </button>
                      {activeSubMenu === item.label && (
                        <div className="pl-4 space-y-0.5">
                          {item.subMenu.map((sub) => (
                            <Link
                              key={sub.href}
                              to={sub.href}
                              onClick={() => setOpen(false)}
                              className="block px-3 py-2 text-sm text-slate-600 hover:bg-brand-50 rounded-lg"
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={() => setOpen(false)}
                      className="block px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-brand-50 rounded-lg"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <hr className="my-3" />
              {user ? (
                <>
                  <Link
                    to="/user/dashboard"
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-2 px-3 py-2.5 text-sm text-slate-700 hover:bg-slate-50 rounded-lg"
                  >
                    <LayoutDashboard size={16} /> Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 w-full px-3 py-2.5 text-sm text-rose-600 hover:bg-rose-50 rounded-lg"
                  >
                    <LogOut size={16} /> Logout
                  </button>
                </>
              ) : (
                <div className="flex gap-2 pt-2">
                  <Link
                    to="/login"
                    onClick={() => setOpen(false)}
                    className="flex-1 text-center px-3 py-2 text-sm font-medium text-brand-700 border border-brand-300 rounded-lg"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    onClick={() => setOpen(false)}
                    className="flex-1 text-center px-3 py-2 text-sm font-medium text-white bg-brand-700 rounded-lg"
                  >
                    Register
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
