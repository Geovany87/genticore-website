import React from "react";
import "../styles/about.css";

function About() {
  return (
    <section id="about" className="about">
      <div className="about_container">
        <h2 className="section_title">About Me</h2>
        <p className="about_text">
          I am a <strong>freelance full-stack developer</strong> passionate about
          building high-quality, scalable, and visually appealing web
          applications.  
          With expertise in the <strong>MERN stack</strong>, I focus on creating
          clean, efficient code and user-friendly experiences.
        </p>

        <h3 className="skills_title">Core Skills</h3>
        <ul className="about_skills">
          <li>React.js & Next.js</li>
          <li>Node.js & Express.js</li>
          <li>MongoDB & SQL</li>
          <li>REST APIs & GraphQL</li>
          <li>UI/UX & Responsive Design</li>
          <li>Version Control (Git & GitHub)</li>
        </ul>
      </div>
    </section>
  );
}

export default About;
