// reducers are functions that take in two objects - the current state, and an action object - and "reduces" them down to a single object, which is the new state, and return that new object.

// action objects are pieces of data that describe an event that just occurred in the UI. action object have a required 'type' property. They may also have a payload property to pass data into the reducer

// EVENT: click on edit icon to toggle editing state
// { type: "TOGGLE_EDITING" }

// STATE: { editing: false, title: 'Hello Earthlings' }

// EXPTECTED RESULT: { editing: true }

export const initialState = {
    todoItems : [
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
      
        },
      
      ],
      
       
       todoItem: ""
      
      
  };
  
  export const todoListReducer = (state, action) => {
    console.log(state,action);
    switch (action.type) {
      case 'TOGGLE_ITEM':
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
        };
     
      
      default:
        return state;
    }
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
  };
  
  //console.log(titleReducer({ editing: false }, { type: 'TOGGLE_EDITING' }));
  