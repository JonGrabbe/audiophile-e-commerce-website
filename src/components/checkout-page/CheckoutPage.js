import CartContainer from "./CartContainer";

export default function CheckoutPage(props) {
    return (
        <div className="checkout-page-wrapper">
            <div className="checkout-page-container">
                <form action="" className="main-form">
                    <h2 className="bold-text-4 h2 heading">Checkout</h2>
                    <div className="section-container">
                        <h3 className="heading">Billing Details</h3>
                        <div className="input-container name">
                            <label htmlFor="Name" className="label">Name</label>
                            <input type="text" id="name" className="input" placeholder="Alexi Ward" required />
                        </div>
                        <div className="input-container email">
                            <label htmlFor="email" className="label">Email</label>
                            <input type="email" id="email" className="input" placeholder="alexei@mail.com" required />
                        </div>
                        <div className="input-container phone">
                            <label htmlFor="phone" className="label">Phone Number</label>
                            <input type="tel" className="input" placeholder="+1 202-555-0136" required />
                        </div>
                    </div>
                    <div className="section-container">
                        <h3 className="heading">Shipping Info</h3>
                        <div className="input-container address">
                            <label htmlFor="address" className="label">Address</label>
                            <input type="text" id="address" className="input" placeholder="1137 Williams Avenue" required />
                        </div>
                        <div className="input-container zip">
                            <label htmlFor="zip" className="label">Zip Code</label>
                            <input type="text" className="input" id="zip" placeholder="10001" required />
                        </div>
                        <div className="input-container city">
                            <label htmlFor="city" className="label">city</label>
                            <input type="text" className="input" id="city" placeholder="New York" required />
                        </div>
                        <div className="input-container country">
                            <label htmlFor="country" className="label">Country</label>
                            <input type="text" className="input" id="country" placeholder="United States" required />
                        </div>
                    </div>
                    <div className="section-container">
                        <h3 className="heading">Payment Details</h3>
                        <div className="payment-method-container">
                            <h4 htmlFor="payment" className="label">Payment Method</h4>
                            <div className="radio-item-container">
                                <input type="radio" name="payment" id="emoney" value="emoney" />
                                <label htmlFor="emoney" className="label">e-Money</label>
                            </div>
                            <div className="radio-item-container">
                                <input type="radio" name="payment" id="cashdelivery" value="cashdelivery" />
                                <label htmlFor="cashdelivery" className="label">Cash on Delivery</label>
                            </div>
                        </div>
                        <div className="botton-container">
                            <div className="input-container">
                                <label htmlFor="emoneynumber" className="label">e-Money Number</label>
                                <input type="text" className="input" id="emoneynumber" placeholder="238521993" required />
                            </div>
                            <div className="input-container">
                                <label htmlFor="emoneypin" className="label">e-Money PIN</label>
                                <input type="text" className="input" id="emoneypin" placeholder="6891" required />
                            </div>
                        </div>
                    </div>
                </form>
            </div>

            <CartContainer {...props} />
        </div>
    )
}