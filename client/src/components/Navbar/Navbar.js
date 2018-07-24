import React from "react";
import "./Navbar.css";
import $ from 'jquery';
import East from "../../images/EastTop.png";
// import logo from '../../images/East-Designs_Black.png';


/**
 * Listen to scroll to change header opacity class
 */
function checkScroll() {
  var startY = $('.navbar').height() * 2; //The point where the navbar changes in px

  if ($(window).scrollTop() > startY) {
    $('.navbar').addClass("scrolled");
  } else {
    $('.navbar').removeClass("scrolled");
  }
}

if ($('.navbar').length > 0) {
  $(window).on("scroll load resize", function () {
    checkScroll();
  });
}

const Nav = props => (
  <nav className="navbar navbar-expand-md fixed-top d-flex">
  <div className="tagline">Always learning, always coding.</div>
    <ul className="d-flex align-items-start">
      <li className="text-left">
        <div className="navbar-brand">
          <h5 className="App-logo" title="Just for fun" alt="logo">&lt;/p&gt;</h5>
        </div>
      </li>
      <li classname="text-center">
        {/* <span className="text-dark mt-2"><h3>Patrick East</h3></span> */}
        <img src={East} alt="Patrick East" className="img-fluid EastLogo" /><br />
        
      </li>
      <li className="text-right navbar-right">
        <a href="https://github.com/patrickeast" target="_blank" rel="noopener noreferrer" value="View my GitHub" title="View my GitHub"><i className="fab fa-github fa-1x"></i></a>
        <a href="https://www.linkedin.com/in/patrickeast/" target="_blank" rel="noopener noreferrer" title="Connect with me on LinkedIn"><i className="fab fa-linkedin-in fa-1x"></i></a>
        <a href="mailto:patrick.east@icloud.com" target="_blank" rel="noopener noreferrer" title="Send me a message"><i className="fas fa-envelope fa-1x"></i></a>
      </li>
    </ul>
  </nav>
);

export default Nav;
