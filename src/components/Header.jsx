import { Link } from "react-router-dom";
import ButtonIcon from "./styles/ButtonIcon";
import ButtonTextIcon from "./styles/ButtonTextIcon";
import Logo from "./styles/Logo";
import { UserRound } from "lucide-react";

export default function Header() {
  return (
    <div className="flex items-center justify-between h-20 px-45 bg-[#F9F3E1] sticky top-0 z-50">
      <Link to="/">
        <Logo />
      </Link>
      <div className="flex items-center gap-16">
        <Link to="owners" className="font-black text-base">
          Owners
        </Link>
        <Link to="dogs" className="font-black text-base">
          Dogs
        </Link>
        <Link to="profile">
          <ButtonIcon icon={<UserRound strokeWidth={3} />} />
        </Link>
      </div>
    </div>
  );
}
