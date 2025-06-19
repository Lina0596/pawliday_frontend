import { useEffect, useState } from "react";
import { getSitter } from "../api/api";
import H1 from "../components/styles/H1";
import H6 from "../components/styles/H6";
import TextSection from "../components/styles/TextSection";
import Lottie from "react-lottie";
import animationData from "../assets/lotties/dogLoadingSpinner";

export default function Home() {
  // States
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [sitter, setSitter] = useState([]);
  const [loadingTimePassed, setLoadingTimePassed] = useState(false);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  // Fetch data
  useEffect(() => {
    async function loadSitter() {
      setLoading(true);
      setLoadingTimePassed(false);
      const timer = setTimeout(() => {
        setLoadingTimePassed(true);
      }, 1500);
      try {
        const sitter = await getSitter(1);
        setSitter(sitter);
      } catch (err) {
        setError(err);
      } finally {
        if (loadingTimePassed) {
          setLoading(false);
        } else {
          const checkTimer = setInterval(() => {
            if (loadingTimePassed) {
              setLoading(false);
              clearInterval(checkTimer);
            }
          }, 100);
        }
      }
      return () => clearTimeout(timer);
    }
    loadSitter();
  }, [loadingTimePassed]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center">
        <Lottie options={defaultOptions} height={100} width={100} />
        <H6>Loading...</H6>
      </div>
    );
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
