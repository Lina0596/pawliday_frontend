import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import H2 from "../components/styles/H2";
import ButtonText from "../components/styles/ButtonText";
import H6 from "../components/styles/H6";

export default function DogUpadateForm() {
  const params = useParams();
  const { dogs, loading, error } = useContext(DataContext);
  const dog = dogs.find((d) => d.dog_id.toString() === params.dogId);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  function updateDog(formData) {
    console.log(Object.fromEntries(formData));
    console.log("Submitted!");
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-140">
        <H2 className="text-center">{dog.name}</H2>
        <div className="my-8 border-t-4 border-dotted border-[#F0E5C2] w-full"></div>
        <form action={updateDog}>
          <label htmlFor="name">
            <H6 className="mb-4">Name</H6>
          </label>
          <input
            className="mb-8 w-full h-10 px-4 rounded-sm bg-[#F9F3E1]"
            id="name"
            type="text"
            defaultValue={dog.name}
            name="name"
            placeholder="Name"
          />

          <label htmlFor="chipId">
            <H6 className="mb-4">Chip ID</H6>
          </label>
          <input
            className="mb-8 w-full h-10 px-4 rounded-sm bg-[#F9F3E1]"
            id="chipId"
            type="text"
            defaultValue={dog.chip_id}
            name="chipId"
            placeholder="Chip ID"
          />

          <label htmlFor="breed">
            <H6 className="mb-4">Breed</H6>
          </label>
          <input
            className="mb-8 w-full h-10 px-4 rounded-sm bg-[#F9F3E1]"
            id="breed"
            type="text"
            defaultValue={dog.breed}
            name="breed"
            placeholder="Breed"
          />

          <label htmlFor="birthDate">
            <H6 className="mb-4">Birth Date</H6>
          </label>
          <input
            className="mb-8 w-full h-10 px-4 rounded-sm bg-[#F9F3E1]"
            id="birthDate"
            type="date"
            defaultValue={dog.birth_date}
            name="birthDate"
            placeholder="Birth date"
          />

          <label htmlFor="height">
            <H6 className="mb-4">Height in cm</H6>
          </label>
          <input
            className="mb-8 w-full h-10 px-4 rounded-sm bg-[#F9F3E1]"
            id="height"
            type="text"
            defaultValue={dog.height}
            name="height"
            placeholder="Height in cm"
          />

          <label htmlFor="weight">
            <H6 className="mb-4">Weight in kg</H6>
          </label>
          <input
            className="mb-8 w-full h-10 px-4 rounded-sm bg-[#F9F3E1]"
            id="weight"
            type="text"
            defaultValue={dog.weight}
            name="weight"
            placeholder="Weight in kg"
          />

          <label htmlFor="foodPerDay">
            <H6 className="mb-4">Food per day in g</H6>
          </label>
          <input
            className="mb-8 w-full h-10 px-4 rounded-sm bg-[#F9F3E1]"
            id="foodPerDay"
            type="text"
            defaultValue={dog.food_per_day}
            name="foodPerDay"
            placeholder="Food per day in g"
          />

          <label htmlFor="character">
            <H6 className="mb-4">Character</H6>
          </label>
          <select
            className="w-full h-10 px-4 rounded-sm bg-[#F9F3E1]"
            id="character"
            name="character"
            defaultValue={dog.character}
          >
            <option>sensible</option>
            <option>lazy</option>
            <option>stubborn</option>
            <option>impulsive</option>
          </select>
        </form>
        <div className="my-8 border-t-4 border-dotted border-[#F0E5C2] w-full"></div>
        <ButtonText className="w-full" text="Save" />
      </div>
    </div>
  );
}
