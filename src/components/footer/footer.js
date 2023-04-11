import logo from "../../assets/shared/desktop/logo.svg";
// import facebookIcon from "../../assets/shared/desktop/icon-facebook.svg";
// import twitterIcon from "../../assets/shared/desktop/icon-twitter.svg";
// import instagramIcon from "../../assets/shared/desktop/icon-instagram.svg";
import FacebookIcon from "../svg-icons/facebook";
import TwitterIcon from "../svg-icons/TwitterIcon";
import InstagramIcon from "../svg-icons/InstagramIcon";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrapper main-wrapper">
        <div className="main-content-container">
          <img className="logo" src={logo} alt="" />
          <nav className="list">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/categories/headphones">Headphones</Link>
              </li>
              <li>
                <Link to="/categories/speakers">Speakers</Link>
              </li>
              <li>
                <Link to="/categories/earphones">Earphones</Link>
              </li>
            </ul>
          </nav>
          <p className="text">
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
        </div>
        <div className="bottom-content-container">
          <p>Copyright 2021. All Rights Reserved</p>
          <div className="social-container">
            <div className="inner-wrapper">
              <a href="">
                <FacebookIcon />
              </a>
              <a href="">
                {/* <img className="icon" src={twitterIcon} alt="" /> */}
                <TwitterIcon />
              </a>
              <a href="">
                {/* <img className="icon" src={instagramIcon} alt="" /> */}
                <InstagramIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
