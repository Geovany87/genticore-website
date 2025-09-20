import React from "react";
import "../styles/services.css";

function Services() {
  const services = [
    {
      title: "IT Support & Hardware Repair",
      description:
        "PC building, OS installation, troubleshooting, and end-to-end IT support with documentation-driven workflows.",
      icon: "💻",
    },
    {
      title: "Full Stack Web Development",
      description:
        "Modern, responsive websites and apps built with the MERN stack (MongoDB, Express, React, Node.js).",
      icon: "🌐",
    },
    {
      title: "Automation & Technical Solutions",
      description:
        "Streamlined business processes with automation, Dockerized apps, and AI-assisted workflows.",
      icon: "⚡",
    },
  ];

  return (
    <section className="services" id="services">
      <div className="services-container">
        <h2>My Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
