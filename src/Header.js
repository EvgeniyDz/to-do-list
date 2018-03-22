import React, { Component } from 'react';
import logo from './logo.svg';

export class Header extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 >ToDo app</h1>          
        </header>
      </div>
    );
  }
}
