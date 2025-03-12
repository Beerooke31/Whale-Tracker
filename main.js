//Button to enter site

function enterSite() {
  window.location.href = "new-page.html";
}

const siteButton = document
  .querySelector(".enter-site")
  .addEventListener("click", () => {
    enterSite();
  });

//Using named functions can clean up your code considerably, and is a really good idea if the function is something that you are going to want to do in multiple places.

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    alert(button.id);
  });
});

//A callback is a function that is passed into another function as an argument.
