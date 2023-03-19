import menuIcon from '../assets/shared/tablet/icon-hamburger.svg';
import logo from '../assets/shared/desktop/logo.svg';
import cart from '../assets/shared/desktop/icon-cart.svg';
import Content from './header/Content';
import MenuItems from './header/MenuItems';

export default function Header(props) {
    return (
    <header className="top-header wrapper">
        <div className="menu">
            <img src={menuIcon} alt="" className="menu-icon" />
            <img src={logo} alt="" className="logo" />
            <MenuItems />
            <img src={cart} alt="" className="cart-icon" />
        </div>
        <Content />
    </header>
    )
}