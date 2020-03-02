
// reducers are functions that take in two objects - the current state, and an action object - and "reduces" them down to a single object, which is the new state, and return that new object.

// action objects are pieces of data that describe an event that just occurred in the UI. action object have a required 'type' property. They may also have a payload property to pass data into the reducer

// EVENT: click on edit icon to toggle editing state
// { type: "TOGGLE_EDITING" }

// STATE: { editing: false, title: 'Hello Earthlings' }

// EXPECTED RESULT: { editing: true }



  
  export const todoFormReducer = (state, action) => {
    //console.log(action);
    let newState;

    switch (action.type) {
     
      /* case 'SUBMIT_FORM':
        console.log(action.payload)
        newState = {
          ...state,
          todoItem: action.payload,
              }
         return newState */
        
       
    

            
            
      default:
        return state;
    }
    
  };
  
  