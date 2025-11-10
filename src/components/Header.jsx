import React, { useState, useEffect } from "react";
import "../styles/header.css";
import logo from "../assets/images/logo.png"; // Replace with your actual logo path

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // Handle scroll shadow and section highlight
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll("section[id]");
      let current = "hero";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 150;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll behavior
  const handleLinkClick = (e, id) => {
    e.preventDefault();
    const target = document.querySelector(id);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">
        <a href="#hero" className="navbar-logo" onClick={(e) => handleLinkClick(e, "#hero")}>
          <img src={logo} alt="GenticoRe Logo" />
          <span>GentiCore</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation"
        >
          <span className={`bar ${isMobileMenuOpen ? "open" : ""}`}></span>
          <span className={`bar ${isMobileMenuOpen ? "open" : ""}`}></span>
          <span className={`bar ${isMobileMenuOpen ? "open" : ""}`}></span>
        </button>

        <nav className={`navbar-links ${isMobileMenuOpen ? "active" : ""}`}>
          {[
            { id: "#hero", label: "Home" },
            { id: "#about", label: "About" },
            { id: "#services", label: "Services" },
            { id: "#portfolio", label: "Portfolio" },
            { id: "#contact", label: "Contact" },
          ].map((link) => (
            <a
              key={link.id}
              href={link.id}
              onClick={(e) => handleLinkClick(e, link.id)}
              className={activeSection === link.id.substring(1) ? "active" : ""}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
