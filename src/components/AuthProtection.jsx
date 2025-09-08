import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Outlet, Navigate } from "react-router-dom";
import LoadingSpinner from "../components/styles/LoadingSpinner";

export default function AuthProtection() {
  const { isAuthenticated, authLoading } = useContext(AuthContext);

  if (authLoading) return <LoadingSpinner />;

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}
