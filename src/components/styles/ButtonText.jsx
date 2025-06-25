export default function ButtonText({ text, className = "", ...props }) {
  const defaultClasses =
    "flex items-center justify-center px-5 h-10 w-56 rounded-full bg-black font-inter font-bold text-white cursor-pointer";
  return (
    <button className={`${defaultClasses} ${className}`} {...props}>
      {text}
    </button>
  );
}
