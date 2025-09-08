import { createContext, useState, useEffect } from "react";
import {
  login,
  logout,
  registration,
  getSitter,
  deleteSitter,
} from "../api/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authLoading, setAuthLoading] = useState(true);
  const [registrationLoading, setRegistrationLoading] = useState(true);
  const [registrationMessage, setRegistrationMessage] = useState(null);
  const [deleteMessage, setDeleteMessage] = useState(null);
  const [authError, setAuthError] = useState(null);
  const [registrationError, setRegistrationError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function checkAuth() {
      setAuthLoading(true);
      try {
        const sitter = await getSitter();
        setUser(sitter);
        setIsAuthenticated(true);
        setAuthError(null);
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
      await login(loginData);
      const sitter = await getSitter();
      setUser(sitter);
      setIsAuthenticated(true);
      setRegistrationMessage(null);
      setAuthError(null);
    } catch (err) {
      setIsAuthenticated(false);
      setUser(null);
      setAuthError(err);
    } finally {
      setAuthLoading(false);
    }
  };

  const fetchLogout = async () => {
    setAuthLoading(true);
    try {
      await logout();
      setIsAuthenticated(false);
      setUser(null);
      setAuthError(null);
    } catch (err) {
      setAuthError(err);
    } finally {
      setAuthLoading(false);
    }
  };

  const fetchRegistration = async (newData) => {
    setRegistrationLoading(true);
    try {
      const msg = await registration(newData);
      setRegistrationMessage(msg);
      setRegistrationError(null);
    } catch (err) {
      setRegistrationError(err);
    } finally {
      setRegistrationLoading(false);
    }
  };

  const fetchDeleteProfile = async () => {
    setAuthLoading(true);
    try {
      const msg = await deleteSitter();
      setDeleteMessage(msg);
      // setIsAuthenticated(false);
      setUser(null);
      setAuthError(null);
    } catch (err) {
      setAuthError(err);
    } finally {
      setAuthLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        fetchLogin,
        fetchLogout,
        fetchRegistration,
        fetchDeleteProfile,
        registrationMessage,
        deleteMessage,
        authLoading,
        registrationLoading,
        authError,
        registrationError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
