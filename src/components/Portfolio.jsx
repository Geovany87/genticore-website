import React from "react";
import "../styles/portfolio.css";

export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <h2>Portfolio</h2>
        <p className="subtitle">
          Selected projects showcasing problem-solving, clean design, and full-stack implementation.
        </p>

        <div className="portfolio-grid">
          <div className="card">
            <img src="/src/assets/images/projects/ecommerce-dashboard.png" alt="E-commerce Dashboard" />
            <h3>E-commerce Dashboard</h3>
            <p>Full MERN app for inventory management and sales analytics.</p>
          </div>

          <div className="card">
            <img src="/src/assets/images/projects/restaurant-site.png" alt="Restaurant Website" />
            <h3>Restaurant Website</h3>
            <p>Responsive design with real-time table reservation system.</p>
          </div>

          <div className="card">
            <img src="/src/assets/images/projects/portfolio-v1.png" alt="Portfolio v1" />
            <h3>Portfolio v1</h3>
            <p>My first professional website — the foundation for this version.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
