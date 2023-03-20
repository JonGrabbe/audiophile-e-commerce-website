import iconArrowRight from '../../../assets/shared/desktop/icon-arrow-right.svg';

export default function Item(props) {
    console.log(props.imgSrc)
    return (
        <a href="" className="item">
            {/* <img className="thumbnail" src={props.imgSrc ? props.imgSrc : props.thumbnail} alt="" /> */}
            <img src="../../../assets/product-yx1-earphones/mobile/image-product.jpg" alt="" />
            <h3 className="title">{props.title}</h3>
            <p className="shop-cta">
                shop 
                <img className="arrow" src={iconArrowRight} alt="" />
            </p>
            
        </a>
    )
}