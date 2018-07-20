import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar/Navbar.js";
import Footer from "./components/Footer/Footer.js";

// ;(function (){
//   var previousScroll = 0;
//   var navbar = document.querySelectorAll('navbar'),
//       navClasses = navbar.classList; // classList doesn't work <IE10

//   window.addEventListener('scroll', function(e){
//      var currentScroll = window.scrollY;
//      var isDown = currentScroll > previousScroll;

//      if ( isDown && !navClasses.contains('scrolled') ){
//         // scrolling down, didn't add class yet
//         navClasses.add('scrolled'); // we hide the navbar
//      } else if ( !isDown ){
//         // scrolling up
//         navClasses.remove('scrolled'); // won't error if no class found
//      }

//      // always update position
//      previousScroll = currentScroll;
//   });
// }()); //run this anonymous function immediately



class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="parallax">
          <div className="container-fluid">
            <div className="row justify-content-between">
              <div className="col-xs-10 col-sm-5 col-md-3">
              </div>
              <div className="col-xs-10 col-sm-5 col-md-3">
              </div>
              <div className="col-xs-10 col-sm-5 col-md-3">
              </div>
            </div>
          </div>
        </div>
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
        <Footer /> 
      </div >
    );
  }
}

export default App;
