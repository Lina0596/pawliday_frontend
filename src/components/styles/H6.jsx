export default function H6({ children, className = "", ...props }) {
  const defaultClasses = "font-inter font-black text-xs text-[#C7872E]";
  return (
    <h4 className={`${defaultClasses} ${className}`} {...props}>
      {children}
    </h4>
  );
}
