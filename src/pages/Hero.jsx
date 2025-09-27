// src/pages/Hero.jsx
import React from "react";
import "../styles/hero.css";

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1>Hi, I’m Geovany 👋</h1>
        <p>
          Freelance IT Support & Full Stack Developer.  
          I help businesses and individuals solve technical challenges with 
          scalable, professional, and modern solutions.
        </p>
        <a href="#contact" className="btn-primary">Let’s Work Together</a>
      </div>
    </section>
  );
}

export default Hero;
