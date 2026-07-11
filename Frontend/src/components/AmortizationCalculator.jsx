import React, { useState, useEffect } from 'react';

const AmortizationCalculator = () => {
  // Kept intact exactly as requested
  const [loanAmount, setLoanAmount] = useState();
  const [interestRate, setInterestRate] = useState();
  const [loanTerm, setLoanTerm] = useState();
  
  // State to hold data coming back from the backend API
  const [results, setResults] = useState({
    monthlyPayment: 0,
    totalInterest: 0,
    totalPayment: 0,
    schedule: []
  });
  const [loading, setLoading] = useState(false);

  // Trigger backend computation whenever inputs mutate
  useEffect(() => {
    const fetchAmortizationData = async () => {
      setLoading(true);
      try {
        const response = await fetch('http://localhost:3000/api/loancalculator/calculate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ loanAmount, interestRate, loanTerm })
        });
        const data = await response.json();
        if (response.ok) {
          setResults(data);
        }
      } catch (err) {
        console.error("Failed to fetch calculation breakdown:", err);
      } finally {
        setLoading(false);
      }
    };

    const delayDebounce = setTimeout(() => {
      fetchAmortizationData();
    }, 400); // 400ms debounce prevents API spam while typing

    return () => clearTimeout(delayDebounce);
  }, [loanAmount, interestRate, loanTerm]);

  const formatIndianCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount || 0); // Guarded for undefined values during initial state
  };

  return (
    <div style={{ maxWidth: '1000px', margin: '20px auto', padding: '20px', fontFamily: 'system-ui, -apple-system, sans-serif', backgroundColor: '#fdfdfd', borderRadius: '24px' }}>
      
      {/* Injecting CSS styles for animations, sliders, and responsive layout grids */}
      <style>{`
        .calc-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .slider-input {
          -webkit-appearance: none;
          width: 100%;
          height: 6px;
          background: #e2e8f0;
          border-radius: 4px;
          outline: none;
          margin-top: 12px;
          cursor: pointer;
        }
        .slider-input::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #2563eb;
          cursor: pointer;
          transition: transform 0.1s ease;
        }
        .slider-input::-webkit-slider-thumb:hover {
          transform: scale(1.2);
        }
        .kpi-card {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .kpi-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);
        }
        .spinner {
          border: 3px solid #f3f3f3;
          border-top: 3px solid #2563eb;
          border-radius: 50%;
          width: 24px;
          height: 24px;
          animation: spin 1s linear infinite;
          margin: 0 auto 10px auto;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @media (max-width: 768px) {
          .calc-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
        }
      `}</style>

      <div style={{ marginBottom: '32px', textAlign: 'center', position: 'relative' }}>
        <h2 style={{ margin: '0 0 8px 0', color: '#0f172a', fontSize: '32px', fontWeight: '800', letterSpacing: '-0.5px' }}>EMI & Amortization Calculator</h2>
        <p style={{ margin: 0, color: '#64748b', fontSize: '15px' }}>Plan your loan repayment schedule with Indian Currency (₹) Formatting</p>
        
        {/* Absolute loader indicator element that doesn't push down layout */}
        {loading && (
          <div style={{ position: 'absolute', right: '10px', top: '10px', display: 'flex', alignItems: 'center', gap: '8px', background: '#ffffff', padding: '6px 12px', borderRadius: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
            <div className="spinner" style={{ margin: 0, width: '14px', height: '14px', borderWidth: '2px' }}></div>
            <span style={{ fontSize: '12px', color: '#64748b', fontWeight: '500' }}>Updating...</span>
          </div>
        )}
      </div>
      
      {/* Input Group — Responsive Design applied via .calc-grid style wrapper */}
      <div className="calc-grid" style={{ background: '#ffffff', padding: '28px', borderRadius: '20px', marginBottom: '32px', boxShadow: '0 4px 20px -2px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9' }}>
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <label style={{ fontWeight: '600', color: '#334155', fontSize: '14px' }}>Loan Amount</label>
            <span style={{ fontWeight: '700', color: '#2563eb', fontSize: '15px' }}>{formatIndianCurrency(loanAmount)}</span>
          </div>
          <input type="number" placeholder="0" value={loanAmount || ''} onChange={(e) => setLoanAmount(e.target.value)} style={{ width: '100%', padding: '12px', marginTop: '8px', borderRadius: '10px', border: '1px solid #cbd5e1', boxSizing: 'border-box', fontSize: '16px', fontWeight: '500' }} />
          <input type="range" min="0" max="10000000" step="50000" value={loanAmount || 0} onChange={(e) => setLoanAmount(e.target.value)} className="slider-input" />
        </div>

        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <label style={{ fontWeight: '600', color: '#334155', fontSize: '14px' }}>Interest Rate</label>
            <span style={{ fontWeight: '700', color: '#2563eb', fontSize: '15px' }}>{interestRate || 0}% P.A.</span>
          </div>
          <input type="number" step="0.05" placeholder="0" value={interestRate || ''} onChange={(e) => setInterestRate(e.target.value)} style={{ width: '100%', padding: '12px', marginTop: '8px', borderRadius: '10px', border: '1px solid #cbd5e1', boxSizing: 'border-box', fontSize: '16px', fontWeight: '500' }} />
          <input type="range" min="0" max="30" step="0.1" value={interestRate || 0} onChange={(e) => setInterestRate(e.target.value)} className="slider-input" />
        </div>

        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <label style={{ fontWeight: '600', color: '#334155', fontSize: '14px' }}>Loan Term</label>
            <span style={{ fontWeight: '700', color: '#2563eb', fontSize: '15px' }}>{loanTerm || 0} Years</span>
          </div>
          <input type="number" placeholder="0" value={loanTerm || ''} onChange={(e) => setLoanTerm(e.target.value)} style={{ width: '100%', padding: '12px', marginTop: '8px', borderRadius: '10px', border: '1px solid #cbd5e1', boxSizing: 'border-box', fontSize: '16px', fontWeight: '500' }} />
          <input type="range" min="0" max="40" step="1" value={loanTerm || 0} onChange={(e) => setLoanTerm(e.target.value)} className="slider-input" />
        </div>
      </div>

      {/* Loader Graphic Overlay Element */}
      <div style={{ opacity: loading ? 0.7 : 1, transition: 'opacity 0.2s', position: 'relative' }}>
        
        {/* KPI blocks — Styled dynamically using responsive layouts */}
        <div className="calc-grid" style={{ marginBottom: '32px' }}>
          <div className="kpi-card" style={{ background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)', padding: '24px', borderRadius: '16px', border: '1px solid #bfdbfe', textAlign: 'center' }}>
            <span style={{ fontSize: '12px', color: '#1e40af', fontWeight: '700', letterSpacing: '0.5px' }}>MONTHLY EMI</span>
            <p style={{ fontSize: '26px', fontWeight: '800', margin: '8px 0 0 0', color: '#1d4ed8' }}>{formatIndianCurrency(results.monthlyPayment)}</p>
          </div>
          <div className="kpi-card" style={{ background: 'linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%)', padding: '24px', borderRadius: '16px', border: '1px solid #fee2e2', textAlign: 'center' }}>
            <span style={{ fontSize: '12px', color: '#991b1b', fontWeight: '700', letterSpacing: '0.5px' }}>TOTAL INTEREST</span>
            <p style={{ fontSize: '26px', fontWeight: '800', margin: '8px 0 0 0', color: '#dc2626' }}>{formatIndianCurrency(results.totalInterest)}</p>
          </div>
          <div className="kpi-card" style={{ background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)', padding: '24px', borderRadius: '16px', border: '1px solid #dcfce7', textAlign: 'center' }}>
            <span style={{ fontSize: '12px', color: '#166534', fontWeight: '700', letterSpacing: '0.5px' }}>TOTAL AMOUNT PAYABLE</span>
            <p style={{ fontSize: '26px', fontWeight: '800', margin: '8px 0 0 0', color: '#16a34a' }}>{formatIndianCurrency(results.totalPayment)}</p>
          </div>
        </div>

        {/* Breakdowns */}
        {results.schedule.length > 0 && (
          <div style={{ background: '#ffffff', borderRadius: '20px', border: '1px solid #e2e8f0', padding: '24px', boxShadow: '0 4px 20px -2px rgba(0,0,0,0.02)' }}>
            <h3 style={{ margin: '0 0 16px 0', color: '#0f172a', fontWeight: '700' }}>Breakdown Schedule</h3>
            <div style={{ maxHeight: '380px', overflowY: 'auto', border: '1px solid #f1f5f9', borderRadius: '12px' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '14px' }}>
                <thead style={{ position: 'sticky', top: 0, background: '#f8fafc', zIndex: 1, boxShadow: 'inset 0 -1px 0 #e2e8f0' }}>
                  <tr>
                    <th style={{ padding: '14px 16px', color: '#475569', fontWeight: '600' }}>Month</th>
                    <th style={{ padding: '14px 16px', color: '#475569', fontWeight: '600' }}>EMI</th>
                    <th style={{ padding: '14px 16px', color: '#475569', fontWeight: '600' }}>Principal Paid</th>
                    <th style={{ padding: '14px 16px', color: '#475569', fontWeight: '600' }}>Interest Paid</th>
                    <th style={{ padding: '14px 16px', color: '#475569', fontWeight: '600' }}>Remaining Balance</th>
                  </tr>
                </thead>
                <tbody>
                  {results.schedule.map((row) => (
                    <tr key={row.month} style={{ borderBottom: '1px solid #f1f5f9' }}>
                      <td style={{ padding: '14px 16px', color: '#64748b', fontWeight: '500' }}>{row.month}</td>
                      <td style={{ padding: '14px 16px', color: '#1e293b' }}>{formatIndianCurrency(row.payment)}</td>
                      <td style={{ padding: '14px 16px', color: '#16a34a', fontWeight: '500' }}>{formatIndianCurrency(row.principalPaid)}</td>
                      <td style={{ padding: '14px 16px', color: '#dc2626', fontWeight: '500' }}>{formatIndianCurrency(row.interestPaid)}</td>
                      <td style={{ padding: '14px 16px', color: '#1e293b', fontWeight: '600' }}>{formatIndianCurrency(row.remainingBalance)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AmortizationCalculator;