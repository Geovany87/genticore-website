// src/components/Footer.jsx
import React from "react";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <p>
          &copy; {new Date().getFullYear()} <strong>Genticore</strong> — All
          Rights Reserved.
        </p>
        <ul className="social-links">
          <li>
            <a
              href="https://github.com/Geovany87"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a href="mailto:genticore@outlook.com">Email</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
