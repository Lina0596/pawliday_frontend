import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import ButtonIcon from "./styles/ButtonIcon";
import ButtonTextIcon from "./styles/ButtonTextIcon";
import Logo from "./styles/Logo";
import { UserRound, LogIn } from "lucide-react";

export default function Header() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <div
      className="flex items-center justify-between h-16 px-4 bg-[#F9F3E1]
      sm:px-10
      md:px-20
      lg:px-40
      xl:px-45"
    >
      <Link to="/">
        <Logo />
      </Link>
      <div className="flex items-center gap-6 md:gap-16">
        {isAuthenticated ? (
          <>
            <Link to="dogs" className="font-black text-base">
              Dogs
            </Link>
            <Link to="owners" className="font-black text-base">
              Owners
            </Link>
          </>
        ) : null}
        <Link to="profile">
          {isAuthenticated ? (
            <ButtonIcon icon={<UserRound strokeWidth={3} />} />
          ) : (
            <ButtonTextIcon
              text="Login or register"
              icon={<LogIn strokeWidth={3} />}
            />
          )}
        </Link>
      </div>
    </div>
  );
}
