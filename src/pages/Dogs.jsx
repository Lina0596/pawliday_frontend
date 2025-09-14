import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import { CirclePlus } from "lucide-react";
import H2 from "../components/styles/H2";
import DogCards from "../components/DogCards";
import ButtonTextIcon from "../components/styles/ButtonTextIcon";
import LoadingSpinner from "../components/styles/LoadingSpinner";
import NotFound from "../components/NotFound";

export default function Dogs() {
  const { dataLoading, owners, dogs, dataStatus } = useContext(DataContext);

  if (dataLoading) return <LoadingSpinner />;

  return dataStatus.action === "get data" && dataStatus.type === "error" ? (
    <Link to="/dogs/add">
      <NotFound notFoundMessage="No dogs found" buttonText="Add a dog" />
    </Link>
  ) : (
    <div>
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
