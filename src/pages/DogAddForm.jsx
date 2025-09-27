import { useState, useEffect, useContext } from "react";
import { DataContext } from "../context/DataContext";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import H2 from "../components/styles/H2";
import ButtonText from "../components/styles/ButtonText";
import H6 from "../components/styles/H6";
import { Upload } from "lucide-react";
import ImageCircle from "../components/styles/ImageCircle";
import LoadingSpinner from "../components/styles/LoadingSpinner";
import ErrorMessage from "../components/styles/ErrorMessage";
import SuccessMessage from "../components/styles/SuccessMessage";

export default function DogAddForm() {
  const params = useParams();
  const navigate = useNavigate();
  const [filePreview, setFilePreview] = useState(null);
  const { dataLoading, fetchAddDog, dataStatus, clearDataStatus } =
    useContext(DataContext);
  const [newDogId, setNewDogId] = useState(null);

  const location = useLocation();
  const locationStatus = location.state;

  const activeStatus = dataStatus?.type
    ? dataStatus
    : locationStatus?.type
    ? locationStatus
    : null;

  console.log(activeStatus);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const imgFile = watch("img_url");

  useEffect(() => {
    if (imgFile && imgFile.length > 0) {
      const uploadedFile = imgFile[0];
      const previewUrl = URL.createObjectURL(uploadedFile);
      setFilePreview(previewUrl);
      return () => URL.revokeObjectURL(previewUrl);
    }
  }, [imgFile]);

  const handleAddDog = async (newData) => {
    const newDog = await fetchAddDog(params.ownerId, newData);
    setNewDogId(newDog.dog_id);
  };

  useEffect(() => {
    if (
      !dataLoading &&
      dataStatus?.action === "add dog" &&
      dataStatus?.type === "success" &&
      dataStatus?.message &&
      newDogId
    ) {
      navigate(`/dogs/${newDogId}`, { state: dataStatus });
    }
  }, [dataLoading, dataStatus, newDogId, navigate]);

  if (dataLoading) return <LoadingSpinner />;

  return (
    <div className="flex flex-col items-center justify-center">
      {activeStatus?.action === "add dog" && activeStatus?.type === "error" ? (
        <ErrorMessage>{activeStatus.message}</ErrorMessage>
      ) : null}

      {activeStatus?.action === "add owner" &&
      activeStatus?.type === "success" ? (
        <SuccessMessage>{activeStatus.message}</SuccessMessage>
      ) : null}

      <div className="w-140">
        <H2 className="text-center">Add a dog</H2>

        <div className="my-8 border-t-4 border-dotted border-[#F0E5C2] w-full"></div>

        <form onSubmit={handleSubmit(handleAddDog)}>
          <div className="mb-8">
            <label htmlFor="name">
              <H6 className="mb-4">Name</H6>
            </label>
            <input
              className="w-full h-10 px-4 rounded-sm bg-[#F9F3E1]"
              id="name"
              type="text"
              {...register("name", {
                required: "Name is required",
              })}
              placeholder="Name"
              onChange={() => clearDataStatus()}
            />
            <p className="mt-1 text-[#E84D19]">{errors.name?.message}</p>
          </div>

          <div className="mb-8">
            <label htmlFor="chipId">
              <H6 className="mb-4">Chip Id</H6>
            </label>
            <input
              className="w-full h-10 px-4 rounded-sm bg-[#F9F3E1]"
              id="chipId"
              type="text"
              {...register("chip_id", {
                required: "Chip Id is required",
              })}
              placeholder="Chip Id"
              onChange={() => clearDataStatus()}
            />
            <p className="mt-1 text-[#E84D19]">{errors.chip_id?.message}</p>
          </div>

          <div className="mb-8">
            <label htmlFor="breed">
              <H6 className="mb-4">Breed</H6>
            </label>
            <input
              className="w-full h-10 px-4 rounded-sm bg-[#F9F3E1]"
              id="breed"
              type="text"
              {...register("breed", {
                required: "Breed is required",
              })}
              placeholder="Breed"
              onChange={() => clearDataStatus()}
            />
            <p className="mt-1 text-[#E84D19]">{errors.breed?.message}</p>
          </div>

          <div className="mb-8">
            <label htmlFor="gender">
              <H6 className="mb-4">Gender</H6>
            </label>
            <div className="flex items-center gap-4">
              <select
                className="w-full h-10 px-4 rounded-sm bg-[#F9F3E1]"
                id="gender"
                {...register("gender", {
                  required: "Gender is required",
                })}
              >
                <option value="" disabled hidden>
                  Select gender...
                </option>
                <option>male</option>
                <option>female</option>
              </select>
              <label className="flex items-center gap-2">
                <input
                  id="castrated"
                  type="checkbox"
                  {...register("castrated")}
                  className="w-5 h-5"
                />
                <p>castrated</p>
              </label>
            </div>
            <p className="mt-1 text-[#E84D19]">{errors.gender?.message}</p>
          </div>

          <div className="mb-8">
            <label htmlFor="birthDate">
              <H6 className="mb-4">Birth Date</H6>
            </label>
            <input
              className="w-full h-10 px-4 rounded-sm bg-[#F9F3E1]"
              id="birthDate"
              type="date"
              {...register("birth_date", {
                required: "Birth date is required",
              })}
              placeholder="Birth date"
              onChange={() => clearDataStatus()}
            />
            <p className="mt-1 text-[#E84D19]">{errors.birth_date?.message}</p>
          </div>

          <div className="mb-8">
            <label htmlFor="height">
              <H6 className="mb-4">Height in cm</H6>
            </label>
            <input
              className="w-full h-10 px-4 rounded-sm bg-[#F9F3E1]"
              id="height"
              type="text"
              {...register("height", {
                required: "Height is required",
              })}
              placeholder="Height"
              onChange={() => clearDataStatus()}
            />
            <p className="mt-1 text-[#E84D19]">{errors.height?.message}</p>
          </div>

          <div className="mb-8">
            <label htmlFor="weight">
              <H6 className="mb-4">Weight in kg</H6>
            </label>
            <input
              className="w-full h-10 px-4 rounded-sm bg-[#F9F3E1]"
              id="weight"
              type="text"
              {...register("weight", {
                required: "Weight is required",
              })}
              placeholder="Weight"
              onChange={() => clearDataStatus()}
            />
            <p className="mt-1 text-[#E84D19]">{errors.weight?.message}</p>
          </div>

          <div className="mb-8">
            <label htmlFor="foodPerDay">
              <H6 className="mb-4">Food per day in g</H6>
            </label>
            <input
              className="w-full h-10 px-4 rounded-sm bg-[#F9F3E1]"
              id="foodPerDay"
              type="text"
              {...register("food_per_day", {
                required: "Food per day is required",
              })}
              placeholder="Food per day"
              onChange={() => clearDataStatus()}
            />
            <p className="mt-1 text-[#E84D19]">
              {errors.food_per_day?.message}
            </p>
          </div>

          <div className="mb-8">
            <label htmlFor="character">
              <H6 className="mb-4">Character</H6>
            </label>
            <div className="flex items-center gap-4">
              <select
                className="w-full h-10 px-4 rounded-sm bg-[#F9F3E1]"
                id="character"
                {...register("character", {
                  required: "Character is required",
                })}
              >
                <option value="" disabled hidden>
                  Select character...
                </option>
                <option>sensible</option>
                <option>lazy</option>
                <option>stubborn</option>
                <option>impulsive</option>
              </select>
              <label className="flex items-center gap-2">
                <input
                  className="w-5 h-5"
                  id="sociable"
                  type="checkbox"
                  {...register("sociable")}
                />
                <p className="mb-1">sociable</p>
              </label>
            </div>
            <p className="mt-1 text-[#E84D19]">{errors.character?.message}</p>
          </div>

          <div className="mb-8">
            <H6 className="mb-4">Upload dog image</H6>
            <div className="flex gap-4">
              <label
                htmlFor="imageUrl"
                className="flex items-center justify-center font-inter h-26 w-26 bg-[#F0E5C2] text-black rounded-full cursor-pointer"
              >
                {<Upload strokeWidth={3} />}
              </label>
              <input
                id="imageUrl"
                type="file"
                accept="image/*"
                {...register("img_url")}
                className="hidden"
              />

              {filePreview && <ImageCircle src={filePreview} alt={"preview"} />}
            </div>
          </div>

          <div className="my-8 border-t-4 border-dotted border-[#F0E5C2] w-full"></div>

          <H6 className="mb-4">Training options</H6>
          <label className="flex items-center gap-2">
            <input
              id="training"
              type="checkbox"
              {...register("training")}
              className="w-5 h-5"
            />
            <p>Open for training</p>
          </label>

          <div className="my-8 border-t-4 border-dotted border-[#F0E5C2] w-full"></div>

          <ButtonText className="w-full" text="Add dog" />
        </form>
      </div>
    </div>
  );
}
