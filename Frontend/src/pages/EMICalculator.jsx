import { useMemo, useState } from "react";
import { Calculator } from "lucide-react";

const fmt = (n) => "₹ " + Math.round(n).toLocaleString("en-IN");

export default function EmiCalculator() {
  const [amount, setAmount] = useState(500000);
  const [rate, setRate] = useState(10.5);
  const [tenure, setTenure] = useState(36);

  const { emi, totalInterest, totalPayment } = useMemo(() => {
    const r = rate / 12 / 100;
    const n = tenure;
    const e = (amount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const total = e * n;
    return { emi: e, totalInterest: total - amount, totalPayment: total };
  }, [amount, rate, tenure]);

  return (
    <section id="emi" className="py-20 w-full max-w-[1280px] mx-auto px-4 md:px-8">
      {/* EMI Wrap */}
      <div className="rounded-[28px] overflow-hidden text-white bg-gradient-to-br from-[#0e2a35] to-[#16424f]">
        {/* EMI Inner Grid */}
        <div className="grid gap-10 p-8 md:p-12 lg:grid-cols-2">
          
          {/* Left Column: Sliders */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-[11.2px] font-bold tracking-wider uppercase">
              <Calculator size={14} /> EMI Calculator
            </div>
            <h2 className="text-[clamp(1.875rem,3.5vw,2.5rem)] font-bold tracking-tight leading-[1.1] mt-4">
              Plan smarter with our <span className="text-[#f7941d]">Loan EMI Calculator</span>
            </h2>
            <p className="text-white/70 mt-3 text-[1.1rem] max-w-xl leading-[1.5]">
              Estimate your monthly EMI, total interest, and overall repayment before committing to a loan tenure.
            </p>

            <div className="mt-8 flex flex-col gap-6">
              <Slider label="Loan Amount" value={amount} min={50000} max={5000000} step={10000} suffix={fmt(amount)} onChange={setAmount} />
              <Slider label="Interest Rate (%)" value={rate} min={5} max={24} step={0.1} suffix={`${rate.toFixed(1)}%`} onChange={setRate} />
              <Slider label="Tenure (Months)" value={tenure} min={6} max={240} step={1} suffix={`${tenure} mo`} onChange={setTenure} />
            </div>
          </div>

          {/* Right Column: Calculations & Summary Display */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[22px] p-8 flex flex-col justify-center">
            <div className="flex justify-between items-center">
              <span className="text-[1rem] text-white/80">Monthly EMI</span>
              <span className="text-[1.875rem] font-bold text-[#f7941d]">{fmt(emi)}</span>
            </div>
            
            <div className="h-[1px] bg-white/10 my-5" />
            
            <div className="flex justify-between items-center"><span className="text-[0.875rem] text-white/60">Principal Amount</span><span className="font-bold">{fmt(amount)}</span></div>
            <div className="h-3" />
            <div className="flex justify-between items-center"><span className="text-[0.875rem] text-white/60">Total Interest</span><span className="font-bold">{fmt(totalInterest)}</span></div>
            <div className="h-3" />
            <div className="flex justify-between items-center"><span className="text-[0.875rem] text-white/60">Total Payment</span><span className="font-bold">{fmt(totalPayment)}</span></div>

            {/* Principal vs Interest Distribution Bar */}
            <div className="mt-6 h-2.5 rounded-full bg-white/10 overflow-hidden flex">
              <div className="h-full bg-[#f7941d]" style={{ width: `${(amount / totalPayment) * 100}%` }} />
              <div className="h-full bg-[#e63946]" style={{ width: `${(totalInterest / totalPayment) * 100}%` }} />
            </div>
            
            <div className="mt-3 flex gap-5 text-[0.75rem] text-white/70">
              <span className="inline-flex items-center"><span className="inline-block w-2.5 h-2.5 rounded-full mr-1.5 bg-[#f7941d]" />Principal</span>
              <span className="inline-flex items-center"><span className="inline-block w-2.5 h-2.5 rounded-full mr-1.5 bg-[#e63946]" />Interest</span>
            </div>

            <button className="w-full inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full font-semibold transition-all mt-6 bg-[#f7941d] text-white shadow-[0_12px_40px_-10px_rgba(14,42,53,0.18)] hover:brightness-105 hover:-translate-y-[1px]">
              Apply for this Loan
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

function Slider({ label, value, min, max, step, suffix, onChange }) {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between mb-2 text-[0.875rem]">
        <span className="text-white/70">{label}</span>
        <span className="text-[#f7941d] font-bold">{suffix}</span>
      </div>
      
      {/* Range Input with optimized cross-browser standard utility definitions */}
      <input 
        type="range" 
        min={min} 
        max={max} 
        step={step} 
        value={value} 
        onChange={(e) => onChange(Number(e.target.value))} 
        className="w-full h-1.5 rounded-full bg-white/10 appearance-none outline-none cursor-pointer
          [&::-webkit-slider-thumb]:appearance-none 
          [&::-webkit-slider-thumb]:w-5 
          [&::-webkit-slider-thumb]:h-5 
          [&::-webkit-slider-thumb]:rounded-full 
          [&::-webkit-slider-thumb]:bg-[#f7941d] 
          [&::-webkit-slider-thumb]:shadow-[0_2px_8px_rgba(0,0,0,0.3)]
          [&::-moz-range-thumb]:w-5 
          [&::-moz-range-thumb]:h-5 
          [&::-moz-range-thumb]:border-none 
          [&::-moz-range-thumb]:rounded-full 
          [&::-moz-range-thumb]:bg-[#f7941d]"
      />
    </div>
  );
}