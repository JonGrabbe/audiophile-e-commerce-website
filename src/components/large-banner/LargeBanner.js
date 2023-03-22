import speakerImg from '../../assets/home/mobile/image-speaker-zx9.png';

export default function LargeBanner() {
    return (
        <div className="large-banner-container">
            <div className="oval-background-outside oval"></div>
            <div className="oval-background oval"></div>
            <div className="left-container">
                <img className='speaker-img' src={speakerImg} alt="" />
            </div>
            <div className="right-container">
                <h1 className="title">ZX9 <br /> SPEAKER</h1>
                <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                <a href="" className="main-button link">See Product</a>
            </div>
        </div>
    )
}