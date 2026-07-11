import { useState } from "react";
import { ShieldCheck, Loader2, CheckCircle2, Gauge } from "lucide-react";
import Seo from "../components/Seo";

const CheckCibilScore = () => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    // The link opens in a new tab, but this simulates the loading state locally if needed
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <>
      <Seo title="Check CIBIL Score" description="Check your CIBIL score online for free. Know your credit score before applying for loans and credit cards in India." path="/cibil" keywords="CIBIL score, credit score, check CIBIL, free credit score" />
      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-2xl bg-brand-100 flex items-center justify-center mx-auto mb-4">
            <Gauge size={32} className="text-brand-700" />
          </div>
          <h1 className="text-3xl font-bold text-slate-800 mb-2">Check Your CIBIL Score</h1>
          <p className="text-slate-500">Free credit score check - no impact on your score</p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8 text-center">
          <CheckCircle2 size={48} className="text-emerald-500 mx-auto mb-4" />
          <p className="text-slate-500 mb-6">Your CIBIL Score</p>
         
          <a 
            href="https://www.piramalfinance.com/check-free-credit-score" 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={handleClick}
            className={`w-full flex items-center justify-center gap-2 bg-brand-700 text-white py-2.5 rounded-lg hover:bg-brand-800 mb-4 transition-colors ${loading ? 'opacity-50 pointer-events-none' : ''}`}
          >
            {loading ? <Loader2 size={18} className="animate-spin" /> : <ShieldCheck size={18} />} Check Score
          </a>
          
          <p className="text-xs text-slate-400 text-center">Your data is safe and encrypted. We don't store your PAN details.</p>
        </div>
      </div>
    </>
  );
};

export default CheckCibilScore;