// src/pages/About.jsx
import React from "react";
import "../styles/about.css";
import profile from "../assets/images/profile/profile.jpg";

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-image">
          <img src={profile} alt="Geovany - Profile" />
        </div>
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I’m a freelance IT support specialist and full-stack developer
            passionate about solving real-world problems with technology.  
            With hands-on experience in web development and system support, I
            help clients build reliable, scalable, and user-friendly solutions.
          </p>
          <p>
            My focus is on delivering **professional-grade solutions** that are
            simple, efficient, and aligned with your business goals.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
