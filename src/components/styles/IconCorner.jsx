export default function IconCorner({ icon }) {
  return (
    <div className="absolute top-0 right-0 z-10">
      <div className="flex items-center justify-center font-inter h-10 w-10 pl-2.5 pb-2.5  pt-1.5 pr-1.5 bg-[#F0E5C2] text-white rounded-tr-sm rounded-bl-[24px] cursor-pointer">
        {icon}
      </div>
    </div>
  );
}
