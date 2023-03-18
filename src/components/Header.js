import menuIcon from '../assets/shared/tablet/icon-hamburger.svg';
import logo from '../assets/shared/desktop/logo.svg';
import cart from '../assets/shared/desktop/icon-cart.svg';

export default function Header(props) {
    return (
    <header className="top-header wrapper">
        <div className="menu">
            <img src={menuIcon} alt="" className="menu-icon" />
            <img src={logo} alt="" className="logo" />
            <img src={cart} alt="" className="cart-icon" />
        </div>
        <div className="content"></div>
    </header>
    )
}