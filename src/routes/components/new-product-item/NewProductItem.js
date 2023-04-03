export default function NewProductItem(props) {
    return (
        <div className="new-product-item-container">
            <div className="left-container">

            </div>
            <div className="right-container">
                <h2 className="header">New product</h2>
                <h3 className="title">{props.title}</h3>
                <p>{props.text}</p>
                <a href="" className="see-product-link">See product</a>
            </div>
        </div>
    )
}