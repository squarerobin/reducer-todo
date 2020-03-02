import React, { useReducer } from "react";

const TodoList = ({ list, toggleCompleted }) => {
  return (
    <div className="todolist-wrapper">
      {list.map(todo => (
        <div
          key={todo.id}
          onClick={() => toggleCompleted(todo.id)}
          className={`item${todo.completed ? " completed" : ""}`}
        >
          <p>{todo.item}</p>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
