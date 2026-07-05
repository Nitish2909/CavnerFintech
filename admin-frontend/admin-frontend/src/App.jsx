import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Partners from "./pages/Partners";
import LoanApplications from "./pages/LoanApplications";
import CardApplications from "./pages/CardApplications";
import LoanProducts from "./pages/LoanProducts";
import CreditCards from "./pages/CreditCards";
import Messages from "./pages/Messages";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/*"
        element={
          <ProtectedRoute>
            <div className="lg:pl-64 min-h-screen bg-slate-100">
              <Sidebar />
              <main className="p-4 lg:p-8">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/users" element={<Users />} />
                  <Route path="/partners" element={<Partners />} />
                  <Route path="/loan-applications" element={<LoanApplications />} />
                  <Route path="/card-applications" element={<CardApplications />} />
                  <Route path="/loan-products" element={<LoanProducts />} />
                  <Route path="/credit-cards" element={<CreditCards />} />
                  <Route path="/messages" element={<Messages />} />
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </main>
            </div>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default App;
