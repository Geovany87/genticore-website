import React from "react";
import About from "../components/About";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import "../styles/hero.css";
import heroProfile from "../assets/images/hero/profile.png";

export default function HomePage() {
  return (
    <>
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Welcome to Genticore</h1>
            <p>Building modern, scalable web solutions for the future.</p>
            <a href="#contact" className="cta-button">
              Let’s Connect
            </a>
          </div>
          <div className="hero-image">
            <img src={heroProfile} alt="Profile" />
          </div>
        </div>
      </section>

      <About />
      <Services />
      <Portfolio />
      <Contact />
    </>
  );
}
