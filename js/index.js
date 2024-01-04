console.log("outside");
console.log("checking");

const bookmarkImage = document.querySelector('[data-js="bookMarkedImage"]');

console.log(bookmarkImage.addEventListener("click", () => {}));
bookmarkImage.addEventListener("click", () => {
  console.log("inside");
  bookmarkImage.classList.toggle("card_bookmark--clicked");
});

const showAnswer = document.querySelector('[data-js="show_answer"]');
const revelAnswer = document.querySelector('[data-js="display_answer"]');
const hideAnswer = document.querySelector('[data-js="hide_answer"]');

console.log(showAnswer.addEventListener("click", () => {}));

// Display Answer
showAnswer.addEventListener("click", () => {
  console.log("inside");
  console.log(revelAnswer);
  showAnswer.classList.add("hide_button");
  hideAnswer.classList.remove("hide_button");
  revelAnswer.classList.remove("hide_answer");
  revelAnswer.classList.add("revel_answer");
});

// Hide Answer
hideAnswer.addEventListener("click", () => {
  console.log("inside");
  console.log(revelAnswer);
  showAnswer.classList.remove("hide_button");
  hideAnswer.classList.add("hide_button");
  revelAnswer.classList.add("hide_answer");
  revelAnswer.classList.remove("revel_answer");
});

// Dark Mode

const darkMode = document.querySelector('[data-js="darkMode"]');

darkMode.addEventListener("click", () => {});
