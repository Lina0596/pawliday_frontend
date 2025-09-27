import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import { CirclePlus } from "lucide-react";
import H2 from "../components/styles/H2";
import DogCards from "../components/DogCards";
import ButtonTextIcon from "../components/styles/ButtonTextIcon";
import LoadingSpinner from "../components/styles/LoadingSpinner";
import NotFound from "../components/NotFound";
import SuccessMessage from "../components/styles/SuccessMessage";

export default function Dogs() {
  const { dataLoading, owners, dogs, dataStatus } = useContext(DataContext);

  const location = useLocation();
  const locationStatus = location.state;

  const activeStatus = dataStatus?.type
    ? dataStatus
    : locationStatus?.type
    ? locationStatus
    : null;

  if (dataLoading || !owners || !dogs) return <LoadingSpinner />;

  return dataStatus.action === "get data" && dataStatus.type === "error" ? (
    <Link to="/dogs/add">
      <NotFound notFoundMessage="No dogs found" buttonText="Add a dog" />
    </Link>
  ) : (
    <div>
      {activeStatus?.action === "delete dog" &&
      activeStatus?.type === "success" ? (
        <SuccessMessage>{activeStatus.message}</SuccessMessage>
      ) : null}
      <div className="flex justify-between">
        <H2 className="mb-8">Dogs</H2>
        <Link to="/dogs/add">
          <ButtonTextIcon
            text="Add a dog"
            icon={<CirclePlus strokeWidth={3} />}
          />
        </Link>
      </div>
      <div className="mb-8 border-t-4 border-dotted border-[#F0E5C2]"></div>
      <DogCards dogs={dogs} owners={owners} />
    </div>
  );
}
