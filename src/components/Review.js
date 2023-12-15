import './styles/Review.css';
import Stars from './Stars';

function Review(props) {
    return (
        <div className='review-container'>
            <Stars stars={props.stars} />
            <div className='review-desc-container'>
                <img className="review-img" src={props.image} alt={props.alt} />
                <p className='review-name'>{props.name}</p>
            </div>
            <p className='review-text'>{props.text}</p>
        </div>
    );
};

export default Review;