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
    let style;
    if(props.isCartOpen) {
        style = {
            display: 'initial'
        }
    }
    return (
        <div>
            <div className="cart-blur-container">
            </div>
                <div className="cart-menu-container" style={style}>
                    <div className="top-container">
                        <h2 className="heading">Cart </h2>
                        <button className="remove-all-button">remove all</button>
                    </div>
                    {/* <div className="cart-items-container">
                    </div>
                    <div className="botton-container">
                        <div className="total-container">
                            <span className="title">Total</span>
                            <span className="total">${props.cart.getTotal()}</span>
                        </div>
                        <a href="/checkout" className="checkout-link">checkout</a>
                    </div> */}
                </div>
        </div>
    )
}