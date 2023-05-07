import getImage from "../../functions/getImage";
import ProductAmountChangeButton from "../product-amount-change-button/ProductAmountChangeButton";

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


function productsAmount(obj) {
    let num = 0;
    for(let product in obj) {
        num += obj[product]
    }
    // console.log(num)
    return num
}

function CartItem(props) {
    return (
        <div className="cart-item">
            <img src={getImage(props.slug)} alt="" className="img" />
            <div className="info-container">
                <h3 className="heading title">{props.title}</h3>
                <p className="price">${props.price}</p>
            </div>
            <ProductAmountChangeButton handleChangeAmount={props.handleChangeAmount} slug={props.slug} amount={props.amount} />
            <hr />
        </div>
    )
}

function getTotal(obj) {
    let total = 0;
    for(let property in obj) {
        total += obj[property].price
    }
    return total
}

function ButtonContainer(props) {
    return (
        <div className="botton-container">
            <div className="total-container">
                <span className="title">Total</span>
                <span className="total">${props.total}</span>
            </div>
            <a href="/checkout" className="checkout-link">checkout</a>
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
    productsAmount(props.amountMap)
    // console.log(props.amountMap)

        let cartItems = [];
        // for(let property in props.cart) {
        //     console.log(property)
        //     let obj = props.cart[property];
        //     let amount = props.amountMap[property]
        //     cartItems.push(<CartItem slug={props.cart[property].slug} title={obj.name} price={obj.price} amount={amount} handleChangeAmount={props.handleChangeAmount} />)
        // }
        // console.log(cartItems)

        props.cart.products.forEach(item => {
            cartItems.push(<CartItem slug={item.slug} title={item.name} price={item.price} amount={item.amount} handleChangeAmount={props.handleChangeAmount} />)
            // console.log(item)
        })

        // console.log(props.cart)



    return (
        <div>
            <div className="cart-blur-container" style={style}>
            </div>
                <div className="cart-menu-container" style={style}>
                    <div className="top-container">
                        <h2 className="heading">Cart {props.amountMap && productsAmount(props.amountMap) !== 0 ? productsAmount(props.amountMap) : null}</h2>
                        <button onClick={() => props.handleRemoveAll()} className="remove-all-button">remove all</button>
                    </div>
                    <div className="cart-items-container">
                        {
                            cartItems ? cartItems : null
                        }
                    </div>
                    {
                        cartItems.length ? <ButtonContainer total={props.cart.total} /> : null
                    }
                </div>
        </div>
    )
}