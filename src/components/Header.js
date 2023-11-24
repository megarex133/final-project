import Nav from "./Nav";
import logo from '../assets/Logo.svg';
import './styles/Header.css'
function Header() {
    return (
        <header>
            <img src={logo} alt="logo"/>
            <Nav style="navigation"/>
        </header>
    );
}

export default Header;