// setup date
const date = (document.getElementById("date").innerHTML =
  new Date().getFullYear());

const navBar = document.querySelector(".navbar");
const navBtn = document.querySelector("#nav-btn");
const navClose = document.querySelector(".nav-close");

// show nav
navBtn.addEventListener("click", () => {
  navBar.classList.add("showNav");
});

// // close nav
navClose.addEventListener("click", () => {
  navBar.classList.remove("showNav");
});
