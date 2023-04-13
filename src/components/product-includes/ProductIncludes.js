import MainLink from "../main-link/MainLink";
import getImagePath from "../product/getImagePath";


function Item(props) {
    return (
        <div className="item-container">
            <div className="image-container">
                <img className="img" src={props.img} alt="" />
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
                        <Item img={getImagePath(item.image.mobile, '../../assets/')} title={item.name} productLink={'/product/'+item.slug} />
                    ))
                }
            </div>
        </>
    )
}