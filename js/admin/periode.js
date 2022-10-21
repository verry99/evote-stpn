const btnPolling = document.querySelectorAll(".btn-success");

// btn polling on click
btnPolling.forEach((btn) =>
  btn.addEventListener("click", function () {
    let html;

    // swap between mulai polling & tutup polling
    if (this.classList.contains("active")) {
      this.classList.add("disabled");
      html = '<span class="material-symbols-outlined d-flex align-items-center"> play_arrow </span>Mulai Polling';
    } else {
      html = '<span class="material-symbols-outlined d-flex align-items-center"> stop </span>Tutup Polling';
    }

    this.classList.toggle("active");
    this.innerHTML = html;
  })
);
