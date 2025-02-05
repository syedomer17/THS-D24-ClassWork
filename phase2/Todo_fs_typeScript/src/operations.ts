//@ts-ignore
import readlineSync from "readline-sync"
import fs from "fs/promises";

type Todo = {
  title: string;
  isDone: boolean;
};

async function readTodoFile(): Promise<string> {
  return fs.readFile("todos.json","utf-8");
}

async function writeTodoFile(data: string): Promise<void> {
  await fs.writeFile("todos.json", data);
}

async function addTodo(): Promise<void> {
  try {
    let title: string = readlineSync.question(
      "Enter the title of the new todo item: "
    );

    while (!title) {
      console.log("Please add a valid todo");
      title = readlineSync.question("Enter the title of the new todo item: ");
    }

    let newTodo: Todo = {
      title,
      isDone: false,
    };

    let todosData = await readTodoFile();
    let todosArray: Todo[] = todosData ? JSON.parse(todosData) : [];

    todosArray.push(newTodo);

    await writeTodoFile(JSON.stringify(todosArray));
  } catch (error) {
    console.error("Error adding todo:", error);
  }
}

async function updateTodo(): Promise<void> {
  try {
    let todosData = await readTodoFile();
    let todos: Todo[] = JSON.parse(todosData);

    todos.forEach((todo, index) => {
      const status = todo.isDone ? "[Done]" : "[Not Done]";
      console.log(`${index + 1}. ${todo.title} ${status}`);
    });

    const index: number =
      readlineSync.questionInt(
        "Enter the number of the todo to mark as done: "
      ) - 1;

    if (index >= 0 && index < todos.length) {
      if (todos[index].isDone) {
        console.log(`"${todos[index].title}" is already marked as done.`);
      } else {
        todos[index].isDone = true;
        console.log(`"${todos[index].title}" has been marked as done.`);
        await writeTodoFile(JSON.stringify(todos));
      }
    } else {
      console.log("Invalid selection. Please enter a valid number.");
    }
  } catch (error) {
    console.error("Error updating todo:", error);
  }
}

async function deleteTodo(): Promise<void> {
  try {
    let todosData = await readTodoFile();
    let todos: Todo[] = JSON.parse(todosData);

    todos.forEach((todo, index) => {
      console.log(
        `${index + 1}. ${todo.title} - ${todo.isDone ? "Done" : "Not Done"}`
      );
    });

    const index: number =
      readlineSync.questionInt("Enter the number of the todo to delete: ") - 1;

    if (index >= 0 && index < todos.length) {
      const removed = todos.splice(index, 1);
      console.log(`Todo "${removed[0].title}" is deleted.`);
      await writeTodoFile(JSON.stringify(todos));
    } else {
      console.log("Invalid number. Please try again.");
    }
  } catch (error) {
    console.error("Error deleting todo:", error);
  }
}

async function viewTodo(): Promise<void> {
  try {
    let todosData = await readTodoFile();
    let todos: Todo[] = JSON.parse(todosData);

    todos.forEach((todo, index) => {
      const status = todo.isDone ? "[Done]" : "[Not Done]";
      console.log(`${index + 1}. ${todo.title} ${status}`);
    });
  } catch (error) {
    console.error("Error viewing todos:", error);
  }
}

export { addTodo, updateTodo, deleteTodo, viewTodo };
