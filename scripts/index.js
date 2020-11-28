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

  const imageElement = templateElement.querySelector(".element__image");
  imageElement.setAttribute("alt", card.alt);
  imageElement.setAttribute("src", card.link);

  templateElement
    .querySelector(".element__btn-delete")
    .addEventListener("click", (event) => {
      event.target.closest(".element").remove();
    });

  templateElement
    .querySelector(".element__btn-like")
    .addEventListener("click", (event) => {
      const element = event.target.closest(".element__btn-like");
      element.classList.toggle("element__btn-like_active");
    });

  imageElement.addEventListener("click", (event) => {
    const element = event.target.closest(".element");
    modalPicture.querySelector(".modal__image").src = element.querySelector(
      ".element__image"
    ).src;

    modalPicture.querySelector(
      ".modal__subtitle"
    ).textContent = element.querySelector(".element__title").textContent;
    toggleModalPicture();
  });

  templateElement.querySelector(".element__title").textContent = card.name;

  elements.prepend(templateElement);
}

initialCards.forEach(addTemplateElement);

const openModalEdit = document.querySelector(".profile__btn_edit");
const modalEdit = document.querySelector(".modal-edit");

const openModalCreate = document.querySelector(".profile__btn_add");
const modalCreate = document.querySelector(".modal-create");

const modalPicture = document.querySelector(".modal-picture");

const closeModalEdit = document.querySelector(".modal__close-btn-edit");
const closeModalCreate = document.querySelector(".modal__close-btn-create");
const closeModalPicture = document.querySelector(".modal__close-btn-picture");

const saveModalEdit = document.querySelector(".modal__save-btn-edit");
const formModalEdit = modalEdit.querySelector(".modal__form-edit");

const saveModalCreate = document.querySelector(".modal__save-btn-create");
const formModalCreate = modalCreate.querySelector(".modal__form-create");

const inputName = modalEdit.querySelector(".modal__name_name");
const inputSub = modalEdit.querySelector(".modal__name_subName");

const inputPlaceName = modalCreate.querySelector(".modal__name_place");
const inputLink = modalCreate.querySelector(".modal__name_link");

const title = document.querySelector(".profile__title");
const subtitle = document.querySelector(".profile__subtitle");

function toggleModalEdit() {
  modalEdit.classList.toggle("modal_is-open");
  if (modalEdit.classList.contains("modal_is-open")) {
    inputName.value = title.textContent;
    inputSub.value = subtitle.textContent;
  }
}

function toggleModalCreate() {
  modalCreate.classList.toggle("modal_is-open");
}

function toggleModalPicture() {
  modalPicture.classList.toggle("modal_is-open");
}

openModalEdit.addEventListener("click", toggleModalEdit);
openModalCreate.addEventListener("click", toggleModalCreate);

closeModalEdit.addEventListener("click", toggleModalEdit);
closeModalCreate.addEventListener("click", toggleModalCreate);
closeModalPicture.addEventListener("click", toggleModalPicture);

formModalEdit.addEventListener("submit", (event) => {
  event.preventDefault();
  title.textContent = inputName.value;
  subtitle.textContent = inputSub.value;
  toggleModalEdit();
});

formModalCreate.addEventListener("submit", (event) => {
  event.preventDefault();
  const card = {
    name: inputPlaceName.value,
    link: inputLink.value,
    alt: "фото " + `${inputPlaceName.value}`,
  };
  addTemplateElement(card);
  toggleModalCreate();
  formModalCreate.reset();
});
