import React from "react";
import "../styles/hero.css";
import heroProfile from "../assets/images/hero/profile.png";

export default function HomePage() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="text">
          <h1>Transforming Ideas Into Digital Reality</h1>
          <p>We craft modern, intelligent, and responsive solutions for your business.</p>
        </div>
        <div className="image">
          <img src={heroProfile} alt="Profile" />
        </div>
      </div>
    </section>
  );
}
