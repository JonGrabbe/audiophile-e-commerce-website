export default function RemoveFromCart(props) {
    return (
        <div className="remove-from-cart-button-container">
            <button className="remove-from-cart-button main-button" onClick={() => props.handleRemoveItem(props.slug)}>
                remove from cart
            </button>
        </div>
    )
}