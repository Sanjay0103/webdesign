import React from "react";
import logo from "./img1.avif";
import "./header.css";

function Header() {
  
  return (
    <nav>
      <div className="header">
        <img src={logo} alt="logo" />
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact" >Contact us</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
