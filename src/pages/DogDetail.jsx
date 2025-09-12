import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import H2 from "../components/styles/H2";
import H6 from "../components/styles/H6";
import ButtonIconSecondary from "../components/styles/ButtonIconSecondary";
import TextSection from "../components/styles/TextSection";
import ImageCircleBig from "../components/styles/ImageCircleBig";
import Pill from "../components/styles/Pill";
import { Pencil, Mars, Venus } from "lucide-react";
import LoadingSpinner from "../components/styles/LoadingSpinner";

export default function DogDetail() {
  const params = useParams();
  const { owners, dogs, loading } = useContext(DataContext);
  const dog = dogs.find((d) => d.dog_id.toString() === params.dogId);
  const dogOwner = owners.find((owner) => dog.owner_id === owner.owner_id);

  if (loading) return <LoadingSpinner />;

  return (
    <div className="flex items-center justify-center min-h-screen -my-20">
      <div>
        <ImageCircleBig
          key={dog.dog_id}
          src={dog.img_url}
          alt={`dog image from ${dog.name}`}
        />
      </div>

      <div className="flex items-stretch">
        <div className="mx-20 border-l-4 border-dotted border-[#F0E5C2]"></div>
        <div className="flex-col items-stretch w-100">
          <div className="mb-10">
            <div className="flex gap-2">
              <H2 className="mb-4">{dog.name}</H2>
              <Pill>
                {dog.gender === "male" ? (
                  <Mars strokeWidth={3} color="#02ABC9" />
                ) : (
                  <Venus strokeWidth={3} color="#FF61A6" />
                )}
              </Pill>
              <Link to={`/dogs/${dog.dog_id}/update`}>
                <ButtonIconSecondary icon={<Pencil strokeWidth={3} />} />
              </Link>
            </div>

            <TextSection className="mb-2">{`Chip ID ${dog.chip_id}`}</TextSection>
            <TextSection>{`${dogOwner.first_name} ${dogOwner.last_name}'s dog`}</TextSection>
          </div>

          <div className="mb-10">
            <H6 className="mb-4">General Properties</H6>
            <div className="flex flex-wrap gap-2">
              <Pill>{dog.breed}</Pill>
              <Pill>{`${dog.birth_date}`}</Pill>
              <Pill>{`${dog.height} cm`}</Pill>
              <Pill>{`${dog.weight} kg`}</Pill>
              <Pill>{dog.castrated ? "castrated" : "intact"}</Pill>
            </div>
          </div>

          <div className="mb-10">
            <H6 className="mb-4">Character</H6>
            <div className="flex flex-wrap gap-2">
              <Pill>{dog.character}</Pill>
              <Pill>{dog.sociable ? "social" : "antisocial"}</Pill>
            </div>
          </div>

          <div>
            <H6 className="mb-4">Food per day</H6>
            <div className="flex flex-wrap gap-2">
              <Pill>{`${dog.food_per_day} g`}</Pill>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
