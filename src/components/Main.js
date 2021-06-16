import ava from '../images/kusto.png';

function Main (props) {
  return (
    <>
   <main>
      <section className="profile">
        <button type="button" className="profile__avatar-button" onClick={props.onEditAvatar}/>          
        <div className="profile__info">
          <img className="profile__info-img" src={ava}  alt="Фотография пользователя" />
          <div className="profile__info-text">
            <h1 className="profile__title">Жак Ив Кусто</h1>
            <p className="profile__subtitle">Исследователь океана</p>
            <button className="profile__info-text-button" type="button" onClick={props.onEditProfile} aria-label="Изменение данных пользователя" />
          </div>
        </div>
        <button className="profile__button" type="button" onClick={props.onAddPlace} aria-label="Добавление новой карточки" />
      </section>
      <div className="elements">
      </div>
    </main>

    {/* <div className="popup popup_type_edit">
    <div className="popup__overlay" />
    <div className="popup__container">
      <button className="popup__close popup__close_edit" type="button" title="Закрыть окно" aria-label="Закрыть форму" />
      <form action="action" className="popup__form popup__form-profile" name="profile" autoComplete="off" noValidate>
        <fieldset className="popup__field">
          <legend className="popup__header">Редактировать профиль</legend>
          <div className="popup__input-container">
            <input className="popup__input popup__input_field_name" type="text" name="username" required id="name-input" placeholder="Имя пользователя" minLength={2} maxLength={40} />
            <span className="error" id="name-input--error" />
          </div>
          <div className="popup__input-container">
            <input className="popup__input popup__input_field_caption" type="text" placeholder="Профессия" name="userjob" required id="work-input" minLength={2} maxLength={200} />
            <span className="error" id="work-input--error" />
          </div>
          <button className="popup__btn popup__btn_save" type="submit" aria-label="Кнопка сохранить">Сохранить</button>
        </fieldset>
      </form>
    </div>
  </div> */}

  {/* <div className="popup popup_type_avatar">
    <div className="popup__overlay" />
    <div className="popup__container">
      <h2 className="popup__header">Обновить аватар</h2>
      <form className="popup__form popup__form-avatar" name="place-avatar" noValidate>
        <fieldset className="popup__field">
          <input className="popup__input popup__input_title_avatar" id="avatar-input" type="url" name="avatar" placeholder="Ссылка на аватар" autoComplete="on" required />
          <span className="error span-avatar" id="avatar-input--error" />
          <button type="submit" className="popup__btn popup__btn_save">Сохранить</button>
        </fieldset>
      </form>
      <button type="button" className="popup__close" />
    </div>
  </div> */}

  {/* <div className="popup popup_type_cards">
    <div className="popup__overlay" />
    <div className="popup__container">
      <button className="popup__close popup__close_cards" type="button" title="Закрыть окно" aria-label="Закрыть форму" />
      <form action="action" className="popup__form popup__form-cards" name="card" autoComplete="#">
        <fieldset className="popup__field">
          <legend className="popup__header">Новое место</legend>
          <div className="popup__input-container">
            <input className="popup__input popup__input_card_name" type="text" placeholder="Название" name="name" required id="card-input" minLength={2} maxLength={30} />
            <span className="error" id="card-input--error" />
          </div>
          <div className="popup__input-container">
            <input className="popup__input popup__input_card_caption" type="url" placeholder="Ссылка на картинку" name="link" required id="url-input" />
            <span className="error" id="url-input--error" />
          </div>
          <button className="popup__btn popup__btn_save" type="submit" aria-label="Кнопка создания">Создать</button>
        </fieldset>
      </form>
    </div>
  </div> */}

  {/* <div className="popup popup_type_image">
    <div className="popup__overlay" />
    <div className="popup__figure-container">
      <figure className="popup__figure">
        <img className="popup__image" src="#" alt="#" />
        <figcaption className="popup__caption" />
      </figure>
      <button type="button" className="popup__close popup__close_image" />
    </div>
  </div> */}

  {/* <div className="popup popup_type_delete">
    <div className="popup__overlay" />
    <div className="popup__container">
      <button className="popup__close popup__close_delete" type="button" title="Закрыть окно" aria-label="Закрыть форму" />
      <form className="popup__form popup__form-delete" name="avatar">
        <fieldset className="popup__field">
          <legend className="popup__header">Вы уверены?</legend>
          <button className="popup__btn popup__btn_save" type="submit" aria-label="Кнопка сохранить">Да</button>
        </fieldset>
      </form>
    </div>
  </div> */}
  
  <template id="card-template" />   
    </>
    );   
}

export default Main;