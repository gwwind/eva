const buttons = document.querySelectorAll(".difficulty-button");
const selectionValue = document.querySelector(".selection-value");
const selectionLabel = document.querySelector(".selection-label");
const startButton = document.querySelector(".start-button");
const quizStage = document.querySelector(".quiz-stage");
const quizDifficulty = document.querySelector(".quiz-difficulty");
const quizProgress = document.querySelector(".quiz-progress");
const quizQuestion = document.querySelector(".quiz-question");
const answerButtons = Array.from(document.querySelectorAll(".answer-button"));
const feedbackStatus = document.querySelector(".feedback-status");
const feedbackCorrect = document.querySelector(".feedback-correct");
const nextButton = document.querySelector(".next-button");
const quizResult = document.querySelector(".quiz-result");
const resultMessage = document.querySelector(".result-message");
let currentDifficulty = "";
let currentQuestionIndex = 0;
let correctCount = 0;

const easyQuestions = [
  {
    question:
      "Which animal is endangered mainly because people hunt it for its ivory?",
    answers: ["Tiger", "Elephant", "Panda", "Bear"],
    correctIndex: 1,
  },
  {
    question: "Which animal is endangered because its habitat is melting?",
    answers: ["Lion", "Elephant", "Polar bear", "Zebra"],
    correctIndex: 2,
  },
  {
    question: "What does “endangered” mean?",
    answers: [
      "An animal is very common",
      "An animal may disappear forever",
      "An animal is a pet",
      "An animal lives in water",
    ],
    correctIndex: 1,
  },
  {
    question: "Which of these animals lives mainly in Asia?",
    answers: ["Lion", "Panda", "Jaguar", "Wolf"],
    correctIndex: 1,
  },
  {
    question: "Why are rhinos endangered?",
    answers: [
      "They sleep too much",
      "They are hunted for their horns",
      "They cannot run fast",
      "They eat too much",
    ],
    correctIndex: 1,
  },
  {
    question: "Which of these actions helps endangered animals the MOST?",
    answers: [
      "Cutting forests",
      "Protecting national parks",
      "Buying animal products",
      "Making loud noises",
    ],
    correctIndex: 1,
  },
  {
    question: "Which animal needs large areas of land to survive?",
    answers: ["Frog", "Tiger", "Mouse", "Chicken"],
    correctIndex: 1,
  },
  {
    question: "What happens when animals lose their habitat?",
    answers: [
      "Their population can decrease",
      "They become pets",
      "They grow faster",
      "Nothing changes",
    ],
    correctIndex: 0,
  },
  {
    question: "Which animal is known for living in family groups called herds?",
    answers: ["Leopard", "Elephant", "Panda", "Fox"],
    correctIndex: 1,
  },
  {
    question: "Which animal is endangered due to deforestation?",
    answers: ["Panda", "Camel", "Horse", "Sheep"],
    correctIndex: 0,
  },
  {
    question: "Why is protecting forests important?",
    answers: [
      "Forests are pretty",
      "Forests give animals food and shelter",
      "Forests make noise",
      "Forests stop rain",
    ],
    correctIndex: 1,
  },
  {
    question: "Which animal is a top predator?",
    answers: ["Deer", "Tiger", "Rabbit", "Cow"],
    correctIndex: 1,
  },
  {
    question: "Which continent has the most endangered land animals?",
    answers: ["Antarctica", "Asia", "Europe", "Australia"],
    correctIndex: 1,
  },
  {
    question: "What can climate change do to animals?",
    answers: [
      "Improve their homes",
      "Change or destroy their habitats",
      "Teach them new skills",
      "Make them disappear instantly",
    ],
    correctIndex: 1,
  },
  {
    question: "Why should humans care about endangered animals?",
    answers: [
      "Animals are not important",
      "Animals help keep ecosystems balanced",
      "Animals are toys",
      "Animals only matter in zoos",
    ],
    correctIndex: 1,
  },
];

const resetFeedback = () => {
  feedbackStatus.textContent = "Choose an answer to begin.";
  feedbackCorrect.textContent = "";
  nextButton.classList.add("is-hidden");
};

const renderQuestion = () => {
  const questionData = easyQuestions[currentQuestionIndex];
  quizProgress.textContent = `Question ${currentQuestionIndex + 1} of ${
    easyQuestions.length
  }`;
  quizQuestion.textContent = questionData.question;
  answerButtons.forEach((button, index) => {
    button.disabled = false;
    button.classList.remove("is-correct", "is-incorrect");
    button.textContent = `${String.fromCharCode(65 + index)}) ${
      questionData.answers[index]
    }`;
  });
  resetFeedback();
};

const showResult = () => {
  quizResult.classList.remove("is-hidden");
  resultMessage.textContent = `You got ${correctCount} out of ${easyQuestions.length} correct.`;
  nextButton.classList.add("is-hidden");
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
  button.addEventListener("click", () => updateSelection(button));
});

startButton.addEventListener("click", () => {
  if (!currentDifficulty) {
    selectionLabel.textContent = "Selected:";
    selectionValue.textContent = "Choose a difficulty first";
    return;
  }
  const quizUrl = `${window.location.pathname}?difficulty=${encodeURIComponent(
    currentDifficulty
  )}`;
  window.open(quizUrl, "_blank", "noopener,noreferrer");
  selectionLabel.textContent = "Starting:";
  selectionValue.textContent = currentDifficulty;
  quizDifficulty.textContent = currentDifficulty;
  quizStage.classList.remove("is-hidden");
  quizResult.classList.add("is-hidden");
  currentQuestionIndex = 0;
  correctCount = 0;
  renderQuestion();
  quizStage.scrollIntoView({ behavior: "auto", block: "start" });
});

answerButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const questionData = easyQuestions[currentQuestionIndex];
    const correctIndex = questionData.correctIndex;
    const correctLetter = String.fromCharCode(65 + correctIndex);
    answerButtons.forEach((btn, btnIndex) => {
      btn.disabled = true;
      if (btnIndex === correctIndex) {
        btn.classList.add("is-correct");
      }
    });
    if (index === correctIndex) {
      feedbackStatus.textContent = "You're correct!";
      feedbackCorrect.textContent = "Nice job! 🎉";
      correctCount += 1;
    } else {
      button.classList.add("is-incorrect");
      feedbackStatus.textContent = "Incorrect.";
      feedbackCorrect.textContent = `Correct answer: ${correctLetter}) ${questionData.answers[correctIndex]}`;
    }
    nextButton.classList.remove("is-hidden");
  });
});

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < easyQuestions.length - 1) {
    currentQuestionIndex += 1;
    renderQuestion();
    return;
  }
  showResult();
});
