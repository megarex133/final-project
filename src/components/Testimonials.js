import './styles/Testimonials.css';
import Review from './Review';
import reviewPhoto from '../assets/review-person.jpg';

function Testimonials() {
    return (
        <div className='testimonials-container'>
            <h2>Testimonials</h2>
            <div className='reviews-container'>
                <Review stars='3' image={reviewPhoto} alt='man on the photo' name='John' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non eros placerat, vestibulum nibh vel, viverra elit.' />
                <Review stars='5' image={reviewPhoto} alt='man on the photo' name='John' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non eros placerat, vestibulum nibh vel, viverra elit.' />
                <Review stars='2' image={reviewPhoto} alt='man on the photo' name='John' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non eros placerat, vestibulum nibh vel, viverra elit.' />
                <Review stars='4' image={reviewPhoto} alt='man on the photo' name='John' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non eros placerat, vestibulum nibh vel, viverra elit.'/>
            </div>
        </div>
    );
};

export default Testimonials;