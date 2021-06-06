let editButton = document.querySelector('.profile-info__edit-button');
let popup = document.querySelector('.popup');
let popupCloseIcon = document.querySelector('.popup__close-icon');
let popupSaveButton = document.querySelector('.form__save-button');
let formName = document.querySelector('.form__info_type_name');
let formDescription = document.querySelector('.form__info_type_description');
let ProfileInfoTitle = document.querySelector('.profile-info__title');
let ProfileInfoSubtitle = document.querySelector('.profile-info__subtitle');
let form = document.querySelector('.form');

function togglePopup() {
  popup.classList.toggle('popup_opened');
}
function copyToForm () {
  formName.value = ProfileInfoTitle.textContent;
  formDescription.value = ProfileInfoSubtitle.textContent;
  togglePopup();
}
function formSubmitHandler (evt) {
  evt.preventDefault();
  ProfileInfoTitle.textContent = formName.value;
  ProfileInfoSubtitle.textContent = formDescription.value;
  togglePopup();
}

editButton.addEventListener('click', copyToForm);
popupCloseIcon.addEventListener('click', togglePopup);
form.addEventListener('submit', formSubmitHandler); 

