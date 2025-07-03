import { useState, useContext } from "react";
import { DataContext } from "../context/DataContext";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { addOwner } from "../api/api";
import H2 from "../components/styles/H2";
import ButtonText from "../components/styles/ButtonText";
import H6 from "../components/styles/H6";

export default function OwnerAddForm() {
  const { loadOwnersAndDogs, loading, error } = useContext(DataContext);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [errorSubmit, setErrorSubmit] = useState(null);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoadingSubmit(true);
    try {
      const res = await addOwner(1, data);
      await loadOwnersAndDogs();
      const newOwnerId = res.owner_id;
      setErrorSubmit(null);
      navigate(`/dogs/add/${newOwnerId}`);
    } catch (err) {
      setErrorSubmit(err);
    } finally {
      setLoadingSubmit(false);
    }
  };

  if (loadingSubmit) {
    return <h1>Loading...</h1>;
  }
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-140">
        <H2 className="text-center">Add a new owner</H2>

        <div className="my-8 border-t-4 border-dotted border-[#F0E5C2] w-full"></div>
        {errorSubmit ? (
          <div className="mb-8 py-1 rounded-sm bg-red-200">
            <p className="text-center text-red-700">{errorSubmit.message}</p>
          </div>
        ) : null}

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-8">
            <label htmlFor="firstName">
              <H6 className="mb-4">First name</H6>
            </label>
            <input
              className="w-full h-10 px-4 rounded-sm bg-[#F9F3E1]"
              id="firstName"
              type="text"
              {...register("first_name", {
                required: "First name is required",
              })}
              placeholder="First name"
            />
            <p className="mt-1">{errors.first_name?.message}</p>
          </div>

          <div className="mb-8">
            <label htmlFor="lastName">
              <H6 className="mb-4">Last name</H6>
            </label>
            <input
              className="w-full h-10 px-4 rounded-sm bg-[#F9F3E1]"
              id="lastName"
              type="text"
              {...register("last_name", { required: "Last name is required" })}
              placeholder="Last name"
            />
            <p className="mt-1">{errors.last_name?.message}</p>
          </div>

          <div className="mb-8">
            <label htmlFor="email">
              <H6 className="mb-4">E-mail</H6>
            </label>
            <input
              className="w-full h-10 px-4 rounded-sm bg-[#F9F3E1]"
              id="email"
              type="text"
              {...register("email", { required: "E-mail is required" })}
              placeholder="E-mail"
            />
            <p className="mt-1">{errors.email?.message}</p>
          </div>

          <div>
            <label htmlFor="phoneNumber">
              <H6 className="mb-4">Phone number</H6>
            </label>
            <input
              className="w-full h-10 px-4 rounded-sm bg-[#F9F3E1]"
              id="phoneNumber"
              type="text"
              {...register("phone_number", {
                required: "Phone number is required",
              })}
              placeholder="Phone number"
            />
            <p className="mt-1">{errors.phone_number?.message}</p>
          </div>

          <div className="my-8 border-t-4 border-dotted border-[#F0E5C2] w-full"></div>

          <ButtonText className="w-full" text="Continue to add a dog" />
        </form>
      </div>
    </div>
  );
}
