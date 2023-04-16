import productsData from "../data/headphones-products"

export default function getImage(slug, path) {
    let img;
    for(let arr in productsData) {
        productsData[arr].forEach(item => {
            console.log(item)
            if(item.slug === slug) {
                console.log(item.slug === slug)
                img = item.image
            }
        })
    }
    // console.log(img)
    return img
}