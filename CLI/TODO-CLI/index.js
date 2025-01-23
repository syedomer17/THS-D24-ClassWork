const readline = require("readline-sync");
const {
  addTodo,
  updataTodo,
  deleteTodo,
  viewTodo,
  todos,
} = require("./operations.js");

console.log();
console.log(todos);

function main() {
  while (true) {
    console.clear();
    console.log("-------------------");
    console.log("welcome to todo-cli");
    console.log("*******************");

    const options = [
      "0.to Exit",
      "1.to addTodo",
      "2.to updataTodo",
      "3.to deleteTodo",
      "4.to viewTodo",
    ];
    console.log(options);

    const userInput = readline.questionInt("Enter your options: ");
    console.log(userInput);

    switch (userInput) {
      case 0:
        console.log("Thanks for using TODO-CLI");
        return;
      case 1:
        console.log("addTodo");
        addTodo();
        break;
      case 2:
        console.log("updateTodo");
        updataTodo();
        break;
      case 3:
        console.log("deleteTodo");
        deleteTodo();
        break;
      case 4:
        console.log("viewTodo");
        viewTodo();
        break;
        default:
            console.log("Invalid option. Please try again.");
    }
    
  }
}
const userDemand = readline
  .question("Do you want to continue? (yes/no): ")
  .toLowerCase();

if(userDemand=="yes"){
   main()
}else{
    console.log("Nice to meet you! Exiting...");
}
main();

readline.question("\nPress Enter to continue...");