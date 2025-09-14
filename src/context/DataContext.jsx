import { createContext, useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getOwners, getDogs, getAuthParams } from "../api/api";
import { AuthContext } from "./AuthContext";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const { user, isAuthenticated } = useContext(AuthContext);

  const [dataLoading, setDataLoading] = useState(false);
  const [owners, setOwners] = useState([]);
  const [dogs, setDogs] = useState([]);
  const [authParams, setAuthParams] = useState(null);
  const [dataStatus, setDataStatus] = useState({
    type: null,
    action: null,
    message: null,
  });

  const location = useLocation();

  const clearDataStatus = () =>
    setStatus({
      type: null,
      action: null,
      message: null,
    });

  async function fetchOwnersAndDogs() {
    setDataLoading(true);
    try {
      const owners = await getOwners();
      const dogs = await getDogs();
      setOwners(owners);
      setDogs(dogs);
      setDataStatus({
        type: null,
        action: null,
        message: null,
      });
    } catch (err) {
      setDataStatus({
        type: "error",
        action: "get data",
        message: err.message,
      });
    } finally {
      await new Promise((res) => setTimeout(res, 1500));
      setDataLoading(false);
    }
  }

  useEffect(() => {
    if (!user?.sitter_id && !isAuthenticated) {
      setDogs([]);
      setOwners([]);
      return;
    }
    setDogs([]);
    setOwners([]);
    fetchOwnersAndDogs();
  }, [isAuthenticated, user?.sitter_id]);

  useEffect(() => {
    async function fetchAuthParams() {
      setDataLoading(true);
      try {
        const authParams = await getAuthParams();
        setAuthParams(authParams);
        setDataStatus({
          type: null,
          action: null,
          message: null,
        });
      } catch (err) {
        setDataStatus({
          type: "error",
          action: "get auth params",
          message: err.message,
        });
      } finally {
        await new Promise((res) => setTimeout(res, 1500));
        setDataLoading(false);
      }
    }
    fetchAuthParams();
  }, []);

  return (
    <DataContext.Provider
      value={{
        dataLoading,
        owners,
        dogs,
        authParams,
        fetchOwnersAndDogs,
        clearDataStatus,
        dataStatus,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
