import './styles/Testimonials.css';
import Review from './Review';
import manPhoto_1 from '../assets/man_1.jpg';

function Testimonials() {
    return (
        <div className='testimonials-container'>
            <h2>Testimonials</h2>
            <div className='reviews-container'>
                <Review stars='3' image={manPhoto_1} alt='man on the photo' name='John' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non eros placerat, vestibulum nibh vel, viverra elit. Donec consectetur velit a massa finibus, hendrerit pharetra nisi euismod. Vivamus pellentesque libero diam, a tincidunt turpis suscipit a.'/>
            </div>
        </div>
    );
};

export default Testimonials;