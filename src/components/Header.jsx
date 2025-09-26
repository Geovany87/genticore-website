import React from "react";
import "../styles/header.css";

function Header() {
  return (
    <header className="header">
      <div className="header_container">
        <h1 className="logo">Genticore</h1>
        <nav className="nav">
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
