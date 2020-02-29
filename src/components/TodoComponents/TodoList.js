import React, {useReducer} from "react";
import Todo from "./Todo";
import {initialState, todoListReducer} from "../../reducers/TodoListReducer"

const TodoList = (props) => {

  const [state, dispatch] = useReducer(todoListReducer, initialState)

console.log('TodoListjs state:', state)
/* 
 // this is a method of App
   const toggleItem = itemId => {
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
  };  */

  return (
    <div className="todolist-wrapper">
      {state.todoItems.map(item => (
    <Todo key={item.id} item={item} toggleItem={()=>dispatch({type: 'TOGGLE_ITEM'})} />
      ))}

   
    </div>
  );
};

export default TodoList;
