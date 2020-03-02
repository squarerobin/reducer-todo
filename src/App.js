import React, { useReducer } from "react";
import TodoList from "./components/TodoComponents/TodoList"
import TodoForm from "./components/TodoComponents/TodoForm"
import "./App.css"
import {initialState, reducer} from "./reducers/reducer" 





function App() {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  const [state, dispatch] = useReducer(reducer, initialState);



  // logic here

 const addTodo = newTodo => {
   dispatch({ type: "ADD TODO", payload: newTodo });
 };

 const toggleCompleted = id => {
   dispatch({ type: "TOGGLE COMPLETED", payload: id });
 };

 const clearTodo = () => {
   dispatch({ type: "CLEAR TODO" });
 };


  return (
    <div className="app-wrapper">
      <h2>Welcome to my Todo App!</h2>
      <TodoForm addTodo={addTodo} clearTodo={clearTodo} />
      <TodoList toggleCompleted={toggleCompleted} list={state.todoList} />

      <p className="copyright">
        Copyright {new Date().getFullYear()} - Luis Abellan
      </p>
    </div>
  );




}

export default App
