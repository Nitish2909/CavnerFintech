import { useState } from "react";
import { Mail, Phone, MapPin, Loader2, CheckCircle2, Send } from "lucide-react";
import Seo from "../components/Seo";
import { contactUs } from "../services/apiService";

const ContactUs = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await contactUs(form);
      setSent(true);
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (err) {
      setError(err.response?.data?.message || "Failed to send message");
    } finally { setLoading(false); }
  };

  return (
    <>
      <Seo title="Contact Us" description="Contact Cavner Fintech for loans, credit cards, and investment queries. Get in touch with our financial experts." path="/contact" />
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">Contact Us</h1>
          <p className="text-slate-500">We're here to help with your financial needs</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact info */}
          <div className="space-y-4">
            <div className="bg-white rounded-xl border border-slate-100 p-5">
              <Phone size={20} className="text-brand-600 mb-2" />
              <p className="text-sm text-slate-500">Call us</p>
              <a href="tel:918816942362" className="font-semibold text-slate-800">+91 88169 42362</a>
            </div>
            <div className="bg-white rounded-xl border border-slate-100 p-5">
              <Mail size={20} className="text-brand-600 mb-2" />
              <p className="text-sm text-slate-500">Email us</p>
              <a href="mailto:info@cavnerfintech.in" className="font-semibold text-slate-800">info@cavnerfintech.in</a>
            </div>
            <div className="bg-white rounded-xl border border-slate-100 p-5">
              <MapPin size={20} className="text-brand-600 mb-2" />
              <p className="text-sm text-slate-500">Location</p>
              <p className="font-semibold text-slate-800">India</p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            {sent ? (
              <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-10 text-center">
                <CheckCircle2 size={48} className="text-emerald-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-slate-800">Message Sent!</h3>
                <p className="text-slate-500 mt-1">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-slate-100 shadow-sm p-6 space-y-4">
                {error && <div className="bg-rose-50 text-rose-600 text-sm px-4 py-3 rounded-lg">{error}</div>}
                <div className="grid sm:grid-cols-2 gap-4">
                  <input name="name" value={form.name} onChange={handleChange} placeholder="Your Name *" required className="px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-brand-500" />
                  <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email *" required className="px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-brand-500" />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" maxLength="10" className="px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-brand-500" />
                  <input name="subject" value={form.subject} onChange={handleChange} placeholder="Subject" className="px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-brand-500" />
                </div>
                <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your Message *" required rows={5} className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-brand-500" />
                <button type="submit" disabled={loading} className="flex items-center justify-center gap-2 w-full bg-brand-700 text-white py-2.5 rounded-lg hover:bg-brand-800 disabled:opacity-50">
                  {loading ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />} Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
