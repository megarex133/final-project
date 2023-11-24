import './styles/Specials.css';
import CTA from './CTA';

function Specials() {
    return (
        <>
            <div className='heading'>
                <h2>Specials</h2>
                <CTA name="Online Menu" link="/menu"/>
            </div>
        </>
    );
};

export default Specials;