const body = document.querySelector("body");
const toggleButton = document.querySelector("[data-js=toggle-button]");

toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark");
});
