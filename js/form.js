console.clear();
const textarea = document.querySelector('[data-js="your-question"]');
const charCounter = document.querySelector('[data-js="charCounter"]');

textarea.addEventListener("input", () => {
  const maxLength = textarea.maxLength;
  const currentLength = textarea.value.length;
  charCounter.textContent = `${currentLength} / ${maxLength} characters used`;
});
