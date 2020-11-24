const initialCards = [
  {
    name: "Архыз",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
    alt: "фото Архыз",
  },
  {
    name: "Челябинская область",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
    alt: "фото Челябинская область",
  },
  {
    name: "Иваново",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
    alt: "фото Иваново",
  },
  {
    name: "Камчатка",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
    alt: "фото Камчатка",
  },
  {
    name: "Холмогорский район",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
    alt: "фото Холмогорский район",
  },
  {
    name: "Байкал",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
    alt: "фото Байкал",
  },
];

const elements = document.querySelector(".elements");
function addTemplateElement(card) {
  const templateElement = document
    .querySelector(".element-template")
    .content.cloneNode(true);

  templateElement
    .querySelector(".element__image")
    .setAttribute("alt", card.alt);

  templateElement
    .querySelector(".element__image")
    .setAttribute("src", card.link);

  templateElement.querySelector(".element__title").textContent = card.name;

  elements.append(templateElement);
}

initialCards.forEach(addTemplateElement);
const openModalBtn = document.querySelector(".profile__btn_edit");
const modal = document.querySelector(".modal");
const closeModalBtn = document.querySelector(".modal__close-btn");
const saveModalBtn = document.querySelector(".modal__save-btn");
const formModal = modal.querySelector(".modal__form");

const inputName = modal.querySelector(".modal__name_name");
const inputSub = modal.querySelector(".modal__name_subName");

const title = document.querySelector(".profile__title");
const subtitle = document.querySelector(".profile__subtitle");

function toggleModal() {
  modal.classList.toggle("modal_is-open");
  if (modal.classList.contains("modal_is-open")) {
    inputName.value = title.textContent;
    inputSub.value = subtitle.textContent;
  }
}

openModalBtn.addEventListener("click", toggleModal);
closeModalBtn.addEventListener("click", toggleModal);

formModal.addEventListener("submit", (event) => {
  event.preventDefault();
  title.textContent = inputName.value;
  subtitle.textContent = inputSub.value;
  toggleModal();
});
