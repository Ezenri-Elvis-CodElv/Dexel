import React from "react";
import { Navigate, Outlet } from "react-router-dom";

// Example: Replace this with your real authentication logic
const isAuthenticated = () => {
  // For example, check for a token in localStorage or context
  return !!localStorage.getItem("authToken");
};

const PrivateRoute = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;