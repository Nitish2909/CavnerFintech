import { Zap, FileCheck, Wallet, Layers, Smartphone, ShieldCheck, Percent, HelpCircle, Clock, Gift } from "lucide-react";

const features = [
  { Icon: Zap, title: "Quick Loan Approvals", text: "Faster approvals help borrowers receive funds during urgent financial situations." },
  { Icon: FileCheck, title: "Easy Documentation", text: "Minimal paperwork makes the loan application process simple and stress-free." },
  { Icon: Wallet, title: "Flexible EMI Plans", text: "Choose repayment options that fit your monthly budget and lifestyle." },
  { Icon: Layers, title: "Multiple Loan Options", text: "Compare offers from 300+ lenders to find the best deal in seconds." },
  { Icon: Smartphone, title: "Smooth Digital Journey", text: "End-to-end online application with electronic verification and tracking." },
  { Icon: ShieldCheck, title: "Safe & Secure", text: "Bank-grade encryption safeguards your personal and financial details at all times." },
  { Icon: Percent, title: "Competitive Rates", text: "Access industry-low interest rates customized exclusively for your credit profile." },
  { Icon: HelpCircle, title: "24/7 Expert Support", text: "Dedicated financial advisors are always ready to guide you through your journey." },
  { Icon: Clock, title: "Zero Hidden Charges", text: "Complete transparency with upfront fees and absolutely no surprise costs." },
  { Icon: Gift, title: "Loyalty Rewards", text: "Unlock premium cashback offers and lower rates on your subsequent loans." },
];

export default function WhyFintech() {
  return (
    <section className="py-24 w-full max-w-[1280px] mx-auto px-4 md:px-8 overflow-hidden">
      {/* Dynamic Keyframe Injection so you don't need to modify tailwind.config.js */}
      <style>{`
        @keyframes customFadeIn {
          0% { opacity: 0; transform: translateY(-12px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes customSlideUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes customTextShine {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
        .animate-fade-in {
          animation: customFadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .animate-slide-up {
          animation: customSlideUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .animate-text-shine {
          animation: customTextShine 4s linear infinite;
        }
      `}</style>

      {/* Section Head */}
      <div className="text-center max-w-[42rem] mx-auto mb-16 animate-fade-in">
        <p className="text-[0.8rem] tracking-[0.2em] uppercase font-extrabold text-[#f7941d] mb-3">
          Why Fintech
        </p>
        <h2 className="text-[clamp(2rem,4vw,2.75rem)] font-extrabold tracking-tight leading-[1.15] text-[#0e2a35]">
          More Borrowers Trust Cavner Wealth and Fintech for{" "}
          <span className="bg-gradient-to-r from-[#f7941d] via-[#e63946] to-[#f7941d] bg-[length:200%_auto] animate-text-shine bg-clip-text text-transparent">
            Fast Loan Solutions
          </span>
        </h2>
        <div className="h-[3px] w-16 bg-[#f7941d] mx-auto mt-5 rounded-full" />
      </div>

      {/* Grid Layout */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {features.map(({ Icon, title, text }, i) => (
          <div 
            className="group relative overflow-hidden bg-gradient-to-b from-white to-[#fafafa] border border-[#e8e6e0] rounded-[24px] p-8 
                       transition-all duration-300 ease-out
                       hover:-translate-y-1.5 hover:border-[#f7941d]/30 hover:bg-white
                       hover:shadow-[0_20px_50px_-12px_rgba(14,42,53,0.12)]
                       animate-slide-up" 
            key={title}
            style={{ animationDelay: `${i * 80}ms` }} // Reduced delay slightly so 10 elements load smoothly
          >
            {/* Top Right Background Corner Glow Flare */}
            <div className="absolute top-0 right-0 w-[130px] h-[130px] rounded-full bg-gradient-to-br from-[rgba(247,148,29,0.16)] to-transparent opacity-70 pointer-events-none transition-transform duration-500 group-hover:scale-150" />
            
            {/* Bottom Left Subtle Ambient Secondary Glow */}
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-tr from-[rgba(230,57,70,0.06)] to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            {/* Feature Icon Container */}
            <div className="w-14 h-14 rounded-[16px] bg-[#0e2a35] text-white grid place-items-center mb-6 
                            transition-all duration-300 relative overflow-hidden
                            group-hover:bg-[#f7941d] group-hover:scale-110 group-hover:shadow-[0_8px_20px_-4px_rgba(247,148,29,0.4)]">
              <Icon size={24} className="transition-transform duration-300 group-hover:rotate-[5deg]" />
            </div>
            
            {/* Content */}
            <h3 className="text-[1.2rem] font-bold tracking-tight leading-[1.2] text-[#0e2a35] transition-colors duration-200 group-hover:text-[#f7941d]">
              {title}
            </h3>
            <p className="mt-3 text-[0.925rem] text-[#55656c] leading-[1.6]">
              {text}
            </p>
            
            {/* Large Background Counter Number */}
            <span className="absolute bottom-1 right-5 text-[4.5rem] font-black text-[rgba(14,42,53,0.035)] leading-none select-none pointer-events-none 
                             transition-all duration-300 group-hover:text-[rgba(247,148,29,0.07)] group-hover:bottom-3">
              {i + 1 < 10 ? `0${i + 1}` : i + 1}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}