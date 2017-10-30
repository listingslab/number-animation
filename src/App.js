import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img
          src={logo}
          className="App-logo"
          alt="logo" />
        <h1 className="App-title">Number Animation</h1>
      </div>
    );
  }
}

export default App;
