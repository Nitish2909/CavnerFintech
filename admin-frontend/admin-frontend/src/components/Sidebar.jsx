import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  LayoutDashboard,
  Users,
  Building2,
  FileText,
  CreditCard,
  MessageSquare,
  Settings,
  LogOut,
  Menu,
  X,
  Shield,
} from "lucide-react";
import { logout } from "../store/index";
import { adminLogout } from "../services/adminService";
import logo from "../../public/Cavner-Logo.png";

const navItems = [
  { label: "Dashboard", href: "/", icon: LayoutDashboard },
  { label: "Users", href: "/users", icon: Users },
  { label: "Partners", href: "/partners", icon: Building2 },
  { label: "Loan Applications", href: "/loan-applications", icon: FileText },
  { label: "Card Applications", href: "/card-applications", icon: CreditCard },
  { label: "Loan Products", href: "/loan-products", icon: Settings },
  { label: "Credit Cards", href: "/credit-cards", icon: CreditCard },
  { label: "Messages", href: "/messages", icon: MessageSquare },
];

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const admin = useSelector((s) => s.auth.admin);

  const handleLogout = async () => {
    try {
      await adminLogout();
    } catch {
      /* ignore */
    }
    dispatch(logout());
    navigate("/login");
  };

  const isActive = (href) =>
    href === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(href);

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed top-4 left-4 z-50 lg:hidden bg-brand-700 text-white p-2 rounded-lg"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen w-64 bg-slate-900 text-slate-100 z-40 transform transition-transform lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* <div className="flex items-center gap-2 px-6 py-5 border-b border-slate-800">
          <div className="w-14 h-14 flex items-center">
            <img src={logo} alt="Cavner-Logo"  />
          </div>

          <div>
            <h1 className="font-bold text-sm leading-tight">Cavner Wealth & FinTech Services</h1>
            <p className="text-sm text-slate-400">Admin Panel</p>
          </div>
        </div> */}

        {/* Company Logo */}
        <div className="border-b border-slate-800 bg-slate-900/50">
          <div className="flex items-center gap-4 px-5 py-5">
            {/* Logo */}
            <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-white shadow-lg overflow-hidden">
              <img
                src={logo}
                alt="Cavner Wealth & FinTech Services"
                className="w-12 h-12 object-contain"
              />
            </div>

            {/* Company Name */}
            <div className="flex flex-col overflow-hidden">
              <h1 className="text-[15px] font-bold text-white leading-tight truncate">
                Cavner Wealth
              </h1>

              <p className="text-[13px] text-blue-400 font-medium truncate">
                & FinTech Services
              </p>

              <span className="text-xs text-slate-400 tracking-wide uppercase">
                Admin Panel
              </span>
            </div>
          </div>
        </div>

        <nav className="px-3 py-4 space-y-1 overflow-y-auto h-[calc(100vh-180px)]">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                  isActive(item.href)
                    ? "bg-brand-600 text-white"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }`}
              >
                <Icon size={18} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-800">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-full bg-brand-600 flex items-center justify-center font-bold">
              {admin?.name?.charAt(0) || "A"}
            </div>
            <div className="min-w-0">
              <p className="text-sm font-medium truncate">
                {admin?.name || "Admin"}
              </p>
              <p className="text-xs text-slate-400 truncate">{admin?.email}</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 w-full px-3 py-2 text-sm text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
          >
            <LogOut size={16} /> Logout
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
