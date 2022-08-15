import React, { useState } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';

const Header = () => {
    const [open, setOpen]=useState(false);
    return (
        <nav className='navbar'>
            <img src={logo} alt="logo" />
            <ul className={`${open?"drop-down":"nav-links"}`}>
                <li><a href="#shop"><i className='bx bx-store icons'></i>Shop</a> </li>
                <li><a href="#order"><i className='bx bxs-cart icons'></i>Order</a> </li>
                <li><a href="#order-review"><i className='bx bxs-shopping-bags icons' ></i>Order Review</a></li>
                <li><a href="#manage-inventory"><i className='bx bxs-home-smile icons'></i>Manage Inventory</a></li>
            </ul>
            <div className="menu-toggle-btn" onClick={()=>setOpen(!open)}>               
                <i className={`bx bx-menu-alt-right ${open?"hidden":"show"}`}></i>
                <i className={`bx bx-x ${!open?"hidden":"show"}`}></i>
            </div>
        </nav>
    );
};

export default Header;