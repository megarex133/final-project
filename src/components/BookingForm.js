import './styles/BookingForm.css';
import { useState } from 'react';

function BookingForm() {
    const [inputDate, setDate] = useState(new Date());
    const [inputTime, setTime] = useState(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
    const [inputGuests, setGuests] = useState(1);
    const [inputOccasion, setOccasion] = useState(["Birthday", "Anniversary"]);

    function handleChangeDate(e) {
        setDate(e.target.value);
    }
    function handleChangeTime(e) {
        console.log(inputTime[e.target.value]);
    }
    function handleChangeGuests(e) {
        setGuests(e.target.value);
    }
    function handleChangeOccasion(e) {
        console.log(inputOccasion[e.target.value]);
    }
    return (
        <form class="booking-form">
            <label for="res-date">Choose date</label>
            <input type="date" value={inputDate} onChange={handleChangeDate} id="res-date" />
            <label for="res-time">Choose time</label>
            <select id="res-time" onChange={handleChangeTime}>
                {inputTime.map((time, key) => <option value={key}>{time}</option>)}
            </select>
            <label for="guests">Number of guests</label>
            <input type="number" value={inputGuests} onChange={handleChangeGuests} placeholder="1" min="1" max="10" id="guests"/>
            <label for="occasion">Occasion</label>
            <select id="occasion" onChange={handleChangeOccasion}>
                {inputOccasion.map((type, key) => <option value={key}>{type}</option>)}
            </select>
            <input type="submit" value="Make Your reservation"></input>
            </form>
    );
};

export default BookingForm;