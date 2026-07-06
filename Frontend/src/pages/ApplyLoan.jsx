import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loader2, Upload, FileText, CheckCircle2 } from "lucide-react";
import Seo from "../components/Seo";
import { applyLoan } from "../services/apiService";

const ApplyLoan = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    loanType: "personal", amountRequested: "", tenureMonths: "36", purpose: "",
    employmentType: "salaried", monthlyIncome: "", applicantName: "", email: "",
    phone: "", panNumber: "", city: "", state: "", pincode: "",
  });
  const [files, setFiles] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleFile = (e) => setFiles({ ...files, [e.target.name]: e.target.files[0] });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const fd = new FormData();
      Object.keys(form).forEach((k) => fd.append(k, form[k]));
      Object.keys(files).forEach((k) => { if (files[k]) fd.append(k, files[k]); });
      await applyLoan(fd);
      setSuccess(true);
    } catch (err) {
      setError(err.response?.data?.message || "Submission failed");
    } finally { setLoading(false); }
  };

  if (success) {
    return (
      <>
        <Seo title="Loan Application Submitted" path="/applyforloan" />
        <div className="max-w-lg mx-auto px-4 py-20 text-center">
          <CheckCircle2 size={64} className="text-emerald-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-slate-800 mb-2">Application Submitted!</h1>
          <p className="text-slate-500 mb-6">Our team will review your application and contact you within 24 hours.</p>
          <button onClick={() => navigate("/")} className="px-6 py-2.5 bg-brand-700 text-white rounded-lg hover:bg-brand-800">Back to Home</button>
        </div>
      </>
    );
  }

  return (
    <>
      <Seo title="Apply for Loan" description="Apply for personal, home, education or business loans in India" path="/applyforloan" />
      <div className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-slate-800 mb-2">Apply for a Loan</h1>
        <p className="text-slate-500 mb-8">Fill in your details and upload documents. We'll get back to you within 24 hours.</p>

        {error && <div className="bg-rose-50 text-rose-600 text-sm px-4 py-3 rounded-lg mb-4">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Loan details */}
          <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-6">
            <h3 className="font-bold text-slate-800 mb-4">Loan Details</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate-600 mb-1">Loan Type *</label>
                <select name="loanType" value={form.loanType} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-brand-500">
                  <option value="personal">Personal Loan</option>
                  <option value="home">Home Loan</option>
                  <option value="education">Education Loan</option>
                  <option value="business">Business Loan</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-slate-600 mb-1">Amount Requested (₹) *</label>
                <input name="amountRequested" type="number" value={form.amountRequested} onChange={handleChange} required className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-brand-500" />
              </div>
              <div>
                <label className="block text-sm text-slate-600 mb-1">Tenure (months) *</label>
                <select name="tenureMonths" value={form.tenureMonths} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-brand-500">
                  <option value="12">12 months</option>
                  <option value="24">24 months</option>
                  <option value="36">36 months</option>
                  <option value="60">60 months</option>
                  <option value="120">120 months</option>
                  <option value="180">180 months</option>
                  <option value="240">240 months</option>
                  <option value="360">360 months</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-slate-600 mb-1">Employment Type</label>
                <select name="employmentType" value={form.employmentType} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-brand-500">
                  <option value="salaried">Salaried</option>
                  <option value="self-employed">Self-Employed</option>
                  <option value="business">Business</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-slate-600 mb-1">Monthly Income (₹)</label>
                <input name="monthlyIncome" type="number" value={form.monthlyIncome} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-brand-500" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-slate-600 mb-1">Purpose of Loan</label>
                <textarea name="purpose" value={form.purpose} onChange={handleChange} rows={2} className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-brand-500" />
              </div>
            </div>
          </div>

          {/* Personal details */}
          <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-6">
            <h3 className="font-bold text-slate-800 mb-4">Personal Details</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate-600 mb-1">Full Name *</label>
                <input name="applicantName" value={form.applicantName} onChange={handleChange} required className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-brand-500" />
              </div>
              <div>
                <label className="block text-sm text-slate-600 mb-1">Email *</label>
                <input name="email" type="email" value={form.email} onChange={handleChange} required className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-brand-500" />
              </div>
              <div>
                <label className="block text-sm text-slate-600 mb-1">Phone *</label>
                <input name="phone" value={form.phone} onChange={handleChange} required maxLength="10" className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-brand-500" />
              </div>
              <div>
                <label className="block text-sm text-slate-600 mb-1">PAN Number</label>
                <input name="panNumber" value={form.panNumber} onChange={handleChange} maxLength="10" className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-brand-500" />
              </div>
              <div>
                <label className="block text-sm text-slate-600 mb-1">City</label>
                <input name="city" value={form.city} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-brand-500" />
              </div>
              <div>
                <label className="block text-sm text-slate-600 mb-1">State</label>
                <input name="state" value={form.state} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-brand-500" />
              </div>
              <div>
                <label className="block text-sm text-slate-600 mb-1">Pincode</label>
                <input name="pincode" value={form.pincode} onChange={handleChange} maxLength="6" className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-brand-500" />
              </div>
            </div>
          </div>

          {/* Documents */}
          <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-6">
            <h3 className="font-bold text-slate-800 mb-1">Upload Documents</h3>
            <p className="text-sm text-slate-500 mb-4">PDF, JPG, PNG up to 10MB each</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {["panCard", "aadhaar", "salarySlip", "bankStatement"].map((doc) => (
                <div key={doc}>
                  <label className="block text-sm text-slate-600 mb-1 capitalize">{doc.replace(/([A-Z])/g, " $1")}</label>
                  <div className="relative">
                    <input type="file" name={doc} onChange={handleFile} accept=".pdf,.jpg,.jpeg,.png" className="w-full text-sm file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-brand-50 file:text-brand-700" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button type="submit" disabled={loading} className="w-full flex items-center justify-center gap-2 bg-brand-700 text-white py-3 rounded-lg hover:bg-brand-800 disabled:opacity-50">
            {loading ? <Loader2 size={18} className="animate-spin" /> : <FileText size={18} />} Submit Application
          </button>
        </form>
      </div>
    </>
  );
};

export default ApplyLoan;
