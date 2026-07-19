import { useState } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Loader2, 
  CheckCircle2, 
  Send, 
  Clock, 
  Instagram, 
  Facebook, 
  Youtube, 
  MessageCircle 
} from "lucide-react";
import Seo from "../components/Seo";
import { contactUs } from "../services/apiService";
import { motion, AnimatePresence } from "framer-motion";

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
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Seo 
        title="Contact Us" 
        description="Contact Cavner Fintech for loans, credit cards, and investment queries. Get in touch with our financial experts." 
        path="/contact" 
      />
      
      <div className="max-w-screen-xl mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">Contact Us</h1>
          <p className="text-slate-500 text-lg max-w-lg mx-auto">
            We're here to help with your financial needs.
          </p>
        </div>

        {/* Two-Column Grid Layout */}
        <div className="grid lg:grid-cols-3 gap-12 items-start mb-16">
          
          {/* Left: Contact Info Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6 lg:col-span-1"
          >
            <div>
              <h2 className="font-playfair text-2xl font-bold text-slate-800 mb-6">
                Contact Information
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-0.5">
                      Phone
                    </p>
                    <a
                      href="tel:+918816942362"
                      className="text-slate-800 font-semibold hover:text-amber-600 transition-colors"
                    >
                      +91 88169 42362
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-0.5">
                      Email
                    </p>
                    <a
                      href="mailto:info@cavnerfintech.in"
                      className="text-slate-800 font-semibold hover:text-amber-600 transition-colors"
                    >
                      info@cavnerfintech.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-0.5">
                      Address
                    </p>
                    <p className="text-slate-800 font-semibold leading-snug">
                      SCO 98, Sector 4-5, Urban Estate
                      <br />
                      Karnal, Haryana — 132001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-0.5">
                      Working Hours
                    </p>
                    <p className="text-slate-800 font-semibold">
                      Mon-Sat: 9 AM - 6 PM
                    </p>
                    <p className="text-slate-500 text-sm">Sun: 10 AM - 4 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm font-semibold text-slate-600 mb-3">
                Follow Us
              </p>
              <div className="flex gap-3">
                {[
                  {
                    Icon: Instagram,
                    label: "Instagram",
                    href: "#",
                    color: "hover:bg-pink-50 hover:border-pink-200 hover:text-pink-500",
                  },
                  {
                    Icon: Facebook,
                    label: "Facebook",
                    href: "#",
                    color: "hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600",
                  },
                  {
                    Icon: Youtube,
                    label: "YouTube",
                    href: "#",
                    color: "hover:bg-red-50 hover:border-red-200 hover:text-red-500",
                  },
                  {
                    Icon: MessageCircle,
                    label: "WhatsApp",
                    href: "https://wa.me/918816942362",
                    color: "hover:bg-green-50 hover:border-green-200 hover:text-green-600",
                  },
                ].map(({ Icon, label, href, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`w-10 h-10 rounded-xl border border-slate-200 bg-white flex items-center justify-center text-slate-500 transition-all ${color}`}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/918816942362?text=Hi%20Cavner%20Fintech!%20I%20have%20a%20financial%20inquiry."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-4 rounded-2xl transition-colors shadow-md w-full justify-center"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>
          </motion.div>

          {/* Right: Contact Form Column */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-white rounded-xl border border-slate-100 shadow-sm p-10 text-center"
                >
                  <CheckCircle2 size={48} className="text-emerald-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-slate-800">Message Sent!</h3>
                  <p className="text-slate-500 mt-1">We'll get back to you within 24 hours.</p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-4 text-amber-600 font-semibold text-sm hover:text-amber-700 underline underline-offset-2"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-slate-100 shadow-sm p-6 space-y-4">
                  {error && (
                    <div className="bg-rose-50 text-rose-600 text-sm px-4 py-3 rounded-lg">
                      {error}
                    </div>
                  )}
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input 
                      name="name" 
                      value={form.name} 
                      onChange={handleChange} 
                      placeholder="Your Name *" 
                      required 
                      className="px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-brand-500 w-full" 
                    />
                    <input 
                      name="email" 
                      type="email" 
                      value={form.email} 
                      onChange={handleChange} 
                      placeholder="Email *" 
                      required 
                      className="px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-brand-500 w-full" 
                    />
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input 
                      name="phone" 
                      value={form.phone} 
                      onChange={handleChange} 
                      placeholder="Phone" 
                      maxLength="10" 
                      className="px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-brand-500 w-full" 
                    />
                    <input 
                      name="subject" 
                      value={form.subject} 
                      onChange={handleChange} 
                      placeholder="Subject" 
                      className="px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-brand-500 w-full" 
                    />
                  </div>
                  
                  <textarea 
                    name="message" 
                    value={form.message} 
                    onChange={handleChange} 
                    placeholder="Your Message *" 
                    required 
                    rows={5} 
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-brand-500 resize-none" 
                  />
                  
                  <button 
                    type="submit" 
                    disabled={loading} 
                    className="flex items-center justify-center gap-2 w-full bg-slate-800 text-white py-3 rounded-lg hover:bg-slate-900 transition-colors disabled:opacity-50 font-semibold"
                  >
                    {loading ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />} 
                    Send Message
                  </button>
                </form>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Map Placeholder Block */}
        <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm h-80 w-full">
          <div
            className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 flex flex-col items-center justify-center relative"
            style={{
              backgroundImage: `radial-gradient(#cbd5e1 1px, transparent 1px)`,
              backgroundSize: "20px 20px",
            }}
          >
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 text-center z-10 border border-slate-100 max-w-md mx-4">
              <MapPin className="w-10 h-10 text-amber-500 mx-auto mb-2" />
              <p className="font-bold text-slate-700">Cavner Fintech HQ</p>
              <p className="text-slate-500 text-sm mt-1">
                SCO 98, Sector 4-5, Urban Estate Karnal, Haryana — 132001
              </p>
              <a
                href="https://maps.google.com/?q=SCO+98,+Sector+4-5,+Urban+Estate,+Karnal,+Haryana+132001"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-xs font-semibold text-amber-600 hover:text-amber-700 underline underline-offset-2"
              >
                Open in Google Maps →
              </a>
            </div>
            <p className="absolute bottom-4 text-xs text-slate-400">
              Interactive map coming soon
            </p>
          </div>
        </div>

      </div>
    </>
  );
};

export default ContactUs;