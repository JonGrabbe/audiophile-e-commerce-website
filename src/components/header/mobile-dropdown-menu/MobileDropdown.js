import headphonesImage from '../../../assets/product-xx99-mark-one-headphones/mobile/image-product.png';
import iconArrowRight from '../../../assets/shared/desktop/icon-arrow-right.svg';

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
                    <img className="thumbnail" src={headphonesImage} alt="" />
                    <h3 className="title">Headphones</h3>
                    <p className="shop-cta">
                        shop 
                        <img className="arrow" src={iconArrowRight} alt="" />
                    </p>
                    
                </a>
                <a href="" className="item">
                    <img src={headphonesImage} alt="" />
                    <h3 className="title">Headphones</h3>
                    <p className="shop-cta">shop</p>
                </a>
                <a href="" className="item">
                    <img src={headphonesImage} alt="" />
                    <h3 className="title">Headphones</h3>
                    <p className="shop-cta">shop</p>
                </a>
                
            </div>
        </div>
    )
}