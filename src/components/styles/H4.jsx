export default function H4({ children, className = "", ...props }) {
  const defaultClasses = "font-inter font-black text-2xl text-[#4662FF]";
  return (
    <h4 className={`${defaultClasses} ${className}`} {...props}>
      {children}
    </h4>
  );
}
