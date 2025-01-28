const readlineSync = require("readline-sync");
const fs = require("fs/promises");

let todos = []; 

async function addTodo() {
  try {
    let title = readlineSync.question("Enter your title name: ");

    while (!title) {
      console.log("Enter a valid title.");
      title = readlineSync.question("Enter your title name: ");
    }

    const newTodo = {
      title: title,
      isDone: false,
    };

    todos.push(newTodo);
    console.log(`The new todo title is "${title}"`);

    let data = await fs.readFile("todos.json", "utf-8");
    todos = JSON.parse(data);

    todos.push(newTodo);

    await fs.writeFile("todos.json", JSON.stringify(todos, null, 2));
  } catch (error) {
    console.log(error);
  }
}

async function updateTodo() {
  try {
    console.log("Todos list:");
    for (let i = 0; i < todos.length; i++) {
      console.log(
        `${i + 1}. ${todos[i].title} - ${todos[i].isDone ? "Done" : "Not Done"}`
      );
    }

    const index =
      readlineSync.questionInt(
        "Enter the number of the todo to mark as Done: "
      ) - 1;

    if (index >= 0 && index < todos.length) {
      todos[index].isDone = true;
      console.log(`Todo "${todos[index].title}" is marked as done.`);
      await fs.writeFile("todos.json", JSON.stringify(todos, null, 2));
    } else {
      console.log("Invalid number. Please try again.");
    }
  } catch (error) {
    console.log(error);
  }
}

async function deleteTodo() {
  try {
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
      await fs.writeFile("todos.json", JSON.stringify(todos, null, 2));
    } else {
      console.log("Invalid number. Please try again.");
    }
  } catch (error) {
    console.log(error);
  }
}

async function viewTodo() {
  try {
    if (todos.length === 0) {
      console.log("No todos available.");
    } else {
      for (let i = 0; i < todos.length; i++) {
        console.log(
          `${i + 1}. ${todos[i].title} - ${
            todos[i].isDone ? "Done" : "Not Done"
          }`
        );
      }
    }
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  addTodo,
  updateTodo,
  deleteTodo,
  viewTodo,
  todos,
};
