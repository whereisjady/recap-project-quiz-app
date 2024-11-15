console.clear();

// Bookmark Toggle
const bookmarkButton = document.querySelector('[data-js="bookmark-card"]');

bookmarkButton.addEventListener("click", () => {
  const icon = bookmarkButton.querySelector(".bookmark-icon");
  icon.classList.toggle("bookmarked");
});

// Answer Button

const showAnswerButton = document.querySelector(
  '[data-js="quiz__button-answer"]'
);
const quizAnswer = document.querySelector('[data-js="quiz-answer"]');

showAnswerButton.addEventListener("click", () => {
  quizAnswer.classList.toggle("quiz__answer--active");
});

// Show/hide the answer by clicking on 'Show the answer'
// Query the showAnswerButton
// Query the Quiz Answer
// Add a Click Eventlistener for the Show Answer Button
//
// Display the QuizAnswer by adding the class Quiz__answer--active to the answer element P
//
