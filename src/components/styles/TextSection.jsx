export default function TextSection({text, className="", ...props}) {
    const defaultClasses = className="font-inter text-base font-medium text-[#4662FF]"
    return(
        <p className={`${defaultClasses} ${className}`} {...props}>
            {text}
        </p>
    )
}