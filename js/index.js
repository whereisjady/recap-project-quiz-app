console.clear();

// Bookmark Toggle
const bookmarkButton = document.querySelectorAll(".bookmark");

bookmarkButton.addEventListener("click", () => {
  const icon = bookmarkButton.querySelector(".bookmark-icon");
  icon.classList.toggle("bookmarked");
});

// Dark mode toggle
const bodyElement = document.querySelector('[data-js="body"]');
const darkModeButton = document.querySelector('[data-js="dark-mode"]');

darkModeButton.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
});
