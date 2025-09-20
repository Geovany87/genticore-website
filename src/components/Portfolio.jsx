import React from "react";
import "../styles/portfolio.css";

function Portfolio() {
  const projects = [
    {
      title: "Business IT Support",
      description:
        "Configured networks and optimized systems for a small business in Philadelphia, ensuring operational continuity.",
      link: "#",
      thumbnail: "/src/assets/images/projects/it-support.png",
    },
    {
      title: "E-commerce Store (MERN)",
      description:
        "Developed a full-stack e-commerce site with secure checkout and responsive design.",
      link: "#",
      thumbnail: "/src/assets/images/projects/ecommerce.png",
    },
    {
      title: "Automation Scripts",
      description:
        "Created Dockerized automation scripts for client operations, reducing manual workload by 40%.",
      link: "#",
      thumbnail: "/src/assets/images/projects/automation.png",
    },
  ];

  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio-container">
        <h2>My Work</h2>
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div className="portfolio-card" key={index}>
              <img
                src={project.thumbnail}
                alt={project.title}
                className="portfolio-thumbnail"
              />
              <div className="portfolio-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} className="portfolio-btn">
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

export default Portfolio;
