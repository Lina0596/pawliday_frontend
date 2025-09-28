import H4 from "./styles/H4";
import TextSection from "./styles/TextSection";
import sleepyDog from "../assets/images/sleepyDog.png";
import highFive from "../assets/images/highFive.png";
import dogFood from "../assets/images/dogFood.png";
import twoDogs from "../assets/images/twoDogs.png";

export default function UspContentCards() {
  return (
    <div
      className="grid gap-8 grid-cols-1
      sm:grid-cols-1
      lg:grid-cols-3
      xl:grid-cols-3"
    >
      <div className="flex-col relative h-90 rounded-sm bg-[#F9F3E1]">
        <img
          src={highFive}
          alt="dog sleeps in basket"
          className="w-full h-[50%] object-cover rounded-t-sm"
        />
        <div className="p-8 h-[50%]">
          <H4 className="mb-2">Owners</H4>
          <TextSection>
            All important informations about the dog owners in one place.
          </TextSection>
        </div>
      </div>

      <div className="flex-col relative h-90 rounded-sm bg-[#F9F3E1]">
        <img
          src={dogFood}
          alt="dog food"
          className="w-full h-[50%] object-cover rounded-t-sm"
        />
        <div className="p-8 h-[50%]">
          <H4 className="mb-2">Needs</H4>
          <TextSection>
            Check up how much food each dog gets in one day.
          </TextSection>
        </div>
      </div>

      <div className="flex-col relative h-90 rounded-sm bg-[#F9F3E1]">
        <img
          src={twoDogs}
          alt="two dogs"
          className="w-full h-[50%] object-cover rounded-t-sm"
        />
        <div className="p-8 h-[50%]">
          <H4 className="mb-2">Dogs</H4>
          <TextSection>
            Manage differnt Dogs based on their characters and social needs.
          </TextSection>
        </div>
      </div>
    </div>
  );
}
