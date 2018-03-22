import React, { Component } from 'react';

class Items extends Component {
    constructor(props) {
      super(props);  
    
    }

    delete = (key) => {
        this.props.delete(key);
      }
   
    createTasks = (tasks) => {     
      return(
       <div key={tasks.key} className="task">
      <li>{tasks.text}</li>
      <button className="glyphicon glyphicon-ok"></button>
      <button  className="glyphicon glyphicon-remove"
         onClick={() => this.delete(tasks.key)}>
  
         </button>
    </div>
      );  
    };
   
    render() {
      let todoEntries = this.props.entries;
      let listItems = todoEntries.map(this.createTasks);
   
      return (
        <ul className="ul">
            {listItems}
        </ul>
      );
    }
  };
   
  export default Items;