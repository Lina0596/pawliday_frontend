import { useContext } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import { CirclePlus } from "lucide-react";
import H2 from "../components/styles/H2";
import DogCards from "../components/DogCards";
import ButtonTextIcon from "../components/styles/ButtonTextIcon";
import FilterButton from "../components/styles/FilterButton";
import LoadingSpinner from "../components/styles/LoadingSpinner";
import NotFound from "../components/NotFound";
import SuccessMessage from "../components/styles/SuccessMessage";

export default function Dogs() {
  const { dataLoading, owners, dogs, dataStatus } = useContext(DataContext);
  const [searchParams, setSearchParams] = useSearchParams();

  const sociableFilter = searchParams.get("sociable");
  const castratedFilter = searchParams.get("castrated");
  const trainingFilter = searchParams.get("training");

  const displayedDogs = dogs.filter((dog) => {
    if (sociableFilter !== null) {
      return dog.sociable === (sociableFilter === "true");
    }
    if (castratedFilter !== null) {
      return dog.castrated === (castratedFilter === "true");
    }
    if (trainingFilter !== null) {
      return dog.training === (trainingFilter === "true");
    }
    return true;
  });

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
      <div className="mb-4 border-t-4 border-dotted border-[#F0E5C2]"></div>
      <div className="flex flex-wrap gap-4 items-center">
        <FilterButton
          onClick={() =>
            setSearchParams(
              sociableFilter === "true" ? {} : { sociable: "true" }
            )
          }
          active={sociableFilter === "true"}
          text="social"
        />
        <FilterButton
          onClick={() =>
            setSearchParams(
              sociableFilter === "false" ? {} : { sociable: "false" }
            )
          }
          active={sociableFilter === "false"}
          text="antisocial"
        />
        <FilterButton
          onClick={() =>
            setSearchParams(
              castratedFilter === "true" ? {} : { castrated: "true" }
            )
          }
          active={castratedFilter === "true"}
          text="castrated"
        />
        <FilterButton
          onClick={() =>
            setSearchParams(
              castratedFilter === "false" ? {} : { castrated: "false" }
            )
          }
          active={castratedFilter === "false"}
          text="intact"
        />
        <FilterButton
          onClick={() =>
            setSearchParams(
              trainingFilter === "true" ? {} : { training: "true" }
            )
          }
          active={trainingFilter === "true"}
          text="training"
        />
        <Link
          to=""
          onClick={() => setSearchParams({})}
          className="font-inter font-bold text-black"
        >
          clear filters
        </Link>
      </div>
      <div className="mb-8 mt-4 border-t-4 border-dotted border-[#F0E5C2]"></div>
      <DogCards dogs={displayedDogs} owners={owners} />
    </div>
  );
}
