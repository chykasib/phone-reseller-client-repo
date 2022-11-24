import React from 'react';
import logo from '../../../asserts/logo.png'
const Footer = () => {
    return (
        <footer className="footer footer-center p-20 bg-black -primary-content text-white">
            <div className="avatar">
                <div className="w-20 rounded">
                    <img src={logo} alt='' />
                </div>
            </div>
            <p>Copyright © 2022 - All right reserved by T Phone-Reseller-Shop.Com</p>
        </footer>
    );
};

export default Footer;