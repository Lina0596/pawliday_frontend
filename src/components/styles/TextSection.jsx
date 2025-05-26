export default function TextSection({text, className="", ...props}) {
    const defaultClasses = "font-inter font-medium text-base text-[#4662FF]"
    return(
        <p className={`${defaultClasses} ${className}`} {...props}>
            {text}
        </p>
    )
}