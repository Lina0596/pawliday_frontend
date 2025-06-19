export default function H5({ children, className = "", ...props }) {
  const defaultClasses = "font-inter font-black text-base text-[#C7872E]";
  return (
    <h4 className={`${defaultClasses} ${className}`} {...props}>
      {children}
    </h4>
  );
}
