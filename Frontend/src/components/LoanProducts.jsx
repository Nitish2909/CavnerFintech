import React, { useState } from "react";
import {
  Briefcase,
  User,
  Home,
  GraduationCap,
  Car,
  CreditCard,
  ShieldCheck,
  Building2,
  ArrowRight,
  Coins,
  Bike,
  Store,
  HeartPulse,
  X,
  Upload,
  CheckCircle2,
  TrendingUp,
  Percent,
  Sprout,
  Hammer,
  HelpCircle
} from "lucide-react";

// Expanded product list with individual realistic interest rates
const products = [
  {
    name: "Business Loan",
    rate: "11.25% p.a.",
    Icon: Briefcase,
    color: "#f7941d",
    bg: "rgba(247,148,29,0.12)",
  },
  {
    name: "Personal Loan",
    rate: "10.49% p.a.",
    Icon: User,
    color: "#2bb673",
    bg: "rgba(43,182,115,0.12)",
  },
  {
    name: "Home Loan",
    rate: "8.40% p.a.",
    Icon: Home,
    color: "#3b82f6",
    bg: "rgba(59,130,246,0.12)",
  },
  {
    name: "Education Loan",
    rate: "9.15% p.a.",
    Icon: GraduationCap,
    color: "#f5b400",
    bg: "rgba(245,180,0,0.15)",
  },
  {
    name: "Credit Card",
    rate: "1.99% per month",
    Icon: CreditCard,
    color: "#e63946",
    bg: "rgba(230,57,70,0.12)",
  },
  {
    name: "Car Loan",
    rate: "8.75% p.a.",
    Icon: Car,
    color: "#8b5cf6",
    bg: "rgba(139,92,246,0.12)",
  },
  {
    name: "Loan Against Security",
    rate: "9.50% p.a.",
    Icon: ShieldCheck,
    color: "#0e2a35",
    bg: "rgba(14,42,53,0.08)",
  },
  {
    name: "Loan Against Property",
    rate: "9.20% p.a.",
    Icon: Building2,
    color: "#f7941d",
    bg: "rgba(247,148,29,0.12)",
  },
  {
    name: "Gold Loan",
    rate: "7.90% p.a.",
    Icon: Coins,
    color: "#f5b400",
    bg: "rgba(245,180,0,0.15)",
  },
  {
    name: "Two Wheeler Loan",
    rate: "11.50% p.a.",
    Icon: Bike,
    color: "#8b5cf6",
    bg: "rgba(139,92,246,0.12)",
  },
  {
    name: "MSME Micro Loan",
    rate: "12.00% p.a.",
    Icon: Store,
    color: "#2bb673",
    bg: "rgba(43,182,115,0.12)",
  },
  {
    name: "Medical Loan",
    rate: "10.99% p.a.",
    Icon: HeartPulse,
    color: "#e63946",
    bg: "rgba(230,57,70,0.12)",
  },
  {
    name: "Startup Capital Loan",
    rate: "13.50% p.a.",
    Icon: TrendingUp,
    color: "#f7941d",
    bg: "rgba(247,148,29,0.12)",
  },
  {
    name: "Agricultural Loan",
    rate: "7.10% p.a.",
    Icon: Sprout,
    color: "#2bb673",
    bg: "rgba(43,182,115,0.12)",
  },
  {
    name: "Equipment & Machinery",
    rate: "10.15% p.a.",
    Icon: Hammer,
    color: "#3b82f6",
    bg: "rgba(59,130,246,0.12)",
  },
  {
    name: "Flexi Line of Credit",
    rate: "12.40% p.a.",
    Icon: Percent,
    color: "#0e2a35",
    bg: "rgba(14,42,53,0.08)",
  }
];

export default function LoanProducts() {
  const [selectedLoan, setSelectedLoan] = useState(null);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    amount: "",
    employmentType: "Salaried",
    monthlyIncome: "",
  });

  const [documents, setDocuments] = useState({
    panCard: null,
    aadhaarCard: null,
    incomeProof: null,
  });

  const handleOpenForm = (e, loanName) => {
    e.preventDefault();
    setSelectedLoan(loanName);
  };

  const handleCloseForm = () => {
    setSelectedLoan(null);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      amount: "",
      employmentType: "Salaried",
      monthlyIncome: "",
    });
    setDocuments({ panCard: null, aadhaarCard: null, incomeProof: null });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      setDocuments((prev) => ({ ...prev, [name]: files[0] }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Transmission Complete! Form data and documents compiled successfully for your requested ${selectedLoan}.`
    );
    handleCloseForm();
  };

  return (
    <section id="loans" className="py-12 md:py-20 w-full max-w-[1280px] mx-auto px-4 md:px-8 relative">
      
      {/* Section Head */}
      <div className="text-center max-w-[40rem] mx-auto mb-10 md:mb-14">
        <p className="text-[0.72rem] md:text-[0.75rem] tracking-[0.15em] uppercase font-bold text-[#f7941d]">
          Online loan options
        </p>
        <h2 className="mt-2 text-[1.65rem] sm:text-[2.25rem] md:text-[2.5rem] font-bold tracking-tight leading-[1.15] text-[#0e2a35]">
          Affordable Instant Loans{" "}
          <span className="block sm:inline bg-gradient-to-r from-[#f7941d] to-[#e63946] bg-clip-text text-transparent">
            with Quick Approval
          </span>
        </h2>
        <p className="mt-3.5 text-sm md:text-base text-[#6b7b82] leading-[1.5]">
          Compare loan products from 300+ trusted lenders. Minimal documents,
          fast verification, and flexible repayment plans tailored to your needs.
        </p>
      </div>

      {/* Products Grid - Modified to handle 1 to 4 responsive column steps smoothly */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
        {products.map(({ name, rate, Icon, color, bg }) => (
          <button
            onClick={(e) => handleOpenForm(e, name)}
            key={name}
            className="group relative text-left overflow-hidden rounded-[22px] border border-[#e8e6e0] bg-white p-5 md:p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_40px_-10px_rgba(14,42,53,0.15)]"
          >
            {/* Product Icon */}
            <div
              className="w-12 h-12 md:w-14 md:h-14 rounded-[14px] grid place-items-center mb-4 md:mb-5 shrink-0"
              style={{ background: bg, color }}
            >
              <Icon className="w-6 h-6" />
            </div>

            {/* Content */}
            <div className="mb-8">
              <h3 className="text-[1.05rem] md:text-[1.1rem] font-bold tracking-tight leading-[1.2] text-[#0e2a35]">
                {name}
              </h3>
              <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-50 border border-slate-100 text-[11px] font-bold text-slate-600">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                From {rate}
              </div>
            </div>

            {/* Bottom Call to Action Elements */}
            <div className="absolute bottom-5 left-5 md:left-6 right-5 md:right-6 flex items-center justify-between pointer-events-none">
              <span className="inline-flex items-center gap-1 text-[0.82rem] font-bold text-[#f7941d] transition-all duration-200 group-hover:translate-x-1">
                Apply now <ArrowRight size={13} />
              </span>
            </div>

            {/* Background Blob decoration */}
            <div
              className="absolute -bottom-10 -right-10 w-[120px] h-[120px] rounded-full opacity-20 blur-2xl transition-opacity duration-200 group-hover:opacity-40 pointer-events-none"
              style={{ background: bg }}
            />
          </button>
        ))}
      </div>

      {/* --- RESPONSIVE UNDERWRITING MODAL --- */}
      {selectedLoan && (
        <div className="fixed inset-0 bg-[#0e2a35]/60 backdrop-blur-xs z-[9999] flex items-end sm:items-center justify-center p-0 sm:p-4 animate-in fade-in duration-200">
          <div className="bg-white w-full sm:max-w-xl max-h-[92vh] sm:max-h-[88vh] rounded-t-[24px] sm:rounded-[24px] border border-[#e8e6e0] flex flex-col overflow-hidden shadow-[0_24px_60px_rgba(14,42,53,0.3)] relative animate-in slide-in-from-bottom-8 sm:zoom-in-95 duration-250">
            
            {/* Header Layout */}
            <div className="p-5 md:p-6 bg-white border-b border-slate-100 flex items-center justify-between shrink-0">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#f7941d]">
                  Underwriting Pipeline
                </span>
                <h3 className="text-base md:text-lg font-bold text-[#0e2a35] truncate max-w-[280px] sm:max-w-md">
                  Application: {selectedLoan}
                </h3>
              </div>
              <button
                onClick={handleCloseForm}
                className="p-2 text-[#6b7b82] hover:text-[#e63946] rounded-full hover:bg-slate-50 transition-all focus:outline-none"
              >
                <X size={20} />
              </button>
            </div>

            {/* Scrollable Form Body container */}
            <form
              onSubmit={handleSubmit}
              className="p-5 md:p-6 space-y-5 overflow-y-auto flex-1 text-left bg-slate-50/50 dashboard-scrollbar"
            >
              {/* Profile Parameters Card */}
              <div className="bg-white p-4 md:p-5 rounded-xl border border-slate-200/60 shadow-xs space-y-4">
                <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-2">
                  1. Profile Parameters
                </h4>

                <div className="space-y-3.5">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 transition-all placeholder:text-slate-400"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@firm.com"
                        className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 transition-all placeholder:text-slate-400"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                        Mobile Interface
                      </label>
                      <input
                        type="tel"
                        required
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 00000 00000"
                        className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 transition-all placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                        Required Principal (₹)
                      </label>
                      <input
                        type="number"
                        required
                        name="amount"
                        value={formData.amount}
                        onChange={handleChange}
                        placeholder="e.g. 500000"
                        className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 transition-all placeholder:text-slate-400"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                        Classification Class
                      </label>
                      <select
                        name="employmentType"
                        value={formData.employmentType}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 transition-all"
                      >
                        <option value="Salaried">Salaried Corporate</option>
                        <option value="Self-Employed">Self-Employed Proprietor</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                      Net Monthly Earnings (₹)
                    </label>
                    <input
                      type="number"
                      required
                      name="monthlyIncome"
                      value={formData.monthlyIncome}
                      onChange={handleChange}
                      placeholder="e.g. 75000"
                      className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 transition-all placeholder:text-slate-400"
                    />
                  </div>
                </div>
              </div>

              {/* Digital Identity Attachments Card */}
              <div className="bg-white p-4 md:p-5 rounded-xl border border-slate-200/60 shadow-xs space-y-3">
                <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-2">
                  2. Digital Identity Assets
                </h4>

                <div className="space-y-2.5">
                  <FileRow
                    label="PAN Card Verification File"
                    name="panCard"
                    file={documents.panCard}
                    onChange={handleFileChange}
                  />
                  <FileRow
                    label="Aadhaar File Vault (Combined Graphic/PDF)"
                    name="aadhaarCard"
                    file={documents.aadhaarCard}
                    onChange={handleFileChange}
                  />
                  <FileRow
                    label="Income Ledger Statement (Past 3 Months)"
                    name="incomeProof"
                    file={documents.incomeProof}
                    onChange={handleFileChange}
                  />
                </div>
              </div>

              {/* Bottom Sticky Footer Action Controls */}
              <div className="pt-2 pb-4 sm:pb-0 flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-end gap-2.5 shrink-0 border-t border-slate-100 sm:border-none">
                <button
                  type="button"
                  onClick={handleCloseForm}
                  className="px-4 py-2.5 text-xs font-bold text-slate-500 hover:text-slate-800 transition-colors text-center"
                >
                  Discard Action
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 text-xs font-bold bg-slate-950 hover:bg-slate-900 text-white rounded-xl transition-all shadow-md active:scale-[0.98] text-center"
                >
                  Finalize & Dispatch Application
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

// Rewritten FileRow to gracefully adapt layouts on mobile displays
function FileRow({ label, name, file, onChange }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200/70 transition-colors">
      <div className="min-w-0 flex-1">
        <span className="block text-[11px] font-bold text-slate-700 leading-tight tracking-tight truncate">
          {label}
        </span>
        {file ? (
          <span className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1 mt-1 truncate">
            <CheckCircle2 size={12} className="shrink-0" /> {file.name}
          </span>
        ) : (
          <span className="text-[10px] text-slate-400 italic block mt-0.5">
            No asset staged
          </span>
        )}
      </div>
      <label className="shrink-0 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 hover:border-slate-300 text-slate-600 hover:text-slate-900 rounded-lg text-xs font-semibold cursor-pointer shadow-xs transition-all select-none w-full sm:w-auto">
        <Upload size={12} />
        <span>Browse</span>
        <input
          type="file"
          name={name}
          onChange={onChange}
          className="hidden"
          accept=".pdf,image/*"
        />
      </label>
    </div>
  );
}