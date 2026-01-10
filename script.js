const buttons = document.querySelectorAll(".difficulty-button");
const selectionValue = document.querySelector(".selection-value");

const updateSelection = (selectedButton) => {
  buttons.forEach((button) => {
    button.classList.toggle("is-selected", button === selectedButton);
  });
  selectionValue.textContent = selectedButton.dataset.difficulty;
};

buttons.forEach((button) => {
  button.addEventListener("click", () => updateSelection(button));
});
