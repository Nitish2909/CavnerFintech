import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SiteFooter from "./components/SiteFooter";
import Whatsapp from "./components/Whatsapp";
import ProtectedRoute from "./components/ProtectedRoute";
import InfoPage from "./components/InfoPage";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PartnerLogin from "./pages/PartnerLogin";
import PartnerRegisteration from "./pages/PartnerRegisteration";
import PartnerDashboard from "./pages/PartnerDashboard";
import CheckCibilScore from "./pages/CheckCibilScore";
import EMICalculator from "./pages/EMICalculator";
import CreditCardPage from "./pages/CreditCardPage";
import ContactUs from "./pages/ContactUs";
import BecomePartner from "./pages/BecomePartner";
import ApplyLoan from "./pages/ApplyLoan";
import Loans from "./pages/loans/Loans";
import Dashboard from "./pages/Users/Dashboard";
import Profile from "./pages/Users/Profile";
import PMEGP from "./pages/governmentSchemes/PMEGP";
import PMMY from "./pages/governmentSchemes/PMMY";
import PMVidyalaxmiPortal from "./pages/governmentSchemes/PMVidyalaxmiPortal";
import StandUpIndiaScheme from "./pages/governmentSchemes/StandUpIndiaScheme";
import AmortizationCalculator from "./components/AmortizationCalculator";

const Layout = ({ children }) => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-1">{children}</main>
    <SiteFooter />
    <Whatsapp />
  </div>
);

const App = () => {
  return (
    <Routes>
      {/* Auth pages - no layout */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/partner-login" element={<PartnerLogin />} />
      <Route path="/partnersregisteration" element={<PartnerRegisteration />} />

      {/* Partner dashboard - protected */}
      <Route
        path="/partner/dashboard"
        element={
          <ProtectedRoute role="partner">
            <Layout>
              <PartnerDashboard />
            </Layout>
          </ProtectedRoute>
        }
      />

      {/* User dashboard - protected */}
      <Route
        path="/user/dashboard"
        element={
          <ProtectedRoute>
            <Layout>
              <Dashboard />
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/user/profile"
        element={
          <ProtectedRoute>
            <Layout>
              <Profile />
            </Layout>
          </ProtectedRoute>
        }
      />

      {/* Public pages */}
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/cibil"
        element={
          <Layout>
            <CheckCibilScore />
          </Layout>
        }
      />
      <Route
        path="/emi"
        element={
          <Layout>
            <EMICalculator />
          </Layout>
        }
      />

        <Route
        path="/amortizationcalculator"
        element={
          <Layout>
            <AmortizationCalculator/>
          </Layout>
        }
      />
      <Route
        path="/credit-card"
        element={
          <Layout>
            <CreditCardPage />
          </Layout>
        }
      />
      <Route
        path="/applyforloan"
        element={
          <Layout>
            <ApplyLoan />
          </Layout>
        }
      />
      <Route
        path="/contact"
        element={
          <Layout>
            <ContactUs />
          </Layout>
        }
      />
      <Route
        path="/partner"
        element={
          <Layout>
            <BecomePartner />
          </Layout>
        }
      />
      <Route
        path="/loans"
        element={
          <Layout>
            <Loans />
          </Layout>
        }
      />
      <Route
        path="/loans/:slug"
        element={
          <Layout>
            <Loans />
          </Layout>
        }
      />

      {/* Corporate */}
      <Route
        path="/corporate"
        element={
          <Layout>
            <InfoPage
              title="Corporate Finance"
              description="Comprehensive corporate financing solutions for businesses across India. From builder finance to NBFC funding, we offer tailored solutions."
              path="/corporate"
              features={[
                {
                  title: "Builder Finance",
                  desc: "Funding for real estate projects",
                },
                {
                  title: "Funding Against Shares",
                  desc: "Liquidity against your share portfolio",
                },
                {
                  title: "NCD & Structured Debt",
                  desc: "Non-convertible debenture solutions",
                },
                {
                  title: "Solar Funding",
                  desc: "Finance renewable energy projects",
                },
              ]}
            />
          </Layout>
        }
      />
      <Route
        path="/corporate/builder"
        element={
          <Layout>
            <InfoPage
              title="Builder / Real Estate Finance"
              description="Specialized funding solutions for real estate developers and builders."
              path="/corporate/builder"
            />
          </Layout>
        }
      />
      <Route
        path="/corporate/shares"
        element={
          <Layout>
            <InfoPage
              title="Funding Against Shares"
              description="Get instant liquidity by leveraging your share portfolio without selling."
              path="/corporate/shares"
            />
          </Layout>
        }
      />
      <Route
        path="/corporate/ncd"
        element={
          <Layout>
            <InfoPage
              title="NCD & Structured Debt"
              description="Raise capital through non-convertible debentures and structured debt instruments."
              path="/corporate/ncd"
            />
          </Layout>
        }
      />
      <Route
        path="/corporate/solar"
        element={
          <Layout>
            <InfoPage
              title="Solar / Renewable Energy Funding"
              description="Finance your solar and renewable energy projects with attractive terms."
              path="/corporate/solar"
            />
          </Layout>
        }
      />
      <Route
        path="/corporate/nbfc"
        element={
          <Layout>
            <InfoPage
              title="NBFC / Corporate Funding"
              description="Growth capital and funding solutions for NBFCs and corporates."
              path="/corporate/nbfc"
            />
          </Layout>
        }
      />
      <Route
        path="/corporate/capex"
        element={
          <Layout>
            <InfoPage
              title="Project / Capex Finance"
              description="Long-term financing for capital expenditure and project expansion."
              path="/corporate/capex"
            />
          </Layout>
        }
      />

      {/* Investments */}
      <Route
        path="/investment"
        element={
          <Layout>
            <InfoPage
              title="Investment Plans"
              description="Grow your wealth with bonds, fixed deposits, and mutual funds. Compare and invest in the best investment options in India."
              path="/investment"
              features={[
                {
                  title: "Bonds",
                  desc: "Corporate, government, and tax-free bonds",
                },
                {
                  title: "Fixed Deposits",
                  desc: "Best FD interest rates from top banks",
                },
                {
                  title: "Mutual Funds",
                  desc: "SIP and lump sum investment options",
                },
              ]}
            />
          </Layout>
        }
      />
      <Route
        path="/investment/bonds"
        element={
          <Layout>
            <InfoPage
              title="Bonds"
              description="Invest in corporate, government, tax-free, and sovereign gold bonds in India."
              path="/investment/bonds"
            />
          </Layout>
        }
      />
      <Route
        path="/investment/fixed-deposit"
        element={
          <Layout>
            <InfoPage
              title="Fixed Deposit"
              description="Compare FD interest rates from top Indian banks and NBFCs."
              path="/investment/fixed-deposit"
            />
          </Layout>
        }
      />
      <Route
        path="/investment/mutual-funds"
        element={
          <Layout>
            <InfoPage
              title="Mutual Funds"
              description="Invest in the best mutual funds - large cap, mid cap, small cap, ELSS, and more."
              path="/investment/mutual-funds"
            />
          </Layout>
        }
      />

      {/* Government services */}
      <Route
        path="/government-services"
        element={
          <Layout>
            <InfoPage
              title="Government Services"
              description="Access government loan schemes and subsidies - MUDRA Yojana, PMEGP, PM-Vidyalaxmi, Stand-Up India."
              path="/government-services"
              features={[
                {
                  title: "PMMY (MUDRA)",
                  desc: "Loans up to Rs 10 lakh for small businesses",
                },
                { title: "PMEGP", desc: "Employment generation programme" },
                { title: "PM-Vidyalaxmi", desc: "Education loan portal" },
                {
                  title: "Stand-Up India",
                  desc: "Loans for SC/ST and women entrepreneurs",
                },
              ]}
            />
          </Layout>
        }
      />
      <Route
        path="/government-services/mudra-yojana"
        element={
          <Layout>
            {/* <InfoPage
              title="Pradhan Mantri MUDRA Yojana (PMMY)"
              description="Loans up to Rs 10 lakh for non-corporate, non-farm small/micro enterprises."
              path="/government-services/mudra-yojana"
            /> */}
             <PMMY/>
          </Layout>
        }
      />
      <Route
        path="/government-services/pmegp"
        element={
          <Layout>
            {/* <InfoPage
              title="PMEGP"
              description="Prime Minister's Employment Generation Programme for micro enterprises."
              path="/government-services/pmegp"
            /> */}

            <PMEGP/>
          </Layout>
        }
      />
      <Route
        path="/government-services/pm-vidyalaxmiportal"
        element={
          <Layout>
            {/* <InfoPage
              title="PM-Vidyalaxmi Portal"
              description="Education loans for higher studies in top institutions."
              path="/government-services/pm-vidyalaxmiportal"
            /> */}
           <PMVidyalaxmiPortal/>
          </Layout>
        }
      />
      <Route
        path="/government-services/standup-india-scheme"
        element={
          <Layout>
            {/* <InfoPage
              title="Stand-Up India Scheme"
              description="Bank loans between Rs 10 lakh and Rs 1 crore for SC/ST and women entrepreneurs."
              path="/government-services/standup-india-scheme"
            /> */}
            <StandUpIndiaScheme/>
          </Layout>
        }
      />

      {/* Others services */}
      <Route
        path="/others-services"
        element={
          <Layout>
            <InfoPage
              title="Other Services"
              description="Additional financial services including project report preparation."
              path="/others-services"
            />
          </Layout>
        }
      />
      <Route
        path="/others-services/project-report"
        element={
          <Layout>
            <InfoPage
              title="Project Report"
              description="Get professionally prepared project reports for loan applications and business planning.
              "
              path="/others-services/project-report"
              ctaText="Get Started"
              ctaLink="/contact"
            />
          </Layout>
        }
      />

      <Route
        path="*"
        element={
          <Layout>
            <InfoPage
              title="Page Not Found"
              description="The page you're looking for doesn't exist."
              path="/404"
              ctaText="Go Home"
              ctaLink="/"
            />
          </Layout>
        }
      />
    </Routes>
  );
};

export default App;
