import React, { Component } from 'react';
import Items from "./Items";

export class SimpleTasks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      newTasks: ''      
    }; 
  }

  handleInputChange = (event) => {
  this.setState({[event.target.name]: event.target.value});
  };


  handleAddTask = () => {
  let itemArray = this.state.tasks;

  if (this.state.newTasks !== ""){
    itemArray.unshift({
      text: this.state.newTasks,
      key: Date.now()
    });

    this.setState({
      tasks: itemArray
    });

    this.state.newTasks = "";
  }
  console.log(itemArray);  
  }

  deleteItem = (key) => {
    let filteredItems = this.state.tasks.filter( (task) => {
      return (task.key !== key);
    });
   
    this.setState({
      tasks: filteredItems
    });
  }
 

  render() {

    return (

      <div className="App">
        <div  className="input-task">
        <input type="text"
          name="newTasks"
          className="input form-inline"
          placeholder="Task"
          value={this.state.newTasks}
          onChange={this.handleInputChange}/>
          <button onClick={this.handleAddTask} className="btn btn-primary btn-lg" >Add</button>
          </div>
          <Items entries={this.state.tasks}
          delete={this.deleteItem}/>
      </div>
    );
  }
}
