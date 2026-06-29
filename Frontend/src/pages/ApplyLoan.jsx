import React, { useState } from "react";
import {
  Briefcase,
  Home,
  Shield,
  DollarSign,
  Award,
  Truck,
  Car,
  GraduationCap,
  PenTool,
  Zap,
  FileText,
  CheckCircle,
  Percent,
  Clock,
  EyeOff,
  Laptop,
  X,
  Upload,
  FileCheck,
  ArrowRight,
} from "lucide-react";

const ApplyLoan = () => {
  const [selectedLoan, setSelectedLoan] = useState(null);

  const products = [
    {
      icon: <DollarSign className="w-6 h-6 text-amber-500" />,
      title: "Personal Loan",
      desc: "Compare and Apply Personal Loan Online",
    },
    {
      icon: <Briefcase className="w-6 h-6 text-teal-500" />,
      title: "Business Loans",
      desc: "Get A Business Loan for Business Growth",
    },
    {
      icon: <Home className="w-6 h-6 text-amber-600" />,
      title: "Home Loan",
      desc: "Apply Online Home Loan and Fulfill your Desire",
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-500" />,
      title: "Loan Against Property",
      desc: "Loan Against Property, Avail Property Loan",
    },
    {
      icon: <Award className="w-6 h-6 text-indigo-400" />,
      title: "Loan against Security",
      desc: "Apply for Loan against Securities Online",
    },
    {
      icon: <DollarSign className="w-6 h-6 text-yellow-500" />,
      title: "Gold Loan",
      desc: "Apply For Gold Loan Online-Get Instant Loan",
    },
    {
      icon: <Truck className="w-6 h-6 text-red-500" />,
      title: "Heavy Vehicle Loan",
      desc: "Apply for Commercial Vehicle Loan Online",
    },
    {
      icon: <Car className="w-6 h-6 text-blue-400" />,
      title: "New Car Loan",
      desc: "Apply for New Car Loan Online",
    },
    {
      icon: <Car className="w-6 h-6 text-red-400" />,
      title: "Used Car Loan",
      desc: "Apply for Used Car Loan Online",
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-slate-400" />,
      title: "Education Loan",
      desc: "Apply for Education Loan Online",
    },
    {
      icon: <PenTool className="w-6 h-6 text-orange-500" />,
      title: "Equipment Loan",
      desc: "Apply for Equipment Loan Online",
    },
    {
      icon: <Zap className="w-6 h-6 text-emerald-500" />,
      title: "E-Rickshaw Electric",
      desc: "Apply online for E-Rickshaw Electric Vehicle",
    },
    {
      icon: <FileText className="w-6 h-6 text-blue-600" />,
      title: "CGTMSE Loan",
      desc: "Get a Business Loan Under CGTMSE Scheme",
    },
    {
      icon: <Home className="w-6 h-6 text-yellow-600" />,
      title: "Working Capital",
      desc: "Apply Online Working Capital Loan for Instant",
    },
  ];

  const steps = [
    {
      id: "01",
      title: "Explore Options",
      desc: "Visit our digital matches to explore dynamic loan options curated specifically for your profile assets.",
    },
    {
      id: "02",
      title: "Select & Apply",
      desc: "Once you shortlist your ideal financing framework, instantly complete our intuitive match portal application.",
    },
    {
      id: "03",
      title: "Verify Securely",
      desc: "Upload mandatory identity confirmation tokens completely digitally through encrypted high-speed transfer networks.",
    },
    {
      id: "04",
      title: "Instant Disbursement",
      desc: "Experience seamless automation loops as your loan executes fast-track validation and routing paths safely.",
    },
  ];

  return (
    <div className="w-full bg-slate-50 font-sans text-slate-800 antialiased relative">
      {/* SECTION 1: Our Products */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-amber-500 uppercase bg-amber-500/10 px-3 py-1.5 rounded-full inline-block mb-3">
            Financial Suite
          </span>
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
            Types of Loans We Provide
          </h2>
          <p className="mt-4 text-base text-slate-500 max-w-xl mx-auto">
            Select a tailored financial solution designed around secure
            parameters and dynamic capital deployments.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {products.map((prod, idx) => (
            <ProductCard
              key={idx}
              {...prod}
              onClick={() => setSelectedLoan(prod.title)}
            />
          ))}
        </div>
      </section>

      {/* SECTION 2: Lifestyle & Value Props */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="max-w-[380px] w-full aspect-[4/5] relative bg-slate-100 rounded-3xl p-4 shadow-xl border border-slate-200/40 overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 via-transparent to-blue-500/5 mix-blend-multiply" />
              <img
                src="https://storage.referloan.in/share/QhawcapJMQLWKhKY"
                alt="Lifestyle Loan Finder"
                className="w-full h-full object-cover rounded-2xl select-none pointer-events-none transform transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-2.5 py-1 bg-blue-50 border border-blue-100 rounded-md text-blue-600 text-xs font-semibold tracking-wide uppercase">
                Premium Ecosystem
              </span>
            </div>
            <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl mb-6">
              Lending Architecture Reimagined Around You
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
              <div className="p-6 bg-white border border-slate-200/60 shadow-xs rounded-2xl hover:border-slate-300 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center mb-4 text-orange-600">
                  <Percent className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 mb-1.5 text-base">
                  Competitive Rates
                </h4>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Access optimal premium baseline interest rates tailored
                  precisely to preserve project yield lines.
                </p>
              </div>

              <div className="p-6 bg-white border border-slate-200/60 shadow-xs rounded-2xl hover:border-slate-300 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-4 text-blue-600">
                  <Clock className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 mb-1.5 text-base">
                  Accelerated Velocity
                </h4>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Bypass classic wait cycles entirely via real-time validation
                  checks processing transfers in micro-windows.
                </p>
              </div>

              <div className="p-6 bg-white border border-slate-200/60 shadow-xs rounded-2xl hover:border-slate-300 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-pink-50 flex items-center justify-center mb-4 text-pink-600">
                  <EyeOff className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 mb-1.5 text-base">
                  Zero Obfuscation
                </h4>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Absolute computational clarity with explicitly documented
                  parameters—completely clear of hidden premiums.
                </p>
              </div>

              <div className="p-6 bg-white border border-slate-200/60 shadow-xs rounded-2xl hover:border-slate-300 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center mb-4 text-emerald-600">
                  <Laptop className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 mb-1.5 text-base">
                  E2E Digital Gateway
                </h4>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Execute, sign, verify, and complete parameters completely
                  inside our securely isolated cloud web engine.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Work Process & Top Lenders */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-xs font-bold tracking-widest text-amber-400 uppercase bg-white/5 border border-white/10 px-3 py-1.5 rounded-full inline-block mb-3">
              Operational Roadmap
            </span>
            <h3 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">
              The Path to Seamless Liquidity Access
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Step Pipeline Block */}
            <div className="lg:col-span-5 space-y-6 relative">
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  className="flex gap-5 p-5 rounded-2xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.04] transition-all duration-300"
                >
                  <div className="text-xl font-black text-amber-400/80 tracking-tight shrink-0 mt-0.5">
                    {step.id}
                  </div>
                  <div>
                    <h5 className="font-bold text-base text-white mb-1">
                      {step.title}
                    </h5>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Premium Lenders Interface Board */}
            <div className="lg:col-span-7 bg-slate-950/60 border border-white/[0.08] p-8 rounded-3xl relative backdrop-blur-md shadow-2xl">
              <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

              <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-5">
                <div>
                  <h4 className="text-base font-bold text-white tracking-tight">
                    Institutional Syndicate Core
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Real-time parameters updated dynamically
                  </p>
                </div>
                <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-md uppercase tracking-wider">
                  Live Spreads
                </span>
              </div>

              <div className="space-y-4">
                {/* Lender Item 1 */}
                <div className="grid grid-cols-2 sm:grid-cols-4 items-center bg-white/[0.02] border border-white/[0.04] hover:border-white/[0.1] rounded-xl p-4 gap-4 transition-all">
                  <div className="font-bold text-slate-200 tracking-wide text-sm">
                    HDFC BANK
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-400">
                      Joining Processing
                    </div>
                    <div className="text-sm font-bold text-amber-400 mt-0.5">
                      ₹199{" "}
                      <span className="text-[10px] text-slate-500">
                        onwards
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-400">
                      Annual Base
                    </div>
                    <div className="text-sm font-bold text-slate-200 mt-0.5">
                      ₹500
                    </div>
                  </div>
                  <div className="sm:text-right">
                    <div className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md inline-block">
                      750+ Tier 1
                    </div>
                  </div>
                </div>

                {/* Lender Item 2 */}
                <div className="grid grid-cols-2 sm:grid-cols-4 items-center bg-white/[0.02] border border-white/[0.04] hover:border-white/[0.1] rounded-xl p-4 gap-4 transition-all">
                  <div className="font-bold text-red-400 tracking-wide text-sm uppercase">
                    Kotak Mahindra
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-400">
                      Joining Processing
                    </div>
                    <div className="text-sm font-bold text-amber-400 mt-0.5">
                      ₹0{" "}
                      <span className="text-[10px] text-slate-500">
                        Promo Waiver
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-400">
                      Annual Base
                    </div>
                    <div className="text-sm font-bold text-slate-200 mt-0.5">
                      ₹299
                    </div>
                  </div>
                  <div className="sm:text-right">
                    <div className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md inline-block">
                      720+ Tier 1
                    </div>
                  </div>
                </div>

                {/* Lender Item 3 */}
                <div className="grid grid-cols-2 sm:grid-cols-4 items-center bg-white/[0.02] border border-white/[0.04] hover:border-white/[0.1] rounded-xl p-4 gap-4 transition-all">
                  <div className="font-bold text-orange-400 tracking-wide text-sm">
                    ICICI BANK
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-400">
                      Joining Processing
                    </div>
                    <div className="text-sm font-bold text-amber-400 mt-0.5">
                      ₹499
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-400">
                      Annual Base
                    </div>
                    <div className="text-sm font-bold text-slate-200 mt-0.5">
                      ₹0{" "}
                      <span className="text-[10px] text-slate-500">Waived</span>
                    </div>
                  </div>
                  <div className="sm:text-right">
                    <div className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md inline-block">
                      740+ Tier 1
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONDITIONAL MODAL FORM LAYER */}
      {selectedLoan && (
        <LoanFormModal
          loanTitle={selectedLoan}
          onClose={() => setSelectedLoan(null)}
        />
      )}
    </div>
  );
};

const ProductCard = ({ icon, title, desc, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-white border border-slate-200/70 rounded-2xl p-5 text-left flex flex-col justify-between hover:shadow-xl hover:shadow-slate-200/50 hover:border-slate-300 transition-all duration-300 ease-out cursor-pointer h-48 group relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50 rounded-bl-full -mr-4 -mt-4 transition-colors group-hover:bg-amber-500/5" />

      <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:shadow-md group-hover:shadow-slate-100">
        {icon}
      </div>

      <div className="mt-4">
        <h4 className="font-bold text-base text-slate-900 group-hover:text-amber-600 transition-colors tracking-tight flex items-center gap-1">
          {title}
          <ArrowRight
            size={14}
            className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
          />
        </h4>
        <p className="text-xs text-slate-400 font-medium leading-relaxed mt-1.5 line-clamp-2">
          {desc}
        </p>
      </div>
    </div>
  );
};

// MODAL COMPONENT: Features text input forms along with identity document file triggers
const LoanFormModal = ({ loanTitle, onClose }) => {
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      setDocuments((prev) => ({ ...prev, [name]: files[0] }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const submissionData = new FormData();
    Object.keys(formData).forEach((key) =>
      submissionData.append(key, formData[key]),
    );
    submissionData.append("loanType", loanTitle);
    if (documents.panCard) submissionData.append("panCard", documents.panCard);
    if (documents.aadhaarCard)
      submissionData.append("aadhaarCard", documents.aadhaarCard);
    if (documents.incomeProof)
      submissionData.append("incomeProof", documents.incomeProof);

    alert(
      `Application securely queued for ${loanTitle}! Check logs for payload metadata.`,
    );
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/40 p-4 backdrop-blur-sm transition-opacity">
      <div className="bg-white rounded-3xl w-full max-w-xl overflow-hidden shadow-2xl relative border border-slate-100 flex flex-col max-h-[92vh] transform transition-transform animate-in fade-in zoom-in-95 duration-200">
        {/* Header Block */}
        <div className="bg-slate-950 p-6 flex justify-between items-center shrink-0 border-b border-white/5">
          <div>
            <span className="text-[10px] uppercase tracking-widest bg-amber-400 text-slate-950 px-2.5 py-1 rounded-md font-extrabold shadow-sm">
              Vault Secure Link
            </span>
            <h3 className="text-xl font-bold mt-2 text-white tracking-tight">
              Setup {loanTitle} Application
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-all"
          >
            <X size={18} />
          </button>
        </div>

        {/* Scrollable Form Workspace */}
        <form
          onSubmit={handleSubmit}
          className="p-6 space-y-6 overflow-y-auto flex-1 text-left bg-slate-50/50"
        >
          {/* Subsection 1: Personal Details */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-xs space-y-4">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-2">
              1. Profile Parameters
            </h4>

            <div className="space-y-3">
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                    <option value="Self-Employed">
                      Self-Employed Proprietor
                    </option>
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

          {/* Subsection 2: Document File Upload Grid Zone */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-xs space-y-3">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-2">
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

          {/* Submission Layer Footer */}
          <div className="pt-2 flex items-center justify-end gap-3 shrink-0">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 text-xs font-bold text-slate-500 hover:text-slate-800 transition-colors"
            >
              Discard Action
            </button>
            <button
              type="submit"
              className="px-6 py-3 text-xs font-bold bg-slate-950 hover:bg-slate-900 text-white rounded-xl transition-all shadow-md active:scale-[0.98]"
            >
              Finalize & Dispatch Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// UI Row Sub-component helper for managing single input document file configurations
const FileRow = ({ label, name, file, onChange }) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 border border-slate-200/70 rounded-xl bg-slate-50/50 gap-3 hover:border-slate-300 transition-colors">
      <div>
        <label className="block text-xs font-bold text-slate-800 tracking-tight">
          {label}
        </label>
        <span className="text-[10px] text-slate-400 block mt-0.5">
          Permitted formats: PDF, JPEG, PNG (Max 5MB)
        </span>
      </div>

      <div className="relative shrink-0">
        <input
          type="file"
          accept=".pdf, .jpg, .jpeg, .png"
          name={name}
          id={name}
          onChange={onChange}
          className="hidden"
        />
        <label
          htmlFor={name}
          className={`px-3.5 py-2 rounded-xl text-xs font-bold border transition-all flex items-center gap-2 cursor-pointer ${
            file
              ? "bg-emerald-500 text-white border-emerald-500 shadow-sm shadow-emerald-500/10"
              : "bg-white text-slate-700 border-slate-200 hover:border-slate-300 shadow-xs"
          }`}
        >
          {file ? (
            <>
              <FileCheck size={14} className="text-white" />
              <span className="max-w-[110px] truncate">{file.name}</span>
            </>
          ) : (
            <>
              <Upload size={14} className="text-slate-400" />
              <span>Attach File</span>
            </>
          )}
        </label>
      </div>
    </div>
  );
};

export default ApplyLoan;
