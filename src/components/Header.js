import React, {useState} from 'react'
import menuIcon from '../assets/shared/tablet/icon-hamburger.svg';
import logo from '../assets/shared/desktop/logo.svg';
import cart from '../assets/shared/desktop/icon-cart.svg';
import Content from './header/Content';
import MenuItems from './header/MenuItems';
import MobileDropdown from './header/mobile-dropdown-menu/MobileDropdown';

export default function Header(props) {
    const [isOpen, setIsOpen] = useState(false);
    return (
    <header className="top-header wrapper">
        <div className="menu">
            <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
                <img src={menuIcon} alt="" className="menu-icon" />
            </button>
            <MobileDropdown isOpen={isOpen} />
            <img src={logo} alt="" className="logo" />
            <MenuItems />
            <img src={cart} alt="" className="cart-icon" />

        </div>
        <Content />
    </header>
    )
}