import { Link } from "react-router-dom";
import { Mars, Venus } from "lucide-react";
import IconCorner from "./styles/IconCorner";
import H4 from "./styles/H4";
import TextSection from "./styles/TextSection";
import ImageCircle from "./styles/ImageCircle";
import Pill from "./styles/Pill";

export default function DogCards({ dogs, owners }) {
  return (
    <div className="grid gap-8 grid-cols-1 sm:grid-cols-1 lg:grid-cols-2">
      {dogs.map((dog) => {
        const dogOwner = owners.find(
          (owner) => dog.owner_id === owner.owner_id
        );
        return (
          <Link to={`/dogs/${dog.dog_id}`}>
            <div className="flex-col relative rounded-sm p-8 bg-[#F9F3E1]">
              <IconCorner
                icon={
                  dog.gender === "male" ? (
                    <Mars strokeWidth={3} color="#02ABC9" />
                  ) : (
                    <Venus strokeWidth={3} color="#FF61A6" />
                  )
                }
              />
              <div className="flex items-center mb-8">
                <div className="mr-5">
                  <ImageCircle
                    key={dog.dog_id}
                    src={dog.img_url}
                    alt={`dog image from ${dog.name}`}
                  />
                </div>
                <div>
                  <H4 className="mb-2">{dog.name}</H4>
                  <TextSection>{`${dogOwner.first_name} ${dogOwner.last_name}'s dog`}</TextSection>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <Pill>{dog.breed}</Pill>
                <Pill>{`${dog.height} height`}</Pill>
                <Pill>{`${dog.weight} kg`}</Pill>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
