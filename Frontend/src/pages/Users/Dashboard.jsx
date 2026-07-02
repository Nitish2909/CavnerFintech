import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  LayoutDashboard,
  HandCoins,
  ShieldCheck,
  LogOut,
  Menu,
  X,
  FileText,
  Wallet,
  IndianRupee,
  LogIn,
  User,
  Settings,
} from "lucide-react";

export default function LoanDashboard() {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  // Dynamic User State (Simulating an active auth session)
  const [user, setUser] = useState({
    name: "Nitish Kumar",
    initials: "NK",
    role: "Premium Borrower",
  });

  // Local state container specifically to handle dynamic editing inside the view layer
  const [editName, setEditName] = useState(user ? user.name : "");

  // Mock states reflecting fintech loan portfolio integrations
  const [loans] = useState([
    {
      id: "LN-9021",
      type: "SME Business Loan",
      date: "2026-03-24",
      status: "Disbursed",
      amount: "45000",
    },
    {
      id: "LN-8842",
      type: "Personal Loan",
      date: "2026-03-28",
      status: "Under Review",
      amount: "12500",
    },
    {
      id: "LN-7139",
      type: "Education Loan",
      date: "2026-02-15",
      status: "Approved",
      amount: "32000",
    },
  ]);

  // Derived State: Calculate active capital cleanly during render
  const totalAmount = loans
    .filter((loan) => loan.status === "Disbursed" || loan.status === "Approved")
    .reduce((acc, curr) => acc + Number(curr.amount), 0);

  // Derived State: Dynamic mock calculation for the next monthly payment (5% of active capital)
  const nextPayment = Math.round(totalAmount * 0.05);

  // Helper function to extract initials dynamically on change
  const calculateInitials = (fullName) => {
    if (!fullName) return "??";
    const parts = fullName.trim().split(" ");
    if (parts.length > 1) {
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    }
    return parts[0].substring(0, 2).toUpperCase();
  };

  // Process profile update details dynamically
  const handleUpdateProfile = (e) => {
    e.preventDefault();
    if (!editName.trim()) return;

    setUser((prev) => ({
      ...prev,
      name: editName,
      initials: calculateInitials(editName),
    }));
    setIsProfileModalOpen(false);
  };

  // Handle PDF Generation Simulation for Loan Agreements
  const handleDownloadAgreement = (loanId) => {
    console.log(`Triggering generatePdf FromHtml for loan agreement: ${loanId}`);
    alert(`Generating your CavnerFintech Loan Agreement & Disclosure PDF...`);
  };

  // Handle Logout Event
  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:9000/api/auth/logout", {
        method: "POST", 
        headers: { "Content-Type": "application/json" },
        credentials: "include", 
      });

      if (!response.ok) {
        throw new Error("Logout request failed on server");
      }
    } catch (error) {
      console.error("LogOut Server Error (Proceeding with client-side cleanup):", error);
    } finally {
      setUser(null);
      navigate("/login");
    }
  };

  // Handle Login Simulation
  const handleLoginSimulation = () => {
    const defaultName = "Nitish Kumar";
    setUser({
      name: defaultName,
      initials: calculateInitials(defaultName),
      role: "Premium Borrower",
    });
    setEditName(defaultName);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased flex">
      {/* --- SIDEBAR NAVIGATION --- */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-slate-950 text-white p-5 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:relative lg:translate-x-0 transition-transform duration-300 ease-in-out flex flex-col justify-between border-r border-slate-800`}
      >
        <div className="space-y-6">
          {/* Brand Header */}
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center gap-2 sm:gap-3 shrink-0 group"
            >
              {/* Geometric Logo Icon */}
              <div className="flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 shadow-md shadow-emerald-900/30 transition-transform group-hover:scale-105">
                <span className="text-xs sm:text-sm font-black text-white tracking-tighter">
                  {user ? user.initials : "CWF"}
                </span>
              </div>

              {/* Brand Typography dynamically adapts to User Session */}
              <div className="flex flex-col justify-center leading-none">
                <div className="flex items-baseline max-w-[140px] truncate">
                  <span className="font-black text-emerald-400 text-base sm:text-lg tracking-tight truncate">
                    {user ? user.name.split(" ")[0] : "Cavner"}
                  </span>
                  <span className="font-light text-slate-200 text-base sm:text-lg tracking-tight ml-1 truncate">
                    {user ? user.name.split(" ")[1] || "Portal" : "Wealth"}
                  </span>
                </div>
                <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase mt-0.5 sm:mt-1 truncate">
                  {user ? user.role : "& Fintech"}
                </span>
              </div>
            </Link>
            <button
              className="lg:hidden text-slate-400 hover:text-white"
              onClick={() => setIsSidebarOpen(false)}
            >
              <X size={20} />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1 pt-4">
            <button
              disabled={!user}
              onClick={() => setActiveTab("overview")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                !user
                  ? "opacity-50 cursor-not-allowed text-slate-600"
                  : activeTab === "overview"
                    ? "bg-emerald-600 text-white"
                    : "text-slate-400 hover:bg-slate-900 hover:text-white"
              }`}
            >
              <LayoutDashboard size={16} />
              <span>Overview</span>
            </button>
          </nav>
        </div>
      </aside>

      {/* --- MAIN DISPLAY WORKSPACE --- */}
      <div className="flex-1 flex flex-col min-w-0 overflow-x-hidden">
        {/* Top Operational Action Navbar */}
        <header className="h-16 bg-white border-b border-slate-200 px-4 md:px-8 flex items-center justify-between sticky top-0 z-40 shadow-sm shadow-slate-100/40">
          <div className="flex items-center gap-4">
            <button
              className="lg:hidden p-2 text-slate-600 hover:bg-slate-50 rounded-xl"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu size={20} />
            </button>
          </div>

          {/* Dynamic User Account Trigger Section */}
          <div className="flex items-center gap-6">
            {user ? (
              <>
                <div 
                  onClick={() => setIsProfileModalOpen(true)}
                  className="flex items-center gap-3 border-r border-slate-200 pr-4 cursor-pointer hover:opacity-80 group transition-all"
                  title="Click to Edit Profile Name"
                >
                  <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-emerald-600 border border-slate-200 group-hover:border-emerald-400 transition-colors">
                    {user.initials}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900 leading-none group-hover:text-emerald-600 flex items-center gap-1">
                      <span>{user.name}</span>
                      <Settings size={10} className="text-slate-400 inline" />
                    </p>
                    <span className="text-[10px] text-slate-500 font-medium">
                      {user.role}
                    </span>
                  </div>
                </div>
                <button
                  onClick={handleLogout}
                  className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-all"
                  title="Log Out"
                >
                  <LogOut size={16} />
                </button>
              </>
            ) : (
              <div className="text-xs font-medium text-slate-400 italic">
                Session Inactive
              </div>
            )}
          </div>
        </header>

        {/* Dynamic Route Container */}
        <main className="p-4 md:p-8 flex-1 max-w-7xl w-full mx-auto space-y-8">
          {user ? (
            activeTab === "overview" && (
              <>
                {/* Welcome Headline banner */}
                <div>
                  <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                    Welcome back, {user.name}
                  </h2>
                  <p className="text-slate-400 text-xs mt-0.5">
                    Real-time status of capital limits, credit scores, active
                    applications, and loan generation.
                  </p>
                </div>

                {/* Status Metric Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex justify-between items-start">
                    <div className="space-y-2">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                        Total Active Capital
                      </span>
                      <h3 className="text-3xl font-black text-slate-900 tracking-tight">
                        <span className="flex items-center">
                          <IndianRupee size={22} className="mr-0.5" />
                          {totalAmount.toLocaleString("en-IN")}
                        </span>
                      </h3>
                    </div>
                    <div className="p-2.5 bg-emerald-50 text-emerald-600 rounded-xl">
                      <Wallet size={20} />
                    </div>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex justify-between items-start">
                    <div className="space-y-2">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                        CIBIL Score
                      </span>
                      <h3 className="text-3xl font-black text-emerald-600 tracking-tight">
                        765
                      </h3>
                    </div>
                    <div className="p-2.5 bg-emerald-50 text-emerald-600 rounded-xl">
                      <ShieldCheck size={20} />
                    </div>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex justify-between items-start">
                    <div className="space-y-2">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                        Next Scheduled Payment
                      </span>
                      <h3 className="text-3xl font-black text-slate-900 tracking-tight">
                        <span className="flex items-baseline">
                          <IndianRupee
                            size={22}
                            className="self-center mr-0.5"
                          />
                          {nextPayment.toLocaleString("en-IN")}
                          <span className="text-xs font-medium text-slate-400 ml-1">
                            /month
                          </span>
                        </span>
                      </h3>
                    </div>
                    <div className="p-2.5 bg-amber-50 text-amber-600 rounded-xl">
                      <HandCoins size={20} />
                    </div>
                  </div>
                </div>

                {/* Interactive Loan commitments table list */}
                <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
                  <div className="px-6 py-5 border-b border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                    <div>
                      <h3 className="font-black text-slate-900 tracking-tight">
                        Loan Commitments
                      </h3>
                      <p className="text-slate-400 text-xs mt-0.5">
                        Active financing pipelines and verified compliance statuses.
                      </p>
                    </div>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm border-collapse">
                      <thead>
                        <tr className="bg-slate-50 border-b border-slate-200 text-slate-400 text-xs font-bold uppercase tracking-wider">
                          <th className="py-3 px-6">Loan Reference ID</th>
                          <th className="py-3 px-6">Structured Loan Type</th>
                          <th className="py-3 px-6">Capital Offering</th>
                          <th className="py-3 px-6">Origination Date</th>
                          <th className="py-3 px-6">Underwriting State</th>
                          <th className="py-3 px-6 text-right">Legal Documents</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                        {loans.map((loan) => (
                          <tr key={loan.id} className="hover:bg-slate-50/60 transition-colors">
                            <td className="py-4 px-6 text-slate-900 font-bold font-mono text-xs">
                              {loan.id}
                            </td>
                            <td className="py-4 px-6">{loan.type}</td>
                            <td className="py-4 px-6 text-slate-900 font-bold">
                              <span className="flex items-center">
                                <IndianRupee size={13} className="mr-0.5" />
                                {Number(loan.amount).toLocaleString("en-IN")}
                              </span>
                            </td>
                            <td className="py-4 px-6 text-slate-400 text-xs">{loan.date}</td>
                            <td className="py-4 px-6">
                              <span
                                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold ${
                                  loan.status === "Disbursed" || loan.status === "Approved"
                                    ? "bg-emerald-50 text-emerald-700"
                                    : "bg-amber-50 text-amber-700"
                                }`}
                              >
                                <span
                                  className={`w-1.5 h-1.5 rounded-full ${
                                    loan.status === "Disbursed" || loan.status === "Approved"
                                      ? "bg-emerald-500"
                                      : "bg-amber-500"
                                  }`}
                                />
                                {loan.status}
                              </span>
                            </td>
                            <td className="py-4 px-6 text-right">
                              {loan.status === "Disbursed" || loan.status === "Approved" ? (
                                <button
                                  onClick={() => handleDownloadAgreement(loan.id)}
                                  className="inline-flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-3 py-1.5 rounded-lg transition-all active:scale-95"
                                >
                                  <FileText size={12} />
                                  <span>Get Agreement</span>
                                </button>
                              ) : (
                                <span className="text-xs text-slate-400 italic">
                                  Reviewing Terms
                                </span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </>
            )
          ) : (
            /* Fallback screen when no user is logged in */
            <div className="flex flex-col items-center justify-center py-20 text-center max-w-md mx-auto space-y-4">
              <div className="p-4 bg-slate-100 text-slate-400 rounded-full">
                <LogOut size={40} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Logged Out Securely</h3>
              <p className="text-sm text-slate-500">
                You must be authenticated to view your active financial capital details.
              </p>
              <button
                onClick={handleLoginSimulation}
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm px-5 py-2.5 rounded-xl transition-all shadow-md active:scale-95"
              >
                <LogIn size={16} />
                <span>Simulate Login</span>
              </button>
            </div>
          )}
        </main>
      </div>

      {/* --- REUSABLE DYNAMIC PROFILE UPDATE MODAL OVERLAY --- */}
      {isProfileModalOpen && user && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-fade-in">
          <div className="bg-white border border-slate-200 shadow-2xl rounded-2xl w-full max-w-md overflow-hidden relative p-6 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-2">
                <User size={18} className="text-emerald-600" />
                <h3 className="font-black text-slate-900 text-lg tracking-tight">
                  Update Profile Identity
                </h3>
              </div>
              <button 
                onClick={() => setIsProfileModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-lg"
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleUpdateProfile} className="space-y-4">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                  Full Name
                </label>
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  className="w-full border border-slate-200 px-4 py-2.5 rounded-xl text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all bg-slate-50"
                  placeholder="Enter dynamic profile name..."
                  autoFocus
                />
              </div>

              <div className="flex justify-end items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsProfileModalOpen(false)}
                  className="px-4 py-2 text-xs font-bold text-slate-500 hover:bg-slate-100 rounded-xl transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl shadow-md transition-all active:scale-95"
                >
                  Save Dynamic Updates
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}