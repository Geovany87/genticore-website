import React from "react";
import "../styles/services.css";

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <h2>Services</h2>
        <p className="subtitle">Tailored solutions for individuals and small businesses.</p>

        <div className="service-grid">
          <div className="card">
            <h3>Web Development</h3>
            <p>Custom, responsive websites built with the MERN stack (MongoDB, Express, React, Node.js).</p>
          </div>

          <div className="card">
            <h3>Technical Support</h3>
            <p>PC repair, network setup, and IT troubleshooting with documentation-driven execution.</p>
          </div>

          <div className="card">
            <h3>Automation & Integrations</h3>
            <p>Streamlining workflows with APIs, Docker, and AI-assisted automation tools.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
