const quizDifficulty = document.querySelector(".quiz-difficulty");
const quizProgress = document.querySelector(".quiz-progress");
const quizQuestion = document.querySelector(".quiz-question");
const answerButtons = Array.from(document.querySelectorAll(".answer-button"));
const feedbackStatus = document.querySelector(".feedback-status");
const feedbackCorrect = document.querySelector(".feedback-correct");
const nextButton = document.querySelector(".next-button");
const quizResult = document.querySelector(".quiz-result");
const resultMessage = document.querySelector(".result-message");
const quizStage = document.querySelector(".quiz-stage");
const quizWarning = document.querySelector(".quiz-warning");
const warningNextButton = document.querySelector(".warning-next-button");
const nameGate = document.querySelector(".name-gate");
const nameInput = document.querySelector(".name-input");
const nameStartButton = document.querySelector(".name-start-button");
const nameWarning = document.querySelector(".name-warning");
const repeatModal = document.querySelector(".repeat-modal");
const repeatContinueButton = document.querySelector(
  ".repeat-continue-button"
);
const repeatCancelButton = document.querySelector(".repeat-cancel-button");
const repeatCloseButton = document.querySelector(".repeat-close-button");
let currentQuestionIndex = 0;
let correctCount = 0;
let hasAnswered = false;
let selectedSetKey = "easy";
let playerName = "";

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

const hardQuestions = [
  {
    question:
      "Which factor most limits our ability to forecast extinction risk under future climate scenarios?",
    answers: [
      "Nonlinear species–environment interactions",
      "Insufficient population monitoring",
      "Inaccurate climate models",
      "Limited understanding of trophic structure",
    ],
    correctIndex: 0,
  },
  {
    question:
      "Why can increasing protected area size fail to improve species persistence?",
    answers: [
      "Larger areas increase edge effects",
      "Species distributions shift beyond protected boundaries",
      "Protection lowers reproductive success",
      "Predators accumulate inside reserves",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Which population property most strongly determines vulnerability to demographic stochasticity?",
    answers: [
      "Absolute population size",
      "Generation time",
      "Effective population size",
      "Spatial dispersion",
    ],
    correctIndex: 0,
  },
  {
    question:
      "Which statement best explains why genetic rescue sometimes produces negative outcomes?",
    answers: [
      "It reduces local adaptation",
      "It increases genetic drift",
      "It lowers heterozygosity",
      "It accelerates inbreeding",
    ],
    correctIndex: 0,
  },
  {
    question:
      "Which condition most undermines the assumption that habitat corridors always benefit conservation?",
    answers: [
      "Corridors increase disease transmission",
      "Corridors reduce habitat quality",
      "Corridors alter predator–prey dynamics",
      "Corridors can facilitate invasive species spread",
    ],
    correctIndex: 3,
  },
  {
    question:
      "Which mechanism best explains why top predators disappear before herbivores in disturbed systems?",
    answers: [
      "Higher exposure to human conflict",
      "Slower life histories combined with energetic loss",
      "Reduced reproductive success in fragmented habitats",
      "Greater sensitivity to climate variability",
    ],
    correctIndex: 1,
  },
  {
    question: "Which metric is LEAST reliable as a proxy for ecosystem resilience?",
    answers: [
      "Species richness",
      "Functional trait diversity",
      "Network connectivity",
      "Phylogenetic uniqueness",
    ],
    correctIndex: 3,
  },
  {
    question: "Why does restoring census population size not guarantee long-term persistence?",
    answers: [
      "Genetic load may persist across generations",
      "Carrying capacity may fluctuate",
      "Mutation supply is insufficient",
      "Selection pressure is weakened",
    ],
    correctIndex: 0,
  },
  {
    question:
      "Which example represents a conservation success that masks long-term risk?",
    answers: [
      "Increasing population size with reduced Ne",
      "Habitat restoration without species return",
      "Predator reintroduction with prey decline",
      "Captive breeding with rapid release",
    ],
    correctIndex: 0,
  },
  {
    question:
      "Which assumption underlying many extinction models is most frequently violated in real systems?",
    answers: [
      "Closed population structure",
      "Density dependence",
      "Environmental stochasticity",
      "Random mating",
    ],
    correctIndex: 0,
  },
  {
    question:
      "Which factor most complicates defining “natural” reference states in conservation?",
    answers: [
      "Lack of historical data",
      "Pre-human ecosystems were static",
      "Human influence predates written records",
      "Species ranges were historically fixed",
    ],
    correctIndex: 2,
  },
  {
    question:
      "Which statement best captures the main risk of managing species at the edge of their climatic range?",
    answers: [
      "Reduced genetic variation",
      "Increased maladaptation under future conditions",
      "Increased competition",
      "Lower reproductive output",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Which process can cause ecosystem collapse WITHOUT immediate species extinctions?",
    answers: [
      "Loss of apex predators",
      "Functional role erosion",
      "Reduced species richness",
      "Habitat fragmentation",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Which conservation strategy is MOST sensitive to uncertainty in future selective pressures?",
    answers: [
      "Habitat preservation",
      "Corridor construction",
      "Community co-management",
      "Assisted migration",
    ],
    correctIndex: 3,
  },
  {
    question:
      "Which claim about biodiversity and ecosystem stability is MOST defensible across systems?",
    answers: [
      "More species always increases stability",
      "Stability depends primarily on keystone species",
      "Redundancy buffers systems until thresholds are crossed",
      "Stability is independent of biodiversity",
    ],
    correctIndex: 2,
  },
];

const impossibleQuestions = [
  {
    question:
      "Which premise must be true for “extinction risk” to be a mathematically well-defined quantity?",
    answers: [
      "Population trajectories are ergodic",
      "Future environments are statistically stationary",
      "Species identity is temporally invariant",
      "Observation does not influence population dynamics",
    ],
    correctIndex: 2,
  },
  {
    question:
      "At what point does adding biological realism to extinction models strictly decrease inferential power?",
    answers: [
      "When stochastic terms dominate deterministic structure",
      "When parameter uncertainty exceeds measurement resolution",
      "When causal pathways become underdetermined by data",
      "When models cease to be computationally tractable",
    ],
    correctIndex: 2,
  },
  {
    question:
      "Which conservation intervention most strongly violates counterfactual reasoning?",
    answers: [
      "Habitat preservation",
      "Genetic rescue",
      "Captive breeding",
      "Assisted migration",
    ],
    correctIndex: 3,
  },
  {
    question:
      "Why can effective population size (Ne) never serve as a sufficient condition for persistence?",
    answers: [
      "Ne fluctuates across generations",
      "Ne excludes demographic variance",
      "Ne assumes additive genetic architectures",
      "Ne encodes no information about future selection",
    ],
    correctIndex: 3,
  },
  {
    question:
      "Which statement renders the concept of “ecosystem stability” non-invariant?",
    answers: [
      "Stability depends on species richness",
      "Stability depends on disturbance frequency",
      "Stability depends on observer-defined state variables",
      "Stability depends on trophic structure",
    ],
    correctIndex: 2,
  },
  {
    question:
      "Which assumption must silently hold for the concept of a “keystone species” to remain coherent?",
    answers: [
      "Species interactions are linear",
      "Effects are scale-independent",
      "Causality is uniquely attributable",
      "Functional redundancy is absent",
    ],
    correctIndex: 2,
  },
  {
    question: "Which condition makes conservation outcomes fundamentally non-generalizable?",
    answers: [
      "Environmental heterogeneity",
      "Evolutionary contingency",
      "Human socio-political feedbacks",
      "Absence of universal ecological laws",
    ],
    correctIndex: 3,
  },
  {
    question: "Under which condition does biodiversity cease to be a meaningful explanatory variable?",
    answers: [
      "When diversity is low",
      "When diversity is high",
      "When functional roles overlap",
      "When explanatory power collapses under scale transformation",
    ],
    correctIndex: 3,
  },
  {
    question:
      "When does preventing extinction maximally increase epistemic uncertainty?",
    answers: [
      "When intervention suppresses selection",
      "When intervention stabilizes populations",
      "When counterfactual extinction pathways become unobservable",
      "When population growth is externally controlled",
    ],
    correctIndex: 2,
  },
  {
    question:
      "Which statement most directly blocks conservation biology from achieving Einstein-style predictive theory?",
    answers: [
      "Insufficient data",
      "Nonlinear dynamics",
      "Evolutionary novelty",
      "Inability to test alternate futures",
    ],
    correctIndex: 3,
  },
  {
    question:
      "Which variable cannot be coherently defined without circularity in extinction modeling?",
    answers: ["Carrying capacity", "Fitness", "Viability", "Risk"],
    correctIndex: 3,
  },
  {
    question:
      "When does a species cease to be the “same species” for conservation purposes?",
    answers: [
      "After reproductive isolation",
      "After functional role replacement",
      "After genomic divergence",
      "When identity depends on management goals",
    ],
    correctIndex: 3,
  },
  {
    question:
      "Which condition makes long-term conservation success logically undecidable?",
    answers: [
      "Rapid climate change",
      "Coevolutionary feedbacks",
      "Irreversibility of extinction",
      "Inability to observe non-intervention outcomes",
    ],
    correctIndex: 3,
  },
  {
    question:
      "Which assumption is most deeply embedded — yet least acknowledged — in conservation prioritization?",
    answers: [
      "Species are equally valuable",
      "Ecosystems have optimal states",
      "Human values are separable from science",
      "Extinction is objectively bad",
    ],
    correctIndex: 2,
  },
  {
    question:
      "Which claim about endangered land animals survives the strongest logical scrutiny?",
    answers: [
      "They should be protected",
      "They are ecologically irreplaceable",
      "Their loss destabilizes ecosystems",
      "No claim survives without value assumptions",
    ],
    correctIndex: 3,
  },
];

const resetFeedback = () => {
  feedbackStatus.textContent = "Choose an answer to begin.";
  feedbackCorrect.textContent = "";
  nextButton.classList.add("is-hidden");
};

const storedNamesKey = "quizPlayerNames";

const loadStoredNames = () => {
  try {
    return JSON.parse(localStorage.getItem(storedNamesKey) || "[]");
  } catch (error) {
    return [];
  }
};

const saveName = (name) => {
  const storedNames = loadStoredNames();
  if (!storedNames.includes(name)) {
    storedNames.push(name);
    localStorage.setItem(storedNamesKey, JSON.stringify(storedNames));
  }
};

const closeRepeatModal = () => {
  repeatModal.classList.add("is-hidden");
  repeatCloseButton.classList.add("is-hidden");
};

const showRepeatModal = () => {
  repeatModal.classList.remove("is-hidden");
  repeatCloseButton.classList.add("is-hidden");
  setTimeout(() => {
    repeatCloseButton.classList.remove("is-hidden");
  }, 3000);
};

const startQuizFlow = () => {
  nameGate.classList.add("is-hidden");
  quizStage.classList.remove("is-hidden");
  renderQuestion();
};

nameStartButton.addEventListener("click", () => {
  const submittedName = nameInput.value.trim();
  if (!submittedName) {
    nameWarning.textContent = "Please enter your name to continue.";
    nameWarning.classList.remove("is-hidden");
    return;
  }
  nameWarning.classList.add("is-hidden");
  playerName = submittedName;
  const storedNames = loadStoredNames();
  if (storedNames.includes(submittedName)) {
    showRepeatModal();
    return;
  }
  saveName(submittedName);
  startQuizFlow();
});

nameInput.addEventListener("keydown", (event) => {
  if (event.key !== "Enter") {
    return;
  }
  event.preventDefault();
  nameStartButton.click();
});

repeatContinueButton.addEventListener("click", () => {
  saveName(playerName);
  closeRepeatModal();
  startQuizFlow();
});

repeatCancelButton.addEventListener("click", () => {
  window.location.href = "index.html";
});

repeatCloseButton.addEventListener("click", () => {
  closeRepeatModal();
});

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
  hasAnswered = false;
  resetFeedback();
};

const showResult = () => {
  quizResult.classList.remove("is-hidden");
  resultMessage.textContent = `You got ${correctCount} out of ${currentQuestions.length} correct.`;
  nextButton.classList.add("is-hidden");
  if (selectedSetKey === "hard" && correctCount === currentQuestions.length) {
    localStorage.setItem("hardPerfectScore", "true");
  }
};

answerButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    if (hasAnswered) {
      return;
    }
    const questionData = currentQuestions[currentQuestionIndex];
    const correctIndex = questionData.correctIndex;
    const correctLetter = String.fromCharCode(65 + correctIndex);
    hasAnswered = true;
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

const handleAnswerSelection = (index) => {
  if (hasAnswered) {
    return;
  }
  const targetButton = answerButtons[index];
  if (!targetButton) {
    return;
  }
  targetButton.click();
};

document.addEventListener("keydown", (event) => {
  if (event.key.length !== 1) {
    return;
  }
  if (!quizStage.classList.contains("is-hidden")) {
    const activeElement = document.activeElement;
    if (activeElement && activeElement.matches("input, textarea")) {
      return;
    }
  } else {
    return;
  }
  const key = event.key.toLowerCase();
  const keyMap = { a: 0, b: 1, c: 2, d: 3 };
  if (!(key in keyMap)) {
    return;
  }
  event.preventDefault();
  handleAnswerSelection(keyMap[key]);
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Enter") {
    return;
  }
  if (nextButton.classList.contains("is-hidden")) {
    return;
  }
  event.preventDefault();
  nextButton.click();
});

warningNextButton.addEventListener("click", () => {
  window.location.href = "quiz.html?difficulty=Hard";
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
const questionSets = {
  easy: { label: "Easy", items: easyQuestions },
  medium: { label: "Medium", items: mediumQuestions },
  hard: { label: "Hard", items: hardQuestions },
  impossible: { label: "Impossible", items: impossibleQuestions },
};
selectedSetKey = questionSets[normalizedDifficulty]
  ? normalizedDifficulty
  : "easy";
const selectedSet = questionSets[selectedSetKey];
const hardUnlocked = localStorage.getItem("hardPerfectScore") === "true";
if (normalizedDifficulty === "impossible") {
  if (!hardUnlocked) {
    nameGate.classList.add("is-hidden");
    quizStage.classList.add("is-hidden");
    quizWarning.classList.remove("is-hidden");
    quizDifficulty.textContent = "Impossible";
  } else {
    localStorage.removeItem("hardPerfectScore");
    quizStage.classList.add("is-hidden");
    quizWarning.classList.add("is-hidden");
    nameGate.classList.remove("is-hidden");
  }
} else {
  quizStage.classList.add("is-hidden");
  quizWarning.classList.add("is-hidden");
  nameGate.classList.remove("is-hidden");
}
const currentQuestions = selectedSet.items;
quizDifficulty.textContent = selectedSet.label;
