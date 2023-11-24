import './styles/Main.css';
import { Routes, Route, Link } from "react-router-dom";
import HomePage from './HomePage';
import BookingPage from './BookingPage';
import About from './About';

function Main() {
    return (
        <main>
         <Routes>
             <Route path="/" element={<HomePage />}></Route>
                <Route path="/booking" element={<BookingPage />}></Route>
                <Route path="/about" element={<About/>}></Route>
         </Routes>
        </main>
    );
}

export default Main;