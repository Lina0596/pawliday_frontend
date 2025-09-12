import { useLocation } from "react-router-dom";
import { useState, useEffect, createContext } from "react";
import {
  login,
  logout,
  registration,
  getSitter,
  updateSitter,
  deleteSitter,
} from "../api/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authLoading, setAuthLoading] = useState(true);
  const [status, setStatus] = useState({
    type: null,
    action: null,
    message: null,
  });

  const location = useLocation();

  const clearStatus = () =>
    setStatus({
      type: null,
      action: null,
      message: null,
    });

  useEffect(() => {
    setStatus({
      type: null,
      action: null,
      message: null,
    });
  }, [location.pathname]);

  useEffect(() => {
    async function checkAuth() {
      setAuthLoading(true);
      try {
        const sitter = await getSitter();
        setUser(sitter);
        setIsAuthenticated(true);
        setStatus({
          type: null,
          action: null,
          message: null,
        });
      } catch (err) {
        setIsAuthenticated(false);
        setUser(null);
      } finally {
        await new Promise((res) => setTimeout(res, 1500));
        setAuthLoading(false);
      }
    }
    checkAuth();
  }, []);

  const fetchLogin = async (loginData) => {
    setAuthLoading(true);
    try {
      const msg = await login(loginData);
      const sitter = await getSitter();
      setUser(sitter);
      setIsAuthenticated(true);
      setStatus({
        type: "success",
        action: "login",
        message: msg,
      });
    } catch (err) {
      setIsAuthenticated(false);
      setUser(null);
      setStatus({
        type: "error",
        action: "login",
        message: err.message,
      });
    } finally {
      setAuthLoading(false);
    }
  };

  const fetchLogout = async () => {
    setAuthLoading(true);
    try {
      const msg = await logout();
      setIsAuthenticated(false);
      setUser(null);
      setStatus({
        type: "success",
        action: "logout",
        message: msg,
      });
    } catch (err) {
      setStatus({
        type: "error",
        action: "logout",
        message: err.message,
      });
    } finally {
      setAuthLoading(false);
    }
  };

  const fetchRegistration = async (newData) => {
    setAuthLoading(true);
    try {
      const msg = await registration(newData);
      setStatus({
        type: "success",
        action: "registration",
        message: msg,
      });
    } catch (err) {
      setStatus({
        type: "error",
        action: "registration",
        message: err.message,
      });
    } finally {
      setAuthLoading(false);
    }
  };

  const fetchUpdateProfile = async (updatedData) => {
    setAuthLoading(true);
    try {
      const res = await updateSitter(updatedData);
      const msg = res.message;
      const updatedSitter = res.sitter;
      setUser(updatedSitter);
      setStatus({
        type: "success",
        action: "update",
        message: msg,
      });
      return updatedSitter;
    } catch (err) {
      setStatus({
        type: "error",
        action: "update",
        message: err.message,
      });
    } finally {
      setAuthLoading(false);
    }
  };

  const fetchDeleteProfile = async () => {
    setAuthLoading(true);
    try {
      const msg = await deleteSitter();
      setIsAuthenticated(false);
      setUser(null);
      setStatus({
        type: "success",
        action: "delete",
        message: msg,
      });
    } catch (err) {
      setStatus({
        type: "error",
        action: "delete",
        message: err.message,
      });
    } finally {
      setAuthLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        authLoading,
        status,
        clearStatus,
        fetchLogin,
        fetchLogout,
        fetchRegistration,
        fetchUpdateProfile,
        fetchDeleteProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
