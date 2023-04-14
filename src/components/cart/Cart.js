// import cart from "../../assets/cart/desktop/icon-cart.svg";
import cart from "../../assets/shared/desktop/icon-cart.svg";

export default function Cart(props) {
    return (
        <button className="cart-icon-button">
            <img src={cart} alt="" className="cart-icon" />
        </button>
    )
}