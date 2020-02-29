import React, { useState, useReducer } from "react";
import TodoList from "./components/TodoComponents/TodoList"
import TodoForm from "./components/TodoComponents/TodoForm"
import "./App.css"
import {initialState, appReducer} from "./reducers/appReducer"






function App() {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state



  // logic here

  /*   // Class methods to update state
    const addItem = (e, item) => {
      e.preventDefault();
  
      const newItem = {
        name: item,
        id: Date.now(),
        completed: false
      };
  
      
      this.setState({
        todoItems: [...state.todoItems, newItem],
       
      }); */

  return (
    <div className="app-wrapper">
      <h2>Welcome to my Todo App!</h2>
       <TodoForm/>
       <TodoList />




      

      <p className="copyright">Copyright {new Date().getFullYear()} - Luis Abellan</p>




    </div>
  );




}

export default App
