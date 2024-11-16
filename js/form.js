console.clear();
const textarea = document.querySelector('[data-js="your-question"]');
const charCounter = document.querySelector('[data-js="charCounter"]');

textarea.addEventListener("input", () => {
  const maxLength = textarea.maxLength;
  const currentLength = textarea.value.length;
  charCounter.textContent = `${currentLength} / ${maxLength} characters used`;
});

// query submit question form
const submitQuestionForm = document.querySelector('[data-js="add-card"]');

// submit event
submitQuestionForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // create newQuestionContainer
  const newQuestionContainer = document.createElement("div");
  newQuestionContainer.classList.add("quiz__card");

  // create newQuestionBookmark
  const newQuestionBookmark = document.createElement("a");
  newQuestionBookmark.classList.add("bookmark", "bookmark-icon", "bookmarked");
  newQuestionBookmark.innerHTML = `
  <svg
    class="bookmark-icon"
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="lucide lucide-bookmark"
  >
    <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
  </svg>`;

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

  // create tag
  const questionTag = document.createElement("span");
  const textAreaTag = document.querySelector('[data-js="corresponding-tag"]');
  questionTag.textContent = `${textAreaTag.value}`;
  questionTag.classList.add("quiz__tag");

  // toggle answer button

  //   const newQuestionshowAnswerButton = document.querySelector(
  //     '[data-js="quiz__button-answer"]'
  //   );
  //   const newQuestionAnswer = document.querySelector('[data-js="quiz-answer"]');

  //   newQuestionshowAnswerButton.addEventListener("click", () => {
  //     newQuestionAnswer.classList.toggle("answer-to-your-question--active");
  //   });

  // appending to questioncontainer
  newQuestionContainer.appendChild(newQuestionBookmark);
  newQuestionContainer.appendChild(newQuestion);
  newQuestionContainer.appendChild(newQuestionShowAnswerButton);
  newQuestionContainer.appendChild(newQuestionAnswer);
  newQuestionContainer.appendChild(questionTag);

  // appending to the dom
  const formSection = document.querySelector('[data-js="form-section"]');
  formSection.appendChild(newQuestionContainer);

  // clear form
  textAreaQuestion.value = "";
  textAreaAnswer.value = "";
  textAreaTag.value = "";
});

// Main task: Create a new card when clicking on Submit button
// Query the Submit button
// Create a div quiz card when clicking Submit
// The div quiz card needs to contain all child elements
// Div card -> a bookmark, h2 quiz__question, quiz answer, show-answer-button
// Card needs to appears (be appended) to the page itself
// Form needs to be empty again
