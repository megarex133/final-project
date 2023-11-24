import './styles/HomePage.css';
import Hero from './Hero';
import Specials from './Specials';
import Testimonials from './Testimonials';
import About from './About';

function HomePage() {
    return (
        <>
            <h1>HomePage</h1>
            <Hero />
            <Specials />
            <Testimonials />
            <About/>
        </>
    );
}

export default HomePage;