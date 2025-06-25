import { PawPrint } from "lucide-react";

export default function Logo() {
  return (
    <div className="flex items-center">
      <div className="flex justify-center items-center bg-black h-10 w-10 rounded-full mr-2">
        <PawPrint strokeWidth={3} color="#FFFFFF" />
      </div>
      <span className="font-inter font-black text-2xl">pawliday</span>
    </div>
  );
}
