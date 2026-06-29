import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, ChevronDown } from "lucide-react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted successfully:", formData);
    alert("Thank you! Your message has been received.");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="min-h-screen py-20 bg-[#fdfcf9] text-[#0e2a35] font-sans antialiased selection:bg-[#f7941d]/20">
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Section Head */}
        <div className="text-center max-w-[42rem] mx-auto mb-20">
          <span className="text-[0.75rem] tracking-[0.2em] uppercase font-extrabold text-[#f7941d] bg-[#f7941d]/5 px-3 py-1.5 rounded-md">
            Get In Touch
          </span>
          <h1 className="mt-4 text-[clamp(2.25rem,5vw,3.5rem)] font-black tracking-tight leading-[1.1] text-[#0e2a35]">
            We are Here to <span className="bg-gradient-to-r from-[#f7941d] to-[#e63946] bg-clip-text text-transparent">Help You</span>
          </h1>
          <p className="mt-4 text-[#6b7b82] text-sm md:text-base leading-relaxed">
            Have questions about loan eligibilities, interest rates, or your ongoing application? Reach out to our customer care specialists.
          </p>
        </div>

        {/* Dual-Column Layout Container */}
        <div className="grid gap-10 lg:grid-cols-12 items-start">
          
          {/* Left Column: Essential Contact Information */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="rounded-[24px] bg-[#0e2a35] text-white p-8 md:p-10 relative overflow-hidden shadow-[0_20px_50px_-12px_rgba(14,42,53,0.25)]">
              {/* Complex Background Decorative Elements */}
              <div className="absolute top-0 right-0 w-[180px] h-[180px] rounded-full bg-gradient-to-br from-[rgba(247,148,29,0.12)] to-transparent pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/5 rounded-full blur-2xl" />
              
              <h2 className="text-[1.625rem] font-extrabold tracking-tight mb-2">Support Center</h2>
              <p className="text-white/70 text-sm leading-relaxed mb-8">
                Connect directly with our verification and processing departments for instantaneous updates.
              </p>

              <div className="flex flex-col gap-6 relative z-10">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 shrink-0 rounded-[14px] bg-white/10 grid place-items-center text-[#f7941d] group-hover:bg-[#f7941d] group-hover:text-white transition-all duration-300">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="text-[10px] text-white/40 uppercase font-bold tracking-widest mb-0.5">Call Our Support</div>
                    <a href="tel:+919971740584" className="text-base font-bold text-white hover:text-[#f7941d] transition-colors tracking-wide">+91 99717 40584</a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 shrink-0 rounded-[14px] bg-white/10 grid place-items-center text-[#f7941d] group-hover:bg-[#f7941d] group-hover:text-white transition-all duration-300">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="text-[10px] text-white/40 uppercase font-bold tracking-widest mb-0.5">Email Correspondence</div>
                    <a href="mailto:info@Fintech.com" className="text-base font-bold text-white hover:text-[#f7941d] transition-colors tracking-wide">info@Fintech.com</a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 shrink-0 rounded-[14px] bg-white/10 grid place-items-center text-[#f7941d] group-hover:bg-[#f7941d] group-hover:text-white transition-all duration-300">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="text-[10px] text-white/40 uppercase font-bold tracking-widest mb-0.5">Headquarters Office</div>
                    <p className="text-base font-bold text-white tracking-wide">Karnal Haryana, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours Secondary Card */}
            <div className="rounded-[24px] bg-white border border-[#e8e6e0] p-6 flex items-center gap-4 shadow-sm group hover:border-[#f7941d]/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-[14px] bg-[#f7941d]/10 text-[#f7941d] grid place-items-center shrink-0 group-hover:scale-105 transition-transform">
                <Clock size={22} />
              </div>
              <div>
                <h4 className="font-extrabold text-[#0e2a35] text-[0.95rem]">Operational Availability Hours</h4>
                <p className="text-sm text-[#6b7b82] mt-0.5">We usually respond within business hours.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Interactive Submission Form */}
          <div className="lg:col-span-7 bg-white border border-[#e8e6e0]/80 rounded-[24px] p-8 md:p-10 shadow-[0_25px_60px_-15px_rgba(14,42,53,0.04)]">
            <div className="flex items-center gap-2.5 mb-8">
              <MessageSquare size={20} className="text-[#f7941d]" />
              <h3 className="text-xl font-extrabold text-[#0e2a35] tracking-tight">Drop Us a Message</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider mb-2 text-[#0e2a35]/70">Full Name</label>
                  <input 
                    type="text" id="name" name="name" required value={formData.name} onChange={handleChange} placeholder="John Doe"
                    className="w-full h-12 px-4 rounded-[14px] border border-[#e8e6e0] bg-[#fdfcf9] outline-none text-[0.925rem] font-medium transition-all text-[#0e2a35] focus:border-[#f7941d] focus:bg-white focus:ring-4 focus:ring-[#f7941d]/10 placeholder:text-slate-400"
                  />
                </div>
                
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider mb-2 text-[#0e2a35]/70">Email Address</label>
                  <input 
                    type="email" id="email" name="email" required value={formData.email} onChange={handleChange} placeholder="john@example.com"
                    className="w-full h-12 px-4 rounded-[14px] border border-[#e8e6e0] bg-[#fdfcf9] outline-none text-[0.925rem] font-medium transition-all text-[#0e2a35] focus:border-[#f7941d] focus:bg-white focus:ring-4 focus:ring-[#f7941d]/10 placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
                <div className="flex flex-col">
                  <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider mb-2 text-[#0e2a35]/70">Phone Number</label>
                  <input 
                    type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX"
                    className="w-full h-12 px-4 rounded-[14px] border border-[#e8e6e0] bg-[#fdfcf9] outline-none text-[0.925rem] font-medium transition-all text-[#0e2a35] focus:border-[#f7941d] focus:bg-white focus:ring-4 focus:ring-[#f7941d]/10 placeholder:text-slate-400"
                  />
                </div>
                
                <div className="flex flex-col">
                  <label htmlFor="subject" className="text-xs font-bold uppercase tracking-wider mb-2 text-[#0e2a35]/70">Inquiry Department</label>
                  <div className="relative">
                    <select 
                      id="subject" name="subject" value={formData.subject} onChange={handleChange}
                      className="w-full h-12 pl-4 pr-10 rounded-[14px] border border-[#e8e6e0] bg-[#fdfcf9] outline-none text-[0.925rem] font-medium transition-all text-[#0e2a35] focus:border-[#f7941d] focus:bg-white focus:ring-4 focus:ring-[#f7941d]/10 appearance-none cursor-pointer"
                    >
                      <option>General Inquiry</option>
                      <option>Business Loan Support</option>
                      <option>Personal / Home Loan Support</option>
                      <option>Partner Partnership Program</option>
                    </select>
                    <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#0e2a35]/50 pointer-events-none" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider mb-2 text-[#0e2a35]/70">Detailed Message</label>
                <textarea 
                  id="message" name="message" required rows="4" value={formData.message} onChange={handleChange} placeholder="Describe your query in detail..."
                  className="w-full p-4 rounded-[14px] border border-[#e8e6e0] bg-[#fdfcf9] outline-none text-[0.925rem] font-medium transition-all text-[#0e2a35] focus:border-[#f7941d] focus:bg-white focus:ring-4 focus:ring-[#f7941d]/10 resize-none placeholder:text-slate-400"
                />
              </div>

              <button 
                type="submit"
                className="group flex items-center justify-center gap-2 h-12 px-8 rounded-full font-bold text-sm tracking-wide transition-all mt-2 bg-[#f7941d] text-white shadow-[0_12px_30px_-6px_rgba(247,148,29,0.3)] hover:bg-[#e08316] hover:shadow-[0_14px_35px_-6px_rgba(247,148,29,0.4)] active:scale-[0.98]"
              >
                <span>Send Message</span>
                <Send size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}