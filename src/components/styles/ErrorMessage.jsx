export default function ErrorMessage({ children }) {
  return (
    <div className="mb-8 py-2 w-140 rounded-sm bg-[#FFC6B3]">
      <p className="text-center text-[#E84D19]">{children}</p>
    </div>
  );
}
