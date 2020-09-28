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

saveModalBtn.addEventListener("submit", (event) => {
  event.preventDefault();
  title.textContent = inputName.value;
  subtitle.textContent = inputSub.value;
  toggleModal();
});
