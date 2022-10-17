const nim = document.querySelector("#nim");
const btnSubmit = document.querySelector(".btn-submit");

nim.focus();
btnSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "./user/index.html";
});
