import React from "react";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p>© {new Date().getFullYear()} Genticore. All rights reserved.</p>
        <p>
          Designed & developed by{" "}
          <a
            href="https://genticore.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Geovany Cardoza
          </a>
        </p>
      </div>
    </footer>
  );
}
