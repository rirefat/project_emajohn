import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';

const Header = () => {
    return (
        <nav className='navbar'>
            <img src={logo} alt="logo" />
            <ul className='nav-links'>
                <li><a href="#"><i class='bx bx-store icons'></i>Shop</a> </li>
                <li><a href="#"><i class='bx bxs-cart icons'></i>Order</a> </li>
                <li><a href="#"><i class='bx bxs-shopping-bags icons' ></i>Order Review</a></li>
                <li><a href="#"><i class='bx bxs-home-smile icons'></i>Manage Inventory</a></li>
            </ul>
        </nav>
    );
};

export default Header;