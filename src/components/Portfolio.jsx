import React from "react";
import "../styles/portfolio.css";

export default function Portfolio() {
  const projects = [
    {
      title: "E-Commerce Dashboard",
      description: "Full-stack MERN application for managing inventory and sales analytics.",
      status: "Completed",
      image: "/src/assets/images/projects/ecommerce-dashboard.png",
      link: "#",
    },
    {
      title: "Restaurant Website",
      description: "Responsive landing page with online menu and booking system.",
      status: "Completed",
      image: "/src/assets/images/projects/restaurant-site.png",
      link: "#",
    },
    {
      title: "Portfolio v1",
      description: "Personal developer portfolio built with React and styled-components.",
      status: "Completed",
      image: "/src/assets/images/projects/portfolio-v1.png",
      link: "#",
    },
    {
      title: "Upcoming Projects",
      description: "Exciting projects in development — stay tuned!",
      status: "In Development",
      image: "",
      link: "#",
    },
  ];

  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio__container">
        <h2>Portfolio</h2>
        <p className="portfolio__intro">
          A collection of recent freelance and personal projects showcasing my skills in
          web development, IT support, and digital solutions.
        </p>

        <div className="portfolio__grid">
          {projects.map((project, index) => (
            <div className="portfolio__card" key={index}>
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="portfolio__image"
                />
              ) : (
                <div className="portfolio__placeholder">🚧 {project.status}</div>
              )}
              <div className="portfolio__content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                  >
                    View Project
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
