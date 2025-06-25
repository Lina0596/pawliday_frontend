export default function ButtonTextIcon({
  text,
  icon,
  className = "",
  ...props
}) {
  const defaultClasses =
    "flex items-center justify-between pl-5 pr-3 h-10 w-56 rounded-full bg-black font-inter font-bold text-white cursor-pointer";
  return (
    <button className={`${defaultClasses} ${className}`} {...props}>
      {text}
      {icon}
    </button>
  );
}
