import React from "react";
import "../styles/about.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about_content">
          <div className="about_text">
            <p>
              I’m a full-stack MERN developer with strong expertise in building
              scalable, secure, and responsive applications. My focus is on
              delivering clean code, intuitive user experiences, and solutions
              that align with business goals.
            </p>
          </div>

          <div className="about_skills">
            <h3>Key Skills</h3>
            <ul>
              <li>React & Next.js</li>
              <li>Node.js & Express</li>
              <li>MongoDB & SQL</li>
              <li>REST & GraphQL APIs</li>
              <li>Responsive Design</li>
              <li>Git & DevOps Basics</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
