// src/pages/Portfolio.jsx
import React from "react";
import "../styles/portfolio.css";

export default function Portfolio() {
  const projects = [
    {
      title: "E-commerce Dashboard (In Progress)",
      description:
        "MERN stack dashboard for managing inventory, orders, and sales analytics. Currently under development.",
    },
    {
      title: "Restaurant Website (Completed)",
      description:
        "Responsive site for local business — online menu, booking system, and contact integration.",
    },
    {
      title: "Personal Portfolio (Ongoing)",
      description:
        "Showcasing IT support work, automation scripts, and full stack projects with clean UI design.",
    },
  ];

  return (
    <section id="portfolio" className="portfolio-section">
      <h2>Portfolio</h2>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div className="portfolio-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <span className="tag">In Development</span>
          </div>
        ))}
      </div>
    </section>
  );
}
