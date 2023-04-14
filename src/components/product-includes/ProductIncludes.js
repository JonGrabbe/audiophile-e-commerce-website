import MainLink from "../main-link/MainLink";
import getImagePath from "../product/getImagePath";


function Item(props) {
    let mobileSrc = getImagePath(props.img.mobile, '../../assets/')+' 300w';
    let tabletSrc = getImagePath(props.img.tablet, '../../assets/')+' 730w';
    return (
        <div className="item-container">
            <div className="image-container">
                <img 
                    className="img" 
                    alt="" 
                    src={getImagePath(props.img.mobile, '../../assets/')}
                    srcSet={mobileSrc+', '+tabletSrc}
                    sizes="(min-width: 300px) 300px, (min-width: 730px) 730px"
                     
                />
            </div>
            <h3 className="title">{props.title}</h3>
            <MainLink to={props.productLink} text="see product" />
        </div>
    )
}

export default function ProductIncludes(props) {
    return (
        <>
            <h2 className="others-heading">You may also like</h2>
            <div className="product-includes-container">
                {
                    props.others.map(item => (
                        <Item img={item.image} title={item.name} productLink={'/product/'+item.slug} />
                    ))
                }
            </div>
        </>
    )
}