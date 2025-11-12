import React from "react";
import "../styles/portfolio.css";
import projectImage from "../assets/images/projects/portfolio-v1.png";
import useReveal from "../hooks/useReveal";
useReveal();

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Modern e-commerce web app with React, Node.js, and Stripe integration.",
    img: projectImage,
    link: "#",
  },
  {
    title: "Portfolio Website",
    description: "Elegant and responsive personal website built with React & Vite.",
    img: projectImage,
    link: "#",
  },
  {
    title: "AI Chatbot Interface",
    description: "Conversational chatbot interface using OpenAI APIs and Tailwind CSS.",
    img: projectImage,
    link: "#",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <h2>My Projects</h2>
        <p className="intro">
          A selection of projects I’ve built to explore creativity and solve real-world problems.
        </p>

        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div className="portfolio-card" key={index}>
              <img src={project.img} alt={project.title} loading="lazy" />
              <div className="portfolio-overlay">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
