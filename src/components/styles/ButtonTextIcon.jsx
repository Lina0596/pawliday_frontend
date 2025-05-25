export default function ButtonTextIcon(props) {
    return(
        <button className="flex items-center justify-between font-inter font-bold pl-[20px] pr-[12px] h-[48px] w-[224px] bg-black text-white rounded-full cursor-pointer">
            {props.text}
            {props.icon}
        </button>
    )
}