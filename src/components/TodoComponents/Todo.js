import React from "react";
import {todoReducer, initialState} from "../../reducers/todoReducer"

const Todo = props => {
    console.log(props)
  return (
    <div
    key={Date.now()+ Math.random()}
      className={`item${props.item.completed ? " completed" : ""}`}
      onClick={() => props.toggleItem(props.item.id)}
    >
      <p>{props.item.item}</p>
    </div>
  )
}

export default Todo
