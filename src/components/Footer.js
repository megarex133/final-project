import React from 'react';
import logo from '../assets/Logo.svg';
import Nav from './Nav';
import './styles/Footer.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faInstagram, faFacebook, faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faInstagram, faFacebook, faTwitter, faFontAwesome);
function Footer() {
    return (
        <footer>
            <img src={logo} alt="logo" />
            <div className="footer-column">
                <h3>Navigation</h3>
                <Nav/>
            </div>
            <div className="footer-column">
                <h3>Contact</h3>
                <ul>
                    <li>Address</li>
                    <li>Phone</li>
                    <li>Email</li>
                </ul>
            </div>
            <div className="footer-column">
                <h3>Social Media Links</h3>
                <div className='icons-container'>
                    <FontAwesomeIcon icon="fa-brands fa-instagram" size="xl" />
                    <FontAwesomeIcon icon="fa-brands fa-facebook" size="xl" />
                    <FontAwesomeIcon icon="fa-brands fa-twitter" size="xl"/>
                </div>
            </div>
        </footer>
    );
}

export default Footer;