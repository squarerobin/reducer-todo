//TODO

import React, { useReducer } from "react";

export const initialState = [
  {
    item: "",
    id: new Date(),
    completed: false
  }
];


export function todoReducer(state, action) {
  switch (action.type) {
    
    case 'TOGGLE_ITEM':
    return {
        ...state,
        completed: !state.completed,
    };
    default:
      return state;
  }
}
