import { useParams } from "react-router-dom"
import productsData from "../../data/headphones-products"
export default function Product(props) {
    let {id} = useParams()
    let text;
    let title;
    for(let pt in productsData) {
        productsData[pt].forEach(item => {
            // console.log(item)
            if(item.id === id.toLowerCase()) {
                text = item.text;
                title = item.title;
                console.log(item)
            }
        })
    }
    
    console.log(text)
    return (
        <>
            <h1>product {id}</h1>
            <p>
                {text}
            </p>
        </>
    )
}