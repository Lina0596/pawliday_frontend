import dogPlaceholder from "../../assets/images/dogPlaceholder.png";

export default function ImageCircleBig({ src, alt }) {
  return (
    <div className="flex items-center justify-center rounded-full h-100 w-100 bg-[#F0E5C2]">
      <img
        className="rounded-full h-60 w-60 object-cover"
        src={src ? src : dogPlaceholder}
        alt={alt}
      />
    </div>
  );
}
