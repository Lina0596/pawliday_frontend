export default function ButtonCorner({ icon, className = "", ...props }) {
  const defaultClasses =
    "flex items-center justify-center font-inter h-16 w-16 bg-black text-white rounded-tl-sm rounded-br-[40px] cursor-pointer";
  return (
    <button className={`${defaultClasses} ${className}`} {...props}>
      {icon}
    </button>
  );
}
