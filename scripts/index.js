const elements = document.querySelector(".elements");
const openModalEditButton = document.querySelector(".profile__btn_edit");
const modalEdit = document.querySelector(".modal-edit");
const openModalCreateButton = document.querySelector(".profile__btn_add");
const modalCreate = document.querySelector(".modal-create");
const modalPicture = document.querySelector(".modal-picture");
const formModalEdit = modalEdit.querySelector(".modal__form-edit");
const formModalCreate = modalCreate.querySelector(".modal__form-create");
const inputName = modalEdit.querySelector(".modal__name_name");
const inputSub = modalEdit.querySelector(".modal__name_subName");
const inputPlaceName = modalCreate.querySelector(".modal__name_place");
const inputLink = modalCreate.querySelector(".modal__name_link");
const title = document.querySelector(".profile__title");
const subtitle = document.querySelector(".profile__subtitle");
const templateElement = document.querySelector(".element-template");
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

function createCard(card) {
  const modalPicture = document.querySelector(".modal-picture");
  const modalPicImage = modalPicture.querySelector(".modal__image");
  const modalPicTitle = modalPicture.querySelector(".modal__subtitle");
  const cardElement = templateElement.content.cloneNode(true);

  const imageElement = cardElement.querySelector(".element__image");
  imageElement.setAttribute("alt", card.alt);
  imageElement.setAttribute("src", card.link);

  cardElement
    .querySelector(".element__btn-delete")
    .addEventListener("click", (event) => {
      event.target.closest(".element").remove();
    });

  cardElement
    .querySelector(".element__btn-like")
    .addEventListener("click", (event) => {
      event.target.classList.toggle("element__btn-like_active");
    });

  imageElement.addEventListener("click", () => {
    modalPicImage.src = card.link;
    modalPicTitle.textContent = card.name;
    toggleModal(modalPicture);
  });

  cardElement.querySelector(".element__title").textContent = card.name;
  return cardElement;
}

function addElement(elements, cardElement) {
  elements.prepend(cardElement);
}

initialCards.forEach((cardElement) =>
  addElement(elements, createCard(cardElement))
);

function toggleModal(modal) {
  modal.classList.toggle("modal_is-open");
  if (modal.classList.contains("modal_is-open")) {
    document.addEventListener("keydown", modalCloseByEsc);
  } else document.removeEventListener("keydown", modalCloseByEsc);
}

const modalCloseByEsc = (event) => {
  if (event.key === "Escape") {
    const modal = document.querySelector(".modal_is-open");
    toggleModal(modal);
  }
};

openModalEditButton.addEventListener("click", function () {
  toggleModal(modalEdit);

  inputName.value = title.textContent;
  inputSub.value = subtitle.textContent;
});

openModalCreateButton.addEventListener("click", function () {
  toggleModal(modalCreate);
  formModalCreate.reset();
});

formModalEdit.addEventListener("submit", (event) => {
  event.preventDefault();
  title.textContent = inputName.value;
  subtitle.textContent = inputSub.value;
  toggleModal(modalEdit);
});

formModalCreate.addEventListener("submit", (event) => {
  event.preventDefault();
  const card = {
    name: inputPlaceName.value,
    link: inputLink.value,
    alt: "фото " + `${inputPlaceName.value}`,
  };
  addElement(elements, createCard(card));
  toggleModal(modalCreate);
  formModalCreate.reset();
});

function modalCloseHandlers() {
  const modalList = Array.from(document.querySelectorAll(".modal"));

  modalList.forEach((modalElement) => {
    modalElement.addEventListener("click", (event) => {
      const eventTarget = event.target;
      if (
        eventTarget.classList.contains("modal") ||
        eventTarget.classList.contains("modal__close-btn")
      ) {
        toggleModal(modalElement);
      }
    });
  });
}

modalCloseHandlers();
