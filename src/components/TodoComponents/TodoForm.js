import React, { useState, useReducer } from "react";
import { initialState, todoListReducer } from "../../reducers/todoListReducer";
function TodoForm() {
  const [state, dispatch] = useReducer(initialState, todoListReducer);
  const [newInputText, setNewInputText] = useState("");

  const handleChanges = e => {
    // update state with each keystroke
    // console.log(e)
    setNewInputText(e.target.value);
    // console.log(state);
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
    <form>
      <input
        type="text"
        placeholder="Add new task here"
        name="newInputText"
        value={newInputText}
        onChange={handleChanges}
      ></input>
      <button
        className="add-to-do-btn"
        onClick={() =>
          dispatch({
            type: "ADD_TODO",
            payload: newInputText
          })
        }
      >
        <span>Add Todo</span>
      </button>
      <button
        className="clear-btn"
        onClick={() => dispatch({ type: "CLEAR_COMPLETED" })}
      >
        <span>Clear Completed</span>
      </button>
    </form>
  );
}
export default TodoForm;
