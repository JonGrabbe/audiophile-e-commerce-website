export default function ProductAmountChangeButton(props) {
    return (
        <div className="amount-button-container">
            <button className="subtract inc">-</button>
            <div className="amount">
                {/* {props.amountMap[id] ? props.amountMap[id] : 1} */}
                1
            </div>
            <button className="add inc">+</button>
        </div>
    )
}