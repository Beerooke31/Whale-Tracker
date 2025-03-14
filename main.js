//Button to enter site

function enterSite() {
  window.location.href = "landing-page.html";
}

const siteButton = document
  .querySelector(".enter-site")
  .addEventListener("click", () => {
    enterSite();
  });

//Menu toggle

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

toggle.addEventListener("click", function () {
  toggle.classList.toggle("menu-toggle-active");
  nav.classList.toggle("nav-active");
});
