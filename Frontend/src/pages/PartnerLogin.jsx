import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Building2, Mail, Lock, Loader2, ShieldCheck, ArrowRight } from "lucide-react";
import Seo from "../components/Seo";
import { useDispatch } from "react-redux";
import { setPartner } from "../store/index";
import { loginPartner } from "../services/apiService";

const PartnerLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const { data } = await loginPartner({ email, password });
      dispatch(setPartner(data.data));
      navigate("/partner/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally { setLoading(false); }
  };

  return (
    <>
      <Seo title="Partner Login" description="Login to your Cavner Fintech partner account" path="/partner-login" />
      <div className="min-h-screen grid lg:grid-cols-2">
        <div className="hidden lg:flex flex-col justify-between bg-gradient-to-br from-slate-800 to-slate-900 text-white p-12">
          <div>
            <span className="inline-block px-3 py-1 bg-brand-500/30 text-brand-100 text-sm rounded-full mb-6">Channel Partner Portal</span>
            <h1 className="text-4xl font-bold leading-tight mb-4">PARTNER LOGIN PORTAL</h1>
            <p className="text-slate-300 text-lg max-w-md">Access your partner dashboard to manage leads, track commissions, and grow your financial services business.</p>
          </div>
          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <ShieldCheck size={18} /> Authorized partners only
          </div>
        </div>

        <div className="flex items-center justify-center p-6 lg:p-12 bg-slate-50">
          <div className="w-full max-w-md">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-12 h-12 rounded-xl bg-brand-700 flex items-center justify-center">
                <Building2 size={24} className="text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-800">Partner Login</h2>
                <p className="text-slate-500 text-sm">DSA / NBFC / Agent portal</p>
              </div>
            </div>

            {error && <div className="bg-rose-50 text-rose-600 text-sm px-4 py-3 rounded-lg mb-4">{error}</div>}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Business Email" required className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-brand-500" />
              </div>
              <div className="relative">
                <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-brand-500" />
              </div>
              <button type="submit" disabled={loading} className="w-full flex items-center justify-center gap-2 bg-brand-700 text-white py-2.5 rounded-lg hover:bg-brand-800 disabled:opacity-50">
                {loading ? <Loader2 size={18} className="animate-spin" /> : <>Login <ArrowRight size={16} /></>}
              </button>
            </form>

            <p className="text-center text-sm text-slate-500 mt-6">
              Not a partner yet?{" "}
              <button onClick={() => navigate("/partnersregisteration")} className="text-brand-700 font-semibold hover:underline">Register Here</button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnerLogin;
