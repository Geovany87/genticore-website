import React from "react";
import "../styles/portfolio.css";
import projectPlaceholder from "../assets/images/projects/portfolio-v1.png";

export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <p className="section__subtitle">
        A collection of recent projects showcasing clean design, modern
        development, and practical IT solutions.
      </p>

      <div className="portfolio__grid">
        {/* Project 1 */}
        <div className="portfolio__item">
          <div className="portfolio__image-wrapper">
            <img
              src={projectPlaceholder}
              alt="Project Preview"
              className="portfolio__image"
            />
          </div>

          <div className="portfolio__content">
            <h3>Project Title</h3>
            <p>
              A brief description of the project, highlighting technologies,
              functionality, and the problem it solves.
            </p>

            <div className="portfolio__tags">
              <span>React</span>
              <span>CSS</span>
              <span>Responsive</span>
            </div>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio__button"
            >
              View Project
            </a>
          </div>
        </div>

        {/* Future projects can be added here */}
      </div>
    </section>
  );
}
