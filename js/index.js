console.clear();

// Bookmark Toggle
const bookmarkButton = document.querySelectorAll(".bookmark");

bookmarkButton.addEventListener("click", () => {
  const icon = bookmarkButton.querySelector(".bookmark-icon");
  icon.classList.toggle("bookmarked");
});
