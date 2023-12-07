import './styles/SpecialItem.css';

function SpecialItem(props) {
    return (
        <div className='special-item-container'>
            <img className='special-item-image' src={props.image} alt={props.alt} />
            <div className='special-item-desc-container'>
                <div className='special-item-desc-hero'>
                    <h3 className='special-item-title'>{props.title}</h3>
                    <p className='special-item-price'>{props.price}</p>
                </div>
            </div>
        </div>
    );
}

export default SpecialItem;