export default function Gallery(props) {
    return (
        <div className="gallery-container main-spacer">
            <div className="left-container">
                <div className="top-image-container">
                    <img className="img" src={props.imgTop} alt="" />
                </div>
                <div className="bottom-image-container">
                    <img className="img" src={props.imgBottom} alt="" />
                </div>
            </div>
            <div className="right-container">
                <img className="img" src={props.imgRight} alt="" />
            </div>
        </div>
    )
}