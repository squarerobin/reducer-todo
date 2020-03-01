import React from "react";
import {todoReducer, initialState} from "../../reducers/todoReducer"

const Todo = () => {
  //  console.log(props)
  return (
    <div
      className={`item${state.item.completed ? " completed" : ""}`}
      onClick={() => state.toggleItem(state.item.id)}
    >
      <p>{state.item.item}</p>
    </div>
  )
}

export default Todo
