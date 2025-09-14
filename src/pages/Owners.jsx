import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import H2 from "../components/styles/H2";
import NotFound from "../components/NotFound";
import OwnerCards from "../components/OwnerCards";
import LoadingSpinner from "../components/styles/LoadingSpinner";

export default function Owners() {
  const { owners, dogs, dataLoading, dataStatus } = useContext(DataContext);

  if (dataLoading) return <LoadingSpinner />;

  return dataStatus.action === "get data" && dataStatus.type === "error" ? (
    <Link to="/owners/add">
      <NotFound notFoundMessage={dataStatus.message} buttonText="Add a owner" />
    </Link>
  ) : (
    <div>
      <H2 className="mb-8">Owners</H2>
      <div className="mb-8 border-t-4 border-dotted border-[#F0E5C2]"></div>
      <OwnerCards owners={owners} dogs={dogs} />
    </div>
  );
}
