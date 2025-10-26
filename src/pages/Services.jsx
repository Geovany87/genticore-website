// src/pages/Services.jsx
import React from "react";
import "../styles/services.css";

export default function Services() {
  const services = [
    {
      title: "Full Stack Web Development",
      description:
        "Building responsive, high-performance MERN stack web apps — from prototypes to production.",
      icon: "💻",
    },
    {
      title: "IT Support & Maintenance",
      description:
        "Hardware repair, system optimization, OS setup, and network troubleshooting for individuals and small teams.",
      icon: "🧰",
    },
    {
      title: "Automation & DevOps",
      description:
        "Automating workflows, Docker containerization, and CI/CD pipelines that keep your systems efficient.",
      icon: "⚙️",
    },
  ];

  return (
    <section id="services" className="services-section">
      <h2>Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <span className="service-icon">{service.icon}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
