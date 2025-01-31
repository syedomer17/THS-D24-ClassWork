const readline = require("readline-sync");
const ask = require("./question.js")

let score = 0;
let currentQuestionIndex = 0;
let selectedQuiz = [];

const questionsPool = ask;

function selectQuizType() {
  console.log("Available Quiz Types:");
  const quizTypes = Object.keys(questionsPool);
  quizTypes.forEach((quiz, index) => {
    console.log(`${index + 1}.${quiz}`);
  });

  let selectedIndex = readline.questionInt(
    "Enter the number of the quiz type you want to play: "
  );

  while (selectedIndex < 1 || selectedIndex > quizTypes.length) {
    console.log("Invalid input. Please select a valid quiz number.");
    selectedIndex = readline.questionInt(
      "Enter the number of the quiz type you want to play: "
    );
  }

  const selectedType = quizTypes[selectedIndex - 1];
  selectedQuiz = questionsPool[selectedType];
  console.log(`You selected the "${selectedType}" quiz. Let's begin!`);
}

function askQuestion() {
  if (currentQuestionIndex < selectedQuiz.length) {
    const question = selectedQuiz[currentQuestionIndex];
    console.log(`Question ${currentQuestionIndex + 1}: ${question.question}`);
    question.options.forEach((option, index) => {
      console.log(`${index + 1}. ${option}`);
    });

    let userAnswer =
      readline.questionInt("Your should select one option between (1 to 4): ") -
      1;

    while (userAnswer < 0 || userAnswer >= question.options.length) {
      console.log("Invalid input. Please enter a number between 1 and 4.");
      userAnswer =
        readline.questionInt(
          "Your should select one option between (1 to 4): "
        ) - 1;
    }

    if (userAnswer === question.answer) {
      console.log("Correct! 🎉");
      score++;
    } else {
      score--;
      console.log("Wrong! ❌");
      console.log(`Correct Answer: ${question.options[question.answer]}`);
    }

    currentQuestionIndex++;
    askQuestion();
  } else {
    console.log(
      `The Quiz is over! Your score is ${score}/${selectedQuiz.length}`
    );
    restartQuiz();
  }
}

function restartQuiz() {
  const response = readline
    .question("Do you want to restart the Quiz? (yes/no): ")
    .trim()
    .toLowerCase();

  if (response === "yes") {
    score = 0;
    currentQuestionIndex = 0;
    selectQuizType();
    askQuestion();
  } else {
    console.log("Thank you for playing the Quiz! 😊");
  }
}

console.log("Welcome to the Quiz!");
selectQuizType();
askQuestion();

module.exports = { restartQuiz, askQuestion, selectQuizType };
