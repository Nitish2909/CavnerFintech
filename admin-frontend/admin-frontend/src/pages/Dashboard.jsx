import { useEffect, useState } from "react";
import { Users, Building2, FileText, CreditCard, IndianRupee, MessageSquare, TrendingUp, Clock } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";
import { getDashboardStats } from "../services/adminService";

const Dashboard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDashboardStats()
      .then(({ data }) => setData(data.data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="p-8 text-slate-500">Loading dashboard...</div>;
  if (!data) return <div className="p-8 text-rose-500">Failed to load stats.</div>;

  const { stats, loanStatusBreakdown } = data;

  const cards = [
    { label: "Total Users", value: stats.totalUsers, icon: Users, color: "bg-blue-500" },
    { label: "Total Partners", value: stats.totalPartners, icon: Building2, color: "bg-emerald-500" },
    { label: "Pending Partners", value: stats.pendingPartners, icon: Clock, color: "bg-amber-500" },
    { label: "Loan Applications", value: stats.totalLoanApps, icon: FileText, color: "bg-violet-500" },
    { label: "Pending Loans", value: stats.pendingLoanApps, icon: Clock, color: "bg-orange-500" },
    { label: "Card Applications", value: stats.totalCardApps, icon: CreditCard, color: "bg-pink-500" },
    { label: "Unresolved Msgs", value: stats.unresolvedMessages, icon: MessageSquare, color: "bg-rose-500" },
    { label: "Disbursed Amount", value: `₹${(stats.totalDisbursedAmount / 100000).toFixed(1)}L`, icon: IndianRupee, color: "bg-teal-500" },
  ];

  const pieColors = ["#f59e0b", "#3b82f6", "#10b981", "#ef4444", "#8b5cf6"];
  const pieData = loanStatusBreakdown.map((b) => ({ name: b._id, value: b.count }));

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-800">Dashboard</h1>
        <p className="text-slate-500 text-sm">Overview of platform activity</p>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {cards.map((c) => {
          const Icon = c.icon;
          return (
            <div key={c.label} className="bg-white rounded-xl p-5 shadow-sm border border-slate-100">
              <div className={`w-11 h-11 rounded-lg ${c.color} flex items-center justify-center mb-3`}>
                <Icon size={20} className="text-white" />
              </div>
              <p className="text-2xl font-bold text-slate-800">{c.value}</p>
              <p className="text-sm text-slate-500">{c.label}</p>
            </div>
          );
        })}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
          <h3 className="font-semibold text-slate-800 mb-4">Loan Applications by Status</h3>
          {pieData.length > 0 ? (
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label>
                  {pieData.map((_, i) => <Cell key={i} fill={pieColors[i % pieColors.length]} />)}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          ) : <p className="text-slate-400 text-sm">No data yet</p>}
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
          <h3 className="font-semibold text-slate-800 mb-4">Application Counts</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={[
              { name: "Users", count: stats.totalUsers },
              { name: "Partners", count: stats.totalPartners },
              { name: "Loans", count: stats.totalLoanApps },
              { name: "Cards", count: stats.totalCardApps },
            ]}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#2563eb" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
