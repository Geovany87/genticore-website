import React from "react";
import "../styles/portfolio.css";

function Portfolio() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A scalable MERN-based e-commerce app with shopping cart, payments, and admin dashboard.",
      status: "Completed",
    },
    {
      title: "Business Dashboard",
      description: "Data visualization dashboard with interactive charts and role-based authentication.",
      status: "Completed",
    },
    {
      title: "Portfolio Website",
      description: "This very site – built with modern design principles and responsive layouts.",
      status: "Completed",
    },
    {
      title: "SaaS Platform",
      description: "Project in development – SaaS solution for workflow automation.",
      status: "In Development",
    },
    {
      title: "AI Chatbot",
      description: "Project in development – conversational AI bot with NLP integrations.",
      status: "In Development",
    },
  ];

  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio_container">
        <h2 className="section_title">Portfolio</h2>
        <div className="portfolio_grid">
          {projects.map((project, index) => (
            <div key={index} className={`portfolio_card ${project.status === "In Development" ? "placeholder" : ""}`}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <span className={`status ${project.status === "In Development" ? "in-dev" : "completed"}`}>
                {project.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
