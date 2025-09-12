import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, Navigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import H2 from "../components/styles/H2";
import ButtonText from "../components/styles/ButtonText";
import ButtonTextSecondary from "../components/styles/ButtonTextSecondary";
import H6 from "../components/styles/H6";
import LoadingSpinner from "../components/styles/LoadingSpinner";
import SuccessMessage from "../components/styles/SuccessMessage";
import ErrorMessage from "../components/styles/ErrorMessage";

export default function Login() {
  const { isAuthenticated, authLoading, fetchLogin, status, clearStatus } =
    useContext(AuthContext);

  const location = useLocation();
  const locationStatus = location.state;

  const activeStatus = status?.type
    ? status
    : locationStatus?.type
    ? locationStatus
    : null;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = async (loginData) => {
    await fetchLogin(loginData);
  };

  if (authLoading) return <LoadingSpinner />;
  if (isAuthenticated) return <Navigate to="/" replace />;

  return (
    <div className="flex flex-col items-center justify-center">
      {activeStatus?.action === "login" && activeStatus?.type === "error" ? (
        <ErrorMessage>{activeStatus.message}</ErrorMessage>
      ) : null}

      {(activeStatus?.action === "logout" ||
        activeStatus?.action === "registration" ||
        activeStatus?.action === "delete") &&
      activeStatus?.type === "success" ? (
        <SuccessMessage>{activeStatus.message}</SuccessMessage>
      ) : null}

      <div className="w-140">
        <H2 className="text-center">Login</H2>

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
