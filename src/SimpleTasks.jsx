import React, { Component } from 'react';
import Items from './Items';

class SimpleTasks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      newTasks: '',
    };
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };


  handleAddTask = () => {
    const itemArray = this.state.tasks;

    if (this.state.newTasks !== '') {
      itemArray.unshift({
        text: this.state.newTasks,
        key: Date.now(),
        completed: false,
      });

      this.setState({
        tasks: itemArray,
      });

      this.state.newTasks = '';
    }
  }

  deleteItem = (key) => {
    const filteredItems = this.state.tasks.filter(task => (task.key !== key));

    this.setState({
      tasks: filteredItems,
    });
  }

  handleOkItem = (key) => {
    const items = this.state.tasks.map((item) => {
      if (item.key === key) {
        return {
          text: item.text,
          key: item.key,
          completed: !item.completed,
        };
      }
      return item;
    });

    this.setState({
      tasks: items,
    });
  }

  render() {
    return (
      <div className="App">
        <div className="input-task">
          <input
            type="text"
            name="newTasks"
            className="input form-inline"
            placeholder="Task title"
            value={this.state.newTasks}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleAddTask} className="btn btn-primary btn-lg" >Add</button>
        </div>
        <Items
          entries={this.state.tasks}
          delete={this.deleteItem}
          okItem={this.handleOkItem}
        />
      </div>
    );
  }
}

export default SimpleTasks;
