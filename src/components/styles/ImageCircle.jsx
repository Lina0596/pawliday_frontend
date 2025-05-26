export default function ImageCircle({src, alt, className="", ...props}) {
    const defaultClasses = "rounded-full h-25 w-25 object-cover shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
    return(
        <img className={`${defaultClasses} ${className}`} {...props}
            src={src}
            alt={alt}
        />
    )
}