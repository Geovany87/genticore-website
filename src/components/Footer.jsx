import React from "react";
import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3>Genticore</h3>
          <p>Building reliable solutions with MERN & IT expertise</p>
        </div>

        <nav className="footer-nav">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="footer-socials">
          <a href="https://github.com/Geovany87" target="_blank" rel="noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/YOUR-LINKEDIN" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:geovany@genticore.com">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Genticore. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
