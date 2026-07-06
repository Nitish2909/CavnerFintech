import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Building2, Users, IndianRupee, TrendingUp, LogOut, Plus, Loader2 } from "lucide-react";
import Seo from "../components/Seo";
import { clearPartner } from "../store/index";
import { getPartnerDashboard, getMyLeads, createLead } from "../services/apiService";

const PartnerDashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const partner = useSelector((s) => s.auth.partner);
  const [data, setData] = useState(null);
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [leadForm, setLeadForm] = useState({ leadName: "", email: "", phone: "", loanType: "", amount: "" });
  const [submitting, setSubmitting] = useState(false);
  const [msg, setMsg] = useState("");

  const load = () => {
    Promise.all([getPartnerDashboard(), getMyLeads({ limit: 100 })])
      .then(([dash, leadRes]) => {
        setData(dash.data.data);
        setLeads(leadRes.data.data.leads);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => { load(); }, []);

  const handleLogout = () => {
    dispatch(clearPartner());
    navigate("/");
  };

  const handleCreateLead = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setMsg("");
    try {
      await createLead(leadForm);
      setLeadForm({ leadName: "", email: "", phone: "", loanType: "", amount: "" });
      setShowLeadForm(false);
      load();
      setMsg("Lead created successfully");
    } catch (err) {
      setMsg(err.response?.data?.message || "Failed to create lead");
    } finally { setSubmitting(false); }
  };

  if (loading) return <div className="p-8 text-slate-500">Loading...</div>;

  const stats = data?.stats || {};
  const recentLeads = leads.slice(0, 5);

  const statCards = [
    { label: "Total Leads", value: stats.totalLeads || 0, icon: Users, color: "bg-blue-500" },
    { label: "Commission Earned", value: `₹${(stats.totalCommission || 0).toLocaleString()}`, icon: IndianRupee, color: "bg-emerald-500" },
    { label: "Commission Rate", value: `${stats.commissionRate || 1}%`, icon: TrendingUp, color: "bg-violet-500" },
    { label: "Status", value: stats.status || "pending", icon: Building2, color: "bg-amber-500" },
  ];

  const statusColor = (status) => ({
    new: "bg-sky-100 text-sky-700",
    contacted: "bg-amber-100 text-amber-700",
    submitted: "bg-blue-100 text-blue-700",
    approved: "bg-emerald-100 text-emerald-700",
    rejected: "bg-rose-100 text-rose-700",
  }[status] || "bg-slate-100 text-slate-700");

  return (
    <>
      <Seo title="Partner Dashboard" description="Manage your leads and track commissions" path="/partner/dashboard" />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold text-slate-800">{partner?.companyName || "Partner"} Dashboard</h1>
            <p className="text-slate-500 text-sm">Welcome, {partner?.contactPerson}</p>
          </div>
          <div className="flex gap-2">
            <button onClick={() => setShowLeadForm(!showLeadForm)} className="flex items-center gap-1.5 px-4 py-2 text-sm bg-brand-700 text-white rounded-lg hover:bg-brand-800">
              <Plus size={16} /> Add Lead
            </button>
            <button onClick={handleLogout} className="flex items-center gap-1.5 px-4 py-2 text-sm text-rose-600 border border-slate-200 rounded-lg hover:bg-rose-50">
              <LogOut size={16} /> Logout
            </button>
          </div>
        </div>

        {msg && <div className="bg-emerald-50 text-emerald-700 text-sm px-4 py-2 rounded-lg mb-4">{msg}</div>}

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {statCards.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.label} className="bg-white rounded-xl p-5 border border-slate-100 shadow-sm">
                <div className={`w-10 h-10 rounded-lg ${s.color} flex items-center justify-center mb-3`}>
                  <Icon size={18} className="text-white" />
                </div>
                <p className="text-2xl font-bold text-slate-800 capitalize">{s.value}</p>
                <p className="text-sm text-slate-500">{s.label}</p>
              </div>
            );
          })}
        </div>

        {/* Lead form */}
        {showLeadForm && (
          <form onSubmit={handleCreateLead} className="bg-white rounded-xl border border-slate-100 shadow-sm p-6 mb-6">
            <h3 className="font-bold text-slate-800 mb-4">Add New Lead</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <input required placeholder="Lead Name *" value={leadForm.leadName} onChange={(e) => setLeadForm({ ...leadForm, leadName: e.target.value })} className="px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-brand-500" />
              <input required placeholder="Phone *" maxLength="10" value={leadForm.phone} onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })} className="px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-brand-500" />
              <input type="email" placeholder="Email" value={leadForm.email} onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })} className="px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-brand-500" />
              <input placeholder="Loan Type" value={leadForm.loanType} onChange={(e) => setLeadForm({ ...leadForm, loanType: e.target.value })} className="px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-brand-500" />
              <input type="number" placeholder="Amount" value={leadForm.amount} onChange={(e) => setLeadForm({ ...leadForm, amount: e.target.value })} className="px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-brand-500" />
              <button type="submit" disabled={submitting} className="flex items-center justify-center gap-2 bg-brand-700 text-white py-2.5 rounded-lg hover:bg-brand-800 disabled:opacity-50">
                {submitting ? <Loader2 size={18} className="animate-spin" /> : "Save Lead"}
              </button>
            </div>
          </form>
        )}

        {/* Leads table */}
        <div className="bg-white rounded-xl border border-slate-100 shadow-sm">
          <div className="px-5 py-4 border-b border-slate-100">
            <h2 className="font-bold text-slate-800">Recent Leads</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 text-slate-600">
                <tr>
                  <th className="text-left px-4 py-3 font-medium">Lead Name</th>
                  <th className="text-left px-4 py-3 font-medium">Phone</th>
                  <th className="text-left px-4 py-3 font-medium">Loan Type</th>
                  <th className="text-left px-4 py-3 font-medium">Amount</th>
                  <th className="text-left px-4 py-3 font-medium">Status</th>
                  <th className="text-left px-4 py-3 font-medium">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {recentLeads.length === 0 ? (
                  <tr><td colSpan="6" className="text-center py-8 text-slate-400">No leads yet. Click "Add Lead" to create one.</td></tr>
                ) : recentLeads.map((l) => (
                  <tr key={l._id} className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-medium text-slate-800">{l.leadName}</td>
                    <td className="px-4 py-3 text-slate-600">{l.phone}</td>
                    <td className="px-4 py-3 text-slate-600">{l.loanType || "-"}</td>
                    <td className="px-4 py-3 text-slate-600">₹{l.amount?.toLocaleString() || 0}</td>
                    <td className="px-4 py-3"><span className={`px-2.5 py-1 rounded-full text-xs font-medium capitalize ${statusColor(l.status)}`}>{l.status}</span></td>
                    <td className="px-4 py-3 text-slate-500">{new Date(l.createdAt).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnerDashboard;
