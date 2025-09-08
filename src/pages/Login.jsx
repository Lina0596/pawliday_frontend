import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import H2 from "../components/styles/H2";
import ButtonText from "../components/styles/ButtonText";
import ButtonTextSecondary from "../components/styles/ButtonTextSecondary";
import H6 from "../components/styles/H6";
import LoadingSpinner from "../components/styles/LoadingSpinner";

export default function Login() {
  const {
    isAuthenticated,
    fetchLogin,
    registrationMessage,
    authLoading,
    authError,
  } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = async (loginData) => {
    await fetchLogin(loginData);
  };

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-140">
        <H2 className="text-center">Login</H2>

        {authError ? (
          <div className="my-8 py-1 rounded-sm bg-red-200">
            <p className="text-center text-red-700">{authError.message}</p>
          </div>
        ) : null}

        {registrationMessage ? (
          <div className="my-8 py-1 rounded-sm bg-green-200">
            <p className="text-center text-green-700">
              {registrationMessage.message}
            </p>
          </div>
        ) : null}

        <div className="my-8 border-t-4 border-dotted border-[#F0E5C2] w-full"></div>

        <form onSubmit={handleSubmit(handleLogin)}>
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
          <ButtonText className="w-full" text="Login" />
        </form>

        <div className="my-8 border-t-4 border-dotted border-[#F0E5C2] w-full"></div>
        <Link to={"/registration"}>
          <ButtonTextSecondary className="w-full" text="Create your account" />
        </Link>
      </div>
    </div>
  );
}
