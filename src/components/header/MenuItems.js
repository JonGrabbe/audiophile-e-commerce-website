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
                <li className="item"><a href="">Home</a></li>
                <li className="item"><a href="">Headphones</a></li>
                <li className="item"><a href="">Speakers</a></li>
                <li className="item"><a href="">Earphones</a></li>
            </ul>
        </nav>
    );
}