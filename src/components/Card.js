function Card (props) {

function handleClick() {
    props.onCardClick(props.card)    
}

return (    
<div className="elements__card" key={props.key}>
        <img className="elements__image" src={props.card.link} alt={`фотография ${props.card.name}`} onClick={handleClick} />
    <div className="elements__title-wrapper">
          <h2 className="elements__title">{props.card.name}</h2>
        <div className="elements__like">
          <button type="button" className="elements__like-button"></button>
          <span className="elements__total-like">{props.card.likes.length}</span>
        </div>
    </div>
        <button className="elements__remove-button"></button>
</div>    
);
}

export default Card; 