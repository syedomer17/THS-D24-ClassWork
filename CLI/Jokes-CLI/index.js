const readline = require("readline-sync");
const { getJokeByCategory, getRandomJoke } = require("./operation.js");
function main() {
  while (true) {
    console.log("----------------------------------");
    console.log("------ Welcome To Jokes CLI ------");
    console.log("-----------------------------------");

    const options = [
        "Exit",
        "programming",
        "spooky",
        "pun"
        ];
    options.forEach((option, index) => {
      console.log(`${index}.${option}`);
    });

    const userInput = readline.questionInt("Enter your option: ");

    switch (userInput) {
      case 0:
        console.log("Thank you for using Jokes CLI.😊✨");
        return;
      case 1:
        getJokeByCategory();
        break;
      case 2:
        getRandomJoke();
        break;
      default:
        console.log("Invalid option. Please try again.❌");
    }
    readline.question("\npress Enter to continue...");
  }
}

main();
