import React from "react";
import "../styles/about.css";
import profileImage from "../assets/images/profile/profile.jpg";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-image">
          <img src={profileImage} alt="Geovany Cardoza - Genticore" />
        </div>
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hi, I’m <strong>Geovany Cardoza</strong>, a freelance IT Support
            specialist and full stack developer. With a foundation in hardware
            repair, CompTIA A+ certification, and full stack development
            training at Penn LPS, I help businesses solve technical problems
            and build scalable digital solutions. I thrive on documentation-driven
            execution and adaptive problem-solving.
          </p>
          <a href="#portfolio" className="btn-primary">View My Work</a>
        </div>
      </div>
    </section>
  );
}

export default About;
