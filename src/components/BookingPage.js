import './styles/BookingPage.css';
import BookingForm from './BookingForm';
import { useState } from 'react';

function BookingPage(props) {
    return (
        <div className='booking-container'>
            <h1 className='booking-h1'>Book Now</h1>
            <BookingForm availabletimes={props.availabletimes} dispatch={props.dispatch}/>
        </div> 
    );
}

export default BookingPage;