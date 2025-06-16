export default function TextSection({ children, className = "", ...props }) {
  const defaultClasses = "font-inter font-medium text-base text-[#4662FF]";
  return (
    <p className={`${defaultClasses} ${className}`} {...props}>
      {children}
    </p>
  );
}
