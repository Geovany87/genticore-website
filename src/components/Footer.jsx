import React from "react";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Genticore. All rights reserved.</p>
      <p>
        Built with precision, scalability, and innovation — following Penn LSP
        principles.
      </p>
    </footer>
  );
}
