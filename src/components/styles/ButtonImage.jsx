export default function ButtonImage({ icon, className = "", ...props }) {
  const defaultClasses =
    "flex items-center justify-center font-inter h-26 w-26 bg-[#F0E5C2] text-black rounded-full cursor-pointer";
  return (
    <button className={`${defaultClasses} ${className}`} {...props}>
      {icon}
    </button>
  );
}
