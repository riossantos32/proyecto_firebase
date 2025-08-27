import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../database/authcontext";

const ProtectedRoute = ({ element }) => {
  const { user } = useAuth();
  console.log("Usuario en ProtectedRoute:", user); // Añade esto
  return user ? element : <Navigate to="/" replace />;
};

export default ProtectedRoute;