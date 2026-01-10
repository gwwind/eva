const buttons = document.querySelectorAll(".difficulty-button");
const selectionValue = document.querySelector(".selection-value");
const selectionLabel = document.querySelector(".selection-label");
const startButton = document.querySelector(".start-button");
let currentDifficulty = "";

const updateSelection = (selectedButton) => {
  buttons.forEach((button) => {
    button.classList.toggle("is-selected", button === selectedButton);
  });
  currentDifficulty = selectedButton.dataset.difficulty;
  selectionLabel.textContent = "Selected:";
  selectionValue.textContent = currentDifficulty;
};

buttons.forEach((button) => {
  button.addEventListener("click", () => updateSelection(button));
});

startButton.addEventListener("click", () => {
  if (!currentDifficulty) {
    selectionLabel.textContent = "Selected:";
    selectionValue.textContent = "Choose a difficulty first";
    return;
  }
  const quizUrl = `quiz.html?difficulty=${encodeURIComponent(
    currentDifficulty
  )}`;
  window.open(quizUrl, "_blank", "noopener,noreferrer");
});
