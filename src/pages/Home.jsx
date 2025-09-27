import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { DataContext } from "../context/DataContext";
import H1 from "../components/styles/H1";
import TextSection from "../components/styles/TextSection";
import LoadingSpinner from "../components/styles/LoadingSpinner";
import ContentCard from "../components/ContentCard";
import NewUserCard from "../components/NewUserCard";
import UspContentCards from "../components/UspContentCards";

export default function Home() {
  const { user, isAuthenticated } = useContext(AuthContext);
  const { dogs, dataLoading } = useContext(DataContext);

  if (dataLoading || !dogs) return <LoadingSpinner />;

  return isAuthenticated && user ? (
    <div className="flex flex-col items-center">
      <div className="mb-20 text-center w-140">
        <H1>Hello {user.first_name}!</H1>
      </div>
      {dogs.length > 0 ? <ContentCard dogs={dogs} /> : <NewUserCard />}
    </div>
  ) : (
    <div className="flex flex-col justify-center">
      <div className="flex flex-col items-center mb-8 text-center">
        <H1 className="mb-8">Hello Doglover!</H1>
        <TextSection className="w-140">
          Lorem ipsum dolor sit amet consectetur. Blandit congue sit sagittis
          cursus netus. Integer elementum eget libero et pellentesque blandit
          pellentesque viverra varius.
        </TextSection>
      </div>
      <UspContentCards />
    </div>
  );
}
