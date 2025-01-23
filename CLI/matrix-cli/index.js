const readline = require("readline-sync");
const {
  Addition,
  subtration,
  Multiplication,
  diagonal,
  trace,
} = require("./operations.js");

function main() {
  while (true) {
    console.log("----------------------------------");
    console.log("------ Welcome To Matrix CLI ------");
    console.log("-----------------------------------");

    const options = [
      "Exit",
      "Addition",
      "Subtraction",
      "Multiplication",
      "Diagonal Check",
      "Trace",
    ];
    options.forEach((option, index) => {
      console.log(`${index}.${option}`);
    });

    const userInput = readline.questionInt("Enter your option: ");

    switch (userInput) {
      case 0:
        console.log("Thank you for using Matrix CLI.😊✨");
        return;
      case 1:
        Addition();
        break;
      case 2:
        subtration();
        break;
      case 3:
        Multiplication();
        break;
      case 4:
        diagonal();
        break;
      case 5:
        trace();
        break;
      default:
        console.log("Invalid option. Please try again.❌");
    }
    readline.question("\npress Enter to continue...");
  }
}

main();
