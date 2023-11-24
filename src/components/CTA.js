import './styles/CTA.css';
import { Link } from 'react-router-dom';
function CTA(props) {
    return (
        <Link to={props.link}><button>{props.name}</button></Link>
    )
}

export default CTA;