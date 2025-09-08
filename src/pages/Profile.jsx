import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useForm } from "react-hook-form";
import { updateSitter, deleteSitter } from "../api/api";
import H2 from "../components/styles/H2";
import ButtonText from "../components/styles/ButtonText";
import H6 from "../components/styles/H6";
import ButtonIconSecondary from "../components/styles/ButtonIconSecondary";
import ButtonDelete from "../components/styles/ButtonDelete";
import { LogOut } from "lucide-react";
import LoadingSpinner from "../components/styles/LoadingSpinner";

export default function Profile() {
  const navigate = useNavigate();
  const {
    user,
    fetchLogout,
    fetchDeleteProfile,
    isAuthenticated,
    authLoading,
    authError,
  } = useContext(AuthContext);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [errorSubmit, setErrorSubmit] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
    getValues,
    reset,
  } = useForm();

  useEffect(() => {
    if (user) {
      reset({
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
      });
    }
  }, [user, reset]);

  const handleLogout = async () => {
    await fetchLogout();
  };

  const handleUpdate = async (data) => {
    console.log("updated!");
  };

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete your profile?"))
      return;
    await fetchDeleteProfile();
  };

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (loadingSubmit) return <LoadingSpinner />;

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-140">
        <div className="flex justify-between ">
          <H2 className="mb-8 text-center">Your Profile</H2>

          {authError ? (
            <div className="my-8 py-1 rounded-sm bg-red-200">
              <p className="text-center text-red-700">{authError.message}</p>
            </div>
          ) : null}

          <ButtonIconSecondary
            icon={<LogOut strokeWidth={3} />}
            onClick={handleLogout}
          />
        </div>
        <div className="mb-8 border-t-4 border-dotted border-[#F0E5C2] w-full"></div>
        <form onSubmit={handleSubmit(handleUpdate)}>
          <label htmlFor="firstName">
            <H6 className="mb-4">First name</H6>
          </label>
          <input
            className="mb-8 w-full h-10 px-4 rounded-sm bg-[#F9F3E1]"
            id="firstName"
            type="text"
            {...register("first_name", {
              required: "First name is required",
            })}
            placeholder="First name"
          />
          <label htmlFor="lastName">
            <H6 className="mb-4">Last name</H6>
          </label>
          <input
            className="mb-8 w-full h-10 px-4 rounded-sm bg-[#F9F3E1]"
            id="lastName"
            type="text"
            {...register("last_name", {
              required: "Last name is required",
            })}
            placeholder="Last name"
          />
          <label htmlFor="email">
            <H6 className="mb-4">E-mail</H6>
          </label>
          <input
            className="mb-8 w-full h-10 px-4 rounded-sm bg-[#F9F3E1]"
            id="email"
            type="text"
            {...register("email", {
              required: "E-Mail is required",
            })}
            placeholder="E-mail"
          />
          <div className="mb-8 border-t-4 border-dotted border-[#F0E5C2] w-full"></div>
          <ButtonText className="w-full" text="Save" />
        </form>

        <div className="my-8 border-t-4 border-dotted border-[#F0E5C2] w-full"></div>

        <div className="flex justify-center">
          <ButtonDelete text="Delete your profile" onClick={handleDelete} />
        </div>
      </div>
    </div>
  );
}
