import './styles/Main.css';
import { Routes, Route, Link } from "react-router-dom";
import HomePage from './HomePage';
import BookingPage from './BookingPage';
import About from './About';
import Menu from './Menu';
import ConfirmedBooking from './ConfirmedBooking';
import { useReducer, useState, useEffect } from 'react';
import { fetchAPI, submitAPI } from '../mockAPI';

const updateTimes = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return action.payload; // Set available times to the fetched data
    case 'FETCH_FAILED':
      return []; // Set available times to the fetched data
    default:
      return state;
  }
};


function Main() {
  const [date, setDate] = useState('2024-02-01');
  console.log(date);
  const [time, setTime] = useState();
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState();
  const [submitStatus, setSubmitStatus] = useState(false);
  const [formReady, setFormReady] = useState('null');
  const [availabletimes, dispatch] = useReducer(updateTimes, null);
    useEffect(() => {
    const fetchData = async (selectedDate) => {
      try {
        const data = await fetchAPI(selectedDate); // Pass the desired date
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
        // const status = await submitAPI(date); // Pass the desired date
        // console.log(status)
      } catch (error) {
        dispatch({ type: 'FETCH_FAILED'});
        console.error('Error fetching data:', error.message);
        // Handle error if needed
      }
    };

    fetchData(date); // Call the fetchData function
    }, [date]);
  
  useEffect(() => {
    const checkData = async (date, time, guests, occasion, formReady) => {
      try {
        if (formReady != null) {
          const formObj = {
          date: date,
          time: time,
          guests: guests,
          occasion: occasion,
        };
        console.log(formObj);
          if (formObj.date.replaceAll("-", '/') != undefined && formObj.date.replaceAll("-", '/') != null && 
            formObj.time != undefined && formObj.time != null && 
            formObj.guests != undefined && formObj.guests != 0 &&
            formObj.occasion != undefined && formObj.occasion != null) {
            const status = await submitAPI(formObj); 
            console.log(status);
            setSubmitStatus(status);
            console.log(submitStatus);
          }
        
        }
        
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    checkData(date, time, guests, occasion, formReady);
  }, [formReady]);
    return (
        <main>
         <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/booking" element={<BookingPage
            availabletimes={availabletimes} dispatch={dispatch} date={date} setDate={setDate}
            time={time} setTime={setTime} guests={guests} setGuests={setGuests}
            occasion={occasion} setOccasion={setOccasion} submitStatus={submitStatus}
            setFormReady={setFormReady} formReady={formReady} />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path='/menu' element={<Menu />}></Route>
          <Route path='/confirmedbooking' element={<ConfirmedBooking/>}></Route>
         </Routes>
        </main>
    );
}

export default Main;