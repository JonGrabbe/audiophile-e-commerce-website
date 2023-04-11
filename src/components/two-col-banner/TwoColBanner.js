import { Link } from "react-router-dom"

export default function TwoColBanner() {
    return (
        <div className="two-col-banner banner">
            <div className="left-container item"></div>
            <div className="right-container item">
                <div className="text-container">
                    <h2 className="title">YX1 Earphones</h2>
                    <Link to="/product/yx1-earphones" className="see-through-button link main-button">See Product</Link>
                </div>
            </div>
        </div>
    )
}