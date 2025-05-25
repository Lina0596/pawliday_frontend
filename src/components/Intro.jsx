import H1 from './styles/H1';
import TextSection from './styles/TextSection';

export default function Intro(props) {
    return(
        <div>
            <H1 text={props.headline}/>
            <TextSection
                text={props.text}/>
        </div>
    )
}