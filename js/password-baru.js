const passwordEl = document.querySelector("#password");
const btnSimpan = document.querySelector("#simpan");

passwordEl.focus();
btnSimpan.addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "/index.html";
});
