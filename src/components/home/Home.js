// import "../../scss/main.scss";

import { Routes, Route } from "react-router-dom";
import Root from "../../routes/root";
import Main from "../main/Main";
import Content from "../header/content/Content";
import CategoriesPage from "../categoriesPage/CategoriesPage";
import HeaderText from "../../routes/components/header-text/HeaderText";
import productsData from "../../data/headphones-products";
import Product from "../product/Product";
import CategoriesRouteChild from "../categories-route-child/CategoriesRouteChild";

export default function Home(props) {
  return (
    <>
      <Routes>
        <Route path="/" element={<Root headerContent={<Content />} hasBGI={true} />}>
         <Route index element={<Main />} />
        </Route>
        <Route path="/categories/" element={<Root headerContent={<HeaderText text="Headphones" />} />}>
            <Route path="headphones" element={<CategoriesPage productsData={productsData} ProductType="headphones" />} />
            <Route path="speakers" element={<CategoriesPage productsData={productsData} ProductType="speakers" />} />
            <Route path="earphones" element={<CategoriesPage productsData={productsData} ProductType="earphones" />} />
        </Route>

        {/* <Route path="/categories/headphones" >
          <Route element={<Root headerContent={<HeaderText text="Headphones" />} />} >
            <CategoriesPage productsData={productsData} ProductType="headphones" />
          </Route>
        </Route> */}

        {/* <Route path="/categories/headphones" element={<CategoriesRouteChild category="headphones" />} /> */}
        {/* <Route path="/categories/headphones" element={<CategoriesRouteChild category="headphones" />} /> */}
        {/* <Route path="/categories" */}



        <Route path="/product" element={<Root />}>
          <Route path="/product/:id" element={<Product />} />
        </Route>
      </Routes>
    </>
  );
}
