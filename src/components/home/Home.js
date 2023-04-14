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

function getProductObj(slug) {
  let obj;
  data.forEach(item => {
    if(item.slug === slug) {
      obj = {
        ...item
      }
    }
  })
  return obj;
}

export default function Home(props) {
  let cartObj = {
    getTotal() {

    }
  }
  const [cart, setCart] = useState(cartObj)

  function addToCart(slug, amount, isInCart) {
    // console.log(slug, amount)
    let newObj = {
      ...cart
    }
    if(isInCart) {
      newObj[slug].isInCart = true
    } else {
      newObj[slug] = getProductObj(slug)
      newObj[slug].amount = amount
      setCart(newObj)
    }
  }

  function addToCartAmoun(slug, operation) {
    // keeps track of amount added but not added
    // to the cart
    let newObj = {
      ...cart
    }
    if(operation === '+') {
      newObj[slug].amount += 1
    }
    if(operation === '-' && newObj[slug].amount > 1) {
      newObj[slug].amount -= 1
    }
    setCart(newObj)
  }

  function changeAmount(slug, operation) {
    // console.log(slug)
    let newObj = {
      ...cart
    }
    for(let p in newObj) {
      if(newObj[p].slug === slug) {
        // console.log(newObj[p])
        if(operation === '+') {
          // console.log('asdfasd')
          newObj[p].amount += 1
          setCart(newObj)
          // addToCartAmoun(slug, '+')
        }
        if(operation === '-' && newObj[p].amount > 1) {
          newObj[p].amount -= 1
          setCart(newObj)
          // addToCartAmoun(slug, '-')
        }
      } else {
        if(operation !== '-') {
          addToCart(slug, 2)
        }
        // changeAmount(slug, operation)
      }
    }
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
          <Route path="/product/:id" element={<Product handleChangeAmount={changeAmount} handleAddToCart={addToCart} cart={cart} />} />
        </Route>
      </Routes>
    </>
  );
}
