// Importing React's useState hook and CSS
import { useState } from "react";
import "./index.css";

// Component Initialization
const ToDoComponent = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  // Helper Function to Generate a Random ID
  const generateID = () => {
    return Math.floor(Math.random() * 100);
  };

  // Handling the Form Submission
  const submitHandler = () => {
    // This checks if the input field is empty (after trimming spaces).
    //If it is, an alert is shown, and the function exits with return (so no empty tasks are added).
    if (input.trim() === "") {
      alert("Task cannot be empty!");
      return;
    }
    setTodos((todo) =>
      todo.concat({
        text: input, //text: input is the task text that the user entered.
        id: generateID(), //id: generateID() provides a unique ID for each task.
      })
    );
    setInput("");
  };

  // Handling Task Removal
  const removeTodo = (id) => {
    setTodos((todos) => todos.filter((t) => t.id !== id));
  };

  return (
    <>
      <h2>
        React ToDo App || <span id="Info">Shiva-WebDev</span>
      </h2>
      <div className="container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a New Task"
        />
        <button onClick={submitHandler}>Submit</button>
        <ul className="todo-list">
          {todos.length > 0 ? (
            todos.map(({ text, id }) => (
              <li key={id} className="todo">
                <span id="todo-text">{text}</span>
                <button className="close" onClick={() => removeTodo(id)}>
                  x
                </button>
              </li>
            ))
          ) : (
            <h3>No Tasks Available</h3>
          )}
        </ul>
      </div>
    </>
  );
};

export default ToDoComponent;
