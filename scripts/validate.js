function showError(form, input, config) {
  const error = form.querySelector(`#${input.id}-error`);
  error.textContent = input.validationMessage;
  input.classList.add(config.inputInvalidClass);
}

function hideError(form, input, config) {
  const error = form.querySelector(`#${input.id}-error`);
  error.textContent = "";
  input.classList.remove(config.inputInvalidClass);
}

function checkInputValidity(form, input, config) {
  if (!input.validity.valid) {
    showError(form, input, config);
  } else {
    hideError(form, input, config);
  }
}

function setBtnState(btn, isActive, config) {
  if (isActive) {
    btn.classList.remove(config.buttonInvalidClass);
    btn.disabled = false;
  } else {
    btn.classList.add(config.buttonInvalidClass);
    btn.disabled = true;
  }
}

function setEventListener(form, config) {
  const inputListEdit = form.querySelectorAll(config.inputSelector);
  const editSaveBtn = form.querySelector(config.submitButtonSelector);
  inputListEdit.forEach((input) => {
    input.addEventListener("input", () => {
      checkInputValidity(form, input, config);
      setBtnState(editSaveBtn, form.checkValidity(), config);
    });
  });
}

function enableValidation(config) {
  const forms = document.querySelectorAll(config.formSelector);
  forms.forEach((form) => {
    setEventListener(form, config);
    form.addEventListener("submit", (event) => {
      event.preventDefault();
    });
  });
}

const validationConfig = {
  formSelector: ".modal__form",
  inputSelector: ".modal__name",
  submitButtonSelector: ".modal__save-btn",
  buttonInvalidClass: "modal__save-btn_disabled",
  inputInvalidClass: "modal__name_invalid",
};

enableValidation(validationConfig);
