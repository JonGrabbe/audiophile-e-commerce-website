import { Link } from "react-router-dom"

export default function MediumBanner() {
    return (
        <div className="banner-medium-container banner">
            <div className="text-container">
                <h2 className="title">ZX7 Speaker</h2>
                <Link to="/product/zx7-speaker" className="see-through-button link main-button">See Product</Link>
            </div>
        </div>
    )
}