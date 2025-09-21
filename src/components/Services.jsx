import React from "react";
import "../styles/services.css";

const Services = () => {
  const services = [
    {
      title: "IT Support",
      description:
        "Troubleshooting, hardware repair, and system optimization for individuals and small businesses.",
      icon: "🛠️",
    },
    {
      title: "Full Stack Development",
      description:
        "Building scalable web applications using the MERN stack (MongoDB, Express, React, Node.js).",
      icon: "💻",
    },
    {
      title: "Automation & Optimization",
      description:
        "Streamlining workflows with Docker, virtualization, and automation scripts.",
      icon: "⚡",
    },
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <h2>Services</h2>
        <div className="services__grid">
          {services.map((service, index) => (
            <div className="service__card" key={index}>
              <div className="service__icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
