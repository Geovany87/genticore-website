import React, { useState, useEffect } from "react";
import "../styles/header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  const handleScroll = () => {
    const sections = document.querySelectorAll("section[id]");

    sections.forEach((section) => {
      const top = window.scrollY;
      const offset = section.offsetTop - 200;
      const height = section.offsetHeight;
      const id = section.getAttribute("id");

      if (top >= offset && top < offset + height) {
        setActive(id);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header">
      <div className="header__container">
        <a href="#home" className="header__logo">
          Genticore
        </a>

        <nav className={`header__nav ${menuOpen ? "show" : ""}`}>
          <a
            href="#home"
            className={active === "home" ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className={active === "about" ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#services"
            className={active === "services" ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            Services
          </a>
          <a
            href="#portfolio"
            className={active === "portfolio" ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            Portfolio
          </a>
          <a
            href="#contact"
            className={active === "contact" ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
        </nav>

        <div
          className={`header__toggle ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}
