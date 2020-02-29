import React, {useState, useReducer} from "react";
import { todoFormReducer, initialState } from '../../reducers/todoFormReducer';

function TodoForm() {
  const [state, dispatch] = useReducer(todoFormReducer, initialState)
  const [newInputText, setNewInputText] = useState('');



 const handleChanges = e => {
    // update state with each keystroke
    // console.log(e)
    setNewInputText(e.target.value)
    // console.log(state);
  };

  // class property to submit form
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
    <form onSubmit={()=>dispatch({type:'SUBMIT_ITEM'})}>
      <input
        type="text"
        placeholder="Add new task here"
        name="newInputText"
        value={newInputText}
        onChange={handleChanges}
      ></input>
      <button className="add-to-do-btn" onClick={()=>dispatch({type:'ADD_TODO'})}>
        <span>Add Todo</span>
      </button>
      <button className="clear-btn" onClick={() => dispatch({type: 'CLEAR_COMPLETED'})}>
        <span>Clear Completed</span>
      </button>
    </form>
  )


}
export default TodoForm
