const openEditProfilePopupBtn = document.querySelector('.profile__info-text-button');
const userName = document.querySelector('.profile__title');
const userJob = document.querySelector('.profile__subtitle');
const valueName = document.querySelector('.popup__input_field_name');
const valueJob = document.querySelector('.popup__input_field_caption');
const formElementProfile = document.querySelector('.popup__form-profile');
const cardsContainer = document.querySelector('.elements'); // Контейнер для карточек
const modalWindowEdit = document.querySelector('.popup_type_edit');
const modalWindowCards = document.querySelector('.popup_type_cards');
const popupAvatar = document.querySelector('.popup_type_avatar');
const formAddCard = document.querySelector('.popup__form-cards');
const modalWindowImage = document.querySelector('.popup_type_image');
const openModalAddCardsButton = document.querySelector('.profile__button');
const inputName = document.querySelector('.popup__input_card_name');
const inputCaption = document.querySelector('.popup__input_card_caption');
const avatarInput = document.querySelector('.popup__input_title_avatar');
const formAvatarElement = document.querySelector('.popup__form-avatar');
const avatarButton = document.querySelector('.profile__avatar-button');
const profileAvatar = document.querySelector('.profile__info-img');
const popupDelete = document.querySelector('.popup_type_delete');
const popupDeleteButton = document.querySelector('.elements__remove-button');
const popupDeleteForm = document.querySelector('.popup__form-delete');

export const apiProps = ({
    url: 'https://mesto.nomoreparties.co/v1/cohort-24',
    token: '8c6e6a0b-c97b-41fa-9ce9-e79b26e708e8'
    });

const initialCards = [{
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

const params = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__btn',
    inactiveButtonClass: 'popup__btn_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'error',
};

export {
    cardsContainer,
    userName,
    userJob,
    modalWindowEdit,
    modalWindowCards,
    inputName,
    inputCaption,
    valueName,
    valueJob,
    modalWindowImage,
    openEditProfilePopupBtn,
    openModalAddCardsButton,
    initialCards,
    formElementProfile,
    formAddCard,
    params,
    popupAvatar,
    avatarInput,
    formAvatarElement,
    avatarButton,
    profileAvatar,
    popupDelete,
    popupDeleteButton,
    popupDeleteForm,        
}
