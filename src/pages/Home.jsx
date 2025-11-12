import React from "react";
import About from "../components/About";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import "../styles/hero.css";
import heroProfile from "../assets/images/hero/profile.png";

export default function HomePage() {
  return (
    <main id="home" className="home-wrapper">
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              Empowering <span>Innovation</span> with Genticore
            </h1>
            <p>
              Building next-generation digital experiences that combine creativity,
              technology, and performance to drive business growth.
            </p>
          </div>
          <div className="hero-image-wrapper">
            <div className="hero-image-bg" aria-hidden="true"></div>
            <img
              src={heroProfile}
              alt="Genticore profile illustration"
              className="hero-image"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <About />
      <Services />
      <Portfolio />
      <Contact />
    </main>
  );
}
