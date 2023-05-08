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
    products: []
  }
  const [cart, setCart] = useState(cartObj)
  const [amountMap, setAmountMap] = useState({})

  /* 
    {
      total: 0,
      products: [
        {
          slug,
          name,
          amount: 1,
          isInCart: true
        }
      ]
    }


    function addProduct(slug, amount) {

    }

    function changeAmount(slug, operation) {
      if(hasObject(slug)) {
        cart[slug].amount += 1
      } else {
        addProduct(slug, 1)
      }
    }

    function removeAll() {
      setCart({})
    }
  */
    
    function getProductObj(slug) {
      let obj;
      data.forEach(item => {
        if(item.slug === slug) {
          obj = item
        }
      })
      return obj
    }

    function getAmountMapVal(slug) {
      if(amountMap[slug]) {
        return amountMap[slug]
      } else {
        return 1
      }
    }

    function getProductObjFromCart(slug, obj) {
      let product;
      obj.products.forEach((item, i) => {
        if(item.slug === slug) {
          product = {
            obj: item,
            index: i
          }
        }
      })
      return product
    }


    function changeProductAmount(slug, operation) {
      // if object already exists then inc amount

      // if object dosent exist then push object to cart.products without the isInCart property and set
      // amount to 2
      let newObj = {
        ...cart
      }
      let product = getProductObjFromCart(slug, newObj)
      if(product) {
        if(operation === '+') {
          newObj.products[product.index].amount += 1
          setCart(newObj)
        }
        if(operation === '-' && product.obj.amount > 1) {
          newObj.products[product.index].amount -= 1
          setCart(newObj)
        }
      } else {
        if(operation === '+') {
          let newProduct = getProductObj(slug);
          newProduct.amount = 2
          newObj.products.push(newProduct)
          setCart(newObj)
        }
      }

    }


    function addToCart(slug, isInCart) {
      let newObj = {
        ...cart
      }
      let isInArray = false;
      console.log(newObj)
      newObj.products.forEach((item, i) => {
        if(item.slug === slug) {
          isInArray = true
          // newObj.products[i]
        }
      })
      // if product already exists
      if(isInArray) {
        // let productObject = getProductObj(slug)
        // productObject.amount = amount
        // newObj.products.push(getProductObj(slug))
        newObj.products.forEach((item, i) => {
          if(item.slug === slug) {
            newObj.products[i].isInCart = true
          }
        })
        setCart(newObj)
      }
      // if the product isnt in the array
      if(!isInArray) {
        let productObj = getProductObj(slug)
        // productObj.amount = getAmountMapVal(slug)
        productObj.isInCart = true
        if(!productObj.amount) {
          productObj.amount = 1
        }
        newObj.products.push(productObj)
        setCart(newObj)
      }

    }

    function removeProductFromCart(slug) {
      let newObj = {
        ...cart
      }
      // newObj.products = newObj.products.filter(item => item.slug !== slug && item.isInCart)
      newObj.products.forEach(item => {
        if(item.slug === slug) {
          item.isInCart = false
        }
      })

      setCart(newObj)
    }
  


  return (
    <>
      {/* <Routes>
        <Route path="/" element={<Root headerContent={<Content />} hasBGI={true} />}>
         <Route index element={<Main />} />
        </Route>
        <Route path="/categories/" element={<Root cart={cart} />}>
            <Route path="headphones" element={<CategoriesPage productsData={productsData} ProductType="headphones" />} />
            <Route path="speakers" element={<CategoriesPage productsData={productsData} ProductType="speakers" />} />
            <Route path="earphones" element={<CategoriesPage productsData={productsData} ProductType="earphones" />} />
        </Route>
        <Route path="/product" element={<Root cart={cart} handleChangeAmount={changeProductAmount} />}>
          <Route path="/product/:id" element={<Product handleAddToCart={addToCart} handleChangeAmount={changeProductAmount} amountMap={amountMap} cart={cart} handleRemoveItem={removeProductFromCart} />} />
        </Route>
      </Routes> */}

      <Routes>
        <Route element={<Root cart={cart} handleChangeAmount={changeProductAmount} />} >
          <Route index element={<Main />} />
          <Route path="/categories/">
              <Route path="headphones" element={<CategoriesPage productsData={productsData} ProductType="headphones" />} />
              <Route path="speakers" element={<CategoriesPage productsData={productsData} ProductType="speakers" />} />
              <Route path="earphones" element={<CategoriesPage productsData={productsData} ProductType="earphones" />} />
          </Route>
          <Route path="/product">
            <Route path="/product/:id" element={<Product handleAddToCart={addToCart} handleChangeAmount={changeProductAmount} amountMap={amountMap} cart={cart} handleRemoveItem={removeProductFromCart} />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}
