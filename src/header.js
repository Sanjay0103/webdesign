import React from "react";
import logo from "./img1.avif";
import "./header.css";

function Header() {
  

 

  return (
    <header className="header">
      <img src={logo} alt="logo" />
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact us</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
