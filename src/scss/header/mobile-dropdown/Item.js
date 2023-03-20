import iconArrowRight from '../../../assets/shared/desktop/icon-arrow-right.svg';

export default function Item(props) {
    return (
        <a href="" className="item">
            <img className="thumbnail" src={props.thumbnail} alt="" />
            <h3 className="title">{props.title}</h3>
            <p className="shop-cta">
                shop 
                <img className="arrow" src={iconArrowRight} alt="" />
            </p>
            
        </a>
    )
}