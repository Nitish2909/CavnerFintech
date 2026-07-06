import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FileText, CreditCard, User, LogOut, TrendingUp, Clock, CheckCircle2, XCircle } from "lucide-react";
import Seo from "../../components/Seo";
import { clearUser } from "../../store/index";
import { logout, getMyApplications } from "../../services/apiService";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((s) => s.auth.user);
  const [apps, setApps] = useState({ loanApplications: [], creditCardApplications: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMyApplications()
      .then(({ data }) => setApps(data.data))
      .finally(() => setLoading(false));
  }, []);

  const handleLogout = async () => {
    try { await logout(); } catch { /* ignore */ }
    dispatch(clearUser());
    navigate("/");
  };

  const loanApps = apps.loanApplications || [];
  const cardApps = apps.creditCardApplications || [];

  const stats = [
    { label: "Loan Applications", value: loanApps.length, icon: FileText, color: "bg-blue-500" },
    { label: "Card Applications", value: cardApps.length, icon: CreditCard, color: "bg-violet-500" },
    { label: "Approved", value: [...loanApps, ...cardApps].filter((a) => a.status === "approved" || a.status === "disbursed").length, icon: CheckCircle2, color: "bg-emerald-500" },
    { label: "Pending", value: [...loanApps, ...cardApps].filter((a) => a.status === "pending" || a.status === "under_review").length, icon: Clock, color: "bg-amber-500" },
  ];

  const statusColor = (status) => ({
    pending: "bg-amber-100 text-amber-700",
    under_review: "bg-blue-100 text-blue-700",
    approved: "bg-emerald-100 text-emerald-700",
    rejected: "bg-rose-100 text-rose-700",
    disbursed: "bg-violet-100 text-violet-700",
  }[status] || "bg-slate-100 text-slate-700");

  return (
    <>
      <Seo title="My Dashboard" description="View your loan and credit card applications" path="/user/dashboard" />
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold text-slate-800">Welcome, {user?.name?.split(" ")[0] || "User"}!</h1>
            <p className="text-slate-500 text-sm">Manage your applications and profile</p>
          </div>
          <div className="flex gap-2">
            <Link to="/user/profile" className="flex items-center gap-1.5 px-4 py-2 text-sm bg-white border border-slate-200 rounded-lg hover:bg-slate-50">
              <User size={16} /> Profile
            </Link>
            <button onClick={handleLogout} className="flex items-center gap-1.5 px-4 py-2 text-sm text-rose-600 bg-white border border-slate-200 rounded-lg hover:bg-rose-50">
              <LogOut size={16} /> Logout
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.label} className="bg-white rounded-xl p-5 border border-slate-100 shadow-sm">
                <div className={`w-10 h-10 rounded-lg ${s.color} flex items-center justify-center mb-3`}>
                  <Icon size={18} className="text-white" />
                </div>
                <p className="text-2xl font-bold text-slate-800">{s.value}</p>
                <p className="text-sm text-slate-500">{s.label}</p>
              </div>
            );
          })}
        </div>

        {/* Quick actions */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          <Link to="/loans" className="flex items-center gap-2 px-4 py-3 bg-brand-50 text-brand-700 rounded-lg hover:bg-brand-100 text-sm font-medium">
            <FileText size={18} /> Apply for Loan
          </Link>
          <Link to="/credit-card" className="flex items-center gap-2 px-4 py-3 bg-brand-50 text-brand-700 rounded-lg hover:bg-brand-100 text-sm font-medium">
            <CreditCard size={18} /> Apply for Card
          </Link>
          <Link to="/emi" className="flex items-center gap-2 px-4 py-3 bg-brand-50 text-brand-700 rounded-lg hover:bg-brand-100 text-sm font-medium">
            <TrendingUp size={18} /> EMI Calculator
          </Link>
          <Link to="/cibil" className="flex items-center gap-2 px-4 py-3 bg-brand-50 text-brand-700 rounded-lg hover:bg-brand-100 text-sm font-medium">
            <CheckCircle2 size={18} /> Check CIBIL
          </Link>
        </div>

        {/* Loan applications */}
        <div className="bg-white rounded-xl border border-slate-100 shadow-sm mb-6">
          <div className="px-5 py-4 border-b border-slate-100">
            <h2 className="font-bold text-slate-800">My Loan Applications</h2>
          </div>
          <div className="p-5">
            {loading ? <p className="text-slate-400">Loading...</p> : loanApps.length === 0 ? (
              <p className="text-slate-400 text-sm">No loan applications yet. <Link to="/loans" className="text-brand-700 hover:underline">Apply now</Link></p>
            ) : (
              <div className="space-y-3">
                {loanApps.map((a) => (
                  <div key={a._id} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <div>
                      <p className="font-medium text-slate-800 capitalize">{a.loanType} Loan</p>
                      <p className="text-xs text-slate-500">₹{a.amountRequested?.toLocaleString()} · {a.tenureMonths} months · {new Date(a.createdAt).toLocaleDateString()}</p>
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium capitalize ${statusColor(a.status)}`}>{a.status.replace("_", " ")}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Card applications */}
        <div className="bg-white rounded-xl border border-slate-100 shadow-sm">
          <div className="px-5 py-4 border-b border-slate-100">
            <h2 className="font-bold text-slate-800">My Credit Card Applications</h2>
          </div>
          <div className="p-5">
            {loading ? <p className="text-slate-400">Loading...</p> : cardApps.length === 0 ? (
              <p className="text-slate-400 text-sm">No card applications yet. <Link to="/credit-card" className="text-brand-700 hover:underline">Apply now</Link></p>
            ) : (
              <div className="space-y-3">
                {cardApps.map((a) => (
                  <div key={a._id} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <div>
                      <p className="font-medium text-slate-800">{a.creditCard?.name || "Credit Card"}</p>
                      <p className="text-xs text-slate-500">{new Date(a.createdAt).toLocaleDateString()}</p>
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium capitalize ${statusColor(a.status)}`}>{a.status.replace("_", " ")}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
