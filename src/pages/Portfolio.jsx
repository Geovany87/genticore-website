import React from 'react';
import '../styles/portfolio.css';

export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        <h2>Portfolio</h2>
        <p>Projects currently in development — stay tuned for updates!</p>
        <div className="portfolio-placeholder">
          <div className="card">
            <h3>Project 1</h3>
            <p>Coming soon...</p>
          </div>
          <div className="card">
            <h3>Project 2</h3>
            <p>In development</p>
          </div>
        </div>
      </div>
    </section>
  );
}
