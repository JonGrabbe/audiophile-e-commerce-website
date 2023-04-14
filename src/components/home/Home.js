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
    let obj;
    data.forEach(item => {
      if(item.slug === slug) {
        obj = {
          ...item
        }
      }
    })
    return obj
  }

  // added product object to parent object
  // if amount is undefiened it is assumed to
  // be 1
  function addToCart(slug) {
    let newObj = {
      ...cart
    }
    // if(newObj[slug].amount) {
    //   newObj[slug] = {...getProductObj(slug), amount: newObj[slug].amount}
    // } else {
    //   newObj[slug] = getProductObj(slug)
    //   newObj[slug].amount = 1
    // }
    newObj[slug] = getProductObj(slug)
    newObj[slug].isInCart = true
    setCart(newObj)
  }


  function changeAmount(slug, operation) {
    let newObj = {
      ...cart
    }
    // if(operation === '+') {

    // }
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
