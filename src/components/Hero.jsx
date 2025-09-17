import React from "react";
import "../styles/hero.css";
import profileImg from "../assets/images/profile/profile.jpg";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero__content">
        <div className="hero__text">
          <h1 className="hero__title">Hi, I’m Geovany Cardoza</h1>
          <p className="hero__subtitle">
            IT Support & Full Stack Developer | CompTIA A+ Certified
          </p>
          <a href="#projects" className="btn btn-primary">
            View My Work
          </a>
        </div>
        <div className="hero__image">
          <img src={profileImg} alt="Profile of Geovany Cardoza" />
        </div>
      </div>
    </section>
  );
}
