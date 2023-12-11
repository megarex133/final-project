import './styles/SpecialItem.css';
import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faMotorcycle);

function SpecialItem(props) {
    return (
        <div className='special-item-container'>
            <img className='special-item-image' src={props.image} alt={props.alt} />
            <div className='special-item-desc-container'>
                <div className='special-item-desc-hero'>
                    <h3 className='special-item-title'>{props.title}</h3>
                    <p className='special-item-price'>{props.price}</p>
                </div>
                <p className='special-item-desc'>{props.desc}</p>
                <p className='special-item-order'><Link to="/menu">Order a delivery</Link>   <FontAwesomeIcon icon="fa-solid fa-motorcycle" /></p>
            </div>
        </div>
    );
}

export default SpecialItem;