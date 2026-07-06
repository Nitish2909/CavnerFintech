import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Building2, User, Mail, Phone, Lock, Loader2, CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";
import Seo from "../components/Seo";
import { sendPartnerOtp, verifyPartnerOtp, registerPartner } from "../services/apiService";

const PartnerRegisteration = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    companyName: "", contactPerson: "", email: "", phone: "", password: "",
    gstNumber: "", panNumber: "", businessType: "DSA", city: "", state: "",
  });
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [masked, setMasked] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const sendEmailOtp = async () => {
    setError("");
    if (!form.companyName || !form.contactPerson || !form.email || !form.phone || !form.password) {
      setError("Please fill all required fields");
      return;
    }
    setLoading(true);
    try {
      const { data } = await sendPartnerOtp({ identifier: form.email, type: "email", purpose: "registration" });
      setMasked(data.data.masked);
      setStep(2);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to send OTP");
    } finally { setLoading(false); }
  };

  const verifyEmailOtp = async () => {
    setError("");
    setLoading(true);
    try {
      await verifyPartnerOtp({ identifier: form.email, type: "email", otp });
      setOtp("");
      const { data } = await sendPartnerOtp({ identifier: form.phone, type: "phone", purpose: "registration" });
      setMasked(data.data.masked);
      setStep(3);
    } catch (err) {
      setError(err.response?.data?.message || "Invalid OTP");
    } finally { setLoading(false); }
  };

  const verifyPhoneAndRegister = async () => {
    setError("");
    setLoading(true);
    try {
      await verifyPartnerOtp({ identifier: form.phone, type: "phone", otp });
      const { data } = await registerPartner(form);
      setStep(4);
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    } finally { setLoading(false); }
  };

  return (
    <>
      <Seo title="Partner Registration" description="Register as a Cavner Fintech channel partner - DSA, NBFC, or agent" path="/partnersregisteration" />
      <div className="min-h-screen grid lg:grid-cols-2">
        <div className="hidden lg:flex flex-col justify-between bg-gradient-to-br from-slate-800 to-slate-900 text-white p-12">
          <div>
            <span className="inline-block px-3 py-1 bg-brand-500/30 text-brand-100 text-sm rounded-full mb-6">Join Our Network</span>
            <h1 className="text-4xl font-bold leading-tight mb-4">BECOME A CHANNEL PARTNER</h1>
            <p className="text-slate-300 text-lg max-w-md">Join Cavner Fintech's partner network. Earn commissions by referring loans and credit cards to your customers.</p>
          </div>
          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <ShieldCheck size={18} /> Verified partner onboarding
          </div>
        </div>

        <div className="flex items-center justify-center p-6 lg:p-12 bg-slate-50">
          <div className="w-full max-w-md">
            <h2 className="text-2xl font-bold text-slate-800 mb-1">Partner Registration</h2>
            <p className="text-slate-500 text-sm mb-6">
              {step === 1 && "Enter your business details"}
              {step === 2 && `Enter OTP sent to ${masked}`}
              {step === 3 && `Enter OTP sent to ${masked}`}
              {step === 4 && "Registration submitted!"}
            </p>

            {error && <div className="bg-rose-50 text-rose-600 text-sm px-4 py-3 rounded-lg mb-4">{error}</div>}

            {step === 1 && (
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); sendEmailOtp(); }}>
                <div className="relative">
                  <Building2 size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input name="companyName" value={form.companyName} onChange={handleChange} placeholder="Company Name *" className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-brand-500" />
                </div>
                <div className="relative">
                  <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input name="contactPerson" value={form.contactPerson} onChange={handleChange} placeholder="Contact Person *" className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-brand-500" />
                </div>
                <div className="relative">
                  <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Business Email *" className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-brand-500" />
                </div>
                <div className="relative">
                  <Phone size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone *" maxLength="10" className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-brand-500" />
                </div>
                <div className="relative">
                  <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input name="password" type="password" value={form.password} onChange={handleChange} placeholder="Password *" className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-brand-500" />
                </div>
                <select name="businessType" value={form.businessType} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-brand-500">
                  <option value="DSA">DSA</option>
                  <option value="NBFC">NBFC</option>
                  <option value="Bank">Bank</option>
                  <option value="Individual Agent">Individual Agent</option>
                  <option value="Fintech">Fintech</option>
                  <option value="Other">Other</option>
                </select>
                <div className="grid grid-cols-2 gap-3">
                  <input name="gstNumber" value={form.gstNumber} onChange={handleChange} placeholder="GST Number" className="px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-brand-500" />
                  <input name="panNumber" value={form.panNumber} onChange={handleChange} placeholder="PAN Number" maxLength="10" className="px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-brand-500" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <input name="city" value={form.city} onChange={handleChange} placeholder="City" className="px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-brand-500" />
                  <input name="state" value={form.state} onChange={handleChange} placeholder="State" className="px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-brand-500" />
                </div>
                <button type="submit" disabled={loading} className="w-full flex items-center justify-center gap-2 bg-brand-700 text-white py-2.5 rounded-lg hover:bg-brand-800 disabled:opacity-50">
                  {loading ? <Loader2 size={18} className="animate-spin" /> : <>Send Email OTP <ArrowRight size={16} /></>}
                </button>
              </form>
            )}

            {(step === 2 || step === 3) && (
              <div className="space-y-4">
                <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} maxLength="6" placeholder="Enter 6-digit OTP" className="w-full text-center text-2xl tracking-widest px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-brand-500" />
                <button onClick={step === 2 ? verifyEmailOtp : verifyPhoneAndRegister} disabled={loading || otp.length < 4} className="w-full flex items-center justify-center gap-2 bg-brand-700 text-white py-2.5 rounded-lg hover:bg-brand-800 disabled:opacity-50">
                  {loading ? <Loader2 size={18} className="animate-spin" /> : "Verify OTP"}
                </button>
                <button onClick={() => setStep(1)} className="w-full text-sm text-slate-500 hover:text-slate-700">Back to form</button>
              </div>
            )}

            {step === 4 && (
              <div className="text-center py-8">
                <CheckCircle2 size={64} className="text-emerald-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-slate-800">Registration Submitted!</h3>
                <p className="text-slate-500 mt-1 mb-4">Your application is pending admin approval. You'll be notified once approved.</p>
                <button onClick={() => navigate("/partner-login")} className="text-brand-700 font-semibold hover:underline">Go to Partner Login</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnerRegisteration;
