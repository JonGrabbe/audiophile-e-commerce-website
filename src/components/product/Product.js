import { useParams } from "react-router-dom"
import data from '../../data.json';

export default function Product(props) {
    let {id} = useParams()
    // let text;
    // let title;
    // for(let pt in productsData) {
    //     productsData[pt].forEach(item => {
    //         // console.log(item)
    //         if(item.id === id.toLowerCase()) {
    //             text = item.text;
    //             title = item.title;
    //             console.log(item)
    //         }
    //     })
    // }
    
    // console.log(text)

    let title;
    let description;
    let features;
    let image;
    let price;
    let inTheBox;
    let others;
    data.forEach(item => {
        if(item.slug === id) {
            title = item.name
        }
    })

    return (
        <>
            <h1>product {title}</h1>
            <p>
                
            </p>
        </>
    )
}