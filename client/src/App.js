import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="parallax"></div>
        <div className="firstContainer">
          <div className="container">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        </div>
        <div className="secondContainer">
          <p className="App-intro">
            And here is some sample code to go along with the second container. Hopefully it fills the height.
          </p>
        </div>
      </div>
    );
  }
}

export default App;
