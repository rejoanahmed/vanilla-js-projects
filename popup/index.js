const close = document.querySelector("#close");
const open = document.querySelector("#open");
const popupContainer = document.querySelector("#popupContainer");

open.addEventListener("click", () => popupContainer.classList.add("active"));
close.addEventListener("click", () =>
  popupContainer.classList.remove("active")
);
