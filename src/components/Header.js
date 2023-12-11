import Nav from "./Nav";
import logo from '../assets/Logo.svg';
import './styles/Header.css'
function Header() {
    return (
        <header>
            <div className="header-container">
                <img src={logo} alt="logo"/>
                <Nav style="navigation"/>
            </div>
        </header>
    );
}

export default Header;