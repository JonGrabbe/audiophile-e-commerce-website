import speakerImg from '../../assets/home/mobile/image-speaker-zx9.png';
import { Link } from 'react-router-dom';

export default function LargeBanner() {
    return (
        <div className="large-banner-container banner">
            <div className="wrapper wrapper-container">
                <div className="oval-background-outside oval"></div>
                <div className="oval-background oval"></div>
                <div className="left-container">
                    <img className='speaker-img' src={speakerImg} alt="" />
                </div>
                <div className="right-container">
                    <div className="wrapper">
                        <h1 className="title">ZX9 <br /> SPEAKER</h1>
                        <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                        <Link to="/product/zx9-speaker" className="main-button-black link">See Product</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}