import { BrowserRouter as Router } from "react-router-dom";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./CategoriesPage.scss";
import NewProductItem from "../../routes/components/new-product-item/NewProductItem";
import Categories from "../categories/Categories";
import TextImageBanner from "../text-image-banner/TextImageBanner";

// console.log(productsData.headphones)

export default function CategoriesPage(props) {
  let arr = [];
  return (
    <main className="main-wrapper categories-page-container">
      {props.productsData[props.ProductType].forEach((item) => {
        arr.push(
          <NewProductItem
            title={item.title}
            text={item.text}
            img={item.image}
          />
        );
      })}
      <Router>{arr}</Router>

      <Categories />
      <TextImageBanner />
    </main>
  );
}
