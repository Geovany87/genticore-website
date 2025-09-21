import React from "react";
import "../styles/portfolio.css";

const Portfolio = () => {
  const projects = [
    {
      title: "Project One",
      description:
        "Full-stack MERN application showcasing API integration and authentication.",
      status: "Completed",
    },
    {
      title: "Project Two",
      description:
        "Responsive IT support landing page built with React and styled-components.",
      status: "Completed",
    },
    {
      title: "Upcoming Project",
      description: "🚧 This project is currently in development. Stay tuned!",
      status: "In Development",
    },
  ];

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <h2>Portfolio</h2>
        <div className="portfolio__grid">
          {projects.map((project, index) => (
            <div className="portfolio__card" key={index}>
              <div className="portfolio__placeholder">
                {project.status === "In Development" ? "🚧" : "📂"}
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {project.status === "In Development" && (
                <span className="portfolio__badge">In Development</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
