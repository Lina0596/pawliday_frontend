import { createContext, useContext, useState, useEffect } from "react";
import { getSitter, getOwners, getDogs, getAuthParams } from "../api/api";
import { AuthContext } from "./AuthContext";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  // States
  const { user, isAuthenticated } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [owners, setOwners] = useState([]);
  const [dogs, setDogs] = useState([]);
  const [authParams, setAuthParams] = useState(null);

  // Fetch owners, dogs
  async function loadOwnersAndDogs() {
    setLoading(true);
    try {
      const owners = await getOwners();
      const dogs = await getDogs();
      setOwners(owners);
      setDogs(dogs);
    } catch (err) {
      setError(err);
    } finally {
      await new Promise((res) => setTimeout(res, 1500));
      setLoading(false);
    }
  }

  useEffect(() => {
    if (!user?.sitter_id) return;
    loadOwnersAndDogs();
  }, [isAuthenticated, user?.sitter_id]);

  useEffect(() => {
    if (!isAuthenticated) {
      setDogs([]);
      setOwners([]);
    }
  }, [isAuthenticated]);

  useEffect(() => {
    async function loadAuthParams() {
      setLoading(true);
      try {
        const authParams = await getAuthParams();
        setAuthParams(authParams);
      } catch (err) {
        setError(err);
      } finally {
        await new Promise((res) => setTimeout(res, 1500));
        setLoading(false);
      }
    }
    loadAuthParams();
  }, []);

  // Provide Context Data
  return (
    <DataContext.Provider
      value={{
        owners,
        dogs,
        authParams,
        loadOwnersAndDogs,
        loading,
        error,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
