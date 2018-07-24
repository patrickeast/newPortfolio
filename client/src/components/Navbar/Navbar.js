import React from "react";
import "./Navbar.css";
import East from "../../images/EastTop.png";


const Nav = props => (
  <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
  {/* <nav className="navbar navbar-expand-md fixed-top d-flex bg-dark text-white"> */}
    {/* <div className="tagline">Always learning, always coding.</div> */}
    {/* <!-- Toggler/collapsibe Button --> */}
    <button className="navbar-toggler bg-dark" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    {/* <!-- Navbar links --> */}
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav">
        <li className="text-left nav-item">
          <div className="navbar-brand">
            <h5 className="App-logo" title="Just for fun" alt="logo">&lt;/p&gt;</h5>
          </div>
        </li>
        <li classname="nav-item">
          <img src={East} alt="Patrick East" className="img-fluid EastLogo" />
          {/* <h1>Patrick East</h1> */}
        </li>
        <li className="text-right nav-item">
        <a href="https://github.com/patrickeast" target="_blank" rel="noopener noreferrer" value="View my GitHub" title="View my GitHub"><i className="fab fa-github fa-1x"></i></a>
        <a href="https://www.linkedin.com/in/patrickeast/" target="_blank" rel="noopener noreferrer" title="Connect with me on LinkedIn"><i className="fab fa-linkedin-in fa-1x"></i></a>
        <a href="mailto:patrick.east@icloud.com" target="_blank" rel="noopener noreferrer" title="Send me a message"><i className="fas fa-envelope fa-1x"></i></a>
      </li>
      </ul>
    </div>
    {/* <ul className="d-flex align-items-start"> */}
      
     
  </nav>
);

export default Nav;
