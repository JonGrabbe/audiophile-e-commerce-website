import { useParams } from "react-router-dom"

export default function Product(props) {
    let {id} = useParams()
    return (
        <>
            <h1>product {id}</h1>
        </>
    )
}