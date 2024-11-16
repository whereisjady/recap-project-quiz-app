console.clear();
const textarea = document.querySelector('[data-js="your-question"]');
const charCounter = document.querySelector('[data-js="charCounter"]');

textarea.addEventListener("input", () => {
  const maxLength = textarea.maxLength;
  const currentLength = textarea.value.length;
  charCounter.textContent = `${currentLength} / ${maxLength} characters used`;
});

// query submit button
const submitQuestionContainer = document.querySelector(
  '[data-js="submit-question"]'
);

// submit event
submitQuestionContainer.addEventListener("submit", (event) => {
  event.preventDefault();

  // create newQuestionContainer
  const newQuestionContainer = document.createElement("div");
  newQuestionContainer.textContent = "Your added question";
  newQuestionContainer.classList.add("quiz__card");

  // create newQuestionBookmark
  const newQuestionBookmark = document.createElement("a");
  newQuestionBookmark.classList.add("bookmark", "bookmark-icon", "bookmarked");

  // create newQuestion YourQuestion
  const newQuestion = document.createElement("h2");
  const textAreaQuestion = document.querySelector('[data-js="your-question"]');
  newQuestion.textContent = textAreaQuestion.value;
  newQuestion.classList.add("quiz__question");

  // create new Show Answer Button
  const newQuestionShowAnswerButton = document.createElement("button");
  newQuestionShowAnswerButton.textContent = "Show answer";
  newQuestionShowAnswerButton.classList.add("show-answer-btn");

  // create new Question Answer
  const newQuestionAnswer = document.createElement("p");
  const textAreaAnswer = document.querySelector(
    '[data-js="answer-to-your-question"]'
  );
  newQuestionAnswer.textContent = textAreaAnswer.value;
  newQuestionAnswer.classList.add("quiz__answer");

  // appending from the bottom
  newQuestionContainer.appendChild(newQuestionAnswer);
  newQuestionContainer.appendChild(newQuestionShowAnswerButton);
  newQuestionContainer.appendChild(newQuestion);
  newQuestionContainer.appendChild(newQuestionBookmark);

  // appending to the dom
  const formSection = document.querySelector('[data-js="form-section"]');
  formSection.appendChild(newQuestionContainer);

  // clear form
  textAreaQuestion.value = "";
  textAreaAnswer.value = "";
});

// Main task: Create a new card when clicking on Submit button
// Query the Submit button
// Create a div quiz card when clicking Submit
// The div quiz card needs to contain all child elements
// Div card -> a bookmark, h2 quiz__question, quiz answer, show-answer-button
// Card needs to appears (be appended) to the page itself
// Form needs to be empty again
