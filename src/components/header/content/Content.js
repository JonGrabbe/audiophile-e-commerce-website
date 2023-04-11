import { Link } from "react-router-dom";

export default function Content() {
  return (
    <div className="header-content-desktop-container main-wrapper">
      <div className="content">
        <div className="items-container">
          <h2 className="item">new product</h2>
          <h3 className="item">XX99 Mark II Headphones</h3>
          <p className="item">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Link to="/product/xx99-mark-two-headphones" className="see-product-link item">
            see product
          </Link>
        </div>
      </div>
      <div className="background-image-destop-container"></div>
    </div>
  );
}
