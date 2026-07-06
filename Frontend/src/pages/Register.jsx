import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  User,
  Mail,
  Phone,
  Calendar,
  CreditCard,
  MapPin,
  ArrowRight,
  ShieldCheck,
  Lock,
  Loader2,
  CheckCircle2,
} from "lucide-react";
import Seo from "../components/Seo";
import { sendOtp, verifyOtp, register } from "../services/apiService";

const Register = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // 1: form, 2: email OTP, 3: phone OTP, 4: done
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    phonenumber: "",
    password: "",
    dateofbirth: "",
    pancard: "",
    pincode: "",
  });
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [otp, setOtp] = useState("");
  const [maskedTarget, setMaskedTarget] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSendEmailOtp = async () => {
    setError("");
    if (!form.email || !form.password || !form.fullname || !form.phonenumber) {
      setError("Please fill all required fields");
      return;
    }
    setLoading(true);
    try {
      const { data } = await sendOtp({
        identifier: form.email,
        type: "email",
        purpose: "registration",
      });
      setMaskedTarget(data.data.masked);
      setStep(2);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to send OTP");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyEmailOtp = async () => {
    setError("");
    setLoading(true);
    try {
      await verifyOtp({ identifier: form.email, type: "email", otp });
      setOtp("");
      const { data } = await sendOtp({
        identifier: form.phonenumber,
        type: "phone",
        purpose: "registration",
      });
      setMaskedTarget(data.data.masked);
      setStep(3);
    } catch (err) {
      setError(err.response?.data?.message || "Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyPhoneOtp = async () => {
    setError("");
    setLoading(true);
    try {
      await verifyOtp({ identifier: form.phonenumber, type: "phone", otp });
      const { data } = await register({
        name: form.fullname,
        email: form.email,
        phone: form.phonenumber,
        password: form.password,
        dob: form.dateofbirth,
        pannumber: form.pancard,
        pincode: form.pincode,
      });
      localStorage.setItem("userToken", data.data.token);
      localStorage.setItem("user", JSON.stringify(data.data.user));
      setStep(4);
      setTimeout(() => navigate("/user/dashboard"), 1500);
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Seo
        title="Register"
        description="Create your secure Cavner Fintech account with email and phone OTP verification."
        path="/register"
      />
      <div className="min-h-screen grid lg:grid-cols-2">
        {/* Left brand panel */}
        <div className="hidden lg:flex flex-col justify-between bg-gradient-to-br from-brand-800 to-brand-900 text-white p-12">
          <div>
            <span className="inline-block px-3 py-1 bg-brand-500/30 text-brand-100 text-sm rounded-full mb-6">
              Secure Identity Verification
            </span>
            <h1 className="text-4xl font-bold leading-tight mb-4">
              CREATE YOUR SECURED PROFILE
            </h1>
            <p className="text-brand-100 text-lg max-w-md">
              Register your core credentials to initialize your unified platform
              dashboard and securely manage accounts.
            </p>
          </div>
          <div className="flex items-center gap-2 text-brand-200 text-sm">
            <ShieldCheck size={18} /> Data Security Architecture Compliant
          </div>
        </div>

        {/* Right form */}
        <div className="flex items-center justify-center p-6 lg:p-12 bg-slate-50">
          <div className="w-full max-w-md">
            {/* Progress */}
            <div className="flex items-center justify-between mb-8">
              {["Details", "Email OTP", "Phone OTP", "Done"].map((label, i) => (
                <div key={label} className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${step > i + 1 ? "bg-emerald-500 text-white" : step === i + 1 ? "bg-brand-700 text-white" : "bg-slate-200 text-slate-500"}`}
                  >
                    {step > i + 1 ? <CheckCircle2 size={16} /> : i + 1}
                  </div>
                  {i < 3 && (
                    <div
                      className={`w-12 h-0.5 mx-1 ${step > i + 1 ? "bg-emerald-500" : "bg-slate-200"}`}
                    />
                  )}
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-slate-800 mb-1">
              Register Secure Account
            </h2>
            <p className="text-slate-500 text-sm mb-6">
              {step === 1 &&
                "Please populate the official data inputs below to register your system profile."}
              {step === 2 && `Enter the OTP sent to ${maskedTarget}`}
              {step === 3 && `Enter the OTP sent to ${maskedTarget}`}
              {step === 4 && "Registration complete! Redirecting..."}
            </p>

            {error && (
              <div className="bg-rose-50 text-rose-600 text-sm px-4 py-3 rounded-lg mb-4">
                {error}
              </div>
            )}

            {step === 1 && (
              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendEmailOtp();
                }}
              >
                <div className="relative">
                  <User
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                  <input
                    name="fullname"
                    value={form.fullname}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-brand-500"
                  />
                </div>
                <div className="relative">
                  <Mail
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-brand-500"
                  />
                </div>
                <div className="relative">
                  <Phone
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                  <input
                    name="phonenumber"
                    value={form.phonenumber}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    maxLength="10"
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-brand-500"
                  />
                </div>
                <div className="relative">
                  <Lock
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                  <input
                    name="password"
                    type="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Password (min 6 chars)"
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-brand-500"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="relative">
                    <Calendar
                      size={18}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                    <input
                      name="dateofbirth"
                      type="date"
                      value={form.dateofbirth}
                      onChange={handleChange}
                      className="w-full pl-10 pr-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-brand-500"
                    />
                  </div>
                  <div className="relative">
                    <CreditCard
                      size={18}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                    <input
                      name="pancard"
                      value={form.pancard}
                      onChange={handleChange}
                      placeholder="PAN Card"
                      maxLength="10"
                      className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-brand-500"
                    />
                  </div>
                </div>
                <div className="relative">
                  <MapPin
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                  <input
                    name="pincode"
                    value={form.pincode}
                    onChange={handleChange}
                    placeholder="Pincode"
                    maxLength="6"
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-brand-500"
                  />
                </div>
                <label className="flex items-start gap-2 text-sm text-slate-600">
                  <input
                    type="checkbox"
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                    className="mt-0.5 accent-brand-600"
                  />
                  I agree to the Terms of Use and Privacy Policy
                </label>
                <button
                  type="submit"
                  disabled={loading || !agreeTerms}
                  className="w-full flex items-center justify-center gap-2 bg-brand-700 text-white py-2.5 rounded-lg hover:bg-brand-800 disabled:opacity-50"
                >
                  {loading ? (
                    <Loader2 size={18} className="animate-spin" />
                  ) : (
                    <>
                      Send Email OTP <ArrowRight size={16} />
                    </>
                  )}
                </button>
                <p className="text-center text-sm text-slate-500">
                  Already registered?{" "}
                  <button
                    type="button"
                    onClick={() => navigate("/login")}
                    className="text-brand-700 font-semibold hover:underline"
                  >
                    Login Now
                  </button>
                </p>
              </form>
            )}

            {(step === 2 || step === 3) && (
              <div className="space-y-4">
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  maxLength="6"
                  placeholder="Enter 6-digit OTP"
                  className="w-full text-center text-2xl tracking-widest px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-brand-500"
                />
                <button
                  onClick={
                    step === 2 ? handleVerifyEmailOtp : handleVerifyPhoneOtp
                  }
                  disabled={loading || otp.length < 4}
                  className="w-full flex items-center justify-center gap-2 bg-brand-700 text-white py-2.5 rounded-lg hover:bg-brand-800 disabled:opacity-50"
                >
                  {loading ? (
                    <Loader2 size={18} className="animate-spin" />
                  ) : (
                    "Verify OTP"
                  )}
                </button>
                <button
                  onClick={() => setStep(1)}
                  className="w-full text-sm text-slate-500 hover:text-slate-700"
                >
                  Back to form
                </button>
              </div>
            )}

            {step === 4 && (
              <div className="text-center py-8">
                <CheckCircle2
                  size={64}
                  className="text-emerald-500 mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-slate-800">
                  Registration Successful!
                </h3>
                <p className="text-slate-500 mt-1">
                  Redirecting to your dashboard...
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
