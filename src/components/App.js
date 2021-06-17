import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import React from 'react';

function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  function handleEditAvatarClick () {
    setIsEditAvatarPopupOpen(true);
  }

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  function handleEditProfileClick () {
    setIsEditProfilePopupOpen(true);
  }

  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  function handleAddPlaceClick () {
    setIsAddPlacePopupOpen(true);
  }

  const [selectedCard, setSelectedCard] = React.useState(null);

  function closeAllPopups () {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
  }  

  return (        
  <div className="App body-background">
      <div className="page-container">
       <Header />     
       <Main
       onEditAvatar = {handleEditAvatarClick}
       onEditProfile = {handleEditProfileClick} 
       onAddPlace = {handleAddPlaceClick} 
       />           
       <Footer />

       <PopupWithForm name="edit" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
       <div className="popup__input-container">
          <input className="popup__input popup__input_field_name" type="text" name="username" required id="name-input" placeholder="Имя пользователя" minLength={2} maxLength={40} />
          <span className="error" id="name-input--error" />
        </div>
        <div className="popup__input-container">
          <input className="popup__input popup__input_field_caption" type="text" placeholder="Профессия" name="userjob" required id="work-input" minLength={2} maxLength={200} />
          <span className="error" id="work-input--error" />
        </div>
       </PopupWithForm>
      
       <PopupWithForm name="cards" title="Новое место" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <div className="popup__input-container">
          <input className="popup__input popup__input_card_name" type="text" placeholder="Название" name="name" required id="card-input" minLength={2} maxLength={30} />
          <span className="error" id="card-input--error" />
        </div>
        <div className="popup__input-container">
          <input className="popup__input popup__input_card_caption" type="url" placeholder="Ссылка на картинку" name="link" required id="url-input" />
          <span className="error" id="url-input--error" />
        </div>
       </PopupWithForm>

       <PopupWithForm name="avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <input className="popup__input popup__input_title_avatar" id="avatar-input" type="url" name="avatar" placeholder="Ссылка на аватар" autoComplete="on" required />
        <span className="error span-avatar" id="avatar-input--error" />
       </PopupWithForm>

       <ImagePopup card={selectedCard} onClose={closeAllPopups} />

       <PopupWithForm name="delete" title="Вы уверены?" />
           
      </div>
  </div>  
  );
}

export default App;
