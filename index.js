const bookmark = document.querySelector('[data-js="bookmark"]');
console.log("outside");
console.log("checking");
bookmark.addEventListener("click", () => {
  console.log("inside");
  bookmark.classList.add("card_bookmark--clicked ");
});
