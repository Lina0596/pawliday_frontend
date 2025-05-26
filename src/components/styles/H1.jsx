export default function H1({text, className="", ...props}) {
    const defaultClasses = "font-inter text-6xl font-black text-[#4662FF]"
    return(
        <h1 className={`${defaultClasses} ${className}`} {...props}>
            {text}
        </h1>
    )
}