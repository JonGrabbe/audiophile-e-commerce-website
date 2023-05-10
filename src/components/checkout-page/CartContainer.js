import getImage from "../../functions/getImage"
import OrangeButton from "../orange-button/OrangeButton"
import OrangeNavLink from "../orangeNavLink/OrangeNavLink"

function getTotal(arr) {
    let total = 0
    arr.forEach(item => {
        for(let i = 0; i <item.amount; i++) {
            total += item.price
        }
    })
    console.log(total)
    return total
}

function getVat(arr) {
    let num = getTotal(arr)
    return num * 0.2
}

function getGrandTotal(arr) {
    let num = getTotal(arr) + getVat(arr) + 50
    console.log(num)
    return num
}

function priceStr(num) {
    let formattedNumber = num.toLocaleString("en-US");
    return '$'+formattedNumber
}

function CartItem(props) {
    return (
        <div className="cart-item-container">
            <img src={getImage(props.slug)} alt="" className="img" />
            <div className="info-container">
                <h3 className="name">{props.name}</h3>
                <p className="price">{props.price}</p>
            </div>
            <p className="amount">
                x{props.amount}
            </p>
        </div>
    )
}


export default function CartContainer(props) {
    getGrandTotal(props.cart.products)
    getVat(props.cart.products)
    return (
        <div className="cart-checkout-container">
            <h2 className="heading bold-text-6">Summary</h2>
            <div className="cart-items-container">
                {
                    props.cart.products ? props.cart.products.map(item => {
                        return <CartItem {...item} />
                    }) : null
                }
            </div>
            <div className="cart-info-container">
                <div className="item">
                    <p className="title">Total:</p>
                    <p className="val">{priceStr(getTotal(props.cart.products))}</p>
                </div>
                <div className="item">
                    <p className="title">Shipping:</p>
                    <p className="val">$50</p>
                </div>
                <div className="item">
                    <p className="title">VAT included:</p>
                    <p className="val">{priceStr(getVat(props.cart.products))}</p>
                </div>
                <div className="item grand-total-item">
                    <p className="title">Grand Total:</p>
                    <p className="val grand-total">{priceStr(getGrandTotal(props.cart.products))}</p>
                </div>
            </div>
            <OrangeButton cn="pay-button" text="Continue & Pay" handleClick={props.handleClick} />
            
        </div>
    )
}