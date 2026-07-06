import { useState } from "react";
import { Calculator, IndianRupee } from "lucide-react";

const EmiCalculator = () => {
  const [amount, setAmount] = useState(500000);
  const [rate, setRate] = useState(11);
  const [tenure, setTenure] = useState(36);

  const monthlyRate = rate / 12 / 100;
  const months = tenure;
  const emi = amount * monthlyRate * Math.pow(1 + monthlyRate, months) / (Math.pow(1 + monthlyRate, months) - 1);
  const totalPayable = emi * months;
  const totalInterest = totalPayable - amount;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
      <div className="flex items-center gap-2 mb-5">
        <Calculator size={22} className="text-brand-600" />
        <h3 className="font-bold text-slate-800 text-lg">EMI Calculator</h3>
      </div>

      <div className="space-y-5">
        <div>
          <div className="flex justify-between text-sm mb-1">
            <label className="text-slate-600">Loan Amount</label>
            <span className="font-semibold text-slate-800">₹{amount.toLocaleString()}</span>
          </div>
          <input type="range" min="50000" max="5000000" step="50000" value={amount} onChange={(e) => setAmount(Number(e.target.value))} className="w-full accent-brand-600" />
        </div>

        <div>
          <div className="flex justify-between text-sm mb-1">
            <label className="text-slate-600">Interest Rate (% p.a.)</label>
            <span className="font-semibold text-slate-800">{rate}%</span>
          </div>
          <input type="range" min="5" max="30" step="0.5" value={rate} onChange={(e) => setRate(Number(e.target.value))} className="w-full accent-brand-600" />
        </div>

        <div>
          <div className="flex justify-between text-sm mb-1">
            <label className="text-slate-600">Tenure (months)</label>
            <span className="font-semibold text-slate-800">{tenure} mo</span>
          </div>
          <input type="range" min="6" max="360" step="6" value={tenure} onChange={(e) => setTenure(Number(e.target.value))} className="w-full accent-brand-600" />
        </div>
      </div>

      <div className="mt-6 bg-brand-50 rounded-xl p-5 space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-slate-600">Monthly EMI</span>
          <span className="font-bold text-brand-800 text-lg">₹{Math.round(emi).toLocaleString()}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-slate-600">Total Interest</span>
          <span className="font-semibold text-slate-700">₹{Math.round(totalInterest).toLocaleString()}</span>
        </div>
        <div className="flex justify-between text-sm pt-2 border-t border-brand-200">
          <span className="text-slate-600">Total Payable</span>
          <span className="font-semibold text-slate-800">₹{Math.round(totalPayable).toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};

export default EmiCalculator;
