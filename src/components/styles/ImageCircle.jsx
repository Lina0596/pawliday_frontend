import dogPlaceholder from "../../assets/images/dogPlaceholder.png";

export default function ImageCircle({ src, alt }) {
  return (
    <div className="flex items-center justify-center rounded-full h-26 w-26 bg-[#F0E5C2]">
      <img
        className="rounded-full h-16 w-16 object-cover"
        src={src ? src : dogPlaceholder}
        alt={alt}
      />
    </div>
  );
}
