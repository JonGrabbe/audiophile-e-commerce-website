import data from '../data.json';

export default function findProductObject(str) {
    let val;
    data.forEach(item => {
        if(item.slug === str) {
            val = item
            return
        }
    })
    return val
}