import React, {useReducer} from "react";
import Todo from "./Todo";
import {initialState, reducer} from "../../reducers/reducer"

const TodoList = props => {

  const [state, dispatch] = useReducer(reducer, initialState)


  return (
    <div className="todolist-wrapper">
      {props.todoItems.map(item => (
        <Todo key={item.id} item={item} toggleItem={props.toggleItem} />
      ))}

   
    </div>
  );
};

export default TodoList;
