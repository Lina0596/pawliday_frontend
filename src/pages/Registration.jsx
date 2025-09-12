import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import H2 from "../components/styles/H2";
import H6 from "../components/styles/H6";
import ButtonText from "../components/styles/ButtonText";
import ButtonTextSecondary from "../components/styles/ButtonTextSecondary";
import LoadingSpinner from "../components/styles/LoadingSpinner";
import ErrorMessage from "../components/styles/ErrorMessage";

export default function Registration() {
  const { authLoading, fetchRegistration, status, clearStatus } =
    useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegistration = async (newData) => {
    await fetchRegistration(newData);
  };

  if (authLoading) return <LoadingSpinner />;

  if (status?.action === "registration" && status?.type == "success") {
    return <Navigate to="/login" replace state={status} />;
  }

  return (
    <div className="flex flex-col items-center justify-center">
      {status?.action === "registration" && status?.type === "error" ? (
        <ErrorMessage>{status.message}</ErrorMessage>
      ) : null}

      <div className="w-140">
        <H2 className="text-center">Create your account</H2>

        <div className="my-8 border-t-4 border-dotted border-[#F0E5C2] w-full"></div>

        <form onSubmit={handleSubmit(handleRegistration)}>
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
              onChange={() => clearStatus()}
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
              {...register("last_name", {
                required: "Last name is required",
              })}
              placeholder="Last name"
              onChange={() => clearStatus()}
            />
            <p className="mt-1 text-[#E84D19]">{errors.last_name?.message}</p>
          </div>

          <div className="mb-8">
            <label htmlFor="email">
              <H6 className="mb-4">Email</H6>
            </label>
            <input
              className="w-full h-10 px-4 rounded-sm bg-[#F9F3E1]"
              id="email"
              type="text"
              {...register("email", {
                required: "Email is required",
              })}
              placeholder="Email"
              onChange={() => clearStatus()}
            />
            <p className="mt-1 text-[#E84D19]">{errors.email?.message}</p>
          </div>

          <div className="mb-8">
            <label htmlFor="password">
              <H6 className="mb-4">Password</H6>
            </label>
            <input
              className="w-full h-10 px-4 rounded-sm bg-[#F9F3E1]"
              id="password"
              type="password"
              {...register("password", { required: "Password is required" })}
              placeholder="Password"
              onChange={() => clearStatus()}
            />
            <p className="mt-1 text-[#E84D19]">{errors.password?.message}</p>
          </div>
          <ButtonText className="w-full" text="Create account" />
        </form>
        <div className="my-8 border-t-4 border-dotted border-[#F0E5C2] w-full"></div>
        <Link to={"/login"}>
          <ButtonTextSecondary className="w-full" text="Login" />
        </Link>
      </div>
    </div>
  );
}
