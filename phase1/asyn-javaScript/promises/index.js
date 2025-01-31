const fs = require("fs/promises");
const readline = require("readline-sync");

const userInput = readline.question("Enter your name: ");

let output = fs.writeFile("simple.txt", userInput);

output
  .then(() => {
    console.log("It is resolved successfully");
    return fs.readFile("simple.txt");
  })
  .catch((error) => {
    console.log("It is rejected");
    console.log(error);
  });
