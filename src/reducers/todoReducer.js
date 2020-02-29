//TODO

import React, { useReducer } from "react";

export const initialState = [
  {
    item: "Learn about reducers",
    completed: false,
    id: 3892987588
  }
];

// Initial count is established

// We will use the same reducer we created in the previous section
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
