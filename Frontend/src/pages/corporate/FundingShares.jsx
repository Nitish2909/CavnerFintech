import React, { useState } from "react";
import { LineChart, ShieldCheck, Wallet, ArrowRight, HelpCircle, CheckCircle, Layers, TrendingUp } from "lucide-react";

const FundingShare = () => {
  // Interactive loan value estimation state
  const [portfolioValue, setPortfolioValue] = useState(2000000); 
  const estimatedLTV = 0.50; // 50% average LTV for shares

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans pb-20">
      
      {/* --- SECTION 1: HERO / FUNDING AGAINST LISTED SHARES --- */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Block */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="inline-block bg-emerald-50 text-emerald-700 text-xs font-bold tracking-wider px-3 py-1 rounded-full uppercase border border-emerald-200">
                Funding Against Listed Shares, Mutual Funds, and Financial Assets
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Funding Against Listed Shares, Mutual Funds, and Financial Assets
            </h1>

            <div className="space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
              <p>
                In today's fast-moving world, investors often face a common situation. They need funds urgently, but they do not want to sell their investments. Selling shares or mutual funds can break long-term wealth plans. It may also lead to missed market growth. That is why secured funding options like loan against shares and loan against mutual funds are becoming popular.
              </p>
              <p>
                With a loan for shares and asset, you can unlock liquidity by pledging your financial securities instead of redeeming them. You can also apply loan against securities through a smooth and digital process. Many lenders now offer loan against shares online, making borrowing faster, simpler, and more transparent.
              </p>
              <p>
                However, lenders only accept securities from a loan against shares approved list, which includes highly liquid and exchange-approved stocks. If eligible, you may even get an instant loan against shares, helping you access funds quickly without disturbing your portfolio.
              </p>
            </div>
          </div>

          {/* Right Layout Visual Image Component */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-white rounded-3xl p-4 shadow-xl border border-slate-100 transition-transform hover:scale-[1.01]">
              <div className="rounded-2xl overflow-hidden bg-slate-100 flex items-center justify-center aspect-[4/3]">
                <img 
                  src="https://upniva.com/_next/image?url=%2Fimages%2Fbusiness-Loan.png&w=1080&q=75" 
                  alt="Funding Against Financial Assets Graphic" 
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* --- SECTION 2: INTERACTIVE ESTIMATION TOOL --- */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-6 md:p-8 text-white shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-3">
            <h3 className="text-xl md:text-2xl font-bold tracking-tight flex items-center gap-2">
              <LineChart className="text-emerald-400" size={24} />
              Instant Liquidity Calculator
            </h3>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
              Estimate your borrowing capacity instantly without disrupting compounding yields. Toggle your current aggregate asset market valuation below.
            </p>
            
            <div className="pt-4 space-y-2">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-slate-400">Portfolio Net Asset Value (NAV)</span>
                <span className="text-emerald-400 text-sm">₹{portfolioValue.toLocaleString('en-IN')}</span>
              </div>
              <input 
                type="range" 
                min="500000" 
                max="20000000" 
                step="500000"
                value={portfolioValue} 
                onChange={(e) => setPortfolioValue(Number(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-400"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-bold">
                <span>₹5 Lakhs</span>
                <span>₹2 Crores</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-800/80 border border-slate-700 rounded-2xl p-6 text-center space-y-4">
            <div>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Estimated Eligible Credit Limit (Max 50% LTV)</span>
              <span className="text-2xl md:text-3xl font-black text-white block mt-1">
                ₹{(portfolioValue * estimatedLTV).toLocaleString('en-IN')}*
              </span>
            </div>
            <button className="w-full bg-emerald-500 text-slate-950 font-bold text-xs tracking-wider py-3 rounded-xl hover:bg-emerald-400 transition-colors uppercase flex items-center justify-center gap-2">
              Pledge Portfolio Instantly <ArrowRight size={14} />
            </button>
            <span className="block text-[10px] text-slate-500">*Actual values depend on approved stock category criteria constraints.</span>
          </div>
        </div>
      </div>

      {/* --- SECTION 3: CONTENT EXPANSION --- */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-10 space-y-8 shadow-sm">
          
          {/* Main LAS Block */}
          <div className="space-y-3">
            <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">
              Loan Against Securities (LAS): Listed Shares, Promoter Holdings &amp; Structured Funding
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Loan Against Securities (LAS) is a secured lending solution that allows individuals, promoters, and corporates to unlock liquidity by pledging financial securities. These securities may include listed shares, promoter holdings, mutual funds, bonds, or other marketable instruments. Instead of selling investments, borrowers can use them as collateral to raise funds quickly and efficiently.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              This funding option is ideal for business expansion, working capital needs, strategic investments, or personal liquidity requirements. It ensures that long-term wealth creation remains undisturbed while short-term financial needs are met.
            </p>
          </div>

          {/* Child Card 1: Loan Against Listed Shares */}
          <div className="bg-slate-50 rounded-2xl p-5 md:p-6 border border-slate-200/60 space-y-4">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <CheckCircle className="text-emerald-500" size={18} />
              Loan Against Listed Shares
            </h3>
            <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
              Listed shares are equity shares that are traded on recognized stock exchanges. Lenders provide loans against approved listed shares based on their market value and volatility.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-gray-600 pl-2">
              <li className="flex items-center gap-2">• Quick processing and digital pledge facility</li>
              <li className="flex items-center gap-2">• Loan eligibility based on approved stock list</li>
              <li className="flex items-center gap-2">• Flexible withdrawal through overdraft structure</li>
              <li className="flex items-center gap-2">• Interest charged only on utilized amount</li>
              <li className="flex items-center gap-2">• Ideal for short-term liquidity management</li>
            </ul>
            <p className="text-xs text-slate-500 italic pt-2 border-t border-slate-200">
              For example, if the market value of pledged shares is ₹50 lakh, lenders may provide 50%–60% funding depending on the stock category and risk assessment.
            </p>
          </div>

          {/* Child Card 2: Funding Against Promoter Holdings */}
          <div className="bg-slate-50 rounded-2xl p-5 md:p-6 border border-slate-200/60 space-y-4">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <TrendingUp className="text-indigo-500" size={18} />
              Funding Against Promoter Holdings
            </h3>
            <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
              Promoters of listed companies often hold substantial equity stakes. Instead of diluting ownership by selling shares, promoters can leverage their holdings to raise structured funding.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-gray-600 pl-2">
              <li className="flex items-center gap-2">• Non-dilutive capital raising option</li>
              <li className="flex items-center gap-2">• Useful for expansion or acquisition financing</li>
              <li className="flex items-center gap-2">• Strategic liquidity without affecting control</li>
              <li className="flex items-center gap-2">• Customised loan-to-value (LTV) structures</li>
              <li className="flex items-center gap-2">• Structured repayment models</li>
            </ul>
            <p className="text-xs text-slate-500 italic pt-2 border-t border-slate-200">
              This solution is commonly used for business growth, refinancing existing debt, or supporting new ventures while retaining promoter control.
            </p>
          </div>

          {/* Child Card 3: Structured Loan Against Securities */}
          <div className="bg-slate-50 rounded-2xl p-5 md:p-6 border border-slate-200/60 space-y-4">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Layers className="text-amber-500" size={18} />
              Structured Loan Against Securities (Structured LAS)
            </h3>
            <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
              Structured LAS is a customized financing solution designed for high-value portfolios and complex funding requirements. It is generally tailored for HNIs, corporates, and promoters with diversified holdings.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-gray-600 pl-2">
              <li className="flex items-center gap-2">• Combination of term loan and overdraft facility</li>
              <li className="flex items-center gap-2">• Customized margin requirements</li>
              <li className="flex items-center gap-2">• Portfolio-backed financing solutions</li>
              <li className="flex items-center gap-2">• Flexible repayment tenure</li>
              <li className="flex items-center gap-2">• Risk-managed lending structure</li>
            </ul>
            <p className="text-xs text-slate-500 italic pt-2 border-t border-slate-200">
              Structured LAS ensures better capital efficiency. It balances risk, valuation comfort, and liquidity needs while preserving long-term investment strategy.
            </p>
          </div>

        </div>
      </div>

      {/* --- SECTION 4: INVENTORY FUNDING / LOAN AGAINST SHARES ORIGINAL DETAILS --- */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Card Visual Segment */}
        <div className="lg:col-span-5 order-last lg:order-first flex justify-center lg:justify-start">
          <div className="w-full max-w-md bg-gradient-to-tr from-blue-900 to-indigo-950 rounded-3xl p-6 relative overflow-hidden shadow-2xl border border-blue-800/60">
            <div className="absolute -right-16 -bottom-16 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 space-y-6">
              <div className="w-full h-52 rounded-2xl overflow-hidden bg-slate-900 border border-white/10 flex items-center justify-center shadow-md">
                <img 
                  src="https://upniva.com/_next/image?url=%2Fimages%2Fbusiness-Loan.png&w=1080&q=75" 
                  alt="Turn Investments into Instant Funds" 
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>

              <div className="space-y-2">
                <span className="inline-block bg-blue-500/10 text-blue-300 text-[10px] font-bold px-2 py-0.5 rounded border border-blue-500/20 uppercase tracking-wide">
                  Overdraft Line Structure Available
                </span>
                <h4 className="text-white font-bold text-base tracking-tight">Flexible Servicing Modality</h4>
                <p className="text-xs text-slate-300/90 leading-relaxed">
                  Pay interest solely on utilized capital limits rather than full allocation parameters. Perfect for sudden operating balance shifts or tactical market executions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content Column */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <span className="inline-block bg-amber-50 text-amber-700 text-xs font-bold tracking-wider px-3 py-1 rounded-full uppercase border border-amber-200">
              Inventory Funding
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
            Loan Against Shares: Turn Your Investments into Instant Funds
          </h2>

          <div className="space-y-4 text-xs md:text-sm text-gray-600 leading-relaxed">
            <p>
              A <strong className="text-gray-900 font-semibold">loan against shares</strong> is one of the smartest ways to raise funds without selling your investments. Many people hold equity shares for long-term wealth creation. But sometimes, urgent needs come up. You may need money for business expansion. You may need funds for personal expenses. In such situations, selling shares may not be the best decision. This is where an <strong className="text-gray-900 font-semibold">instant loan against shares</strong> becomes useful.
            </p>
            <p>
              In this loan, you pledge your listed shares as collateral. The lender provides you with funds based on the value of your holdings. You still remain the owner of the shares. This means you can continue enjoying dividend benefits and long-term appreciation. Only the shares are marked as pledged until repayment is completed.
            </p>
            <p>
              A major advantage is speed. As this type of loan is secured, approval is usually faster than for unsecured loans. Many lenders now offer loans against shares online, which makes the process even easier.
            </p>
            <p>
              For example, if you own shares worth ₹20 lakh, the lender may offer funding up to a certain percentage of that value. You get liquidity without breaking your portfolio. This is why loan for shares and asset solutions are gaining popularity among investors and business owners.
            </p>
            <p>
              A loan against shares is also flexible. You pay interest only on the amount you use. It works like an overdraft facility. This makes repayment more comfortable and cost-effective.
            </p>
          </div>
        </div>

      </div>

      {/* --- SECTION 5: BENEFITS HIGHLIGHT --- */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-12">
        <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex gap-3 items-start">
            <div className="p-2 bg-emerald-50 rounded-xl text-emerald-600 shrink-0">
              <Wallet size={20} />
            </div>
            <div>
              <h5 className="font-bold text-slate-900 text-sm">Keep Asset Ownership</h5>
              <p className="text-xs text-gray-500 mt-1">Keep collecting all dividends, bonuses, and rights benefits while your loan profile runs.</p>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <div className="p-2 bg-emerald-50 rounded-xl text-emerald-600 shrink-0">
              <ShieldCheck size={20} />
            </div>
            <div>
              <h5 className="font-bold text-slate-900 text-sm">No Prepayment Restrictions</h5>
              <p className="text-xs text-gray-500 mt-1">Settle lines cleanly at your discretion without facing steep transaction penalties.</p>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <div className="p-2 bg-emerald-50 rounded-xl text-emerald-600 shrink-0">
              <HelpCircle size={20} />
            </div>
            <div>
              <h5 className="font-bold text-slate-900 text-sm">Dynamic Eligibility Lists</h5>
              <p className="text-xs text-gray-500 mt-1">Wide range of approved structural components across multiple asset classifications.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default FundingShare;