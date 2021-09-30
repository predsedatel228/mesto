const editButton = document.querySelector('.profile-info__edit-button');
const popupProfile = document.querySelector('.popup_profile');
const popupCloseIcon = document.querySelector('.popup__close-icon_type_profile');
const popupSaveButton = document.querySelector('.form__prfile-save-button');
const formName = document.querySelector('.form__input_type_name');
const formDescription = document.querySelector('.form__input_type_description');
const profileInfoTitle = document.querySelector('.profile-info__title');
const profileInfoSubtitle = document.querySelector('.profile-info__subtitle');
const formProfile = popupProfile.querySelector('.form');
const cards = document.querySelector('.cards');
const cardTemplate = document.querySelector('#card').content;
const popupTitle = document.querySelector('.popup__title');

const addButton = document.querySelector('.profile__add-button');




const popupCloseIconCard = document.querySelector('.popup-card__close-icon');
const cardLike = document.querySelectorAll('.card__like');
const cardName = document.querySelector('.form__input_type_card-name');
const cardDescription = document.querySelector('.form__input_type_card-description');
const popupCard = document.querySelector(".popup-card");

const popupImg = document.querySelector('.popup-img');
const popupImgCloseIcon = document.querySelector('.popup-img__close-icon');
const popupImgTitle = document.querySelector(".popup-img__title");
const popupImgImg = document.querySelector(".popup-img__image");
const formPopupCard = popupCard.querySelector('.form');
const popupOverlayProfile = document.querySelector(".popup_profile");
const popupOverlayCard = document.querySelector(".popup-card");
const popupOverlayImg = document.querySelector(".popup-img");
const initialCards = [
  {
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

function closePopupProfile() {
  closeModal(popupProfile);
}

function openPopupCard() {
  openModal(popupCard);
}
function closePopupCard() {
  closeModal(popupCard);
;}

function openModal(modal) {
  modal.classList.add('popup_opened');
  document.addEventListener('keydown', closeEscape);
}

function closeModal(modal) {
  modal.classList.remove('popup_opened');
  modal.remove.eventListener('keydown', closeEscape);
}
function openAdd() {
  openModal(popupCard);
}
function openPopupImg() {
  openModal(popupImg);
}

function closePopupImg() {
  closeModal(popupImg);
}

function closeEscape (evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closeModal(openedPopup);
  }
}

function copyToForm() {
  formName.value = profileInfoTitle.textContent;
  formDescription.value = profileInfoSubtitle.textContent;
  openModal(popupProfile);
}
function submitFormHandler(evt) {
  evt.preventDefault();
  profileInfoTitle.textContent = formName.value;
  profileInfoSubtitle.textContent = formDescription.value;
  closeModal(popupProfile);
}

function renderCard(card) { //создание карточки
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  cardElement.querySelector('.card__title').textContent = card.name;
  const cardImg=cardElement.querySelector('.card__image');
  cardImg.src = card.link;
  cardImg.alt = card.name;
  setEventListeners(cardElement);
  return cardElement;

}
function createCard(card) {
  const cardElement = renderCard(card);
  cards.prepend(cardElement);
}
function renderCards() { //рисует карточки
  initialCards.forEach(createCard);
}
renderCards() //запускаем при загрузке



function submitFormCard(evt) { //ввод карточки
  evt.preventDefault();
  const element = {
    name: cardName.value,
    link: cardDescription.value,
  };
  createCard(element);
  closeModal(popupCard);
}


function deleteCard(evt) {//функция удаления карточки
  evt.target.closest('.card').remove();
}

function setEventListeners(element, img) {//события
  element.querySelector('.card__delete').addEventListener('click', deleteCard);
  element.querySelector('.card__like').addEventListener('click', like);
  element.querySelector('.card__image').addEventListener("click", loadPopupImage);

}

function loadPopupImage(evt) {
  openPopupImg();
  popupImgImg.src = evt.target.src;  
  const name = evt.target.closest('.card').querySelector('.card__title').textContent;
  popupImgImg.alt = name; 
  popupImgTitle.textContent = name; 
}

function like(evt) { // поставить класс
  evt.target.classList.toggle("card__like_active");
}
function closePopupOverlay(evt) {
  if (evt.target !== evt.currentTarget) {
    return;
  }
  closeModal(evt.target);
}

editButton.addEventListener('click', copyToForm); //открыть попап для редактрования профилья
popupCloseIcon.addEventListener('click', closePopupProfile); //закрыть попап редактрования профиля*/

addButton.addEventListener('click', openPopupCard); //открыть попап для добавления карточки
popupCloseIconCard.addEventListener('click', closePopupCard); //закрыть попап добавления карточки


popupImgCloseIcon.addEventListener('click', closePopupImg); //закрыть попап изображение*/

formProfile.addEventListener('submit', submitFormHandler); //сохранить изменения
formPopupCard.addEventListener('submit', submitFormCard);//запускаем сохранение
popupOverlayProfile.addEventListener('click', closePopupOverlay);
popupOverlayCard.addEventListener('click', closePopupOverlay);
popupOverlayImg.addEventListener('click', closePopupOverlay);

