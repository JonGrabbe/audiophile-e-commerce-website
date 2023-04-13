export default function Gallery(props) {
    return (
        <div className="gallery-container">
            <div className="left-container">
                <div className="top-image-container">
                    <img src={props.imgTop} alt="" />
                </div>
                <div className="bottom-image-container">
                    <img src={props.imgBottom} alt="" />
                </div>
            </div>
            <div className="right-container">
                <img src={props.imgRight} alt="" />
            </div>
        </div>
    )
}