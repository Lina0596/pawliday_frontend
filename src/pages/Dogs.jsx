import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { CirclePlus } from "lucide-react";
import H2 from "../components/styles/H2";
import CardOne from "../components/CardOne";
import DogCards from "../components/DogCards";

export default function Dogs() {
  const { sitter, owners, dogs, loading, error } = useContext(DataContext);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <H2 className="mb-8">Dogs</H2>
      <div className="mb-8 border-t-4 border-dotted border-[#F0E5C2]"></div>
      {dogs.length > 0 ? (
        <DogCards dogs={dogs} owners={owners} />
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
