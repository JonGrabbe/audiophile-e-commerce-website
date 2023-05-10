import { NavLink } from "react-router-dom";

export default function OrangeNavLink(props) {
    let c = ' ';
    props.cn ? c += props.cn : c = ' ' 
    return (
        <NavLink className={"main-button"+c} to={props.to} >
            {props.text}
        </NavLink>
    )
}