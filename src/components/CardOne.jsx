import H4 from "./styles/H4";
import TextSection from "./styles/TextSection";
import ButtonTextIcon from "./styles/ButtonTextIcon";

export default function CardOne({
  headline,
  text,
  buttonText,
  buttonIcon,
  className = "",
  ...props
}) {
  const defaultClasses =
    "flex items-center justify-between p-10 h-45 rounded-sm bg-[#F9F3E1]";
  return (
    <div className={`${defaultClasses} ${className}`} {...props}>
      <div className="w-[60%]">
        <H4 className="mb-4" text={headline} />
        <TextSection text={text} />
      </div>
      <ButtonTextIcon text={buttonText} icon={buttonIcon} />
    </div>
  );
}
