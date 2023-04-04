import "./CategoriesPage.scss";
import productsData from "./products";
import NewProductItem from "../../routes/components/new-product-item/NewProductItem";

console.log(productsData)

export default function CategoriesPage(props) {
    let arr = []
    return (
        <div>
           <h1>page!!!!!</h1>
           <p>asdfhasdfkljhasdlfkjahdsf</p>
           {
            productsData.forEach(item => {
                if(item.category === 'headphones') {
                    // return <NewProductItem title={item.title} text={item.text} />
                    item.items
                    arr.push(<NewProductItem title={item.title} text={item.text} />)
                }
            })
           }
           {arr}
        </div>
    )
}