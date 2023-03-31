import "../scss/main.scss";

import Header from "../components/Header";
import Footer from "../components/footer/footer";
import { useState } from "react";
import BlurContainer from "../components/header/mobile-dropdown-menu/BlurContainer";
import { Outlet } from "react-router-dom";
import Content from "../components/header/content/Content";

function Root() {
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
  return (
    <div className={"App" + " " + cn}>
      <Header isMenuOpen={isMenuOpen} openMenuFunc={handleClick} >
          <Content />
      </Header>
      {isMenuOpen ? <BlurContainer handleClick={handleClick} /> : null}
      {/* body */}
      <Outlet />
      <Footer />
    </div>
  );
}

export default Root;
