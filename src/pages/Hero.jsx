import React from "react";
import "../styles/hero.css";

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero_container">
        <h1 className="hero_title">Building Digital Experiences</h1>
        <p className="hero_subtitle">
          At <strong>Genticore</strong>, we create modern web solutions that
          empower your business to grow.
        </p>
        <div className="hero_buttons">
          <a href="#services" className="btn btn-primary">
            Explore Services
          </a>
          <a href="#contact" className="btn btn-outline">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
