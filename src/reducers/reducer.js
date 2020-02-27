import React, { useReducer } from "react";

export const initialState = [
  {
    item: "Learn about reducers",
    completed: false,
    id: 3892987589
  },
  {
    item: "Learn about reducers",
    completed: false,
    id: 3892987589
  }
];

// Initial count is established

// We will use the same reducer we created in the previous section
export function reducer(state, action) {
  switch (action.type) {
    /*  case 'INCREASE':
      return { count: state.count + 1 }
    case 'DECREASE':
      return { count: state.count - 1 } */
    default:
      return state;
  }
}
