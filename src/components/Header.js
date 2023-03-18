import menuIcon from '../assets/shared/tablet/icon-hamburger.svg';

export default function Header(props) {
    return (
    <header className="top-header">
        <div className="menu">
            <img src={menuIcon} alt="" />
        </div>
        <div className="content"></div>
    </header>
    )
}