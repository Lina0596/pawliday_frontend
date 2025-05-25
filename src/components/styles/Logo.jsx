import H4 from './H4';
import { PawPrint } from 'lucide-react';

export default function Logo() {
    return(
        <div className="flex items-center">
            <div className="flex justify-center items-center bg-black h-[48px] w-[48px] rounded-full mr-[8px]">
                <PawPrint strokeWidth={3} color="#FFFFFF"/>
            </div>
            <span className="font-inter font-black text-2xl">pawliday</span>
        </div>
    )
}