import H3 from "./styles/H3";
import ButtonTextSecondary from "./styles/ButtonTextSecondary";
import { CircleSlash } from "lucide-react";

export default function NotFound({ notFoundMessage, buttonText }) {
  return (
    <div className="flex items-center justify-center min-h-screen -my-20">
      <div className="flex flex-col justify-center items-center">
        <H3 className="mb-6 text-[#F0E5C2]">{notFoundMessage}</H3>
        <ButtonTextSecondary text={buttonText} />
      </div>
    </div>
  );
}
