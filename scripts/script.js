let editButton = document.querySelector('.profile-info__edit-button');
let popup = document.querySelector('.popup');
let popupCloseIcon = document.querySelector('.popup__close-icon');
let popupSaveButton = document.querySelector('.popup__save-button');
let popupName = document.querySelector('.popup__name');
let popupDescription = document.querySelector('.popup__description');
let ProfileInfoTitle = document.querySelector('.profile-info__title');
let ProfileInfoSubtitle = document.querySelector('.profile-info__subtitle');

function togglePopup() {
  popup.classList.toggle('popup_opened');
}

function formSubmitHandler (evt) {
  evt.preventDefault();
  ProfileInfoTitle.textContent = popupName.value;
  ProfileInfoSubtitle.textContent = popupDescription.value;
  togglePopup();
}

editButton.addEventListener('click', togglePopup);
popupCloseIcon.addEventListener('click', togglePopup);
popupSaveButton.addEventListener('click', formSubmitHandler); 
