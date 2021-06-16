import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import React from 'react';

function App() {

  function handleEditAvatarClick () {
    // document.querySelector('.popup_type_avatar').classList.add('popup_open');
  }

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  function handleEditProfileClick () {
    setIsEditProfilePopupOpen(true);
  }




  function handleAddPlaceClick () {
    // document.querySelector('.popup_type_cards').classList.add('popup_open');
  }

  function closeAllPopups () {
    setIsEditProfilePopupOpen(false);
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
           
      </div>
  </div>  
  );
}

export default App;
