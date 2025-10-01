import React from "react";
import "../styles/portfolio.css";

const projects = [
  {
    title: "E-commerce Platform",
    description: "Fully functional online store with secure payments and modern design.",
    image: "/src/assets/images/projects/ecommerce-dashboard.png",
    link: "#",
    status: "completed",
  },
  {
    title: "Restaurant Website",
    description: "Custom website for online menu and reservations.",
    image: "/src/assets/images/projects/restaurant-site.png",
    link: "#",
    status: "completed",
  },
  {
    title: "CRM Tool",
    description: "In development — next-gen customer relationship management software.",
    image: "/src/assets/images/projects/placeholder.png",
    link: "#",
    status: "in-progress",
  },
  {
    title: "Mobile App",
    description: "In development — cross-platform mobile app for on-the-go services.",
    image: "/src/assets/images/projects/placeholder.png",
    link: "#",
    status: "in-progress",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio_container">
        <h2 className="section_title">Our Portfolio</h2>
        <div className="portfolio_grid">
          {projects.map((project, index) => (
            <div key={index} className={`portfolio_card ${project.status}`}>
              <img src={project.image} alt={project.title} className="portfolio_img" />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {project.status === "completed" ? (
                <a href={project.link} className="portfolio_link">View Project</a>
              ) : (
                <span className="portfolio_status">🚧 In Development</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
