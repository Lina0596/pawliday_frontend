export default function ButtonDelete({
  text,
  className = "",
  onClick,
  disabled,
  ...props
}) {
  const defaultClasses =
    "inline-flex items-center justify-center px-5 h-10 rounded-full bg-[#F0E5C2] font-inter font-bold text-[#FF5900] whitespace-nowrap cursor-pointer";
  return (
    <button
      className={`${defaultClasses} ${className}`}
      onClick={onClick}
      type="button"
      disabled={disabled}
      {...props}
    >
      {text}
    </button>
  );
}
