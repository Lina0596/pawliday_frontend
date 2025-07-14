import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import H1 from "../components/styles/H1";
import TextSection from "../components/styles/TextSection";
import LoadingSpinner from "../components/styles/LoadingSpinner";
import ContentCard from "../components/ContentCard";

export default function Home() {
  const { sitter, dogs, loading, error } = useContext(DataContext);
  console.log(dogs.length);

  if (loading) return <LoadingSpinner />;
  if (error) return <p>{error}</p>;

  return (
    <div className="flex flex-col items-center">
      <div className="mb-20 text-center w-140">
        <H1 className="mb-8">Hello {sitter.first_name}!</H1>
        <TextSection>
          Lorem ipsum dolor sit amet consectetur. Blandit congue sit sagittis
          cursus netus. Integer elementum eget libero et pellentesque blandit
          pellentesque viverra varius.
        </TextSection>
      </div>
      <ContentCard dogs={dogs} />
    </div>
  );
}
