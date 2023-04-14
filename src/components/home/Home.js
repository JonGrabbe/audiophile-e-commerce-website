// import "../../scss/main.scss";

import { Routes, Route } from "react-router-dom";
import Root from "../../routes/root";
import Main from "../main/Main";
import Content from "../header/content/Content";
import CategoriesPage from "../categoriesPage/CategoriesPage";
import HeaderText from "../../routes/components/header-text/HeaderText";
import productsData from "../../data/headphones-products";
import Product from "../product/Product";
import { useState } from "react";
import data from '../../data.json';

export default function Home(props) {
  let cartObj = {
    cart: [],
    getTotal() {

    }
  }
  const [cart, setCart] = useState(cartObj)
  function getProductObj(slug) {
    // let obj = []
    let r;
    data.forEach(item => {
      if(item.slug === slug) {
        r = item
      }
    })
    // console.log(r)
    // obj.slug = slug;
    // obj.name = r.name
    let obj = {
      ...r
    }
    // console.log('obj', obj)
    return obj;
  }
  function addToCart(slug, amount) {
    // console.log(slug, amount)
    let item = {
      "item": getProductObj(slug),
      quantity: amount
    }
    let newObj = {
      ...cart
    }
    newObj[slug] = item
    setCart(newObj)
  }


  return (
    <>
      <Routes>
        <Route path="/" element={<Root headerContent={<Content />} hasBGI={true} />}>
         <Route index element={<Main />} />
        </Route>
        <Route path="/categories/" element={<Root />}>
            <Route path="headphones" element={<CategoriesPage productsData={productsData} ProductType="headphones" />} />
            <Route path="speakers" element={<CategoriesPage productsData={productsData} ProductType="speakers" />} />
            <Route path="earphones" element={<CategoriesPage productsData={productsData} ProductType="earphones" />} />
        </Route>
        <Route path="/product" element={<Root />}>
          <Route path="/product/:id" element={<Product handleAddToCart={addToCart} />} />
        </Route>
      </Routes>
    </>
  );
}
