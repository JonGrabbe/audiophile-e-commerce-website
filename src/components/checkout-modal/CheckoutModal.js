import checkMark from '../../assets/checkout/icon-order-confirmation.svg';
import getImage from '../../functions/getImage';
import priceStr from '../../functions/priceStr';
import OrangeButton from '../orange-button/OrangeButton';

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


function ProductItem(props) {
    console.log(props)
    return (
        <div className="product-item-container">
            <img src={getImage(props.slug)} alt="" className="img" />
            <div className="info-container">
                <h3 className="name">{props.name}</h3>
                <p className="price">
                    {priceStr(props.price)}
                </p>
            </div>
            <p className="amount">
                {'x'+props.amount}
            </p>
        </div>
    )
}

function MultipleProducts(props) {
    let text;
    if(props.arr.length === 1) {
        text = 'and one other item'
    }
    if(props.arr.length > 1) {
        text = 'and '+props.arr.length+' other item(s)'
    }
    return (
        <>
            {props.children}
            <hr />
            <p className="multiple-items-text">
                {text} 
            </p>
        </>
    )
}

export default function CheckoutModal(props) {
    console.log(props.cart.products)
    let productList;
    if(props.cart.products.length > 1) {
        productList = (
            <MultipleProducts arr={props.cart.products} >
                <ProductItem {...props.cart.products[0]} />
            </MultipleProducts>
        )
    } else if(props.cart.products) {
        productList = <ProductItem {...props.cart.products[0]} />
    }
    return (
        <>
            <div className="checkout-modal-wrapper">
            </div>
                <div className="checkout-modal-container">
                    <div className="checkmark-container">
                        <img src={checkMark} alt="" />
                    </div>
                    <h2 className="heading">Thank you for your order</h2>
                    <p className="text">You will receive an email confirmation shortly.</p>
                    <div className="cart-items-container">
                        <div className="top">
                            {
                                productList
                            }
                        </div>
                        <div className="bottom">
                            <p className="text">Grand Total</p>
                            <p className="price">
                                {priceStr(getGrandTotal(props.cart.products))}
                            </p>
                        </div>
                    </div>
                    <OrangeButton cn="button" text="BACK TO HOME" />
                </div>
        </>
    )
}