export default function Pill({ children }) {
  return (
    <div className="inline-flex items-center justify-center px-4 h-12 rounded-full bg-[#F0E5C2] font-inter font-medium text-[#C7872E] cursor-pointer">
      {children}
    </div>
  );
}
