export default function ButtonIconSecondary({
  icon,
  className = "",
  ...props
}) {
  const defaultClasses =
    "flex items-center justify-center font-inter h-10 w-20 bg-[#F0E5C2] text-black rounded-full cursor-pointer";
  return (
    <button className={`${defaultClasses} ${className}`} {...props}>
      {icon}
    </button>
  );
}
