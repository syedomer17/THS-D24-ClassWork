/*
ask the user to input n1 and n2 for sum 
pass the sum to the next .then block
ask the user to enter n3 and do n3+sum
and pass the n3+sum to the next .then block and print it
*/
const readline = require("readline-sync");
const fs = require("fs/promises");

fs.readFile("user.txt")
  .then(() => {
    const n1 = readline.questionInt("Enter the value of n1:");
    const n2 = readline.questionInt("Enter the value of n2:");
    const sum = n1 + n2;
    return sum; 
  })
  .then((sum) => {
    const n3 = readline.questionInt("Enter the value of n3:");
    const total = sum + n3;
    return total; 
  })
  .then((total)=>{
    console.log(`The sum of all n number is ${total}`);
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });
