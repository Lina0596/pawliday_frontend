import { useEffect, useState } from "react";
import { getSitter } from "../api/api";
import H1 from "../components/styles/H1";
import TextSection from "../components/styles/TextSection";

export default function Home() {
  // States
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [sitter, setSitter] = useState([]);

  // Fetch data
  useEffect(() => {
    async function loadSitter() {
      setLoading(true);
      try {
        const sitter = await getSitter(1);
        setSitter(sitter);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    loadSitter();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error.message}</h1>;
  }

  // Display Content
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
