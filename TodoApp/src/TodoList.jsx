import { useState } from "react";
import {v4 as uuidv4} from "uuid";
export default function TodoList() {
  let [todos, setTodos] = useState([]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    setTodos([...todos, newTodo]);
    setNewTodo("");
  };
  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  return (
    <div>
      <input
        placeholder="Add a Task "
        value={newTodo}
        onChange={updateTodoValue}
      />

      <button onClick={addNewTask}>Add Task</button>
      <br />
      <br />
      <h3>Todo Task</h3>
      <ul>
        {todos.map((todo) => {
          return <li>{todo}</li>;
        })}
      </ul>
    </div>
  );
}
