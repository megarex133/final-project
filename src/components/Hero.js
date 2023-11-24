import './styles/Hero.css';
import CTA from './CTA';
import restaurantPhoto from '../assets/restaurant.jpg'
function Hero() {
    return(
        <>
            <section className="hero">
                <div className="desc">
                    <h1>Little Lemon</h1>
                    <h4>Chicago</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ex quis arcu auctor, non tincidunt sem ultrices. Donec posuere urna vel ipsum volutpat pellentesque. Etiam cursus nec elit in auctor. In tristique dapibus efficitur. Morbi in tincidunt libero, nec placerat elit. Aliquam ac mattis ante. In ac lectus at nulla iaculis molestie id sed lorem. Integer sit amet vulputate dui. Quisque non placerat ligula. Nam pretium laoreet felis, sed ultrices diam accumsan vel. Mauris aliquet purus in porta convallis.</p>
                    <CTA link="/booking" name="Reserve a Table"/>
                </div>
                <img className="restaurantPhoto"src={restaurantPhoto} alt="restaurant photo"/>
            </section>
        </> 
    );
}

export default Hero;