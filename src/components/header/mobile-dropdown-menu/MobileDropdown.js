import getImagePath from '../../../functions/getImagePath';
import headphonesImage from '../../../assets/product-xx99-mark-one-headphones/mobile/image-product.png';
import speakerImg from '../../../assets/home/mobile/image-speaker-zx9.png';

// import iconArrowRight from '../../../assets/shared/desktop/icon-arrow-right.svg';
import Item from '../../../scss/header/mobile-dropdown/Item';
// getImagePath("yx1-earphones", 'mobile')

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
                {/* <a href="" className="item">
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
                </a> */}

                <Item thumbnail={headphonesImage} title="Headphones" />
                <Item thumbnail={speakerImg} title="Speakers" />
                <Item thumbnail={speakerImg} title="Headphones" imgSrc={getImagePath("yx1-earphones", 'mobile')} />
                
                
                
            </div>
        </div>
    )
}