import React, { useEffect, useState } from "react";
import axios from "axios";

const TodoList = () => {
  const [todoData, setTodoData] = useState([]);

  const fetchTodo = async () => {
    try {
      const API_URL = "https://jsonplaceholder.typicode.com/todos";
      const response = await axios.get(API_URL);
      setTodoData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
  useEffect(() => {
    fetchTodo();
  }, []); // Dependency array

  return (
    <>
      <table border={1}>
        <thead>
          <tr>
            <th>UserId</th>
            <th>Id</th>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {todoData.map((item) => (
            <tr key={item.id}>
              <td>{item.userId}</td>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.completed ? "Completed" : "Pending"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TodoList;
