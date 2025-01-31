const readlineSync = require("readline-sync");

const todos = [
  {
    title: "learn js",
    isDone: false,
  },
];

function addTodo() {
  const title = readlineSync.question("Enter your title name: ");
  while (!title) {
    console.log("Enter the valid title");
    const title = readlineSync.question("Enter your title name: ");
  }
  const newtodo = {
    title: title,
    isDone: false,
  };
  todos.push(newtodo);
  console.log(`the new todo title is ${title}`);
}
function updataTodo() {
  console.log("Todos list:");
  console.log("Todos list:");
  for (let i = 0; i < todos.length; i++) {
    console.log(
      `${i + 1}. ${todos[i].title} - ${todos[i].isDone ? "Done" : "Not Done"}`
    );
  }

  const index =
    readlineSync.questionInt("Enter the number of the todo to mark as Done: ") -
    1;

  if (index >= 0 && index < todos.length) {
    todos[index].isDone = true;
    console.log(`Todo "${todos[index].title}" is marked as done.`);
  } else {
    console.log("Invalid number. Please try again.");
  }
}
function deleteTodo() {
  console.log("Todos list:");
  for (let i = 0; i < todos.length; i++) {
    console.log(
      `${i + 1}. ${todos[i].title} - ${todos[i].isDone ? "Done" : "Not Done"}`
    );
  }
  const index =
    readlineSync.questionInt("Enter the number of the todo to delete: ") - 1;
  if (index >= 0 && index < todos.length) {
    const removed = todos.splice(index, 1);
    console.log(`Todo "${removed[0].title}" is deleted.`);
  } else {
    console.log("Invalid number. Please try again.");
  }
}

function viewTodo() {
  for (let i = 0; i < todos.length; i++) {
    console.log(
      `${i + 1}. ${todos[i].title} - ${todos[i].isDone ? "Done" : "Not Done"}`
    );
  }
}
module.exports = {
  addTodo,
  updataTodo,
  deleteTodo,
  viewTodo,
  todos,
};
