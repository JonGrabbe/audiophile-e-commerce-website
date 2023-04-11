import { useParams } from "react-router-dom"
import data from '../../data.json';

export default function Product(props) {
    let {id} = useParams()
    // let text;
    // let title;
    // for(let pt in productsData) {
    //     productsData[pt].forEach(item => {
    //         // console.log(item)
    //         if(item.id === id.toLowerCase()) {
    //             text = item.text;
    //             title = item.title;
    //             console.log(item)
    //         }
    //     })
    // }
    
    // console.log(text)

    let title;
    let description;
    let features;
    let image;
    let price;
    let inTheBox;
    let others;
    data.forEach(item => {
        if(item.slug === id) {
            title = item.name
            description = item.description;
            price = item.price;
        }
    })

    return (
        <>
            <div className="product-container">
                <div className="img-container">

                </div>
                <div className="product-content-container">
                    <h2 className="header">New Product</h2>
                    <h3 className="product-title">{title}</h3>
                    <p className="description">
                        {description}
                    </p>
                    <p className="price">{price}</p>
                    <div className="add-to-cart-container">
                        <div className="amount-button-container">
                            <button className="subtract">-</button>
                            <div className="amount"></div>
                            <button className="add">+</button>
                        </div>
                        <button className="add-to-cart"></button>
                    </div>
                </div>
            </div>
        </>
    )
}