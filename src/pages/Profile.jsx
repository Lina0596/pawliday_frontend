import { useEffect } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useForm } from "react-hook-form";
import { LogOut } from "lucide-react";
import H2 from "../components/styles/H2";
import H6 from "../components/styles/H6";
import ButtonText from "../components/styles/ButtonText";
import ButtonIconSecondary from "../components/styles/ButtonIconSecondary";
import ButtonDelete from "../components/styles/ButtonDelete";
import LoadingSpinner from "../components/styles/LoadingSpinner";
import SuccessMessage from "../components/styles/SuccessMessage";
import ErrorMessage from "../components/styles/ErrorMessage";

export default function Profile() {
  const {
    user,
    authLoading,
    fetchLogout,
    fetchUpdateProfile,
    fetchDeleteProfile,
    status,
    clearStatus,
  } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
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
    const updatedUser = await fetchUpdateProfile(data);
    if (updatedUser) {
      reset({
        first_name: updatedUser.first_name,
        last_name: updatedUser.last_name,
        email: updatedUser.email,
      });
    }
  };

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete your profile?"))
      return;
    await fetchDeleteProfile();
  };

  if (authLoading) return <LoadingSpinner />;

  return (
    <div className="flex flex-col items-center justify-center">
      {(status?.action === "logout" ||
        status?.action === "update" ||
        status?.action === "delete") &&
      status?.type === "error" ? (
        <ErrorMessage>{status.message}</ErrorMessage>
      ) : null}

      {status?.action === "update" && status?.type === "success" ? (
        <SuccessMessage>{status.message}</SuccessMessage>
      ) : null}

      <div className="w-140">
        <div className="flex justify-between ">
          <H2 className="mb-8 text-center">Your Profile</H2>
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
            onChange={() => clearStatus()}
          />
          <p className="mt-1 text-[#E84D19]">{errors.first_name?.message}</p>
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
            onChange={() => clearStatus()}
          />
          <p className="mt-1 text-[#E84D19]">{errors.last_name?.message}</p>
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
            onChange={() => clearStatus()}
          />
          <p className="mt-1 text-[#E84D19]">{errors.email?.message}</p>
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
