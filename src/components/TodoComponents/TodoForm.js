import React, { useState, useReducer } from "react";
import { initialState, reducer } from "../../reducers/reducer";
function TodoForm({ addTodo, clearTodo }) {
  const [state, dispatch] = useReducer(initialState, reducer);
  const [newTodo, setNewTodo] = useState("");

  const handleChanges = e => {
    // update state with each keystroke
    // console.log(e)
    setNewTodo(e.target.value);
    // console.log(state);
  };
  const handleSubmit = e => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  };

  const handleClearTodo = e => {
    e.preventDefault();
    clearTodo();
  };
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
  /* // class property to submit form
  /*  const submitItem = e => {
     e.preventDefault()
     props.addItem(e, state.todoItem1)
     setState({ todoItem1: "" })
   }; */
  /*  const clearCompleted = e => {
    e.preventDefault();
    this.setState({
      // returns the items that haven't been completed and purges
      // the ones that have been completed
      todoItems: state.todoItems.filter(item => item.completed === false)
    });
    console.log(state.todoItems);
  };  */

  // this is a method of App
  /* const toggleItem = itemId => {
    console.log(itemId);

    this.setState({
      todoItems: state.todoItems.map(item => {
        console.log(item);
        if (itemId === item.id) {
          return {
            ...item,
            completed: !item.completed
          };
        }

        return item;
      })
    });
  }; */

  return (
    <form onSubmit = {handleSubmit}>
      <input
        type="text"
        placeholder="Add new task here"
        name="newTodo"
        value={newTodo}
        onChange={handleChanges}
      ></input>
      <button className="add-to-do-btn" type="submit">
        <span>Add Todo</span>
      </button>
      <button className="clear-btn" type="submit" onClick={handleClearTodo}>
        <span>Clear Completed</span>
      </button>
    </form>
  );
}
export default TodoForm;
