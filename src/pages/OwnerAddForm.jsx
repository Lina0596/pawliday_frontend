import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { addOwner } from "../api/api";
import H2 from "../components/styles/H2";
import ButtonText from "../components/styles/ButtonText";
import H6 from "../components/styles/H6";
import ButtonImage from "../components/styles/ButtonImage";
import { Plus } from "lucide-react";

export default function OwnerAddForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  async function addNewFormData(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log("data:", data);
    setLoading(true);
    try {
      const res = await addOwner(1, data);
      setSuccessMessage(res.message);
      setError(null);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error.message}</h1>;
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-140">
        <H2 className="text-center">Add A New Owner</H2>
        <div className="my-8 border-t-4 border-dotted border-[#F0E5C2] w-full"></div>
        <form onSubmit={addNewFormData}>
          <label htmlFor="firstName">
            <H6 className="mb-4">First name</H6>
          </label>
          <input
            className="mb-8 w-full h-10 px-4 rounded-sm bg-[#F9F3E1]"
            id="firstName"
            type="text"
            name="first_name"
            placeholder="First name"
          />
          <label htmlFor="lastName">
            <H6 className="mb-4">Last name</H6>
          </label>
          <input
            className="mb-8 w-full h-10 px-4 rounded-sm bg-[#F9F3E1]"
            id="lastName"
            type="text"
            name="last_name"
            placeholder="Last name"
          />
          <label htmlFor="email">
            <H6 className="mb-4">E-mail</H6>
          </label>
          <input
            className="mb-8 w-full h-10 px-4 rounded-sm bg-[#F9F3E1]"
            id="email"
            type="text"
            name="email"
            placeholder="E-mail"
          />
          <label htmlFor="phoneNumber">
            <H6 className="mb-4">Phone number</H6>
          </label>
          <input
            className="w-full h-10 px-4 rounded-sm bg-[#F9F3E1]"
            id="phoneNumber"
            type="text"
            name="phone_number"
            placeholder="Phone number"
          />
          <div className="my-8 border-t-4 border-dotted border-[#F0E5C2] w-full"></div>
          <ButtonText className="w-full" text="Continue to add a dog" />
        </form>
      </div>
    </div>
  );
}
