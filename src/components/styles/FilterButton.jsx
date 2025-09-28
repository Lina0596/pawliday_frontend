export default function FilterButton({
  text,
  active = false,
  className = "",
  ...props
}) {
  const defaultClasses =
    "flex items-center justify-center px-5 h-10 rounded-full font-inter font-bold cursor-pointer";

  const activeClasses = "bg-[#C7872E] text-white";
  const inactiveClasses = "bg-[#F0E5C2] text-black";
  return (
    <button
      className={`${defaultClasses} ${
        active ? activeClasses : inactiveClasses
      } ${className}`}
      {...props}
    >
      {text}
    </button>
  );
}
