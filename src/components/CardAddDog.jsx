import H4 from "./styles/H4"
import TextSection from "./styles/TextSection"
import ButtonTextIcon from "./styles/ButtonTextIcon"

export default function CardAddDog(props) {
    return(
        <div className="flex items-center justify-between p-[40px] h-[180px] rounded-sm bg-[#F9F3E1]">
            <div className="w-[60%]">
                <H4 text={props.headline}/>
                <TextSection text={props.text}/>
            </div>
            <ButtonTextIcon text={props.buttonText} icon={props.icon}/>
        </div>
    )
}