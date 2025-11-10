// src/pages/About.jsx
import React from 'react';
import '../styles/about.css';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          I’m a CompTIA A+ Certified technician and MERN stack developer based in Philadelphia. With
          hands-on experience supporting local clients, I bridge hardware expertise and software
          development to deliver complete technology solutions.
        </p>
        <p>
          My workflow emphasizes documentation, research, and AI-assisted problem-solving — a system
          that enables me to adapt quickly, solve challenges efficiently, and deliver results that
          last.
        </p>
        <ul className="skills-list">
          <li>⚙️ Hardware & OS Configuration</li>
          <li>💻 Full Stack JavaScript (MERN)</li>
          <li>🧠 Adaptive AI Workflows</li>
          <li>🔒 Secure System Optimization</li>
        </ul>
      </div>
    </section>
  );
}
