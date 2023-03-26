import logo from "../../assets/shared/desktop/logo.svg";
import facebookIcon from '../../assets/shared/desktop/icon-facebook.svg';
import twitterIcon from '../../assets/shared/desktop/icon-twitter.svg';
import instagramIcon from '../../assets/shared/desktop/icon-instagram.svg';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="main-content-container">
          <img className="logo" src={logo} alt="" />
          <nav className="list">
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Headphones</a>
              </li>
              <li>
                <a href="">Speakers</a>
              </li>
              <li>
                <a href="">Earphones</a>
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
            <p>
                Copyright 2021. All Rights Reserved
            </p>
            <div className="social-container">
                <div className="inner-wrapper">
                    <a href=""><img className="icon" src={facebookIcon} alt="" /></a>
                    <a href=""><img className="icon" src={twitterIcon} alt="" /></a>
                    <a href=""><img className="icon" src={instagramIcon} alt="" /></a>
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
}
