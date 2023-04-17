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

    function changeProductAmount(slug, operation) {
      let obj = {
        ...amountMap
      }
      if(operation === '+') {
        if(obj[slug]) {
          obj[slug] += 1
        } else {
          obj[slug] = 2
        }
      }
      if(obj[slug]) {
        if(operation === '-' && obj[slug] > 1) {
          obj[slug] -= 1
        }
      }
      setAmountMap(obj)
    }

    function getAmountMapVal(slug) {
      if(amountMap[slug]) {
        return amountMap[slug]
      } else {
        return 1
      }
    }

    function addToCart(slug, amount) {
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
            newObj.products[i].amount = getAmountMapVal(slug)
          }
        })
      }
      // if the product isnt in the array
      if(!isInArray) {
        let productObj = getProductObj(slug)
        productObj.amount = getAmountMapVal(slug)
        newObj.products.push(productObj)
        setCart(newObj)
      }

    }

  // function getProductObj(slug) {
  //   let obj;
  //   data.forEach(item => {
  //     if(item.slug === slug) {
  //       obj = {
  //         ...item
  //       }
  //     }
  //   })
  //   return obj
  // }

  // function getTotal(obj) {
  //   let total = 0
  //   for(let property in obj) {
  //     total += obj[property].price
  //   }
  //   return total
  // }

  // // added product object to parent object
  // // if amount is undefiened it is assumed to
  // // be 1
  // function addToCart(slug) {
  //   let newObj = {
  //     ...cart
  //   }
  //   // if(newObj[slug].amount) {
  //   //   newObj[slug] = {...getProductObj(slug), amount: newObj[slug].amount}
  //   // } else {
  //   //   newObj[slug] = getProductObj(slug)
  //   //   newObj[slug].amount = 1
  //   // }
  //   newObj[slug] = getProductObj(slug)
  //   newObj[slug].isInCart = true
  //   if(!amountMap[slug]) {
  //     amountMap[slug] = 1
  //   } else {
  //     newObj[slug].amount = amountMap[slug]
  //   }
  //   newObj[slug].total = getTotal(newObj)
  //   setCart(newObj)
  // }


  // function changeAmount(slug, operation) {
  //   let newObj = {
  //     ...amountMap
  //   }
  //   console.log(slug, operation)
  //   let p = newObj[slug];
  //   function operate(num, operation) {
  //     if(operation === '+') {
  //       return num + 1
  //     }
  //     if(operation === '-' && num > 1) {
  //       return num -= 1
  //     }
  //   }
  //   if(newObj[slug]) {
  //     if(operation === '+') {
  //       newObj[slug] += 1
  //     }
  //     if(operation === '-' && p > 1) {
  //       newObj[slug] -= 1
  //     }
  //   } else {
  //     if(operation === '+') {
  //       newObj[slug] = 2
  //     }
  //   }
  //   setAmountMap(newObj)
  // }

  // function removeAll() {
  //   setCart({})
  //   setAmountMap({})
  // }

  // let cartProps = {
  //   cart: cart,
  //   amountMap: amountMap
  // }


  


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
          <Route path="/product/:id" element={<Product handleAddToCart={addToCart} handleChangeAmount={changeProductAmount} amountMap={amountMap} />} />
        </Route>
      </Routes>
    </>
  );
}
