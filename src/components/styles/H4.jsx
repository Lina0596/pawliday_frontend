export default function H4({text, className="", ...props}) {
    const defaultClasses = "font-inter font-black text-2xl text-[#4662FF]"
    return(
        <h4 className={`${defaultClasses} ${className}`} {...props}>
            {text}
        </h4>
    )
}