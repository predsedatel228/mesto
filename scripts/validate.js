function showInputError (formElement, inputElement, errorMessage, validationError) {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(validationError.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(validationError.errorClass);
}

function hideInputError (formElement, inputElement, validationError) {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(validationError.inputErrorClass);
  errorElement.classList.remove(validationError.errorClass);
  errorElement.textContent = '';
}

function checkInputValidity (formElement, inputElement, validationError) {
  if (!inputElement.validity.valid) {
      showInputError (formElement, inputElement, inputElement.validationMessage, validationError);
  } else {
      hideInputError (formElement, inputElement, validationError);
  }
};

function setEventListeners (formElement, validationError) {
  const inputList = Array.from(formElement.querySelectorAll(validationError.inputSelector));
  const buttonElement = formElement.querySelector(validationError.submitButtonSelector);
  toggleButtonState(inputList, buttonElement, validationError);
  inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
          checkInputValidity(formElement, inputElement, validationError);
          toggleButtonState(inputList, buttonElement, validationError);
      });
  });
};

function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
  });
}

function toggleButtonState (inputList, buttonElement, validationError) {
  if (hasInvalidInput(inputList)) {
      buttonElement.classList.add(validationError.inactiveButtonClass);
      buttonElement.disabled = true;
  } else {
      buttonElement.classList.remove(validationError.inactiveButtonClass);
      buttonElement.disabled = false;
  }
}



function enableValidation (validationError) {
  const formList = Array.from(document.querySelectorAll(validationError.formSelector));
  formList.forEach((formElement) => {
      formElement.addEventListener('submit', function (evt) {
          evt.preventDefault();
      });
      setEventListeners(formElement, validationError);
  });
};

enableValidation({
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__save-button',
  inactiveButtonClass: 'form__save-button_disabled', 
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__error_visible'
});
