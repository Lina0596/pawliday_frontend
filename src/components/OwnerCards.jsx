import { Link } from "react-router-dom";
import H4 from "./styles/H4";
import TextSection from "./styles/TextSection";
import ImageCircle from "./styles/ImageCircle";

export default function OwnerCards({ owners, dogs }) {
  return (
    <div className="grid gap-8 grid-cols-1 sm:grid-cols-1 lg:grid-cols-2">
      {owners.map((owner) => {
        const dogImages = dogs
          .filter((dog) => dog.owner_id === owner.owner_id)
          .map((dog) => dog.img_url);
        return (
          <Link to={`/owners/${owner.owner_id}/update`}>
            <div className="flex rounded-sm p-8 bg-[#F9F3E1]">
              <div className="flex-col items-center justify-between">
                <div className="mb-8">
                  <H4 className="mb-4">{`${owner.first_name} ${owner.last_name}`}</H4>
                  <TextSection className="mb-2">{owner.email}</TextSection>
                  <TextSection>{owner.phone_number}</TextSection>
                </div>
                <div className="flex -space-x-10">
                  {dogImages.map((image, index) => (
                    <ImageCircle key={index} src={image} alt={image.alt} />
                  ))}
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
