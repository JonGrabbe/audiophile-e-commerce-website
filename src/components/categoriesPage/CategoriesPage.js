import { BrowserRouter as Router } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./CategoriesPage.scss";
import NewProductItem from "../../routes/components/new-product-item/NewProductItem";
import Categories from "../categories/Categories";
import TextImageBanner from "../text-image-banner/TextImageBanner";
import data from "../../data.json";

// console.log(productsData.headphones)

export default function CategoriesPage(props) {
  let arr = [];
  data.forEach((item) => {
    if (item.category === props.ProductType) {
      arr.push(
        <NewProductItem
          title={item.name}
          text={item.description}
          img={item.image.mobile}
          slug={item.slug}
        />
      );
    }
  });
  return (
    <main className="main-wrapper categories-page-container">
      {/* {props.productsData[props.ProductType].forEach((item) => {
        arr.push(
          <NewProductItem
            title={item.title}
            text={item.text}
            img={item.image}
            slug={item.id}
          />
        );
      })} */}

      {arr}

      <Categories />
      <TextImageBanner />
    </main>
  );
}
