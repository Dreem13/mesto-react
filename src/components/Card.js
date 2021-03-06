import React from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext.js';

function Card (props) {  

const currentUser = React.useContext(CurrentUserContext);

// определение своей карточки
const isOwn = props.card.owner._id === currentUser._id;
// для кнопки удаления
const cardDeleteButtonClassName = (
  `elements__remove-button ${isOwn ? '' : 'elements__remove-button_hidden'}`
);
// определяем, есть ли у карточки лайк, поставленный текущим пользователем
const isLiked = props.card.likes.some(i => i._id === currentUser._id);

// // для кнопки лайка
const cardLikeButtonClassName = (`elements__like-button ${isLiked ? 'elements__like-button_active' : ' '}`);

function handleLikeClick () {
    props.onCardLike(props.card);    
}

function handleDeleteClick () {
  props.onCardDelete(props.card);
}

return (    
<div className="elements__card">
        <img className="elements__image" src={props.card.link} alt={`фотография ${props.card.name}`} />
    <div className="elements__title-wrapper">
          <h2 className="elements__title">{props.card.name}</h2>
        <div className="elements__like">
          <button type="button" className={`${cardLikeButtonClassName}`} onClick={handleLikeClick}></button>
          <span className="elements__total-like">{props.card.likes.length}</span>
        </div>
    </div>
        <button className={`${cardDeleteButtonClassName}`} onClick={handleDeleteClick}></button>
</div>    
);
}

export default Card; 