import React from "react";
import "../styles/globals.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero_content">
        <div className="hero_text">
          <h1>Building Reliable Web Solutions with MERN</h1>
          <p>
            Hi, I’m <strong>Geovany Cardoza</strong>, a full stack developer
            and IT support specialist. I help startups, small businesses, and
            organizations build scalable, modern websites and applications.
          </p>
          <a href="#projects" className="btn">
            View My Work
          </a>
        </div>
        <div className="hero_image">
          <img
            src="/src/assets/images/profile/profile.jpg"
            alt="Geovany Cardoza Profile"
          />
        </div>
      </div>
    </section>
  );
}
