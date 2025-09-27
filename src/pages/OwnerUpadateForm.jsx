import { Link, useParams, useNavigate, Navigate } from "react-router-dom";
import { useEffect, useContext } from "react";
import { DataContext } from "../context/DataContext";
import { useForm } from "react-hook-form";
import H2 from "../components/styles/H2";
import ButtonText from "../components/styles/ButtonText";
import ButtonDelete from "../components/styles/ButtonDelete";
import ImageCircle from "../components/styles/ImageCircle";
import H6 from "../components/styles/H6";
import ButtonImage from "../components/styles/ButtonImage";
import { Plus } from "lucide-react";
import LoadingSpinner from "../components/styles/LoadingSpinner";
import ErrorMessage from "../components/styles/ErrorMessage";
import SuccessMessage from "../components/styles/SuccessMessage";

export default function OwnerUpadateForm() {
  const {
    owners,
    dogs,
    fetchUpdateOwner,
    fetchDeleteOwner,
    dataLoading,
    dataStatus,
    clearDataStatus,
  } = useContext(DataContext);

  const params = useParams();
  const navigate = useNavigate();
  const owner = owners.find((o) => o.owner_id.toString() === params.ownerId);
  const ownerDogs = dogs.filter((dog) => dog.owner_id === owner.owner_id);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    if (owner) {
      reset({
        first_name: owner.first_name,
        last_name: owner.last_name,
        email: owner.email,
        phone_number: owner.phone_number,
      });
    }
  }, [owner, reset]);

  const handleUpdateOwner = async (updatedData) => {
    const updatedOwner = await fetchUpdateOwner(params.ownerId, updatedData);
    if (updatedOwner) {
      reset({
        first_name: updatedOwner.first_name,
        last_name: updatedOwner.last_name,
        email: updatedOwner.email,
        phone_number: updatedOwner.phone_number,
      });
    }
  };

  const handleDeleteOwner = async () => {
    if (!window.confirm("Are you sure you want to delete this owner?")) return;
    await fetchDeleteOwner(params.ownerId);
  };

  if (dataStatus?.action === "delete owner" && dataStatus?.type === "success") {
    return <Navigate to="/owners" state={dataStatus} />;
  }
  if (dataLoading || !owner) return <LoadingSpinner />;

  return (
    <div className="flex flex-col items-center justify-center">
      {(dataStatus?.action === "update owner" ||
        dataStatus?.action === "delete owner") &&
      dataStatus?.type === "error" ? (
        <ErrorMessage>{dataStatus.message}</ErrorMessage>
      ) : null}

      {dataStatus?.action === "update owner" &&
      dataStatus?.type === "success" ? (
        <SuccessMessage>{dataStatus.message}</SuccessMessage>
      ) : null}

      <div className="w-140">
        <H2 className="text-center">{`${owner.first_name} ${owner.last_name}`}</H2>
        <div className="my-8 border-t-4 border-dotted border-[#F0E5C2] w-full"></div>
        <form onSubmit={handleSubmit(handleUpdateOwner)}>
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

          <div className="mb-8">
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
            <Link to={`/dogs/add/${owner.owner_id}`}>
              <ButtonImage icon={<Plus strokeWidth={3} />} />
            </Link>
          </div>

          <div className="my-8 border-t-4 border-dotted border-[#F0E5C2] w-full"></div>

          <ButtonText className="w-full" text="Save" />

          <div className="my-8 border-t-4 border-dotted border-[#F0E5C2] w-full"></div>
        </form>
        <div className="flex justify-center">
          <ButtonDelete
            text={`Delete ${owner.first_name} ${owner.last_name}`}
            onClick={handleDeleteOwner}
          />
        </div>
      </div>
    </div>
  );
}
