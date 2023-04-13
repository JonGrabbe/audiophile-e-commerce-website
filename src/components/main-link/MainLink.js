import { Link } from "react-router-dom"

export default function MainLink(props) {
    return (
        <Link to={props.to} className="main-button">
            {props.text}
        </Link>
    )
}