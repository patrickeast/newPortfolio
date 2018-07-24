import React, { Component } from 'react';
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
                <div className="jumbotron bg-dark jumbotron-fluid rounded mt-3">
                  <div className="container">
                    <div className="col-xs-10 col-md-12">
                      <h2 className="text-white">Frontend development, specializing in UI/UX design</h2>
                      <h4 className="text-white">Always learning, always coding.</h4>
                      <div className="iconContainer container-fluid">
                        <div className="row">
                          <div className="col-sm-12">
                            <i className="text-white mr-4 pt-2 fab fa-react fa-3x" value="ReactJS"></i>
                            <i className="text-white mr-4 pt-2 fab fa-html5 fa-3x" value="HTML5"></i>
                            <i className="text-white mr-4 pt-2 fab fa-css3-alt fa-3x" value="CSS3"></i>
                            <i className="text-white mr-4 pt-2 icon-bootstrap fizzy" value="Bootstrap"></i>
                            <i className="text-white mr-4 pt-2 fab fa-js-square fa-3x" value="JavaScript"></i>
                            <i className="text-white mr-4 pt-2 icon-jquery fizzy" value="jQuery"></i>
                            <i className="text-white mr-4 pt-2 icon-csharp fizzy" value="C#"></i>
                            <i className="text-white mr-4 pt-2 icon-mongodb fizzy" value="MongoDB"></i>
                            <i className="text-white mr-4 pt-2 icon-mysql-alt fizzy" value="MySQL"></i>
                            <i className="text-white mr-4 pt-2 fab fa-node-js fa-3x" value="NodeJS"></i>
                            <i className="text-white mr-4 pt-2 icon-heroku fizzy" value="Heroku"></i>
                            <i className="text-white mr-4 pt-2 fab fa-github-alt fa-3x" value="GitHub"></i>
                            <i className="text-white mr-4 pt-2 fab fa-slack fa-3x" value="#Slack"></i>
                            <i className="text-white mr-4 pt-2 fab fa-wordpress fa-3x" value="WordPress"></i>
                            <i className="text-white mr-4 pt-2 fab fa-windows fa-3x" value="Windows"></i>
                          </div>
                        </div>
                      </div>
                      <div className="container-fluid">
                        <div className="row">
                          <div className="col-sm-12 text-warning">
                            <h1>Scroll down to view some of my works.</h1>
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
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <h1 className="text-center text-white">Just a few work examples...</h1>
              </div>
            </div>
            {/* Row 1 */}
            <div className="row justify-content-between">
              {/* Portfolio #1 */}
              <div className="col-xs-10 col-sm-5 col-md-4">
                <div className="image-flip" onTouchStart="this.classList.toggle('hover');">
                  <div className="mainflip">
                    <div className="frontside">
                      <div className="card">
                        <img className="card-img-top img- fluid" src={Arnold} alt="Hey Arnold Game" />
                      </div>
                    </div>
                    <div className="backside">
                      <div className="card">
                        <div className="card-body">
                          <h4 className="card-title">Card Title</h4>
                          <p className="card-text">This is a card component with header and footer.</p>
                          <a href="/" className="btn btn-outline-dark btn-md">warning Button</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Portfolio #2 */}
              <div className="col-xs-10 col-sm-5 col-md-4">
                <div className="image-flip" onTouchStart="this.classList.toggle('hover');">
                  <div className="mainflip">
                    <div className="frontside">
                      <div className="card">
                        <img className="card-img-top img-fluid" src={Figment} alt="Figment.Observer" />
                      </div>
                    </div>
                    <div className="backside">
                      <div className="card">
                        <div className="card-body">
                          <h4 className="card-title">Card Title</h4>
                          <p className="card-text">This is a card component with header and footer.</p>
                          <a href="/" className="btn btn-outline-dark btn-md">warning Button</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Portfolio #3 */}
              <div className="col-xs-10 col-sm-5 col-md-4">
                <div className="image-flip" onTouchStart="this.classList.toggle('hover');">
                  <div className="mainflip">
                    <div className="frontside">
                      <div className="card">
                        <img className="card-img-top img-fluid" src={BlankCanvas} alt="Blank Canvas" />
                      </div>
                    </div>
                    <div className="backside">
                      <div className="card">
                        <div className="card-body">
                          <h4 className="card-title">Card Title</h4>
                          <p className="card-text">This is a card component with header and footer.</p>
                          <a href="/" className="btn btn-outline-dark btn-md">warning Button</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Row 2 */}
            <div className="row justify-content-between">
              {/* Portfolio #4 */}
              <div className="col-xs-10 col-sm-5 col-md-4">
                <div className="image-flip" onTouchStart="this.classList.toggle('hover');">
                  <div className="mainflip">
                    <div className="frontside">
                      <div className="card">
                        <img className="card-img-top img-fluid" src={Arnold} alt="Hey Arnold Game" />
                      </div>
                    </div>
                    <div className="backside">
                      <div className="card">
                        <div className="card-body">
                          <h4 className="card-title">Card Title</h4>
                          <p className="card-text">This is a card component with header and footer.</p>
                          <a href="/" className="btn btn-outline-dark btn-md">Click Button</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Portfolio #5 */}
              <div className="col-xs-10 col-sm-5 col-md-4">
                <div className="image-flip" onTouchStart="this.classList.toggle('hover');">
                  <div className="mainflip">
                    <div className="frontside">
                      <div className="card">
                        <img className="card-img-top img-fluid" src={Figment} alt="Figment.Observer" />
                      </div>
                    </div>
                    <div className="backside">
                      <div className="card">
                        <div className="card-body">
                          <h4 className="card-title">Card Title</h4>
                          <p className="card-text">This is a card component with header and footer.</p>
                          <a href="/" className="btn btn-outline-dark btn-md">Click Button</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Portfolio #6 */}
              <div className="col-xs-10 col-sm-5 col-md-4">
                <div className="image-flip" onTouchStart="this.classList.toggle('hover');">
                  <div className="mainflip">
                    <div className="frontside">
                      <div className="card">
                        <img className="card-img-top img-fluid" src={BlankCanvas} alt="Blank Canvas" />
                      </div>
                    </div>
                    <div className="backside">
                      <div className="card">
                        <div className="card-body">
                          <h4 className="card-title">Card Title</h4>
                          <p className="card-text">This is a card component with header and footer.</p>
                          <a href="/" className="btn btn-outline-dark btn-md">Click Button</a>
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
            Please reach out to me if you have any questions, comments, or feedback. Thanks for visiting!
          </h2>
        </div>
        <Footer />
      </div >
    );
  }
}

export default App;
