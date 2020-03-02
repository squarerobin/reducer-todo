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
export function todoReducer(state, action) {
  switch (action.type) {
    /*TODO  FIX this */
    case "TOGGLE_ITEM":
      return {
        ...state,
        completed: !state.completed
      };
    /*
      case "TOGGLE_ITEM":
        return {
          ...state,
          todoItems: state.todoItems.map(item => {
            // console.log(item);
            if (action.payload === item.id) {
              return {
                ...item,
                completed: !item.completed
              };
            }

            return item;
          })
        }; */
    // if (action.type === 'TOGGLE_EDITING') {
    //   return {
    //     ...state,
    //     editing: !state.editing
    //   };
    // } else if (action.type === 'UPDATE_TITLE') {
    //   return {
    //     ...state,
    //     title: action.payload,
    //     editing: false
    //   };
    // } else {
    //   return state;
    // }

    default:
      return state;
  }
}
