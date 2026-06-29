import React, { useState } from 'react';
import { 
  ShoppingBag, Award, Clapperboard, Layers, 
  Plane, HelpCircle, Fuel, ArrowLeft, ArrowRight,
  X, Upload, FileCheck, CheckCircle2, ShieldCheck, CreditCard as CardIcon
} from 'lucide-react';

const CreditCard = () => {
  const [selectedBank, setSelectedBank] = useState(null);

  // Category Quick Links
  const categories = [
    { icon: <ShoppingBag className="w-5 h-5 text-amber-500" />, label: 'Shopping Card' },
    { icon: <Award className="w-5 h-5 text-amber-500" />, label: 'Reward Card' },
    { icon: <Clapperboard className="w-5 h-5 text-amber-500" />, label: 'Entertainment' },
    { icon: <Layers className="w-5 h-5 text-amber-500" />, label: 'Co-branded' },
    { icon: <Plane className="w-5 h-5 text-amber-500" />, label: 'Travel Pass' },
    { icon: <HelpCircle className="w-5 h-5 text-amber-500" />, label: 'Lifetime-Free' },
    { icon: <Fuel className="w-5 h-5 text-amber-500" />, label: 'Fuel Max' },
  ];

  // Bank Data Table
  const cardData = [
    { bank: 'HDFC Bank Credit Card', fee: '₹499 + GST', income: 'Salaried: ₹20,000/mo | Self-Employed: ₹6 Lakhs/yr' },
    { bank: 'Kotak Bank Credit Card', fee: '₹500 onwards', income: 'Above ₹5 Lakhs/yr' },
    { bank: 'SBI Bank Card/Credit', fee: 'Varies by variant', income: 'Up to ₹3 Lakhs/yr' },
    { bank: 'Yes Bank Credit Card', fee: 'Varies by variant', income: 'Salaried: ₹25,000/mo | Self-Employed: ₹41,666/mo' },
    { bank: 'ICICI Bank Credit Card', fee: '₹500 + GST', income: 'Up to ₹2.5 Lakhs/yr' },
    { bank: 'Standard Chartered Card', fee: 'Varies by variant', income: 'Salaried: ₹27,500/mo | Self-Employed: ₹5 Lakhs/yr' },
    { bank: 'Axis Bank Credit Card', fee: 'Varies by variant', income: 'Salaried: ₹25,000/mo | Self-Employed: ₹6 Lakhs/yr' },
    { bank: 'IndusInd Bank Credit Card', fee: 'Varies by variant', income: 'Varies based on card variant' },
    { bank: 'AU Bank Credit Card', fee: '₹200 onwards', income: 'Varies based on card variant' },
  ];

  // How to Apply Steps
  const steps = [
    { id: '01', title: 'Compare Credit Cards', desc: 'Review premium features, reward points accrual metrics, and fee tiers side-by-side.' },
    { id: '02', title: 'Select Your Variant', desc: 'Choose the variant precisely matching your spending channels—whether travel multipliers or cashback.' },
    { id: '03', title: 'Instant Verification', desc: 'Complete your isolated digital application form safely and run verification hooks instantly.' },
    { id: '04', title: 'White-Glove Delivery', desc: 'Upon validation approval, your package drops securely packaged at your verified address.' }
  ];

  return (
    <div className="w-full bg-slate-50 font-sans text-slate-800 antialiased relative">
      
      {/* SECTION 1: Premium Hero Banner */}
      <section className="bg-gradient-to-b from-slate-950 to-slate-900 text-white py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <span className="text-xs font-bold tracking-widest text-amber-400 uppercase bg-amber-400/10 border border-amber-400/20 px-3 py-1.5 rounded-full inline-block mb-4">
              Premium Financial Tier
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Elevate Your Buying Power with <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">Exclusive Cards</span>
            </h1>
            <p className="text-slate-400 text-base max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8">
              Unlock refined purchasing channels, institutional points matrices, and global elite airport terminal credentials tailored to match your personal ecosystem.
            </p>
            <a href="#compare-matrix" className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs px-8 py-4 rounded-xl shadow-lg shadow-amber-500/10 transition-all inline-block uppercase tracking-wider active:scale-[0.98]">
              Explore Match Matrix
            </a>
          </div>

          {/* Right Hero Content: Premium Card Graphic */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-full max-w-[400px] aspect-[1.58/1] rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10 group">
              <img 
                src="https://images.unsplash.com/photo-1589758438368-0ad531db3366?auto=format&fit=crop&w=800&q=80" 
                alt="Elite Card Asset" 
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-5 left-6 right-6 flex justify-between items-end text-white">
                <div>
                  <div className="text-[10px] tracking-widest uppercase text-slate-400 font-bold">Infinite Member</div>
                  <div className="text-sm font-medium tracking-wider mt-1">NEXUS SIGNATURE</div>
                </div>
                <CardIcon className="w-8 h-8 text-amber-400/80" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Categories Filters */}
      <section className="py-20 max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
          Select Your Priority Vectors
        </h2>
        <p className="text-sm text-slate-500 max-w-2xl mx-auto mb-12 leading-relaxed">
          Filter and cross-examine cards engineered explicitly to feed cash returns into your core routine lifestyle habits.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
          {categories.map((cat, idx) => (
            <div key={idx} className="border border-slate-200 bg-white p-5 rounded-2xl flex flex-col items-center justify-center hover:shadow-xl hover:shadow-slate-100 hover:border-slate-300 transition-all cursor-pointer group">
              <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                {cat.icon}
              </div>
              <span className="text-xs font-bold text-slate-800 tracking-tight leading-tight">{cat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: Main Comparison Grid Data Table */}
      <section id="compare-matrix" className="py-12 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-slate-200">
          <div>
            <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">Syndicate Bank Catalog</h3>
            <p className="text-xs text-slate-400 mt-1">Live base metrics adjusted for current standard requirements</p>
          </div>
        </div>

        <div className="overflow-hidden bg-white border border-slate-200 shadow-sm rounded-2xl">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-xs">
              <thead>
                <tr className="bg-slate-950 text-slate-200 font-bold uppercase tracking-wider text-[10px] border-b border-slate-800">
                  <th className="p-4 pl-6">Issuer Institution</th>
                  <th className="p-4">Base Fee Standard</th>
                  <th className="p-4">Minimum Eligibility Threshold</th>
                  <th className="p-4 text-center pr-6">Action Gateway</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-slate-600">
                {cardData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-4 pl-6 font-bold text-slate-900 text-sm">{row.bank}</td>
                    <td className="p-4 text-slate-500">{row.fee}</td>
                    <td className="p-4 text-slate-500 max-w-xs sm:max-w-none truncate sm:whitespace-normal">{row.income}</td>
                    <td className="p-4 text-center pr-6">
                      <button 
                        onClick={() => setSelectedBank(row.bank)}
                        className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-2 px-5 rounded-xl text-[11px] tracking-wide shadow-xs transition-all active:scale-[0.97]"
                      >
                        Apply Now
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 4: Workflow Engine */}
      <section className="bg-slate-900 text-white py-24 border-t border-slate-800 mt-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-5">
            <span className="text-xs font-bold tracking-widest text-amber-400 uppercase bg-white/5 border border-white/10 px-3 py-1.5 rounded-full inline-block mb-3">
              Application Pipeline
            </span>
            <h3 className="text-3xl font-extrabold tracking-tight text-white mb-6">
              Accelerated Four-Stage Verification
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Our automated system coordinates with centralized underwriting modules directly to process your card issue request down to micro wait times.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {steps.map((step, idx) => (
              <div key={idx} className="bg-white/[0.02] border border-white/[0.06] p-6 rounded-2xl hover:border-white/[0.12] transition-colors group">
                <div className="text-lg font-black text-amber-400/40 mb-2 group-hover:text-amber-400 transition-colors">{step.id}</div>
                <h5 className="font-bold text-base text-white mb-1">{step.title}</h5>
                <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* APPLICATION WIZARD MODAL COMPONENT */}
      {selectedBank && (
        <ApplicationModal bankTitle={selectedBank} onClose={() => setSelectedBank(null)} />
      )}

    </div>
  );
};

// FULL FORM MODAL LAYER COMPONENT
const ApplicationModal = ({ bankTitle, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    panNumber: '',
    incomeSource: 'Salaried',
    monthlySalary: ''
  });

  const [panFile, setPanFile] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileDrop = (e) => {
    if (e.target.files && e.target.files[0]) {
      setPanFile(e.target.files[0]);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Simulate API Payload Dispatch
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-4 backdrop-blur-xs animate-fade-in">
      <div className="bg-white rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl border border-slate-100 flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200">
        
        {/* Modal Top Branding bar */}
        <div className="bg-slate-950 p-6 flex justify-between items-center text-white border-b border-white/10">
          <div>
            <span className="text-[9px] font-extrabold uppercase tracking-widest bg-emerald-500/20 text-emerald-400 px-2.5 py-1 rounded-md border border-emerald-500/20">
              Encrypted Tunnel Active
            </span>
            <h3 className="text-lg font-bold tracking-tight mt-2">Apply for {bankTitle}</h3>
          </div>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors">
            <X size={16} />
          </button>
        </div>

        {/* Dynamic Inner Workspace Workspace */}
        {!isSubmitted ? (
          <form onSubmit={handleFormSubmit} className="p-6 space-y-5 overflow-y-auto flex-1 bg-slate-50/50">
            
            <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-xs space-y-4">
              <h4 className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-2">
                Identified Parameters
              </h4>
              
              <div className="space-y-3">
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wide mb-1">Full Legal Name</label>
                  <input 
                    type="text" required name="fullName" value={formData.fullName} onChange={handleInputChange}
                    placeholder="Johnathan Doe"
                    className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 transition-all placeholder:text-slate-400"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wide mb-1">Contact Email</label>
                    <input 
                      type="email" required name="email" value={formData.email} onChange={handleInputChange}
                      placeholder="john@nexus.com"
                      className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 transition-all placeholder:text-slate-400"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wide mb-1">Mobile Vector</label>
                    <input 
                      type="tel" required name="phone" value={formData.phone} onChange={handleInputChange}
                      placeholder="98765 43210"
                      className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 transition-all placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wide mb-1">PAN Identity String</label>
                    <input 
                      type="text" required name="panNumber" value={formData.panNumber} onChange={handleInputChange}
                      placeholder="ABCDE1234F"
                      className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 transition-all placeholder:text-slate-400"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wide mb-1">Revenue Stream</label>
                    <select 
                      name="incomeSource" value={formData.incomeSource} onChange={handleInputChange}
                      className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 transition-all"
                    >
                      <option value="Salaried">Salaried Employee</option>
                      <option value="Self-Employed">Independent Professional</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wide mb-1">Monthly Income (₹)</label>
                  <input 
                    type="number" required name="monthlySalary" value={formData.monthlySalary} onChange={handleInputChange}
                    placeholder="e.g. 75000"
                    className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 transition-all placeholder:text-slate-400"
                  />
                </div>
              </div>
            </div>

            {/* Document Handling Block */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-xs space-y-3">
              <h4 className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-2">
                Supporting Verification Files
              </h4>
              <div className="flex items-center justify-between p-3 border border-slate-200/70 rounded-xl bg-slate-50/50 gap-4">
                <div className="text-left">
                  <label className="block text-xs font-bold text-slate-800 tracking-tight">PAN Card Copy</label>
                  <span className="text-[10px] text-slate-400 block mt-0.5">PDF or image format, clear exposure (Max 5MB)</span>
                </div>
                <div className="shrink-0">
                  <input type="file" accept=".pdf,.png,.jpg,.jpeg" id="panUpload" onChange={handleFileDrop} className="hidden" />
                  <label htmlFor="panUpload" className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all flex items-center gap-2 cursor-pointer ${
                    panFile ? "bg-emerald-500 text-white border-emerald-500" : "bg-white text-slate-700 border-slate-200 hover:border-slate-300"
                  }`}>
                    {panFile ? (
                      <>
                        <FileCheck size={14} />
                        <span className="max-w-[80px] truncate">{panFile.name}</span>
                      </>
                    ) : (
                      <>
                        <Upload size={14} className="text-slate-400" />
                        <span>Upload File</span>
                      </>
                    )}
                  </label>
                </div>
              </div>
            </div>

            {/* Action Bar Footer */}
            <div className="pt-2 flex items-center justify-end gap-3">
              <button type="button" onClick={onClose} className="px-4 py-2.5 text-xs font-bold text-slate-500 hover:text-slate-800 transition-colors">
                Cancel
              </button>
              <button type="submit" className="px-6 py-3 text-xs font-bold bg-slate-950 hover:bg-slate-900 text-white rounded-xl shadow-md transition-all active:scale-[0.98]">
                Submit Application Link
              </button>
            </div>
          </form>
        ) : (
          /* Success Screen View Layer */
          <div className="p-12 text-center flex flex-col items-center justify-center space-y-4 bg-white">
            <div className="w-16 h-16 bg-emerald-50 text-emerald-500 border border-emerald-100 rounded-full flex items-center justify-center shadow-inner">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 tracking-tight">Transmission Successful</h3>
            <p className="text-sm text-slate-500 max-w-sm leading-relaxed">
              Your structural application parameters have been securely piped to the underwriting network. Your generation tracking code is active.
            </p>
            <button onClick={onClose} className="mt-4 bg-slate-950 hover:bg-slate-900 text-white text-xs font-bold px-6 py-2.5 rounded-xl transition-all">
              Close Console Window
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default CreditCard;