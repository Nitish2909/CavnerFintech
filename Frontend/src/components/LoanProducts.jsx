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
  CheckCircle2
} from "lucide-react";

const products = [
  { name: "Business Loan", cb: "Upto 2% Cash Back", Icon: Briefcase, color: "#f7941d", bg: "rgba(247,148,29,0.12)" },
  { name: "Personal Loan", cb: "Upto 2% Cash Back", Icon: User, color: "#2bb673", bg: "rgba(43,182,115,0.12)" },
  { name: "Home Loan", cb: "0.50% Cash Back", Icon: Home, color: "#3b82f6", bg: "rgba(59,130,246,0.12)" },
  { name: "Education Loan", cb: "0.50% Cash Back", Icon: GraduationCap, color: "#f5b400", bg: "rgba(245,180,0,0.15)" },
  { name: "Credit Card", cb: "Upto ₹1000 Cash Back", Icon: CreditCard, color: "#e63946", bg: "rgba(230,57,70,0.12)" },
  { name: "Car Loan", cb: "0.50% Cash Back", Icon: Car, color: "#8b5cf6", bg: "rgba(139,92,246,0.12)" },
  { name: "Loan Against Security", cb: "Upto 1% Cash Back", Icon: ShieldCheck, color: "#0e2a35", bg: "rgba(14,42,53,0.08)" },
  { name: "Loan Against Property", cb: "Upto 0.5% Cash Back", Icon: Building2, color: "#f7941d", bg: "rgba(247,148,29,0.12)" },
  { name: "Gold Loan", cb: "Instant Cash in 30 Mins", Icon: Coins, color: "#f5b400", bg: "rgba(245,180,0,0.15)" },
  { name: "Two Wheeler Loan", cb: "Super Low EMI Options", Icon: Bike, color: "#8b5cf6", bg: "rgba(139,92,246,0.12)" },
  { name: "MSME Micro Loan", cb: "No Collateral Needed", Icon: Store, color: "#2bb673", bg: "rgba(43,182,115,0.12)" },
  { name: "Medical Loan", cb: "Zero Percent Processing", Icon: HeartPulse, color: "#e63946", bg: "rgba(230,57,70,0.12)" },
];

export default function LoanProducts() {
  const [selectedLoan, setSelectedLoan] = useState(null);
  
  // Structured form parameter state bindings
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    amount: "",
    employmentType: "Salaried",
    monthlyIncome: ""
  });

  // Digital documentation asset reference tracking
  const [documents, setDocuments] = useState({
    panCard: null,
    aadhaarCard: null,
    incomeProof: null
  });

  const handleOpenForm = (e, loanName) => {
    e.preventDefault();
    setSelectedLoan(loanName);
  };

  const handleCloseForm = () => {
    setSelectedLoan(null);
    // Reset structural layers
    setFormData({ fullName: "", email: "", phone: "", amount: "", employmentType: "Salaried", monthlyIncome: "" });
    setDocuments({ panCard: null, aadhaarCard: null, incomeProof: null });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      setDocuments(prev => ({ ...prev, [name]: files[0] }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Transmission Complete! Form data and documents compiled successfully for your requested ${selectedLoan}.`);
    handleCloseForm();
  };

  return (
    <section id="loans" className="py-20 w-full max-w-[1280px] mx-auto px-4 md:px-8 relative">
      {/* Section Head */}
      <div className="text-center max-w-[40rem] mx-auto mb-12">
        <p className="text-[0.75rem] tracking-[0.15em] uppercase font-bold text-[#f7941d]">
          Online loan options
        </p>
        <h2 className="mt-3 text-[clamp(1.875rem,3.5vw,2.5rem)] font-bold tracking-tight leading-[1.1] text-[#0e2a35]">
          Affordable Instant Loans{" "}
          <span className="bg-gradient-to-r from-[#f7941d] to-[#e63946] bg-clip-text text-transparent">
            with Quick Approval
          </span>
        </h2>
        <p className="mt-4 text-[#6b7b82] leading-[1.5]">
          Compare loan products from 300+ trusted lenders. Minimal documents, fast
          verification, and flexible repayment plans tailored to your needs.
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {products.map(({ name, cb, Icon, color, bg }) => (
          <button
            onClick={(e) => handleOpenForm(e, name)}
            key={name}
            className="group relative text-left overflow-hidden rounded-[22px] border border-[#e8e6e0] bg-white p-6 transition-all duration-250 hover:-translate-y-1 hover:shadow-[0_12px_40px_-10px_rgba(14,42,53,0.18)]"
          >
            {/* Product Icon */}
            <div
              className="w-14 h-14 rounded-[14px] grid place-items-center mb-5"
              style={{ background: bg, color }}
            >
              <Icon size={26} />
            </div>

            {/* Content */}
            <h3 className="text-[1.1rem] font-bold tracking-tight leading-[1.1] text-[#0e2a35]" id={name}>
              {name}
            </h3>
            <p className="mt-1 text-[0.875rem] text-[#6b7b82]">{cb}</p>

            {/* Interactive Apply Now Trigger */}
            <span className="mt-5 inline-flex items-center gap-1 text-[0.875rem] font-semibold text-[#f7941d] opacity-0 -translate-x-2 transition-all duration-250 group-hover:opacity-1 group-hover:translate-x-0">
              Apply now <ArrowRight size={14} />
            </span>

            {/* Decorative Dynamic Blur Blob */}
            <div
              className="absolute -bottom-10 -right-10 w-[130px] h-[130px] rounded-full opacity-35 blur-2xl transition-opacity duration-250 group-hover:opacity-70 pointer-events-none"
              style={{ background: bg }}
            />
          </button>
        ))}
      </div>

      {/* --- MODAL DISPLAY HOUSING THE DESIRED ADVANCED FORM LAYOUT --- */}
      {selectedLoan && (
        <div className="fixed inset-0 bg-[#0e2a35]/60 backdrop-blur-sm z-[9999] flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-xl max-h-[90vh] rounded-[28px] border border-[#e8e6e0] flex flex-col overflow-hidden shadow-[0_24px_60px_rgba(14,42,53,0.25)] relative animate-in fade-in zoom-in-95 duration-200">
            
            {/* Shared Header Context Layer */}
            <div className="p-6 bg-white border-b border-slate-100 flex items-center justify-between shrink-0">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#f7941d]">Underwriting Pipeline</span>
                <h3 className="text-lg font-bold text-[#0e2a35]">Application: {selectedLoan}</h3>
              </div>
              <button 
                onClick={handleCloseForm}
                className="p-1.5 text-[#6b7b82] hover:text-[#e63946] rounded-full hover:bg-slate-50 transition-all"
              >
                <X size={20} />
              </button>
            </div>

            {/* Injected Requested Form Structure */}
            <form onSubmit={handleSubmit} className="p-6 space-y-6 overflow-y-auto flex-1 text-left bg-slate-50/50">
              
              {/* Subsection 1: Personal Details */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-xs space-y-4">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-2">
                  1. Profile Parameters
                </h4>
                
                <div className="space-y-3">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">Full Name</label>
                    <input 
                      type="text" required name="fullName" value={formData.fullName} onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 transition-all placeholder:text-slate-400"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">Email Address</label>
                      <input 
                        type="email" required name="email" value={formData.email} onChange={handleChange}
                        placeholder="john@firm.com"
                        className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 transition-all placeholder:text-slate-400"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">Mobile Interface</label>
                      <input 
                        type="tel" required name="phone" value={formData.phone} onChange={handleChange}
                        placeholder="+91 00000 00000"
                        className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 transition-all placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">Required Principal (₹)</label>
                      <input 
                        type="number" required name="amount" value={formData.amount} onChange={handleChange}
                        placeholder="e.g. 500000"
                        className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 transition-all placeholder:text-slate-400"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">Classification Class</label>
                      <select 
                        name="employmentType" value={formData.employmentType} onChange={handleChange}
                        className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 transition-all"
                      >
                        <option value="Salaried">Salaried Corporate</option>
                        <option value="Self-Employed">Self-Employed Proprietor</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">Net Monthly Earnings (₹)</label>
                    <input 
                      type="number" required name="monthlyIncome" value={formData.monthlyIncome} onChange={handleChange}
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
                  <FileRow label="PAN Card Verification File" name="panCard" file={documents.panCard} onChange={handleFileChange} />
                  <FileRow label="Aadhaar File Vault (Combined Graphic/PDF)" name="aadhaarCard" file={documents.aadhaarCard} onChange={handleFileChange} />
                  <FileRow label="Income Ledger Statement (Past 3 Months)" name="incomeProof" file={documents.incomeProof} onChange={handleFileChange} />
                </div>
              </div>

              {/* Submission Layer Footer */}
              <div className="pt-2 flex items-center justify-end gap-3 shrink-0">
                <button 
                  type="button" onClick={handleCloseForm}
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
      )}
    </section>
  );
}

// Inline File upload custom layout row handler
function FileRow({ label, name, file, onChange }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 bg-slate-50 rounded-xl border border-slate-150 transition-colors">
      <div className="min-w-0 flex-1">
        <span className="block text-[11px] font-bold text-slate-700 leading-tight tracking-tight truncate">{label}</span>
        {file ? (
          <span className="text-[11px] text-emerald-600 font-medium flex items-center gap-1 mt-0.5 truncate">
            <CheckCircle2 size={12} className="shrink-0" /> {file.name}
          </span>
        ) : (
          <span className="text-[10px] text-slate-400 italic">No asset staged</span>
        )}
      </div>
      <label className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 hover:border-slate-300 text-slate-600 hover:text-slate-900 rounded-lg text-xs font-semibold cursor-pointer shadow-xs transition-all select-none">
        <Upload size={12} />
        <span>Browse</span>
        <input type="file" name={name} onChange={onChange} className="hidden" accept=".pdf,image/*" />
      </label>
    </div>
  );
}