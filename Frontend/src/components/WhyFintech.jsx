import { Zap, FileCheck, Wallet, Layers, Smartphone } from "lucide-react";

const features = [
  { Icon: Zap, title: "Quick Loan Approvals", text: "Faster approvals help borrowers receive funds during urgent financial situations." },
  { Icon: FileCheck, title: "Easy Documentation", text: "Minimal paperwork makes the loan application process simple and stress-free." },
  { Icon: Wallet, title: "Flexible EMI Plans", text: "Choose repayment options that fit your monthly budget and lifestyle." },
  { Icon: Layers, title: "Multiple Loan Options", text: "Compare offers from 300+ lenders to find the best deal in seconds." },
  { Icon: Smartphone, title: "Smooth Digital Journey", text: "End-to-end online application with electronic verification and tracking." },
];

export default function WhyFintech() {
  return (
    <section className="py-20 w-full max-w-[1280px] mx-auto px-4 md:px-8">
      {/* Section Head */}
      <div className="text-center max-w-[40rem] mx-auto mb-12">
        <p className="text-[0.75rem] tracking-[0.15em] uppercase font-bold text-[#f7941d]">
          Why Fintech
        </p>
        <h2 className="mt-3 text-[clamp(1.875rem,3.5vw,2.5rem)] font-bold tracking-tight leading-[1.1] text-[#0e2a35]">
          More Borrowers Trust Cavner Wealth and Fintech for{" "}
          <span className="bg-gradient-to-r from-[#f7941d] to-[#e63946] bg-clip-text text-transparent">
            Fast Loan Solutions
          </span>
        </h2>
      </div>

      {/* Grid Layout */}
      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {features.map(({ Icon, title, text }, i) => (
          <div 
            className="group relative overflow-hidden bg-white border border-[#e8e6e0] rounded-[22px] p-7 transition-shadow duration-250 hover:shadow-[0_12px_40px_-10px_rgba(14,42,53,0.18)]" 
            key={title}
          >
            {/* Top Right Background Corner Flare */}
            <div className="absolute top-0 right-0 w-[100px] h-[100px] rounded-full bg-gradient-to-br from-[rgba(247,148,29,0.12)] to-transparent pointer-events-none" />
            
            {/* Feature Icon */}
            <div className="w-12 h-12 rounded-[12px] bg-[#0e2a35] text-white grid place-items-center mb-5">
              <Icon size={22} />
            </div>
            
            {/* Content */}
            <h3 className="text-[1.1rem] font-bold tracking-tight leading-[1.1] text-[#0e2a35]">
              {title}
            </h3>
            <p className="mt-2 text-[0.875rem] text-[#6b7b82] leading-[1.5]">
              {text}
            </p>
            
            {/* Large Background Counter Number */}
            <span className="absolute bottom-2 right-5 text-[3rem] font-extrabold text-[rgba(14,42,53,0.06)] leading-none select-none pointer-events-none">
              0{i + 1}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}