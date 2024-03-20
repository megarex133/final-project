import './styles/BookingPage.css';
import BookingForm from './BookingForm';


function BookingPage(props) {
    // console.log(props.availabletimes);
    console.log(props.date);
    return (
        <div className='booking-container'>
            <h1 className='booking-h1'>Book Now</h1>
            <BookingForm availabletimes={props.availabletimes} dispatch={props.dispatch} date={props.date} setDate={props.setDate}
                time={props.time} setTime={props.setTime} guests={props.guests} setGuests={props.setGuests}
                occasion={props.occasion} setOccasion={props.setOccasion} submitStatus={props.submitStatus}
                setFormReady={props.setFormReady} formReady={props.formReady}/>
        </div> 
    );
}

export default BookingPage;