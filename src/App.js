import React from "react";
import TodoList from "./components/TodoComponents/TodoList"
import TodoForm from "./components/TodoComponents/TodoForm"
import "./App.css"

const todoItems = [
  {
    name: "go for a stroll",
    id: "1",
    completed: false

  },
  {
    name: "buy bread",
    id: "2",
    completed: false

  },
  {
    name: "go home",
    id: "3",
    completed: false

  },

]

let todoItem = "";




class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state


  constructor() {

    super()
    this.state = {
      todoItems,
      todoItem,
    };
  }

  // logic here

  // Class methods to update state
  addItem = (e, item) => {
    e.preventDefault();

    const newItem = {
      name: item,
      id: Date.now(),
      completed: false
    };

    
    this.setState({
      todoItems: [...this.state.todoItems, newItem],
     
    });

   
  }

   
    
  

  // this is a method of App
  toggleItem = itemId => {
    console.log(itemId);

    this.setState({
      todoItems: this.state.todoItems.map(item => {
        console.log(item);
        if (itemId === item.id) {
          return {
            ...item,
            completed: !item.completed
          };
        }

        return item;
      })
    });
  };

  clearCompleted = e => {
    e.preventDefault();
    console.log(this.state.todoItems);
    this.setState({
      // returns the items that haven't been completed and purges
      // the ones that have been completed
      todoItems: this.state.todoItems.filter(item => item.completed === false)
    });
    console.log(this.state.todoItems);
  };

  

  render() {

    return (
      <div className="app-wrapper">
        <h2>Welcome to my Todo App!</h2>
        <TodoForm
          addItem={this.addItem}
          clearCompleted={this.clearCompleted}
        />
        <TodoList
          todoItems={this.state.todoItems}
          toggleItem={this.toggleItem}


        />

        <p className="copyright">Copyright {new Date().getFullYear()} - Luis Abellan</p>




      </div>
    );
  }
}
  



export default App
