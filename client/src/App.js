import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar/Navbar.js";
import Footer from "./components/Footer/Footer.js";
import Figment from "./images/figment.png";
import BlankCanvas from "./images/blankCanvas.png";
import Arnold from "./images/arnold.png";

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
        <div className="parallax d-flex align-items-center">
          <div className="container-fluid">
            <div className="row justify-content-around">
              <div className="col-8">
                <div className="jumbotron bg-dark jumbotron-fluid rounded">
                  <div className="container">
                    <div className="col-xs-10 col-md-12">
                      <h1 className="text-white">Frontend Development, specializing in UI/UX Design</h1>
                      <div className="iconContainer container">
                        <div className="row">
                          <div className="col-sm-12">
                            <i className="text-white mr-4 pt-2 fab fa-react fa-3x"></i>
                            <i className="text-white mr-4 pt-2 fab fa-html5 fa-3x"></i>
                            <i className="text-white mr-4 pt-2 fab fa-css3-alt fa-3x"></i>
                            <i className="text-white mr-4 pt-2 fab fa-js-square fa-3x"></i>
                            <i className="text-white mr-4 pt-2 fab fa-node-js fa-3x"></i>
                            <i className="text-white mr-4 pt-2 fab fa-github-alt fa-3x"></i>
                            <i className="text-white mr-4 pt-2 fab fa-slack fa-3x"></i>
                            <i className="text-white mr-4 pt-2 fab fa-wordpress fa-3x"></i>
                            <i className="text-white mr-4 pt-2 fab fa-windows fa-3x"></i>
                            <i className="text-white mr-4 pt-2 icon-mongodb"></i>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="firstContainer">
          <div classname="container-fluid">
            <div className="row">
              <div className="col-12">
                <h1 className="text-center text-white">Just a few work examples...</h1>
              </div>
            </div>
            <div className="row justify-content-between">
              <div className="col-xs-10 col-sm-5 col-md-4">
                <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                  <div class="mainflip">
                    <div class="frontside">
                      <div class="card">
                        <img class="card-img-top img- fluid" src={Figment} alt="card image" />
                      </div>
                    </div>
                    <div class="backside">
                      <div class="card">
                        <div class="card-header">
                          This is a Header
                        </div>
                        <div class="card-body">
                          <h4 class="card-title">Card Title</h4>
                          <p class="card-text">This is a card component with header and footer.</p>
                          <a href="#" class="btn btn-info btn-md">Info Button</a>
                        </div>
                        <div class="card-footer">
                          This is a Footer
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xs-10 col-sm-5 col-md-4">
                <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                  <div class="mainflip">
                    <div class="frontside">
                      <div class="card">
                        <img class="card-img-top img- fluid" src={Figment} alt="card image" />
                      </div>
                    </div>
                    <div class="backside">
                      <div class="card">
                        <div class="card-header">
                          This is a Header
                        </div>
                        <div class="card-body">
                          <h4 class="card-title">Card Title</h4>
                          <p class="card-text">This is a card component with header and footer.</p>
                          <a href="#" class="btn btn-info btn-md">Info Button</a>
                        </div>
                        <div class="card-footer">
                          This is a Footer
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xs-10 col-sm-5 col-md-4">
                <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                  <div class="mainflip">
                    <div class="frontside">
                      <div class="card">
                        <img class="card-img-top img- fluid" src={Figment} alt="card image" />
                      </div>
                    </div>
                    <div class="backside">
                      <div class="card">
                        <div class="card-header">
                          This is a Header
                        </div>
                        <div class="card-body">
                          <h4 class="card-title">Card Title</h4>
                          <p class="card-text">This is a card component with header and footer.</p>
                          <a href="#" class="btn btn-info btn-md">Info Button</a>
                        </div>
                        <div class="card-footer">
                          This is a Footer
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
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
