export default function ButtonIcon({ icon, className = "", ...props }) {
  const defaultClasses =
    "flex items-center justify-center font-inter h-10 w-20 bg-black text-white rounded-full cursor-pointer";
  return (
    <button className={`${defaultClasses} ${className}`} {...props}>
      {icon}
    </button>
  );
}
