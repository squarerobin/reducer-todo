//TODO

import React, { useReducer } from "react";

export const initialState = [
 
    {
      item: "go for a stroll",
      id: Date.now() + Math.random(),
      completed: false
    },
    {
      item: "buy bread",
      id: Date.now() + Math.random(),
      completed: false
    },
    {
      item: "go home",
      id: Date.now() + Math.random(),
      completed: false
    }
  
]

// Initial count is established

// We will use the same reducer we created in the previous section
export const appReducer = (state, action) => {
  switch (action.type) {
   

    default:
      return state;
  }
};
