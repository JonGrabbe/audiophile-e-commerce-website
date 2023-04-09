export default function NewProductItem(props) {
    return (
        <div className="new-product-item-container">
            <div className="left-container" >
                {/* <img className="img" src={props.img} alt="" /> */}
                <div className="img-container" style={{backgroundImage: `url(${props.img})`}}></div>
            </div>
            <div className="right-container">
                <div className="content-container">
                    <h2 className="header">New product</h2>
                    <h3 className="title">{props.title}</h3>
                    <p className="text">{props.text}</p>
                    <a href="" className="see-product-link link">See product</a>
                </div>
            </div>
        </div>
    )
}