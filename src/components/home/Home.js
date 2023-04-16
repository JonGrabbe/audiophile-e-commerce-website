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

  }
  const [cart, setCart] = useState(cartObj)
  const [amountMap, setAmountMap] = useState({})

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
    if(!amountMap[slug]) {
      amountMap[slug] = 1
    } else {
      newObj[slug].amount = amountMap[slug]
    }
    setCart(newObj)
  }


  function changeAmount(slug, operation) {
    let newObj = {
      ...amountMap
    }
    console.log(slug, operation)
    let p = newObj[slug];
    function operate(num, operation) {
      if(operation === '+') {
        return num + 1
      }
      if(operation === '-' && num > 1) {
        return num -= 1
      }
    }
    if(newObj[slug]) {
      if(operation === '+') {
        newObj[slug] += 1
      }
      if(operation === '-' && p > 1) {
        newObj[slug] -= 1
      }
    } else {
      if(operation === '+') {
        newObj[slug] = 2
      }
    }
    setAmountMap(newObj)
  }

  function removeAll() {
    setCart({})
    setAmountMap({})
  }

  let cartProps = {
    cart: cart,
    amountMap: amountMap
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
        <Route path="/product" element={<Root amountMap={amountMap} handleRemoveAll={removeAll} cart={cart} />}>
          <Route path="/product/:id" element={<Product handleAddToCart={addToCart} handleChangeAmount={changeAmount} amountMap={amountMap} />} />
        </Route>
      </Routes>
    </>
  );
}
