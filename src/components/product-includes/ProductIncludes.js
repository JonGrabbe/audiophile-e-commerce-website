import { useState } from "react";
import MainLink from "../main-link/MainLink";
import getImagePath from "../product/getImagePath";



function ResponsiveImage(props) {
    const [img, setImg] = useState(getImagePath(props.img.mobile, '../../assets/'))
    console.log(img)

    function myFunction(x) {
        if (x.matches) { // If media query matches
        //   document.body.style.backgroundColor = "yellow";
            setImg(getImagePath(props.img.tablet, '../../assets/'))
        } else {
        //  document.body.style.backgroundColor = "pink";
        }
      }
      
      var x = window.matchMedia("(min-width: 700px)")
      myFunction(x) // Call listener function at run time
      x.addListener(myFunction) // Attach listener function on state changes

      return (
        <img src={img} className="img" />

      )
}

function Item(props) {
    return (
        <div className="item-container">
            <div className="image-container">
                {/* <img className="img" src={props.img} alt="" /> */}
                <ResponsiveImage img={props.img} />
            </div>
            <h3 className="title">{props.title}</h3>
            <MainLink to={props.productLink} text="see product" />
        </div>
    )
}

export default function ProductIncludes(props) {
    return (
        <>
            <h2 className="others-heading">You may also like</h2>
            <div className="product-includes-container">
                {
                    props.others.map(item => (
                        <Item img={item.image} title={item.name} productLink={'/product/'+item.slug} />
                    ))
                }
            </div>
        </>
    )
}