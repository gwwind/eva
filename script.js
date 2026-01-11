const buttons = document.querySelectorAll(".difficulty-button");
const selectionValue = document.querySelector(".selection-value");
const selectionLabel = document.querySelector(".selection-label");
const startButton = document.querySelector(".start-button");
let currentDifficulty = "";

const openQuiz = (difficulty) => {
  const quizUrl = `quiz.html?difficulty=${encodeURIComponent(difficulty)}`;
  window.open(quizUrl, "_blank", "noopener,noreferrer");
};

const updateSelection = (selectedButton) => {
  buttons.forEach((button) => {
    button.classList.toggle("is-selected", button === selectedButton);
  });
  currentDifficulty = selectedButton.dataset.difficulty;
  selectionLabel.textContent = "Selected:";
  selectionValue.textContent = currentDifficulty;
};

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedDifficulty = button.dataset.difficulty;
    if (currentDifficulty === selectedDifficulty) {
      openQuiz(selectedDifficulty);
      return;
    }
    updateSelection(button);
  });
});

startButton.addEventListener("click", () => {
  if (!currentDifficulty) {
    selectionLabel.textContent = "Selected:";
    selectionValue.textContent = "Choose a difficulty first";
    return;
  }
  openQuiz(currentDifficulty);
});
