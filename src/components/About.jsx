import React from "react";
import "../styles/about.css";
import profileImg from "../assets/images/profile/profile.jpg";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container about__container">
        {/* Profile Image */}
        <div className="about__image">
          <img src={profileImg} alt="Profile - Genticore Freelancer" />
        </div>

        {/* About Content */}
        <div className="about__content">
          <h2>About Me</h2>
          <p>
            I’m <strong>Geovany Cardoza</strong>, a resourceful technology
            professional with a foundation in hardware repair, IT support, and
            full stack web development. CompTIA A+ certified and trained at the
            University of Pennsylvania’s LPS Coding Boot Camp, I specialize in
            adaptive problem-solving and delivering scalable solutions for
            businesses and individuals.
          </p>
          <ul className="about__highlights">
            <li>💻 Full Stack MERN Development</li>
            <li>🔧 IT Support & System Optimization</li>
            <li>⚡ Docker & Virtualization</li>
            <li>📚 Documentation-driven execution</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
