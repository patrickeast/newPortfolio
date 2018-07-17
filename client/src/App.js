import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="parallax"></div>
        <div className="firstContainer text-white">
          <div className="text-white">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
            <h2>To get started, edit App.JS and save to reload.</h2>
          </div>
        </div>
        <div className="secondContainer">
          <h2 className="App-intro text-white">
            And here is some sample code to go along with the second container. Hopefully it fills the height.
          </h2>
        </div>
      </div>
    );
  }
}

export default App;
