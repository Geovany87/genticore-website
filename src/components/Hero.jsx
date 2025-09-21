import React from "react";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero__overlay">
        <div className="container hero__content">
          <h1 className="hero__title">Welcome to Genticore</h1>
          <p className="hero__subtitle">
            Building modern digital solutions with precision, innovation, and
            impact.
          </p>
          <div className="hero__actions">
            <a href="#services" className="btn btn-primary">
              Explore Services
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
