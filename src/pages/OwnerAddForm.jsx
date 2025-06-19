import { useState, useEffect } from "react";
import { addOwner } from "../api/api";
import H2 from "../components/styles/H2";
import ButtonText from "../components/styles/ButtonText";

export default function OwnerAddForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  async function addNewFormData(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
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
    <div className="flex flex-col items-center">
      {successMessage && <p>{successMessage}</p>}
      <H2 className="mb-8">Add a new Owner</H2>
      <form onSubmit={addNewFormData}>
        <div className="bg-white border-solid">
          <label htmlFor="first_name">First name</label>
          <input
            id="first_name"
            type="text"
            name="first_name"
            placeholder="Here comes your first name"
          />
          <br />
          <label htmlFor="last_name">Last name</label>
          <input
            id="last_name"
            type="text"
            name="last_name"
            placeholder="Here comes your last name"
          />
          <br />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            name="email"
            placeholder="Here comes your email"
          />
          <br />
          <label htmlFor="phone_number">Phone number</label>
          <input
            id="phone_number"
            type="text"
            name="phone_number"
            placeholder="Here comes your phone number"
          />
        </div>
        <ButtonText text="Add Owner" />
      </form>
    </div>
  );
}
