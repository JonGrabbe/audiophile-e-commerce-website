import img from '../../assets/product-xx99-mark-two-headphones//mobile/image-gallery-1.jpg';

export default function TextImageBanner() {
    return (
        <div className="text-image-banner-container">
            <div className="img-container"><img className="banner-img" src={img} alt="" /></div>
        </div>
    )
}