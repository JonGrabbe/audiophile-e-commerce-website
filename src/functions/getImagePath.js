// import data from '../data.json';
import findProductObject from './findProductObject';

export default function getImagePath(name, type) {
    // const dataParsed = JSON.parse(data);
    let val = findProductObject(name).image[type];
    val = val.substr(2, val.length)
    console.log(val)
    return '../../../'+val
}