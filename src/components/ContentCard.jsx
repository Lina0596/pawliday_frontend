import { Link } from "react-router-dom";
import H2 from "./styles/H2";
import TextSection from "./styles/TextSection";
import ButtonTextIcon from "./styles/ButtonTextIcon";
import cozyDog from "../assets/images/cozyDog.png";
import { CircleArrowRight } from "lucide-react";

export default function ContentCard({ dogs }) {
  console.log("Dogs: ", dogs);
  return (
    <div className="flex flex-col md:flex-row-reverse h-auto md:h-80 rounded-sm text-left bg-[#F9F3E1]">
      <img
        src={cozyDog}
        alt="dog in basket"
        className="w-full md:w-[50%] h-64 md:h-full object-cover rounded-t-sm md:rounded-t-none md:rounded-r-sm"
      />
      <div className="flex flex-col justify-between w-full md:w-[50%] px-10 md:px-20 py-10 md:py-16">
        <div>
          <H2 className="mb-4">{dogs.length} Dogs checked in</H2>
          <TextSection>
            Lorem ipsum dolor sit amet consectetur. Blandit congue sit sagittis
            cursus netus.
          </TextSection>
        </div>
        <Link to="/dogs">
          <ButtonTextIcon
            text="Show all dogs"
            icon={<CircleArrowRight strokeWidth={3} />}
          />
        </Link>
      </div>
    </div>
  );
}
