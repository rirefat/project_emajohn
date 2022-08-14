import React, { useState } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';

const Header = () => {
    const [open, setOpen]=useState(false);
    return (
        <nav className='navbar'>
            <img src={logo} alt="logo" />
            <ul className='nav-links'>
                <li><a href="#"><i class='bx bx-store icons'></i>Shop</a> </li>
                <li><a href="#"><i class='bx bxs-cart icons'></i>Order</a> </li>
                <li><a href="#"><i class='bx bxs-shopping-bags icons' ></i>Order Review</a></li>
                <li><a href="#"><i class='bx bxs-home-smile icons'></i>Manage Inventory</a></li>
            </ul>
            <div className="menu-toggle-btn" onClick={()=>setOpen(!open)}>
                {console.log(open)}
                <i class={`bx bx-menu-alt-right ${open?"hidden":"show"}`}></i>
                <i class={`bx bx-x ${!open?"hidden":"show"}`}></i>
            </div>
        </nav>
    );
};

export default Header;