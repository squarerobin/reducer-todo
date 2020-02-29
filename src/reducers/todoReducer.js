//TODO

import React, { useReducer } from "react";

export const initialState = [
  {
    item: action.payload,
    id: Date.now(),
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
