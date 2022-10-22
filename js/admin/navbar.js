const navToggler = document.querySelector(".navbar-toggler");
const sidebar = document.querySelector(".sidebar");

// show sidebar on nav toggler click
navToggler.addEventListener("click", function () {
  sidebar.classList.toggle("active");
});
