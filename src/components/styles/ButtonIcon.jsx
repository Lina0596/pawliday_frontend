export default function ButtonIcon({ icon, className = "", ...props }) {
  const defaultClasses =
    "flex items-center justify-center font-inter h-12 w-25 bg-black text-white rounded-full cursor-pointer";
  return (
    <button className={`${defaultClasses} ${className}`} {...props}>
      {icon}
    </button>
  );
}
