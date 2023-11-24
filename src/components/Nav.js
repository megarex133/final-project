import { Link } from 'react-router-dom';
import './styles/Nav.css';
function Nav(props) {
    return (
        <nav>
            <ul className={props.style}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="about">About</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/booking">Reservations</Link></li>
                <li><a href="#">Login</a></li>
            </ul>
        </nav>
    );
}

export default Nav;