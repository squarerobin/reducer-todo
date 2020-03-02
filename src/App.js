import React, { useState } from "react";
import TodoList from "./components/TodoComponents/TodoList"
import TodoForm from "./components/TodoComponents/TodoForm"
import "./App.css"






function App() {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state




  // logic here



  return (
    <div className="app-wrapper">
      <h2>Welcome to my Todo App!</h2>
       <TodoForm />
       <TodoList />


      <p className="copyright">Copyright {new Date().getFullYear()} - Luis Abellan</p>




    </div>
  );




}

export default App
