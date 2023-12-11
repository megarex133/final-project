import './styles/Specials.css';
import CTA from './CTA';
import SpecialItem from './SpecialItem';
import burgerPhoto from '../assets/burger.jpg';
import pizzaPhoto from '../assets/pizza.jpg';
import chipsPhoto from '../assets/chips.jpg';

function Specials() {
    return (
        <section className='specials'>
            <div className='specials-heading'>
                <h2>This Week Specials!</h2>
                <CTA name="Online Menu" link="/menu"/>
            </div>
            <div className='specials-container'>
                <SpecialItem image={burgerPhoto} alt='burger' title='Burger' price='$12.99' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sollicitudin, sem a dignissim pellentesque, ex est consequat velit, a pharetra eros odio venenatis libero. In ultricies, orci suscipit rhoncus vestibulum, magna elit malesuada neque, eu suscipit ante augue et lorem. Praesent a varius tortor. Praesent et lectus suscipit, ultricies ex nec, vestibulum libero.' />
                <SpecialItem image={pizzaPhoto} alt='pizza' title='Pizza' price='$17.99' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sollicitudin, sem a dignissim pellentesque, ex est consequat velit, a pharetra eros odio venenatis libero. In ultricies, orci suscipit rhoncus vestibulum, magna elit malesuada neque, eu suscipit ante augue et lorem. Praesent a varius tortor. Praesent et lectus suscipit, ultricies ex nec, vestibulum libero.' />
                <SpecialItem image={chipsPhoto} alt='chips' title='Chips' price='$6.99' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sollicitudin, sem a dignissim pellentesque, ex est consequat velit, a pharetra eros odio venenatis libero. In ultricies, orci suscipit rhoncus vestibulum, magna elit malesuada neque, eu suscipit ante augue et lorem. Praesent a varius tortor. Praesent et lectus suscipit, ultricies ex nec, vestibulum libero.'/>
            </div>
        </section>
    );
};

export default Specials;