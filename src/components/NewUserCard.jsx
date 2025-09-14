import { Link } from "react-router-dom";
import H4 from "./styles/H4";
import TextSection from "./styles/TextSection";
import ButtonTextIcon from "./styles/ButtonTextIcon";
import { CircleArrowRight } from "lucide-react";

export default function NewUserCard() {
  return (
    <div className="flex items-center justify-between p-10 w-full h-45 rounded-sm bg-[#F9F3E1]">
      <div className="w-[60%]">
        <H4 className="mb-4">Add your first 4-legged visitor!</H4>
        <TextSection>
          Lorem ipsum dolor sit amet consectetur. Blandit congue sit sagittis
          cursus netus. Integer elementum eget libero et pellentesque blandit
          pellentesque viverra varius.
        </TextSection>
      </div>
      <Link to="/dogs/add">
        <ButtonTextIcon
          text="Add first dog"
          icon={<CircleArrowRight strokeWidth={3} />}
        />
      </Link>
    </div>
  );
}
