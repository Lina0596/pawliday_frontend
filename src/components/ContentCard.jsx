import { Link } from "react-router-dom";
import H2 from "./styles/H2";
import TextSection from "./styles/TextSection";
import ButtonTextIcon from "./styles/ButtonTextIcon";
import cozyDog from "../assets/images/cozyDog.png";
import { CircleArrowRight } from "lucide-react";

export default function ContentCard({ dogs }) {
  return (
    <div
      className="flex flex-col h-auto rounded-sm text-left bg-[#F9F3E1]
      md:flex-row-reverse md:h-80"
    >
      <img
        src={cozyDog}
        alt="dog in basket"
        className="w-full h-64 object-cover rounded-t-sm
        md:w-[50%] md:h-full md:rounded-t-none md:rounded-r-sm"
      />
      <div
        className="flex flex-col justify-between w-full px-10 py-10
        md:w-[50%] md:px-20 md:py-16"
      >
        <div>
          <H2 className="mb-4">{dogs.length} Dogs checked in</H2>
          <TextSection>
            There are some dogs checked in! Click the button and check them out.
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
