const readline = require("readline-sync");
const { askQuestion, restartQuiz, selectQuizType } = require("./app.js");

function main() {
  while (true) {
    console.log("----------------------------------");
    console.log("------ Welcome To Quiz CLI ------");
    console.log("-----------------------------------");

    const options = ["Exit", "askQuestion", "restartQuiz"];
    options.forEach((option, index) => {
      console.log(`${index}. ${option}`);
    });

    const userInput = readline.questionInt("Enter your option: ");

    switch (userInput) {
      case 0:
        console.log("Thank you for using Quiz CLI.😊✨");
        return;
      case 1:
        selectQuizType();
        break;
      case 2:
        askQuestion();
        break;
      case 3:
        restartQuiz();
        break;
      default:
        console.log("Invalid option. Please try again.❌");
    }

    readline.question("\nPress Enter to continue...");
  }
}

main();
