export default function TextSection({ children, className = "", ...props }) {
  const defaultClasses = "font-inter font-medium text-base text-[#C7872E]";
  return (
    <p className={`${defaultClasses} ${className}`} {...props}>
      {children}
    </p>
  );
}
