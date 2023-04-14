function Checkout(props) {
    return (
        <div className="cart-checkout-container">
            
        </div>
    )
}
function Summary(props) {
    return (
        <div className="cart-summary-container">

        </div>
    )
}

function DefaultCart(props) {
    return (
        <>

        </>
    )
}

function CartItem(props) {
    return (
        <div className="cart-item">
            
        </div>
    )
}

export default function CartMenu(props) {
    return (
        <div className="cart-menu-container">
            <div className="top-container">
                <h2 className="heading">Cart {props.cart.length}</h2>
            </div>
            <div className="cart-items-container">

            </div>
            <div className="botton-container">
                <div className="total-container">
                    <span className="title">Total</span>
                    <span className="total">${props.cart.getTotal()}</span>
                </div>
                <a href="/checkout" className="checkout-link">checkout</a>
            </div>
        </div>
    )
}