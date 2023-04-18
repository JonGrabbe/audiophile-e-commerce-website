export default function RemoveFromCart(props) {
    return (
        <div className="remove-from-cart-button-container">
            <button onClick={() => props.handleRemoveItem(props.slug)}>
                remove from cart
            </button>
        </div>
    )
}