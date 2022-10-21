const navToggler = document.querySelector(".navbar-toggler");

// show sidebar on nav toggler click
navToggler.addEventListener("click", function () {
  sidebar.classList.toggle("active");
});
