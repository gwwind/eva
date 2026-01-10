const quizDifficulty = document.querySelector(".quiz-difficulty");
const quizProgress = document.querySelector(".quiz-progress");
const quizQuestion = document.querySelector(".quiz-question");
const answerButtons = Array.from(document.querySelectorAll(".answer-button"));
const feedbackStatus = document.querySelector(".feedback-status");
const feedbackCorrect = document.querySelector(".feedback-correct");
const nextButton = document.querySelector(".next-button");
const quizResult = document.querySelector(".quiz-result");
const resultMessage = document.querySelector(".result-message");
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

const mediumQuestions = [
  {
    question:
      "Why are species with specialized diets more vulnerable to extinction?",
    answers: [
      "They are easier to locate",
      "Environmental changes affect them more strongly",
      "They compete less for resources",
      "They migrate less often",
    ],
    correctIndex: 1,
  },
  {
    question: "How does habitat fragmentation reduce animal survival?",
    answers: [
      "It increases competition between species",
      "It limits movement and access to resources",
      "It changes animal behavior instantly",
      "It improves predator efficiency",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Which factor most directly explains why elephants influence many other species?",
    answers: [
      "Their size discourages predators",
      "Their movement patterns spread seeds and reshape vegetation",
      "Their long lifespan stabilizes populations",
      "Their social structure controls group behavior",
    ],
    correctIndex: 1,
  },
  {
    question: "Why can removing a single predator species alter an entire ecosystem?",
    answers: [
      "Predators consume many different species",
      "Predators prevent prey populations from expanding excessively",
      "Predators migrate across multiple habitats",
      "Predators are genetically diverse",
    ],
    correctIndex: 1,
  },
  {
    question: "Why is illegal wildlife trade especially harmful to animals like rhinos?",
    answers: [
      "They live in limited geographic regions",
      "Their reproduction rate is slow relative to removal",
      "They require large quantities of food",
      "Their habitats are already protected",
    ],
    correctIndex: 1,
  },
  {
    question: "How does climate change indirectly threaten land animals?",
    answers: [
      "By forcing immediate behavioral changes",
      "By altering ecosystems faster than species can adapt",
      "By increasing competition between predators",
      "By removing natural predators",
    ],
    correctIndex: 1,
  },
  {
    question: "Why are large carnivores often absent from disturbed habitats?",
    answers: [
      "They avoid human presence completely",
      "They require stable prey populations and large territories",
      "They reproduce more slowly than herbivores",
      "They are less adaptable to new climates",
    ],
    correctIndex: 1,
  },
  {
    question: "Which scenario best represents a trophic cascade?",
    answers: [
      "Loss of forest cover reduces rainfall",
      "Predator decline leads to overgrazing by herbivores",
      "Seasonal migration alters food availability",
      "Increased rainfall improves plant growth",
    ],
    correctIndex: 1,
  },
  {
    question: "What is the primary purpose of wildlife corridors?",
    answers: [
      "To increase total habitat area",
      "To maintain genetic exchange between populations",
      "To reduce predator movement",
      "To control animal migration routes",
    ],
    correctIndex: 1,
  },
  {
    question: "Why is habitat restoration considered a long-term conservation strategy?",
    answers: [
      "It focuses on individual species recovery",
      "It supports ecological processes and multiple species",
      "It prevents all future habitat loss",
      "It eliminates human involvement",
    ],
    correctIndex: 1,
  },
  {
    question: "Why does biodiversity increase ecosystem stability?",
    answers: [
      "Diverse systems grow faster",
      "Multiple species can perform overlapping ecological roles",
      "Biodiversity reduces competition",
      "Diverse ecosystems are less affected by climate",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Which conservation approach best addresses underlying causes of endangerment?",
    answers: [
      "Captive breeding programs",
      "Enforcing habitat protection policies",
      "Relocating animals to safer areas",
      "Increasing public awareness campaigns",
    ],
    correctIndex: 1,
  },
  {
    question: "Why is extinction considered a permanent loss?",
    answers: [
      "Evolution cannot create new species",
      "Ecological relationships built over time cannot be replaced",
      "Ecosystems stop functioning immediately",
      "New species require human intervention",
    ],
    correctIndex: 1,
  },
  {
    question: "Which outcome is most likely if a keystone species disappears?",
    answers: [
      "Temporary population decline",
      "Major changes in ecosystem structure",
      "Replacement by similar species",
      "No noticeable effect",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Which statement best reflects why endangered land animals matter to humans?",
    answers: [
      "They provide scientific data",
      "They contribute to stable ecosystems that support human life",
      "They attract tourism",
      "They are culturally significant",
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
  const questionData = currentQuestions[currentQuestionIndex];
  quizProgress.textContent = `Question ${currentQuestionIndex + 1} of ${
    currentQuestions.length
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
  resultMessage.textContent = `You got ${correctCount} out of ${currentQuestions.length} correct.`;
  nextButton.classList.add("is-hidden");
};

answerButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const questionData = currentQuestions[currentQuestionIndex];
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
  if (currentQuestionIndex < currentQuestions.length - 1) {
    currentQuestionIndex += 1;
    renderQuestion();
    return;
  }
  showResult();
});

const params = new URLSearchParams(window.location.search);
const difficultyParam = params.get("difficulty") || "Easy";
const normalizedDifficulty = difficultyParam.toLowerCase();
const currentQuestions =
  normalizedDifficulty === "medium" ? mediumQuestions : easyQuestions;
quizDifficulty.textContent =
  normalizedDifficulty === "medium" ? "Medium" : "Easy";
renderQuestion();
