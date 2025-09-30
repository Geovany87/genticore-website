// src/pages/Portfolio.jsx
import React from "react";
import "../styles/portfolio.css";
import portfolioImg1 from "../assets/images/projects/portfolio-v1.png";
import restaurantImg from "../assets/images/projects/restaurant-site.png";

function Portfolio() {
  const projects = [
    {
      title: "Portfolio v1",
      description: "My first personal portfolio website showcasing my early projects.",
      image: portfolioImg1,
      link: "#",
    },
    {
      title: "Restaurant Website",
      description: "A modern responsive restaurant site with menu and reservations.",
      image: restaurantImg,
      link: "#",
    },
    {
      title: "Future Project",
      description: "This project is currently in development. Stay tuned!",
      image: null, // no image yet
      link: null,
      placeholder: true,
    },
  ];

  return (
    <section id="portfolio" className="portfolio">
      <h2>My Portfolio</h2>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div
            className={`portfolio-card ${project.placeholder ? "placeholder" : ""}`}
            key={index}
          >
            {project.image ? (
              <img src={project.image} alt={project.title} />
            ) : (
              <div className="placeholder-image">In Development</div>
            )}
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
