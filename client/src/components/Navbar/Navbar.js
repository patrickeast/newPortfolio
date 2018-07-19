import React from "react";
import "./Navbar.css";
import logo from '../../images/East-Designs_Black.png';

const Nav = props => (
  <nav className="navbar navbar-top navbar-expand-md navbar-dark fixed-top bg-dark">
    <div className="navbar-brand">
      <h5 className="App-logo" alt="logo">&lt;/p&gt;</h5>
    </div>
    <span className="text-white mt-2"><h3>Patrick East</h3></span>
    <div className="ml-auto mt-2 mt-md-0">
      <a href="https://github.com/patrickeast" target="blank"><i className="fab fa-github"></i></a>
      <a href="https://www.linkedin.com/in/patrickeast/" target="blank"><i className="fab fa-linkedin-in"></i></a>
      <a href="mailto:patrick.east@icloud.com" target="blank"><i className="fas fa-envelope"></i></a>
    </div>
  </nav>
);

export default Nav;
