import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { CirclePlus } from "lucide-react";
import H2 from "../components/styles/H2";
import CardOne from "../components/CardOne";
import OwnerCards from "../components/OwnerCards";
import LoadingSpinner from "../components/styles/LoadingSpinner";

export default function Owners() {
  const { sitter, owners, dogs, loading, error } = useContext(DataContext);

  if (loading) return <LoadingSpinner />;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <H2 className="mb-8">Owners</H2>
      <div className="mb-8 border-t-4 border-dotted border-[#F0E5C2]"></div>
      {owners.length > 0 ? (
        <OwnerCards owners={owners} dogs={dogs} />
      ) : (
        <CardOne
          key={sitter.sitter_id}
          headline="Add your first 4-legged visitor!"
          text="Lorem ipsum dolor sit amet consectetur.
            Blandit congue sit sagittis cursus netus.
            Integer elementum eget libero et pellentesque
            blandit pellentesque viverra varius."
          buttonText="Add a dog"
          buttonIcon={<CirclePlus strokeWidth={3} />}
        />
      )}
    </div>
  );
}
