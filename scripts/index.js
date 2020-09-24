const openModalBtn = document.querySelector(".profile__btn_edit");
const modal = document.querySelector(".modal");
const closeModalBtn = document.querySelector(".modal__close-btn");

function toggleModal() {
  modal.classList.toggle("modal_is-open");
}

openModalBtn.addEventListener("click", toggleModal);

closeModalBtn.addEventListener("click", toggleModal);
