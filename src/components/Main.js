import './styles/Main.css';
import { Routes, Route, Link } from "react-router-dom";
import HomePage from './HomePage';
import BookingPage from './BookingPage';
import About from './About';
import Menu from './Menu';
import { useReducer, useState } from 'react';

const updateTimes = (availabletimes, action) => {
    console.log(availabletimes)
    return availabletimes;
}

function Main() {
    function initializeTimes() {
        const initialState = ["16:00", "17:00", "18:00", "19:00", "20:00", "21:00"];
        return initialState;
    }
    const [availabletimes, dispatch] = useReducer(updateTimes, initializeTimes());
    return (
        <main>
         <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/booking" element={<BookingPage availabletimes={availabletimes} dispatch={dispatch} />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path='/menu' element={<Menu/>}></Route>
         </Routes>
        </main>
    );
}

export default Main;