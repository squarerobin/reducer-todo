// reducers are functions that take in two objects - the current state, and an action object - and "reduces" them down to a single object, which is the new state, and return that new object.

// action objects are pieces of data that describe an event that just occurred in the UI. action object have a required 'type' property. They may also have a payload property to pass data into the reducer

// EVENT: click on edit icon to toggle editing state
// { type: "TOGGLE_EDITING" }

// STATE: { editing: false, title: 'Hello Earthlings' }

// EXPTECTED RESULT: { editing: true }

export const initialState = {
         todoItems: [
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

      
  }
  
  export const todoListReducer = (state, action) => {
    console.log(action);
    switch (action.type) {


      default:
        return state;
    }
    
  };
  
  //console.log(titleReducer({ editing: false }, { type: 'TOGGLE_EDITING' }));
  