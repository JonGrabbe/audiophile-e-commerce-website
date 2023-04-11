import { Link } from "react-router-dom";

export default function NewProductItem(props) {
  return (
    <div className="new-product-item-container">
      <div className="left-container">
        {/* <img className="img" src={props.img} alt="" /> */}
        <div
          className="img-container"
          style={{ backgroundImage: `url(${props.img})` }}
        ></div>
      </div>
      <div className="right-container">
        <div className="content-container">
          <h2 className="header item">New product</h2>
          <h3 className="title item">{props.title}</h3>
          <p className="text item">{props.text}</p>
          {/* <a href="" className="see-product-link link">
            See product
          </a> */}
          <Link to={"/product/"+props.slug} className="see-product-link link" >
            See Product
          </Link>
        </div>
      </div>
    </div>
  );
}
