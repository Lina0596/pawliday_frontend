import ButtonIcon from "./styles/ButtonIcon"
import Logo from "./styles/Logo";
import { UserRound } from 'lucide-react';

export default function Header() {
    return(
        <div className="flex items-center justify-between h-30 px-45 bg-[#FFFDF3]">
            <Logo />
            <ButtonIcon icon={<UserRound strokeWidth={3}/>}/>
        </div>
    )
}