import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar.js";
import Footer from "./components/Footer/Footer.js";
import Figment from "./images/figment.png";
import BlankCanvas from "./images/blankCanvas.png";
import Arnold from "./images/arnold.png";
import Thrive from "./images/thrive.png";
import TMS from "./images/TMS.png";
import COACT from "./images/coact.png";

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
        <div className="parallax d-flex align-items-end">
          <div className="container-fluid">
            <div className="row justify-content-around">
              <div className="col-12">
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
            <div className="row">
              <div className="col-12 text-warning">
                <h1 className="greenH1">Scroll down to view my work...</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="firstContainer">
          <div className="container-fluid">
            {/* <div className="row">
              <div className="col-12">
                <h1 className="text-center text-white">Just a few work examples...</h1>
              </div>
            </div> */}
            {/* Row 1 */}
            <div className="row justify-content-between">
              {/* Portfolio #1 */}
              <div className="col-xs-10 col-sm-5 col-md-4">
                <div className="image-flip" onTouchStart="this.classList.toggle('hover');">
                  <div className="mainflip">
                    <div className="frontside">
                      <div className="card">
                        <img className="card-img-top img-fluid" src={Thrive} alt="Thrive Homebuilders" />
                      </div>
                    </div>
                    <div className="backside">
                      <div className="card">
                        <div className="card-body">
                          <h4 className="card-title">Thrive Home Builders</h4>
                          <h6><i>UI/UX, Custom CMS</i></h6>
                          <span class="badge badge-pill badge-primary">Custom CMS</span>
                          <span class="badge badge-pill badge-success">Adobe Creative Cloud</span>
                          <span class="badge badge-pill badge-danger">Wire Framing</span>
                          <span class="badge badge-pill badge-warning">Prototyping</span>
                          <p className="card-text">Thrive Home Builders wanted a complete site redesign to modernize their look and better align
                          their identity with their customers. However, they were stuck using a very limited industry-standard CMS for home builders.
                          Our job was to work around the constraints of this CMS and still provide a whollly new User Experience that invites traffic flow
                          and discovery. The product can be seen below.</p>
                          <a href="http://thrivehomebuilders.com/" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-dark btn-md">Visit the redesign</a>
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
                        <img className="card-img-top img-fluid" src={TMS} alt="Figment.Observer" />
                      </div>
                    </div>
                    <div className="backside">
                      <div className="card">
                        <div className="card-body">
                          <h4 className="card-title">Take Meds Seriously</h4>
                          <h6><i>UI/UX, WordPress Maintenance</i></h6>
                          <span class="badge badge-pill badge-primary">Custom CMS</span>
                          <span class="badge badge-pill badge-success">Adobe Creative Cloud</span>
                          <span class="badge badge-pill badge-danger">Wire Framing</span>
                          <span class="badge badge-pill badge-warning">Prototyping</span>
                          <p className="card-text">Take Meds Seriously is a Colorado statewide campaign informing the public about the safe use,
                          safe storage, and safe disposal of their prescription medications. This site went through numerous design mock-ups,
                          wire frames, and prototypes before being built out through a custom WordPress theme. Though almost four years old, the
                          site's UI and UX still hold up to industry standards.</p>
                          <a href="http://takemedsseriously.org/" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-dark btn-md">Visit the site</a>
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
                        <img className="card-img-top img-fluid" src={COACT} alt="COACT Colorado" />
                      </div>
                    </div>
                    <div className="backside">
                      <div className="card">
                        <div className="card-body">
                          <h4 className="card-title">COACT Colorado (Still in Dev)</h4>
                          <h6><i>UI Design/Prototyping, <br />UX Design/Wireframing</i></h6>
                          <span class="badge badge-pill badge-primary">Sketch</span>
                          <span class="badge badge-pill badge-success">Adobe Creative Cloud</span>
                          <span class="badge badge-pill badge-danger">UI Design</span>
                          <span class="badge badge-pill badge-warning">UX Research</span>
                          <span class="badge badge-pill badge-info">Google Analytics</span>
                          <p className="card-text">This statewide complex site was 4+ years old when we were asked to completely rehaul it. Hours of market research, cross-
                          referencing Google Analytics for trends, and scouring ADA and CLAS guidelines, informed the creation of detailed wire frames
                          and initial prototypes for the new site, bringing the initial 35+ pages down to less than 10. Below, you can view the detailed wire frames and mock-
                          ups for the site.</p>
                          <a href="https://www.dropbox.com/sh/7kqmayt6qul6fwj/AAA3D93AhIiopz3YQgtm1rjua?dl=0" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-dark btn-md">View the plans</a>
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
                        <img className="card-img-top img- fluid" src={Arnold} alt="Hey Arnold Game" />
                      </div>
                    </div>
                    <div className="backside">
                      <div className="card">
                        <div className="card-body">
                          <h4 className="card-title">Hey Arnold Memory Game</h4>
                          <h6><i>Mobile-first, React Components</i></h6>
                          <span class="badge badge-pill badge-primary">ReactJS</span>
                          <span class="badge badge-pill badge-success">Bootstrap</span>
                          <span class="badge badge-pill badge-secondary">JSON Requests</span>
                          <span class="badge badge-pill badge-danger">NodeJS</span>
                          <span class="badge badge-pill badge-warning">Express</span>
                          <span class="badge badge-pill badge-info">JavaScript</span>
                          <span class="badge badge-pill badge-dark">CSS Animations</span>
                          <p className="card-text">
                            A simple but surprsingly challenging gane of Memory, using ReactJS as a single-page application. This project focuses
                            heavily on slick, fun UI elements that keep the player engaged, with an emphasis on mobile-first design and development.
                            <br /><br />
                            The game is designed with React to be scaled for future additions to the 90's Nickelodeon theme.
                          </p>
                          <a href="https://memory-nickelodeon.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-dark btn-md">Play it</a>
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
                          <h4 className="card-title">Figment: A modern tool for writers</h4>
                          <h6><i>UI Design/Layout, CSS Animations</i></h6>
                          <span class="badge badge-pill badge-primary">Handlebars</span>
                          <span class="badge badge-pill badge-success">Materialize</span>
                          <span class="badge badge-pill badge-danger">MySQL/Sequelize</span>
                          <span class="badge badge-pill badge-warning">Express</span>
                          <span class="badge badge-pill badge-info">Adobe Illustrator</span>
                          <p className="card-text">
                            Designed with writers in mind, this application uses complex CSS animations and a Pinterest-style UI to display stories written by users in
                            under 2,000 characters. It also makes use of Markdown converting NPM packages such as ShowdownJS and TurndownJS to allow a clean, minimal
                            writing interface for users familiar with Markdown.
                            Create an account and try out the app below.
                          </p>
                          <a href="http://figment.observer/" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-dark btn-md">View the app</a>
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
                          <h4 className="card-title">Blank Canvas: A tool for artists</h4>
                          <h6><i>User Authentication, UX Mapping</i></h6>
                          <p className="card-text">Blank Canvas is a social media tool and personal portfolio application for artists in Colorado. Designed to be as
                          user friendly and intuitive as possible, the app allows users to update their profiles with links to their art, search for galleries or
                          stores nearby, and update their personal feed with a custom Google Search engine. While still in Dev, this app ultimately will help bring
                          artists together to collaborate on works.</p>
                          Create an account and view the app below.
                          <a href="https://blankcanvas-43876.firebaseapp.com/" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-dark btn-md">View the app</a>
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
          <h2 className="text-white">
            I am a dedicated Frontend Developer, specializing in UI/UX design, with over 5 years of experience in the Adobe Creative Cloud Suite. If you have any questions, comments, or
            if you just want to chat, send me an email!
          </h2>
        </div>
        <Footer />
      </div >
    );
  }
}

export default App;
