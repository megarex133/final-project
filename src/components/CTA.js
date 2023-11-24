import './styles/CTA.css';
import { Link } from 'react-router-dom';
function CTA(props) {
    return (
        <button><Link to={props.link}>{props.name}</Link></button>
    )
}

export default CTA;