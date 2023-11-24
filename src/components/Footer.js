import logo from '../assets/Logo.svg';
import Nav from './Nav';
import './styles/Footer.css'
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
            <div className="footer-logo">
                <h3>Social Media Links</h3>
            </div>
        </footer>
    );
}

export default Footer;