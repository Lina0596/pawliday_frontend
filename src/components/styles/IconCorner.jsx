export default function IconCorner({ icon, className = "", ...props }) {
  const defaultClasses =
    "flex items-center justify-center font-inter h-10 w-10 pl-2.5 pb-2.5  pt-1.5 pr-1.5 bg-black text-white rounded-tr-sm rounded-bl-10 cursor-pointer";
  return (
    <button className={`${defaultClasses} ${className}`} {...props}>
      {icon}
    </button>
  );
}
