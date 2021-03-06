import React from "react";
import "./Navbar.css";


const Nav = props => (
  <nav className="navbar navbar-expand-xs fixed-top d-flex">
    {/* <nav className="navbar navbar-expand-md fixed-top d-flex bg-dark text-white"> */}
    <ul className="d-flex align-items-start">
      <li className="text-left nav-item">
        <div className="navbar-brand">
          <h5 className="App-logo" title="Just for fun" alt="logo">&lt;/p&gt;</h5>
        </div>
      </li>
      <li className="nav-item">
        {/* <img src={East} alt="Patrick East" className="img-fluid EastLogo" /> */}
        <div className="EastLogo">
        <h1>Patrick East</h1>
        <h4>Frontend Developer</h4>
        </div>
      </li>
      <li className="text-right nav-item">
        <div className="topIcons">
          <a href="https://github.com/patrickeast" target="_blank" rel="noopener noreferrer" value="View my GitHub" title="View my GitHub"><i className="fab fa-github fa-1x"></i></a>
          <a href="https://www.linkedin.com/in/patrickeast/" target="_blank" rel="noopener noreferrer" title="Connect with me on LinkedIn"><i className="fab fa-linkedin-in fa-1x"></i></a>
          <a href="mailto:patrick.east@icloud.com" target="_blank" rel="noopener noreferrer" title="Send me a message"><i className="fas fa-envelope fa-1x"></i></a>
        </div>
      </li>
    </ul>
    {/* <div className="tagline">Always learning, always coding.</div> */}
    {/* <ul className="d-flex align-items-start"> */}


  </nav>
);

export default Nav;
