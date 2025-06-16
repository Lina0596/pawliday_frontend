import H4 from "./styles/H4";
import TextSection from "./styles/TextSection";
import ButtonCorner from "./styles/ButtonCorner";
import ImageCircle from "./styles/ImageCircle";

export default function CardTwo({
  name,
  email,
  phoneNumber,
  buttonIcon,
  images,
  className = "",
  ...props
}) {
  const defaultClasses = "flex h-45 rounded-sm bg-[#F9F3E1]";
  return (
    <div className={`${defaultClasses} ${className}`} {...props}>
      <ButtonCorner icon={buttonIcon} />
      <div className="flex items-center h-full w-full justify-between px-10">
        <div>
          <H4 className="mb-4">{name}</H4>
          <TextSection className="mb-2">{email}</TextSection>
          <TextSection>{phoneNumber}</TextSection>
        </div>
        <div className="flex gap-5">
          {images.map((image, index) => (
            <ImageCircle key={index} src={image} alt={image.alt} />
          ))}
        </div>
      </div>
    </div>
  );
}
