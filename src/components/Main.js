import React from 'react';
import api from '../utils/Api.js';
import Card from './Card.js';

function Main (props) {

  const [userName, setUserName] = React.useState('name');
  const [userDescription, setUserDescription] = React.useState('description');
  const [userAvatar, setUserAvatar] = React.useState('avatar');
  
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    function userData () {      
      Promise.all([
        api.getUserInfo(),
        api.getCards()        
      ])
      .then((data) => {                   
        setUserName(data[0].name);
        setUserDescription(data[0].about);
        setUserAvatar(data[0].avatar);
        setCards(data[1]);
      })
      .catch((error) => console.log(error))
    }
    userData()
  },
  []
  );  
    
  return (    
   <main>
      <section className="profile">
        <button type="button" className="profile__avatar-button" onClick={props.onEditAvatar} />          
        <div className="profile__info">
          <img className="profile__info-img" src={userAvatar} alt="Фотография пользователя" />
          <div className="profile__info-text">
            <h1 className="profile__title">{userName}</h1>
            <p className="profile__subtitle">{userDescription}</p>
            <button className="profile__info-text-button" type="button" onClick={props.onEditProfile} aria-label="Изменение данных пользователя" />
          </div>
        </div>
        <button className="profile__button" type="button" onClick={props.onAddPlace} aria-label="Добавление новой карточки" />
      </section>
      <div className="elements">      
        {cards.map((card) => <Card key={card._id} card={card} onCardClick={props.onCardClick}/>)}             
      </div>
    </main>  
  );   
}

export default Main;