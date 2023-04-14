import "../scss/main.scss";

import Header from "../components/Header";
import Footer from "../components/footer/footer";
import { useState } from "react";
import BlurContainer from "../components/header/mobile-dropdown-menu/BlurContainer";
import { Outlet } from "react-router-dom";
import Content from "../components/header/content/Content";
import CartMenu from "../components/cart-menu/CartMenu";

function Root(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  let cn = "";
  if (isMenuOpen === true) {
    cn = "menu-open";
  } else {
    cn = "";
  }
  // console.log(isMenuBlureTrue)
  function handleClick() {
    setIsMenuOpen(!isMenuOpen);
  }

  const [isCartOpen, setIsCartOpen] = useState(false)

  function displayCart() {
    setIsCartOpen(!isCartOpen)
  }

  return (
    <div className={"App" + " " + cn}>
      <Header isMenuOpen={isMenuOpen} handleDisplayCart={displayCart} openMenuFunc={handleClick} hasBGI={props.hasBGI} >
          {/* <Content /> */}
          {props.headerContent}
      </Header>
      <CartMenu isCartOpen={isCartOpen} cartProps={props.cartProps} />
      {isMenuOpen ? <BlurContainer handleClick={handleClick} /> : null}
      {/* body */}
      <Outlet />
      <Footer />
    </div>
  );
}

export default Root;
