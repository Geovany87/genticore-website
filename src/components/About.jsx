import React from "react";
import "../styles/about.css";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about__container">
        <div className="about__image">
          <img
            src="/src/assets/images/profile/profile.jpg"
            alt="Geovany Cardoza"
            loading="lazy"
          />
        </div>

        <div className="about__content">
          <h2>About Me</h2>
          <p>
            I'm <strong>Geovany Cardoza</strong>, a resourceful IT Support and Full Stack Developer
            with a CompTIA A+ certification and experience in developing, managing, and deploying
            modern web applications.
          </p>
          <p>
            I’m passionate about leveraging the <strong>MERN stack</strong> to create reliable,
            scalable, and user-centered solutions that enhance digital experiences for
            businesses and users alike.
          </p>
          <p>
            My expertise includes <strong>React, Node.js, Express, MongoDB</strong>, and modern
            development workflows that promote maintainability and performance.
          </p>
          <a href="#contact" className="btn btn-primary">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
