import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const userDetails = useSelector((state)=>state.auth.user)

  const isLoggedIn = userDetails?.email
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) navigate("/login");
  });
  return children;
};

export default ProtectedRoute;
