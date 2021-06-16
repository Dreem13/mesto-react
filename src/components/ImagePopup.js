function ImagePopup () {
    return (
    <div className="popup popup_type_image">
    <div className="popup__overlay" />
    <div className="popup__figure-container">
      <figure className="popup__figure">
        <img className="popup__image" src="#" alt="#" />
        <figcaption className="popup__caption" />
      </figure>
      <button type="button" className="popup__close popup__close_image" />
    </div>
  </div>
);
}

export default ImagePopup;