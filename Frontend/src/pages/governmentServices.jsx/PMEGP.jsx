import React from 'react';

const PMEGP = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#333', padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Header / Hero Section */}
      <header style={{ backgroundColor: '#1e3a8a', color: '#fff', padding: '40px 20px', borderRadius: '8px', textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ fontSize: '2.5rem', margin: '0 0 10px 0' }}>
          Prime Minister's Employment Generation Programme (PMEGP)
        </h1>
        <p style={{ fontSize: '1.2rem', opacity: '0.9', margin: 0 }}>
          Empowering Entrepreneurs, Generating Sustainable Employment
        </p>
      </header>

      {/* Main Content Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
        
        {/* About Scheme */}
        <section style={{ backgroundColor: '#f3f4f6', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          <h2 style={{ color: '#1e3a8a', borderBottom: '2px solid #1e3a8a', paddingBottom: '8px' }}>About the Scheme</h2>
          <p style={{ lineHeight: '1.6' }}>
            PMEGP is a credit-linked subsidy program administered by the Ministry of Micro, Small and Medium Enterprises (MoMSME). It aims to generate employment opportunities in rural as well as urban areas of the country through setting up of new self-employment ventures/projects/micro enterprises.
          </p>
        </section>

        {/* Quantum of Assistance */}
        <section style={{ backgroundColor: '#f3f4f6', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          <h2 style={{ color: '#1e3a8a', borderBottom: '2px solid #1e3a8a', paddingBottom: '8px' }}>Maximum Project Cost</h2>
          <ul style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
            <li><strong>Manufacturing Sector:</strong> Up to ₹50 Lakhs</li>
            <li><strong>Business/Service Sector:</strong> Up to ₹20 Lakhs</li>
          </ul>
          <p style={{ fontSize: '0.9rem', color: '#555', marginTop: '10px' }}>
            * Balance amount of the total project cost is provided by banks as a term loan.
          </p>
        </section>

        {/* Subsidy Criteria */}
        <section style={{ backgroundColor: '#f3f4f6', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          <h2 style={{ color: '#1e3a8a', borderBottom: '2px solid #1e3a8a', paddingBottom: '8px' }}>Subsidy & Contribution</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
            <thead>
              <tr style={{ backgroundColor: '#e5e7eb', textAlign: 'left' }}>
                <th style={{ padding: '8px' }}>Category</th>
                <th style={{ padding: '8px' }}>Urban</th>
                <th style={{ padding: '8px' }}>Rural</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>General</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>15%</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>25%</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>Special*</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>25%</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>35%</td>
              </tr>
            </tbody>
          </table>
          <p style={{ fontSize: '0.8rem', color: '#666', marginTop: '8px' }}>
            * Special includes SC/ST/OBC/Minorities/Women, Ex-servicemen, PH, NER, Hill and Border areas.
          </p>
        </section>
      </div>

      {/* Two Column Layout for Links, Instructions and Documents */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '20px', marginTop: '30px' }}>
        
        {/* How and Where to Apply Section */}
        <section style={{ backgroundColor: '#f9fafb', padding: '20px', borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
          <h2 style={{ color: '#1e3a8a', borderBottom: '2px solid #1e3a8a', paddingBottom: '8px', marginTop: 0 }}>How & Where to Apply</h2>
          
          <div style={{ marginBottom: '20px', backgroundColor: '#fff', padding: '15px', borderRadius: '6px', borderLeft: '4px solid #10b981' }}>
            <p style={{ fontWeight: 'bold', margin: '0 0 5px 0', color: '#047857' }}>Official Portals for Online Application:</p>
            <ul style={{ paddingLeft: '20px', margin: 0, lineHeight: '1.6' }}>
              <li style={{ marginBottom: '5px' }}>
                <a href="https://www.kviconline.gov.in/pmegpeportal/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', fontWeight: 'bold', textDecoration: 'none' }}>
                  KVIC PMEGP e-Portal (Official Link)
                </a>
              </li>
              <li>
                <a href="https://www.kvic.org.in" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', fontWeight: 'bold', textDecoration: 'none' }}>
                  KVIC Main Website
                </a>
              </li>
            </ul>
          </div>

          <p style={{ fontWeight: 'bold', margin: '15px 0 10px 0' }}>Step-by-Step Application Process:</p>
          <ol style={{ paddingLeft: '20px', lineHeight: '1.8', margin: 0 }}>
            <li>
              <strong>Fill the Online Form:</strong> Visit the official portal, click "Application for New Unit", and select either the 'Individual' or 'Non-Individual' form. Enter all personal, project, and preferred financing bank details.
            </li>
            <li>
              <strong>Upload Records:</strong> Scans of all required credentials, photographs, and business summaries must be uploaded strictly in the requested formats on the e-portal.
            </li>
            <li>
              <strong>Save and Generate ID:</strong> Click "Save Applicant Data". The portal will generate a unique application registration ID and password sent to your Aadhaar-linked mobile number.
            </li>
            <li>
              <strong>Agency Verification:</strong> The designated nodal agency (KVIC, KVIB, or DIC) will verify the uploaded data and forward the validated packet to your chosen bank.
            </li>
            <li>
              <strong>Bank Sanction & EDP Training:</strong> The bank analyzes project feasibility to sanction the loan. Post-sanction, completing the mandatory 10-15 day Entrepreneurship Development Programme (EDP) training activates the margin money subsidy.
            </li>
          </ol>
        </section>

        {/* Documents Required Section */}
        <section style={{ backgroundColor: '#f9fafb', padding: '20px', borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
          <h2 style={{ color: '#1e3a8a', borderBottom: '2px solid #1e3a8a', paddingBottom: '8px', marginTop: 0 }}>Documents Required</h2>
          <p style={{ margin: '0 0 15px 0', color: '#555', fontSize: '0.95rem' }}>Ensure you have scanned copies of these documents ready before opening the application form:</p>
          
          <div style={{ backgroundColor: '#fff', padding: '15px', borderRadius: '6px', border: '1px solid #e5e7eb' }}>
            <h4 style={{ margin: '0 0 10px 0', color: '#1e3a8a' }}>1. Identity & Address Proof</h4>
            <ul style={{ paddingLeft: '20px', margin: '0 0 15px 0', lineHeight: '1.6' }}>
              <li><strong>Aadhaar Card:</strong> Mandatory (linked to active mobile for OTP authentication).</li>
              <li><strong>PAN Card:</strong> Required for financial tracking.</li>
              <li><strong>Passport Size Photograph:</strong> Recent colored formal photo.</li>
              <li><strong>Rural Area Certificate:</strong> Issued by local revenue authorities (if applying under Rural category to claim higher subsidy).</li>
            </ul>

            <h4 style={{ margin: '0 0 10px 0', color: '#1e3a8a' }}>2. Business & Project Proof</h4>
            <ul style={{ paddingLeft: '20px', margin: '0 0 15px 0', lineHeight: '1.6' }}>
              <li><strong>Detailed Project Report (DPR):</strong> A breakdown including asset cost, raw machinery requirements, operational cost, and income projections.</li>
              <li><strong>Machinery Quotations:</strong> Official pricing bills for equipment intended for purchase.</li>
              <li><strong>Premises Proof:</strong> Rent agreement or lease/ownership papers for the proposed business site.</li>
            </ul>

            <h4 style={{ margin: '0 0 10px 0', color: '#1e3a8a' }}>3. Eligibility & Education Certificates</h4>
            <ul style={{ paddingLeft: '20px', margin: 0, lineHeight: '1.6' }}>
              <li><strong>Education Qualification:</strong> Class VIII pass certificate/marksheet (mandatory for manufacturing projects over ₹10 Lakhs or service projects over ₹5 Lakhs).</li>
              <li><strong>Special Category Certificate:</strong> Caste certificate (SC/ST/OBC/Minority) or Ex-Servicemen/PH certificate to lock in the special category subsidy rates.</li>
              <li><strong>EDP Training Certificate:</strong> Proof of completion of Entrepreneurship Development Programme (if already completed).</li>
            </ul>
          </div>
        </section>
      </div>

      {/* Expanded Eligibility Section */}
      <footer style={{ marginTop: '30px', backgroundColor: '#eff6ff', padding: '20px', borderRadius: '8px', borderLeft: '5px solid #1e3a8a' }}>
        <h3 style={{ margin: '0 0 15px 0', color: '#1e3a8a', fontSize: '1.4rem' }}>Detailed Scheme Eligibility Criteria</h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          <div>
            <h4 style={{ color: '#1e3a8a', margin: '0 0 8px 0' }}>Who Qualifies:</h4>
            <ul style={{ margin: 0, paddingLeft: '20px', lineHeight: '1.6' }}>
              <li><strong>Age Limit:</strong> Any individual entrepreneur above 18 years of age.</li>
              <li><strong>Educational Cut-off:</strong> Minimum Class VIII pass required <em>only</em> if the manufacturing project exceeds ₹10 Lakhs or the business/service project exceeds ₹5 Lakhs.</li>
              <li><strong>Income Bounds:</strong> There is absolutely no upper household income ceiling to apply under this program.</li>
              <li><strong>Institutional Formations:</strong> Self-Help Groups (SHGs), Institutions registered under Societies Registration Act 1860, Production Co-operative Societies, and Charitable Trusts.</li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: '#b91c1c', margin: '0 0 8px 0' }}>Strict Restrictions & Exclusions:</h4>
            <ul style={{ margin: 0, paddingLeft: '20px', lineHeight: '1.6' }}>
              <li><strong>New Units Only:</strong> Financial help applies solely to newly established startups. Existing or old operating units cannot leverage this fund.</li>
              <li><strong>Subsidy Overlap:</strong> Units that have already claimed any central or state government back-end subsidies (e.g., PMRY, REGP, MUDRA) are disqualified.</li>
              <li><strong>Family Restriction:</strong> Strictly limited to <strong>only one person per family</strong> (Family defined strictly as applicant and spouse).</li>
              <li><strong>Negative List Activities:</strong> Businesses linked to meat processing/slaughterhouses, tobacco/intoxicants manufacture (Beedi, pan, cigarettes), alcohol serving venues, and direct crop cultivation or plantation sectors are excluded.</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PMEGP;