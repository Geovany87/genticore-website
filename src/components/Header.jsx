// src/components/Header.jsx
import React, { useState } from "react";
import "../styles/header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="logo">Genticore</div>
      <nav className={`nav ${isOpen ? "active" : ""}`}>
        <ul>
          <li><a href="#hero" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="#services" onClick={() => setIsOpen(false)}>Services</a></li>
          <li><a href="#portfolio" onClick={() => setIsOpen(false)}>Portfolio</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
        </ul>
      </nav>
      <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
}

export default Header;
