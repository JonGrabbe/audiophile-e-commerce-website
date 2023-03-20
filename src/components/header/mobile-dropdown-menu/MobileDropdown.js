import headphonesImage from '../../../assets/product-xx99-mark-one-headphones/mobile/image-product.png';

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
                    <h3 className="title">Headphones</h3>
                    <p className="shop-cta">shop</p>
                </a>
                <a href="" className="item">
                    <img src="" alt="" />
                    <h3>Headphones</h3>
                    <p>shop</p>
                </a>
                <a href="" className="item">
                    <img src="" alt="" />
                    <h3>Headphones</h3>
                    <p>shop</p>
                </a>
            </div>
        </div>
    )
}