export default function priceStr(num) {
    let formattedNumber = Number(num).toLocaleString("en-US");
    return '$'+formattedNumber
}