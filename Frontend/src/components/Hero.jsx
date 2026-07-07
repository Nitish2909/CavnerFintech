import React, { useState, useEffect } from "react";
import { ShieldCheck, Users, Landmark } from "lucide-react"; // Common fallback utility stats icons

const HERO_SLIDES = [
  {
    mainText: "Apply Home Loan Online with",
    brandHighlight: "Cavner Wealth & FinTech Services",
    subText: "Fast Approval & Low Interest Rates",
    illustration: (
      <div className="relative w-full h-full min-h-[180px] sm:min-h-[240px] md:min-h-full overflow-hidden bg-slate-50 flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tZSUyMGxvYW5zfGVufDB8fDB8fHww"
          alt="Apply For Home Loan"
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-transparent via-transparent to-white/10" />
      </div>
    ),
  },
  {
    mainText: "Apply Personal Loan Online with",
    brandHighlight: "Cavner Wealth & FinTech Services",
    subText: "Fast Approval & Low Interest Rates",
    illustration: (
      <div className="relative w-full h-full min-h-[180px] sm:min-h-[240px] md:min-h-full overflow-hidden bg-slate-50 flex items-center justify-center">
        <img
          src="https://media.istockphoto.com/id/1195331254/photo/personal-loan-application-isolated-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=jK3LirtoxynhMdIRHLXKmwbqWKbNynGocsJkSMyHeTI="
          alt="Apply For Personal Loan"
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-transparent via-transparent to-white/10" />
      </div>
    ),
  },
    {
    mainText: "Apply Education Loan Online with",
    brandHighlight: "Cavner Wealth & FinTech Services",
    subText: "Fast Approval & Low Interest Rates",
    illustration: (
      <div className="relative w-full h-full min-h-[180px] sm:min-h-[240px] md:min-h-full overflow-hidden bg-slate-50 flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1665567032056-4d22d92638da?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8RWR1Y2F0aW9uJTIwbG9hbnxlbnwwfHwwfHx8MA%3D%3D"
          alt="Apply For Education Loan"
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-transparent via-transparent to-white/10" />
      </div>
    ),
  },
   {
    mainText: "Apply Car Loan Online with",
    brandHighlight: "Cavner Wealth & FinTech Services",
    subText: "Fast Approval & Low Interest Rates",
    illustration: (
      <div className="relative w-full h-full min-h-[180px] sm:min-h-[240px] md:min-h-full overflow-hidden bg-slate-50 flex items-center justify-center">
        <img
          src="https://plus.unsplash.com/premium_photo-1661290470322-a313098e7c2a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2FyJTIwTG9hbnxlbnwwfHwwfHx8MA%3D%3D"
          alt="Apply For Car Loan"
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-transparent via-transparent to-white/10" />
      </div>
    ),
  },
  {
    mainText: "Smart Financial Solutions That Match Your Goals",
    brandHighlight: "Cavner Wealth and FinTech Services Brings Financial Solutions",
    subText: "Compare 300+ Verified Lenders Instantly",
    illustration: (
      <div className="relative w-full h-full min-h-[180px] sm:min-h-[240px] md:min-h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100/40 p-6">
        <div className="flex flex-col gap-2.5 w-full max-w-[240px]">
          {["Health Loan", "Home Loan", "Vehicle Loan", "Personal Loan"].map(
            (loan, idx) => (
              <div
                key={idx}
                className="bg-white px-3.5 py-2 rounded-xl shadow-sm border border-slate-100/80 flex items-center gap-2.5 transform transition-transform hover:translate-x-1"
              >
                <span className="w-2 h-2 rounded-full bg-[#f7941d] shrink-0" />
                <span className="text-xs font-bold text-slate-700">{loan}</span>
              </div>
            ),
          )}
        </div>
      </div>
    ),
  },
  {
    mainText: "Trusted by Thousands",
    brandHighlight: "for Their Financial Needs",
    subText: "10,000+ Happy Customers",
    illustration: (
      <div className="relative w-full h-full min-h-[180px] sm:min-h-[240px] md:min-h-full overflow-hidden bg-slate-50 flex items-center justify-center">
        <img
          src="https://media.istockphoto.com/id/1958309457/photo/happy-family-with-child-sitting-among-moving-boxes-and-using-laptop.webp?a=1&b=1&s=612x612&w=0&k=20&c=E3lJJ36YdlUb7MwlRdQYpo4o1FM-8IjkcEZlJL_P6mg="
          alt="Happy family using laptop among moving boxes"
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-transparent via-transparent to-white/10" />
      </div>
    ),
  },
  {
    mainText: "India's best platform for ",
    brandHighlight: "Loans, Cards and Investments",
    subText: "One Stop for all Financial Solutions",
    illustration: (
      <div className="relative w-full h-full min-h-[180px] sm:min-h-[240px] md:min-h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100/40 p-6">
        <div className="flex flex-col gap-2.5 w-full max-w-[240px]">
          {["Health Loan", "Home Loan", "Vehicle Loan", "Personal Loan"].map(
            (loan, idx) => (
              <div
                key={idx}
                className="bg-white px-3.5 py-2 rounded-xl shadow-sm border border-slate-100/80 flex items-center gap-2.5 transform transition-transform hover:translate-x-1"
              >
                <span className="w-2 h-2 rounded-full bg-[#f7941d] shrink-0" />
                <span className="text-xs font-bold text-slate-700">{loan}</span>
              </div>
            ),
          )}
        </div>
      </div>
    ),
  },
  {
    mainText: " We also assist you in generating a",
    brandHighlight: "Professional Project Report for Loan Approvals",
    subText: "Ensure compliance with bank requirements to maximize your funding success.",
    illustration: (
      <div className="relative w-full h-full min-h-[180px] sm:min-h-[240px] md:min-h-full overflow-hidden bg-slate-50 flex items-center justify-center">
        <img
          src="https://plus.unsplash.com/premium_photo-1661277697952-0cacde72c755?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvamVjdCUyMHJlcG9ydHxlbnwwfHwwfHx8MA%3D%3D"
          alt="Happy family using laptop among moving boxes"
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-transparent via-transparent to-white/10" />
      </div>
    ),
  },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#fafafa] w-full">
      {/* Background Micro Dot Mesh */}
      <div
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(14,42,53,0.08) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* DYNAMIC BANNER CONTAINER */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-6">
        <div className="relative w-full rounded-2xl overflow-hidden bg-white border border-slate-200/70 shadow-sm min-h-[460px] sm:min-h-[500px] md:min-h-[380px] lg:min-h-[420px]">
          {HERO_SLIDES.map((slide, index) => {
            const isActive = index === activeSlide;
            return (
              <div
                key={index}
                className={`absolute inset-0 w-full h-full grid grid-cols-1 md:grid-cols-12 transition-all duration-700 ease-in-out ${
                  isActive
                    ? "opacity-100 z-10 pointer-events-auto"
                    : "opacity-0 z-0 pointer-events-none"
                }`}
              >
                {/* LEFT TEXT BOX PANEL */}
                <div
                  className={`col-span-1 md:col-span-7 lg:col-span-8 flex flex-col justify-center px-5 sm:px-8 md:px-12 pt-8 pb-16 md:py-6 transition-all duration-700 delay-100 ${
                    isActive
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-4 opacity-0"
                  }`}
                >
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[38px] font-black tracking-tight text-[#0f3742] leading-[1.25] sm:leading-[1.2]">
                    {slide.mainText}
                    <span className="text-[#f7941d] block mt-1 font-black">
                      {slide.brandHighlight}
                    </span>
                  </h2>
                  <p className="text-xs sm:text-sm md:text-base text-red-600 font-bold mt-2.5 sm:mt-4 tracking-wide">
                    {slide.subText}
                  </p>
                </div>

                {/* RIGHT VISUAL GRAPHIC PANEL */}
                <div
                  className={`col-span-1 md:col-span-5 lg:col-span-4 w-full h-full relative order-first md:order-last transition-all duration-700 ${
                    isActive ? "scale-100 opacity-100" : "scale-95 opacity-0"
                  }`}
                >
                  {slide.illustration}
                </div>
              </div>
            );
          })}

          {/* Linear Pagination Bar Tickers */}
          <div className="absolute bottom-5 left-5 sm:left-8 md:left-12 flex gap-2 z-20">
            {HERO_SLIDES.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`h-1.5 rounded-full transition-all duration-300 focus:outline-none ${
                  index === activeSlide
                    ? "bg-[#f7941d] w-7"
                    : "bg-slate-200 w-3 hover:bg-slate-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* SECONDARY BOTTOM SECTION: TYPOGRAPHY LAYOUT & KEY STATS BAR */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-10 pb-14 flex flex-col items-center text-center">
        <h3 className="text-xs uppercase font-black tracking-[0.25em] text-slate-400 mb-6">
          Our Platform At A Glance
        </h3>

        {/* Responsive Grid layout for Statistics elements */}
        <div className="grid grid-cols-3 gap-4 sm:gap-8 md:gap-16 max-w-2xl w-full justify-center">
          <Stat
            icon={ShieldCheck}
            value="100% Secure"
            label="Data Encryption"
          />
          <Stat icon={Users} value="1000+" label="Happy Clients" />
          <Stat icon={Landmark} value="300+" label="Verified Banks" />
        </div>
      </div>
    </section>
  );
}

function Stat({ icon: Icon, value, label }) {
  return (
    <div className="flex flex-col items-center text-center group">
      <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-white text-[#0e2a35] grid place-items-center mb-2 border border-slate-200/60 shadow-sm transition-transform group-hover:-translate-y-0.5">
        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" />
      </div>
      <div className="text-xs sm:text-base font-black text-[#0e2a35] tracking-tight leading-none">
        {value}
      </div>
      <div className="text-[9px] sm:text-[11px] text-[#6b7b82] mt-1 font-semibold tracking-wide uppercase">
        {label}
      </div>
    </div>
  );
}
