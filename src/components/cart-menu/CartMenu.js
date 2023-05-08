import { useEffect, useState } from "react";
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


function ButtonContainer(props) {
    return (
        <div className="button-container">
            <div className="total-container">
                <span className="title light-grey-text-8">Total</span>
                <span className="total bold-text-6">${props.total}</span>
            </div>
            <a href="/checkout" className="checkout-link">checkout</a>
        </div>
    )
}














export default function CartMenu(props) {
    const [cartItems, setCartItems] = useState([])
    const [style, setStyle] = useState()    
    useEffect(() => {
        if(props.isCartOpen) {
            setStyle({
                display: 'initial'
            })
        } else {
            setStyle({
                display: 'none'
            })
        }
    }, [props.isCartOpen])

    function blureContainerClick() {
        // console.log('asdfasdf')
        // setStyle({
        //     display: 'none'
        // })
        props.handleDisplayCart()
    }
    productsAmount(props.amountMap)
    // console.log(props.amountMap)

        // for(let property in props.cart) {
            //     console.log(property)
            //     let obj = props.cart[property];
            //     let amount = props.amountMap[property]
            //     cartItems.push(<CartItem slug={props.cart[property].slug} title={obj.name} price={obj.price} amount={amount} handleChangeAmount={props.handleChangeAmount} />)
            // }
            // console.log(cartItems)
            
    // useEffect(() => {
    // let arr = [];
    // props.cart.products.forEach(item => {   
    //     arr.push(<CartItem slug={item.slug} title={item.name} price={item.price} amount={item.amount} handleChangeAmount={props.handleChangeAmount} />)
    //     // console.log(item)
    // })
    //     setCartItems(arr)
    // }, [props.cart.products])

    function filterProducts(arr) {
        let newArr = arr.filter(item => item.isInCart);
        return newArr.map(item => <CartItem slug={item.slug} title={item.name} price={item.price} amount={item.amount} handleChangeAmount={props.handleChangeAmount} />)
    }

    function hasProductsInCart() {
        let arr = props.cart.products;
        if(filterProducts(arr).length > 0) {
            return true
        } else {
            return false
        }
    }

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




        // console.log(props.cart)



    return (
        <div>
            <div className="cart-blur-container" style={style} onClick={blureContainerClick}>
            </div>
                <div className="cart-menu-container" style={style}>
                    <div className="top-container">
                        <h2 className="heading">Cart {props.amountMap && productsAmount(props.amountMap) !== 0 ? productsAmount(props.amountMap) : null}</h2>
                        <button onClick={() => props.handleRemoveAll()} className="remove-all-button">remove all</button>
                    </div>
                    <div className="cart-items-container">
                        {
                           hasProductsInCart() ?  filterProducts(props.cart.products) : null
                        }
                    </div>
                    {
                        hasProductsInCart() ? <ButtonContainer total={getTotal(props.cart.products)} /> : null
                    }
                </div>
        </div>
    )
}