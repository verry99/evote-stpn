const yearEl = document.querySelector("#year");
const modalIntroEl = document.querySelector(".modal__intro");
const overlayEl = document.querySelector(".overlay");
const btnMengertiEl = document.querySelector(".btn__mengerti");

yearEl.textContent = new Date().getFullYear();

const hideModal = function () {
  modalIntroEl.classList.add("hidden");
  overlayEl.classList.add("hidden");
};
btnMengertiEl.addEventListener("click", hideModal);
