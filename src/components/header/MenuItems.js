import { Link } from "react-router-dom";

export default function MenuItems(props) {
    let cn = "menu-items";
    if(props.isOpen) {
        cn += " open"
    } else {
        cn = "menu-items"
    }
    return (
        <nav className="menu-items">
            <ul>
                <li className="item"><Link to="/">Home</Link></li>
                <li className="item"><Link to="/categories/headphones">Headphones</Link></li>
                <li className="item"><Link to="/categories/speakers">Speakers</Link></li>
                <li className="item"><Link to="/categories/earphones">Earphones</Link></li>
            </ul>
        </nav>
    );
}