import React from 'react';
import './Footer.css'

const Footer = () => {
    let presentYr =  new Date().getFullYear();
    return (
        <div>
            <footer>
            <i className='bx bx-copyright' ></i> 2019-{presentYr} | All Rights Reserved
            </footer>
        </div>
    );
};

export default Footer;