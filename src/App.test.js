import { render, screen } from '@testing-library/react';
import App from './App';
import Main from './components/Main';
import BookingPage from './components/BookingPage';
import BookingForm from './components/BookingForm';


test('Renders the BookingForm heading', () => {
  const availabletimes = ["16:00", "17:00"];
  render(<BookingPage availabletimes={availabletimes}/>);
    const headingElement = screen.getByText(/book now/i);
    expect(headingElement).toBeInTheDocument();
})
