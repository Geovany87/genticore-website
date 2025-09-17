import React from "react";
import "../styles/about.css";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container about__content">
        <h2 className="section-title">About Me</h2>
        <p className="about__text">
          I am a freelance IT Support Specialist and Full Stack Developer with
          over 7 years of experience. I help individuals, small teams, and
          businesses stay connected, secure, and efficient through modern web
          development and adaptive technical solutions.
        </p>
        <ul className="about__skills">
          <li>💻 IT Support & Troubleshooting</li>
          <li>⚡ AI-Assisted Workflows</li>
          <li>🌐 Web & App Development (MERN)</li>
          <li>🔒 Secure Configurations & Best Practices</li>
        </ul>
      </div>
    </section>
  );
}
