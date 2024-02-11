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
                    <li><b>Address:</b> Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                    <li><b>Phone:</b> +123456789</li>
                    <li><b>Email:</b> email@email.com</li>
                </ul>
            </div>
            <div className="footer-column">
                <h3>Social Media Links</h3>
                <div className='icons-container'>
                    <a href="https://www.instagram.com/"><FontAwesomeIcon icon="fa-brands fa-instagram" size="xl" /></a>
                    <a href="https://www.facebook.com/"><FontAwesomeIcon icon="fa-brands fa-facebook" size="xl" /></a>
                    <a href="https://www.twitter.com/"><FontAwesomeIcon icon="fa-brands fa-twitter" size="xl"/></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;