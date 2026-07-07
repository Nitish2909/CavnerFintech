import React, { useState, useEffect } from 'react';

const AmortizationCalculator = () => {
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
    }).format(amount);
  };

  return (
    <div style={{ maxWidth: '900px', margin: '40px auto', padding: '30px', fontFamily: 'sans-serif', backgroundColor: '#f8fafc', borderRadius: '16px' }}>
      
      <div style={{ marginBottom: '32px', textAlign: 'center' }}>
        <h2 style={{ margin: '0 0 8px 0', color: '#1e293b', fontSize: '28px' }}>EMI & Amortization Calculator</h2>
        <p style={{ margin: 0, color: '#64748b' }}>Plan your loan repayment schedule with Indian Currency (₹) Formatting</p>
      </div>
      
      {/* Input Group */}
      <div style={{ background: '#ffffff', padding: '24px', borderRadius: '12px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', marginBottom: '32px', border: '1px solid #e2e8f0' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#334155' }}>Loan Amount (₹)</label>
          <input type="number" value={loanAmount} onChange={(e) => setLoanAmount(e.target.value)} style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e1', boxSizing: 'border-box' }} />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#334155' }}>Interest Rate (% P.A.)</label>
          <input type="number" step="0.05" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e1', boxSizing: 'border-box' }} />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#334155' }}>Loan Term (Years)</label>
          <input type="number" value={loanTerm} onChange={(e) => setLoanTerm(e.target.value)} style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e1', boxSizing: 'border-box' }} />
        </div>
      </div>

      {/* Loader Graphic Overlay Element */}
      <div style={{ opacity: loading ? 0.5 : 1, transition: 'opacity 0.2s' }}>
        {/* KPI blocks */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', marginBottom: '32px' }}>
          <div style={{ background: '#eff6ff', padding: '20px', borderRadius: '12px', border: '1px solid #bfdbfe', textAlign: 'center' }}>
            <span style={{ fontSize: '13px', color: '#1e40af', fontWeight: '600' }}>MONTHLY EMI</span>
            <p style={{ fontSize: '24px', fontWeight: '700', margin: '8px 0 0 0', color: '#1d4ed8' }}>{formatIndianCurrency(results.monthlyPayment)}</p>
          </div>
          <div style={{ background: '#fef2f2', padding: '20px', borderRadius: '12px', border: '1px solid #fee2e2', textAlign: 'center' }}>
            <span style={{ fontSize: '13px', color: '#991b1b', fontWeight: '600' }}>TOTAL INTEREST</span>
            <p style={{ fontSize: '24px', fontWeight: '700', margin: '8px 0 0 0', color: '#dc2626' }}>{formatIndianCurrency(results.totalInterest)}</p>
          </div>
          <div style={{ background: '#f0fdf4', padding: '20px', borderRadius: '12px', border: '1px solid #dcfce7', textAlign: 'center' }}>
            <span style={{ fontSize: '13px', color: '#166534', fontWeight: '600' }}>TOTAL AMOUNT PAYABLE</span>
            <p style={{ fontSize: '24px', fontWeight: '700', margin: '8px 0 0 0', color: '#16a34a' }}>{formatIndianCurrency(results.totalPayment)}</p>
          </div>
        </div>

        {/* Breakdowns */}
        {results.schedule.length > 0 && (
          <div style={{ background: '#ffffff', borderRadius: '12px', border: '1px solid #e2e8f0', padding: '24px' }}>
            <h3 style={{ margin: '0 0 16px 0', color: '#1e293b' }}>Breakdown Schedule</h3>
            <div style={{ maxHeight: '380px', overflowY: 'auto', border: '1px solid #f1f5f9', borderRadius: '8px' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '14px' }}>
                <thead style={{ position: 'sticky', top: 0, background: '#f8fafc', zIndex: 1, boxShadow: 'inset 0 -1px 0 #e2e8f0' }}>
                  <tr>
                    <th style={{ padding: '14px 16px', color: '#475569' }}>Month</th>
                    <th style={{ padding: '14px 16px', color: '#475569' }}>EMI</th>
                    <th style={{ padding: '14px 16px', color: '#475569' }}>Principal Paid</th>
                    <th style={{ padding: '14px 16px', color: '#475569' }}>Interest Paid</th>
                    <th style={{ padding: '14px 16px', color: '#475569' }}>Remaining Balance</th>
                  </tr>
                </thead>
                <tbody>
                  {results.schedule.map((row) => (
                    <tr key={row.month} style={{ borderBottom: '1px solid #f1f5f9' }}>
                      <td style={{ padding: '14px 16px', color: '#64748b' }}>{row.month}</td>
                      <td style={{ padding: '14px 16px', color: '#1e293b' }}>{formatIndianCurrency(row.payment)}</td>
                      <td style={{ padding: '14px 16px', color: '#16a34a' }}>{formatIndianCurrency(row.principalPaid)}</td>
                      <td style={{ padding: '14px 16px', color: '#dc2626' }}>{formatIndianCurrency(row.interestPaid)}</td>
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