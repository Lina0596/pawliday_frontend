import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import H2 from "../components/styles/H2";
import NotFound from "../components/NotFound";
import OwnerCards from "../components/OwnerCards";
import LoadingSpinner from "../components/styles/LoadingSpinner";
import SuccessMessage from "../components/styles/SuccessMessage";

export default function Owners() {
  const { owners, dogs, dataLoading, dataStatus } = useContext(DataContext);

  const location = useLocation();
  const locationStatus = location.state;

  const activeStatus = dataStatus?.type
    ? dataStatus
    : locationStatus?.type
    ? locationStatus
    : null;

  if (dataLoading || !owners || !dogs) return <LoadingSpinner />;

  return activeStatus?.action === "get data" &&
    activeStatus?.type === "error" ? (
    <Link to="/owners/add">
      <NotFound notFoundMessage={dataStatus.message} buttonText="Add a owner" />
    </Link>
  ) : (
    <div>
      {activeStatus?.action === "delete owner" &&
      activeStatus?.type === "success" ? (
        <SuccessMessage>{activeStatus.message}</SuccessMessage>
      ) : null}
      <H2 className="mb-8">Owners</H2>
      <div className="mb-8 border-t-4 border-dotted border-[#F0E5C2]"></div>
      <OwnerCards owners={owners} dogs={dogs} />
    </div>
  );
}
