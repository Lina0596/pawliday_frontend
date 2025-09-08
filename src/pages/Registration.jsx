import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import H2 from "../components/styles/H2";
import ButtonText from "../components/styles/ButtonText";
import H6 from "../components/styles/H6";

export default function Registration() {
  const {
    fetchRegistration,
    registrationLoading,
    registrationMessage,
    registrationError,
  } = useContext(AuthContext);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegistration = async (newData) => {
    await fetchRegistration(newData);
  };

  if (registrationMessage) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-140">
        <H2 className="text-center">Create your account</H2>

        {registrationError ? (
          <div className="my-8 py-1 rounded-sm bg-red-200">
            <p className="text-center text-red-700">
              {registrationError.message}
            </p>
          </div>
        ) : null}

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
              {...register("last_name", {
                required: "Last name is required",
              })}
              placeholder="Last name"
            />
            <p className="mt-1">{errors.last_name?.message}</p>
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
            />
            <p className="mt-1">{errors.email?.message}</p>
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
            />
            <p className="mt-1">{errors.password?.message}</p>
          </div>

          <div className="my-8 border-t-4 border-dotted border-[#F0E5C2] w-full"></div>
          <ButtonText className="w-full" text="Create account" />
        </form>
      </div>
    </div>
  );
}
