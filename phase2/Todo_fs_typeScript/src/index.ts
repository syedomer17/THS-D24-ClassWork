//@ts-ignore
// const readlineSync = require("readline-sync");
import readlineSync from "readline-sync"
import {addTodo,updateTodo,deleteTodo, viewTodo} from "./operations"

// const {
//   addTodo,
//   updateTodo,
//   deleteTodo,
//   viewTodo,
// } = require("./operations.js");

async function main() {
  console.clear(); //clear the terminal, before printing the menu
  console.log("---------- Welcome to TODO CLI ----------------");
  console.log(`
       0. Press 0 to exit
       1. Press 1 to add todo 
       2. Press 2 to update todo 
       3. Press 3 to delete todo 
       4. Press 4 to view todo 
    `);

  const userChoice : number = readlineSync.questionInt("What do you want to go for?: ");

  switch (userChoice) {
    case 0:
      console.log("Thank for using TODO CLI");
      return;

    case 1:
      await addTodo();
      break;

    case 2:
      await updateTodo();
      break;

    case 3:
      await deleteTodo();
      break;

    case 4:
      await viewTodo();
      break;

    default:
      console.log("Invalid Option Selected");
  }

  const userContinue : string = readlineSync.question(
    "Do you want to continue? (y/n):  "
  );
  if (userContinue == "y") {
    main();
  } else {
    console.log("Thank for using TODO CLI");
  }
}

main();
