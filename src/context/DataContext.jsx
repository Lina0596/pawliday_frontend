import { createContext, useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  getOwners,
  getDogs,
  addOwner,
  updateOwner,
  deleteOwner,
  addDog,
  updateDog,
  deleteDog,
  getAuthParams,
} from "../api/api";
import imgUpload from "../api/imagekit";
import { AuthContext } from "./AuthContext";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const { user, isAuthenticated } = useContext(AuthContext);
  const [dataLoading, setDataLoading] = useState(false);
  const [owners, setOwners] = useState([]);
  const [dogs, setDogs] = useState([]);
  const [dataStatus, setDataStatus] = useState({
    type: null,
    action: null,
    message: null,
  });

  const location = useLocation();

  const clearDataStatus = () =>
    setDataStatus({
      type: null,
      action: null,
      message: null,
    });

  useEffect(() => {
    setDataStatus({
      type: null,
      action: null,
      message: null,
    });
  }, [location.pathname]);

  useEffect(() => {
    if (!user?.sitter_id && !isAuthenticated) {
      setDogs([]);
      setOwners([]);
      return;
    }
    setDogs([]);
    setOwners([]);
    fetchOwnersAndDogs();
  }, [isAuthenticated, user?.sitter_id, location.pathname]);

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

  async function fetchAddOwner(newData) {
    setDataLoading(true);
    try {
      const res = await addOwner(newData);
      const msg = res.message;
      const newOwner = res.owner;
      setOwners((prevOwners) => [...prevOwners, newOwner]);
      setDataStatus({
        type: "success",
        action: "add owner",
        message: msg,
      });
      fetchOwnersAndDogs();
      return newOwner;
    } catch (err) {
      setDataStatus({
        type: "error",
        action: "add owner",
        message: err.message,
      });
    } finally {
      setDataLoading(false);
    }
  }

  async function fetchUpdateOwner(ownerId, updatedData) {
    setDataLoading(true);
    try {
      const res = await updateOwner(ownerId, updatedData);
      const msg = res.message;
      const updatedOwner = res.owner;
      setDataStatus({
        type: "success",
        action: "update owner",
        message: msg,
      });
      return updatedOwner;
    } catch (err) {
      setDataStatus({
        type: "error",
        action: "update owner",
        message: err.message,
      });
    } finally {
      setDataLoading(false);
    }
  }

  async function fetchDeleteOwner(ownerId) {
    setDataLoading(true);
    try {
      const msg = await deleteOwner(ownerId);
      setDataStatus({
        type: "success",
        action: "delete owner",
        message: msg,
      });
      fetchOwnersAndDogs();
    } catch (err) {
      setDataStatus({
        type: "error",
        action: "delete owner",
        message: err.message,
      });
    } finally {
      setDataLoading(false);
    }
  }

  async function fetchAddDog(ownerId, newData) {
    setDataLoading(true);
    try {
      const authParams = await getAuthParams();
      let generatedImgageUrl = "";
      if (newData.img_url && newData.img_url.length > 0) {
        const file = newData.img_url[0];
        generatedImgageUrl = await imgUpload(file, authParams);
      }
      const updatedData = {
        ...newData,
        img_url: generatedImgageUrl,
      };
      const res = await addDog(ownerId, updatedData);
      const msg = res.message;
      const newDog = res.dog;
      setDogs((prevDogs) => [...prevDogs, newDog]);
      setDataStatus({
        type: "success",
        action: "add dog",
        message: msg,
      });
      fetchOwnersAndDogs();
      return newDog;
    } catch (err) {
      setDataStatus({
        type: "error",
        action: "add dog",
        message: err.message,
      });
    } finally {
      setDataLoading(false);
    }
  }

  async function fetchUpdateDog(dog, imgFile, dogId, updatedData) {
    setDataLoading(true);
    try {
      const authParams = await getAuthParams();
      let generatedImgageUrl = "";
      if (
        updatedData.img_url &&
        updatedData.img_url.length > 0 &&
        imgFile[0] instanceof File
      ) {
        const file = updatedData.img_url[0];
        generatedImgageUrl = await imgUpload(file, authParams);
      } else {
        generatedImgageUrl = dog.img_url;
      }

      const newUpdatedData = {
        ...updatedData,
        img_url: generatedImgageUrl,
      };

      const res = await updateDog(dogId, newUpdatedData);
      const msg = res.message;
      const updatedDog = res.dog;
      setDataStatus({
        type: "success",
        action: "update dog",
        message: msg,
      });
      return updatedDog;
    } catch (err) {
      setDataStatus({
        type: "error",
        action: "update dog",
        message: err.message,
      });
    } finally {
      setDataLoading(false);
    }
  }

  async function fetchDeleteDog(dogId) {
    setDataLoading(true);
    try {
      const msg = await deleteDog(dogId);
      setDataStatus({
        type: "success",
        action: "delete dog",
        message: msg,
      });
      fetchOwnersAndDogs();
    } catch (err) {
      setDataStatus({
        type: "error",
        action: "delete dog",
        message: err.message,
      });
    } finally {
      setDataLoading(false);
    }
  }

  return (
    <DataContext.Provider
      value={{
        dataLoading,
        owners,
        dogs,
        fetchOwnersAndDogs,
        fetchAddOwner,
        fetchUpdateOwner,
        fetchDeleteOwner,
        fetchAddDog,
        fetchUpdateDog,
        fetchDeleteDog,
        clearDataStatus,
        dataStatus,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
