// import "./product.scss";
import { useParams } from "react-router-dom";
import data from "../../data.json";
import productsData from "../../data/headphones-products";
import Gallery from "../gallery/Gallery";
import ProductIncludes from "../product-includes/ProductIncludes";
import Categories from "../categories/Categories";
import TextImageBanner from "../text-image-banner/TextImageBanner";
import { useState } from "react";


function ListItem(props) {
    return (
        <li className="list-item">
            <span className="quantity">{props.quantity}x</span>
            <span className="name">{props.name}</span>
        </li>
    )
}

export default function Product(props) {
  let { id } = useParams();
  const [productQuantity, setProductQuantity] = useState(1)
  const [slug, setSlug] = useState(id)
  function addToCart() {
    props.handleAddToCart(slug, productQuantity)
  }
  // let text;
  // let title;
  // for(let pt in productsData) {
  //     productsData[pt].forEach(item => {
  //         // console.log(item)
  //         if(item.id === id.toLowerCase()) {
  //             text = item.text;
  //             title = item.title;
  //             console.log(item)
  //         }
  //     })
  // }

  // console.log(text)

  const asstetsPath = '../../assets/';

  function getImageUrl(slug) {
    let url;
    data.forEach((item) => {
      if (item.slug === id) {
        url = item.image.mobile;
      }
    });
    return url.split("assets/")[1];
  }

  function convertUrlString(str) {
    return asstetsPath+str.split("assets/")[1];
  }

  function getGalleryImage(slug) {
    let img;
    data.forEach(item => {
      if(item.slug === slug) {
        let gallery = item.gallery;
        img = {
          top: convertUrlString(gallery.first.mobile),
          bottom: convertUrlString(gallery.second.mobile),
          right: convertUrlString(gallery.third.mobile)
        }
      }
    })
    return img
  }

  function getImage(slug) {
    let img;
    data.forEach((item) => {
      if (item.slug === slug) {
        img = item.image.mobile;
      }
    });
    return img.split("assets/")[1];
  }
  let img = getImage(id);

  let title;
  let description;
  let features;
  let image;
  let price;
  let inTheBox;
  let others;
  data.forEach((item) => {
    if (item.slug === id) {
      title = item.name;
      description = item.description;
      price = item.price;
      inTheBox = item.includes;
      others= item.others;
      features = item.features.split('\n\n');
    }
  });

  return (
    <main className="main-wrapper categories-page-container">
      <div className="product-container">
        <div className="img-container item">
          <img src={"../../assets/" + img} alt="" />
        </div>
        <div className="product-content-container">
          <h2 className="header item">New Product</h2>
          <h3 className="product-title item">{title}</h3>
          <p className="description item">{description}</p>
          <p className="price item">${price.toLocaleString()}</p>
          <div className="add-to-cart-container">
            <div className="amount-button-container">
              <button className="subtract inc">-</button>
              <div className="amount">1</div>
              <button className="add inc">+</button>
            </div>
            <button className="add-to-cart-button" onClick={() => addToCart(id)}>add to cart</button>
          </div>
        </div>
      </div>

      {/* main content */}
      <div className="two-col-text-container main-spacer">
          <div className="left-col">
              <h3 className="heading-main">Features</h3>
              {/* <p className="default-text-p main-spacer">
                Featuring a genuine leather head strap and premium earcups, these
                headphones deliver superior comfort for those who like to enjoy endless
                listening. It includes intuitive controls designed for any situation.
                Whether you’re taking a business call or just in your own personal
                space, t he auto on/off and pause features ensure that you’ll never miss
                a beat.
              </p>
              <p className="default-text-p">
                The advanced Active Noise Cancellation with built-in equalizer allow you
                to experience your audio world on your terms. It lets you enjoy your
                audio in peace, but quickly interact with your surroundings when you
                need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour
                battery life, the XX99 Mark II headphones gives you superior sound,
                cutting-edge technology, and a modern design aesthetic.
              </p> */}
              <p className="default-text-p">
                {features[0]}
              </p>
              <p className="default-text-p">
                {features[1]}
              </p>
              {/* <p className="default-text-p main-spacer"></p> */}
          </div>
          <div className="includes-container right-col">
            <h3 className="heading-main">IN THE BOX</h3>
            <ul className="list main-spacer">
                {
                    inTheBox ? inTheBox.map(item => <ListItem quantity={item.quantity} name={item.item} />) : null
                }
            </ul>
          </div>
      </div>

      {/* gallery */}
      <Gallery imgTop={getGalleryImage(id).top} imgBottom={getGalleryImage(id).bottom} imgRight={getGalleryImage(id).right} />

      {/* product includes */}
      <ProductIncludes others={others} />

      {/* categores */}
      <Categories />

      <TextImageBanner />


    </main>
  );
}
