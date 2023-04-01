import React, { useState } from "react";
import menuIcon from "../assets/shared/tablet/icon-hamburger.svg";
import logo from "../assets/shared/desktop/logo.svg";
import cart from "../assets/shared/desktop/icon-cart.svg";
import Content from "./header/Content";
import MenuItems from "./header/MenuItems";
import MobileDropdown from "./header/mobile-dropdown-menu/MobileDropdown";

export default function Header(props) {
  // const [isOpen, setIsOpen] = useState(false);
  // function handleClick() {
  //   setIsOpen(!isOpen)
  //   props.onMenuOpen(!isOpen)
  // }
  return (
    <header className="top-header categories-page-header">
      <div className="menu main-wrapper">
        <button className="menu-button" onClick={() => props.openMenuFunc()}>
          <img src={menuIcon} alt="" className="menu-icon" />
        </button>
        <MobileDropdown isOpen={props.isMenuOpen} />
        <img src={logo} alt="" className="logo" />
        <MenuItems />
        <img src={cart} alt="" className="cart-icon" />
      </div>

      
      {/* <div className="header-content-desktop-container main-wrapper">
        <Content />
        <div className="background-image-destop-container"></div>
      </div> */}
      {props.children}
    </header>
  );
}
