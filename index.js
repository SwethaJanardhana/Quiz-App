var titleColor = document.querySelector('[data-js="titleColor"]');
console.log(titleColor);

titleColor.addEventListener("click", () => {
  console.log("Inside function");
  titleColor.classList.toggle("colorChange");
});

var button = document.querySelector('[data-js="button"]');
console.log(button);
button.addEventListener("click", () => {
  console.log("Inside function");
  button.classList.toggle("fa-bookmark");
});
