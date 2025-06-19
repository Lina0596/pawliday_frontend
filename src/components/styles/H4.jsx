export default function H4({ children, className = "", ...props }) {
  const defaultClasses = "font-inter font-black text-2xl text-[#C7872E]";
  return (
    <h4 className={`${defaultClasses} ${className}`} {...props}>
      {children}
    </h4>
  );
}
