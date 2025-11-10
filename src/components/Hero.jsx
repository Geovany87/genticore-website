import React from "react";
import "../styles/hero.css";
import heroImage from "../assets/images/hero/profile.png";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Transforming Ideas Into Digital Reality</h1>
        <p className="hero-subtitle">
          We craft modern, responsive, and intelligent solutions for your business.
        </p>
        <div className="hero-buttons">
          <a href="#portfolio" className="btn primary">
            View Work
          </a>
          <a href="#contact" className="btn secondary">
            Get In Touch
          </a>
        </div>
      </div>

      <div className="hero-image-container">
        <img src={heroImage} alt="Hero" className="hero-image" />
      </div>
    </section>
  );
}
