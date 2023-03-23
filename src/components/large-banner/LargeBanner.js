import speakerImg from '../../assets/home/mobile/image-speaker-zx9.png';

export default function LargeBanner() {
    return (
        <div className="large-banner-container">
            <div className="wrapper">
                <div className="oval-background-outside oval"></div>
                <div className="oval-background oval"></div>
                <div className="layout-container">
                    <div className="left-container">
                        <img className='speaker-img' src={speakerImg} alt="" />
                    </div>
                    <div className="right-container">
                        <div className="wrapper">
                            <h1 className="title">ZX9 <br /> SPEAKER</h1>
                            <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                            <a href="" className="main-button link">See Product</a>
                        </div>
                    </div>
                </div>
                <div className="layout-container-desktop">
                    <div className="left-container-d">
                        <img className='speaker-img-d' src={speakerImg} alt="" />
                    </div>
                    <div className="right-container-d">
                        <div className="wrapper-d">
                            <h1 className="title-d">ZX9 <br /> SPEAKER</h1>
                            <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                            <a href="" className="main-button link-d">See Product</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}