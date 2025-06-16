import { Link } from "react-router-dom";
import ButtonIcon from "./styles/ButtonIcon";
import ButtonTextIcon from "./styles/ButtonTextIcon";
import Logo from "./styles/Logo";
import { UserRound } from "lucide-react";

export default function Header() {
  return (
    <div className="flex items-center justify-between h-30 px-45 bg-[#FFFDF3]">
      <Link to="/">
        <Logo />
      </Link>
      <div className="flex items-center gap-16">
        <Link to="owners" className="font-black">
          Owners
        </Link>
        <Link to="dogs" className="font-black">
          Dogs
        </Link>
        <Link to="profile">
          <ButtonIcon icon={<UserRound strokeWidth={3} />} />
        </Link>
      </div>
    </div>
  );
}
