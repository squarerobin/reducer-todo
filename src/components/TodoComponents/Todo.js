import React from "react";
const Todo = ({ todo, toggleCompleted }) => {
  console.log({ todo });
  return (
    <div
      key={todo.id}
      onClick={() => toggleCompleted(todo.id)}
      className={`item${todo.completed ? " completed" : ""}`}
    >
      <p className={`item${todo.completed ? " completed" : ""}`}>{todo.item}</p>
    </div>
  );
};

export default Todo;
