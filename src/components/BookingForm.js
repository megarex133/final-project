import './styles/BookingForm.css';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function BookingForm(props) {
    const [inputOccasion, setInputOccasion] = useState(["Birthday", "Anniversary"]);
    const navigate = useNavigate();

    function handleChangeDate(e) {
        props.setDate(e.target.value);
        console.log(props.date);
    }
    function handleChangeTime(e) {
        console.log(`Time: ${e.target.options[e.target.value].text}`);
        props.setTime(e.target.options[e.target.value].text);
    }
    function handleChangeGuests(e) {
        console.log(`Guests: ${e.target.value}`);
        props.setGuests(e.target.value);
    }
    function handleChangeOccasion(e) {
        console.log(`Occasion: ${e.target.options[e.target.value].text}`);
        props.setOccasion(e.target.options[e.target.value].text);
    }
    function submitForm(event) {
        event.preventDefault();
        validate();
        if (props.formReady === false || props.formReady === 'null') props.setFormReady(true);
        else if (props.formReady === true) props.setFormReady(false)
    }
    function validate() {
        if (props.availabletimes.length == 0) {
            console.log("invalid");
            const errorDate = document.querySelector("p.error-date");
            errorDate.style.display = "block";
        }
        else {
           const errorDate = document.querySelector("p.error-date");
           errorDate.style.display = "none";  
        } 
    }
    useEffect(() => {
    const redirectForm = () => {
        try {
          if (props.submitStatus === true) {
            navigate("/confirmedbooking");
        }
      } catch (error) {
        console.error('Error redirecting form:', error.message);
      }
    };

    redirectForm(); // Call the fetchData function
    }, [props.submitStatus]);
    return (
        <form class="booking-form">
            <label for="res-date">Choose date</label>
            <p className='error-date'>Please, select a valid date</p>
            <input type="date" onChange={handleChangeDate} id="res-date" />
            <label for="res-time">Choose time</label>
            <select id="res-time" onChange={handleChangeTime}>
                {props.availabletimes.map((time, key) => <option value={key}>{time}</option>)}
            </select>
            <label for="guests">Number of guests</label>
            <input type="number" value={props.guests} onChange={handleChangeGuests} placeholder="1" min="1" max="10" id="guests"/>
            <label for="occasion">Occasion</label>
            <select id="occasion" onChange={handleChangeOccasion}>
                {inputOccasion.map((type, key) => <option value={key}>{type}</option>)}
            </select>
            <input type="submit" value="Make Your reservation" araia-label="onClick" onClick={submitForm}></input>
        </form>
    );
};

export default BookingForm;