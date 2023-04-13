/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { css } from "@emotion/react";
import { useState } from "react";

import { breakpoints } from "../../data/breakpoints";

// function ResponsiveImage(props) {
//     return (
//         <img src={} className="img" />
//     )
// }

export default function Gallery(props) {
    const imgTop = useState(props.imgTop)
    const imgBottom = useState(props.imgBottom)
    const imgRight = useState(props.imgRight)
    function myFunction(x) {
        if (x.matches) { // If media query matches
        //   document.body.style.backgroundColor = "yellow";
             console.log('match')
        } else {
        //  document.body.style.backgroundColor = "pink";
            console.log('else')
        }
      }
      
      var x = window.matchMedia(`(min-width: ${breakpoints.tablet1})`)
      myFunction(x) // Call listener function at run time
      x.addListener(myFunction) // Attach listener function on state changes

    return (
        <div className="gallery-container main-spacer">
            <div className="left-container">
                <div className="top-image-container">
                    <img className="img" src={props.imgTop} alt="" />
                </div>
                <div className="bottom-image-container">
                    <img className="img" src={props.imgBottom} alt="" />
                </div>
            </div>
            <div className="right-container">
                <img className="img" src={props.imgRight} alt="" />
            </div>
        </div>
    )
}