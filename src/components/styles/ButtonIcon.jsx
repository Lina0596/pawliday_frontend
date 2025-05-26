export default function ButtonIcon({ icon, className="", ...props }) {
    const defaultClasses = "font-inter pl-[40px] pr-[40px] h-[48px] bg-black text-white rounded-full cursor-pointer"
    return(
        <button className={`${defaultClasses} ${className}`} {...props}>
            {icon}
        </button>
    )
}