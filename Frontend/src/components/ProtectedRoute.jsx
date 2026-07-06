import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children, role = "user" }) => {
  const token = role === "partner" ? useSelector((s) => s.auth.partnerToken) : useSelector((s) => s.auth.token);
  if (!token) return <Navigate to={role === "partner" ? "/partner-login" : "/login"} replace />;
  return children;
};

export default ProtectedRoute;
