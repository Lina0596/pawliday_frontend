import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import H2 from "../components/styles/H2";
import ButtonText from "../components/styles/ButtonText";
import ImageCircle from "../components/styles/ImageCircle";
import H6 from "../components/styles/H6";
import ButtonImage from "../components/styles/ButtonImage";
import { Plus } from "lucide-react";

export default function OwnerUpadateForm() {
  const params = useParams();
  const { owners, dogs, loading, error } = useContext(DataContext);
  const owner = owners.find((o) => o.owner_id.toString() === params.ownerId);
  const ownerDogs = dogs.filter((dog) => dog.owner_id === owner.owner_id);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  function updateOwner(formData) {
    console.log(Object.fromEntries(formData));
    console.log("Submitted!");
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-140">
        <H2 className="text-center">{`${owner.first_name} ${owner.last_name}`}</H2>
        <div className="my-8 border-t-4 border-dotted border-[#F0E5C2] w-full"></div>
        <form action={updateOwner}>
          <label htmlFor="firstName">
            <H6 className="mb-4">First name</H6>
          </label>
          <input
            className="mb-8 w-full h-10 px-4 rounded-sm bg-[#F9F3E1]"
            id="firstName"
            type="text"
            defaultValue={owner.first_name}
            name="firstName"
            placeholder="First name"
          />
          <label htmlFor="lastName">
            <H6 className="mb-4">Last name</H6>
          </label>
          <input
            className="mb-8 w-full h-10 px-4 rounded-sm bg-[#F9F3E1]"
            id="lastName"
            type="text"
            defaultValue={owner.last_name}
            name="lastName"
            placeholder="Last name"
          />
          <label htmlFor="email">
            <H6 className="mb-4">E-mail</H6>
          </label>
          <input
            className="mb-8 w-full h-10 px-4 rounded-sm bg-[#F9F3E1]"
            id="email"
            type="text"
            defaultValue={owner.email}
            name="email"
            placeholder="E-mail"
          />
          <label htmlFor="phoneNumber">
            <H6 className="mb-4">Phone number</H6>
          </label>
          <input
            className="mb-8 w-full h-10 px-4 rounded-sm bg-[#F9F3E1]"
            id="phoneNumber"
            type="text"
            defaultValue={owner.phone_number}
            name="phoneNumber"
            placeholder="Phone number"
          />
        </form>
        <H6 className="mb-4">Dogs</H6>
        <div className="flex gap-4">
          <div className="flex gap-4">
            {ownerDogs.map((ownerDog) => (
              <Link to={`/dogs/${ownerDog.dog_id}`}>
                <ImageCircle
                  key={ownerDog.dog_id}
                  src={ownerDog.img_url}
                  alt={ownerDog.name}
                />
              </Link>
            ))}
          </div>
          <Link to="/dogs/add">
            <ButtonImage icon={<Plus strokeWidth={3} />} />
          </Link>
        </div>
        <div className="my-8 border-t-4 border-dotted border-[#F0E5C2] w-full"></div>
        <ButtonText className="w-full" text="Save" />
      </div>
    </div>
  );
}
