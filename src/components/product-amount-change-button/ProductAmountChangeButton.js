export default function ProductAmountChangeButton(props) {
    return (
        <div className="amount-button-container">
            <button onClick={() => props.handleChangeAmount(props.slug, '-')} className="subtract inc">-</button>
            <div className="amount">
                {/* {props.amountMap[id] ? props.amountMap[id] : 1} */}
                {props.amount ? props.amount : 1}
            </div>
            <button onClick={() => props.handleChangeAmount(props.slug, '+')} className="add inc">+</button>
        </div>
    )
}