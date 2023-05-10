export default function OrangeButton(props) {
    let c = ' ';
    props.cn ? c += props.cn : c = ' ' 
    return (
        <button className={"main-button"+c} onClick={() => props.handleClick()} >
            {props.text}
        </button>
    )
}