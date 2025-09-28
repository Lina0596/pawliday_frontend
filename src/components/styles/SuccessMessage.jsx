export default function SuccessMessage({ children }) {
  return (
    <div className="flex justify-center">
      <div
        className="mb-8 py-2 w-full rounded-sm bg-[#D0D9C7]
        md:w-140"
      >
        <p className="text-center text-[#41661E]">{children}</p>
      </div>
    </div>
  );
}
