import { useState, useEffect, useContext } from "react";
import { DataContext } from "../context/DataContext";
import { useNavigate, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import H2 from "../components/styles/H2";
import H6 from "../components/styles/H6";
import ButtonText from "../components/styles/ButtonText";
import LoadingSpinner from "../components/styles/LoadingSpinner";
import ErrorMessage from "../components/styles/ErrorMessage";

export default function OwnerAddForm() {
  const navigate = useNavigate();
  const { fetchAddOwner, dataLoading, dataStatus, clearDataStatus } =
    useContext(DataContext);
  const [newOwnerId, setNewOwnerId] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleAddOwner = async (newData) => {
    const newOwner = await fetchAddOwner(newData);
    setNewOwnerId(newOwner?.owner_id);
  };

  useEffect(() => {
    if (
      !dataLoading &&
      dataStatus?.action === "add owner" &&
      dataStatus?.type === "success" &&
      dataStatus?.message &&
      newOwnerId
    ) {
      navigate(`/dogs/add/${newOwnerId}`, { state: dataStatus });
    }
  }, [dataLoading, dataStatus, newOwnerId, navigate]);

  if (dataLoading) return <LoadingSpinner />;

  return (
    <div className="flex flex-col items-center justify-center">
      {dataStatus?.action === "add owner" && dataStatus?.type === "error" ? (
        <ErrorMessage>{dataStatus.message}</ErrorMessage>
      ) : null}

      <div
        className="w-full
        md:w-140"
      >
        <H2 className="text-center">Add a new owner</H2>

        <div className="my-8 border-t-4 border-dotted border-[#F0E5C2] w-full"></div>

        <form onSubmit={handleSubmit(handleAddOwner)}>
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
              onChange={() => clearDataStatus()}
            />
            <p className="mt-1 text-[#E84D19]">{errors.first_name?.message}</p>
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
              onChange={() => clearDataStatus()}
            />
            <p className="mt-1 text-[#E84D19]">{errors.last_name?.message}</p>
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
              onChange={() => clearDataStatus()}
            />
            <p className="mt-1 text-[#E84D19]">{errors.email?.message}</p>
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
              onChange={() => clearDataStatus()}
            />
            <p className="mt-1 text-[#E84D19]">
              {errors.phone_number?.message}
            </p>
          </div>

          <div className="my-8 border-t-4 border-dotted border-[#F0E5C2] w-full"></div>

          <ButtonText className="w-full" text="Continue to add a dog" />
        </form>
      </div>
    </div>
  );
}
