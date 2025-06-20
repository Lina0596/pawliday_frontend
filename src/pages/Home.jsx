import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import H1 from "../components/styles/H1";
import TextSection from "../components/styles/TextSection";

export default function Home() {
  const { sitter, loading, error } = useContext(DataContext);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="text-center">
      <H1 className="mb-8">Hello {sitter.first_name}!</H1>
      <TextSection className="w-">
        Lorem ipsum dolor sit amet consectetur. Blandit congue sit sagittis
        cursus netus. Integer elementum eget libero et pellentesque blandit
        pellentesque viverra varius.
      </TextSection>
    </div>
  );
}
