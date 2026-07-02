import React from "react";
import Investment from "../assets/investment";
import InvestmentCard from "../components/InvestmentCard";

const InvestmentPlan = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-50 text-indigo-600 mb-4 border border-indigo-100">
            Asset Classes
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Different Types Of{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Investment
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-500 font-medium leading-relaxed">
            Discover smarter ways to grow your wealth. Explore our diverse asset
            instruments designed to secure your financial future.
          </p>
        </div>

        {/* Responsive Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {Investment.map((item) => (
            <InvestmentCard
              key={item.id || item.title || item.name}
              Investment={item}
            />
          ))}
        </div>

        {/* --- NEW CORPORATE SECTIONS ADDED BELOW --- */}
        {/* Subtle Background Pattern Accent */}

        {/* 2. Trust / Corporate FAQ Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <h3 className="text-2xl font-bold text-slate-900 text-center mb-8 tracking-tight">
            Frequently Asked Questions
          </h3>
          <div className="space-y-4">
            <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-sm">
              <h4 className="font-bold text-slate-800 mb-2 text-base">
                How do I determine my portfolio risk tolerance?
              </h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                Risk tolerance depends heavily on your age, timeline, and core
                financial objectives. Equities offer higher growth with higher
                short-term risk, whereas Government Bonds provide fixed
                security.
              </p>
            </div>
            <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-sm">
              <h4 className="font-bold text-slate-800 mb-2 text-base">
                Are there any account management fees?
              </h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                Our base platform tracking tools are completely free. Asset
                management costs (expense ratios) depend entirely on the
                specific mutual fund or clearing instrument selected.
              </p>
            </div>
          </div>
        </div>

        {/* 3. Regulatory / Compliance Disclaimer */}
        <footer className="border-t border-slate-200 pt-8 max-w-5xl mx-auto">
          <div className="text-[11px] text-slate-400 leading-relaxed space-y-3">
            <p className="font-medium uppercase tracking-wider text-slate-500 text-[10px]">
              Regulatory Disclosure & Investment Risk Warning
            </p>
            <p>
              All investment strategies involve risk of loss. Past performance
              is no guarantee of future returns. The descriptions provided on
              this portal are for educational purposes only and do not
              constitute formal fiduciary financial, tax, or legal advice.
            </p>
            <p>
              Mutual Funds, Systematic Investment Plans (SIPs), and Stock
              Investments are subject to market volatility risks. Read all
              scheme-related transaction prospectuses and offering documentation
              carefully before allocating capital. Fixed deposits and government
              bonds carry explicit issuer terms.
            </p>
            <p className="text-center pt-4 text-[12px] text-slate-500 font-medium">
              © {new Date().getFullYear()} Cavner Wealth & FinTech Management Inc. All
              Rights Reserved. Brokerage products provided by registered
              regulatory clearing houses.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default InvestmentPlan;
