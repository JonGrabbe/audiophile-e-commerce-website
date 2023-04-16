import productsData from "../data/headphones-products"

export default function getImage(slug, path) {
    let img;
    for(let arr in productsData) {
        arr.forEach(item => {
            if(item.slug === slug) {
                img = item.image
            }
        })
    }
    return img
}