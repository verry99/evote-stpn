const otpEl = document.querySelector("#otp");
const btnVerif = document.querySelector("#verif");

otpEl.focus();
btnVerif.addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "/password-baru.html";
});
