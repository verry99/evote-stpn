const nim = document.querySelector("#nim");
const btnSubmit = document.querySelector(".btn-submit");

nim.focus();
btnSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  if (nim.value === "admin") window.location.href = "/admin/";
  console.log(nim.value);
  window.location.href = "/user/index.html";
});
