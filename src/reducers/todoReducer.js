//TODO

import React, { useReducer } from "react";

export const initialState = [
 
  {
    item: "",
    completed: false,
    id: Date.now()
  }
  
];

// Initial count is established

// We will use the same reducer we created in the previous section
export const todoReducer = (state, action) => {
  switch (action.type) {
    /*TODO  FIX this */
    case "TOGGLE_ITEM":
      return {
        ...state,
        completed: !state.completed
      };
    

    default:
      return state;
  }
}
