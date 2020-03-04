import React from "react";
import Todo from "./Todo";

const TodoList = ({ list, toggleCompleted }) => {
  return (
    <div className="todolist-wrapper">
      {list.map(todo => (
        <Todo key={todo.id} todo={todo} toggleCompleted={toggleCompleted} />
      ))}
    </div>
  );
};

export default TodoList;
