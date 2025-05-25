import ButtonIcon from "./styles/ButtonIcon"
import Logo from "./styles/Logo";
import { UserRound } from 'lucide-react';

export default function Header() {
    return(
        <div className="flex items-center justify-between h-[120px] pr-[180px] pl-[180px] bg-[#FFFDF3]">
            <Logo />
            <ButtonIcon icon={<UserRound strokeWidth={3}/>}/>
        </div>
    )
}