import React from "react";
import "./Navbar.css";
import $ from 'jquery';
// import logo from '../../images/East-Designs_Black.png';


/**
 * Listen to scroll to change header opacity class
 */
function checkScroll(){
  var startY = $('.navbar').height() * 2; //The point where the navbar changes in px

  if($(window).scrollTop() > startY){
      $('.navbar').addClass("scrolled");
  } else{
      $('.navbar').removeClass("scrolled");
  }
}

if($('.navbar').length > 0){
  $(window).on("scroll load resize", function(){
      checkScroll();
  });
}

const Nav = props => (
    <nav className="navbar navbar-expand-md fixed-top">
      <div className="navbar-brand fixed">
        <h5 className="App-logo" alt="logo">&lt;/p&gt;</h5>
      </div>
      <span className="text-dark mt-2"><h3>Patrick East</h3></span>
      <div className="ml-auto mt-2 mt-md-0">
        <a href="https://github.com/patrickeast" target="_blank"><i className="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/patrickeast/" target="_blank"><i className="fab fa-linkedin-in"></i></a>
        <a href="mailto:patrick.east@icloud.com" target="_blank"><i className="fas fa-envelope"></i></a>
      </div>
    </nav>
);

export default Nav;
