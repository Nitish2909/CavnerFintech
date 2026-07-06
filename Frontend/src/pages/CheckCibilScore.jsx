import { useState } from "react";
import { ShieldCheck, Loader2, CheckCircle2, Gauge } from "lucide-react";
import Seo from "../components/Seo";

const CheckCibilScore = () => {
  const [form, setForm] = useState({ name: "", phone: "", pan: "" });
  const [loading, setLoading] = useState(false);
  const [score, setScore] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setScore(Math.floor(Math.random() * 300) + 600);
      setLoading(false);
    }, 1500);
  };

  const getRating = (s) => {
    if (s >= 800) return { label: "Excellent", color: "text-emerald-600" };
    if (s >= 740) return { label: "Very Good", color: "text-brand-600" };
    if (s >= 670) return { label: "Good", color: "text-blue-600" };
    if (s >= 580) return { label: "Fair", color: "text-amber-600" };
    return { label: "Poor", color: "text-rose-600" };
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

        {score ? (
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8 text-center">
            <CheckCircle2 size={48} className="text-emerald-500 mx-auto mb-4" />
            <p className="text-slate-500 mb-2">Your CIBIL Score</p>
            <p className="text-6xl font-bold text-slate-800 mb-2">{score}</p>
            <p className={`text-lg font-semibold ${getRating(score).color}`}>{getRating(score).label}</p>
            <p className="text-sm text-slate-500 mt-4 max-w-md mx-auto">
              {score >= 700 ? "Great score! You're likely eligible for loans at the best interest rates." : "Consider improving your score for better loan offers. Pay bills on time and reduce credit utilization."}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8 space-y-4">
            <div>
              <label className="block text-sm text-slate-600 mb-1">Full Name</label>
              <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-brand-500" />
            </div>
            <div>
              <label className="block text-sm text-slate-600 mb-1">Phone Number</label>
              <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required maxLength="10" className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-brand-500" />
            </div>
            <div>
              <label className="block text-sm text-slate-600 mb-1">PAN Number</label>
              <input value={form.pan} onChange={(e) => setForm({ ...form, pan: e.target.value.toUpperCase() })} required maxLength="10" className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-brand-500" />
            </div>
            <button type="submit" disabled={loading} className="w-full flex items-center justify-center gap-2 bg-brand-700 text-white py-2.5 rounded-lg hover:bg-brand-800 disabled:opacity-50">
              {loading ? <Loader2 size={18} className="animate-spin" /> : <ShieldCheck size={18} />} Check Score
            </button>
            <p className="text-xs text-slate-400 text-center">Your data is safe and encrypted. We don't store your PAN details.</p>
          </form>
        )}
      </div>
    </>
  );
};

export default CheckCibilScore;
