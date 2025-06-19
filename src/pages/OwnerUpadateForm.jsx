import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOwner } from "../api/api";
import H2 from "../components/styles/H2";
import ButtonText from "../components/styles/ButtonText";

export default function OwnerUpadateForm() {
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [owner, setOwner] = useState([]);

  useEffect(() => {
    async function loadOwner() {
      setLoading(true);
      try {
        const owner = await getOwner(1, params.ownerId);
        setOwner(owner);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    loadOwner();
  }, [params.ownerId]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error.message}</h1>;
  }

  function updateOwner(formData) {
    console.log(Object.fromEntries(formData));
    console.log("Submitted!");
  }

  return (
    <div className="flex flex-col items-center">
      <H2 className="mb-8">{`${owner.first_name} ${owner.last_name}`}</H2>
      <form action={updateOwner}>
        <div className="bg-white border-solid">
          <label htmlFor="firstName">First name</label>
          <input
            id="firstName"
            type="text"
            defaultValue={owner.first_name}
            name="firstName"
            placeholder="Here comes your first name"
          />
          <br />
          <label htmlFor="lastName">Last name</label>
          <input
            id="lastName"
            type="text"
            defaultValue={owner.last_name}
            name="lastName"
            placeholder="Here comes your last name"
          />
          <br />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            defaultValue={owner.email}
            name="email"
            placeholder="Here comes your email"
          />
          <br />
          <label htmlFor="phoneNumber">Phone number</label>
          <input
            id="phoneNumber"
            type="text"
            defaultValue={owner.phone_number}
            name="phoneNumber"
            placeholder="Here comes your phone number"
          />
        </div>
        <ButtonText text="Update" />
      </form>
    </div>
  );
}
