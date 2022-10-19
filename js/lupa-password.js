const emailEl = document.querySelector("#email");
const btnReset = document.querySelector("#reset");

emailEl.focus();
btnReset.addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "/verif-email.html";
});
