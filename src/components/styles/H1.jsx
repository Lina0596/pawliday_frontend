export default function H1({ children, className = "", ...props }) {
  const defaultClasses = "font-inter font-black text-6xl text-[#4662FF]";
  return (
    <h1 className={`${defaultClasses} ${className}`} {...props}>
      {children}
    </h1>
  );
}
