import React, { useState } from 'react';

const AmortizationCalculator = () => {
  // State for user inputs (Defaults configured for Indian context - e.g., 25 Lakhs)
  const [loanAmount, setLoanAmount] = useState(2500000);
  const [interestRate, setInterestRate] = useState(8.5); // Average home/car loan rate
  const [loanTerm, setLoanTerm] = useState(20); // 20 years is common for home loans

  // Calculation function
  const calculateAmortization = () => {
    const principal = parseFloat(loanAmount);
    const calculatedInterest = parseFloat(interestRate) / 100 / 12;
    const calculatedPayments = parseFloat(loanTerm) * 12;

    // Monthly payment formula
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthlyPayment = (principal * x * calculatedInterest) / (x - 1);

    if (!isFinite(monthlyPayment) || monthlyPayment <= 0) {
      return { monthlyPayment: 0, totalInterest: 0, totalPayment: 0, schedule: [] };
    }

    let balance = principal;
    let totalInterest = 0;
    const schedule = [];

    for (let i = 1; i <= calculatedPayments; i++) {
      const interestPayment = balance * calculatedInterest;
      const principalPayment = monthlyPayment - interestPayment;
      balance -= principalPayment;
      totalInterest += interestPayment;

      schedule.push({
        month: i,
        payment: monthlyPayment,
        principalPaid: principalPayment,
        interestPaid: interestPayment,
        remainingBalance: Math.max(0, balance),
      });
    }

    return { 
      monthlyPayment, 
      totalInterest, 
      totalPayment: principal + totalInterest, 
      schedule 
    };
  };

  const { monthlyPayment, totalInterest, totalPayment, schedule } = calculateAmortization();

  // Helper to format currency into Indian numbering system (Lakhs/Crores)
  const formatIndianCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0, // Cleans up layout by hiding paise
    }).format(amount);
  };

  return (
    <div style={{ 
      maxWidth: '900px', 
      margin: '40px auto', 
      padding: '30px', 
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      backgroundColor: '#f8fafc',
      borderRadius: '16px',
      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05)'
    }}>
      
      {/* Header */}
      <div style={{ marginBottom: '32px', textAlign: 'center' }}>
        <h2 style={{ margin: '0 0 8px 0', color: '#1e293b', fontSize: '28px', fontWeight: '700' }}>
          EMI & Amortization Calculator
        </h2>
        <p style={{ margin: 0, color: '#64748b', fontSize: '15px' }}>
          Plan your loan repayment schedule with Indian Currency (₹) Formatting
        </p>
      </div>
      
      {/* Input Section Card */}
      <div style={{ 
        background: '#ffffff', 
        padding: '24px', 
        borderRadius: '12px', 
        border: '1px solid #e2e8f0',
        display: 'grid', 
        gridTemplateColumns: '1fr 1fr 1fr', 
        gap: '20px', 
        marginBottom: '32px' 
      }}>
        <div>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#334155', fontSize: '14px' }}>
            Loan Amount (₹)
          </label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            style={{ 
              width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e1', 
              fontSize: '16px', outline: 'none', color: '#1e293b', boxSizing: 'border-box'
            }}
          />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#334155', fontSize: '14px' }}>
            Interest Rate (% P.A.)
          </label>
          <input
            type="number"
            step="0.05"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            style={{ 
              width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e1', 
              fontSize: '16px', outline: 'none', color: '#1e293b', boxSizing: 'border-box'
            }}
          />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#334155', fontSize: '14px' }}>
            Loan Term (Years)
          </label>
          <input
            type="number"
            value={loanTerm}
            onChange={(e) => setLoanTerm(e.target.value)}
            style={{ 
              width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e1', 
              fontSize: '16px', outline: 'none', color: '#1e293b', boxSizing: 'border-box'
            }}
          />
        </div>
      </div>

      {/* KPI Dashboard Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', marginBottom: '32px' }}>
        <div style={{ background: '#eff6ff', padding: '20px', borderRadius: '12px', border: '1px solid #bfdbfe', textAlign: 'center' }}>
          <span style={{ fontSize: '13px', color: '#1e40af', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Monthly EMI</span>
          <p style={{ fontSize: '24px', fontWeight: '700', margin: '8px 0 0 0', color: '#1d4ed8' }}>{formatIndianCurrency(monthlyPayment)}</p>
        </div>
        <div style={{ background: '#fef2f2', padding: '20px', borderRadius: '12px', border: '1px solid #fee2e2', textAlign: 'center' }}>
          <span style={{ fontSize: '13px', color: '#991b1b', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Total Interest</span>
          <p style={{ fontSize: '24px', fontWeight: '700', margin: '8px 0 0 0', color: '#dc2626' }}>{formatIndianCurrency(totalInterest)}</p>
        </div>
        <div style={{ background: '#f0fdf4', padding: '20px', borderRadius: '12px', border: '1px solid #dcfce7', textAlign: 'center' }}>
          <span style={{ fontSize: '13px', color: '#166534', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Total Amount</span>
          <p style={{ fontSize: '24px', fontWeight: '700', margin: '8px 0 0 0', color: '#16a34a' }}>{formatIndianCurrency(totalPayment)}</p>
        </div>
      </div>

      {/* Breakdown Table Card */}
      {schedule.length > 0 && (
        <div style={{ background: '#ffffff', borderRadius: '12px', border: '1px solid #e2e8f0', padding: '24px', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.05)' }}>
          <h3 style={{ margin: '0 0 16px 0', color: '#1e293b', fontSize: '18px', fontWeight: '600' }}>Breakdown Schedule</h3>
          <div style={{ maxHeight: '380px', overflowY: 'auto', borderRadius: '8px', border: '1px solid #f1f5f9' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '14px' }}>
              <thead style={{ position: 'sticky', top: 0, background: '#f8fafc', zIndex: 1, boxShadow: 'inset 0 -1px 0 #e2e8f0' }}>
                <tr>
                  <th style={{ padding: '14px 16px', color: '#475569', fontWeight: '600' }}>Month</th>
                  <th style={{ padding: '14px 16px', color: '#475569', fontWeight: '600' }}>EMI</th>
                  <th style={{ padding: '14px 16px', color: '#475569', fontWeight: '600' }}>Principal</th>
                  <th style={{ padding: '14px 16px', color: '#475569', fontWeight: '600' }}>Interest</th>
                  <th style={{ padding: '14px 16px', color: '#475569', fontWeight: '600' }}>Balance</th>
                </tr>
              </thead>
              <tbody>
                {schedule.map((row) => (
                  <tr key={row.month} style={{ borderBottom: '1px solid #f1f5f9', transition: 'background 0.1s' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f8fafc'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                    <td style={{ padding: '14px 16px', color: '#64748b', fontWeight: '500' }}>{row.month}</td>
                    <td style={{ padding: '14px 16px', color: '#1e293b', fontWeight: '500' }}>{formatIndianCurrency(row.payment)}</td>
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
  );
};

export default AmortizationCalculator;