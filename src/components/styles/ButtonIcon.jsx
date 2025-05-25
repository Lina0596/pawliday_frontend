export default function ButtonIcon(props) {
    return(
        <button className="font-inter pl-[40px] pr-[40px] h-[48px] bg-black text-white rounded-full cursor-pointer">
            {props.icon}
        </button>
    )
}