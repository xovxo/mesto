const openModalBtn = document.querySelector(".profile__btn_edit");
const modal = document.querySelector(".modal");
const closeModalBtn = document.querySelector(".modal__close-btn");
const saveModalBtn = document.querySelector(".modal__save-btn");
const formModal = modal.querySelector(".modal__form");

const inputName = modal.querySelector(".modal__name_name");
const inputSub = modal.querySelector(".modal__name_subName");

function toggleModal() {
  modal.classList.toggle("modal_is-open");
  if (!modal.querySelector(".modal_is-open")) {
    inputName.value = document.querySelector(".profile__title").textContent;
    inputSub.value = document.querySelector(".profile__subtitle").textContent;
  }
}

openModalBtn.addEventListener("click", toggleModal);

closeModalBtn.addEventListener("click", toggleModal);

saveModalBtn.addEventListener("submit", (event) => {
  document.querySelector(".profile__title").textContent = inputName.value;
  document.querySelector(".profile__subtitle").textContent = inputSub.value;
  event.preventDefault();
});
