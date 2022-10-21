const nim = document.querySelector("#nim");
const btnSubmit = document.querySelector(".btn-submit");

nim.focus();
btnSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  if (nim.value === "admin") window.location.href = "/admin/index.html";
  else window.location.href = "/user/index.html";
});
