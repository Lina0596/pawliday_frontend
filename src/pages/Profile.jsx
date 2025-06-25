import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import H2 from "../components/styles/H2";
import ButtonText from "../components/styles/ButtonText";
import H6 from "../components/styles/H6";

export default function Profile() {
  const params = useParams();
  const { sitter, loading, error } = useContext(DataContext);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  function updateSitter(formData) {
    console.log(Object.fromEntries(formData));
    console.log("Submitted!");
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-140">
        <H2 className="mb-8 text-center">Your Profile</H2>
        <div className="mb-8 border-t-4 border-dotted border-[#F0E5C2] w-full"></div>
        <form action={updateSitter}>
          <label htmlFor="firstName">
            <H6 className="mb-4">First name</H6>
          </label>
          <input
            className="mb-8 w-full h-10 px-4 rounded-sm bg-[#F9F3E1]"
            id="firstName"
            type="text"
            defaultValue={sitter.first_name}
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
            defaultValue={sitter.last_name}
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
            defaultValue={sitter.email}
            name="email"
            placeholder="E-mail"
          />
        </form>

        <div className="mb-8 border-t-4 border-dotted border-[#F0E5C2] w-full"></div>
        <ButtonText className="w-full" text="Save" />
      </div>
    </div>
  );
}
