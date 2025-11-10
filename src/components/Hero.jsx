import React from "react";
import "../styles/hero.css";
import heroImage from "../assets/images/hero/profile.png";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <h1>
          Building Reliable Web Solutions with{" "}
          <span className="highlight">MERN</span>
        </h1>
        <p>
          Hi, I’m <strong>Geovany Cardoza</strong>, a full stack developer and
          IT support specialist. I help startups, small businesses, and
          organizations build scalable, modern websites and applications.
        </p>
        <a href="#portfolio" className="cta-btn">
          View My Work
        </a>
      </div>
      <div className="hero-image">
        <img
          src={heroImage}
          alt="Geovany Cardoza Profile"
          onError={(e) => {
            e.target.src =
              "https://via.placeholder.com/400x400.png?text=Profile+Image";
          }}
        />
      </div>
    </section>
  );
}
