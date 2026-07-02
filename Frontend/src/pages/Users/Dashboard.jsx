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
} from "lucide-react";

export default function LoanDashboard() {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");

  // Dynamic User State (Simulating an active auth session)
  const [user, setUser] = useState({
    name: "Nitish Kumar",
    initials: "NK",
    role: "Premium Borrower",
  });

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

  // Handle PDF Generation Simulation for Loan Agreements
  const handleDownloadAgreement = (loanId) => {
    console.log(`Triggering generatePdf FromHtml for loan agreement: ${loanId}`);
    alert(`Generating your CavnerFintech Loan Agreement & Disclosure PDF...`);
  };

  // Handle Logout Event
  const handleLogout = async () => {
    try {
      // Changed method to POST since mutations like logging out should avoid GET requests
      const response = await fetch("http://localhost:3000/api/auth/logout", {
        method: "POST", 
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Logout request failed on server");
      }

      const data = await response.json();
      console.log(data);

      setUser(null);
      navigate("/login");
    } catch (error) {
      console.error("LogOut Error", error);
      alert(error.message || "LogOut failed");
    }
  };

  // Handle Login Simulation (To test moving between states easily)
  const handleLoginSimulation = () => {
    setUser({
      name: "Nitish Kumar",
      initials: "NK",
      role: "Premium Borrower",
    });
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

          {/* User Account / Logout Action conditional rendering */}
          <div className="flex items-center gap-6">
            {user ? (
              <>
                <div className="flex items-center gap-3 border-r border-slate-200 pr-4">
                  <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-emerald-600 border border-slate-200">
                    {user.initials}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900 leading-none">
                      {user.name}
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

                {/* Interactive Performance/Sessions list */}
                <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
                  <div className="px-6 py-5 border-b border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                    <div>
                      <h3 className="font-black text-slate-900 tracking-tight">
                        Loan Commitments
                      </h3>
                      <p className="text-slate-400 text-xs mt-0.5">
                        Active financing pipelines and verified compliance
                        statuses.
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
                          <th className="py-3 px-6 text-right">
                            Legal Documents
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                        {loans.map((loan) => (
                          <tr
                            key={loan.id}
                            className="hover:bg-slate-50/60 transition-colors"
                          >
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
                            <td className="py-4 px-6 text-slate-400 text-xs">
                              {loan.date}
                            </td>
                            <td className="py-4 px-6">
                              <span
                                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold ${
                                  loan.status === "Disbursed" ||
                                  loan.status === "Approved"
                                    ? "bg-emerald-50 text-emerald-700"
                                    : "bg-amber-50 text-amber-700"
                                }`}
                              >
                                <span
                                  className={`w-1.5 h-1.5 rounded-full ${
                                    loan.status === "Disbursed" ||
                                    loan.status === "Approved"
                                      ? "bg-emerald-500"
                                      : "bg-amber-500"
                                  }`}
                                />
                                {loan.status}
                              </span>
                            </td>
                            <td className="py-4 px-6 text-right">
                              {loan.status === "Disbursed" ||
                              loan.status === "Approved" ? (
                                <button
                                  onClick={() =>
                                    handleDownloadAgreement(loan.id)
                                  }
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
              <h3 className="text-xl font-bold text-slate-900">
                Logged Out Securely
              </h3>
              <p className="text-sm text-slate-500">
                You must be authenticated to view your active financial capital
                details.
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
    </div>
  );
}