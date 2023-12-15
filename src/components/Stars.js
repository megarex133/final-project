import './styles/Stars.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faStar);

function Stars(props) {
    switch (props.stars) {
        case '1':
            return (
                <div className='stars-container'>
                    <FontAwesomeIcon icon="fa-solid fa-star" className='starIcon' />
                </div>
            );
        case '2':
            return (
                <div className='stars-container'>
                    <FontAwesomeIcon icon="fa-solid fa-star" className='starIcon' />
                    <FontAwesomeIcon icon="fa-solid fa-star" className='starIcon' />
                </div>
            )
        case '3':
            return (
                <div className='stars-container'>
                    <FontAwesomeIcon icon="fa-solid fa-star" className='starIcon' />
                    <FontAwesomeIcon icon="fa-solid fa-star" className='starIcon' />
                    <FontAwesomeIcon icon="fa-solid fa-star" className='starIcon' />
                </div>
            )
        case '4':
            return (
                <div className='stars-container'>
                    <FontAwesomeIcon icon="fa-solid fa-star" className='starIcon' />
                    <FontAwesomeIcon icon="fa-solid fa-star" className='starIcon' />
                    <FontAwesomeIcon icon="fa-solid fa-star" className='starIcon' />
                    <FontAwesomeIcon icon="fa-solid fa-star" className='starIcon' />
                </div>
            )
        case '5':
            return (
                <div className='stars-container'>
                    <FontAwesomeIcon icon="fa-solid fa-star" className='starIcon' />
                    <FontAwesomeIcon icon="fa-solid fa-star" className='starIcon' />
                    <FontAwesomeIcon icon="fa-solid fa-star" className='starIcon' />
                    <FontAwesomeIcon icon="fa-solid fa-star" className='starIcon' />
                    <FontAwesomeIcon icon="fa-solid fa-star" className='starIcon' />
                </div>
            )
    }
}

export default Stars;