import headphonesImage from '../../../assets/cart/image-xx99-mark-one-headphones.jpg';

export default function MobileDropdown(props) {
    let cn = "mobile-dropdown-menu-container";
    if(props.isOpen) {
        cn += " open"
    } else {
        cn = "mobile-dropdown-menu-container"
    }
    return (
        <div className={cn}>
            <div className="wrapper">
                <a href="" className="item">
                    <img src={headphonesImage} alt="" />
                    <h3>Headphones</h3>
                </a>
                <a href="" className="item">
                    <img src="" alt="" />
                    <h3>Headphones</h3>
                </a>
                <a href="" className="item">
                    <img src="" alt="" />
                    <h3>Headphones</h3>
                </a>
            </div>
        </div>
    )
}