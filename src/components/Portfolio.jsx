import React from "react";
import "../styles/portfolio.css";

const projects = [
  {
    title: "E-Commerce Dashboard",
    description: "Full-stack MERN app with inventory and order management.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    demo: "#",
    github: "#",
    image: "/src/assets/images/projects/ecommerce-dashboard.png",
  },
  {
    title: "Restaurant Website",
    description: "Responsive site with online ordering and reservations.",
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "#",
    github: "#",
    image: "/src/assets/images/projects/restaurant-site.png",
  },
  {
    title: "Portfolio v1",
    description: "Personal portfolio built with React and TailwindCSS.",
    tech: ["React", "TailwindCSS"],
    demo: "#",
    github: "#",
    image: "/src/assets/images/projects/portfolio-v1.png",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
      <h2>Portfolio</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              className="project-img"
            />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul className="tech-list">
              {project.tech.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
            <div className="project-links">
              <a href={project.demo} target="_blank" rel="noreferrer">
                Live Demo
              </a>
              <a href={project.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
