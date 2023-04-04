import "./CategoriesPage.scss";
import productsData from "./products";
import NewProductItem from "../../routes/components/new-product-item/NewProductItem";

console.log(productsData.headphones)

export default function CategoriesPage(props) {
    let arr = []
    return (
        <div>
           {
            productsData.headphones.forEach(item => {
                arr.push(<NewProductItem title={item.title} text={item.text} />)
            })
           }
           {arr}
        </div>
    )
}