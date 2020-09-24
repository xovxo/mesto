const openModalBtn = document.querySelector(".profile__btn_edit");
const modal = document.querySelector(".modal");
const closeModalBtn = document.querySelector(".modal__close-btn");
const saveModalBtn = document.querySelector(".modal__save-btn");
const formModal = modal.querySelector(".modal__form");

const inputName = modal.querySelector(".modal__name_name");
const inputSub = modal.querySelector(".modal__name_subName");

let title = document.querySelector(".profile__title").textContent;
let subTitle = document.querySelector(".profile__subtitle").textContent;

function toggleModal() {
  modal.classList.toggle("modal_is-open");
  inputName.value = title;
  inputSub.value = subTitle;
}

openModalBtn.addEventListener("click", toggleModal);

closeModalBtn.addEventListener("click", toggleModal);

saveModalBtn.addEventListener("click", toggleModal);

formModal.addEventListener("submit", (event) => {
  title = inputName.value;
  subTitle = inputSub.value;
  event.preventDefault();
});
