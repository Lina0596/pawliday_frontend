export default function H2({ children, className = "", ...props }) {
  const defaultClasses = "font-inter font-black text-4xl text-[#C7872E]";
  return (
    <h1 className={`${defaultClasses} ${className}`} {...props}>
      {children}
    </h1>
  );
}
