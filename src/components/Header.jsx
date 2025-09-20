import React, { useState } from "react";
import "../styles/header.css";
import logo from "../assets/logos/logo-primary.svg";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="container nav-container">
        {/* Logo */}
        <a href="#hero" className="logo">
          <img src={logo} alt="Genticore Logo" />
        </a>

        {/* Hamburger menu for mobile */}
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
          ☰
        </button>

        {/* Navigation Links */}
        <nav className={`nav ${isOpen ? "open" : ""}`}>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
