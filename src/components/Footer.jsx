import "../styles/footer.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">

        {/* Branding */}
        <div className="footer__brand">
          <h3 className="footer__logo">GentiCore</h3>
          <p className="footer__tagline">
            IT Support • Web Development • Technology Solutions
          </p>
        </div>

        {/* Links */}
        <nav className="footer__nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* Social */}
        <div className="footer__social">
          <a href="https://github.com/Geovany87" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:geovany@example.com">
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Bottom */}
      <p className="footer__copy">
        © {year} GentiCore. All rights reserved.
      </p>
    </footer>
  );
}
