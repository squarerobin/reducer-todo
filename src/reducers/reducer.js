// reducers are functions that take in two objects - the current state, and an action object - and "reduces" them down to a single object, which is the new state, and return that new object.

// action objects are pieces of data that describe an event that just occurred in the UI. action object have a required 'type' property. They may also have a payload property to pass data into the reducer

// EVENT: click on edit icon to toggle editing state
// { type: "TOGGLE_EDITING" }

// STATE: { editing: false, title: 'Hello Earthlings' }

// EXPECTED RESULT: { editing: true }

export const initialState = {
  todoList: [
    {
      item: "go for a stroll",
      id: "1",
      completed: false
    },
    {
      item: "buy bread",
      id: "2",
      completed: false
    },
    {
      item: "go home",
      id: "3",
      completed: false
    }
  ]
};

export const reducer = (state, action) => {
  if (action.type === "ADD TODO") {
    return {
      ...state,
      todoList: [
        ...state.todoList,
        {
          item: action.payload,
          completed: false,
          id: Date.now()
        }
      ]
    };
  } else if (action.type === "CLEAR TODO") {
    return {
      ...state,
      todoList: state.todoList.filter(todo => !todo.completed)
    };
  } else if (action.type === "TOGGLE COMPLETED") {
    return {
      ...state,
      todoList: state.todoList.map(todo => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: !todo.completed
          };
        } else {
          return todo;
        }
      })
    };
  }
};