import './styles/BookingPage.css';
import BookingForm from './BookingForm';

function BookingPage() {
    return (
        <div className='booking-container'>
            <h1 className='booking-h1'>BookingPage</h1>
            <BookingForm/>
        </div> 
    );
}

export default BookingPage;