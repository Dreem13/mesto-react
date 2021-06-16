function PopupWithForm (props) {
    return (
    <div className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_open': ''}`}>
    <div className="popup__overlay" onClick={props.onClose}/>
    <div className="popup__container">
      <button className="popup__close" type="button" title="Закрыть окно" aria-label="Закрыть форму" onClick={props.onClose}/>
      <form action="action" className="popup__form" name={props.name} autoComplete="off" noValidate>
        <fieldset className="popup__field">
          <legend className="popup__header">{props.title}</legend>
          {props.children}          
          <button className="popup__btn popup__btn_save" type="submit" aria-label="Кнопка сохранить"></button>
        </fieldset>
      </form>
    </div>
  </div>
        
    // <div className={`popup popup_type_${props.name}`}>
    // <div className="popup__overlay"/>
    // <form className="popup__form" noValidate name={props.name} id='#'>
    //   <fieldset className="popup__field">
    //     <h2 className="popup__header">{props.title}</h2>

    //     <button className="popup__btn popup__btn_save" type="submit" id="#"></button>
    //   </fieldset>
    //   <button className="popup__close" type="button"></button>
    // </form>
    // </div>      
  );
}

export default PopupWithForm;