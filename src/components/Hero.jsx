import React from "react";
import "../styles/hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to Genticore</h1>
        <p>Freelance IT Support & Full Stack Development</p>
        <a href="#contact" className="btn-primary">Get in Touch</a>
      </div>
    </section>
  );
}

export default Hero;
