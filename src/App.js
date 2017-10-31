/* global Odometer */
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {

  componentDidMount (){
      this.odometer = new Odometer({
        el: this.refs.odo,
        value: '0'
      });
      this.odometer.update(1002225);
  }

  render() {
    return (
      <div className="App">
        <img
          src={logo}
          className="App-logo"
          alt="logo" />
        <h1 className="App-title">Number Animation</h1>
        <div ref="odo"></div>

      </div>
    );
  }
}

export default App;
