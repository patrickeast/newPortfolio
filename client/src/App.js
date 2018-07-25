import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar.js";
import Footer from "./components/Footer/Footer.js";
import Figment from "./images/Figment.png";
import BlankCanvas from "./images/blankCanvas.png";
import Arnold from "./images/arnold.png";
import Thrive from "./images/thrive.png";
import TMS from "./images/TMS.png";
import COACT from "./images/coact.png";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="parallax d-flex align-items-end">
          <div className="container-fluid mobileIcons">
            <div className="row justify-content-around">
              <div className="col-12">
                <i className="icon brandLogos mr-4 pt-2 fab fa-react fa-3x" color="#09adef" value="ReactJS"></i>
                <i className="icon brandLogos mr-4 pt-2 fab fa-html5 fa-3x" value="HTML5"></i>
                <i className="icon brandLogos mr-4 pt-2 fab fa-css3-alt fa-3x" value="CSS3"></i>
                <i className="icon brandLogos mr-4 pt-2 icon-bootstrap fizzy" value="Bootstrap"></i>
                <i className="icon brandLogos mr-4 pt-2 fab fa-js-square fa-3x" value="JavaScript"></i>
                <i className="icon brandLogos mr-4 pt-2 icon-jquery fizzy" value="jQuery"></i>
                <i className="icon brandLogos mr-4 pt-2 icon-csharp fizzy" value="C#"></i>
                <i className="icon brandLogos mr-4 pt-2 icon-mongodb fizzy" value="MongoDB"></i>
                <i className="icon brandLogos mr-4 pt-2 icon-mysql-alt fizzy" value="MySQL"></i>
                <i className="icon brandLogos mr-4 pt-2 fab fa-node-js fa-3x" value="NodeJS"></i>
                <i className="icon brandLogos mr-4 pt-2 icon-heroku fizzy" value="Heroku"></i>
                <i className="icon brandLogos mr-4 pt-2 fab fa-github-alt fa-3x" value="GitHub"></i>
                <i className="icon brandLogos mr-4 pt-2 fab fa-slack fa-3x" value="#Slack"></i>
                <i className="icon brandLogos mr-4 pt-2 fab fa-wordpress fa-3x" value="WordPress"></i>
                <i className="icon brandLogos mr-4 pt-2 fab fa-windows fa-3x" value="Windows"></i>
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
              <div>
                <div className="image-flip" onTouchStart="this.classList.toggle('hover')">
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
                          <span className="badge badge-pill badge-primary">Custom CMS</span>
                          <span className="badge badge-pill badge-success">Adobe Creative Cloud</span>
                          <span className="badge badge-pill badge-danger">Wire Framing</span>
                          <span className="badge badge-pill badge-warning">Prototyping</span>
                          <p className="card-text">Thrive Home Builders wanted a complete site redesign, but they were stuck using a very limited CMS.
                          We worked around the constraints of this CMS to provide a whollly new User Experience that invites traffic flow
                          and discovery.</p>
                          <a href="http://thrivehomebuilders.com/" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-dark btn-md">Visit the redesign</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Portfolio #2 */}
              <div>
                <div className="image-flip" onTouchStart="this.classList.toggle('hover')">
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
                          <span className="badge badge-pill badge-primary">Custom CMS</span>
                          <span className="badge badge-pill badge-success">Adobe Creative Cloud</span>
                          <span className="badge badge-pill badge-danger">Wire Framing</span>
                          <span className="badge badge-pill badge-warning">Prototyping</span>
                          <p className="card-text">This site went through numerous design mock-ups,
                          wire frames, and prototypes before being built out through a custom WordPress theme. Though almost four years old, its
                          UI and UX still hold up to industry standards.</p>
                          <a href="http://takemedsseriously.org/" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-dark btn-md">Visit the site</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Portfolio #3 */}
              <div>
                <div className="image-flip" onTouchStart="this.classList.toggle('hover')">
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
                          <span className="badge badge-pill badge-success">Adobe Creative Cloud</span>
                          <span className="badge badge-pill badge-danger">UI Design</span>
                          <span className="badge badge-pill badge-warning">UX Research</span>
                          <span className="badge badge-pill badge-info">Google Analytics</span>
                          <p className="card-text">Combining Google Analytics and market research with ADA and CLAS guidelines informed the creation of detailed wire frames
                          and initial prototypes for the new site, bringing the initial 35+ pages down to less than 10.</p>
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
              <div>
                <div className="image-flip" onTouchStart="this.classList.toggle('hover')">
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
                          <span className="badge badge-pill badge-primary">ReactJS</span>
                          <span className="badge badge-pill badge-success">Bootstrap</span>
                          <span className="badge badge-pill badge-secondary">JSON Requests</span>
                          <span className="badge badge-pill badge-danger">NodeJS</span>
                          <span className="badge badge-pill badge-warning">Express</span>
                          <span className="badge badge-pill badge-info">JavaScript</span>
                          <span className="badge badge-pill badge-dark">CSS Animations</span>
                          <p className="card-text">
                            A simple but surprsingly challenging game of Memory, using ReactJS. This project focuses on slick, fun UI elements that keep the player engaged, with an emphasis on mobile-first design and development.
                          </p>
                          <a href="https://memory-nickelodeon.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-dark btn-md">Play the game</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Portfolio #5 */}
              <div>
                <div className="image-flip" onTouchStart="this.classList.toggle('hover')">
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
                          <span className="badge badge-pill badge-primary">Handlebars</span>
                          <span className="badge badge-pill badge-success">Materialize</span>
                          <span className="badge badge-pill badge-danger">MySQL/Sequelize</span>
                          <span className="badge badge-pill badge-warning">Express</span>
                          <span className="badge badge-pill badge-info">Adobe Illustrator</span>
                          <p className="card-text">
                            Designed with writers in mind, this application uses complex CSS animations and a Pinterest-style UI to display stories written by users in
                            under 2,000 characters.
                          </p>
                          <a href="http://figment.observer/" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-dark btn-md">View the app</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Portfolio #6 */}
              <div>
                <div className="image-flip" onTouchStart="this.classList.toggle('hover')">
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
                          <p className="card-text">Designed to be as user friendly as possible, Blank Canvas allows artists to update their profiles with links to their art, search for galleries or
                          stores nearby, and update their personal feed with a custom Google Search engine.</p>
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
          <a href="https://github.com/patrickeast" target="_blank" rel="noopener noreferrer" value="View my GitHub" title="View my GitHub"><i className="icons mr-3 fab fa-github fa-3x"></i></a>
          <a href="https://www.linkedin.com/in/patrickeast/" target="_blank" rel="noopener noreferrer" title="Connect with me on LinkedIn"><i className="icons mr-3 fab fa-linkedin-in fa-3x"></i></a>
          <a href="mailto:patrick.east@icloud.com" target="_blank" rel="noopener noreferrer" title="Send me a message"><i className="icons mr-3 fas fa-envelope fa-3x"></i></a>
        </div>
        <Footer />
      </div >
    );
  }
}

export default App;
