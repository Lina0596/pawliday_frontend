import { createContext, useState, useEffect } from "react";
import { getSitter, getOwners, getDogs } from "../api/api";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  // States
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [sitter, setSitter] = useState([]);
  const [owners, setOwners] = useState([]);
  const [dogs, setDogs] = useState([]);

  // Fetch sitter
  useEffect(() => {
    async function loadSitter() {
      setLoading(true);
      try {
        const sitter = await getSitter(1);
        setSitter(sitter);
      } catch (err) {
        setError(err);
      } finally {
        await new Promise((res) => setTimeout(res, 1500));
        setLoading(false);
      }
    }
    loadSitter();
  }, []);

  // Fetch owners, dogs
  useEffect(() => {
    if (!sitter.sitter_id) return;
    async function loadOwnersAndDogs() {
      setLoading(true);
      try {
        const owners = await getOwners(sitter.sitter_id);
        const dogs = await getDogs(sitter.sitter_id);
        setOwners(owners);
        setDogs(dogs);
      } catch (err) {
        setError(err);
      } finally {
        await new Promise((res) => setTimeout(res, 1500));
        setLoading(false);
      }
    }
    loadOwnersAndDogs();
  }, [sitter.sitter_id]);

  // Provide Context Data
  return (
    <DataContext.Provider value={{ sitter, owners, dogs, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};
