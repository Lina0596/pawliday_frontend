export default function ErrorMessage({ children }) {
  return (
    <div className="flex justify-center">
      <div
        className="mb-8 py-2 w-full rounded-sm bg-[#FFC6B3]
        md:w-140"
      >
        <p className="text-center text-[#E84D19]">{children}</p>
      </div>
    </div>
  );
}
