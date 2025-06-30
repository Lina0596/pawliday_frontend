export default function ButtonTextSecondary({
  text,
  className = "",
  ...props
}) {
  const defaultClasses =
    "flex items-center justify-center px-5 h-10 w-56 rounded-full bg-[#F0E5C2] font-inter font-bold text-black cursor-pointer";
  return (
    <button className={`${defaultClasses} ${className}`} {...props}>
      {text}
    </button>
  );
}
