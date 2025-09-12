import { Link } from "react-router-dom";
import H4 from "./styles/H4";
import TextSection from "./styles/TextSection";
import ImageCircle from "./styles/ImageCircle";
import ButtonImage from "../components/styles/ButtonImage";
import { Plus } from "lucide-react";

export default function OwnerCards({ owners, dogs }) {
  return (
    <div className="grid gap-8 grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
      {owners.map((owner) => {
        const ownerDogs = dogs.filter((dog) => dog.owner_id === owner.owner_id);
        return (
          <Link to={`/owners/${owner.owner_id}/update`}>
            <div className="flex rounded-sm p-8 bg-[#F9F3E1]">
              <div className="flex-col items-center justify-between">
                <div className="mb-8">
                  <H4 className="mb-2">{`${owner.first_name} ${owner.last_name}`}</H4>
                  <TextSection className="mb-1">{owner.email}</TextSection>
                  <TextSection>{owner.phone_number}</TextSection>
                </div>
                <div className="flex -space-x-10">
                  {ownerDogs.length > 0 ? (
                    ownerDogs.map((ownerDog) => (
                      <Link to={`/dogs/${ownerDog.dog_id}`}>
                        <ImageCircle
                          key={ownerDog.dog_id}
                          src={ownerDog.img_url}
                          alt={ownerDog.name}
                        />
                      </Link>
                    ))
                  ) : (
                    <Link to={`/dogs/add/${owner.owner_id}`}>
                      <ButtonImage icon={<Plus strokeWidth={3} />} />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
