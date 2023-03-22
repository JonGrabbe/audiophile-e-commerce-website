import speakerImg from '../../assets/home/mobile/image-speaker-zx9.png';

export default function LargeBanner() {
    return (
        <div className="large-banner-container">
            <div className="oval-background-outside oval"></div>
            <div className="oval-background oval"></div>
            <div className="left-container">
                <img className='speaker-img' src={speakerImg} alt="" />
            </div>
        </div>
    )
}