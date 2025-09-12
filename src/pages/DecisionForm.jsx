import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import H2 from "../components/styles/H2";
import ButtonText from "../components/styles/ButtonText";
import ButtonTextSecondary from "../components/styles/ButtonTextSecondary";
import H6 from "../components/styles/H6";
import LoadingSpinner from "../components/styles/LoadingSpinner";

export default function DecisionForm() {
  const { owners, loading } = useContext(DataContext);

  if (loading) return <LoadingSpinner />;

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    navigate(`/dogs/add/${data.owner}`);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-140">
        <H2 className="text-center">Add a dog</H2>

        <div className="my-8 border-t-4 border-dotted border-[#F0E5C2] w-full"></div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="owner">
            <H6 className="mb-4">Choose existing owner</H6>
          </label>
          <div className="mb-8">
            <select
              className="w-full h-10 px-4 rounded-sm bg-[#F9F3E1]"
              id="owner"
              {...register("owner", {
                required: "Owner is required",
              })}
            >
              <option value="" disabled selected hidden>
                Select owner...
              </option>
              {owners.map((owner) => (
                <option key={owner.owner_id} value={owner.owner_id}>
                  {`${owner.first_name} ${owner.last_name}`}
                </option>
              ))}
            </select>
            <p className="mt-1">{errors.owner?.message}</p>
          </div>
          <ButtonText className="w-full" text="Continue to add a dog" />
        </form>

        <div className="my-8 border-t-4 border-dotted border-[#F0E5C2] w-full"></div>

        <Link to="/owners/add">
          <ButtonTextSecondary className="w-full" text="Add a new owner" />
        </Link>
      </div>
    </div>
  );
}
