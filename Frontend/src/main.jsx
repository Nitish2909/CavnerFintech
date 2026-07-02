import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import CheckCivilScore from "./pages/CheckCibilScore.jsx";
import EMICalculator from "./pages/EMICalculator";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PartnerLogin from "./pages/PartnerLogin";
import PartnerRegistration from "./pages/PartnerRegisteration";
import ContactUs from "./pages/ContactUs";
import BecomePartner from "./pages/BecomePartner";
import InvestmentPlan from "./pages/InvestmentPlan";
import ApplyPage from "./pages/ApplyLoanPage.jsx";
import ApplyLoan from "./pages/ApplyLoan.jsx";
import CreditCard from "./pages/CreditCardPage.jsx";

// Corporate Pages
import BuilderFinance from "./pages/corporate/BuilderFinance";
import FundingShares from "./pages/corporate/FundingShares";
import NcdDebt from "./pages/corporate/NcdDebt";
import SolarFunding from "./pages/corporate/SolarFunding";
import NbfcFunding from "./pages/corporate/NbfcFunding";
import CapexFinance from "./pages/corporate/CapexFinance";
import HomeLoan from "./pages/loans/HomeLoan.jsx";
import PersonalLoan from "./pages/loans/PersonalLoan.jsx";
import Dashboard from "./pages/Users/Dashboard.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import EducationLoan from "./pages/loans/EducationLoan.jsx";
import BusinessLoan from "./pages/loans/BusinessLoan.jsx";
import Bonds from "./pages/investments/bonds.jsx";
import PMMY from "./pages/governmentServices.jsx/PMMY.jsx";
import PMEGP from "./pages/governmentServices.jsx/PMEGP.jsx";
import PMVidyalaxmiPortal from "./pages/governmentServices.jsx/PMVidyalaxmiPortal.jsx";
import ProjectReport from "./pages/OthersServices/ProjectReport.jsx";
import StandUpIndiaScheme from "./pages/governmentServices.jsx/StandUpIndiaScheme.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "/cibil", element: <CheckCivilScore /> },
      { path: "/emi", element: <EMICalculator /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/partner-login", element: <PartnerLogin /> },
      { path: "/partnersregisteration", element: <PartnerRegistration /> },
      { path: "/credit-card", element: <CreditCard /> },
      { path: "/applyforloan", element: <ApplyPage /> },

      //Corporate
      { path: "/corporate", element: <BuilderFinance /> },
      { path: "/corporate/builder", element: <BuilderFinance /> },
      { path: "/corporate/shares", element: <FundingShares /> },
      { path: "/corporate/ncd", element: <NcdDebt /> },
      { path: "/corporate/solar", element: <SolarFunding /> },
      { path: "/corporate/nbfc", element: <NbfcFunding /> },
      { path: "/corporate/capex", element: <CapexFinance /> },

      // All Types of Loan
      { path: "/loans", element: <ApplyLoan /> },
      { path: "/loans/home-loan", element: <HomeLoan /> },
      { path: "/loans/personal-loan", element: <PersonalLoan /> },
      { path: "/loans/education-loan", element: <EducationLoan /> },
      { path: "/loans/business-loan", element: <BusinessLoan /> },
      // { path: "/loans/education-loan", element: <EducationLoan /> },

      //Investments
      { path: "/investment", element: <InvestmentPlan /> },
      { path: "/investment/bonds", element: <Bonds /> },

      //Government Services
      { path: "/government-services", element: <PMMY /> },
      { path: "/government-services/mudra-yojana", element: <PMMY /> },
      { path: "/government-services/pmegp", element: <PMEGP /> },
      { path: "/government-services/standup-india-scheme", element: <StandUpIndiaScheme/> },
      {
        path: "/government-services/pm-vidyalaxmiportal",
        element: <PMVidyalaxmiPortal />,
      },

      //Others services
      { path: "/others-services", element: <ProjectReport /> },
      { path: "/others-services/project-report", element: <ProjectReport /> },

      { path: "/contact", element: <ContactUs /> },
      { path: "/partner", element: <BecomePartner /> },
    ],
  },
  {
    path: "/user/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
