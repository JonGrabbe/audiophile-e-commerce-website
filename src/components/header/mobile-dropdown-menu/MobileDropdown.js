import headphonesImage from '../../../assets/product-xx99-mark-one-headphones/mobile/image-product.png';
import iconArrowRight from '../../../assets/shared/desktop/icon-arrow-right.svg';
import speakerImg from '../../../assets/home/mobile/image-speaker-zx9.png';
import earphoneImg from '../../../assets/home/mobile/image-earphones-yx1-earphones.png';

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
                <a href="" className="item headphones">
                    <img className="thumbnail" src={headphonesImage} alt="" />
                    <h3 className="title">Headphones</h3>
                    <p className="shop-cta">
                        shop 
                        <img className="arrow" src={iconArrowRight} alt="" />
                    </p>
                    
                </a>
                <a href="" className="item speaker">
                    <img className="thumbnail" src={speakerImg} alt="" />
                    <h3 className="title">speakers</h3>
                    <p className="shop-cta">
                        shop 
                        <img className="arrow" src={iconArrowRight} alt="" />
                    </p>
                    
                </a>
                <a href="" className="item earphones">
                    <img className="thumbnail" src={earphoneImg} alt="" />
                    <h3 className="title">Earphones</h3>
                    <p className="shop-cta">
                        shop 
                        <img className="arrow" src={iconArrowRight} alt="" />
                    </p>
                    
                </a>
                
                
            </div>
        </div>
    )
}