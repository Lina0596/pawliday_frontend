import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { DataContext } from "../context/DataContext";
import { useForm } from "react-hook-form";
import { updateOwner, deleteOwner } from "../api/api";
import H2 from "../components/styles/H2";
import ButtonText from "../components/styles/ButtonText";
import ButtonDelete from "../components/styles/ButtonDelete";
import ImageCircle from "../components/styles/ImageCircle";
import H6 from "../components/styles/H6";
import ButtonImage from "../components/styles/ButtonImage";
import { Plus } from "lucide-react";
import LoadingSpinner from "../components/styles/LoadingSpinner";

export default function OwnerUpadateForm() {
  const params = useParams();
  const { owners, dogs, loadOwnersAndDogs, loading, error } =
    useContext(DataContext);
  const navigate = useNavigate();
  const owner = owners.find((o) => o.owner_id.toString() === params.ownerId);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [errorSubmit, setErrorSubmit] = useState(null);
  const [loadingDelete, setLoadingDelete] = useState(false);
  const [errorDelete, setErrorDelete] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
    getValues,
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

  const onSubmit = async (data) => {
    setLoadingSubmit(true);
    try {
      const updatedData = {};
      const allValues = getValues();
      for (const key in dirtyFields) {
        updatedData[key] = allValues[key];
      }
      console.log(updatedData);
      const res = await updateOwner(params.ownerId, updatedData);
      await loadOwnersAndDogs();
      setErrorSubmit(null);
      navigate("/owners");
    } catch (err) {
      setErrorSubmit(err);
    } finally {
      setLoadingSubmit(false);
    }
  };

  const handleDeleteOwner = async () => {
    if (!window.confirm("Are you sure you want to delete this owner?")) return;
    setLoadingDelete(true);
    try {
      const res = await deleteOwner(params.ownerId);
      await loadOwnersAndDogs();
      setErrorDelete(null);
      navigate("/owners");
    } catch (err) {
      setErrorDelete(err);
    } finally {
      setLoadingDelete(false);
    }
  };

  if (loading || loadingSubmit || !owner) return <LoadingSpinner />;
  if (error) return <p>{error}</p>;
  if (errorDelete) return <p>{errorDelete}</p>;

  const ownerDogs = dogs.filter((dog) => dog.owner_id === owner.owner_id);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-140">
        <H2 className="text-center">{`${owner.first_name} ${owner.last_name}`}</H2>

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
            />
            <p className="mt-1">{errors.phone_number?.message}</p>
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

          <div className="flex justify-center">
            <ButtonDelete
              text={
                loadingDelete
                  ? "Deleting..."
                  : `Delete ${owner.first_name} ${owner.last_name}`
              }
              onClick={handleDeleteOwner}
              disabled={loadingDelete}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
