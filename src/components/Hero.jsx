import React from "react";
import "../styles/hero.css";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__content">
        <div className="hero__text">
          <h1>
            Building Reliable Web Solutions <br /> with <span>MERN</span>
          </h1>
          <p>
            Hi, I’m <strong>Geovany Cardoza</strong>, a full stack developer and IT support specialist. 
            I help startups, small businesses, and organizations build scalable, modern websites 
            and applications.
          </p>
          <a href="#portfolio" className="btn btn-primary">
            View My Work
          </a>
        </div>

        <div className="hero__image">
          <img
            src="/src/assets/images/profile/profile.jpg"
            alt="Geovany Cardoza Profile"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
