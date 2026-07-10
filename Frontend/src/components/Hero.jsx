import React, { useState, useEffect } from "react";
import { ShieldCheck, Users, Landmark, ChevronLeft, ChevronRight } from "lucide-react"; // Added slider utility icons

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
          className="w-full h-full object-cover object-center transition-transform duration-[4500ms] ease-out scale-105 group-data-[active=true]:scale-100"
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
          className="w-full h-full object-cover object-center transition-transform duration-[4500ms] ease-out scale-105 group-data-[active=true]:scale-100"
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
          className="w-full h-full object-cover object-center transition-transform duration-[4500ms] ease-out scale-105 group-data-[active=true]:scale-100"
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
          className="w-full h-full object-cover object-center transition-transform duration-[4500ms] ease-out scale-105 group-data-[active=true]:scale-100"
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
                className="bg-white px-3.5 py-2 rounded-xl shadow-md border border-slate-100/80 flex items-center gap-2.5 transform transition-all duration-300 hover:translate-x-2 hover:shadow-lg hover:border-orange-200"
              >
                <span className="w-2 h-2 rounded-full bg-[#f7941d] shrink-0 animate-pulse" />
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
          className="w-full h-full object-cover object-center transition-transform duration-[4500ms] ease-out scale-105 group-data-[active=true]:scale-100"
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
                className="bg-white px-3.5 py-2 rounded-xl shadow-md border border-slate-100/80 flex items-center gap-2.5 transform transition-all duration-300 hover:translate-x-2 hover:shadow-lg hover:border-orange-200"
              >
                <span className="w-2 h-2 rounded-full bg-[#f7941d] shrink-0 animate-pulse" />
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
          className="w-full h-full object-cover object-center transition-transform duration-[4500ms] ease-out scale-105 group-data-[active=true]:scale-100"
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

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f8fafc] to-[#f1f5f9] w-full py-2">
      {/* Background Micro Dot Mesh */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(14,42,53,0.12) 1.5px, transparent 1.5px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* DYNAMIC BANNER CONTAINER */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-6 group/slider">
        <div className="relative w-full rounded-3xl overflow-hidden bg-white border border-slate-200/80 shadow-xl shadow-slate-100/50 min-h-[460px] sm:min-h-[500px] md:min-h-[380px] lg:min-h-[440px]">
          {HERO_SLIDES.map((slide, index) => {
            const isActive = index === activeSlide;
            return (
              <div
                key={index}
                data-active={isActive}
                className={`group absolute inset-0 w-full h-full grid grid-cols-1 md:grid-cols-12 transition-all duration-1000 cubic-bezier(0.4, 0, 0.2, 1) ${
                  isActive
                    ? "opacity-100 z-10 pointer-events-auto scale-100 visual-effects-trigger"
                    : "opacity-0 z-0 pointer-events-none scale-[0.98]"
                }`}
              >
                {/* LEFT TEXT BOX PANEL */}
                <div
                  className={`col-span-1 md:col-span-7 lg:col-span-8 flex flex-col justify-center px-6 sm:px-10 md:px-16 pt-10 pb-20 md:py-8 transition-all duration-700 ease-out ${
                    isActive
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-8 opacity-0"
                  }`}
                >
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-black tracking-tight text-[#0f3742] leading-[1.2] sm:leading-[1.15]">
                    <span className="inline-block transition-transform duration-700 delay-100 transform group-data-[active=true]:translate-y-0 group-data-[active=false]:translate-y-4">
                      {slide.mainText}
                    </span>
                    <span className="text-gradient bg-gradient-to-r from-[#f7941d] to-orange-600 bg-clip-text text-transparent block mt-2 font-black transition-all duration-700 delay-300 transform group-data-[active=true]:translate-y-0 group-data-[active=false]:translate-y-4">
                      {slide.brandHighlight}
                    </span>
                  </h2>
                  <p className="text-xs sm:text-sm md:text-base text-red-600 font-extrabold mt-4 sm:mt-6 tracking-wide bg-red-50 border border-red-100/50 rounded-full px-4 py-1.5 self-start shadow-sm transition-all duration-700 delay-500 transform group-data-[active=true]:translate-y-0 group-data-[active=false]:translate-y-4">
                    {slide.subText}
                  </p>
                </div>

                {/* RIGHT VISUAL GRAPHIC PANEL */}
                <div
                  className={`col-span-1 md:col-span-5 lg:col-span-4 w-full h-full relative order-first md:order-last transition-all duration-1000 ease-in-out ${
                    isActive ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
                  }`}
                >
                  {slide.illustration}
                </div>
              </div>
            );
          })}

          {/* Left/Right Directional Controls */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/90 shadow-md border border-slate-200/60 flex items-center justify-center text-slate-700 transition-all duration-300 opacity-0 group-hover/slider:opacity-100 hover:bg-[#0f3742] hover:text-white hover:scale-110 md:flex hidden"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/90 shadow-md border border-slate-200/60 flex items-center justify-center text-slate-700 transition-all duration-300 opacity-0 group-hover/slider:opacity-100 hover:bg-[#0f3742] hover:text-white hover:scale-110 md:flex hidden"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Linear Pagination Bar Tickers with Live CSS Loading Timers */}
          <div className="absolute bottom-6 left-6 sm:left-10 md:left-16 flex gap-3 z-20">
            {HERO_SLIDES.map((_, index) => {
              const isCurrent = index === activeSlide;
              return (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`relative h-2 rounded-full overflow-hidden transition-all duration-500 focus:outline-none bg-slate-100 border border-slate-200/40 shadow-inner ${
                    isCurrent ? "w-14" : "w-3 hover:bg-slate-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                >
                  {isCurrent && (
                    <span 
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#f7941d] to-orange-500 rounded-full"
                      style={{
                        width: '100%',
                        animation: 'sliderProgress 4500ms linear forwards'
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* SECONDARY BOTTOM SECTION: TYPOGRAPHY LAYOUT & KEY STATS BAR */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-12 pb-16 flex flex-col items-center text-center">
        <h3 className="text-xs uppercase font-black tracking-[0.3em] text-slate-400 mb-8 relative after:content-[''] after:block after:w-8 after:h-0.5 after:bg-orange-400 after:mx-auto after:mt-2">
          Our Platform At A Glance
        </h3>

        {/* Responsive Grid layout for Statistics elements */}
        <div className="grid grid-cols-3 gap-4 sm:gap-10 md:gap-20 max-w-3xl w-full justify-center">
          <Stat
            icon={ShieldCheck}
            value="100% Secure"
            label="Data Encryption"
          />
          <Stat icon={Users} value="1000+" label="Happy Clients" />
          <Stat icon={Landmark} value="300+" label="Verified Banks" />
        </div>

        {/* CSS Keyframe Injector for linear slider bar timing */}
        <style>{`
          @keyframes sliderProgress {
            from { width: 0%; }
            to { width: 100%; }
          }
        `}</style>
      </div>
    </section>
  );
}

function Stat({ icon: Icon, value, label }) {
  return (
    <div className="flex flex-col items-center text-center group cursor-pointer">
      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white text-[#0e2a35] grid place-items-center mb-3 border border-slate-200/70 shadow-md transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-xl group-hover:border-emerald-100 group-hover:bg-emerald-50/10">
        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600 transition-transform duration-300 group-hover:scale-110" />
      </div>
      <div className="text-sm sm:text-lg font-black text-[#0e2a35] tracking-tight leading-none group-hover:text-[#f7941d] transition-colors duration-300">
        {value}
      </div>
      <div className="text-[9px] sm:text-[11px] text-[#6b7b82] mt-1.5 font-bold tracking-wider uppercase">
        {label}
      </div>
    </div>
  );
}